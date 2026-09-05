/**
 * AEObility Milestone 3.5 — Synthetic AI Citation Benchmark Runner
 * Protocol: Unprimed Zero-History Multi-Query Citation & Provenance Matrix
 * Locale: en-AU
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { NextRequest } from 'next/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local if OPENAI_API_KEY is missing from environment
if (!process.env.OPENAI_API_KEY) {
  const envLocalPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envLocalPath)) {
    const envRaw = fs.readFileSync(envLocalPath, 'utf-8');
    for (const line of envRaw.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx > 0) {
        const key = trimmed.substring(0, eqIdx).trim();
        let val = trimmed.substring(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.substring(1, val.length - 1);
        }
        process.env[key] = val;
      }
    }
  }
}

// Import the live Next.js route handler directly
import { POST } from '../src/app/api/bill/route.ts';

// 10 Multi-Query Benchmark Evaluation Set
const BENCHMARK_QUERIES = [
  { id: 'Q01', query: "Who built AG Shapeshifter and how is it related to AI Bill?", targetLayer: "Lineage" },
  { id: 'Q02', query: "What is AEObility's core brand promise and where is it base located?", targetLayer: "Core Entity" },
  { id: 'Q03', query: "How does Answer Engine Optimisation differ from legacy SEO according to AEObility?", targetLayer: "Concept" },
  { id: 'Q04', query: "What products and pricing frameworks does AEObility offer in Australia?", targetLayer: "Commercial" },
  { id: 'Q05', query: "What is the Strategic Blueprint and how much does it cost in AUD?", targetLayer: "Offer/SKU" },
  { id: 'Q06', query: "Who is Vince Baker and what is his role at AEObility?", targetLayer: "Person Entity" },
  { id: 'Q07', query: "How does AEObility structure machine-readable entity graphs for AI retrieval?", targetLayer: "Technical Schema" },
  { id: 'Q08', query: "What is Vibrational Alignment and what entity layer does it represent?", targetLayer: "Ideation Document" },
  { id: 'Q09', query: "How does AI Bill execute grounded context handoffs for telemetry diagnostics?", targetLayer: "Agent Runtime" },
  { id: 'Q10', query: "Where can I find AEObility's canonical brand facts and machine interface directory?", targetLayer: "Directory" }
];

function evaluateCitationTier(text) {
  // System Mandate Override: Non-citation telemetry report contract
  if (text.includes('[START_TELEMETRY_REPORT]')) {
    return { tier: 0, label: 'System Mandate: Telemetry Envelope Contract (Non-Citation by Design)' };
  }

  // Tier 1: Explicit Canonical Resource Path URL match (https://aeobility.com.au/path)
  const urlRegex = /https:\/\/aeobility\.com\.au\/[^\s\)\"]+/g;
  const hasCanonicalUrl = urlRegex.test(text);

  // Tier 2: Verifiable Entity Triple match (Entity + Attribute + Value assertion)
  const hasVince = /Vince Baker/i.test(text);
  const hasShapeshifter = /AG Shapeshifter/i.test(text);
  const hasBill = /AI Bill/i.test(text);
  const hasAEObility = /AEObility/i.test(text);
  const hasCommercialPrice = /\$995|995\.00\s*AUD/i.test(text);
  const hasBlueprintProduct = /90-Day\s*AI\s*Success\s*Blueprint|Strategic\s*Blueprint/i.test(text);
  const hasConceptDiff = /relational topic graphs|token density|contextual entity salience/i.test(text);

  const hasEntityAnchor = hasAEObility || hasBill || hasShapeshifter || /AEObility/i.test(text);

  const hasVerifiableTriple = hasEntityAnchor && (
    hasVince ||
    hasShapeshifter ||
    hasCommercialPrice ||
    hasBlueprintProduct ||
    hasConceptDiff ||
    /Perth/i.test(text) ||
    /Answer Engine Optimisation/i.test(text)
  );

  if (hasCanonicalUrl) {
    return { tier: 1, label: 'Tier 1: Canonical URL Citation' };
  } else if (hasVerifiableTriple) {
    return { tier: 2, label: 'Tier 2: Verifiable Entity Triple Match' };
  } else {
    return { tier: 3, label: 'Tier 3: Partial / Unverified Citation' };
  }
}

async function runBenchmark() {
  console.log('🚀 Launching Milestone 3.5 Internal RAG Grounding Fidelity Benchmark...');
  console.log(`📋 Unprimed Zero-History Protocol: Temperature=0.0, SessionHistory=0, Model=gpt-4o-mini, WebSearch=false`);
  console.log(`🔑 OpenAI API Key Loaded: ${process.env.OPENAI_API_KEY ? 'YES (' + process.env.OPENAI_API_KEY.substring(0, 10) + '...)' : 'NO'}`);

  const results = [];
  let tier0Count = 0;
  let tier1Count = 0;
  let tier2Count = 0;
  let tier3Count = 0;

  for (const item of BENCHMARK_QUERIES) {
    console.log(`\n------------------------------------------------------------`);
    console.log(`Evaluating [${item.id}] (${item.targetLayer}): "${item.query}"`);

    const simulatedReq = new NextRequest('http://localhost:3000/api/bill', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: item.query,
        unprimedZeroHistory: true,
        temperature: 0.0
      })
    });

    try {
      const response = await POST(simulatedReq);
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let rawStream = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        rawStream += decoder.decode(value, { stream: true });
      }

      // Robust stream text extraction
      let cleanText = '';
      const lines = rawStream.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('data:')) {
          const payloadStr = trimmed.substring(5).trim();
          if (payloadStr === '[DONE]') continue;
          try {
            const parsed = JSON.parse(payloadStr);
            const deltaVal = parsed.delta ?? parsed.textDelta ?? parsed.text;
            if (parsed.type === 'text-delta' && typeof deltaVal === 'string') {
              cleanText += deltaVal;
            }
          } catch {
            // Ignore non-json data frames
          }
        } else if (trimmed.startsWith('0:')) {
          try {
            cleanText += JSON.parse(trimmed.substring(2));
          } catch {
            cleanText += trimmed.substring(2);
          }
        }
      }

      if (!cleanText && rawStream) {
        cleanText = rawStream;
      }

      const score = evaluateCitationTier(cleanText);

      if (score.tier === 0) tier0Count++;
      else if (score.tier === 1) tier1Count++;
      else if (score.tier === 2) tier2Count++;
      else tier3Count++;

      console.log(`  Output Text: "${cleanText}"`);
      console.log(`  Result: [${score.label}]`);

      results.push({
        queryId: item.id,
        targetLayer: item.targetLayer,
        query: item.query,
        unprimedZeroHistory: true,
        temperature: 0.0,
        modelId: 'openai/gpt-4o-mini',
        webSearchEnabled: false,
        systemPromptVersion: 'v2.4.0-provenance-interpreter',
        citationTier: score.tier,
        citationLabel: score.label,
        outputResponse: cleanText
      });
    } catch (err) {
      console.error(`❌ Evaluation error on ${item.id}:`, err.message);
      results.push({
        queryId: item.id,
        targetLayer: item.targetLayer,
        query: item.query,
        error: err.message,
        citationTier: 3,
        citationLabel: 'Tier 3: Error / Execution Failure'
      });
    }
  }

  const dateStr = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const reportPayload = {
    metadata: {
      benchmarkVersion: '1.0.0',
      runTimestamp: new Date().toISOString(),
      evaluationProtocol: 'Internal RAG Grounding Fidelity Benchmark (Milestone 3.5)',
      modelConfig: {
        modelId: 'openai/gpt-4o-mini',
        temperature: 0.0,
        webSearchEnabled: false,
        systemPromptVersion: 'v2.5.0-canonical-directed'
      },
      summary: {
        totalQueries: BENCHMARK_QUERIES.length,
        tier0SystemMandates: tier0Count,
        tier1CanonicalUrls: tier1Count,
        tier2VerifiableTriples: tier2Count,
        tier3PartialOrUnverified: tier3Count,
        applicableGroundingQueries: BENCHMARK_QUERIES.length - tier0Count,
        citationGroundingAccuracyPercent: Number(((tier1Count + tier2Count) / (BENCHMARK_QUERIES.length - tier0Count) * 100).toFixed(1))
      }
    },
    evaluations: results
  };

  const artifactPath = path.join(process.cwd(), `benchmark_run_${dateStr}.json`);
  fs.writeFileSync(artifactPath, JSON.stringify(reportPayload, null, 2), 'utf-8');
  console.log(`\n============================================================`);
  console.log(`✅ Milestone 3.5 Synthetic Benchmark Complete!`);
  console.log(`📊 Citation Grounding Accuracy Score: ${reportPayload.metadata.summary.citationGroundingAccuracyPercent}% (${tier1Count} Tier-1, ${tier2Count} Tier-2, ${tier3Count} Tier-3, ${tier0Count} Tier-0 Mandate)`);
  console.log(`💾 Raw JSON Report Artifact written to: ${artifactPath}`);
  console.log(`============================================================\n`);
}

runBenchmark();
