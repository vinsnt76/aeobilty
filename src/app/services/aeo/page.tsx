import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { getCanonicalAeoSchemaGraph } from '@/lib/schema/canonicalAeo';
import FaqAccordion from '@/components/FaqAccordion';
import AeoDiagnosticSection from '@/components/services/AeoDiagnosticSection';
import AeoContactSection from '@/components/services/AeoContactSection';
import AeoStartingPointGrid from '@/components/services/AeoStartingPointGrid';
import {
  ArrowRight,
  Eye,
  Brain,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Calendar,
  Layers,
  Code,
  Compass,
  DollarSign,
  Activity,
  Target,
  Bot,
  FileCheck,
  BarChart3
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Answer Engine Optimisation (AEO) Services | AEObility",
  description: "Structure your digital footprint for AI-first search engines and modern discovery platforms. Predictable fixed-scope sprints from $495 AUD ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo",
  },
  openGraph: {
    title: "Answer Engine Optimisation (AEO) Services | AEObility",
    description: "Fixed-scope Answer Engine Optimisation sprints for Australian businesses. Micro-sprints from $495 AUD ex. GST.",
    url: "https://aeobility.com.au/services/aeo",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/services/canonical-aeo-services-hub_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility canonical Answer Engine Optimisation dashboard mapping 4 foundational pillars, structured content deliverables, and AEO sprint execution.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Answer Engine Optimisation (AEO) Services | AEObility",
    description: "Fixed-scope Answer Engine Optimisation sprints for Australian businesses. Micro-sprints from $495 AUD ex. GST.",
    images: ["https://aeobility.com.au/images/services/canonical-aeo-services-hub_AEObility.webp"],
  },
};

export const AEO_CANONICAL_INTERNAL_LINKS = [
  {
    targetSlug: "/services/aeo/definition",
    anchorText: "What is AEO?",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/aeo/comparison",
    anchorText: "AEO vs SEO Comparison Matrix",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/aeo/shopify",
    anchorText: "Shopify AEO Services",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/aeo/local-business",
    anchorText: "Local Business Visibility",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/knowledge-hub/aeo",
    anchorText: "AEO Core Principles & Machine Mechanics",
    entityRelation: "http://schema.org/subjectOf"
  },
  {
    targetSlug: "/knowledge-hub/articles/optimising-for-different-ai-search-engines",
    anchorText: "Multi-Engine AI Retrieval Guide",
    entityRelation: "http://schema.org/subjectOf"
  },
  {
    targetSlug: "/knowledge-hub/articles/retrieval-augmented-generation",
    anchorText: "RAG Search Optimisation Guide",
    entityRelation: "http://schema.org/subjectOf"
  },
  {
    targetSlug: "/knowledge-hub/articles/structured-data-query-fan-out",
    anchorText: "Structured Data & Query Fan-Out",
    entityRelation: "http://schema.org/subjectOf"
  },
  {
    targetSlug: "/knowledge-hub/articles/positional-bias-in-retrieval",
    anchorText: "Positional Bias Audit & Mitigation",
    entityRelation: "http://schema.org/subjectOf"
  },
  {
    targetSlug: "/knowledge-hub/articles/entity-authority-building",
    anchorText: "Entity Authority Guide",
    entityRelation: "http://schema.org/subjectOf"
  },
  {
    targetSlug: "/brand-facts",
    anchorText: "Canonical Brand Facts & SKU Pricing Registry",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/knowledge-hub/case-studies/aeo-geo-blueprint-90-days",
    anchorText: "first 90 days case study",
    entityRelation: "http://schema.org/subjectOf"
  }
];

export default function AEORootPage() {
  const faqs = [
    {
      question: "What is the difference between AEO and traditional SEO?",
      answer: "Traditional SEO focuses on improving discoverability, technical quality, and organic rankings in search engines. Answer Engine Optimisation (AEO) builds on SEO by making key business facts, services, and decision-stage answers clearer and more structured for answer-led search experiences and AI search assistants."
    },
    {
      question: "Does comparison content help AEO?",
      answer: "Comparison content helps when it answers real customer decision prompts clearly and objectively. Explaining service options, comparison criteria, trade-offs, and target suitability gives search platforms and AI agents clear structured evidence to reference."
    },
    {
      question: "Is AEO a replacement for traditional SEO?",
      answer: "No. AEO complements SEO. Technical SEO, helpful content, fast page speed, site usability, local visibility, and domain authority remain essential foundations of search performance."
    },
    {
      question: "Does AEO help with local search and Google Maps?",
      answer: "Yes. AEO strengthens local business detail consistency (name, address, phone number, services, and operating regions), improving local search visibility and voice assistant accuracy across Maps and local search packs."
    },
    {
      question: "What is included in the $995 AEObility Blueprint?",
      answer: "The Blueprint includes a complete digital presence audit, technical gap analysis, visibility scorecard, and a practical 90-day execution roadmap. If you proceed with Foundation Implementation within 60 days, the full $995 Blueprint fee is credited toward your implementation cost."
    },
    {
      question: "How long does an AEO sprint take to deliver?",
      answer: "Most targeted Micro-Sprints are delivered within 4–5 business days after scope and access are confirmed. Foundation Implementation is delivered across a structured four-week schedule with agreed milestones."
    }
  ];

  const pillars = [
    {
      icon: <Layers className="w-6 h-6 text-aeo-cyan" />,
      title: "1. Machine-Readable Structure",
      description: "Deploy nested JSON-LD schema markup (Organisation, Service, Offer, LocalBusiness) so scrapers and search systems can extract structured facts without missing data."
    },
    {
      icon: <Brain className="w-6 h-6 text-aeo-purple" />,
      title: "2. Atomic Content Clarity",
      description: "Restructure service copy into concise, self-contained answer blocks formatted around real customer decision queries and high-intent search prompts."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-aeo-cyan" />,
      title: "3. Internal Linking Lattice",
      description: "Connect core service hubs, sub-node specialisations, and regional location pages with explicit contextual internal links that reinforce topic authority."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-aeo-purple" />,
      title: "4. Corroborated Brand Authority",
      description: "Align core NAP details, verified credentials, and client evidence across external citations and authority profiles to build machine trust."
    }
  ];

  const jsonLdGraph = getCanonicalAeoSchemaGraph(faqs);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Unified JSON-LD Connected Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. Hero Block with Clean Featured WebP Image Backdrop & Overlaid CTAs */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-aeo-cyan uppercase tracking-widest font-semibold">
              <Sparkles className="w-4 h-4 text-aeo-cyan" />
              <span>Answer Engine Optimisation (AEO) Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Answer Engine Optimisation: <span className="text-gradient-aeo">Structure Your Digital Footprint for Modern AI Retrieval.</span>
            </h1>
            <div className="space-y-3 max-w-3xl mx-auto">
              <h2 className="text-lg sm:text-xl text-zinc-100 font-medium leading-relaxed font-soehne-breit">
                We restructure your business facts, services, and credentials so AI answer engines stop guessing and start citing you accurately. Clear scope. Flat rates.
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono font-bold text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-500">|</span>
                <span>Foundation Implementation from $3,195 AUD ex. GST</span>
              </div>
            </div>

            {/* Featured 1200x800 WebP Image Hero Banner with Overlaid CTAs */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/services/canonical-aeo-services-hub_AEObility.webp"
                alt="AEObility canonical Answer Engine Optimisation dashboard mapping 4 foundational pillars, structured content deliverables, and AEO sprint execution."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-4 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-4 shadow-2xl">
                <div className="text-left space-y-1">
                  <span className="text-xs sm:text-sm font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix one technical gap or build a comprehensive AEO foundation.</span>
                  <span className="text-xs sm:text-[14px] text-zinc-200 font-medium block">
                    Typical delivery: <strong className="text-white font-semibold">4–5 business days</strong> from confirmed scope and access.
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
                  <a
                    href="#aeo-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(0,229,255,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Run Free Scan</span>
                    <ArrowRight className="w-4 h-4 text-slate-950 shrink-0" />
                  </a>
                  <a
                    href="#aeo-contact-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-zinc-100 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Discuss AEO Services</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Grounded Real-World Practitioner Field Note */}
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-950/90 border border-cyan-500/30 shadow-lg text-left relative overflow-hidden max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-2 text-cyan-400 font-mono font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Field Note: Local WA Trade Recovery</span>
              </div>
              <p className="text-sm text-zinc-200 font-sans leading-relaxed max-w-prose">
                In a recent audit for a WA commercial trade, mismatched ABN registry names and unstructured PDF price sheets meant Perplexity hallucinated legacy rates. Converting that data into an atomic HTML table with nested LocalBusiness schema corrected the citation within two search engine recrawls.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-zinc-300 font-serif leading-relaxed">
              To review the underlying data structures that govern passage extraction, read our technical guide on how to <Link href="/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps" className="text-cyan-400 font-semibold hover:underline">fix AI brand hallucinations and evidence gaps</Link> using verified provenance networks.
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Looking for foundational concepts? Read our guide on <Link href="/services/aeo/definition" className="text-cyan-400 font-semibold hover:underline">What is AEO (Answer Engine Optimisation)?</Link> or explore specialised solutions like <Link href="/services/aeo/shopify" className="text-cyan-400 hover:underline font-medium">Shopify AEO Services</Link> and <Link href="/services/aeo/local-business" className="text-cyan-400 hover:underline font-medium">Local Business Visibility</Link>.
            </p>
          </section>

          {/* 2. "Choose Your Starting Point" Engagement Grid */}
          <section id="engagement-paths" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Predictable Fixed-Scope Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Choose Your Starting Point</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Fixed pricing and clear scopes. No lock-in contracts.</p>
            </div>

            <AeoStartingPointGrid />

            {/* Clean 3-Tier Comparison Matrix Table */}
            <div id="aeo-comparison" className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-md scroll-mt-24">
              <table className="w-full text-left text-xs font-serif border-collapse min-w-[580px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    <th className="p-3.5 sm:p-4">Service / Tier</th>
                    <th className="p-3.5 sm:p-4">Target Scope</th>
                    <th className="p-3.5 sm:p-4">Best For</th>
                    <th className="p-3.5 sm:p-4 text-right">Price (ex. GST)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEO Technical Micro-Sprint</td>
                    <td className="p-3.5 sm:p-4">1 Defined Priority Page / Schema Fix</td>
                    <td className="p-3.5 sm:p-4">Quick fix for one specific issue</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $495 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEObility Blueprint</td>
                    <td className="p-3.5 sm:p-4">Full Digital Audit &amp; 90-Day Roadmap</td>
                    <td className="p-3.5 sm:p-4">Unclear what is limiting search visibility</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">$995 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Foundation Implementation</td>
                    <td className="p-3.5 sm:p-4">Connected Multi-Page &amp; Entity Fixes</td>
                    <td className="p-3.5 sm:p-4">Connected improvements across core services</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $3,195 AUD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Inclusions Box */}
            <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-5 text-xs text-zinc-300 font-serif leading-relaxed space-y-3 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span>Every AEObility Engagement includes:</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300 font-serif">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>One agreed business priority, specified schema deployment, or page rewrite work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Validation checks, summary of completed changes, and handover notes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Typical delivery: 4–5 business days for Micro-Sprints. View <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">current service pricing and scope</Link>.</span>
                </li>
              </ul>
            </div>

            {/* Deliverables Ownership Statement */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">You own the agreed deliverables</strong>
                  <span>Use completed code and handover notes with your internal developer, or ask AEObility to implement the agreed changes.</span>
                </div>
              </div>
            </div>

            {/* Deep Mechanics Evidence Bridge */}
            <div className="bg-gradient-to-r from-aeo-purple/15 via-black to-aeo-cyan/15 border border-white/15 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase font-bold text-cyan-300 tracking-wider block">Deep Mechanics &amp; Algorithmic Grounding</span>
                <p className="text-xs text-white/90">
                  <strong>Deep Mechanics:</strong> Explore how retrieval-augmented engines deconstruct conversational queries via our <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-cyan-400 font-semibold hover:underline">RAG &amp; Answer Engine Search</Link> index or review our operational <Link href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days" className="text-purple-400 font-semibold hover:underline">first 90 days case study</Link> to safeguard content density.
                </p>
              </div>
              <Link
                href="/knowledge-hub/aeo"
                className="px-4 py-2 bg-white/5 border border-white/10 hover:border-cyan-400 text-white rounded-lg text-xs font-mono font-bold shrink-0 transition-colors"
              >
                Review Methodology &rarr;
              </Link>
            </div>

            {/* High-Density Declarative Answer Block: Transparent Investment */}
            <div id="aeo-cost" className="bg-zinc-950/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl scroll-mt-24">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                  <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Fixed Investment Model</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
                  Transparent Investment: How Much Does AEO Cost?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed">
                  Answer Engine Optimisation costs vary depending on the scale of your digital footprint, but our pricing remains entirely fixed and transparent. We eliminate agency retainers and multi-month contract locks by delivering high-density technical improvements in structured deployment phases.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-xs font-serif">
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-cyan-300 font-sans font-bold text-sm">Micro-Sprints</strong>
                    <span className="font-mono text-cyan-400 font-bold">$495 AUD</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    A targeted, fixed-scope engineering sprint focused on a single tactical priority: custom JSON-LD schema nesting, atomic block rewrites, or internal linking repairs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/90 border border-cyan-500/30 space-y-2 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                  <div className="flex items-center justify-between">
                    <strong className="text-white font-sans font-bold text-sm">Strategic Blueprint</strong>
                    <span className="font-mono text-cyan-300 font-bold">$995 AUD</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    A comprehensive diagnostic audit and custom 90-day execution roadmap measuring your brand entity salience across major AI retrieval models.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-purple-300 font-sans font-bold text-sm">Foundation Tier</strong>
                    <span className="font-mono text-purple-400 font-bold">From $3,195 AUD</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    A comprehensive four-week technical engagement delivering connected multi-page schema mapping, modular HTML blocks formatted for clear passage extraction, and contextual internal links.
                  </p>
                </div>
              </div>

              {/* 100% Risk-Reversal Callout */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-purple-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <strong className="text-white text-xs font-sans font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>The 100% Risk-Reversal Credit</span>
                  </strong>
                  <p className="text-xs text-zinc-300 font-serif">
                    Every dollar invested in your $995 Strategic Blueprint is fully credited back if you choose us for your implementation sprints.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  <Link
                    href="/services/aeo/costs-timing"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs border border-white/10 transition-colors"
                  >
                    <span>Costs &amp; Timelines Hub</span>
                    <ArrowRight className="w-3 h-3 text-zinc-400" />
                  </Link>
                  <Link
                    href="/solutions/aeo-blueprint"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-400 text-black font-bold text-xs hover:bg-white transition-colors"
                  >
                    <span>Explore Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* High-Density Declarative Answer Block: Defining the Roadmap */}
            <div id="aeo-blueprint-definition" className="bg-zinc-950/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl scroll-mt-24">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                  <Compass className="w-3.5 h-3.5 text-purple-400" />
                  <span>Strategic Methodology</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
                  Defining the Roadmap: What Is the AEObility AEO Blueprint?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed">
                  The AEObility Strategic Blueprint is a standalone clarity phase designed to diagnose machine-readability friction across your web ecosystem. Instead of delivering vague marketing reports, this process builds an actionable 90-day execution roadmap tailored specifically to your commercial intent.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-xs font-serif">
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-300 font-sans font-bold">
                    <Target className="w-4 h-4 text-cyan-400" />
                    <span>Vector Proximity Audit</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    We evaluate how closely your website context matches target user search intents within dense vector spaces.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-purple-300 font-sans font-bold">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>Entity Relationship Mapping</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    Our team reviews your underlying code to uncover missing schema ties, unverified coordinates, and hidden brand facts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 font-sans font-bold">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span>90-Day Operational Timeline</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    You receive a sequential, line-by-line engineering guide detailing what to fix first to ensure accurate AI indexing.
                  </p>
                </div>
              </div>
            </div>

            {/* High-Density Declarative Answer Block: AI AEO Services for Perth & Australia */}
            <div id="ai-aeo-services" className="bg-zinc-950/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl scroll-mt-24">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Local &amp; Enterprise Grounding</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
                  Verified Ingestion: AI AEO Services for Perth and Australian Businesses
                </h3>
                <p className="text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed">
                  Traditional SEO models match static keyword strings, but modern conversational platforms extract structured facts. Our specialised AI AEO services build the definitive entity authority your business needs to survive and scale within modern RAG pipelines.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  We restructure your digital presence for Google AI Overviews, Perplexity Pro, and ChatGPT Search:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 text-xs font-serif">
                  <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2">
                    <strong className="text-white font-sans font-bold text-sm block">1. Local Coordinate Consistency</strong>
                    <p className="text-zinc-300 leading-relaxed">
                      We align hard-coded geographic coordinates and NAP data to verify local proximity signals across AI answer systems.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2">
                    <strong className="text-white font-sans font-bold text-sm block">2. Atomic Content Formatting</strong>
                    <p className="text-zinc-300 leading-relaxed">
                      Unstructured text walls are broken down into clear, modular answer blocks formatted around the exact questions your buyers ask.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2">
                    <strong className="text-white font-sans font-bold text-sm block">3. Structured Ingestion Testing</strong>
                    <p className="text-zinc-300 leading-relaxed">
                      We test how cleanly AI search crawlers ingest, verify, and cite your business facts before deploying to production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2.5 Multi-Engine Retrieval Capability Module */}
          <section id="multi-engine-capabilities" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Bot className="w-3.5 h-3.5 text-cyan-400" />
                <span>Multi-Engine Citation Readiness</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                Engineered for Every Major AI Answer Engine
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif">
                Different AI models evaluate content through different retrieval mechanisms. We structure your assets so each engine extracts clean, uncompromised facts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Perplexity Pro Card */}
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl flex flex-col justify-between space-y-5 hover:border-cyan-500/40 transition-all duration-300">
                <div className="space-y-4">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border border-cyan-500/40 bg-cyan-950/20 text-cyan-300">
                    Deep Research &amp; Synthesis
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white font-soehne-breit">Perplexity Pro Search</h3>
                    <p className="text-xs text-zinc-300 font-serif leading-relaxed mt-1">
                      Extracts numerical data, pricing tables, and factual comparisons to construct research briefs with attributed footnotes.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <strong className="text-[11px] text-white block font-sans">Sprint Deliverables:</strong>
                    <ul className="space-y-1.5 text-xs text-zinc-300 font-serif">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Structured HTML tables</strong> with explicit dimensions &amp; pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Direct provenance links</strong> connecting claims to case studies</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-3 bg-black/60 border border-white/5 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider block">Citation Outcome</span>
                  <p className="text-[11px] text-zinc-300 font-serif leading-tight">Increases the probability of footnote attribution by providing retrieval models with verified tabular data and clear citation links.</p>
                </div>
              </div>

              {/* ChatGPT Search Card */}
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl flex flex-col justify-between space-y-5 hover:border-purple-500/40 transition-all duration-300">
                <div className="space-y-4">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border border-purple-500/40 bg-purple-950/20 text-purple-300">
                    Conversational Intent Matching
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white font-soehne-breit">ChatGPT Search &amp; Operator</h3>
                    <p className="text-xs text-zinc-300 font-serif leading-relaxed mt-1">
                      Matches conversational queries directly against verified business facts and schema catalog offerings.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <strong className="text-[11px] text-white block font-sans">Sprint Deliverables:</strong>
                    <ul className="space-y-1.5 text-xs text-zinc-300 font-serif">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Atomic Q&amp;A blocks</strong> positioned beneath headers to improve direct brand citation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Nested Schema catalogs</strong> linking verified deliverables</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-3 bg-black/60 border border-white/5 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono text-purple-300 uppercase tracking-wider block">Citation Outcome</span>
                  <p className="text-[11px] text-zinc-300 font-serif leading-tight">Improves the likelihood of direct brand recommendation when users ask conversational discovery questions.</p>
                </div>
              </div>

              {/* Google AI Overviews Card */}
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl flex flex-col justify-between space-y-5 hover:border-cyan-400/50 transition-all duration-300">
                <div className="space-y-4">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border border-cyan-400/50 bg-cyan-950/30 text-cyan-200">
                    Knowledge Graph Salience
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white font-soehne-breit">Google AI Overviews &amp; Gemini</h3>
                    <p className="text-xs text-zinc-300 font-serif leading-relaxed mt-1">
                      Evaluates relational triples against external authority registries (ABN, ASIC, Wikidata) for high-salience passage extraction.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <strong className="text-[11px] text-white block font-sans">Sprint Deliverables:</strong>
                    <ul className="space-y-1.5 text-xs text-zinc-300 font-serif">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Triple-linked JSON-LD</strong> referencing Wikidata entity nodes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Passage extraction tuning</strong> to prevent context window dilution</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-3 bg-black/60 border border-white/5 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider block">Citation Outcome</span>
                  <p className="text-[11px] text-zinc-300 font-serif leading-tight">Increases the likelihood of passage extraction in AI Overview snapshots above organic search results.</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <p className="text-xs text-zinc-400 font-serif">
                Learn how each search bot extracts and parses website data in our technical guide:{' '}
                <Link
                  href="/knowledge-hub/articles/optimising-for-different-ai-search-engines"
                  className="text-cyan-400 hover:underline font-medium"
                >
                  How Perplexity, ChatGPT, Google, and Copilot Find and Cite Your Content
                </Link>
                .
              </p>
            </div>
          </section>

          {/* 3. The 4 Foundational AEO Pillars */}
          <section id="pillars" className="border-t border-white/10 pt-16 space-y-10 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Our Four Foundational Framework Pillars</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">A structured approach to machine readability, content clarity, and entity trust.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 text-left">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit">
                    {pillar.icon}
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">{pillar.title}</h3>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Streamlined 12-Column Responsive Diagnostic Form Module */}
          <AeoDiagnosticSection />

          {/* 5. Operational 3-Step Process Flow Pipeline Graphic */}
          <section id="aeo-process" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Simple 3-Step Operational Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How AEO Sprints Work</h2>
              <p className="text-xs text-white/60 font-serif">Clear sequence from initial scan to complete handover notes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">1</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Scan &amp; Access</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run a free scan or confirm your site priorities with our AEO team.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-purple-500/40 rounded-2xl space-y-3 relative hover:border-purple-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(168,85,247,0.2)]">2</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">4–5 Day Execution</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Deploy agreed schema markup, atomic page rewrites, or internal linking.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-cyan-500/40 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">3</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Validation &amp; Handover</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run validation checks and receive complete documentation &amp; ownership notes.</p>
              </div>
            </div>
          </section>

          {/* 6. Bottom Conversion CTA Block + Direct Contact Form */}
          <AeoContactSection />

          {/* 7. FAQ Accordion Section (All 6 Answers Rendered in DOM) */}
          <section id="faq-aeo" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about AEObility AEO services.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FaqAccordion faqs={faqs.map(f => ({ q: f.question, a: f.answer }))} />
            </div>
          </section>

          {/* 8. Canonical Internal Links Lattice */}
          <section id="aeo-lattice" className="border-t border-white/10 pt-16 space-y-6 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
                <Eye className="w-3.5 h-3.5 text-aeo-cyan" />
                <span>Machine-Readable Internal Links Lattice</span>
              </div>
              <h3 className="text-xl font-bold text-white font-soehne-breit">Connected Concepts &amp; Related Nodes</h3>
              <p className="text-xs text-zinc-400 font-serif">
                Direct contextual links anchoring this service hub to core definitions, technical guides, and verified case studies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {AEO_CANONICAL_INTERNAL_LINKS.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.targetSlug}
                  className="p-3.5 bg-zinc-950/60 border border-white/5 rounded-xl hover:border-cyan-500/40 hover:bg-white/[0.02] transition flex flex-col justify-between group"
                >
                  <span className="text-xs font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors">
                    {link.anchorText}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 mt-2 block">
                    {link.entityRelation.replace('http://schema.org/', '')} &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
