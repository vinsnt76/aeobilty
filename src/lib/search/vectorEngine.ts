import { KnowledgeNode, SearchQueryResultType, CompanionSearchResponse } from './types';

export const VECTOR_DIM = 384;

const DOMAIN_KEYWORDS = new Set([
  'aeo', 'seo', 'search', 'google', 'maps', 'llm', 'rag', 'chatgpt', 'perplexity',
  'visibility', 'audit', 'schema', 'entity', 'ranking', 'traffic', 'marketing',
  'perth', 'business', 'services', 'pricing', 'cost', 'blueprint', 'sprint',
  'citation', 'keyphrase', 'liquid', 'shopify', 'geo', 'local', 'content',
  'author', 'vince', 'baker', 'aeobility', 'case', 'bento', 'contact', 'book',
  'support', 'ai', 'engine', 'optimisation', 'optimisation', 'keyword', 'meta',
  'site', 'website', 'web', 'conversion', 'lead', 'leads', 'client', 'agency',
  'semantic', 'salience', 'triples', 'rdf', 'vector', 'dense', 'retrieval',
  'lattice', 'bias', 'density', 'strength', 'positional'
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

export function computeUncappedScore(query: string, node: KnowledgeNode): { rawCos: number; rankingScore: number } {
  const qVec = buildVector(query);
  const rawCos = computeCosineSimilarity(qVec, node.embedding);

  const qLower = query.toLowerCase().trim();
  const qWords = qLower.split(/\s+/).filter(w => w.length >= 3);

  const titleText = (node.pageName + ' ' + node.h1 + ' ' + (node.focusKeyphrase || '')).toLowerCase();
  
  let exactTitleHits = 0;
  let keywordHits = 0;

  for (const w of qWords) {
    if (titleText.includes(w)) {
      exactTitleHits += 1;
    }
    const fullText = (
      node.pageName + ' ' + node.h1 + ' ' + node.focusKeyphrase + ' ' +
      node.primaryKeywords + ' ' + node.secondaryKeywords + ' ' + node.latentKeywords
    ).toLowerCase();
    if (fullText.includes(w)) {
      keywordHits += 1;
    }
  }

  const titleBoost = qWords.length > 0 ? (exactTitleHits / qWords.length) * 0.40 : 0;
  const keywordBoost = qWords.length > 0 ? (keywordHits / qWords.length) * 0.20 : 0;
  
  const rankingScore = rawCos * 1.5 + titleBoost + keywordBoost;

  return { rawCos, rankingScore };
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
  if (!hasDomainKeyword && similarityScore < 0.45 && offTopicHistoryCount > 0) {
    return 'off_topic_repeat';
  }

  // 2. Ambiguous query check (short 1-2 words without domain keyword)
  if (words.length <= 2 && !hasDomainKeyword && similarityScore < 0.50) {
    return 'ambiguous';
  }

  // 3. Clear visibility / AEO / SEO / business question
  if (hasDomainKeyword || similarityScore >= 0.50) {
    return 'visibility';
  }

  // 4. Harmless General Knowledge / Off-topic
  return 'general_knowledge';
}

export function generateGroundedAnswer(match: KnowledgeNode): string {
  const desc = match.description || '';
  const sentences = desc
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(Boolean);

  if (sentences.length >= 2) {
    return `${sentences[0]} ${sentences[1]}`;
  } else if (sentences.length === 1) {
    return `${sentences[0]} Explore our ${match.pageName} guide for comprehensive entity and schema specifications.`;
  } else {
    return `AEObility provides ${match.h1} structured for conversational LLMs and search engines. Discover how our ${match.schemaType || 'Service'} architecture enhances machine readability.`;
  }
}

export function generateAmbiguousClarification(_query: string): {
  question: string;
  options: Array<{ label: string; query: string }>;
} {
  return {
    question: `Are you looking for information on AEO services, a free visibility audit, or specific search engine optimisation pricing?`,
    options: [
      { label: 'AEO & GEO Services', query: 'What are AEObility AEO services?' },
      { label: 'Free Site Audit', query: 'Scan my website visibility' },
      { label: 'Blueprint Pricing ($995 AUD)', query: 'How much does the AEObility Blueprint cost?' }
    ]
  };
}

export function classifyCompanion5Intent(
  query: string,
  topMatchNode: KnowledgeNode | null,
  _routeContext?: string
): CompanionSearchResponse {
  const clean = query.toLowerCase().trim();

  // 1. Action Intent Check (Scan, Audit, Diagnostics, Telemetry, Check Score)
  const isActionIntent = /\b(scan|audit|telemetry|check my score|diagnose|analyze site|analyse site|run audit)\b/i.test(clean);
  if (isActionIntent) {
    return {
      intent: 'action',
      answer: "I can run a live AEO telemetry audit on your website. Submit your URL to inspect schema completeness, entity authority, and vector proximity scores.",
      triggerBillScan: true,
      cards: [
        {
          title: "Run Live Telemetry Audit",
          url: "/diagnostic",
          type: "action",
          description: "Inspect schema microdata, vector proximity, and RAG extraction risk.",
          ctaText: "Launch Diagnostic Audit ➔"
        }
      ],
      suggestedPills: ["What is AEO?", "View Packages & Pricing", "Explain GEO Services"]
    };
  }

  // 2. Navigation Intent Check (Where is X, Go to X, Show me pricing, Contact, About, Services)
  const isNavigationIntent = /\b(where|where's|find|show me|go to|link|pricing|cost|costs|contact|about|packages|solutions|knowledge hub|case studies)\b/i.test(clean);
  if (isNavigationIntent) {
    let targetUrl = '/solutions/aeo-blueprint';
    let targetTitle = 'The AEObility Blueprint ($995 AUD)';
    let desc = 'Complete 90-day AEO roadmap & entity audit (100% credited back on implementation).';

    if (clean.includes('pricing') || clean.includes('cost') || clean.includes('packages') || clean.includes('blueprint')) {
      targetUrl = '/solutions/aeo-blueprint';
      targetTitle = 'The AEObility Blueprint ($995 AUD)';
      desc = 'Complete 90-day AEO roadmap & entity audit (100% credited back on implementation).';
    } else if (clean.includes('geo') || clean.includes('maps') || clean.includes('local')) {
      targetUrl = '/solutions/geo-services';
      targetTitle = 'GEO Services & Local Map Matrix';
      desc = 'Local coordinate mapping and spatial vector alignment for Google & Apple Maps.';
    } else if (clean.includes('contact') || clean.includes('touch') || clean.includes('book') || clean.includes('quote')) {
      targetUrl = '/contact';
      targetTitle = 'Get a Quote & Contact Corridors';
      desc = 'Connect directly with Vince Baker for AEO strategy, custom project quotes & AI search consulting.';
    } else if (clean.includes('about') || clean.includes('vince')) {
      targetUrl = '/about';
      targetTitle = 'About AEObility & Vince Baker';
      desc = 'Discover our Australian AEO consultancy origins, entity graph, and team.';
    } else if (clean.includes('case') || clean.includes('bento') || clean.includes('studies')) {
      targetUrl = '/knowledge-hub/case-studies';
      targetTitle = 'Case Studies & Evidence Nodes';
      desc = 'Real-world AEO citation growth case studies including Baby Bento.';
    }

    return {
      intent: 'navigation',
      answer: `Here is the direct navigation route for ${targetTitle}.`,
      cards: [
        {
          title: targetTitle,
          url: targetUrl,
          type: 'page',
          description: desc,
          ctaText: 'Navigate to Page ➔'
        }
      ],
      suggestedPills: ["Scan My Site", "Explain AEO", "Show Pricing Options"]
    };
  }

  // 3. Service Discovery Intent Check (What services, packages, help with local, Shopify, comparison)
  const isServiceDiscovery = /\b(service|services|package|packages|offer|help with|shopify|sprint|consulting|compare)\b/i.test(clean);
  if (isServiceDiscovery) {
    return {
      intent: 'service_discovery',
      answer: "AEObility offers 3 primary AEO & AI Search marketing corridors tailored for Australian businesses:",
      cards: [
        {
          title: "1. The AEObility Blueprint ($995 AUD)",
          url: "/solutions/aeo-blueprint",
          type: "service",
          description: "Clarity Phase: Deep technical audit, entity score, and 90-day roadmap.",
          ctaText: "Explore Blueprint ➔"
        },
        {
          title: "2. AEO Implementation Sprints",
          url: "/solutions/aeo-sprint",
          type: "service",
          description: "High-density technical execution: schema injection, token rebalancing, RAG survival.",
          ctaText: "Explore Sprints ➔"
        },
        {
          title: "3. GEO & Local Map Marketing",
          url: "/solutions/geo-services",
          type: "service",
          description: "Spatial vector alignment & local coordinate mapping for voice search and map packs.",
          ctaText: "Explore GEO ➔"
        }
      ],
      suggestedPills: ["Scan My Site", "Where is Pricing?", "What is AEO?"]
    };
  }

  // 4. Content Answering Intent / Fallback Search Intent
  if (topMatchNode) {
    const groundedAns = generateGroundedAnswer(topMatchNode);
    return {
      intent: 'content',
      answer: groundedAns,
      cards: [
        {
          title: topMatchNode.pageName,
          url: topMatchNode.url,
          type: 'page',
          description: topMatchNode.description || topMatchNode.h1,
          ctaText: 'Read Full Guide ➔'
        }
      ],
      suggestedPills: ["Scan My Site", "View Packages & Pricing", "Help Me Choose a Service"],
      topMatch: {
        pageName: topMatchNode.pageName,
        url: topMatchNode.url
      }
    };
  }

  return {
    intent: 'fallback_search',
    answer: "AEObility specialises in Answer Engine Optimisation (AEO) and AI Search Marketing. Submit your website URL to inspect your site's AI visibility score.",
    suggestedPills: ["What is AEO?", "View Packages & Pricing", "Scan My Site"]
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
    return "That's a classic geography topic! AEObility focuses on geographic engine optimisation (GEO) to help local businesses rank across location maps.";
  }
  return `That sounds like a general topic! AEObility specialises in AI Search Optimisation (AEO) to help businesses build machine-readable entity networks.`;
}
