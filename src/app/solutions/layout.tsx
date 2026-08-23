import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AEO Service Costs, Packages & Sprints | AEObility",
  description: "Explore transparent pricing models for Australian businesses. Standalone $995 AEObility Blueprint audit, fixed-scope micro-sprints from $495 ex. GST, and Foundation Implementation.",
  alternates: {
    canonical: "https://www.aeobility.com.au/solutions",
  },
  openGraph: {
    title: "AEO Service Costs, Packages & Sprints | AEObility",
    description: "Explore transparent pricing models for Australian businesses. Standalone $995 AEObility Blueprint audit, fixed-scope micro-sprints from $495 ex. GST, and Foundation Implementation.",
    url: "https://www.aeobility.com.au/solutions",
    siteName: "AEObility",
    images: [
      {
        url: "https://www.aeobility.com.au/images/solutions/aeo-solutions-and-pricing-framework_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility master solutions and pricing framework dashboard displaying transparent engagement tiers, micro-sprints, and Blueprint credit terms.",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AEO Service Costs, Packages & Sprints | AEObility",
    description: "Explore transparent pricing models for Australian businesses.",
    images: ["https://www.aeobility.com.au/images/solutions/aeo-solutions-and-pricing-framework_AEObility.webp"],
  },
  keywords: [
    "aeo service cost",
    "transparent digital marketing pricing",
    "90-day marketing roadmap",
    "marketing audit with strategic roadmap",
    "no contract marketing agency",
    "aeo sprints"
  ]
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
