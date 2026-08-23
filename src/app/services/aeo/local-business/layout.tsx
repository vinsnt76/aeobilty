import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Search & AEO for Local Businesses | AEObility',
  description: 'Fix inconsistent business details, missing suburb schema, and location mapping gaps across Search, Maps, and AI answers. Micro-Sprints from $495 ex. GST.',
  alternates: {
    canonical: 'https://www.aeobility.com.au/services/aeo/local-business',
  },
  openGraph: {
    title: 'Local Search & AEO for Local Businesses | AEObility',
    description: 'Fix inconsistent business details, missing suburb schema, and location mapping gaps across Search, Maps, and AI answers. Micro-Sprints from $495 ex. GST.',
    url: 'https://www.aeobility.com.au/services/aeo/local-business',
    siteName: 'AEObility',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Search & AEO for Local Businesses | AEObility',
    description: 'Fix inconsistent business details, missing suburb schema, and location mapping gaps across Search, Maps, and AI answers.',
    images: ['https://www.aeobility.com.au/images/services/aeo-local-business_perth_AEObility.webp'],
  },
  keywords: [
    'local business visibility',
    'local search and aeo for local businesses',
    'aeo marketers near me',
    'aeo services near me',
    'get found on maps',
    'local search optimisation perth',
    'proximity algorithm targeting',
    'aeo consultant perth'
  ]
};

export default function LocalBusinessAEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
