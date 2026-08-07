import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CopySchemaButton } from '@/components/GeoClientComponents';
import { 
  ArrowRight, 
  CheckCircle2, 
  Grid, 
  ChevronDown, 
  Code, 
  MapPin, 
  Cpu, 
  Layers, 
  HelpCircle, 
  AlertTriangle, 
  ShieldCheck, 
  GitFork,
  Search,
  CheckSquare
} from 'lucide-react';

export const metadata = {
  title: "GEO & SEO: Fix Local Discovery Before AI Invents Your Hours | AEObility",
  description: "A field guide explaining how Generative Engine Optimization (GEO) and local SEO converge to turn spatial signals into authoritative LLM recommendations.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/geo",
  },
};

export default function GEOKnowledgeNodePage() {
  const faqList = [
    {
      question: "What is the exact GEO vs SEO meaning for modern businesses?",
      answer: "SEO ranks pages in traditional SERPs, while GEO structures entity relationships, schema, and geographic microdata so LLMs can confidently cite a business as a regional authority."
    },
    {
      question: "What are practical GEO content examples for location pages?",
      answer: "Practical GEO content includes suburb-specific service matrices, nested GeoCoordinates, areaServed definitions, and atomic answer blocks that resolve local constraints such as hours, access, and service radius."
    },
    {
      question: "What are mandatory GEO structured data requirements for LLM indexing?",
      answer: "Mandatory GEO schema includes LocalBusiness, PostalAddress, GeoCoordinates, areaServed, and FAQPage microdata to ensure retrieval engines can verify location, boundaries, and operational constraints."
    },
    {
      question: "How do GEO and SEO work together to capture local market share?",
      answer: "SEO drives organic ranking while GEO ensures entity clarity across maps, directories, and LLMs. Together they unify proximity signals with generative AI verification to maximise local discovery."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/geo",
        "name": "GEO & SEO: Fix Local Discovery Before AI Invents Your Hours",
        "description": "A field guide explaining how Generative Engine Optimization (GEO) and local SEO converge to turn spatial signals into authoritative LLM recommendations.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub"
        },
        "primaryImageOfPage": {
          "@id": "https://aeobility.com.au/assets/geo-banner"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/geo/breadcrumb"
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/geo/breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aeobility.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Knowledge Hub",
            "item": "https://aeobility.com.au/knowledge-hub"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "GEO & SEO",
            "item": "https://aeobility.com.au/knowledge-hub/geo"
          }
        ]
      },

      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#org",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "description": "Optimising Australian small businesses for the future of search across maps, SERPs, and generative AI corridors.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "postalCode": "6000",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -31.9505,
          "longitude": 115.8605
        }
      },

      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/assets/geo-banner",
        "name": "GEO & SEO Semantic Banner",
        "description": "Abstract semantic banner illustrating GEO and local SEO through entity nodes, proximity signals, and query fan-out geometry.",
        "creator": {
          "@id": "https://aeobility.com.au/#org"
        },
        "contentUrl": "https://aeobility.com.au/fix-local-discovery-with-geo-seo_AEObility.webp",
        "contentLocation": {
          "@type": "Place",
          "name": "Perth, Western Australia",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -31.9505,
            "longitude": 115.8605
          }
        },
        "fileFormat": "image/webp",
        "width": "3840",
        "height": "1080"
      },

      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/geo#article",
        "headline": "GEO & SEO: Fix Local Discovery Before AI Invents Your Hours",
        "about": [
          "Generative Engine Optimization",
          "Local SEO",
          "Entity Graphs",
          "GeoCoordinates",
          "LLM Retrieval",
          "Spatial Intent Parsing"
        ],
        "author": {
          "@id": "https://aeobility.com.au/#org"
        },
        "image": {
          "@id": "https://aeobility.com.au/assets/geo-banner"
        }
      },

      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/geo#faq",
        "mainEntity": faqList.map((faq, idx) => ({
          "@type": "Question",
          "@id": `https://aeobility.com.au/knowledge-hub/geo#faq${idx + 1}`,
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://aeobility.com.au/#local",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "postalCode": "6000",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -31.9505,
          "longitude": 115.8605
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Perth Metropolitan Area",
            "sameAs": "https://en.wikipedia.org/wiki/Perth"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Western Australia",
            "sameAs": "https://en.wikipedia.org/wiki/Western_Australia"
          }
        ]
      }
    ]
  };

  const jsonLdExample = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://aeobility.com.au/#organization",
  "name": "AEObility",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Perth",
    "addressRegion": "WA",
    "postalCode": "6000",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-31.9505",
    "longitude": "115.8605"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Perth Metropolitan Area",
      "sameAs": "https://en.wikipedia.org/wiki/Perth"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Western Australia",
      "sameAs": "https://en.wikipedia.org/wiki/Western_Australia"
    }
  ]
}`;

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
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Navigation Links & Entity Map */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl sticky top-24">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Knowledge Hub</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/knowledge-hub" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Hub Overview
              </Link>
              <Link href="/knowledge-hub/aeo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AEO Core Principles
              </Link>
              <Link href="/knowledge-hub/semantic-seo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AI Semantic SEO
              </Link>
              <Link href="/knowledge-hub/geo" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                GEO &amp; SEO Local Matrix
              </Link>
              <div className="h-px bg-white/5 my-2" />
              <Link href="/knowledge-hub/articles" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Articles &amp; Guides
              </Link>
              <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug ml-4 border-l-2 border-white/10 pl-3">
                RAG &amp; Answer Engines
              </Link>
              <Link href="/knowledge-hub/case-studies" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Client Case Studies
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          
          {/* SECTION 1: REPLACED HERO BLOCK */}
          <div id="sec1" className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Entity Verification &amp; Local Discovery</span>
            </div>

            {/* Hero Banner Image */}
            <div className="relative aspect-[16/9] w-full bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-4">
              <Image
                src="/fix-local-discovery-with-geo-seo_AEObility.webp"
                alt="Generative Engine Optimization (GEO) and local SEO framework diagram aligning physical GPS proximity coordinates with AI entity verification, Schema microdata, and LLM search citations by AEObility in Perth, Western Australia."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>

            {/* 40-60 Word Hero Atomic Summary Block */}
            <div className="p-5 bg-gradient-to-r from-aeo-cyan/10 via-white/[0.02] to-aeo-purple/10 border-l-4 border-aeo-cyan rounded-r-2xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-aeo-cyan tracking-wider">Atomic Summary: GEO + SEO Alignment</span>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                Generative Engine Optimization (GEO) structures entity relationships, GeoCoordinates microdata, and knowledge graphs so Large Language Models (LLMs) cite your business in conversational search. Traditional SEO maintains keyword ranking signals across organic SERPs. Merging GEO and SEO prevents AI search engines from hallucinating your operating hours, service radius, or physical location.
              </p>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              GEO &amp; SEO: <span className="text-gradient-aeo">Fix Local Discovery Before AI Invents Your Hours</span>
            </h1>

            <p className="text-white/90 text-lg leading-relaxed font-normal">
              A unified framework for aligning physical proximity signals with generative AI entity verification.
            </p>

            {/* 3-Sentence Executive Summary */}
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-aeo-cyan flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>Executive Summary</span>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-sm text-white/80 font-light leading-relaxed">
                <li>Generative Engine Optimization (GEO) structures entity relationships so LLMs can confidently cite your business.</li>
                <li>Search Engine Optimisation (SEO) maintains traditional ranking signals across organic SERPs.</li>
                <li>Together, they prevent AI engines from hallucinating your hours, service radius, or location.</li>
              </ol>
            </div>

            {/* Hero CTA */}
            <div>
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm rounded-xl hover:opacity-95 transition-all duration-300 shadow-lg shadow-aeo-cyan/10"
              >
                <span>Run Local GEO Audit — Instant Entity Clarity Report</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* SECTION 2: ATOMIC DEFINITION CARDS WITH INTERNAL LINKS */}
          <div id="sec3" className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-10">
            {/* Card 1: SEO */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-white/50">Traditional Signals</span>
                  <Search className="w-5 h-5 text-white/40" />
                </div>
                <h3 className="text-xl font-bold text-white">Search Engine Optimisation (SEO)</h3>
                <ul className="space-y-2 text-xs text-white/70 font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white/40 flex-shrink-0" />
                    <span>Keyword targeting &amp; on-page density</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white/40 flex-shrink-0" />
                    <span>Backlink acquisition &amp; domain authority</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white/40 flex-shrink-0" />
                    <span>Core Web Vitals &amp; crawl efficiency</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-white/90 font-medium">
                  Optimises page-level ranking in traditional SERPs.
                </div>
                <p className="text-xs text-white/60 font-light">
                  Explore how <Link href="/knowledge-hub/semantic-seo" className="text-aeo-cyan hover:underline font-semibold">AI Semantic SEO</Link> connects traditional keywords to machine entities.
                </p>
              </div>
            </div>

            {/* Card 2: GEO */}
            <div className="p-6 bg-gradient-to-br from-aeo-cyan/10 to-aeo-purple/10 border border-aeo-cyan/30 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-aeo-cyan">AI Entity Signals</span>
                  <Cpu className="w-5 h-5 text-aeo-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white">Generative Engine Optimization (GEO)</h3>
                <ul className="space-y-2 text-xs text-white/80 font-light">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0" />
                    <span>JSON-LD microdata &amp; GeoCoordinates schema</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0" />
                    <span>Entity knowledge graphs &amp; vector salience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0" />
                    <span>Multi-source cross-node directory consensus</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="p-3 bg-aeo-cyan/10 rounded-xl border border-aeo-cyan/20 text-xs text-white font-semibold">
                  Optimises entity-level clarity for generative AI recommendations.
                </div>
                <p className="text-xs text-white/70 font-light">
                  Learn how GEO aligns with <Link href="/knowledge-hub/aeo" className="text-aeo-cyan hover:underline font-semibold">AEO Core Principles</Link> for answer engines.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 3: 3-STEP PROCESSING SUMMARY WITH RAG LINK */}
          <div id="sec6" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-aeo-cyan" />
                <span>How AI Search Engines Process Local Queries</span>
              </h2>
              <p className="text-xs text-white/60 font-light">
                Three distinct steps executed in milliseconds when an LLM evaluates a geographic service search.
              </p>
            </div>

            {/* 3 Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <span className="text-xs font-mono text-aeo-cyan font-bold">STEP 01</span>
                <h3 className="text-base font-bold text-white">Spatial Intent Parsing</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Extracts latitude/longitude bounding boxes, spatial suburb constraints, and user location intent.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <span className="text-xs font-mono text-aeo-cyan font-bold">STEP 02</span>
                <h3 className="text-base font-bold text-white">Map Pack Verification</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Queries physical GPS proximity signals, Google Maps API profiles, and NAP consistency.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <span className="text-xs font-mono text-aeo-cyan font-bold">STEP 03</span>
                <h3 className="text-base font-bold text-white">LLM Entity Resolution</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Cross-references JSON-LD schema, vector salience, and <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-aeo-cyan hover:underline">RAG &amp; Answer Engines</Link> consensus.
                </p>
              </div>
            </div>

            {/* Diagram Placeholder */}
            <div className="p-6 bg-neutral-950 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center space-y-3 text-center">
              <GitFork className="w-8 h-8 text-aeo-cyan animate-pulse" />
              <span className="text-xs font-mono text-white/80 font-bold uppercase tracking-wider">Diagram Placeholder: Local Query Processing Flow</span>
              <p className="text-xs text-white/50 font-light max-w-md">
                [Inbound Geo-Query] ──► [Spatial Bounding Box] ──► [Dual Path: Map API + LLM Vector Index] ──► [Entity Resolution &amp; AI Citation Response]
              </p>
            </div>
          </div>

          {/* SECTION 4: MAP PACK VS LLM FRICTION (PROMOTED & EXPANDED WITH LINKS) */}
          <div id="sec8" className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-bold text-white">Resolving Map Pack vs LLM Discovery Friction</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <h3 className="text-sm font-bold text-white">Map Pack Engine Rules</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Relies heavily on physical GPS proximity, Google Business Profile attributes, and citation matching within a narrow spatial radius. See our <Link href="/services/geo-marketing" className="text-aeo-cyan hover:underline font-medium">GEO Marketing Services</Link> for local map pack alignment.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <h3 className="text-sm font-bold text-white">Generative AI Engine Rules</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Evaluates global entity clarity, structured schema precision, and cross-source consensus to select authoritative recommendations. Learn more in our <Link href="/knowledge-hub/semantic-seo" className="text-aeo-cyan hover:underline font-medium">AI Semantic SEO</Link> guide.
                </p>
              </div>
            </div>

            {/* 40-Word Atomic Block */}
            <div className="p-5 bg-amber-500/10 border border-amber-500/30 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>Atomic Warning: Conflicting NAP Breaks Generative Recommendations</span>
              </div>
              <p className="text-xs text-white/90 font-light leading-relaxed">
                Conflicting Name, Address, or Phone (NAP) data confuses generative search engines. When LLMs detect conflicting location signals across directories, entity confidence drops, causing AI models to drop citations or synthesize inaccurate opening hours and service boundaries.
              </p>
            </div>
          </div>

          {/* SECTION 5: NEW FIELD-NOTE SECTION */}
          <div className="space-y-8 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">Field Note Rewrite</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Fix Local Discovery Before AI Invents Your Hours
              </h2>
            </div>

            {/* Misconception Block */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>Outdated Assumption: &quot;Google Business Profile is enough&quot;</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                Relying solely on a Google Business Profile is no longer sufficient. Generative AI engines require multi-source entity verification across knowledge graphs, website schema, and independent directory consensus before citing local providers.
              </p>
            </div>

            {/* Query Fan-Out 3-Branch Diagram */}
            <div className="p-6 bg-neutral-950 rounded-2xl border border-white/10 shadow-2xl space-y-4">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider block">Query Fan-Out Architecture (3 Branches)</span>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                  <span className="text-xs font-bold text-white block">Branch 1: Local Maps API</span>
                  <p className="text-[11px] text-white/60 font-light">Fetches physical coordinates, pin distance, and local map pack rankings.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                  <span className="text-xs font-bold text-aeo-cyan block">Branch 2: RAG Vector Store</span>
                  <p className="text-[11px] text-white/60 font-light">Retrieves website copy chunks, service descriptions, and localized case studies.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                  <span className="text-xs font-bold text-aeo-purple block">Branch 3: Knowledge Graph</span>
                  <p className="text-[11px] text-white/60 font-light">Validates brand entity node, parent organisation links, and cross-directory consensus.</p>
                </div>
              </div>
            </div>

            {/* Perth Plumber Ambiguity Example */}
            <div className="p-6 bg-gradient-to-r from-neutral-900 to-neutral-950 border border-white/10 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-aeo-cyan" />
                <span>Case Example: The Perth Plumber Suburb Ambiguity</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                Consider an emergency plumbing business registered in <strong>Osborne Park</strong> that claims service coverage in <strong>Joondalup</strong> and <strong>Fremantle</strong>. If their website states 24/7 emergency response in Fremantle while directory listings display 9-to-5 operating hours in Osborne Park, generative models encounter an entity confidence conflict.
              </p>
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-300 font-light">
                <strong>Result:</strong> ChatGPT and Perplexity drop the business from after-hours recommendations or synthesize inaccurate operating hours, assuming the business is closed.
              </div>
            </div>

            {/* 4-Step Cleanup Framework */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white">4-Step Local Entity Cleanup Framework</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                  <span className="text-xs font-mono text-aeo-cyan font-bold">01. Canonical NAP</span>
                  <p className="text-xs text-white/70 font-light">Standardise exact Name, Address, and Phone syntax across all web touchpoints.</p>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                  <span className="text-xs font-mono text-aeo-cyan font-bold">02. JSON-LD Deployment</span>
                  <p className="text-xs text-white/70 font-light">Embed explicit GeoCoordinates and areaServed microdata on canonical pages.</p>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                  <span className="text-xs font-mono text-aeo-cyan font-bold">03. Directory Consensus</span>
                  <p className="text-xs text-white/70 font-light">Align third-party citations and map pins to prevent confidence score drops.</p>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                  <span className="text-xs font-mono text-aeo-cyan font-bold">04. Atomic Answer Blocks</span>
                  <p className="text-xs text-white/70 font-light">Structure direct 2-sentence answers detailing exact service radius and operating hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5.5: MID-PAGE CTA CORRIDOR */}
          <div id="sec33" className="p-8 bg-gradient-to-r from-aeo-cyan/15 via-neutral-950 to-aeo-purple/15 border border-aeo-cyan/30 rounded-3xl text-center space-y-4 shadow-2xl my-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Run Local GEO Audit — Fix Entity Ambiguity Before AI Hallucinates Your Business
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto font-light">
              Detect location signal mismatches, NAP discrepancies, and missing JSON-LD schema across Australian search engines.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-xs sm:text-sm rounded-xl hover:bg-neutral-100 transition-all duration-300"
              >
                <span>Get Free Local GEO Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* SECTION 6: STRENGTHEN MULTI-LOCATION ENTITY GRAPH WITH LINKS */}
          <div id="sec10" className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-bold text-white">Structuring Multi-Location Brand Entity Graphs</h2>
            
            {/* Practical Example */}
            <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-aeo-cyan font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Multi-Location Architecture Example</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                If a plumbing company services 4 distinct suburbs across Perth (e.g. Subiaco, Joondalup, Fremantle, Scarborough), all individual coordinate pins must be unified under one single parent brand entity graph using structured schema. Review our <Link href="/knowledge-hub/case-studies" className="text-aeo-cyan hover:underline font-medium">Client Case Studies</Link> for real-world multi-location implementations.
              </p>
            </div>

            {/* Strict Directive */}
            <div className="p-5 bg-red-500/10 border border-red-500/25 rounded-2xl space-y-2">
              <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider block">Mandatory Directive</span>
              <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                Remove duplicated thin suburb landing pages. Replace them with a single authoritative location hub containing a structured service matrix and explicit <code className="text-aeo-cyan">areaServed</code> microdata arrays, supported by <Link href="/services/geo-marketing" className="text-aeo-cyan hover:underline font-medium">GEO Marketing Solutions</Link>.
              </p>
            </div>

            {/* Dual-Engine Architecture Section */}
            <div id="sec13" className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
              <h3 className="text-base font-bold text-white">Dual-Engine Search Architecture</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Modern search engines operate across a dual-engine architecture: spatial proximity APIs for local maps and RAG vector stores for conversational LLMs. See our <Link href="/services/ai-search-marketing" className="text-aeo-cyan hover:underline font-medium">AI Search Strategy</Link> and <Link href="/solutions/aeo-blueprint" className="text-aeo-cyan hover:underline font-medium">AEO Blueprint</Link> to align both systems.
              </p>
            </div>
          </div>

          {/* SECTION 7: CONVERT BLUEPRINTS INTO CHECKLIST WITH LINKS */}
          <div id="sec18" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-aeo-cyan" />
                <span>GEO Content Pattern Blueprint Checklist</span>
              </h2>
              <p className="text-xs text-white/60 font-light">
                Follow this checklist when auditing or deploying local landing page content for AI search optimization. For detailed guides, visit our <Link href="/knowledge-hub/articles" className="text-aeo-cyan hover:underline">Articles &amp; Guides</Link>.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span className="text-xs text-white/80 font-light">Declare exact GPS coordinates and primary suburb within the first 100 words of body copy.</span>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span className="text-xs text-white/80 font-light">Add <code className="text-aeo-cyan font-mono">areaServed</code> schema arrays referencing Wikipedia <code className="text-aeo-cyan font-mono">AdministrativeArea</code> entity URIs.</span>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span className="text-xs text-white/80 font-light">Add precise <code className="text-aeo-cyan font-mono">GeoCoordinates</code> schema (latitude and longitude) matching Google Maps.</span>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span className="text-xs text-white/80 font-light">Embed <code className="text-aeo-cyan font-mono">FAQPage</code> JSON-LD schema matching visible text Q&amp;A blocks on page.</span>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span className="text-xs text-white/80 font-light">Include a service boundary matrix with outbound links to Wikipedia entity definitions as outlined in the <Link href="/knowledge-hub/geo" className="text-aeo-cyan hover:underline">GEO &amp; SEO Local Matrix</Link>.</span>
              </div>
            </div>
          </div>

          {/* Location Content Layout Blueprint [sec20]–[sec23] */}
          <div id="sec20" className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-base font-bold text-white">Location Content Layout Blueprint</h3>
            <p className="text-xs text-white/60 font-light">
              Structure location landing pages for optimal retrieval across <Link href="/knowledge-hub/semantic-seo" className="text-aeo-cyan hover:underline">AI Semantic SEO</Link> and <Link href="/services/geo-marketing" className="text-aeo-cyan hover:underline">GEO Local Matrix</Link> deployments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light text-white/80">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-aeo-cyan block">1. Entity &amp; Spatial Header</span>
                <p className="text-white/60">Declare brand name, primary service, exact suburb/city location, and verified postal coordinates in the first 100 words.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-aeo-cyan block">2. Service Boundary Matrix</span>
                <p className="text-white/60">List explicit suburbs served alongside Wikipedia entity links to anchor regional knowledge graph relationships.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-aeo-cyan block">3. Regional Citation Proofs</span>
                <p className="text-white/60">Embed localized client case study metrics, verified address schema, and customer review summaries.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-aeo-cyan block">4. Direct FAQ Q&amp;A Blocks</span>
                <p className="text-white/60">Provide concise 2-sentence answers to common regional service questions formatted with FAQPage JSON-LD microdata.</p>
              </div>
            </div>
          </div>

          {/* SECTION 8: COLLAPSE JSON-LD INTO ACCORDION WITH COPY BUTTON */}
          <div id="sec19" className="space-y-4 border-t border-white/5 pt-10">
            <details className="group border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden transition-all duration-200">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-white hover:text-aeo-cyan list-none text-base transition-colors">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-aeo-cyan" />
                  <span>Valid GEO Microdata Blueprint</span>
                </div>
                <ChevronDown className="w-5 h-5 text-aeo-cyan transition-transform duration-200 group-open:rotate-180" />
              </summary>
              
              <div className="px-6 pb-6 border-t border-white/5 pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-white/60">JSON-LD Schema (LocalBusiness &amp; GeoCoordinates)</span>
                  <CopySchemaButton code={jsonLdExample} />
                </div>
                <div className="p-4 bg-neutral-950 rounded-xl border border-white/10 overflow-x-auto font-mono text-xs text-aeo-cyan">
                  <pre>{jsonLdExample}</pre>
                </div>
              </div>
            </details>
          </div>

          {/* SECTION 9: REWRITE FAQ SECTION WITH 40-60 WORD ATOMIC ANSWERS & INTERNAL LINKS */}
          <div id="sec24" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-aeo-cyan" />
                <span>Frequently Asked Questions: GEO &amp; SEO</span>
              </h2>
              <p className="text-xs text-white/60 font-light">
                Atomic 40–60 word answers formatted for LLM citation and machine retrieval.
              </p>
            </div>

            <div className="space-y-4">
              <details id="sec25" className="group border border-white/5 rounded-2xl bg-white/[0.02] hover:border-white/10 transition-all duration-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-white hover:text-aeo-cyan list-none text-sm sm:text-base transition-colors">
                  <span className="pr-4">{faqList[0].question}</span>
                  <ChevronDown className="w-5 h-5 text-aeo-cyan flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-xs sm:text-sm text-white/80 font-light leading-relaxed border-t border-white/5 pt-4">
                  {faqList[0].answer} Learn more in our <Link href="/knowledge-hub/aeo" className="text-aeo-cyan hover:underline">AEO Core Principles</Link> guide.
                </div>
              </details>

              <details id="sec26" className="group border border-white/5 rounded-2xl bg-white/[0.02] hover:border-white/10 transition-all duration-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-white hover:text-aeo-cyan list-none text-sm sm:text-base transition-colors">
                  <span className="pr-4">{faqList[1].question}</span>
                  <ChevronDown className="w-5 h-5 text-aeo-cyan flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-xs sm:text-sm text-white/80 font-light leading-relaxed border-t border-white/5 pt-4">
                  {faqList[1].answer} Explore our <Link href="/services/geo-marketing" className="text-aeo-cyan hover:underline">GEO Marketing</Link> service.
                </div>
              </details>

              <details id="sec27" className="group border border-white/5 rounded-2xl bg-white/[0.02] hover:border-white/10 transition-all duration-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-white hover:text-aeo-cyan list-none text-sm sm:text-base transition-colors">
                  <span className="pr-4">{faqList[2].question}</span>
                  <ChevronDown className="w-5 h-5 text-aeo-cyan flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-xs sm:text-sm text-white/80 font-light leading-relaxed border-t border-white/5 pt-4">
                  {faqList[2].answer} Learn more in <Link href="/knowledge-hub/semantic-seo" className="text-aeo-cyan hover:underline">AI Semantic SEO</Link>.
                </div>
              </details>

              <details id="sec28" className="group border border-white/5 rounded-2xl bg-white/[0.02] hover:border-white/10 transition-all duration-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-white hover:text-aeo-cyan list-none text-sm sm:text-base transition-colors">
                  <span className="pr-4">{faqList[3].question}</span>
                  <ChevronDown className="w-5 h-5 text-aeo-cyan flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-xs sm:text-sm text-white/80 font-light leading-relaxed border-t border-white/5 pt-4">
                  {faqList[3].answer} Check our <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-aeo-cyan hover:underline">RAG &amp; Answer Engines</Link> guide.
                </div>
              </details>
            </div>
          </div>

          {/* SECTION 10: CHECKLIST WITH RAG LINK */}
          <div id="sec29" className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">Local Integration Checklist</h3>
            <p className="text-xs text-white/60 font-light">
              Follow this checklist to align local search signals with <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-aeo-cyan hover:underline">RAG &amp; Answer Engines</Link>.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Format coordinate precision matrices in local schema profiles.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Verify cross-node references across Google Maps and website pages.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Deploy area served schema graphs defining service boundaries.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Test localized query pathways to detect rank dilution flags.</span>
              </li>
            </ul>
          </div>

          {/* SECTION 11: IMPROVED FOOTER CTA */}
          <div id="sec35" className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/5 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Align Your Local Map Assets</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto font-light leading-relaxed">
              Ensure you capture nearby client queries. Secure your manual map and local search visibility check today.
            </p>
            <div className="flex justify-center gap-3">
              <Link
                href="/diagnostic"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-neutral-100 transition-all duration-300"
              >
                <span>Check Local Entity Clarity — Free Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
