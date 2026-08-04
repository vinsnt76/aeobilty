export interface KnowledgeNode {
  pageName: string;
  url: string;
  h1: string;
  focusKeyphrase: string;
  latentKeywords: string;
  schemaType: string;
  description: string;
  primaryKeywords?: string;
  secondaryKeywords?: string;
  embedding: number[];
}

export type SearchQueryResultType = 
  | 'visibility'
  | 'general_knowledge'
  | 'ambiguous'
  | 'off_topic_repeat';

export interface SearchQueryRequest {
  query: string;
  previousQueryCount?: number;
}

export interface SearchQueryResponse {
  answer: string;
  topMatch: {
    pageName: string;
    url: string;
    h1: string;
    focusKeyphrase: string;
    schemaType: string;
    description: string;
  } | null;
  similarityScore: number;
  isFallback: boolean;
  isCaution: boolean;
  resultType: SearchQueryResultType;
  clarifyingQuestion?: string;
  offerDiagnosticTool?: boolean;
  suggestedOptions?: Array<{ label: string; query: string }>;
}

export type CompanionIntent =
  | 'navigation'
  | 'content'
  | 'service_discovery'
  | 'action'
  | 'fallback_search';

export interface CompanionCard {
  title: string;
  url: string;
  type: 'page' | 'service' | 'action';
  description?: string;
  ctaText?: string;
}

export interface CompanionSearchResponse {
  intent: CompanionIntent;
  answer: string;
  cards?: CompanionCard[];
  suggestedPills?: string[];
  triggerBillScan?: boolean;
  topMatch?: {
    pageName: string;
    url: string;
  } | null;
  similarityScore?: number;
}
