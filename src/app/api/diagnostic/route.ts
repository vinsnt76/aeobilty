import { NextRequest, NextResponse } from 'next/server';
import { computeProximity } from '@/lib/telemetry/proximity';
import { runSimulation } from '@/lib/telemetry/rag-sim';
import { extractEntityGraph } from '@/lib/telemetry/graph';
import { fetchCompetitorsViaSearch } from '@/lib/telemetry/search';
import { crawlUrl } from '@/lib/telemetry/crawl';
import { fetchPerformanceMetrics } from '@/lib/telemetry/technical';
import { validateGraphWithWikidata } from '@/lib/telemetry/wikidata';
import { TelemetryResult } from '@/lib/telemetry/types';
import { calculateReadinessScore } from '@/lib/telemetry/scoring';
import { getTelemetryCache, setTelemetryCache } from '@/lib/telemetry/cache';
import { extractFeatures } from '@/lib/telemetry/features';
import { generateInsightEngineResult } from '@/lib/telemetry/insight-engine';

// Allow maximum duration (60s on Vercel Hobby) for telemetry processing
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { intent, url, clientText: fallbackText } = body;

    if (!intent || (!url && !fallbackText)) {
      return NextResponse.json(
        { error: 'Missing core parameters: "intent" and either "url" or "clientText" are required.' },
        { status: 400 }
      );
    }

    // 0. Check Caching Layer (V3 Version Aware)
    const cachedResult = await getTelemetryCache(url || '', intent);
    if (cachedResult) {
      return NextResponse.json(cachedResult);
    }

    // 1. Kick off Stage 1: Crawl Client, Tech SEO, and find competitors via abstractions
    const [clientCrawl, performance, competitorUrls] = await Promise.all([
      url ? crawlUrl(url) : Promise.resolve({ textContent: fallbackText, technicalSEO: undefined, schemaValidation: undefined, crawlQuality: { score: 0, method: 'Fallback' as const, hydrationRequired: false } }),
      url ? fetchPerformanceMetrics(url) : Promise.resolve(undefined),
      fetchCompetitorsViaSearch(intent)
    ]);

    const clientText = clientCrawl.textContent;

    // 2. Kick off Stage 2: Semantic Analysis & Competitor Crawling
    const compCrawls = await Promise.all(competitorUrls.map(cUrl => crawlUrl(cUrl)));
    const compTexts = compCrawls.map(c => c.textContent);
    
    const [proximityNodes, simulations, triples] = await Promise.all([
      computeProximity(intent, clientText, compTexts),
      runSimulation(intent, clientText),
      extractEntityGraph(clientText)
    ]);

    // 3. Kick off Stage 3: Knowledge Graph Validation (Entity Classification)
    const entityConfidence = await validateGraphWithWikidata(triples);

    // 4. Feature Engineering Layer
    const clientNode = proximityNodes.find(n => n.label === 'Client');
    const compNodes = proximityNodes.filter(n => n.label.startsWith('Competitor'));
    const engineeredFeatures = extractFeatures(clientNode, compNodes, clientCrawl, compCrawls, entityConfidence);

    // 5. Configurable Scoring Engine
    const { readinessScore, explanations } = calculateReadinessScore(
      proximityNodes,
      simulations,
      triples,
      entityConfidence,
      clientCrawl,
      performance,
      engineeredFeatures
    );

    const result: TelemetryResult = {
      clientUrl: url,
      proximityScore: Math.round((clientNode?.similarity || 0) * 100),
      nodes: proximityNodes,
      triples,
      simulations,
      readinessScore,
      explanations,
      technicalSEO: clientCrawl.technicalSEO,
      schemaValidation: clientCrawl.schemaValidation,
      performance,
      entityConfidence,
      engineeredFeatures,
      crawlQuality: clientCrawl.crawlQuality
    };

    // 6. Generate Insight Engine Result
    result.insightResult = await generateInsightEngineResult(intent, result, clientText);

    // Save to Cache
    await setTelemetryCache(url || '', intent, result);

    return NextResponse.json(result);
  } catch (error: unknown) {
    console.error('Telemetry run error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error running telemetry.', stack: error instanceof Error ? error.stack : undefined },
      { status: 500 }
    );
  }
}
