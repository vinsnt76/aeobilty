import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Search Optimisation Brisbane | AEO & AI SEO Services | AEObility",
  description: "AI search optimisation in Brisbane for businesses that want citations in AI Overviews, ChatGPT and Perplexity. AEO, AI SEO and GEO services. Get a free audit.",
  alternates: {
    canonical: "https://aeobility.com.au/services/ai-search-marketing/brisbane",
  },
  openGraph: {
    title: "AI Search Optimisation Brisbane | AEO & AI SEO Services | AEObility",
    description: "AI search optimisation in Brisbane for businesses that want citations in AI Overviews, ChatGPT and Perplexity. AEO, AI SEO and GEO services. Get a free audit.",
    url: "https://aeobility.com.au/services/ai-search-marketing/brisbane",
    siteName: "AEObility",
    images: [
      {
        url: "https://aeobility.com.au/images/services/ai-search-marketing-strategy_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility AI search marketing strategy dashboard illustrating vector retrieval accuracy, prompt citation tracking, and structured entity verification.",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Optimisation Brisbane | AEO & AI SEO Services | AEObility",
    description: "AI search optimisation in Brisbane for businesses that want citations in AI Overviews, ChatGPT and Perplexity. AEO, AI SEO and GEO services. Get a free audit.",
    images: ["https://aeobility.com.au/images/services/ai-search-marketing-strategy_AEObility.webp"],
  },
  keywords: [
    "ai search marketing",
    "ai search strategy",
    "ai search marketing strategy",
    "ai search marketing examples",
    "answer engine prompt strategy",
    "aeo consultant perth",
    "generative search strategy"
  ]
};

export default function AISearchMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

