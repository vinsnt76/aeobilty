import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The $995 AEO Blueprint & Technical Diagnostic | AEObility",
  description: "Get a complete 90-day AEO execution blueprint for $995 AUD. Full implementation cost offset if AEObility executes setup.",
  alternates: {
    canonical: "https://aeobility.com.au/solutions/aeo-blueprint",
  },
  openGraph: {
    title: "The $995 AEO Blueprint & Technical Diagnostic | AEObility",
    description: "Get a complete 90-day AEO execution blueprint for $995 AUD. Full implementation cost offset if AEObility executes setup.",
    url: "https://aeobility.com.au/solutions/aeo-blueprint",
    type: "website",
    siteName: "AEObility",
  },
  keywords: [
    "aeo services",
    "aeo consultant australia",
    "AEObility Blueprint",
    "marketing audit with strategic roadmap",
    "aeo consultant perth",
    "90-day marketing roadmap"
  ]
};

export default function AEOBlueprintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
