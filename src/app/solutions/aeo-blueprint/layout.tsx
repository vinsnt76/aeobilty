import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The AEObility Blueprint: Deep Audit + 90-Day Roadmap",
  description: "Get a deep technical audit and an actionable 90-day strategic roadmap for $995. Fully credited back if you choose us for implementation.",
  alternates: {
    canonical: "https://www.aeobility.com.au/solutions/aeo-blueprint",
  },
  openGraph: {
    title: "The AEObility Blueprint: Deep Audit + 90-Day Roadmap",
    description: "Get a deep technical audit and an actionable 90-day strategic roadmap for $995. Fully credited back if you choose us for implementation.",
    url: "https://www.aeobility.com.au/solutions/aeo-blueprint",
    type: "website",
    siteName: "AEObility",
  },
  keywords: [
    "AEObility Blueprint",
    "marketing audit with strategic roadmap",
    "aeo consultant perth",
    "conversion rate optimisation specialist perth",
    "90-day marketing roadmap",
    "website visibility audit checklist",
    "transparent marketing audit",
    "technical gap analysis",
    "entity optimisation review",
    "local tracking audit"
  ]
};

export default function AEOBlueprintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
