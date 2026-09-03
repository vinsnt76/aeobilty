import { EngineeredFeatures, VectorNode, EntityConfidence, TechnicalSEO, SchemaValidation } from './types';
import { SCORE_CONSTANTS } from './config';

interface ClientCrawl {
  textContent: string;
  technicalSEO?: TechnicalSEO;
  schemaValidation?: SchemaValidation;
}

interface CompetitorCrawl {
  textContent: string;
  technicalSEO?: TechnicalSEO;
  schemaValidation?: SchemaValidation;
}

// Compute semantic dominance with trimmed-mean outlier protection for N >= 5 competitors
export function computeSemanticDominance(
  clientSim: number,
  competitorSimilarities: number[]
): { score: number; effectiveCompAvg: number; delta: number } {
  let effectiveCompAvg = 0;
  if (competitorSimilarities.length >= 5) {
    // Robust trimmed mean: drop the single lowest and single highest outlier to guard against broken scrapes
    const sorted = [...competitorSimilarities].sort((a, b) => a - b);
    const trimmed = sorted.slice(1, -1);
    effectiveCompAvg = trimmed.reduce((sum, s) => sum + s, 0) / trimmed.length;
  } else if (competitorSimilarities.length > 0) {
    effectiveCompAvg = competitorSimilarities.reduce((sum, s) => sum + s, 0) / competitorSimilarities.length;
  }

  const delta = competitorSimilarities.length > 0 ? (clientSim - effectiveCompAvg) : clientSim;
  const score = Math.min(
    100,
    Math.max(
      0,
      Math.round(SCORE_CONSTANTS.DOMINANCE_NEUTRAL_MIDPOINT + (SCORE_CONSTANTS.DOMINANCE_SCALING_FACTOR * delta))
    )
  );

  return { score, effectiveCompAvg, delta };
}

export function extractFeatures(
  clientNode: VectorNode | undefined,
  competitorNodes: VectorNode[],
  clientCrawl: ClientCrawl,
  competitorCrawls: CompetitorCrawl[],
  entityConfidence: EntityConfidence
): EngineeredFeatures {
  
  // 1. Semantic Dominance (Centered 50 midpoint with robust cohort averaging)
  const clientSim = clientNode ? clientNode.similarity : 0;
  const compSims = competitorNodes.map(n => n.similarity);
  const { score: semanticDominance } = computeSemanticDominance(clientSim, compSims);

  // 2. Technical Advantage
  // Compare internal links as a basic proxy for structure depth
  const clientLinks = clientCrawl.technicalSEO?.internalLinksCount || 0;
  let compAvgLinks = 0;
  if (competitorCrawls.length > 0) {
    const totalLinks = competitorCrawls.reduce((sum, c) => sum + (c.technicalSEO?.internalLinksCount || 0), 0);
    compAvgLinks = totalLinks / competitorCrawls.length;
  }
  const technicalAdvantage = clientLinks > compAvgLinks ? 10 : 0; // arbitrary bump if deeper structure

  // 3. Content Length Ratio
  const clientLen = clientCrawl.textContent.length;
  let compAvgLen = 1;
  if (competitorCrawls.length > 0) {
    compAvgLen = Math.max(1, competitorCrawls.reduce((sum, c) => sum + c.textContent.length, 0) / competitorCrawls.length);
  }
  const contentLengthRatio = clientLen / compAvgLen;

  // 4. Schema Completeness
  const clientTypes = clientCrawl.schemaValidation?.typesFound?.length || 0;
  let compAvgTypes = 0;
  if (competitorCrawls.length > 0) {
    const totalTypes = competitorCrawls.reduce((sum, c) => sum + (c.schemaValidation?.typesFound?.length || 0), 0);
    compAvgTypes = totalTypes / competitorCrawls.length;
  }
  const schemaCompleteness = clientTypes > 0 ? (clientTypes >= compAvgTypes ? 100 : 50) : 0;

  // 5. Entity Authority
  let entityAuthority = entityConfidence.score;
  if (entityConfidence.type === 'Verified') {
    entityAuthority *= 1.2;
  } else if (entityConfidence.type === 'Brand') {
    entityAuthority *= 1.0; 
  } else {
    entityAuthority *= 0.8;
  }
  entityAuthority = Math.min(100, entityAuthority);

  return {
    semanticDominance,
    technicalAdvantage,
    contentLengthRatio,
    schemaCompleteness,
    entityAuthority
  };
}
