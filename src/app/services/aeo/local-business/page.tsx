import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Compass,
  PhoneCall,
  Check
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "Local Business Visibility across Maps & AI Search | AEObility Perth",
  description: "Ensure your Perth local service business surfaces in map packs, AI assistants, and proximity search engines. Built for WA trades, clinics, and professional services.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/local-business",
  },
};

export default function LocalBusinessAEOPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://aeobility.com.au/#localbusiness",
        "name": "AEObility",
        "legalName": "Trekaboutoz trading as AEObility",
        "url": "https://aeobility.com.au",
        "telephone": "+61-8-9000-0000",
        "email": "contact@aeobility.com.au",
        "priceRange": "$$",
        "description": "Local business visibility across maps, voice search, and conversational AI assistants for Perth and Australian SMBs.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Perth Business Hub",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "postalCode": "6000",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -31.9523,
          "longitude": 115.8613
        },
        "areaServed": [
          { "@type": "City", "name": "Perth" },
          { "@type": "AdministrativeArea", "name": "Western Australia" },
          { "@type": "City", "name": "West Perth" },
          { "@type": "City", "name": "Subiaco" },
          { "@type": "City", "name": "Fremantle" },
          { "@type": "City", "name": "Joondalup" },
          { "@type": "City", "name": "Stirling" },
          { "@type": "City", "name": "Victoria Park" },
          { "@type": "City", "name": "Midland" },
          { "@type": "City", "name": "Rockingham" }
        ],
        "sameAs": [
          "https://www.truelocal.com.au/business/aeobility",
          "https://www.yellowpages.com.au/wa/perth/aeobility"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/aeo/local-business#service",
        "name": "Local Business Visibility Services",
        "description": "Ensure your local service business surfaces in local map packs, voice search, and conversational AI assistants.",
        "provider": {
          "@id": "https://aeobility.com.au/#localbusiness"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Perth, Western Australia"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/aeo/local-business#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does AEO help local Perth service businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AEO ensures your business details, operating suburbs, services, and pricing factors are explicitly structured so AI assistants, Google Maps, and voice search recommend your local trade or clinic."
            }
          },
          {
            "@type": "Question",
            "name": "What is NAP consistency and why does it matter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NAP consistency means your Name, Address, and Phone number are formatted identically across your website, Google Business Profile, and Australian directories like True Local and Yellow Pages AU."
            }
          }
        ]
      }
    ]
  };

  const localPillars = [
    {
      title: "Dominating Local Map Packs",
      desc: "Appearing in top local map pack results is essential for Perth service providers. We align your Google Business Profile (GBP), enforce NAP consistency across Australian directories, and deploy nested LocalBusiness schema.",
      icon: <MapPin className="w-5 h-5 text-aeo-cyan" />
    },
    {
      title: "Voice & Conversational Search Proximity",
      desc: "When prospective clients ask Siri, Google Assistant, or ChatGPT for local recommendations ('plumber near West Perth' or 'clinic in Subiaco'), we ensure your geographic coordinates and service definitions match.",
      icon: <Compass className="w-5 h-5 text-aeo-purple" />
    },
    {
      title: "Structured Schema for WA Trades & Clinics",
      desc: "We deploy explicit ServiceArea, GeoCoordinates, and PostalAddress microdata blocks to define your exact operational suburbs across Perth metro and regional Western Australia.",
      icon: <Building2 className="w-5 h-5 text-aeo-cyan" />
    }
  ];

  const PerthSuburbs = [
    "Perth CBD", "West Perth", "East Perth", "Subiaco", "Leederville",
    "Victoria Park", "South Perth", "Joondalup", "Stirling", "Scarborough",
    "Fremantle", "Booragoon", "Cannington", "Rockingham", "Midland"
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full flex flex-col gap-12">
        <section className="flex flex-col gap-10">
          
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Perth &amp; WA Regional Visibility System</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Local Business Visibility: <span className="text-gradient-aeo">GEO &amp; AI Search System</span>
            </h1>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              Ensure your Perth service business surfaces accurately across Google Maps, Apple Maps, local voice search, and conversational AI assistants.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {localPillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3 hover:border-white/20 transition-all">
                <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Perth Suburban Coverage Grid */}
          <div className="p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Geographic Service Footprint</span>
              <h2 className="text-xl font-bold text-white">Targeted Perth &amp; WA Operating Regions</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Explicitly declared in structured JSON-LD schema microdata to establish hyper-local signal proximity for search engines.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {PerthSuburbs.map((suburb, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/80 font-mono inline-flex items-center gap-1.5"
                >
                  <MapPin className="w-3 h-3 text-aeo-cyan" />
                  {suburb}
                </span>
              ))}
            </div>
          </div>

          {/* Local Optimization Checklist Box */}
          <div className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-aeo-cyan" />
              Perth Local Business AEO Checklist
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-light text-white/80">
              <div className="flex gap-2 items-start">
                <Check className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Format Name, Address, and Phone (NAP) identically across True Local, Yellow Pages AU, and site footers.</span>
              </div>
              <div className="flex gap-2 items-start">
                <Check className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Deploy nested LocalBusiness schema with explicit GeoCoordinates (-31.9523, 115.8613).</span>
              </div>
              <div className="flex gap-2 items-start">
                <Check className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Align Google Business Profile primary category and product catalog with on-site service pages.</span>
              </div>
              <div className="flex gap-2 items-start">
                <Check className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Publish localized client case study proof featuring Perth regional business outcomes.</span>
              </div>
            </div>
          </div>

          {/* Corridor CTA */}
          <div className="p-8 bg-gradient-to-br from-aeo-purple/15 to-aeo-cyan/15 border border-white/10 rounded-3xl text-center space-y-5">
            <h3 className="text-xl font-bold text-white">Need a Local Visibility Roadmap for Your Perth Business?</h3>
            <p className="text-xs text-white/70 max-w-lg mx-auto font-light leading-relaxed">
              Start with our $995 AEObility Strategic Blueprint. Receive a complete audit of your local presence, NAP consistency, and a custom 90-day execution plan.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/solutions/aeo-blueprint"
                className="btn-primary inline-flex items-center gap-2 text-xs"
              >
                <span>Get $995 AEObility Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all inline-flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Book a Strategy Call</span>
              </Link>
            </div>
          </div>

          {/* Semantic Mesh Navigation */}
          <div className="border-t border-white/5 pt-6 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-aeo-cyan">Semantic Connections</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <Link href="/services/geo-marketing" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Explore dedicated GEO Marketing Strategies →
              </Link>
              <Link href="/about/freelance-seo-consultant-perth" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Freelance SEO Consultant Perth Profile →
              </Link>
            </div>
          </div>

          <div className="pt-2 flex">
            <Link href="/services/aeo" className="text-xs font-medium text-white/40 hover:text-white transition-colors">
              &larr; Back to <strong className="text-white hover:underline">AEO Services</strong>
            </Link>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
