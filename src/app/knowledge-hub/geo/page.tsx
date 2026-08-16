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
  ShieldCheck, 
  GitFork,
  Search,
  CheckSquare,
  Compass,
  FileText
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
      answer: "Local SEO improves visibility in Google Search and Maps through Google Business Profile completeness, local relevance, and proximity signals. GEO strengthens entity, location, and service-boundary facts so AI search systems and LLMs can accurately identify, reconcile, and cite your business in generative responses."
    },
    {
      question: "How do GEO and Local SEO work together to capture local market share?",
      answer: "Local SEO drives organic map pack and search engine rankings, while GEO ensures entity clarity across AI search engines, directories, and LLMs. Together, they unify proximity signals with generative verification to prevent AI models from hallucinating business hours, locations, or service boundaries."
    },
    {
      question: "Are GeoCoordinates and areaServed schema mandatory for AI search indexing?",
      answer: "No structured data schema is strictly mandatory for AI indexing. However, explicit GeoCoordinates, PostalAddress, and areaServed microdata clarify machine-readable business facts, reducing ambiguity for retrieval systems even though they do not guarantee inclusion or ranking."
    },
    {
      question: "How should local businesses handle location pages without creating thin duplicate content?",
      answer: "The critical factor is not the total page count, but whether each location page provides unique, useful local evidence, genuine case study proofs, and explicit service boundaries. Thin, templated suburb pages cause rank dilution, while well-supported location pages with authentic local value are legitimate and effective."
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

            {/* Atomic Summary Block */}
            <div className="p-5 bg-gradient-to-r from-aeo-cyan/10 via-white/[0.02] to-aeo-purple/10 border-l-4 border-aeo-cyan rounded-r-2xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-aeo-cyan tracking-wider">Atomic Summary: Local SEO vs GEO</span>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                Local SEO improves visibility in Google Search and Maps through Google Business Profile completeness, on-page relevance, and proximity signals. Generative Engine Optimisation (GEO) strengthens entity, location, and service-boundary facts so AI search engines and LLMs can accurately identify, reconcile, and cite a local business.
              </p>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              GEO vs Local SEO: <span className="text-gradient-aeo">Key Differences for AI and Map Discovery</span>
            </h1>

            <p className="text-white/90 text-lg leading-relaxed font-normal">
              Learn how local SEO improves visibility in Google Search and Maps, while GEO strengthens the entity, location, and service-boundary signals AI search systems need to identify and recommend a local business accurately.
            </p>

            {/* Campaign Callout Subheading */}
            <div className="p-4 bg-white/[0.03] border-l-4 border-aeo-purple rounded-r-xl">
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-aeo-purple flex-shrink-0" />
                <span>Fix Local Discovery Before AI Invents Your Hours</span>
              </h2>
            </div>

            {/* Executive Summary */}
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-aeo-cyan flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>Executive Summary</span>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-sm text-white/80 font-light leading-relaxed">
                <li><strong>Local SEO</strong> improves visibility in Google Search and Maps via local relevance, Google Business Profile completeness, and proximity.</li>
                <li><strong>GEO</strong> strengthens organisation, location, and service-boundary signals AI search engines need to cite a local business accurately.</li>
                <li><strong>Together</strong>, they prevent AI systems from hallucinating operating hours, service radius, or business facts.</li>
              </ol>
            </div>

            {/* Contextual Transition Box linking to AEO Core Principles */}
            <div className="p-5 bg-aeo-cyan/10 border border-aeo-cyan/30 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-aeo-cyan font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span>Conceptual Sequence: GEO &amp; AEO Integration</span>
              </div>
              <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                <strong>GEO verifies who and where a local business is.</strong> AEO helps shape the concise, evidence-backed content that answer engines can retrieve and present when responding to a user’s question. Explore the <Link href="/knowledge-hub/aeo" className="text-aeo-cyan hover:underline font-semibold">AEO Core Principles</Link> page for answer-focused content structure, question coverage, and retrieval-ready evidence.
              </p>
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

          {/* SECTION 2: GEO VS LOCAL SEO COMPARISON TABLE */}
          <div id="sec-diff" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                GEO vs Local SEO: What Is the Difference?
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light">
                Side-by-side comparison of local search ranking signals versus generative entity verification requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Local SEO Signals */}
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-white/60 font-bold">Search &amp; Maps Discovery</span>
                    <Search className="w-5 h-5 text-white/50" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Local SEO Signals</h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-white/80 font-light">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-white/50 flex-shrink-0 mt-0.5" />
                      <span>Google Business Profile completeness and category relevance</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-white/50 flex-shrink-0 mt-0.5" />
                      <span>Consistent NAP data and authoritative local citations</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-white/50 flex-shrink-0 mt-0.5" />
                      <span>Local relevance, prominence, reviews, links, and proximity</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-white/50 flex-shrink-0 mt-0.5" />
                      <span>Useful location and service pages built for real users</span>
                    </li>
                  </ul>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-white/80 font-medium mt-4">
                  Focuses on traditional SERP and Google Maps pack positioning.
                </div>
              </div>

              {/* GEO Signals */}
              <div className="p-6 bg-gradient-to-br from-aeo-cyan/10 to-aeo-purple/10 border border-aeo-cyan/30 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-aeo-cyan font-bold">Generative AI Discovery</span>
                    <Cpu className="w-5 h-5 text-aeo-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white">GEO Signals</h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-white/90 font-light">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                      <span>Clear organisation, location, and service-coverage entities</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                      <span>Accurate structured data for address, location, hours, and services</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                      <span>Consistent first-party and third-party business facts</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                      <span>Retrieval-friendly proof of expertise, service boundaries, and local relevance</span>
                    </li>
                  </ul>
                </div>
                <div className="p-3 bg-aeo-cyan/10 rounded-xl border border-aeo-cyan/20 text-xs text-white font-semibold mt-4">
                  Strengthens machine-readable facts for AI citations &amp; LLM recommendations.
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: HOW LOCAL SEARCH AND AI DISCOVERY USE BUSINESS FACTS */}
          <div id="sec-facts" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                <Layers className="w-6 h-6 text-aeo-cyan" />
                <span>How Local Search and AI Discovery Use Business Facts</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light">
                Understanding how spatial proximity engines and generative retrieval models parse local business data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                <h3 className="text-base font-bold text-white">Local SEO: Maps, Relevance, Prominence &amp; Proximity</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  Traditional local search relies on physical GPS distance, category completion in Google Business Profile, local link signals, and review sentiment. On-page content demonstrates local relevance and service clarity so human searchers find accurate details on location pages.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                <h3 className="text-base font-bold text-white">GEO: Entity Verification, Service Coverage &amp; Consistency</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  AI search systems retrieve and reconcile business details across indexed first-party content, structured schema, directory citations, and knowledge-graph-like data. Rather than relying on simple keyword matching, generative systems evaluate whether business facts are corroborating across independent sources.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 4: THE LOCAL ENTITY SIGNALS THAT MATTER */}
          <div id="sec-signals" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                The Local Entity Signals That Matter
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light">
                Core structural building blocks required to verify identity and location across generative search pipelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                <span className="text-xs font-mono text-aeo-cyan font-bold">SIGNAL 01</span>
                <h3 className="text-base font-bold text-white">Name, Address, Phone &amp; Hours</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Canonical Name, Address, and Phone (NAP) syntax combined with accurate operating hours prevent confidence drops when generative models cross-check directory listings.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                <span className="text-xs font-mono text-aeo-cyan font-bold">SIGNAL 02</span>
                <h3 className="text-base font-bold text-white">Location &amp; Service Area Boundaries</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Deploying explicit <code className="text-aeo-cyan font-mono">GeoCoordinates</code> and <code className="text-aeo-cyan font-mono">areaServed</code> microdata clarifies machine-readable facts, helping search engines understand your exact regional scope.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                <span className="text-xs font-mono text-aeo-cyan font-bold">SIGNAL 03</span>
                <h3 className="text-base font-bold text-white">First-Party &amp; Third-Party Corroboration</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Aligning first-party website schema with verified third-party listings ensures retrieval systems reconcile consistent evidence across all digital touchpoints.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 5: COMMON LOCAL DISCOVERY FAILURES */}
          <div id="sec-failures" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
                <span>Common Local Discovery Failures</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light">
                Why businesses get dropped from generative AI search recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <h3 className="text-sm font-bold text-amber-400">1. NAP &amp; Operating Hours Conflicts</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  When directory listings show 9-to-5 operating hours while website copy claims 24/7 service, generative models encounter an entity confidence conflict and often omit the business from after-hours recommendations.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <h3 className="text-sm font-bold text-amber-400">2. Ambiguous Service Areas</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Unclear suburb boundaries or missing geographic declarations leave AI systems unsure if your business actually serves target regional queries, diluting local citation likelihood.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <h3 className="text-sm font-bold text-amber-400">3. Weak or Thin Location Content</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  The important distinction is not page count, but whether each page has unique, useful local evidence and a legitimate user purpose. Thin, templated suburb pages cause issues, while well-supported location pages with real local proof are valid.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <h3 className="text-sm font-bold text-amber-400">4. Unsupported Business Claims</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Claiming service specialisations or regional authority without structured schema or verifiable local case study proofs reduces the factual confidence score assigned by AI retrieval scrapers.
                </p>
              </div>
            </div>
          </div>

          {/* MID-PAGE CTA CORRIDOR */}
          <div id="sec-cta" className="p-8 bg-gradient-to-r from-aeo-cyan/15 via-neutral-950 to-aeo-purple/15 border border-aeo-cyan/30 rounded-3xl text-center space-y-4 shadow-2xl my-4">
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

          {/* SECTION 6: LOCAL GEO IMPLEMENTATION CHECKLIST */}
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
                <span className="text-xs sm:text-sm text-white/90 font-light">Standardise exact Name, Address, and Phone (NAP) data across your website, Google Business Profile, and third-party directories.</span>
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

          {/* ACCORDION: VALID GEO MICRODATA BLUEPRINT */}
          <div id="sec-schema" className="space-y-4 border-t border-white/5 pt-10">
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
                  <span className="text-xs font-mono text-white/60">JSON-LD Schema (LocalBusiness, GeoCoordinates &amp; areaServed)</span>
                  <CopySchemaButton code={jsonLdExample} />
                </div>
                <div className="p-4 bg-neutral-950 rounded-xl border border-white/10 overflow-x-auto font-mono text-xs text-aeo-cyan">
                  <pre>{jsonLdExample}</pre>
                </div>
              </div>
            </details>
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
                <details key={idx} className="group border border-white/5 rounded-2xl bg-white/[0.02] hover:border-white/10 transition-all duration-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-white hover:text-aeo-cyan list-none text-sm sm:text-base transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-aeo-cyan flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-xs sm:text-sm text-white/80 font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* FOOTER CTA */}
          <div id="sec-footer-cta" className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/10 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Align Your Local Map &amp; AI Entity Assets</h3>
            <p className="text-sm text-white/70 max-w-md mx-auto font-light leading-relaxed">
              Ensure conversational AI engines and spatial map assistants cite your business accurately. Secure your local entity clarity check today.
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
