import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Generative Engine Optimisation (GEO) Services in Perth | AEObility",
  description: "AEObility helps Perth and Australian businesses improve visibility across Google AI features, ChatGPT Search, Perplexity and Gemini. Diagnostic-led GEO and local visibility sprints from $495 ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/services/geo-marketing",
  },
  openGraph: {
    title: "Generative Engine Optimisation (GEO) Services in Perth | AEObility",
    description: "Find out why your business is missing, misrepresented or uncited in AI search-and fix the content, entity and local visibility signals that make it easier to verify.",
    url: "https://aeobility.com.au/services/geo-marketing",
    type: "website",
    siteName: "AEObility",
  },
  keywords: [
    "Generative Engine Optimisation Perth",
    "GEO Services Perth",
    "AI Search Visibility Audit",
    "Citation Clean Up Australia",
    "Brand Facts Page Creation",
    "Local Entity Architecture Sprint",
    "Structured Data Validation"
  ]
};

export default function GeoMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

