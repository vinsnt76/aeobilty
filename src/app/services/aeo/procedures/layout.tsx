import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best AEO Strategies: How to Make Your Business AI-Readable | AEObility",
  description: "Discover the best AEO strategies to make your business AI-readable. Actionable procedures for structured data, atomic answer blocks, entity authority, and RAG retrieval optimisation. Micro-sprints from $495 ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/procedures",
  },
  openGraph: {
    title: "Best AEO Strategies: How to Make Your Business AI-Readable | AEObility",
    description: "Actionable AEO procedures for structured data, atomic answer blocks, entity authority, and RAG retrieval optimisation.",
    url: "https://aeobility.com.au/services/aeo/procedures",
    siteName: "AEObility",
    images: [
      {
        url: "https://aeobility.com.au/images/services/aeo-procedures-and-strategies_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility step-by-step AEO procedure guide illustrating atomic answer block structuring, nested JSON-LD schema, and RAG retrieval optimisation.",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AEO Strategies: How to Make Your Business AI-Readable | AEObility",
    description: "Discover the best AEO strategies to make your business AI-readable. Actionable procedures for structured data, atomic answer blocks, entity authority, and RAG retrieval optimisation.",
    images: ["https://aeobility.com.au/images/services/aeo-procedures-and-strategies_AEObility.webp"],
  },
  keywords: [
    "best aeo strategies",
    "aeo procedures",
    "aeo tactics",
    "make business ai readable",
    "ai search strategies",
    "structured content optimisation"
  ]
};

export default function AEOProceduresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
