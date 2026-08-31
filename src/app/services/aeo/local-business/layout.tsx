import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Business Visibility across Maps & AI Search | AEObility',
  description: 'Ensure your local service business surfaces instantly in local map packs, AI assistants, and proximity engines. Built for Aussie trades and clinics.',
  alternates: {
    canonical: 'https://aeobility.com.au/services/aeo/local-business',
  },
  openGraph: {
    title: 'Local Business Visibility across Maps & AI Search | AEObility',
    description: 'Ensure your local service business surfaces instantly in local map packs, AI assistants, and proximity engines. Built for Aussie trades and clinics.',
    url: 'https://aeobility.com.au/services/aeo/local-business',
    siteName: 'AEObility',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Business Visibility across Maps & AI Search | AEObility',
    description: 'Ensure your local service business surfaces instantly in local map packs, AI assistants, and proximity engines. Built for Aussie trades and clinics.',
    images: ['https://aeobility.com.au/images/services/aeo-local-business_perth_AEObility.webp'],
  },
  keywords: [
    'local business visibility',
    'aeo marketers near me',
    'aeo services near me',
    'get found on maps',
    'local search optimisation perth',
    'proximity algorithm targeting',
    'local entity profiles',
    'NAP consistency',
    'hyper-local coordinates',
    'service area schema'
  ]
};

export default function LocalBusinessAEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
