export interface EntityTriple {
  subject: string;
  predicate: string;
  object: string;
  confidence?: number;
}

export interface VectorNode {
  label: string; // "Client", "Competitor A", "Competitor B", "Intent"
  text: string;
  similarity: number;
}

export interface SimulationRun {
  syntheticQuery: string;
  bestSimilarity: number;
  survived: boolean;
  attributionRank: number;
  selectedChunk: string;
}

export interface TechnicalSEO {
  title: string | null;
  metaDescription: string | null;
  headingsCount: { h1: number; h2: number; h3: number };
  internalLinksCount: number;
}

export interface SchemaValidation {
  hasValidSchema: boolean;
  typesFound: string[];
}

export interface PerformanceMetrics {
  coreWebVitalsScore: number; // 0 to 100
  lcp: number | null; // Largest Contentful Paint in ms
  cls: number | null; // Cumulative Layout Shift
}

export interface ScoreExplanation {
  category: string;
  delta: number;
  reason: string;
  confidence: number; // 0 to 100
}

export interface EntityConfidence {
  score: number; // 0 to 100
  type: 'Verified' | 'Brand' | 'Emerging' | 'Unknown';
}

export interface EngineeredFeatures {
  semanticDominance: number; // Comparative score vs competitors
  technicalAdvantage: number;
  contentLengthRatio: number;
  schemaCompleteness: number;
  entityAuthority: number;
}

export interface CrawlQuality {
  score: number; // 0 to 100
  method: 'Readability' | 'Cheerio' | 'Fallback';
  hydrationRequired: boolean;
}

export interface FirstImpression {
  headline: string;
  reasoning: string[];
}

export interface StrategicSummary {
  problem: string;
  opportunity: string;
  nextAction: string;
}

export interface BlindSpot {
  title: string;
  description: string;
}

export interface BusinessDiagnosis {
  currentState: string;
  desiredState: string;
  gap: string;
}

export interface AIRecommendationTest {
  wouldRecommend: boolean;
  verdict: string;
  reasoning: string;
}

export interface InsightEngineResult {
  verdict: 'Highly Visible' | 'Visible' | 'Growing' | 'Limited' | 'At Risk';
  measurementConfidence: { score: number; reasons: string[] };
  recommendationConfidence: { score: number; reasons: string[] };
  firstImpression: FirstImpression;
  blindSpot: BlindSpot;
  diagnosis: BusinessDiagnosis;
  summary: StrategicSummary;
  recommendationTest: AIRecommendationTest;
}

export interface TelemetryResult {
  clientUrl?: string;
  proximityScore: number; // 0 to 100
  nodes: VectorNode[];
  triples: EntityTriple[];
  simulations: SimulationRun[];
  readinessScore: number;
  explanations?: ScoreExplanation[];
  
  technicalSEO?: TechnicalSEO;
  schemaValidation?: SchemaValidation;
  performance?: PerformanceMetrics;
  entityConfidence?: EntityConfidence;
  
  // V3 specific
  engineeredFeatures?: EngineeredFeatures;
  crawlQuality?: CrawlQuality;
  
  // Insight Engine Extension
  insightResult?: InsightEngineResult;
}
