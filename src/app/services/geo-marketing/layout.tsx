import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Geographic Engine Optimisation (GEO) Services in Perth | AEObility",
  description: "AEObility provides specialised Geographic Engine Optimisation (GEO) Services in Perth, structuring location-aware business facts, verified coordinates, and local entity signals across Search, Maps, and AI.",
  alternates: {
    canonical: "https://aeobility.com.au/services/geo-marketing",
  },
  openGraph: {
    title: "GEO Marketing Services & Local Visibility Sprints | AEObility",
    description: "Improve your local signal consistency across Search, Maps, and AI. Clean citations, fix internal linking, and deploy a Brand Facts page from $495 ex. GST.",
    url: "https://aeobility.com.au/services/geo-marketing",
    type: "website",
    siteName: "AEObility",
  },
  keywords: [
    "GEO Marketing Services",
    "Local Visibility Sprints",
    "Get Found on Maps Perth",
    "Citation Clean Up Australia",
    "Brand Facts Page Creation",
    "Local Internal Linking Sprint"
  ]
};

export default function GeoMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
