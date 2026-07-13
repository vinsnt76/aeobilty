import { 
  VectorNode, 
  EntityTriple, 
  SimulationRun, 
  TechnicalSEO, 
  SchemaValidation, 
  PerformanceMetrics,
  ScoreExplanation,
  EntityConfidence,
  EngineeredFeatures
} from './types';
import { SCORING_WEIGHTS } from './config';

export function calculateReadinessScore(
  proximityNodes: VectorNode[],
  simulations: SimulationRun[],
  triples: EntityTriple[],
  entityConfidence: EntityConfidence,
  clientCrawl: { technicalSEO?: TechnicalSEO; schemaValidation?: SchemaValidation },
  performance: PerformanceMetrics | undefined,
  features: EngineeredFeatures
): { readinessScore: number; explanations: ScoreExplanation[] } {
  
  const explanations: ScoreExplanation[] = [];
  let totalScore = 0;

  // 1. Semantic Proximity (Competitor context) - Weight based
  const semanticMax = 100 * SCORING_WEIGHTS.semantic;
  if (features.semanticDominance > 0) {
    const delta = semanticMax * 0.8; // e.g. 32
    explanations.push({ category: 'Semantic', delta, reason: 'Strong vector proximity compared to competitors', confidence: 95 });
    totalScore += delta;
  } else {
    const clientNode = proximityNodes.find(n => n.label === 'Client');
    if (clientNode && clientNode.similarity > 0.6) {
       const delta = semanticMax * 0.5;
       explanations.push({ category: 'Semantic', delta, reason: 'Moderate vector proximity, but lags top competitors', confidence: 85 });
       totalScore += delta;
    } else {
       explanations.push({ category: 'Semantic', delta: -5, reason: 'Weak topical coverage compared to intent', confidence: 90 });
       totalScore -= 5;
    }
  }

  // 2. RAG Simulation (Survival) - Part of Semantic
  const survivalRate = simulations.filter(s => s.survived).length / Math.max(1, simulations.length);
  if (survivalRate >= 0.6) {
    explanations.push({ category: 'RAG Simulation', delta: 10, reason: 'Content survives adversarial prompt extraction', confidence: 80 });
    totalScore += 10;
  } else {
    explanations.push({ category: 'RAG Simulation', delta: -8, reason: 'Content frequently dropped during RAG retrieval', confidence: 80 });
    totalScore -= 8;
  }

  // 3. Knowledge Graph Strength - Weight based
  const entityMax = 100 * SCORING_WEIGHTS.entity;
  if (triples.length >= 3) {
    const delta = entityMax * (features.entityAuthority / 100);
    explanations.push({ category: 'Knowledge Graph', delta, reason: `Clear entity relationships established (${entityConfidence.type})`, confidence: entityConfidence.score });
    totalScore += delta;
  } else {
    explanations.push({ category: 'Knowledge Graph', delta: -4, reason: 'Sparse semantic graph structure', confidence: 90 });
    totalScore -= 4;
  }

  // 4. Competitor Analysis - Weight based
  const compMax = 100 * SCORING_WEIGHTS.competitor;
  if (features.contentLengthRatio > 1.2) {
    const delta = compMax * 0.8;
    explanations.push({ category: 'Competitor Analysis', delta, reason: 'Comprehensive content depth vs competitors', confidence: 95 });
    totalScore += delta;
  } else if (features.contentLengthRatio < 0.5) {
    explanations.push({ category: 'Competitor Analysis', delta: -10, reason: 'Thin content compared to top ranking competitors', confidence: 95 });
    totalScore -= 10;
  }

  // 5. Technical SEO & Schema - Weight based
  const techMax = 100 * SCORING_WEIGHTS.technical;
  if (features.schemaCompleteness === 100) {
    const delta = techMax * 0.5;
    explanations.push({ category: 'Technical SEO', delta, reason: 'Strong Schema.org markup relative to competitors', confidence: 100 });
    totalScore += delta;
  } else if (!clientCrawl.schemaValidation?.hasValidSchema) {
    explanations.push({ category: 'Technical SEO', delta: -10, reason: 'Missing explicit JSON-LD schema', confidence: 100 });
    totalScore -= 10;
  }

  if (performance) {
    if (performance.coreWebVitalsScore > 85) {
      const delta = techMax * 0.5;
      explanations.push({ category: 'Core Web Vitals', delta, reason: 'Excellent Core Web Vitals performance', confidence: 98 });
      totalScore += delta;
    } else if (performance.coreWebVitalsScore < 50) {
      explanations.push({ category: 'Core Web Vitals', delta: -5, reason: 'Poor Core Web Vitals impact crawlability', confidence: 98 });
      totalScore -= 5;
    }
  }

  // Authority (Placeholder for future expansion, e.g. backlinks)
  // const authMax = 100 * SCORING_WEIGHTS.authority;

  // Normalize final score to a 0-100 scale
  const baseScore = 20;
  const readinessScore = Math.max(0, Math.min(100, Math.round(baseScore + totalScore)));

  return { readinessScore, explanations };
}
