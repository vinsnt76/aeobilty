import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI SEO Tools & Technology Comparison Hub | AEObility",
  description: "Compare AI search software, schema tools, and the retrieval systems that feed ChatGPT, Perplexity, and Google AI Overviews.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/ai-seo-tools",
  },
  openGraph: {
    title: "AI SEO Tools & Technology Comparison Hub | AEObility",
    description: "Compare AI search software, schema tools, and the retrieval systems that feed ChatGPT, Perplexity, and Google AI Overviews.",
    url: "https://aeobility.com.au/knowledge-hub/ai-seo-tools",
    type: "website",
    siteName: "AEObility",
  },
  keywords: [
    "ai seo tools",
    "ai seo tools perth",
    "chatgtp seo",
    "seo ai tools",
    "AEO tools",
    "schema generators",
    "AI search retrieval tools",
    "Perth AEO telemetry"
  ]
};

export default function AiSeoToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
