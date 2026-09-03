import { TelemetryResult, InsightEngineResult } from './types';
import { VERDICT_THRESHOLDS, SCORE_CONSTANTS } from './config';

export async function generateInsightEngineResult(
  intent: string,
  telemetry: TelemetryResult,
  clientText: string
): Promise<InsightEngineResult> {
  const apiKey = process.env.GEMINI_API_KEY;

  // Extract clean site/domain label
  let domainLabel = 'your website';
  const siteUrl = telemetry.clientUrl || '';
  if (siteUrl) {
    try {
      const parsed = new URL(siteUrl.startsWith('http') ? siteUrl : `https://${siteUrl}`);
      domainLabel = parsed.hostname.replace('www.', '');
    } catch {
      domainLabel = siteUrl;
    }
  }

  // 1. Calculate Confidences Heuristically
  let mConfScore = 95;
  const mConfReasons: string[] = [];

  if (telemetry.crawlQuality?.score && telemetry.crawlQuality.score > 60) {
    mConfReasons.push("We successfully crawled the site.");
  } else {
    mConfScore -= 25;
    mConfReasons.push("Limited page content was accessible.");
  }
  if (telemetry.schemaValidation?.hasValidSchema) {
    mConfReasons.push("Structured data detected.");
  } else {
    mConfScore -= 15;
    mConfReasons.push("No structured data found.");
  }

  let rConfScore = 85;
  const rConfReasons: string[] = [];
  if (telemetry.nodes && telemetry.nodes.length > 2) {
    rConfReasons.push("Solid competitor benchmark established.");
  } else {
    rConfScore -= 20;
    rConfReasons.push("Competitor data was limited.");
  }
  if (telemetry.triples && telemetry.triples.length > 5) {
    rConfReasons.push("High entity extraction volume.");
  } else {
    rConfScore -= 25;
    rConfReasons.push("Weak semantic entity density.");
  }

  // Cap scores
  mConfScore = Math.max(10, Math.min(99, mConfScore));
  rConfScore = Math.max(10, Math.min(99, rConfScore));

  const verdictRank = telemetry.readinessScore > VERDICT_THRESHOLDS.READINESS_HIGH_VISIBILITY_THRESHOLD ? 'Highly Visible' : 
                      telemetry.readinessScore > VERDICT_THRESHOLDS.READINESS_VISIBLE_THRESHOLD ? 'Visible' : 
                      telemetry.readinessScore > VERDICT_THRESHOLDS.READINESS_GROWING_THRESHOLD ? 'Growing' : 
                      telemetry.readinessScore > VERDICT_THRESHOLDS.READINESS_LIMITED_THRESHOLD ? 'Limited' : 'At Risk';

  // Dynamic Blind Spot Precedence Cascade (Level 1: Proximity < 45 -> Level 2: Schema missing -> Level 3: Dominance < 40 -> Level 4: Default)
  let blindSpotTitle = "Vague Value Proposition";
  let blindSpotDesc = `AI understands your general category on ${domainLabel}, but lacks strong evidence of why customers choose you over competitors for "${intent}".`;

  if (telemetry.proximityScore < VERDICT_THRESHOLDS.PROXIMITY_CRITICAL_DROP_THRESHOLD) {
    blindSpotTitle = "Intent Misalignment";
    blindSpotDesc = `AI indexes content on ${domainLabel}, but fails to strongly associate your page content with semantic queries for "${intent}".`;
  } else if (!telemetry.schemaValidation?.hasValidSchema) {
    blindSpotTitle = "Missing Schema Entity Graph";
    blindSpotDesc = `AI crawlers cannot parse machine-readable JSON-LD Schema definitions on ${domainLabel}, reducing structured graph confidence.`;
  } else if (telemetry.engineeredFeatures?.semanticDominance && telemetry.engineeredFeatures.semanticDominance < VERDICT_THRESHOLDS.DOMINANCE_DEFICIT_THRESHOLD) {
    blindSpotTitle = "Low Semantic Entity Density";
    blindSpotDesc = `Competitor sites display denser, entity-rich subject-predicate triples for "${intent}" than ${domainLabel}.`;
  }

  const topEntities = telemetry.triples?.slice(0, 3).map(t => `${t.subject} ${t.predicate} ${t.object}`).join('; ');

  // Dynamic 100% data-driven fallback tailoring
  const dynamicFallback: InsightEngineResult = {
    verdict: verdictRank,
    measurementConfidence: { score: mConfScore, reasons: mConfReasons },
    recommendationConfidence: { score: rConfScore, reasons: rConfReasons },
    firstImpression: {
      headline: `If I only had ten seconds to understand ${domainLabel}... I'd say you focus on "${intent}".`,
      reasoning: [
        `AI detects general category alignment for "${intent}" on ${domainLabel}.`,
        topEntities ? `Extracted key entity signals: ${topEntities}.` : `Limited structured entity density detected during crawl.`
      ]
    },
    blindSpot: {
      title: blindSpotTitle,
      description: blindSpotDesc
    },
    diagnosis: {
      currentState: `AI currently recognises ${domainLabel} as an active participant in the ${intent} space (Readiness: ${telemetry.readinessScore}/100).`,
      desiredState: `AI recommends ${domainLabel} whenever users search for top solutions for ${intent}.`,
      gap: telemetry.proximityScore < 50 
        ? `Proximity score is currently ${telemetry.proximityScore}%. Content lacks entity-rich authority signals required to outrank top competitors.`
        : `Semantic authority gap detected. Page structure prioritises operational details over clear value proposition schemas.`
    },
    summary: {
      problem: `AI struggles to confidently recommend ${domainLabel} for high-intent commercial queries regarding "${intent}".`,
      opportunity: `Structuring content with explicit Schema.org graphs and problem-solution entity anchors.`,
      nextAction: `Deploy the $995 AUD 90-Day AI Blueprint to restructure ${domainLabel}'s semantic entity lattice.`
    },
    recommendationTest: {
      wouldRecommend: telemetry.readinessScore > VERDICT_THRESHOLDS.READINESS_RECOMMENDATION_THRESHOLD,
      verdict: telemetry.readinessScore > VERDICT_THRESHOLDS.READINESS_RECOMMENDATION_THRESHOLD ? "Yes, for core intent." : telemetry.readinessScore > VERDICT_THRESHOLDS.READINESS_GROWING_THRESHOLD ? "Only for niche queries." : "Today? Probably not.",
      reasoning: telemetry.readinessScore > VERDICT_THRESHOLDS.READINESS_RECOMMENDATION_THRESHOLD 
        ? `${domainLabel} provides solid structural signals for "${intent}".` 
        : `Although AI understands your category, ${domainLabel} does not yet present sufficient structured evidence to be cited as the leading authority.`
    },
    actionPlan: [
      {
        step: 1,
        title: telemetry.schemaValidation?.hasValidSchema
          ? `Anchor & Interlink Schema Nodes for "${intent}"`
          : `Deploy Schema Graph & Wikidata sameAs for "${intent}"`,
        description: telemetry.schemaValidation?.hasValidSchema
          ? `Inject nested LocalBusiness and serviceArea schema definitions on ${domainLabel} linked to verified Wikidata sameAs category entities.`
          : `Deploy structured Schema.org/LocalBusiness markup on ${domainLabel} with nested serviceArea and Wikidata sameAs entity anchors for ${intent}.`,
        codeChip: telemetry.schemaValidation?.hasValidSchema ? 'Schema.org/serviceArea' : 'Schema.org/LocalBusiness'
      },
      {
        step: 2,
        title: `Strengthen Commercial Topic Coverage for "${intent}"`,
        description: `Deploy structured comparison, FAQ, and service breakdown pages on ${domainLabel} answering the specific questions Australian customers ask about ${intent}.`
      },
      {
        step: 3,
        title: `Expand Query-to-Passage Context Chunking`,
        description: `Restructure core ${intent} sections on ${domainLabel} with high-density 150-character direct answer blocks positioned under H2/H3 tags to survive RAG extraction.`
      },
      {
        step: 4,
        title: `Execute 10-Day Implementation Roadmap`,
        description: `Use the 10-Day AEObility Blueprint to resolve the "${blindSpotTitle}" gap on ${domainLabel} and lock in top AI search recommendations.`
      }
    ]
  };

  if (!apiKey) return dynamicFallback;

  // 2. Build Engineered Context
  const strengths: string[] = [];
  const weaknesses: string[] = [];
  const competitorGap: string[] = [];

  const topTriples = telemetry.triples?.slice(0, 5).map(t => `${t.subject} ${t.predicate} ${t.object}`) || [];
  
  if (telemetry.proximityScore > 60) {
    strengths.push(`AI aligns ${domainLabel} strongly with the target intent: "${intent}".`);
  } else {
    weaknesses.push(`AI does not strongly associate ${domainLabel} with the target intent: "${intent}".`);
  }

  if (telemetry.performance && telemetry.performance.coreWebVitalsScore > 70) {
    strengths.push("Website structure is technically healthy and easily readable by AI.");
  }

  if (telemetry.engineeredFeatures?.semanticDominance && telemetry.engineeredFeatures.semanticDominance < SCORE_CONSTANTS.DOMINANCE_NEUTRAL_MIDPOINT) {
    competitorGap.push("Competitors have significantly more semantic authority for this intent.");
  } else {
    competitorGap.push("You are holding strong semantic ground against competitors.");
  }

  const engineeredContext = {
    targetDomain: domainLabel,
    businessContext: `Analysing website ${domainLabel} for intent: "${intent}"`,
    readinessScore: telemetry.readinessScore,
    proximityScore: telemetry.proximityScore,
    crawledTextSnippet: clientText ? clientText.slice(0, 400) : '',
    topIdentifiedEntities: topTriples,
    strengths,
    weaknesses,
    competitorGap
  };

  // 3. Generate Insight via LLM
  try {
    const prompt = `You are the AEObility Insight Engine. Your job is to translate pre-computed feature flags about ${domainLabel} into a highly structured strategic summary and dynamic priority action plan for the intent: "${intent}".

    Engineered Context:
    ${JSON.stringify(engineeredContext, null, 2)}

    Your task is to generate a JSON response STRICTLY adhering to this schema:
    {
      "firstImpression": {
        "headline": "A single sentence starting with 'If I only had ten seconds to understand ${domainLabel}... I'd say [Business] is a [Core Value].'",
        "reasoning": ["A specific observation about ${domainLabel}", "Another observation"]
      },
      "blindSpot": {
        "title": "The biggest AI blind spot for ${domainLabel}",
        "description": "A 1-2 sentence explanation of what AI is missing."
      },
      "diagnosis": {
        "currentState": "What AI currently thinks of ${domainLabel}",
        "desiredState": "What you want AI to think of ${domainLabel}",
        "gap": "The structural gap on ${domainLabel}"
      },
      "summary": {
        "problem": "The core problem.",
        "opportunity": "The biggest opportunity.",
        "nextAction": "The immediate next action."
      },
      "recommendationTest": {
        "wouldRecommend": false,
        "verdict": "Conversational verdict (e.g. 'Today? Probably not.', 'Yes, absolutely.', 'Only for niche queries.')",
        "reasoning": "A 2-3 sentence explanation of why."
      },
      "actionPlan": [
        {
          "step": 1,
          "title": "Action title 1 specific to ${domainLabel} and ${intent}",
          "description": "Concrete 1-2 sentence implementation action explaining what to fix.",
          "codeChip": "LocalBusiness"
        },
        {
          "step": 2,
          "title": "Action title 2 specific to ${domainLabel} and ${intent}",
          "description": "Concrete 1-2 sentence implementation action for Australian customers."
        },
        {
          "step": 3,
          "title": "Action title 3 specific to ${domainLabel} and ${intent}",
          "description": "Concrete 1-2 sentence passage chunking/RAG action."
        },
        {
          "step": 4,
          "title": "Execute 10-Day Implementation Roadmap",
          "description": "How the 10-Day AEObility Blueprint prioritises and resolves ${domainLabel}'s high-impact gaps."
        }
      ]
    }

    Respond ONLY with valid JSON. No markdown tags.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.7-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(7000),
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: 'application/json' }
        })
      }
    );

    if (response.ok) {
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        const parsed = JSON.parse(text.replace(/```json/g, '').replace(/```/g, ''));
        return {
          verdict: verdictRank,
          measurementConfidence: { score: mConfScore, reasons: mConfReasons },
          recommendationConfidence: { score: rConfScore, reasons: rConfReasons },
          ...parsed
        };
      }
    }
  } catch (err) {
    console.error('Failed to generate insight engine result:', err);
  }

  return dynamicFallback;
}
