import React from 'react';
import { Metadata } from 'next';
import VinceBakerClientPage from './VinceBakerClientPage';

export const metadata: Metadata = {
  title: "Vince Baker (Vinnie Baker) | Lead AEO & SEO Specialist",
  description: "Vince Baker (Vinnie Baker) is the founder of AEObility & Lead AEO Specialist in Perth, WA, specialising in semantic lattice mapping.",
  alternates: {
    canonical: "https://aeobility.com.au/vince-baker",
  },
  keywords: [
    "Vinnie Baker",
    "Vince Baker",
    "AEO Specialist Perth",
    "AI Search Consultant",
    "AEObility Founder",
    "seo specialist perth"
  ]
};

export default function VinceBakerPage() {
  return <VinceBakerClientPage />;
}
