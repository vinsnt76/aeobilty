import { KnowledgeNode, SearchQueryResultType } from './types';

export const VECTOR_DIM = 384;

const DOMAIN_KEYWORDS = new Set([
  'aeo', 'seo', 'search', 'google', 'maps', 'llm', 'rag', 'chatgpt', 'perplexity',
  'visibility', 'audit', 'schema', 'entity', 'ranking', 'traffic', 'marketing',
  'perth', 'business', 'services', 'pricing', 'cost', 'blueprint', 'sprint',
  'citation', 'keyphrase', 'liquid', 'shopify', 'geo', 'local', 'content',
  'author', 'vince', 'baker', 'aeobility', 'case', 'bento', 'contact', 'book',
  'support', 'ai', 'engine', 'optimisation', 'optimization', 'keyword', 'meta',
  'site', 'website', 'web', 'conversion', 'lead', 'leads', 'client', 'agency'
]);

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

export function classifyQueryIntent(
  query: string,
  similarityScore: number,
  offTopicHistoryCount = 0
): SearchQueryResultType {
  const clean = query.toLowerCase().trim();
  const words = clean.split(/\s+/).filter(Boolean);

  const hasDomainKeyword = words.some(w => DOMAIN_KEYWORDS.has(w));

  // 1. Repeat off-topic question check
  if (!hasDomainKeyword && similarityScore < 0.35 && offTopicHistoryCount > 0) {
    return 'off_topic_repeat';
  }

  // 2. Ambiguous query check (short 1-2 words without domain keyword)
  if (words.length <= 2 && !hasDomainKeyword && similarityScore < 0.50) {
    return 'ambiguous';
  }

  // 3. Clear visibility / AEO / SEO / business question
  if (hasDomainKeyword || similarityScore >= 0.40) {
    return 'visibility';
  }

  // 4. Harmless General Knowledge / Off-topic
  return 'general_knowledge';
}

export function generateGroundedAnswer(match: KnowledgeNode): string {
  const desc = match.description || `${match.pageName} focuses on ${match.focusKeyphrase || match.h1}.`;
  
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

export function generateAmbiguousClarification(query: string): {
  question: string;
  options: Array<{ label: string; query: string }>;
} {
  return {
    question: `Are you looking for information on AEO services, a free visibility audit, or specific search engine optimization pricing?`,
    options: [
      { label: 'AEO & GEO Services', query: 'What are AEObility AEO services?' },
      { label: 'Free Visibility Audit', query: 'Free website visibility audit' },
      { label: 'AEO vs SEO Differences', query: 'AEO vs SEO comparison' }
    ]
  };
}

export function generateGeneralKnowledgeAnswer(query: string): string {
  const q = query.toLowerCase();
  if (q.includes('weather')) {
    return "Weather varies by region and season. For live forecasts, check your local meteorological service.";
  }
  if (q.includes('time') || q.includes('date')) {
    return "Current system time is tracked locally in your browser.";
  }
  if (q.includes('capital') || q.includes('city') || q.includes('where is')) {
    return "That's a classic geography topic! AEObility focuses on geographic engine optimization (GEO) to help local businesses rank across location maps.";
  }
  return `That sounds like a general topic! AEObility specializes in AI Search Optimization (AEO) to help businesses build machine-readable entity networks.`;
}
