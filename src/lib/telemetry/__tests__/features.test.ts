import { describe, it, expect } from 'vitest';
import { extractFeatures } from '../features';
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
      schemaValidation: { hasValidSchema: true, typesFound: ['Organization', 'Product'] }, // 2 types
    };

    const competitorCrawls = [
      {
        textContent: '12345', // len 5
        technicalSEO: { title: null, metaDescription: null, headingsCount: { h1: 1, h2: 1, h3: 1 }, internalLinksCount: 5 },
        schemaValidation: { hasValidSchema: true, typesFound: ['Organization'] }, // 1 type
      },
      {
        textContent: '1234567', // len 7
        technicalSEO: { title: null, metaDescription: null, headingsCount: { h1: 1, h2: 1, h3: 1 }, internalLinksCount: 10 },
        schemaValidation: { hasValidSchema: true, typesFound: ['Organization'] }, // 1 type
      }
    ]; // Avg len: 6, Avg links: 7.5, Avg types: 1

    const entityConfidence: EntityConfidence = { score: 80, type: 'Verified' }; // 80 * 1.2 = 96

    const features = extractFeatures(clientNode, competitorNodes, clientCrawl, competitorCrawls, entityConfidence);

    // Semantic Dominance: (0.9 - 0.7) * 100 = 20
    expect(features.semanticDominance).toBeCloseTo(20);
    
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
        schemaValidation: { hasValidSchema: true, typesFound: ['Organization', 'Product'] }, // 2 types
      }
    ];

    const entityConfidence: EntityConfidence = { score: 50, type: 'Unknown' }; // 50 * 0.8 = 40

    const features = extractFeatures(clientNode, competitorNodes, clientCrawl, competitorCrawls, entityConfidence);

    // Semantic Dominance: 0.5 < 0.8 -> 0
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
      schemaValidation: { hasValidSchema: true, typesFound: ['Organization'] }, // 1 type
    };

    const competitorCrawls: Parameters<typeof extractFeatures>[3] = []; // Empty

    const entityConfidence: EntityConfidence = { score: 100, type: 'Brand' }; // 100 * 1.0 = 100

    const features = extractFeatures(clientNode, competitorNodes, clientCrawl, competitorCrawls, entityConfidence);

    // Semantic Dominance: 0.8 > 0 -> 80
    expect(features.semanticDominance).toBeCloseTo(80);
    
    // Technical Advantage: 10 > 0 -> 10
    expect(features.technicalAdvantage).toBe(10);
    
    // Content Length Ratio: 5 / 1 = 5
    expect(features.contentLengthRatio).toBe(5);
    
    // Schema Completeness: 1 > 0 -> 100
    expect(features.schemaCompleteness).toBe(100);
    
    // Entity Authority: 100 * 1.0 = 100
    expect(features.entityAuthority).toBe(100);
  });
});
