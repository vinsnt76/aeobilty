import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AEO Technical Sprints & Schema Deployments | AEObility",
  description: "Focused, fixed-scope implementation for your website, structured data and priority service pages. Micro-Sprints from $495 AUD ex. GST.",
  alternates: {
    canonical: "https://www.aeobility.com.au/solutions/aeo-sprint",
  },
  openGraph: {
    title: "AEO Technical Sprints & Schema Deployments | AEObility",
    description: "Focused, fixed-scope implementation for your website, structured data and priority service pages. Micro-Sprints from $495 AUD ex. GST.",
    url: "https://www.aeobility.com.au/solutions/aeo-sprint",
    type: "website",
    siteName: "AEObility",
  },
  keywords: [
    "AEO Technical Sprints",
    "Schema Sprint Perth",
    "Atomic Answer Blocks",
    "Passage Level Chunking",
    "Foundation Implementation",
    "AEObility Micro-Sprints"
  ]
};

export default function AEOSprintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
