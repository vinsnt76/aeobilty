import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI SEO Tools & Technology Comparison Hub | AEObility",
  description: "Compare top AI SEO tools, automated schema generators & LLM vector parsers. Optimise your brand for ChatGPT, Perplexity & AI Overviews.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/ai-seo-tools",
  },
  openGraph: {
    title: "AI SEO Tools & Technology Comparison Hub | AEObility",
    description: "Compare top AI SEO tools, automated schema generators & LLM vector parsers. Optimise your brand for ChatGPT, Perplexity & AI Overviews.",
    url: "https://aeobility.com.au/knowledge-hub/ai-seo-tools",
    type: "website",
    siteName: "AEObility",
  },
  keywords: [
    "ai seo tools",
    "chatgtp seo",
    "seo ai tools",
    "AEO tools",
    "schema generators",
    "LLM vector parsers"
  ]
};

export default function AiSeoToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
