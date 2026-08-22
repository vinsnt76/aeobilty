import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AEO Services, Sprints & Fixed Pricing | AEObility",
  description: "Discover clear, fixed-price implementation work for Australian businesses. Choose a strategic roadmap, fix a single priority, or build a strong digital foundation.",
  alternates: {
    canonical: "https://aeobility.com.au/solutions",
  },
  keywords: [
    "AEO Services Australia",
    "transparent digital marketing pricing",
    "AEO technical sprints",
    "fixed price AEO implementation",
    "strategic audit and roadmap",
    "no-contract marketing agency",
    "pricing clarity",
    "local visibility sprints"
  ]
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
