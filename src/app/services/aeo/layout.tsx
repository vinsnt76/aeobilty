import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AEO Services & Answer Engine Optimisation | AEObility",
  description: "Restructure your digital footprint for AI-first search engines and modern discovery platforms. Micro-sprints from $495 ex. GST, Blueprint $995 ex. GST, Foundation from $3,195 ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo",
  },
  openGraph: {
    title: "AEO Services & Answer Engine Optimisation | AEObility",
    description: "Restructure your digital footprint for AI-first search engines and modern discovery platforms. Four foundational AEO pillars and transparent sprint pricing.",
    url: "https://aeobility.com.au/services/aeo",
    siteName: "AEObility",
    images: [
      {
        url: "https://aeobility.com.au/images/services/canonical-aeo-services-hub_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility canonical Answer Engine Optimisation dashboard mapping 4 foundational pillars, structured content deliverables, and AEO sprint execution.",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AEO Services & Answer Engine Optimisation | AEObility",
    description: "Restructure your digital footprint for AI-first search engines and modern discovery platforms.",
    images: ["https://aeobility.com.au/images/services/canonical-aeo-services-hub_AEObility.webp"],
  },
  keywords: [
    "aeo services",
    "answer engine optimisation",
    "aeo consultant",
    "structured content services",
    "semantic lattice map",
    "positional bias",
    "semantic density",
    "retrieval strength"
  ]
};

export default function AEORootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
