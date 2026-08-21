import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroScanForm from '@/components/services/HeroScanForm';
import {
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Compass,
  PhoneCall,
  Check,
  Code2,
  MessageSquare,
  BarChart3,
  ArrowUpRight,
  Layers,
  FileText,
  Award,
  HelpCircle,
  BookOpen,
  Activity,
  UserCheck,
  Search,
  Globe,
  CheckSquare,
  ArrowRightCircle,
  User,
  TrendingUp,
  Cpu
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "Local Business AEO & GEO Marketing Services in Perth | AEObility",
  description: "Improve how clearly your Perth business is represented across your website, Google Business Profile, local directories, Maps, and answer-led search experiences.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/local-business",
  },
};

export default function LocalBusinessAEOPage() {

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://aeobility.com.au/#localbusiness",
        "name": "AEObility",
        "legalName": "Trekaboutoz trading as AEObility",
        "url": "https://aeobility.com.au",
        "telephone": "0480 286 282",
        "email": "contact@aeobility.com.au",
        "priceRange": "$$",
        "description": "Local Business AEO, GEO Marketing, and Conversion Rate Optimisation (CRO) services for Perth and Western Australian small businesses.",
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
        "hasMap": "https://maps.google.com/?q=-31.9523,115.8613",
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
        "knowsAbout": [
          "Answer Engine Optimisation",
          "Generative Engine Optimisation",
          "Conversion Rate Optimisation",
          "Local Search Strategy",
          "MedicalBusiness",
          "PhysicalTherapyClinic",
          "Electrician",
          "Plumber",
          "HVACBusiness"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:30",
            "closes": "17:00"
          }
        ],
        "sameAs": [
          "https://www.truelocal.com.au/business/aeobility",
          "https://www.yellowpages.com.au/wa/perth/aeobility",
          "https://www.linkedin.com/in/vincebaker"
        ],
        "potentialAction": [
          {
            "@type": "Action",
            "name": "Check AI Search Readiness",
            "target": "https://aeobility.com.au/diagnostic"
          },
          {
            "@type": "Action",
            "name": "Get AEObility Blueprint",
            "target": "https://aeobility.com.au/solutions/aeo-blueprint"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/aeo/local-business#service",
        "name": "Local Business AEO & GEO Marketing Services",
        "description": "Improve how clearly your Perth business is represented across your website, Google Business Profile, local directories, Maps, and answer-led search experiences.",
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
            "name": "What is the difference between Local SEO, AEO, and GEO Marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local SEO focuses on improving discoverability and organic rankings in Google Search and Maps. Local AEO structures business facts and pre-purchase FAQs for conversational AI answer engines. GEO Marketing (Generative Engine Optimisation) aligns your entity data across generative search platforms so AI assistants accurately represent your physical location and services."
            }
          },
          {
            "@type": "Question",
            "name": "Can any agency guarantee a top-three Google Maps result?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Google Maps visibility depends on factors such as relevance, distance, prominence, competition, category fit, reviews, and the searcher's location. AEObility can improve the accuracy and quality of local-search foundations, but no agency can guarantee a specific Map Pack position."
            }
          },
          {
            "@type": "Question",
            "name": "How does structured data help a local business website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Structured JSON-LD data provides search engines with clear, standardized code declaring business attributes like legal name, address, opening hours, and operating areas. It helps clarify business facts when it matches visible page content, though it does not guarantee specific rankings or inclusion in AI answers."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a physical Perth address to use local SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Service-area businesses that travel to clients (such as mobile plumbers or electricians) can operate without showing a physical storefront address, provided their Google Business Profile service areas and on-site location pages accurately reflect their operating regions."
            }
          },
          {
            "@type": "Question",
            "name": "Which Perth businesses are a good fit for local AEO and GEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local AEO and GEO are ideal for Perth service providers where customers ask detailed questions before booking—including home trades (plumbing, electrical, HVAC), health and medical clinics, professional advisory firms (accounting, legal, consulting), local retailers, and regional e-commerce brands."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in the $995 AEObility Blueprint?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The $995 AEObility Blueprint includes a complete audit of your local presence, NAP directory consistency, Google Business Profile configuration, key service pages, structured data checklist, a 90-day action roadmap, and a 45-minute strategy walkthrough with 100% credit-back terms."
            }
          },
          {
            "@type": "Question",
            "name": "How long does local SEO, AEO, and GEO work take to show results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial search engine crawlability and structured data indexation updates are typically processed within 30 to 60 days. Broader improvements in search impressions, lead quality, and customer inquiry clarity generally develop over 90 days as search engines validate consistent business details."
            }
          }
        ]
      }
    ]
  };

  const localSeoVsAeoTable = [
    {
      aspect: "Primary Purpose",
      seo: "Improve discoverability and organic performance in local search & Maps",
      aeo: "Make business facts, services, and FAQs clearer for answer-led search experiences"
    },
    {
      aspect: "Core Foundations",
      seo: "Google Business Profile, NAP consistency, local citations, site usability, technical SEO",
      aeo: "Direct answers, consistent business details, structured JSON-LD data, decision-stage content"
    },
    {
      aspect: "Typical Outputs",
      seo: "Local service pages, directory listings, category landing pages, map profile updates",
      aeo: "Service FAQs, clear pricing factors, decision guides, structured schema graphs"
    },
    {
      aspect: "Relationship",
      seo: "The essential search foundation",
      aeo: "A complementary layer built on strong local SEO and GEO alignment"
    }
  ];

  const customerQuestionsTable = [
    {
      question: '"Who offers local SEO, AEO, and GEO support in Perth?"',
      clearResponse: "Your experience, services, location, process, and contact details"
    },
    {
      question: '"Find an emergency electrician in Subiaco"',
      clearResponse: "Service area, operating hours, emergency availability, contact information, and relevant services"
    },
    {
      question: '"What is included in a Perth local-search audit?"',
      clearResponse: "Scope, deliverables, timing, price factors, and next steps"
    }
  ];

  const serviceDeliverables = [
    {
      badge: "01. Data Audit",
      label: "Local Data & Directory Consistency Audit",
      desc: "Comprehensive review of Name, Address, and Phone (NAP) details across your website, Google Business Profile (GBP), True Local, and Yellow Pages AU.",
      bullets: [
        "Canonical NAP alignment check",
        "Directory inaccuracy report",
        "Core contact & location detail review"
      ]
    },
    {
      badge: "02. Map Profile",
      label: "Google Business Profile & GEO Optimization",
      desc: "Align your Google Business Profile primary category, business description, operating hours, and product/service catalogs with on-site pages.",
      bullets: [
        "Primary & secondary category audit",
        "Service & product catalog setup",
        "Review request & update process review"
      ]
    },
    {
      badge: "03. Content & CRO",
      label: "Service Page & CRO Refactoring",
      desc: "Develop clear service briefs, location explanations, and Conversion Rate Optimisation (CRO) enquiry pathways without keyword stuffing.",
      bullets: [
        "Suburb-level service scope briefs",
        "Clear pricing factor explanations",
        "Customer decision FAQ frameworks & CRO CTAs"
      ]
    },
    {
      badge: "04. Schema",
      label: "JSON-LD Structured Data Implementation",
      desc: "Deploy valid Schema.org LocalBusiness, PostalAddress, and areaServed JSON-LD code matching visible on-page text.",
      bullets: [
        "Local business structured data that matches your website",
        "Accurate address, service-area, and location details",
        "Schema Validator verification"
      ]
    },
    {
      badge: "05. Review",
      label: "Measurement & Progress Reviews",
      desc: "Ongoing monitoring of local search impressions, lead quality feedback, and quarterly content refinement priorities.",
      bullets: [
        "Quarterly local search performance reviews",
        "Lead quality & customer query feedback",
        "Content iteration backlog updates"
      ]
    }
  ];

  const plainGlossary = [
    { term: "Entity", definition: "A distinct thing, such as a business, person, service, product, or location." },
    { term: "Structured data", definition: "Code (such as JSON-LD) that helps search engines understand key page details." },
    { term: "Answer engine", definition: "A search or conversational platform that provides direct answers alongside traditional search results." },
    { term: "Local SEO", definition: "Improving visibility in local organic search results, Google Business Profile, and Map listings." },
    { term: "Local AEO", definition: "Applying answer-focused content and accurate business facts to the questions local customers ask." },
    { term: "GEO Marketing", definition: "Generative Engine Optimisation, aligning entity data across generative search platforms and map engines." },
    { term: "CRO", definition: "Conversion Rate Optimisation, structuring pages to turn local search visitors into qualified inquiries." },
    { term: "RAG architecture", definition: "Retrieval-Augmented Generation, where AI search systems fetch verified site facts before generating answers." },
    { term: "Knowledge Graph topology", definition: "A structured network connecting business entities, locations, and services as machine-readable graph nodes." },
    { term: "RDF triples", definition: "Semantic data statements formatted as subject-predicate-object relationships (e.g. AEObility -> operatesIn -> Perth)." }
  ];

  const faqs = [
    {
      q: "What is the difference between Local SEO, Local AEO, and GEO Marketing?",
      a: "Local SEO focuses on improving discoverability, technical quality, Google Business Profile (GBP) details, and organic rankings in local search engine results. Local AEO builds on those foundations by organizing your business facts, service scope, and decision-stage answers so AI assistants and answer engines can present clear information when customers ask targeted questions. GEO Marketing aligns your entity data across generative search and map engines."
    },
    {
      q: "Can any agency guarantee a top-three Google Maps result?",
      a: "No. Google Maps visibility depends on factors such as relevance, distance, prominence, competition, category fit, reviews, and the searcher's location. AEObility can improve the accuracy and quality of local-search foundations, but no agency can guarantee a specific Map Pack position."
    },
    {
      q: "How does structured data help a local business website?",
      a: "Structured JSON-LD data provides search engines with clear, standardized code declaring business attributes like legal name, address, opening hours, and operating areas. It helps clarify business facts when it matches visible page content, though it does not guarantee specific rankings or inclusion in AI answers."
    },
    {
      q: "Do I need a physical Perth address to use local SEO?",
      a: "Service-area businesses that travel to clients (such as mobile plumbers or electricians) can operate without showing a physical storefront address, provided their Google Business Profile service areas and on-site location pages accurately reflect their operating regions."
    },
    {
      q: "Which Perth businesses are a good fit for local AEO and GEO?",
      a: "Local AEO and GEO are ideal for Perth service providers where customers ask detailed questions before booking—including home trades (plumbing, electrical, HVAC), health and medical clinics, professional advisory firms (accounting, legal, consulting), local retailers, and regional e-commerce brands."
    },
    {
      q: "What is included in the $995 AEObility Blueprint?",
      a: "The $995 AEObility Blueprint includes a complete audit of your local presence, NAP directory consistency, Google Business Profile configuration, key service pages, structured data checklist, a 90-day action roadmap, and a 45-minute strategy walkthrough with 100% credit-back terms."
    },
    {
      q: "How long does local SEO and AEO work take to show results?",
      a: "Initial search engine crawlability and structured data indexation updates are typically processed within 30 to 60 days. Broader improvements in search impressions, lead quality, and customer inquiry clarity generally develop over 90 days as search engines validate consistent business details."
    }
  ];

  const blueprintInclusions = [
    { item: "Local presence & directory review", desc: "A practical assessment of NAP consistency, Google Business Profile setup, and directory accuracy" },
    { item: "Service page & FAQ assessment", desc: "Recommendations for key local service pages, customer decision FAQs, and comparison opportunities" },
    { item: "Technical & structured-data review", desc: "A prioritised implementation checklist for JSON-LD schema where applicable" },
    { item: "90-day action roadmap", desc: "Clear work priorities, dependencies, suggested sequence, and next steps" },
    { item: "Strategy walkthrough", desc: "A 45-minute session to explain findings and answer questions" }
  ];

  const jsonLdSnippet = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://aeobility.com.au/#localbusiness",
      "name": "AEObility",
      "legalName": "Trekaboutoz trading as AEObility",
      "url": "https://aeobility.com.au",
      "telephone": "0480 286 282",
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
      "hasMap": "https://maps.google.com/?q=-31.9523,115.8613",
      "areaServed": [
        { "@type": "City", "name": "Perth" },
        { "@type": "City", "name": "West Perth" },
        { "@type": "City", "name": "Subiaco" },
        { "@type": "City", "name": "Fremantle" }
      ],
      "knowsAbout": [
        "Answer Engine Optimisation",
        "Generative Engine Optimisation",
        "Conversion Rate Optimisation",
        "MedicalBusiness",
        "Electrician",
        "Plumber"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "17:00"
        }
      ]
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
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full flex flex-col gap-14">
        <article className="flex flex-col gap-12">
          
          {/* SECTION 1 — Hero */}
          <header className="space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Grounded Local Search, AEO &amp; GEO Marketing for WA Businesses</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Local Business <span className="text-gradient-aeo">AEO &amp; GEO Services in Perth</span>
              </h1>
              
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                Improve how clearly your Perth business is represented across your website, Google Business Profile, local directories, Maps, and answer-led search experiences. AEObility combines local SEO foundations with GEO Marketing, Conversion Rate Optimisation (CRO), clear service content, and structured JSON-LD data.
              </p>
            </div>

            {/* CTA POSITION 1 — The Hero Entry Hook (Corridor C) */}
            <HeroScanForm />
          </header>

          {/* SECTION 2 — The Basics (90-Word Atomic Answer Block) */}
          <section className="atomic-answer-block p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-2xl border-l-aeo-cyan border-l-4 space-y-4">
            <div className="flex items-center gap-2 text-xs text-aeo-cyan font-semibold">
              <FileText className="w-4 h-4" />
              <span>The basics &bull; What is Local Business AEO &amp; GEO Marketing in Perth?</span>
            </div>
            
            <h2 className="text-xl font-bold text-white">What is Local Business AEO &amp; GEO Marketing in Perth?</h2>
            
            <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">
              Local Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) align a business&rsquo;s online entity data across websites, Google Business Profiles, and directories. Unlike traditional local SEO focused purely on rankings, a Perth AEO specialist structures Name, Address, and Phone (NAP) profiles, Knowledge Graph topology, and JSON-LD schema. This RAG-ready semantic site mapping ensures conversational AI search tools, Google Maps, and answer engines accurately interpret service areas, business hours, and pre-purchase FAQs to recommend Western Australian service providers directly to high-intent local buyers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-white/5">
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-aeo-cyan" />
                  Accurate local data
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Review business name, address, phone details, and local directory listings for accuracy and consistency.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-aeo-cyan" />
                  Clear service &amp; location pages
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Create explicit service scope descriptions, suburb coverage maps, and operating hour details.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-aeo-cyan" />
                  Decision-support content
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Build FAQs, direct answers, and fair comparison guides for pre-purchase customer questions.
                </p>
              </div>
            </div>
          </section>

          {/* CTA POSITION 2 — The Mid-Page Low-Friction Offer (Corridor A) */}
          <section className="p-6 md:p-8 bg-gradient-to-r from-aeo-purple/20 via-black to-aeo-cyan/20 border border-white/15 rounded-2xl space-y-4 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-bold text-aeo-cyan block">
                  Standalone Strategic Blueprint
                </span>
                <h3 className="text-xl font-bold text-white">
                  A low-risk diagnostic uncovering exactly how AI search engines interpret your physical location.
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Includes a 100% credit guarantee towards subsequent implementation sprints. No pressure. Just clarity.
                </p>
              </div>

              <Link
                href="/solutions/aeo-blueprint"
                className="px-6 py-4 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(0,205,216,0.3)] inline-flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
              >
                <span>Claim Your $995 Clarity Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* SECTION 3 — How Local SEO and AEO work together */}
          <section className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">How Local SEO and AEO work together</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Compare how traditional local search engine optimisation complements clear content designed around customer questions.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.01]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="p-4 font-bold text-white/90 w-1/4">Area</th>
                    <th className="p-4 font-bold text-blue-400 w-3/8">Local SEO</th>
                    <th className="p-4 font-bold text-aeo-cyan w-3/8">Local AEO &amp; GEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {localSeoVsAeoTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-semibold text-white/80 font-mono">{row.aspect}</td>
                      <td className="p-4 text-white/60 font-light leading-relaxed">{row.seo}</td>
                      <td className="p-4 text-white/90 font-light leading-relaxed bg-aeo-cyan/[0.02]">{row.aeo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 3-Step Horizontal Diagram: How local AEO fits into your search foundations */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white">How local AEO fits into your search foundations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-bold">
                    <MapPin className="w-4 h-4" />
                    <span>1. Get the basics right</span>
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    Website usability, Google Business Profile setup, local directory accuracy, and customer reviews.
                  </p>
                </div>

                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-aeo-cyan text-xs font-bold">
                    <CheckSquare className="w-4 h-4" />
                    <span>2. Make key information clear</span>
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    Service details, suburb operating areas, opening hours, helpful FAQs, and clear pricing factors.
                  </p>
                </div>

                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-aeo-purple text-xs font-bold">
                    <ArrowRightCircle className="w-4 h-4" />
                    <span>3. Help customers choose</span>
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    Fair service comparisons, decision guides, clear call-to-action buttons, and direct enquiry paths.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA POSITION 3 — The Inline Capability Matrix Token (Corridor B) */}
            <div className="p-5 bg-white/[0.01] border border-white/10 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <span className="text-xs font-bold text-aeo-cyan block">
                  Technical Implementation
                </span>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  Skip the diagnostic audit and move straight into updating your website&apos;s location information and structured data.
                </p>
              </div>

              <Link
                href="/solutions/aeo-blueprint"
                className="border border-aeo-cyan text-aeo-cyan hover:bg-aeo-cyan/10 transition-colors px-5 py-3 rounded-xl font-mono text-xs font-bold inline-flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
              >
                <Code2 className="w-4 h-4" />
                <span>Deploy Schema Sprints</span>
              </Link>
            </div>

            <p className="text-xs text-white/70 font-light leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
              <strong className="text-white font-semibold">Supporting note:</strong> Local AEO is not a replacement for Local SEO. Strong Local SEO remains essential; Local AEO builds on those foundations by making key business information more explicit, consistent, and useful for answer-led discovery.
            </p>
          </section>

          {/* SECTION 4 — Questions your customers ask */}
          <section className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Questions your customers ask</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Prospective clients ask specific questions before making contact. Search systems look for clear service details, accurate location information, and evidence that a business is relevant.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.01]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="p-4 font-bold text-aeo-cyan w-1/2">Customer question</th>
                    <th className="p-4 font-bold text-white/90 w-1/2">What your website should make clear</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {customerQuestionsTable.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="p-4 font-medium text-white italic">{item.question}</td>
                      <td className="p-4 text-white/70 font-light leading-relaxed">{item.clearResponse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 5 — What's included (Deliverables & Scope) */}
          <section className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">What&apos;s included</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Practical, buyer-friendly deliverables designed to strengthen search quality, business information clarity, and Conversion Rate Optimisation (CRO).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceDeliverables.map((module, idx) => (
                <div key={idx} className={`p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-between space-y-4 hover:border-white/20 transition-all ${idx === 4 ? 'md:col-span-2' : ''}`}>
                  <div className="space-y-4">
                    <span className="text-xs font-mono font-bold text-aeo-cyan bg-aeo-cyan/10 px-2.5 py-1 rounded-full border border-aeo-cyan/20 inline-block">
                      {module.badge}
                    </span>

                    <h3 className="text-lg font-bold text-white">{module.label}</h3>
                    <p className="text-xs text-white/70 leading-relaxed font-light">{module.desc}</p>

                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider block">Deliverables include:</span>
                      <ul className="space-y-2">
                        {module.bullets.map((del, dIdx) => (
                          <li key={dIdx} className="flex gap-2 items-start text-xs font-light text-white/80 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6 — Why work with AEObility (Provider Proof) */}
          <section className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Why work with AEObility</h2>
              <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed max-w-3xl">
                AEObility is a Perth-based AEO, GEO Marketing, and digital search agency helping WA businesses improve the clarity, consistency, and usefulness of their local service information across websites, Google Business Profiles, local directories, and answer-led search experiences.
              </p>
            </div>

            {/* Founder Practitioner Card */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="p-3 bg-aeo-cyan/10 border border-aeo-cyan/30 rounded-2xl text-aeo-cyan flex-shrink-0">
                <User className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Vince Baker &bull; Founder, AEO &amp; GEO Specialist</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Based in Perth, Western Australia. 15+ years in search engine optimization, local search engineering, GEO Marketing, and structured data implementation for Australian SMBs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-aeo-cyan text-sm font-bold">
                  <MapPin className="w-4 h-4" />
                  <span>Local WA Experience</span>
                </div>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Based in Perth, engineering technical search, GEO Marketing, local SEO foundations, and structured data solutions for Australian SMBs.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-aeo-purple text-sm font-bold">
                  <Building2 className="w-4 h-4" />
                  <span>Sectors Served</span>
                </div>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Local trades (plumbing, electrical, HVAC), health clinics, professional services (accounting, legal, consulting), retailers, and e-commerce.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-aeo-cyan text-sm font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Transparent Methodology</span>
                </div>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Grounded in verifiable technical search standards, explicit deliverables, and realistic measurement expectations without overpromised guarantees.
                </p>
              </div>
            </div>

            {/* Qualitative Case Study Card: A Perth client example */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl space-y-4 border-l-aeo-purple border-l-4 mt-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-aeo-purple block">A Perth client example</span>
                  <h3 className="text-xl font-bold text-white">Baby Bento Case Study</h3>
                </div>
                
                <Link
                  href="/knowledge-hub/case-studies/baby-bento"
                  className="px-4 py-2.5 rounded-xl bg-aeo-purple/20 border border-aeo-purple/40 text-white font-bold text-xs hover:bg-aeo-purple/30 transition-all inline-flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-aeo-cyan" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1">
                  <span className="font-mono text-[10px] text-white/50 uppercase block">Before</span>
                  <p className="text-white/80 font-light leading-relaxed">
                    Product information was inconsistent or incomplete across digital channels.
                  </p>
                </div>

                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1">
                  <span className="font-mono text-[10px] text-white/50 uppercase block">Work Completed</span>
                  <p className="text-white/80 font-light leading-relaxed">
                    Product data, structured JSON-LD schema, and decision FAQs were improved.
                  </p>
                </div>

                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1">
                  <span className="font-mono text-[10px] text-white/50 uppercase block">Outcome</span>
                  <p className="text-white/90 font-medium leading-relaxed">
                    Clearer product information and measured commercial improvement over 90 days (17% sales uplift, 95% CTR increase in organic search).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7 — Structured data for local businesses (Collapsible Code) */}
          <section className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Structured data for local businesses</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Structured JSON-LD data provides search engines with clear, standardized code declaring business attributes like legal name, address, opening hours, trade capabilities, and operating areas.
              </p>
            </div>

            {/* Expandable <details> for code sample */}
            <details className="group border border-white/10 rounded-2xl bg-black/60 p-5 cursor-pointer">
              <summary className="font-mono text-xs text-aeo-cyan font-bold flex items-center justify-between outline-none list-none">
                <span className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  View an example of LocalBusiness JSON-LD
                </span>
                <span className="group-open:rotate-180 transition-transform duration-200">&darr;</span>
              </summary>

              <div className="mt-4 pt-4 border-t border-white/10 font-mono text-xs overflow-x-auto">
                <pre className="text-white/80 leading-relaxed">
                  <code>{jsonLdSnippet}</code>
                </pre>
              </div>
            </details>
          </section>

          {/* SECTION 8 — Areas we serve */}
          <section className="p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white">Areas we serve</h2>
              <p className="text-xs text-white/70 font-light max-w-2xl leading-relaxed">
                Based in Perth and working with businesses across the metro area and wider WA, including Perth CBD, Subiaco, Fremantle, Joondalup, Rockingham, Midland, and surrounding suburbs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-3.5 bg-black/40 border border-white/5 rounded-xl space-y-2">
                <span className="text-[11px] font-mono font-bold text-aeo-cyan uppercase block">Central &amp; Inner</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Perth CBD", "West Perth", "East Perth", "Subiaco", "Leederville"].map((suburb, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/80 font-mono">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-black/40 border border-white/5 rounded-xl space-y-2">
                <span className="text-[11px] font-mono font-bold text-blue-400 uppercase block">North Metro</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Joondalup", "Stirling", "Scarborough"].map((suburb, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/80 font-mono">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-black/40 border border-white/5 rounded-xl space-y-2">
                <span className="text-[11px] font-mono font-bold text-aeo-purple uppercase block">South &amp; East</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Victoria Park", "South Perth", "Booragoon", "Cannington", "Midland"].map((suburb, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/80 font-mono">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-black/40 border border-white/5 rounded-xl space-y-2">
                <span className="text-[11px] font-mono font-bold text-aeo-cyan uppercase block">Coastal &amp; South-West</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Fremantle", "Rockingham"].map((suburb, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/80 font-mono">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/contact" className="text-xs text-aeo-cyan hover:underline font-medium inline-flex items-center gap-1">
                <span>Ask about your area</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </section>

          {/* SECTION 9 — Related guides (Mandatory Target Link Corridors) */}
          <section className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">Related guides</h3>
              <p className="text-xs text-white/60 font-light">
                Useful links to related local-search guides and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-semibold pt-1">
              <Link href="/services/geo-marketing" className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-aeo-cyan/30 hover:text-aeo-cyan transition-all space-y-1">
                <span className="text-aeo-cyan font-mono block text-[10px] uppercase">Services</span>
                <span className="text-white group-hover:text-aeo-cyan">GEO Marketing Services &rarr;</span>
                <p className="text-[11px] text-white/50 font-light leading-relaxed">Map engine visibility and local search strategy.</p>
              </Link>

              <Link href="/knowledge-hub/geo" className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-aeo-cyan/30 hover:text-aeo-cyan transition-all space-y-1">
                <span className="text-aeo-purple font-mono block text-[10px] uppercase">Knowledge Hub</span>
                <span className="text-white group-hover:text-aeo-cyan">GEO vs Local SEO Guide &rarr;</span>
                <p className="text-[11px] text-white/50 font-light leading-relaxed">Technical guide on local search vs generative map discovery.</p>
              </Link>

              <Link href="/about/freelance-seo-consultant-perth" className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-aeo-cyan/30 hover:text-aeo-cyan transition-all space-y-1">
                <span className="text-aeo-cyan font-mono block text-[10px] uppercase">Profile</span>
                <span className="text-white group-hover:text-aeo-cyan">Freelance SEO Consultant Perth &rarr;</span>
                <p className="text-[11px] text-white/50 font-light leading-relaxed">Perth digital strategy &amp; local optimization credentials.</p>
              </Link>
            </div>
          </section>

          {/* SECTION 10 — Frequently asked questions (7 Rendered Items) */}
          <section className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Frequently asked questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white/[0.01] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.03] transition-colors"
                >
                  <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm">
                    <span>{faq.q}</span>
                    <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300 font-mono text-lg">+</span>
                  </summary>
                  <p className="mt-4 text-xs text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/40 font-light">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Plain-Language Glossary & Latent Semantic Layer */}
          <section className="space-y-4 border-t border-white/5 pt-8">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white font-mono">Plain-Language Glossary &amp; Technical Concepts</h3>
              <p className="text-xs text-white/60 font-light">
                Key local search, GEO, and machine-readability terms explained in clear, everyday language.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plainGlossary.map((g, idx) => (
                <div key={idx} className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl space-y-1">
                  <h4 className="text-xs font-bold text-aeo-cyan font-mono">{g.term}</h4>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{g.definition}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 11 — Start with a clear plan ($995 Blueprint CTA) */}
          <section className="p-8 md:p-10 bg-gradient-to-br from-aeo-purple/15 via-black to-aeo-cyan/15 border border-white/10 rounded-3xl text-center space-y-6 mt-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-aeo-cyan/10 rounded-full filter blur-3xl -z-10" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prioritised Search Visibility Roadmap</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Start with a clear plan: <span className="text-gradient-aeo">The AEObility Blueprint</span>
            </h2>
            
            <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto font-light leading-relaxed">
              For Perth businesses that want a prioritised local AEO and search-visibility roadmap before committing to implementation.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/50 text-left max-w-3xl mx-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-3.5 font-bold text-aeo-cyan font-mono">Included</th>
                    <th className="p-3.5 font-bold text-white">What the client receives</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {blueprintInclusions.map((inc, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="p-3.5 font-semibold text-white/90">{inc.item}</td>
                      <td className="p-3.5 text-white/70 font-light leading-relaxed">{inc.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto pt-2">
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-white/50 block">TIMEFRAME</span>
                <p className="text-xs font-bold text-white">5–7 Business Days</p>
              </div>
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-white/50 block">PRICE</span>
                <p className="text-xs font-bold text-white">$995 AUD</p>
              </div>
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-white/50 block">WALKTHROUGH</span>
                <p className="text-xs font-bold text-white">45-Minute Session</p>
              </div>
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1">
                <span className="text-[10px] font-mono font-semibold text-aeo-cyan block">CREDIT-BACK</span>
                <p className="text-xs font-bold text-white">100% Credited</p>
              </div>
            </div>

            <p className="text-[11px] text-white/60 font-light max-w-lg mx-auto">
              *100% credited toward a qualifying subsequent AEO implementation sprint.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/solutions/aeo-blueprint"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)]"
              >
                <span>Get the AEObility Blueprint ($995)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/10 transition-all"
              >
                <Activity className="w-3.5 h-3.5 text-aeo-cyan" />
                <span>Check AI Search Readiness</span>
              </Link>
            </div>
          </section>

          {/* CTA POSITION 4 — Terminal Radial Loop Continuity Guard */}
          <section className="p-8 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 rounded-3xl space-y-4 font-serif border-l-4 border-l-aeo-cyan">
            <div className="space-y-2">
              <span className="font-sans text-xs text-aeo-cyan font-bold block">
                Human Practitioner Proof &bull; Perth WA
              </span>
              <h3 className="text-xl md:text-2xl font-normal italic text-white/90 leading-snug">
                &ldquo;Verify local case evidence: See how Western Australian local trades and clinics dominate location-aware search graphs.&rdquo;
              </h3>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 font-sans text-xs">
              <Link
                href="/about/freelance-seo-consultant-perth"
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:border-aeo-cyan/40 hover:text-aeo-cyan transition-all inline-flex items-center gap-2"
              >
                <UserCheck className="w-4 h-4 text-aeo-cyan" />
                <span>Continue to Perth Consultant Profile &rarr;</span>
              </Link>
              <Link
                href="/knowledge-hub/case-studies/baby-bento"
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 font-medium hover:text-white transition-all inline-flex items-center gap-2"
              >
                <span>Read Baby Bento Perth Case Study &rarr;</span>
              </Link>
            </div>
          </section>

          <footer className="pt-2 flex">
            <Link href="/services/aeo" className="text-xs font-medium text-white/40 hover:text-white transition-colors">
              &larr; Back to <strong className="text-white hover:underline">AEO Services</strong>
            </Link>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}
