import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Welcome from '@/components/about/Welcome';
import About from '@/components/about/About';
import Projects from '@/components/about/Projects';
import Contact from '@/components/about/Contact';
import CapabilityMatrix from '@/components/CapabilityMatrix';
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
    alternates: {
      canonical: `https://aeobility.com.au/about/${slug}`,
    }
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
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <Breadcrumbs />
      
      <main className="flex-grow w-full">
        {/* Customized Hero Section */}
        <Welcome config={config} />
        
        {/* Unified AEObility Story & Technical Frameworks */}
        <About />
        
        {/* Featured Projects & Case Studies (Target for View My Work CTA) */}
        <Projects />
        
        {/* Capability Matrix for Digital Specialist */}
        {slug === 'freelance-digital-specialist-perth' && <CapabilityMatrix />}
        
        {/* Digital Business Card & Contact Terminal */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
