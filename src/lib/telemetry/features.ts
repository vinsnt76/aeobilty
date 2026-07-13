import { EngineeredFeatures, VectorNode, EntityConfidence, TechnicalSEO, SchemaValidation } from './types';

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

export function extractFeatures(
  clientNode: VectorNode | undefined,
  competitorNodes: VectorNode[],
  clientCrawl: ClientCrawl,
  competitorCrawls: CompetitorCrawl[],
  entityConfidence: EntityConfidence
): EngineeredFeatures {
  
  // 1. Semantic Dominance
  // Compare client similarity against average competitor similarity on a relative scale
  const clientSim = clientNode ? clientNode.similarity : 0;
  let compAvgSim = 0;
  if (competitorNodes.length > 0) {
    compAvgSim = competitorNodes.reduce((sum, n) => sum + n.similarity, 0) / competitorNodes.length;
  }
  
  // If client = compAvg, score is 50%. If client is 2x compAvg, score is 100%. If client is 0.5x, score is 25%.
  const semanticDominance = Math.min(100, Math.max(0, (clientSim / (compAvgSim || 0.001)) * 50));

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
