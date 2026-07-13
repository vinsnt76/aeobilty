// Configurable weights for observability platform (V3)
// In a future iteration, these could be loaded from a database or CMS.
export const SCORING_WEIGHTS = {
  semantic: 0.4,
  technical: 0.2,
  entity: 0.15,
  competitor: 0.15,
  authority: 0.1
};
