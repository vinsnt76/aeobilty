import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Local Business Visibility across Maps & AI Search | AEObility",
  description: "Improve how clearly your Australian business is represented across Search, Google Business Profile, Maps, local directories, and AI search engines. Micro-Sprints from $495 ex. GST.",
  alternates: {
    canonical: "https://www.aeobility.com.au/services/aeo/local-business",
  },
  openGraph: {
    title: "Local Business Visibility across Maps & AI Search | AEObility",
    description: "Improve how clearly your Australian business is represented across Search, Google Business Profile, Maps, local directories, and AI search engines.",
    url: "https://www.aeobility.com.au/services/aeo/local-business",
    siteName: "AEObility",
    images: [
      {
        url: "https://www.aeobility.com.au/images/services/local-business-visibility-perth_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility local business visibility dashboard displaying Google Business Profile optimisation, local citation alignment, and map pack tracking in Perth WA.",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Business Visibility across Maps & AI Search | AEObility",
    description: "Improve how clearly your Australian business is represented across Search, Google Business Profile, Maps, local directories, and AI search engines.",
    images: ["https://www.aeobility.com.au/images/services/local-business-visibility-perth_AEObility.webp"],
  },
  keywords: [
    "local business visibility",
    "aeo marketers near me",
    "aeo services near me",
    "get found on maps",
    "local search optimisation perth",
    "proximity algorithm targeting",
    "aeo consultant perth"
  ]
};

export default function LocalBusinessAEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
