// Weighting distribution across 5 diagnostic categories (sum = 1.0)
export const SCORING_WEIGHTS = {
  semantic: 0.4,
  technical: 0.2,
  entity: 0.15,
  competitor: 0.15,
  authority: 0.1
} as const;

// Cosine Similarity Space ([0, 1] float range)
// Note: These values are internal evaluation heuristics tailored to Gemini text-embedding-004.
// They serve as directional benchmarks, not absolute replications of external corpus ranking.
export const SIMILARITY_THRESHOLDS = {
  RAG_SURVIVAL_THRESHOLD: 0.62,       // Passage-level micro cutoff in rag-sim.ts
  MACRO_RELEVANCE_BASELINE: 0.60,    // Strategic baseline in scoring.ts
  MACRO_DOMINANCE_TARGET: 0.70       // Strategic top-tier category alignment
} as const;

// Diagnostic Score Space ([0, 100] integer point range)
// Note: DOMINANCE_SCALING_FACTOR (250) is an internal heuristic judgment chosen because
// realistic cosine differentials between competitors in technical domains span [-0.20, +0.20].
// A multiplier of 250 maps a +/-0.10 cosine lead to +/-25 points off the 50 midpoint (yielding 75 or 25),
// providing discriminative sensitivity across live competitive distributions.
export const SCORE_CONSTANTS = {
  DOMINANCE_NEUTRAL_MIDPOINT: 50,    // Centered parity score when client == competitor average
  DOMINANCE_SCALING_FACTOR: 250      // Scales realistic [-0.20, +0.20] deltas across the [0, 100] score space
} as const;

// Diagnostic Decision Cascade & Verdict Constants ([0, 100] integer point range)
// Note: These values represent internal evaluation heuristics for UI card cascades and verdict ranking.
export const VERDICT_THRESHOLDS = {
  READINESS_HIGH_VISIBILITY_THRESHOLD: 85, // Readiness score > 85 triggers "Highly Visible"
  READINESS_VISIBLE_THRESHOLD: 65,         // Readiness score > 65 triggers "Visible"
  READINESS_GROWING_THRESHOLD: 45,         // Readiness score > 45 triggers "Growing"
  READINESS_LIMITED_THRESHOLD: 25,         // Readiness score > 25 triggers "Limited", else "At Risk"
  READINESS_RECOMMENDATION_THRESHOLD: 70,  // Readiness score > 70 qualifies wouldRecommend: true
  PROXIMITY_CRITICAL_DROP_THRESHOLD: 45,   // Proximity score < 45 triggers "Intent Misalignment"
  DOMINANCE_DEFICIT_THRESHOLD: 40          // Dominance score < 40 (where 40 corresponds to delta = -0.04) triggers "Low Semantic Entity Density"
} as const;

