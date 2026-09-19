import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What is AEO? Answer Engine Optimisation Guide | AEObility",
  description: "Discover what Answer Engine Optimisation (AEO) means in digital marketing. Learn how machine learning models ingest, verify, & cite facts.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/what-is-aeo",
  },
  openGraph: {
    title: "What is AEO? Answer Engine Optimisation Guide | AEObility",
    description: "Discover what Answer Engine Optimisation (AEO) means in digital marketing. Learn how machine learning models ingest, verify, & cite facts.",
    url: "https://aeobility.com.au/knowledge-hub/what-is-aeo",
    type: "article",
    siteName: "AEObility",
  },
  keywords: [
    "what is aeo",
    "aeo meaning",
    "what is aeo in digital marketing",
    "answer engine optimisation guide",
    "AEO vs SEO"
  ]
};

export default function WhatIsAeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
