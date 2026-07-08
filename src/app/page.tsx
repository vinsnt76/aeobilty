import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import VideoExplainer from '@/components/VideoExplainer';
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
    "name": "Vinnie Baker",
    "jobTitle": "Founder",
    "url": "https://aeobility.com.au/vince-baker",
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
      "name": "Vinnie Baker"
    },
    "sameAs": [
      "https://www.linkedin.com/company/133445734/",
      "https://www.instagram.com/aeo.bility/",
      "https://www.facebook.com/profile.php?id=61591781069830",
      "https://www.youtube.com/channel/UCcQMe3h157C2MDt70lohXpg"
    ]
  };

  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Our Approach to Answer Engine Search",
    "description": "Learn how AEObility refactors digital content to rank and get cited inside conversational AI systems and map interfaces.",
    "thumbnailUrl": [
      "https://aeobility.com.au/aeobility-video-explainer.webp"
    ],
    "uploadDate": "2026-07-05T00:00:00+08:00",
    "contentUrl": "https://aeobility.com.au/videos/explainer.mp4",
    "embedUrl": "https://drive.google.com/file/d/18D0_A6T5Xikp7wvAg0AGcDDXRtdQKlG1/preview"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />

      <Navbar />
      <Hero />
      <SocialProof />
      <VideoExplainer />
      <USPGrid />
      <HowItWorks />
      <BlueprintSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
