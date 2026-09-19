import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Search Agency & AEO Consultancy Australia | AEObility",
  description: "Specialist Australian AI search agency and AEO consultancy. We help growth-focused businesses optimize entity schema and content for Google AI Overviews, ChatGPT, and Perplexity.",
  alternates: {
    canonical: "https://aeobility.com.au/services/ai-search-agency",
  },
  openGraph: {
    title: "AI Search Agency & AEO Consultancy Australia | AEObility",
    description: "Specialist Australian AI search agency and AEO consultancy. We help growth-focused businesses optimize entity schema and content for Google AI Overviews, ChatGPT, and Perplexity.",
    url: "https://aeobility.com.au/services/ai-search-agency",
    type: "website",
    siteName: "AEObility",
  },
  keywords: [
    "aeo agency perth",
    "ai search agency australia",
    "ai search marketing consultancy",
    "generative engine optimisation agency",
    "AEO marketing consultancy"
  ]
};

export default function AiSearchAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
