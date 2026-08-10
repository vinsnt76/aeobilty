import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

import { crawlUrl } from '../src/lib/telemetry/crawl';
import { fetchCompetitorsViaSearch } from '../src/lib/telemetry/search';
import { computeProximity } from '../src/lib/telemetry/proximity';
import { runSimulation } from '../src/lib/telemetry/rag-sim';
import { extractEntityGraph } from '../src/lib/telemetry/graph';
import { validateGraphWithWikidata } from '../src/lib/telemetry/wikidata';
import { extractFeatures } from '../src/lib/telemetry/features';
import { calculateReadinessScore } from '../src/lib/telemetry/scoring';
import { generateInsightEngineResult } from '../src/lib/telemetry/insight-engine';

async function testFullTelemetry() {
  const url = 'https://aeobility.com.au';
  const intent = 'AEO consultant perth';

  console.log(`Starting test telemetry scan for url="${url}", intent="${intent}"...`);

  try {
    console.log('1. Crawling...');
    const clientCrawl = await crawlUrl(url);
    console.log('Client crawl success. Text length:', clientCrawl.textContent.length);

    console.log('2. Fetching competitors...');
    const competitorUrls = await fetchCompetitorsViaSearch(intent);
    console.log('Competitor URLs:', competitorUrls);

    console.log('3. Crawling competitors...');
    const compCrawls = await Promise.all(competitorUrls.map(cUrl => crawlUrl(cUrl)));
    const compTexts = compCrawls.map(c => c.textContent);

    console.log('4. Computing proximity, simulations, graph...');
    const [proximityNodes, simulations, triples] = await Promise.all([
      computeProximity(intent, clientCrawl.textContent, compTexts),
      runSimulation(intent, clientCrawl.textContent),
      extractEntityGraph(clientCrawl.textContent)
    ]);

    console.log('Proximity nodes:', proximityNodes.length);
    console.log('Simulations:', simulations.length);
    console.log('Triples:', triples.length);

    console.log('5. Validating graph...');
    const entityConfidence = await validateGraphWithWikidata(triples);

    console.log('6. Extracting features...');
    const clientNode = proximityNodes.find(n => n.label === 'Client');
    const compNodes = proximityNodes.filter(n => n.label.startsWith('Competitor'));
    const engineeredFeatures = extractFeatures(clientNode, compNodes, clientCrawl, compCrawls, entityConfidence);

    console.log('7. Calculating score...');
    const { readinessScore, explanations } = calculateReadinessScore(
      proximityNodes,
      simulations,
      triples,
      entityConfidence,
      clientCrawl,
      undefined,
      engineeredFeatures
    );
    console.log('Readiness score:', readinessScore);

    console.log('8. Generating insight engine result...');
    const result = {
      clientUrl: url,
      proximityScore: Math.round((clientNode?.similarity || 0) * 100),
      nodes: proximityNodes,
      triples,
      simulations,
      readinessScore,
      explanations,
      engineeredFeatures,
      crawlQuality: clientCrawl.crawlQuality
    };

    const insightResult = await generateInsightEngineResult(intent, result as any, clientCrawl.textContent);
    console.log('Insight result verdict:', insightResult.verdict);
    console.log('✅ Full Telemetry Diagnostic Test Passed Successfully!');
  } catch (err) {
    console.error('❌ Telemetry scan error:', err);
  }
}

testFullTelemetry();
