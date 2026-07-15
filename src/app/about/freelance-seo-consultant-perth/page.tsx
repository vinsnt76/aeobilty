import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Welcome from './components/Welcome';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Freelance SEO Consultant Perth | Vince Baker',
  description: 'Perth Freelance SEO Specialist building semantic & technical search frameworks. If I can fix it straight away, no charge. Call 0480 286 282.',
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://vincebaker.dev/about/freelance-seo-consultant-perth#service",
        "name": "Vince Baker – Freelance SEO Consultant Perth",
        "image": "https://vincebaker.dev/images/vince-baker-seo-specialist.jpg",
        "description": "Freelance SEO Consultant based in Perth, specialising in technical SEO audits, semantic search engineering, and Answer Engine Optimisation (AEO) frameworks.",
        "url": "https://vincebaker.dev/about/freelance-seo-consultant-perth",
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
          "Search Engine Optimisation",
          "Technical SEO",
          "Answer Engine Optimisation (AEO)",
          "Semantic Web",
          "Schema Markup",
          "Google Search Console",
          "SEMrush",
          "Data Tracking & Attribution"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://vincebaker.dev/#person",
        "name": "Vince Baker",
        "jobTitle": "Technical Architect & SEO Consultant",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Central TAFE"
        },
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance"
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
      <Projects />
      <Contact />
    </>
  );
}
