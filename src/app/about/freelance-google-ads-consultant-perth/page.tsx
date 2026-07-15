import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Welcome from './components/Welcome';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Freelance Google Ads Consultant Perth | Vince Baker',
  description: 'Freelance Google Ads Consultant in Perth. Optimising feeds, tracking & Smart Bidding. If I can fix it straight away, no charge. Call 0480 286 282.',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://vincebaker.dev/about/freelance-google-ads-consultant-perth#service",
        "name": "Vince Baker – Freelance Google Ads Consultant Perth",
        "image": "https://vincebaker.dev/images/vince-baker-seo-specialist.jpg",
        "description": "Independent Google Ads Consultant with 15+ years of commercial experience across automation, tracking architecture, feed engineering, and scalable bidding strategies.",
        "url": "https://vincebaker.dev/about/freelance-google-ads-consultant-perth",
        "telephone": "", 
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "postalCode": "6060",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-31.9167",
          "longitude": "115.8500"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "17:30"
        },
        "founder": {
          "@id": "https://vincebaker.dev/#person"
        },
        "knowsAbout": [
          "Google Ads",
          "Smart Bidding",
          "Merchant Center",
          "GA4",
          "Server-Side Tracking",
          "Performance Max",
          "E-commerce Optimization",
          "ROAS Modeling"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://vincebaker.dev/#person",
        "name": "Vince Baker",
        "jobTitle": ["Google Ads Consultant", "Digital Systems Architect"],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Central TAFE"
        },
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Freelance Google Ads Consultant Perth"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/about" 
          className="flex items-center gap-2 px-4 py-2 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium text-white/80 hover:text-aeo-cyan hover:border-aeo-cyan/50 transition-all shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to About Hub
        </Link>
      </div>
      <Welcome />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
