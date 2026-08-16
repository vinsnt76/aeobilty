import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { CopySchemaButton } from '@/components/GeoClientComponents';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Code, 
  MapPin, 
  Cpu, 
  Layers, 
  HelpCircle, 
  AlertTriangle, 
  CheckSquare,
  Compass,
  FileText,
  ShieldCheck
} from 'lucide-react';

export const metadata = {
  title: "GEO vs Local SEO: Key Differences for AI & Map Discovery | AEObility",
  description: "Learn how local SEO improves visibility in Google Search and Maps, while GEO strengthens the entity, location, and service-boundary signals AI search systems need to identify and recommend a local business accurately.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/geo",
  },
};

export default function GEOKnowledgeNodePage() {
  const faqList = [
    {
      question: "What is the exact difference between GEO and Local SEO?",
      answer: "Local SEO focuses on improving visibility within established Google Search and Map interfaces through relevance, prominence, reviews, and proximity signals. GEO improves the consistency and clarity of core business facts—such as address, operating hours, and service coverage—so AI-driven search engines and LLMs can accurately reconcile, interpret, and cite your business in generative responses."
    },
    {
      question: "How do GEO and Local SEO work together to capture local market share?",
      answer: "Local SEO drives organic map pack placements and local search rankings, while GEO reduces ambiguity around business facts across your website, Google Business Profile, and third-party directories. Together, they align proximity signals with cross-source factual reconciliation to ensure AI experiences represent your business details accurately."
    },
    {
      question: "Are GeoCoordinates and areaServed schema mandatory for AI search indexing?",
      answer: "No. No schema markup is strictly mandatory for AI search indexing or guarantees inclusion in generative answers. However, deploying GeoCoordinates and areaServed JSON-LD microdata provides a machine-readable data layer that clarifies your physical location and coverage boundaries when search systems reconcile local entities."
    },
    {
      question: "How should local businesses handle location pages without creating thin duplicate content?",
      answer: "Avoid creating templated suburb pages that lack distinct substance. Publish location-specific landing pages only where you have genuine local value, original evidence, unique customer proofs, and distinct service context. Quality location pages with authentic regional proof support local discovery without risking thin-content penalties."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/geo",
        "name": "GEO vs Local SEO: Key Differences for AI and Map Discovery",
        "description": "Learn how local SEO improves visibility in Google Search and Maps, while GEO strengthens the entity, location, and service-boundary signals AI search systems need to identify and recommend a local business accurately.",
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
            "name": "GEO vs Local SEO",
            "item": "https://aeobility.com.au/knowledge-hub/geo"
          }
        ]
      },

      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
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
        "location": {
          "@type": "Place",
          "name": "AEObility Perth HQ",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -31.9505,
            "longitude": 115.8605
          }
        }
      },

      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/assets/geo-banner",
        "name": "GEO vs Local SEO Framework Banner",
        "description": "Framework diagram comparing Local SEO and Geographic Engine Optimisation (GEO) signals across physical proximity and AI entity discovery by AEObility.",
        "creator": {
          "@id": "https://aeobility.com.au/#organization"
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
        "headline": "GEO vs Local SEO: Key Differences for AI and Map Discovery",
        "about": [
          "Generative Engine Optimisation",
          "Local SEO",
          "Entity Verification",
          "GeoCoordinates",
          "Spatial Intent Parsing",
          "Service Boundaries"
        ],
        "author": {
          "@id": "https://aeobility.com.au/#organization"
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
            "name": "Perth Metropolitan Area"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Western Australia"
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
      "name": "Perth Metropolitan Area"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Western Australia"
    }
  ]
}`;

  const matrixRows = [
    {
      dimension: "Primary Outcome",
      localSeo: "Visibility in organic local results and map experiences",
      geo: "Clear, corroborated business facts for AI-assisted discovery"
    },
    {
      dimension: "Primary User Context",
      localSeo: "“Near me,” map, category, and location searches",
      geo: "Conversational local recommendations and fact-led questions"
    },
    {
      dimension: "Important Signals",
      localSeo: "Relevance, prominence, proximity, GBP quality, reviews, local links",
      geo: "Consistent entity identity, service coverage, structured data, corroborating sources"
    },
    {
      dimension: "Core Business Facts",
      localSeo: "Category, address, phone, reviews, location relevance",
      geo: "Organisation identity, address, hours, services, areas served, supporting evidence"
    },
    {
      dimension: "Content Priority",
      localSeo: "Helpful service and location pages for users",
      geo: "Concise, evidence-backed factual answers with clear local context"
    },
    {
      dimension: "Measurement",
      localSeo: "Local rankings, map visibility, calls, direction requests, leads",
      geo: "Accuracy and consistency of business facts across monitored AI-assisted search results, cited sources where available, and owned/third-party profiles."
    },
    {
      dimension: "Relationship",
      localSeo: "Helps users find the business in established local search surfaces",
      geo: "Helps reduce ambiguity when systems reconcile local business information"
    }
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
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        <section className="flex flex-col gap-10">
          
          {/* HERO BLOCK */}
          <div id="sec1" className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Entity Verification &amp; Local Discovery</span>
            </div>

            {/* Hero Banner Image */}
            <div className="relative aspect-[16/9] w-full bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-4">
              <Image
                src="/fix-local-discovery-with-geo-seo_AEObility.webp"
                alt="GEO vs Local SEO framework diagram showing physical location signals and AI entity verification by AEObility in Perth, Western Australia."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              GEO vs Local SEO: <span className="text-gradient-aeo">Key Differences for AI and Map Discovery</span>
            </h1>

            {/* 1. Consolidated Executive Summary Block */}
            <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-white/[0.02] to-aeo-purple/10 border-l-4 border-aeo-cyan rounded-r-2xl space-y-3 shadow-lg">
              <div className="text-xs font-mono font-bold uppercase text-aeo-cyan tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>Executive Summary</span>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                Local SEO helps a business appear in Google Search and Maps through relevance, prominence, reviews, complete business information, and proximity. GEO improves the consistency and clarity of business identity, location, service-area, and operational facts that AI-driven search experiences may use when assessing or citing local providers.
              </p>
            </div>

            {/* Distinct Conceptual Sequence: GEO & AEO Integration Callout */}
            <div className="p-5 bg-aeo-cyan/10 border border-aeo-cyan/30 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-aeo-cyan font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span>Conceptual Sequence: GEO &amp; AEO Integration</span>
              </div>
              <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                <strong>GEO verifies who and where a local business is.</strong> AEO helps shape the concise, evidence-backed content that answer engines can retrieve and present when responding to a user’s question. Explore the <Link href="/knowledge-hub/aeo" className="text-aeo-cyan hover:underline font-semibold">AEO Core Principles</Link> page for answer-focused content structure, question coverage, and retrieval-ready evidence.
              </p>
            </div>

            {/* Campaign Callout Subheading */}
            <div className="p-4 bg-white/[0.03] border-l-4 border-aeo-purple rounded-r-xl">
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-aeo-purple flex-shrink-0" />
                <span>Fix Local Discovery Before AI Invents Your Hours</span>
              </h2>
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

          {/* SECTION 2: DEFENSIBLE COMPARISON MATRIX TABLE */}
          <div id="sec-diff" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                GEO vs Local SEO: What Is the Difference?
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light">
                Side-by-side comparison matrix mapping local search surfaces against AI-assisted local discovery.
              </p>
            </div>

            {/* Defensible Comparison Matrix Table */}
            <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/[0.01] shadow-2xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-white">
                    <th className="p-4 font-mono font-bold uppercase tracking-wider text-aeo-cyan w-1/4">Dimension</th>
                    <th className="p-4 font-mono font-bold uppercase tracking-wider text-white/90 w-3/8">Local SEO</th>
                    <th className="p-4 font-mono font-bold uppercase tracking-wider text-aeo-cyan w-3/8">GEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-light text-white/80">
                  {matrixRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-white bg-white/[0.01]">{row.dimension}</td>
                      <td className="p-4 text-white/80 leading-relaxed">{row.localSeo}</td>
                      <td className="p-4 text-white/90 leading-relaxed bg-aeo-cyan/[0.02] border-l border-white/5 font-normal">{row.geo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 3: PRACTICAL STRATEGIC DEEP DIVES */}
          <div id="sec-deepdives" className="space-y-8 border-t border-white/5 pt-10">
            
            {/* Discovery Section */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-aeo-cyan" />
                <span>How Local Search and AI Discovery Use Business Facts</span>
              </h2>
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                Local search systems may weigh location, category relevance, prominence, reviews, and proximity. AI-assisted search experiences may also reconcile facts from a business website, structured data, maps profiles, directories, reviews, and other authoritative sources before presenting a recommendation or answer.
              </div>
            </div>

            {/* Entity Signal Section */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-aeo-cyan" />
                <span>The Local Entity Signals That Matter</span>
              </h2>
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                Treat your website as the canonical source of local business facts: publish the same verifiable name, address, phone number, hours, services, and service areas in visible content, then express compatible facts in relevant structured data. Use schema to clarify content—not to introduce claims users cannot verify on the page.
              </div>
            </div>

            {/* Failure Section */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>Common Local Discovery Failures</span>
              </h2>
              <div className="p-5 bg-white/[0.02] border border-amber-500/20 rounded-2xl text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                Long-form content can obscure critical local facts when users—or systems—need a direct answer. Place important details such as operating hours, emergency availability, service boundaries, eligibility, and address information in concise, visible question-and-answer or fact blocks, supported by explanatory copy where needed.
              </div>
            </div>
          </div>

          {/* SECTION 4: LOCAL GEO IMPLEMENTATION CHECKLIST */}
          <div id="sec-checklist" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                <CheckSquare className="w-6 h-6 text-aeo-cyan" />
                <span>Local GEO Implementation Checklist</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light">
                Follow this practical checklist when auditing or deploying local landing pages and entity schema.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/90 font-light">Standardise consistent business name, address, and phone number (NAP) data across your website, Google Business Profile, and third-party directories.</span>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/90 font-light">Add structured <code className="text-aeo-cyan font-mono">LocalBusiness</code> JSON-LD microdata with precise <code className="text-aeo-cyan font-mono">GeoCoordinates</code> matching your physical address.</span>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/90 font-light">Deploy <code className="text-aeo-cyan font-mono">areaServed</code> schema arrays declaring explicit suburb and regional service coverage boundaries.</span>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/90 font-light">Ensure location landing pages contain unique, useful local evidence, genuine customer proofs, and distinct regional details.</span>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/90 font-light">Embed visible Q&amp;A blocks detailing operating hours, emergency access, and service radius paired with <code className="text-aeo-cyan font-mono">FAQPage</code> JSON-LD markup.</span>
              </div>
            </div>
          </div>

          {/* SECTION 5: GET A LOCAL ENTITY AUDIT (CLOSING CONVERSION PANEL) */}
          <div id="sec-audit-panel" className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Get a Local Entity Audit
            </h2>
            <div className="p-8 bg-gradient-to-r from-aeo-cyan/15 via-neutral-950 to-aeo-purple/15 border border-aeo-cyan/30 rounded-3xl text-center space-y-4 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Turn Local Business Facts Into a Verifiable Entity System
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light leading-relaxed">
                If your address, operating hours, service boundaries, or directory listings conflict, start with a Local GEO Audit. AEObility can identify factual inconsistencies, review local business schema, and prioritise the location signals most likely to create discovery friction.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  href="/diagnostic"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-bold text-xs sm:text-sm rounded-xl hover:bg-neutral-100 transition-all duration-300 shadow-lg"
                >
                  <span>Check Local Entity Clarity — Free Diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions/aeo-blueprint"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <span>Explore The AEObility Blueprint</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </Link>
              </div>
            </div>
          </div>

          {/* SECTION 6: LOCALBUSINESS SCHEMA EXAMPLE */}
          <div id="sec-schema-blueprint" className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              LocalBusiness Schema Example
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-aeo-cyan" />
                <span>Valid GEO Microdata Blueprint</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Add this <code className="text-aeo-cyan font-mono">LocalBusiness</code> JSON-LD as a script block in the page <code className="text-aeo-cyan font-mono">&lt;head&gt;</code> or body, and customise it to match visible, canonical business facts:
              </p>

              <details className="group border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden transition-all duration-200" open>
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-white hover:text-aeo-cyan list-none text-base transition-colors">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-aeo-cyan" />
                    <span>LocalBusiness &amp; GeoCoordinates JSON-LD Snippet</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-aeo-cyan transition-transform duration-200 group-open:rotate-180" />
                </summary>
                
                <div className="px-6 pb-6 border-t border-white/5 pt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-white/60">JSON-LD Microdata Script</span>
                    <CopySchemaButton code={jsonLdExample} />
                  </div>
                  <div className="p-4 bg-neutral-950 rounded-xl border border-white/10 overflow-x-auto font-mono text-xs text-aeo-cyan">
                    <pre>{jsonLdExample}</pre>
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
          <div id="sec-faqs" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-aeo-cyan" />
                <span>Frequently Asked Questions: GEO vs Local SEO</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light">
                Direct answers to core questions about local search, entity discovery, and AI recommendation systems.
              </p>
            </div>

            <div className="space-y-4">
              {faqList.map((faq, idx) => (
                <div key={idx} className="border border-white/10 rounded-2xl bg-white/[0.02] p-6 space-y-3 shadow-lg">
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <span className="text-aeo-cyan font-mono font-bold">Q{idx + 1}:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-white/80 font-light leading-relaxed border-t border-white/5 pt-3">
                    <strong className="text-aeo-cyan">A:</strong> {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER CTA */}
          <div id="sec-footer-cta" className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
              Align Your Local Map &amp; AI Entity Assets
            </h2>
            <div className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/10 rounded-3xl text-center space-y-6">
              <p className="text-sm text-white/80 max-w-lg mx-auto font-light leading-relaxed">
                Help search, maps, and AI-assisted experiences find and represent your business facts more consistently. Secure your local entity clarity check today.
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
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
