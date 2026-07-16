import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Welcome from '@/components/about/Welcome';
import About from '@/components/about/About';
import Experience from '@/components/about/Experience';
import Projects from '@/components/about/Projects';
import Contact from '@/components/about/Contact';
import { ArrowLeft } from 'lucide-react';
import { roleConfigs } from '../config';
import { notFound } from 'next/navigation';

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
        "@id": `https://vincebaker.dev/about/${config.slug}#service`,
        "name": config.metadata.title.split('|')[0].trim(),
        "image": "https://vincebaker.dev/images/vince-baker-seo-specialist.jpg",
        "description": config.metadata.description,
        "url": `https://vincebaker.dev/about/${config.slug}`,
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
        "founder": {
          "@id": "https://vincebaker.dev/#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://vincebaker.dev/#person",
        "name": "Vince Baker",
        "jobTitle": "Technical Architect & Consultant",
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
      
      {/* We pass the config to Welcome to customize the Hero Section */}
      <Welcome config={config} />
      
      {/* 
        The rest of the components use the unified AEObility narrative 
        ("Sharper, diagnostic, AEO > SEO theatre").
      */}
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
