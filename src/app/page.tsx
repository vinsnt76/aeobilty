import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import USPGrid from '@/components/USPGrid';
import HowItWorks from '@/components/HowItWorks';
import BlueprintSection from '@/components/BlueprintSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "AEO Services for Australian Businesses | AEObility",
  description: "Get found across Search, Maps, and AI systems. Enter your website URL for a free visibility audit delivered straight to your inbox.",
  keywords: [
    "AI Search Optimisation Australia",
    "ai search",
    "ai seo",
    "artificial intelligence seo",
    "local business visibility",
    "get found on google maps",
    "online visibility audit",
    "machine-readable content",
    "conversational search",
    "intent matching"
  ]
};

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

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AEObility",
    "image": "https://aeobility.com.au/Profile-Picture-Vinnie.png",
    "url": "https://aeobility.com.au",
    "telephone": "0480 286 282",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Perth",
      "addressRegion": "Western Australia",
      "addressCountry": "Australia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -31.9505,
      "longitude": 115.8605
    }
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AEObility",
    "url": "https://aeobility.com.au",
    "logo": "https://aeobility.com.au/Profile-Picture-Vinnie.png",
    "founder": {
      "@type": "Person",
      "name": "Vince Baker"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <Navbar />
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
