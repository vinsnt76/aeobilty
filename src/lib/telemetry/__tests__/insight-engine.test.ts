import { describe, it, expect } from 'vitest';
import { generateInsightEngineResult } from '../insight-engine';
import { SCORE_CONSTANTS } from '../config';
import { TelemetryResult } from '../types';

describe('Tier 0.1: PASS/FAIL Verdict Source & Multi-Dimensional Input Isolation', () => {
  const createBaseTelemetry = (overrides: Partial<TelemetryResult> = {}): TelemetryResult => ({
    clientUrl: 'https://sarahclinic.com.au',
    proximityScore: 65,
    readinessScore: 60,
    nodes: [
      { label: 'Client', text: '...', similarity: 0.70 },
      { label: 'Competitor 1', text: '...', similarity: 0.70 }
    ],
    triples: [
      { subject: 'Sarah Clinic', predicate: 'specialises in', object: 'Physiotherapy' }
    ],
    simulations: [
      { syntheticQuery: 'physio perth', bestSimilarity: 0.68, survived: true, attributionRank: 1, selectedChunk: '...' }
    ],
    schemaValidation: { hasValidSchema: true, typesFound: ['MedicalClinic', 'LocalBusiness'] },
    crawlQuality: { score: 90, method: 'Cheerio', hydrationRequired: false },
    engineeredFeatures: {
      semanticDominance: SCORE_CONSTANTS.DOMINANCE_NEUTRAL_MIDPOINT, // 50
      technicalAdvantage: 10,
      contentLengthRatio: 1.1,
      schemaCompleteness: 100,
      entityAuthority: 80
    },
    ...overrides
  });

  it('Scenario A: Exact Parity (Dominance = 50, Valid Schema) does NOT trigger low entity density blind spot', async () => {
    const parityTelemetry = createBaseTelemetry({
      proximityScore: 65,
      readinessScore: 60,
      engineeredFeatures: {
        semanticDominance: 50, // Exact parity
        technicalAdvantage: 0,
        contentLengthRatio: 1.0,
        schemaCompleteness: 100,
        entityAuthority: 80
      }
    });

    const result = await generateInsightEngineResult('physiotherapist near perth', parityTelemetry, 'Sample copy');

    // 1. Assert blind spot title does not falsely flag low semantic entity density
    expect(result.blindSpot.title).not.toBe('Low Semantic Entity Density');
    expect(result.blindSpot.title).not.toBe('Intent Misalignment');

    // 2. Assert verdict reflects valid mid-tier readiness
    expect(result.verdict).toBe('Growing');

    // 3. Assert recommendation test reflects conditional recommendation
    expect(result.recommendationTest.verdict).toBe('Only for niche queries.');
    expect(result.recommendationTest.wouldRecommend).toBe(false); // requires > 70
  });

  it('Scenario B: Isolating High Readiness (>85) vs Parity Dominance (Dominance = 50)', async () => {
    const highReadinessTelemetry = createBaseTelemetry({
      readinessScore: 88, // > 85 threshold
      proximityScore: 78,
      engineeredFeatures: {
        semanticDominance: 50,
        technicalAdvantage: 10,
        contentLengthRatio: 1.2,
        schemaCompleteness: 100,
        entityAuthority: 95
      }
    });

    const result = await generateInsightEngineResult('physiotherapist near perth', highReadinessTelemetry, 'Sample copy');

    expect(result.verdict).toBe('Highly Visible');
    expect(result.recommendationTest.wouldRecommend).toBe(true);
    expect(result.recommendationTest.verdict).toBe('Yes, for core intent.');
  });

  it('Scenario C: Low Semantic Dominance (<40) triggers Low Semantic Entity Density when schema is valid', async () => {
    const laggingTelemetry = createBaseTelemetry({
      proximityScore: 65,
      readinessScore: 40,
      schemaValidation: { hasValidSchema: true, typesFound: ['LocalBusiness'] },
      engineeredFeatures: {
        semanticDominance: 35, // Deficit (< 40)
        technicalAdvantage: 0,
        contentLengthRatio: 0.8,
        schemaCompleteness: 100,
        entityAuthority: 60
      }
    });

    const result = await generateInsightEngineResult('physiotherapist near perth', laggingTelemetry, 'Sample copy');

    expect(result.blindSpot.title).toBe('Low Semantic Entity Density');
    expect(result.verdict).toBe('Limited');
  });

  it('Scenario D: Proximity Score (<45) takes precedence as Intent Misalignment', async () => {
    const lowProximityTelemetry = createBaseTelemetry({
      proximityScore: 35, // < 45
      readinessScore: 20,
      engineeredFeatures: {
        semanticDominance: 30,
        technicalAdvantage: 0,
        contentLengthRatio: 0.5,
        schemaCompleteness: 0,
        entityAuthority: 40
      }
    });

    const result = await generateInsightEngineResult('physiotherapist near perth', lowProximityTelemetry, 'Sample copy');

    expect(result.blindSpot.title).toBe('Intent Misalignment');
    expect(result.verdict).toBe('At Risk');
    expect(result.recommendationTest.verdict).toBe('Today? Probably not.');
  });

  it('Scenario E: RAG Survival Isolation Test (Holding Dominance=50 while varying RAG survival across 0.62)', async () => {
    // 1. Passage fails RAG survival (0.58 < 0.62) at exact parity
    const lowRagTelemetry = createBaseTelemetry({
      proximityScore: 65,
      readinessScore: 55,
      simulations: [
        { syntheticQuery: 'physio perth', bestSimilarity: 0.58, survived: false, attributionRank: 0, selectedChunk: '...' }
      ],
      engineeredFeatures: {
        semanticDominance: 50, // Exact parity
        technicalAdvantage: 0,
        contentLengthRatio: 1.0,
        schemaCompleteness: 100,
        entityAuthority: 80
      }
    });

    const resultLowRag = await generateInsightEngineResult('physiotherapist near perth', lowRagTelemetry, 'Sample copy');
    
    // Proves that RAG survival is decoupled from the macro blind-spot cascade (defaulting to Vague Value Proposition when proximity & schema pass)
    expect(resultLowRag.blindSpot.title).toBe('Vague Value Proposition');
    expect(resultLowRag.verdict).toBe('Growing');

    // 2. Passage passes RAG survival (0.68 >= 0.62) at exact parity
    const highRagTelemetry = createBaseTelemetry({
      proximityScore: 65,
      readinessScore: 65,
      simulations: [
        { syntheticQuery: 'physio perth', bestSimilarity: 0.68, survived: true, attributionRank: 1, selectedChunk: '...' }
      ],
      engineeredFeatures: {
        semanticDominance: 50, // Exact parity
        technicalAdvantage: 0,
        contentLengthRatio: 1.0,
        schemaCompleteness: 100,
        entityAuthority: 80
      }
    });

    const resultHighRag = await generateInsightEngineResult('physiotherapist near perth', highRagTelemetry, 'Sample copy');
    expect(resultHighRag.blindSpot.title).toBe('Vague Value Proposition');
    expect(resultHighRag.verdict).toBe('Growing');
  });

  it('Scenario F: Schema-Validity Isolation Test (Level 2 Precedence)', async () => {
    // Proximity passes (65 >= 45), Dominance passes (50 >= 40), but Schema is missing (hasValidSchema = false)
    const missingSchemaTelemetry = createBaseTelemetry({
      proximityScore: 65,
      readinessScore: 50,
      schemaValidation: { hasValidSchema: false, typesFound: [] }, // Level 2 trigger
      engineeredFeatures: {
        semanticDominance: 50, // Parity
        technicalAdvantage: 0,
        contentLengthRatio: 1.0,
        schemaCompleteness: 0,
        entityAuthority: 80
      }
    });

    const result = await generateInsightEngineResult('physiotherapist near perth', missingSchemaTelemetry, 'Sample copy');

    // Level 2 must fire: "Missing Schema Entity Graph" overrides Level 3 dominance and Level 4 baseline
    expect(result.blindSpot.title).toBe('Missing Schema Entity Graph');
    expect(result.blindSpot.description).toContain('cannot parse machine-readable JSON-LD Schema definitions');
    expect(result.verdict).toBe('Growing');
  });

  it('Scenario G: Dominance Transition Range (40-49) Falls Through to Level 4 Baseline', async () => {
    // Dominance is 45 (between deficit threshold <40 and parity >=50), Proximity & Schema pass
    const transitionTelemetry = createBaseTelemetry({
      proximityScore: 65,
      readinessScore: 55,
      schemaValidation: { hasValidSchema: true, typesFound: ['LocalBusiness'] },
      engineeredFeatures: {
        semanticDominance: 45, // In transition zone [40, 49]
        technicalAdvantage: 0,
        contentLengthRatio: 1.0,
        schemaCompleteness: 100,
        entityAuthority: 80
      }
    });

    const result = await generateInsightEngineResult('physiotherapist near perth', transitionTelemetry, 'Sample copy');

    // Since dominance is 45 (not < 40), it does not trigger "Low Semantic Entity Density" and falls through to Level 4 baseline
    expect(result.blindSpot.title).toBe('Vague Value Proposition');
    expect(result.verdict).toBe('Growing');
  });
});
