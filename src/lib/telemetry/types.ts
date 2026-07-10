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

export interface TelemetryResult {
  clientUrl?: string;
  proximityScore: number; // 0 to 100
  nodes: VectorNode[];
  triples: EntityTriple[];
  simulations: SimulationRun[];
  readinessScore: number;
}
