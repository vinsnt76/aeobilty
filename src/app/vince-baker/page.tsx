import React from 'react';
import { Metadata } from 'next';
import VinceBakerClientPage from './VinceBakerClientPage';

export const metadata: Metadata = {
  title: "Vinnie Baker | Founder & AEO Specialist | AEObility",
  description: "Digital business card and profile for Vinnie Baker, Founder and AEO Specialist at AEObility in Perth, Western Australia.",
  alternates: {
    canonical: "https://aeobility.com.au/vince-baker",
  },
  keywords: [
    "Vinnie Baker",
    "Vince Baker",
    "AEO Specialist Perth",
    "AI Search Consultant",
    "AEObility Founder"
  ]
};

export default function VinceBakerPage() {
  return <VinceBakerClientPage />;
}
