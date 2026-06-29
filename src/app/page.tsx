import React from 'react';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import USPGrid from '@/components/USPGrid';
import HowItWorks from '@/components/HowItWorks';
import BlueprintSection from '@/components/BlueprintSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AEO Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AEObility",
      "url": "https://aeobility.com.au"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "serviceType": "Search, Maps & AI Visibility",
    "url": "https://aeobility.com.au",
    "offers": {
      "@type": "Offer",
      "name": "Free Visibility Audit",
      "price": "0.00",
      "priceCurrency": "AUD"
    }
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vince Baker",
    "jobTitle": "Founder",
    "url": "https://aeobility.com.au",
    "sameAs": [
      "https://www.linkedin.com/in/vince-baker/"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "AEObility",
      "url": "https://aeobility.com.au"
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Hero />
      <SocialProof />
      <USPGrid />
      <HowItWorks />
      <BlueprintSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
