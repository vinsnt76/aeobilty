import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Welcome from '@/components/about/Welcome';
import About from '@/components/about/About';
import Projects from '@/components/about/Projects';
import Contact from '@/components/about/Contact';
import { ArrowLeft } from 'lucide-react';
import { roleConfigs } from '../config';
import { notFound } from 'next/navigation';

import CapabilityMatrix from '@/components/CapabilityMatrix';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(roleConfigs).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = roleConfigs[slug];
  if (!config) return {};
  
  return {
    title: config.metadata.title,
    description: config.metadata.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const config = roleConfigs[slug];
  if (!config) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `https://aeobility.com.au/about/${config.slug}#service`,
        "name": config.metadata.title.split('|')[0].trim(),
        "image": "https://aeobility.com.au/Profile-Picture-Vinnie.png",
        "description": config.metadata.description,
        "url": `https://aeobility.com.au/about/${config.slug}`,
        "telephone": "0480286282", 
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
        "founder": {
          "@id": "https://aeobility.com.au/#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/#person",
        "name": "Vinnie Baker",
        "jobTitle": "Founder & AEO Specialist",
        "worksFor": {
          "@id": "https://aeobility.com.au"
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
      
      {/* We pass the config to Welcome to customize the Hero Section */}
      <Welcome config={config} />
      
      {/* 
        The rest of the components use the unified AEObility narrative 
        ("Sharper, diagnostic, AEO > SEO theatre").
      */}
      <About />
      {slug === 'freelance-digital-specialist-perth' && <CapabilityMatrix />}
      <Contact />
    </>
  );
}
