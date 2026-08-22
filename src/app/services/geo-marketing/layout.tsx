import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GEO Marketing Services & Local Visibility Sprints | AEObility",
  description: "Improve your local signal consistency across Search, Maps, and AI. Clean citations, fix internal linking, and deploy a Brand Facts page from $495 ex. GST.",
  alternates: {
    canonical: "https://www.aeobility.com.au/services/geo-marketing",
  },
  openGraph: {
    title: "GEO Marketing Services & Local Visibility Sprints | AEObility",
    description: "Improve your local signal consistency across Search, Maps, and AI. Clean citations, fix internal linking, and deploy a Brand Facts page from $495 ex. GST.",
    url: "https://www.aeobility.com.au/services/geo-marketing",
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
