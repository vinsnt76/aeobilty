import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutUsContent from '@/components/AboutUsContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us: Automation Consultants & Architects | AEObility",
  description: "Meet the technical architects behind AEObility. Over 15 years engineering custom code, business automations, and AEO systems in Perth.",
  keywords: [
    "digital marketing specialist perth",
    "automation consultant western australia",
    "data structured content agency",
    "technical marketing architect",
    "jargon free optimization specialist",
    "australian marketing experts"
  ]
};

export default function AboutPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://aeobility.com.au/#organization",
    "name": "AEObility",
    "url": "https://aeobility.com.au",
    "logo": "https://aeobility.com.au/Profile-Picture-Vinnie.png",
    "founder": {
      "@type": "Person",
      "name": "Vince Baker",
      "jobTitle": "Founder & AEO Specialist",
      "url": "https://aeobility.com.au/vince-baker",
      "sameAs": [
        "https://www.linkedin.com/in/vince-baker/",
        "https://www.reddit.com/user/Bluebird-Flat/"
      ]
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://aeobility.com.au/#localbusiness",
    "name": "AEObility",
    "image": "https://aeobility.com.au/Profile-Picture-Vinnie.png",
    "url": "https://aeobility.com.au/about",
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
    },
    "founder": {
      "@type": "Person",
      "name": "Vince Baker",
      "jobTitle": "Founder & AEO Specialist",
      "url": "https://aeobility.com.au/vince-baker",
      "sameAs": [
        "https://www.linkedin.com/in/vince-baker/",
        "https://www.reddit.com/user/Bluebird-Flat/"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schemas */}
      <script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <Navbar />
      <AboutUsContent />
      <Footer />
    </div>
  );
}
