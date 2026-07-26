import { KnowledgeNode } from './types';

export const VECTOR_DIM = 384;

export function buildVector(text: string, dim = VECTOR_DIM): number[] {
  const vec = new Float64Array(dim);
  const clean = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
  const words = clean.split(/\s+/).filter(Boolean);

  const grams: string[] = [];
  for (const w of words) {
    grams.push(w);
    if (w.length >= 3) {
      for (let i = 0; i <= w.length - 3; i++) {
        grams.push(w.slice(i, i + 3));
      }
    }
  }

  for (const g of grams) {
    let hash = 0;
    for (let i = 0; i < g.length; i++) {
      hash = (hash << 5) - hash + g.charCodeAt(i);
      hash |= 0;
    }
    const idx = Math.abs(hash) % dim;
    vec[idx] += 1;
  }

  let norm = 0;
  for (let i = 0; i < dim; i++) {
    norm += vec[i] * vec[i];
  }
  norm = Math.sqrt(norm);
  if (norm > 0) {
    for (let i = 0; i < dim; i++) {
      vec[i] /= norm;
    }
  }

  return Array.from(vec);
}

export function computeCosineSimilarity(a: number[], b: number[]): number {
  if (!a || !b || a.length !== b.length) return 0;
  let dot = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
  }
  return dot;
}

export function generateGroundedAnswer(match: KnowledgeNode): string {
  const desc = match.description || `${match.pageName} focuses on ${match.focusKeyphrase || match.h1}.`;
  
  // Clean description to ensure max 2 sentences
  const sentences = desc
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(Boolean);

  if (sentences.length >= 2) {
    return `${sentences[0]} ${sentences[1]}`;
  } else if (sentences.length === 1) {
    const secondSentence = match.focusKeyphrase 
      ? `Our ${match.schemaType || 'Service'} architecture specifically targets ${match.focusKeyphrase} to maximize machine readability.`
      : `Explore our ${match.pageName} guide for comprehensive entity and schema specifications.`;
    return `${sentences[0]} ${secondSentence}`;
  } else {
    return `AEObility provides ${match.h1} structured for conversational LLMs and search engines. Our ${match.schemaType || 'Service'} architecture ensures your business is discoverable, understandable, and chosen.`;
  }
}
