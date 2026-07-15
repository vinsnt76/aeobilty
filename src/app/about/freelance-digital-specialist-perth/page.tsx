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
  title: "Freelance Digital Specialist Perth | Vince Baker",
  description: "Portfolio and specialties of Vince Baker, Digital Specialist in Perth. If I can fix it straight away, no charge. Call 0480 286 282.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Vince Baker",
      "jobTitle": ["Digital Specialist", "Digital Systems Architect"],
      "description": "Independent digital specialist with 15+ years of commercial experience across automation, SEO, AI prompting, CRM systems, and digital marketing.",
      "knowsAbout": [
        "SEO", "AEO/GEO", "Automation", "n8n", "Airtable", "Google Ads", "GA4", "Schema markup", "AI agents", "Voiceflow", "CRM systems"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au"
      },
      "sameAs": [
        "https://www.linkedin.com/in/vince-baker/"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Freelance Digital Specialist Perth"
      },
      "alumniOf": [
        { "@type": "EducationalOrganization", "name": "Central TAFE" },
        { "@type": "EducationalOrganization", "name": "William Angliss" }
      ]
    },
    "about": [
      { "@type": "Thing", "name": "Freelance SEO Consultant Perth" },
      { "@type": "Thing", "name": "Freelance Google Ads Consultant Perth" },
      { "@type": "Thing", "name": "Freelance Digital Specialist Perth" },
      { "@type": "Thing", "name": "Freelance AI Consultant Perth" }
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
