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
