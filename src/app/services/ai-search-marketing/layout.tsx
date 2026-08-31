import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Search Marketing & Strategy | AEObility",
  description: "Make your business easier for search engines, digital assistants and AI search platforms to identify, understand, and reference. AEO Sprints from $495 AUD ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/services/ai-search-marketing",
  },
  openGraph: {
    title: "AI Search Marketing & Strategy | AEObility",
    description: "Make your business easier for search engines, digital assistants and AI search platforms to identify, understand, and reference.",
    url: "https://aeobility.com.au/services/ai-search-marketing",
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
    title: "AI Search Marketing & Strategy | AEObility",
    description: "Make your business easier for search engines, digital assistants and AI search platforms to identify, understand, and reference.",
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
