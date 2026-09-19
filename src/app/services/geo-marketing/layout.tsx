import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Generative Engine Optimisation (GEO) Services | AEObility",
  description: "Engineering generative engine optimisation (GEO) & schema graphs for AI search engines. Boost your brand citation scores on ChatGPT & Gemini.",
  alternates: {
    canonical: "https://aeobility.com.au/services/geo-marketing",
  },
  openGraph: {
    title: "Generative Engine Optimisation (GEO) Services | AEObility",
    description: "Engineering generative engine optimisation (GEO) & schema graphs for AI search engines. Boost your brand citation scores on ChatGPT & Gemini.",
    url: "https://aeobility.com.au/services/geo-marketing",
    type: "website",
    siteName: "AEObility",
  },
  keywords: [
    "google engine optimization",
    "geo agency",
    "generative engine optimisation",
    "Generative Engine Optimisation Perth",
    "GEO Services Perth",
    "AI Search Visibility Audit",
    "Citation Clean Up Australia"
  ]
};

export default function GeoMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

