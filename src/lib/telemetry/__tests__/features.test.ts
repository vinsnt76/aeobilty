import { describe, it, expect } from 'vitest';
import { extractFeatures, computeSemanticDominance } from '../features';
import { VectorNode, EntityConfidence } from '../types';

describe('Feature Engineering Layer', () => {
  it('Scenario 1: Client outperforms competitors', () => {
    const clientNode: VectorNode = { label: 'Client', text: '...', similarity: 0.9 };
    const competitorNodes: VectorNode[] = [
      { label: 'Competitor A', text: '...', similarity: 0.6 },
      { label: 'Competitor B', text: '...', similarity: 0.8 },
    ]; // Avg: 0.7

    const clientCrawl = {
      textContent: '1234567890', // len 10
      technicalSEO: { title: null, metaDescription: null, headingsCount: { h1: 1, h2: 1, h3: 1 }, internalLinksCount: 15 },
      schemaValidation: { hasValidSchema: true, typesFound: ['Organisation', 'Product'] }, // 2 types
    };

    const competitorCrawls = [
      {
        textContent: '12345', // len 5
        technicalSEO: { title: null, metaDescription: null, headingsCount: { h1: 1, h2: 1, h3: 1 }, internalLinksCount: 5 },
        schemaValidation: { hasValidSchema: true, typesFound: ['Organisation'] }, // 1 type
      },
      {
        textContent: '1234567', // len 7
        technicalSEO: { title: null, metaDescription: null, headingsCount: { h1: 1, h2: 1, h3: 1 }, internalLinksCount: 10 },
        schemaValidation: { hasValidSchema: true, typesFound: ['Organisation'] }, // 1 type
      }
    ]; // Avg len: 6, Avg links: 7.5, Avg types: 1

    const entityConfidence: EntityConfidence = { score: 80, type: 'Verified' }; // 80 * 1.2 = 96

    const features = extractFeatures(clientNode, competitorNodes, clientCrawl, competitorCrawls, entityConfidence);

    // Semantic Dominance: 50 + (250 * (0.9 - 0.7)) = 50 + 50 = 100
    expect(features.semanticDominance).toBe(100);
    
    // Technical Advantage: 15 > 7.5 = 10
    expect(features.technicalAdvantage).toBe(10);
    
    // Content Length Ratio: 10 / 6 = 1.666...
    expect(features.contentLengthRatio).toBeCloseTo(10 / 6);
    
    // Schema Completeness: 2 >= 1 -> 100
    expect(features.schemaCompleteness).toBe(100);
    
    // Entity Authority: 80 * 1.2 = 96
    expect(features.entityAuthority).toBeCloseTo(96);
  });

  it('Scenario 2: Client underperforms competitors', () => {
    const clientNode: VectorNode = { label: 'Client', text: '...', similarity: 0.5 };
    const competitorNodes: VectorNode[] = [
      { label: 'Competitor A', text: '...', similarity: 0.8 },
    ]; // Avg: 0.8

    const clientCrawl = {
      textContent: '12', // len 2
      technicalSEO: { title: null, metaDescription: null, headingsCount: { h1: 1, h2: 1, h3: 1 }, internalLinksCount: 2 },
      schemaValidation: { hasValidSchema: false, typesFound: [] }, // 0 types
    };

    const competitorCrawls = [
      {
        textContent: '1234567890', // len 10
        technicalSEO: { title: null, metaDescription: null, headingsCount: { h1: 1, h2: 1, h3: 1 }, internalLinksCount: 20 },
        schemaValidation: { hasValidSchema: true, typesFound: ['Organisation', 'Product'] }, // 2 types
      }
    ];

    const entityConfidence: EntityConfidence = { score: 50, type: 'Unknown' }; // 50 * 0.8 = 40

    const features = extractFeatures(clientNode, competitorNodes, clientCrawl, competitorCrawls, entityConfidence);

    // Semantic Dominance: 50 + (250 * (0.5 - 0.8)) = 50 - 75 = -25 -> Clamped to 0
    expect(features.semanticDominance).toBe(0);
    
    // Technical Advantage: 2 < 20 -> 0
    expect(features.technicalAdvantage).toBe(0);
    
    // Content Length Ratio: 2 / 10 = 0.2
    expect(features.contentLengthRatio).toBe(0.2);
    
    // Schema Completeness: 0 types -> 0
    expect(features.schemaCompleteness).toBe(0);
    
    // Entity Authority: 50 * 0.8 = 40
    expect(features.entityAuthority).toBeCloseTo(40);
  });

  it('Scenario 3: Graceful handling of empty competitor arrays', () => {
    const clientNode: VectorNode = { label: 'Client', text: '...', similarity: 0.8 };
    const competitorNodes: VectorNode[] = []; // Empty

    const clientCrawl = {
      textContent: '12345', // len 5
      technicalSEO: { title: null, metaDescription: null, headingsCount: { h1: 1, h2: 1, h3: 1 }, internalLinksCount: 10 },
      schemaValidation: { hasValidSchema: true, typesFound: ['Organisation'] }, // 1 type
    };

    const competitorCrawls: Parameters<typeof extractFeatures>[3] = []; // Empty

    const entityConfidence: EntityConfidence = { score: 100, type: 'Brand' }; // 100 * 1.0 = 100

    const features = extractFeatures(clientNode, competitorNodes, clientCrawl, competitorCrawls, entityConfidence);

    // Semantic Dominance: 50 + (250 * 0.8) = 250 -> Clamped to 100
    expect(features.semanticDominance).toBe(100);
    
    // Technical Advantage: 10 > 0 -> 10
    expect(features.technicalAdvantage).toBe(10);
    
    // Content Length Ratio: 5 / 1 = 5
    expect(features.contentLengthRatio).toBe(5);
    
    // Schema Completeness: 1 > 0 -> 100
    expect(features.schemaCompleteness).toBe(100);
    
    // Entity Authority: 100 * 1.0 = 100
    expect(features.entityAuthority).toBe(100);
  });

  it('Scenario 4: Realistic Delta Sensitivity & Centered Parity Spread', () => {
    const emptyCrawl = { textContent: 'sample', technicalSEO: undefined, schemaValidation: undefined };
    const dummyConf: EntityConfidence = { score: 100, type: 'Brand' };

    // 1. Exact Parity (Delta = 0.00) -> 50
    const fParity = extractFeatures(
      { label: 'Client', text: '...', similarity: 0.70 },
      [{ label: 'Comp 1', text: '...', similarity: 0.70 }],
      emptyCrawl, [emptyCrawl], dummyConf
    );
    expect(fParity.semanticDominance).toBe(50);

    // 2. Subtle Lead (+0.02) -> 50 + 250*(0.02) = 55
    const fSubtleLead = extractFeatures(
      { label: 'Client', text: '...', similarity: 0.72 },
      [{ label: 'Comp 1', text: '...', similarity: 0.70 }],
      emptyCrawl, [emptyCrawl], dummyConf
    );
    expect(fSubtleLead.semanticDominance).toBe(55);

    // 3. Moderate Lead (+0.04) -> 50 + 250*(0.04) = 60
    const fModLead = extractFeatures(
      { label: 'Client', text: '...', similarity: 0.74 },
      [{ label: 'Comp 1', text: '...', similarity: 0.70 }],
      emptyCrawl, [emptyCrawl], dummyConf
    );
    expect(fModLead.semanticDominance).toBe(60);

    // 4. Strong Lead (+0.10) -> 50 + 250*(0.10) = 75
    const fStrongLead = extractFeatures(
      { label: 'Client', text: '...', similarity: 0.80 },
      [{ label: 'Comp 1', text: '...', similarity: 0.70 }],
      emptyCrawl, [emptyCrawl], dummyConf
    );
    expect(fStrongLead.semanticDominance).toBe(75);

    // 5. Moderate Lag (-0.04) -> 50 + 250*(-0.04) = 40
    const fModLag = extractFeatures(
      { label: 'Client', text: '...', similarity: 0.66 },
      [{ label: 'Comp 1', text: '...', similarity: 0.70 }],
      emptyCrawl, [emptyCrawl], dummyConf
    );
    expect(fModLag.semanticDominance).toBe(40);
  });

  it('Scenario 5: Competitor Average Outlier Protection (Trimmed Mean for N >= 5)', () => {
    const clientSimilarity = 0.70;
    // 4 legitimate competitors (~0.68) and 1 failed scrape/outlier (0.15)
    const competitorSimilarities = [0.69, 0.68, 0.67, 0.68, 0.15];

    const result = computeSemanticDominance(clientSimilarity, competitorSimilarities);

    // With trimmed mean (dropping min 0.15 and max 0.69):
    // Remaining are [0.67, 0.68, 0.68] -> avg = 0.6766...
    // Effective competitor baseline remains ~0.677 (delta ~+0.023 -> score ~56)
    expect(result.effectiveCompAvg).toBeGreaterThan(0.67);
    expect(result.score).toBeLessThan(65);
    expect(result.score).toBeGreaterThanOrEqual(53);
  });
});
