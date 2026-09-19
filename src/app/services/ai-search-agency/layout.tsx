import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Search Agency & AEO Marketing Consultancy | AEObility",
  description: "Deploy custom AI search marketing strategies for generative engines (Gemini, ChatGPT, Perplexity). Elevate enterprise brand citation scores.",
  alternates: {
    canonical: "https://aeobility.com.au/services/ai-search-agency",
  },
  openGraph: {
    title: "AI Search Agency & AEO Marketing Consultancy | AEObility",
    description: "Deploy custom AI search marketing strategies for generative engines (Gemini, ChatGPT, Perplexity). Elevate enterprise brand citation scores.",
    url: "https://aeobility.com.au/services/ai-search-agency",
    type: "website",
    siteName: "AEObility",
  },
  keywords: [
    "aeo agency",
    "ai search agency",
    "ai search marketing",
    "generative engine optimisation agency",
    "AEO marketing consultancy"
  ]
};

export default function AiSearchAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
