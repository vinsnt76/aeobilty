import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AEO vs SEO: Choosing the Right Strategy | AEObility",
  description: "A practical comparison of SEO, AEO, and GEO. Learn how Answer Engine Optimisation complements search foundations and how to choose the right strategy for your business. Micro-sprints from $495 ex. GST.",
  alternates: {
    canonical: "https://www.aeobility.com.au/services/aeo/comparison",
  },
  openGraph: {
    title: "AEO vs SEO: Choosing the Right Strategy | AEObility",
    description: "A practical comparison of SEO, AEO, and GEO. Learn how Answer Engine Optimisation complements search foundations.",
    url: "https://www.aeobility.com.au/services/aeo/comparison",
    siteName: "AEObility",
    images: [
      {
        url: "https://www.aeobility.com.au/images/services/aeo-vs-seo-comparison_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility AEO vs SEO comparison matrix chart contrasting legacy keyword search ranking against dense vector RAG retrieval systems.",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AEO vs SEO: Choosing the Right Strategy | AEObility",
    description: "A practical comparison of SEO, AEO, and GEO. Learn how Answer Engine Optimisation complements search foundations.",
    images: ["https://www.aeobility.com.au/images/services/aeo-vs-seo-comparison_AEObility.webp"],
  },
  keywords: [
    "aeo vs seo",
    "geo vs seo",
    "ai search marketing",
    "aeo vs seo vs geo",
    "seo aeo",
    "ai search vs traditional search"
  ]
};

export default function AEOVsSEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
