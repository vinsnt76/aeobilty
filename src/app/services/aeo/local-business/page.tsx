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
  Check,
  Code2,
  MessageSquare,
  BarChart3,
  ArrowUpRight,
  Layers,
  FileText
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "Local Business Visibility across Maps & AI Search | AEObility Perth",
  description: "Ensure your Perth local service business surfaces in map packs, voice search, and conversational AI assistants. Built for WA trades, clinics, and professional services.",
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
            "name": "What is the difference between Local SEO, GEO, and AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local SEO focuses on traditional search engine rankings and Map Packs. GEO (Geographic Engine Optimisation) focuses on spatial coordinates and location vector matching. AEO (Answer Engine Optimisation) structures business facts, FAQs, and service details so conversational AI assistants can synthesize direct answers."
            }
          },
          {
            "@type": "Question",
            "name": "How long does local AEO take to show results in Perth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial crawlability and schema indexation updates are typically parsed by search and map bots within 30 to 60 days. Full proximity signal alignment and conversational citation frequency generally materialise over 90 days."
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

  const localComparisonTable = [
    {
      aspect: "Primary Purpose",
      localSeo: "Rank in traditional search engine results & local Map Packs",
      geo: "Align spatial coordinates & proximity vectors for map engines",
      aeo: "Structure entity facts & decision answers for conversational AI"
    },
    {
      aspect: "Target Discovery System",
      localSeo: "Google Search, Bing Local, traditional web crawlers",
      geo: "Google Maps, Apple Maps, spatial location engines",
      aeo: "Perplexity, ChatGPT, Google Gemini, voice assistants"
    },
    {
      aspect: "Core Technical Metric",
      localSeo: "Keyword rankings, backlink counts & local citations",
      geo: "Coordinate mapping rules & hyper-local proximity pings",
      aeo: "Entity salience, passage extraction & citation frequency"
    },
    {
      aspect: "Primary Output",
      localSeo: "Google Business Profile & localized landing pages",
      geo: "Geofenced location nodes & map pack pinning",
      aeo: "Atomic answer blocks, FAQs & structured schema graphs"
    },
    {
      aspect: "Strategic Relationship",
      localSeo: "The traditional search foundation",
      geo: "The spatial location layer",
      aeo: "The conversational answer layer built on strong SEO & GEO"
    }
  ];

  const conversationalPrompts = [
    {
      prompt: '"Find an emergency plumber near West Perth with transparent pricing"',
      analysis: "AI engines query local schema, verified address coordinates (-31.9523, 115.8613), and atomic pricing answer blocks to synthesize a single recommended trade."
    },
    {
      prompt: '"Which clinic in Subiaco offers same-day health consultations?"',
      analysis: "Conversational engines extract structured service descriptions and operating hours microdata to deliver a confident direct recommendation."
    },
    {
      prompt: '"Who is the top-rated AEO specialist in Perth WA for local SMBs?"',
      analysis: "RAG engines evaluate entity salience, local client case study proof, and verified NAP directory references to cite AEObility as a trusted regional authority."
    }
  ];

  const PerthSuburbs = [
    "Perth CBD", "West Perth", "East Perth", "Subiaco", "Leederville",
    "Victoria Park", "South Perth", "Joondalup", "Stirling", "Scarborough",
    "Fremantle", "Booragoon", "Cannington", "Rockingham", "Midland"
  ];

  const jsonLdSnippet = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://aeobility.com.au/#localbusiness",
  "name": "AEObility",
  "legalName": "Trekaboutoz trading as AEObility",
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
    { "@type": "City", "name": "West Perth" },
    { "@type": "City", "name": "Subiaco" },
    { "@type": "City", "name": "Fremantle" }
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
        <section className="flex flex-col gap-12">
          
          {/* SECTION 1 — Refined Hero */}
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

          {/* SECTION 2 — Opportunity 1: Core Pillars with 90-120 Token Atomic Answer Blocks */}
          <div className="space-y-8">
            <div className="space-y-2 border-t border-white/5 pt-8">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Machine-Extractable Architecture</span>
              <h2 className="text-2xl font-bold">Core Local Visibility Pillars</h2>
            </div>

            {/* Pillar 1 */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-xl">
                  <MapPin className="w-5 h-5 text-aeo-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white">Dominating Local Map Packs</h3>
              </div>

              {/* Atomic Answer Block 1 */}
              <div className="p-4 bg-aeo-cyan/[0.03] border-l-4 border-l-aeo-cyan border border-white/5 rounded-xl space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-aeo-cyan uppercase tracking-wider block">ATOMIC ANSWER BLOCK — LOCAL MAP PACK OPTIMISATION</span>
                <p className="text-xs text-white/85 font-light leading-relaxed">
                  Local Map Pack optimisation is the process of structuring your business identity so search engines place your brand in the top 3 geographic map results. For Perth SMBs, appearing in Map Packs requires a verified Google Business Profile (GBP), consistent Name, Address, and Phone (NAP) citations across Australian directories, and explicit Schema.org microdata. AEObility aligns on-site service definitions with local map category fields to maximize regional intent matching and drive high-converting local calls.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-xl">
                  <Compass className="w-5 h-5 text-aeo-purple" />
                </div>
                <h3 className="text-lg font-bold text-white">Voice &amp; Conversational Search Proximity</h3>
              </div>

              {/* Atomic Answer Block 2 */}
              <div className="p-4 bg-aeo-purple/[0.03] border-l-4 border-l-aeo-purple border border-white/5 rounded-xl space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-aeo-purple uppercase tracking-wider block">ATOMIC ANSWER BLOCK — CONVERSATIONAL PROXIMITY SIGNALING</span>
                <p className="text-xs text-white/85 font-light leading-relaxed">
                  Conversational proximity signaling ensures voice assistants (Siri, Google Assistant) and conversational AI engines (ChatGPT, Perplexity) select your business when users ask natural language local queries (such as &ldquo;plumber near West Perth&rdquo;). AI engines rely on spatial coordinate vectors and explicit service suburb declarations rather than simple keyword matches. AEObility structures hyper-local GeoCoordinates and atomic answer blocks to feed clear location signals into RAG retrieval passes.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-xl">
                  <Building2 className="w-5 h-5 text-aeo-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white">Structured Schema for WA Trades &amp; Clinics</h3>
              </div>

              {/* Atomic Answer Block 3 */}
              <div className="p-4 bg-aeo-cyan/[0.03] border-l-4 border-l-aeo-cyan border border-white/5 rounded-xl space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-aeo-cyan uppercase tracking-wider block">ATOMIC ANSWER BLOCK — STRUCTURED LOCAL SCHEMA</span>
                <p className="text-xs text-white/85 font-light leading-relaxed">
                  Structured local schema is machine-readable JSON-LD code added to your website to explicitly state your legal entity, address, GPS coordinates, operating hours, and service regions. For Western Australian trades, medical clinics, and service providers, schema microdata removes ambiguity for search bots. AEObility implements nested LocalBusiness, GeoCoordinates, and areaServed schemas so AI systems accurately parse where you operate and recommend your business.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 3 — Opportunity 2: AEO vs GEO vs Local SEO Comparison Table */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Structural Clarity</span>
              <h2 className="text-2xl font-bold">Local SEO vs GEO vs AEO: Understanding the Shift</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Discover how traditional local search rankings differ from spatial map engine optimisation and AI answer engine retrieval.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.01]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="p-4 font-bold text-white/90 w-1/5">Comparison Aspect</th>
                    <th className="p-4 font-bold text-blue-400 w-1/4">Local SEO</th>
                    <th className="p-4 font-bold text-aeo-purple w-1/4">GEO (Geographic Engine)</th>
                    <th className="p-4 font-bold text-aeo-cyan w-3/10">AEO (Answer Engine)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {localComparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-semibold text-white/80 font-mono">{row.aspect}</td>
                      <td className="p-4 text-white/60 font-light leading-relaxed">{row.localSeo}</td>
                      <td className="p-4 text-white/80 font-light leading-relaxed bg-aeo-purple/[0.02]">{row.geo}</td>
                      <td className="p-4 text-white/90 font-light leading-relaxed bg-aeo-cyan/[0.02]">{row.aeo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 4 — Opportunity 5: Decision-Stage Conversational Query Patterns */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-purple uppercase tracking-wider">Conversational Intent</span>
              <h2 className="text-2xl font-bold">When Customers Ask AI Assistants for Local Services</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                See how conversational search platforms interpret natural voice queries and select recommended local businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {conversationalPrompts.map((item, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-aeo-cyan text-xs font-mono font-bold">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>User Voice Query #{idx + 1}</span>
                    </div>
                    <p className="text-xs font-bold text-white italic bg-white/5 p-3 rounded-xl border border-white/5">
                      {item.prompt}
                    </p>
                  </div>
                  <div className="space-y-1 border-t border-white/5 pt-3">
                    <span className="text-[10px] font-mono text-white/50 uppercase block">RAG Matching Logic:</span>
                    <p className="text-xs text-white/70 font-light leading-relaxed">{item.analysis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5 — Opportunity 3: Perth Local Case Study Evidence (Baby Bento) */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl space-y-4 border-l-aeo-purple border-l-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-aeo-purple">
                  <BarChart3 className="w-4 h-4" />
                  <span>LOCAL EVIDENCE &amp; CASE PROOF</span>
                </div>
                <h3 className="text-xl font-bold text-white">Baby Bento Local &amp; E-Commerce Case Study</h3>
              </div>
              
              <Link
                href="/knowledge-hub/case-studies/baby-bento"
                className="px-4 py-2.5 rounded-xl bg-aeo-purple/20 border border-aeo-purple/40 text-white font-bold text-xs hover:bg-aeo-purple/30 transition-all inline-flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 text-aeo-cyan" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1">
                <span className="font-mono text-[10px] text-white/50 uppercase block">Starting Position</span>
                <p className="text-white/80 font-light leading-relaxed">
                  Perth-based retail brand required clear product specifications, structured schema, and local answer block formatting.
                </p>
              </div>

              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1">
                <span className="font-mono text-[10px] text-white/50 uppercase block">Work Completed</span>
                <p className="text-white/80 font-light leading-relaxed">
                  Refactored product data feeds, deployed rich product schema microdata, and built direct-answer FAQ blocks.
                </p>
              </div>

              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1">
                <span className="font-mono text-[10px] text-white/50 uppercase block">Ground-Truth Results</span>
                <p className="text-white/90 font-medium leading-relaxed">
                  Achieved a <strong className="text-aeo-cyan font-bold">+17% sales uplift</strong> and a <strong className="text-aeo-cyan font-bold">+95% CTR increase</strong> in AI search placements over 90 days.
                </p>
              </div>

              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1 lg:col-span-3">
                <span className="font-mono text-[10px] text-white/50 uppercase block">Key Lesson for Perth SMBs</span>
                <p className="text-white/80 font-light leading-relaxed">
                  Structured entity clarity and explicit service specifications directly eliminate machine ambiguity, driving higher conversion readiness across local map and AI discovery engines.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 6 — Opportunity 4: Visual Schema.org JSON-LD Code Examples */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Technical Reference</span>
              <h2 className="text-2xl font-bold">On-Page Schema.org Microdata Example</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Below is an example of the nested LocalBusiness JSON-LD schema deployed for Perth service businesses.
              </p>
            </div>

            <div className="p-6 bg-black/80 border border-white/10 rounded-2xl space-y-3 font-mono text-xs overflow-x-auto relative">
              <div className="flex justify-between items-center pb-2 border-b border-white/10 text-white/50">
                <span className="flex items-center gap-1.5 text-aeo-cyan font-bold">
                  <Code2 className="w-4 h-4" />
                  LocalBusiness_Schema.jsonld
                </span>
                <span>JSON-LD Format</span>
              </div>
              <pre className="text-white/80 leading-relaxed overflow-x-auto">
                <code>{jsonLdSnippet}</code>
              </pre>
            </div>
          </div>

          {/* SECTION 7 — Perth Suburban Coverage Grid */}
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

          {/* SECTION 8 — Local Optimization Checklist Box */}
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

          {/* SECTION 9 — Corridor CTA */}
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

          {/* SECTION 10 — Semantic Mesh Navigation */}
          <div className="border-t border-white/5 pt-6 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-aeo-cyan">Semantic Connections</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <Link href="/services/geo-marketing" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Explore dedicated GEO Marketing Strategies &rarr;
              </Link>
              <Link href="/about/freelance-seo-consultant-perth" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Freelance SEO Consultant Perth Profile &rarr;
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
