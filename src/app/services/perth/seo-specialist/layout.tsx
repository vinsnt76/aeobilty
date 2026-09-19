import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SEO Specialist Perth | Freelance AEO Consultant | AEObility",
  description: "Perth SEO specialist & freelance AEO consultant engineering local semantic search frameworks. If I can fix it straight away, no charge.",
  alternates: {
    canonical: "https://aeobility.com.au/services/perth/seo-specialist",
  },
  openGraph: {
    title: "SEO Specialist Perth | Freelance AEO Consultant | AEObility",
    description: "Perth SEO specialist & freelance AEO consultant engineering local semantic search frameworks. If I can fix it straight away, no charge.",
    url: "https://aeobility.com.au/services/perth/seo-specialist",
    type: "website",
    siteName: "AEObility",
  },
  keywords: [
    "seo specialist perth",
    "freelance seo consultant",
    "seo freelancer perth",
    "AEO consultant perth",
    "local SEO perth",
    "generative engine optimisation perth"
  ]
};

export default function PerthSeoSpecialistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
