import { TelemetryResult, InsightEngineResult } from './types';

export async function generateInsightEngineResult(
  intent: string,
  telemetry: TelemetryResult,
  clientText: string
): Promise<InsightEngineResult> {
  const apiKey = process.env.GEMINI_API_KEY;

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

  const verdictRank = telemetry.readinessScore > 85 ? 'Highly Visible' : 
                      telemetry.readinessScore > 65 ? 'Visible' : 
                      telemetry.readinessScore > 45 ? 'Growing' : 
                      telemetry.readinessScore > 25 ? 'Limited' : 'At Risk';

  // Fallback if no API key
  const fallback: InsightEngineResult = {
    verdict: verdictRank,
    measurementConfidence: { score: mConfScore, reasons: mConfReasons },
    recommendationConfidence: { score: rConfScore, reasons: rConfReasons },
    firstImpression: {
      headline: `If I only had ten seconds to understand this business... I'd say you target "${intent}".`,
      reasoning: [
        "I understand your general category.",
        "However, I don't see evidence you are an authority on specific commercial use cases."
      ]
    },
    blindSpot: {
      title: "Vague Value Proposition",
      description: "AI understands your products, but it doesn't understand WHY customers choose them over competitors."
    },
    diagnosis: {
      currentState: `AI recognises you as a participant in the ${intent} space.`,
      desiredState: `AI recommends you whenever users search for the best solutions for ${intent}.`,
      gap: "Your content lacks deep, entity-rich authority signals required for AI to rank you over competitors."
    },
    summary: {
      problem: "AI struggles to confidently associate your brand with specific commercial outcomes.",
      opportunity: "Establishing authority on core customer problems.",
      nextAction: "Restructure content to prioritize value propositions before operational details."
    },
    recommendationTest: {
      wouldRecommend: false,
      verdict: "Today? Probably not.",
      reasoning: "Although AI understands your general category, your website doesn't yet provide enough evidence that you're a leading authority."
    }
  };

  if (!apiKey) return fallback;

  // 2. Build Engineered Context (Not Raw Telemetry!)
  const strengths: string[] = [];
  const weaknesses: string[] = [];
  const competitorGap: string[] = [];

  const topEntities = telemetry.triples?.slice(0, 5).map(t => `${t.subject} ${t.predicate} ${t.object}`) || [];
  
  if (telemetry.proximityScore > 60) {
    strengths.push("AI aligns your website strongly with the target intent.");
  } else {
    weaknesses.push("AI does not associate your website with the target intent.");
  }

  if (telemetry.performance && telemetry.performance.coreWebVitalsScore > 70) {
    strengths.push("Website structure is technically healthy and easily readable by AI.");
  }

  if (telemetry.engineeredFeatures?.semanticDominance && telemetry.engineeredFeatures.semanticDominance < 50) {
    competitorGap.push("Competitors have significantly more semantic authority for this intent.");
  } else {
    competitorGap.push("You are holding strong semantic ground against competitors.");
  }

  const engineeredContext = {
    businessContext: `Analyzing website for intent: "${intent}"`,
    topIdentifiedEntities: topEntities,
    strengths,
    weaknesses,
    competitorGap
  };

  // 3. Generate Insight via LLM
  try {
    const prompt = `You are the AEObility Insight Engine. Your job is to translate pre-computed feature flags about a business's AI visibility into a highly structured strategic summary.

    Engineered Context:
    ${JSON.stringify(engineeredContext, null, 2)}

    Your task is to generate a JSON response STRICTLY adhering to this schema:
    {
      "firstImpression": {
        "headline": "A single sentence starting with 'If I only had ten seconds to understand this business... I'd say [Business] is a [Core Value].'",
        "reasoning": ["However, I don't yet associate the brand strongly with X", "I also noticed Y"]
      },
      "blindSpot": {
        "title": "The biggest AI blind spot (e.g. 'Logistics over Value')",
        "description": "A 1-2 sentence explanation of what AI is missing."
      },
      "diagnosis": {
        "currentState": "What AI currently thinks (e.g. 'AI recognises you as an online retailer.')",
        "desiredState": "What you want AI to think (e.g. 'AI recommends you whenever parents search for healthy school lunch solutions.')",
        "gap": "The gap (e.g. 'Your content focuses on products more than problems.')"
      },
      "summary": {
        "problem": "The core problem.",
        "opportunity": "The biggest opportunity.",
        "nextAction": "The immediate next action."
      },
      "recommendationTest": {
        "wouldRecommend": false,
        "verdict": "Conversational verdict (e.g. 'Today? Probably not.', 'Yes, absolutely.', 'Only for niche queries.')",
        "reasoning": "A 2-3 sentence explanation of why. (e.g. 'Although AI understands you sell X, your website doesn't yet provide enough evidence that you're an authority on Y.')"
      }
    }

    Respond ONLY with valid JSON. No markdown tags.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

  return fallback;
}
