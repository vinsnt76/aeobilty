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

export interface SearchQueryRequest {
  query: string;
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
}
