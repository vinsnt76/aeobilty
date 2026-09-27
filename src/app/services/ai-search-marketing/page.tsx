import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { getAiSearchMarketingSchemaGraph } from '@/lib/schema/aiSearchMarketing';
import FaqAccordion from '@/components/FaqAccordion';
import AeoDiagnosticSection from '@/components/services/AeoDiagnosticSection';
import AeoContactSection from '@/components/services/AeoContactSection';
import AeoStartingPointGrid from '@/components/services/AeoStartingPointGrid';
import {
  ArrowRight,
  Cpu,
  CheckCircle2,
  Calendar,
  Sparkles,
  MapPin,
  FileCheck,
  Code
} from 'lucide-react';

export const metadata: Metadata = {
  title: "AI Search Marketing & Strategy | AEObility",
  description: "Make your business easier for search engines, digital assistants and AI search platforms to identify, understand, and reference. AEO Sprints from $495 AUD ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/services/ai-search-marketing",
  },
  openGraph: {
    title: "AI Search Marketing & Strategy | AEObility",
    description: "Make your business easier for search engines, digital assistants and AI search platforms to identify, understand, and reference.",
    url: "https://aeobility.com.au/services/ai-search-marketing",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/services/ai-search-marketing-strategy_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility AI search marketing strategy dashboard illustrating vector retrieval accuracy, prompt citation tracking, and structured entity verification.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Marketing & Strategy | AEObility",
    description: "Make your business easier for search engines, digital assistants and AI search platforms to identify, understand, and reference.",
    images: ["https://aeobility.com.au/images/services/ai-search-marketing-strategy_AEObility.webp"],
  },
  keywords: [
    "ai search marketing",
    "ai search strategy",
    "ai search marketing strategy",
    "ai search marketing examples",
    "answer engine prompt strategy",
    "aeo consultant perth",
    "generative search strategy"
  ]
};

export const AI_MARKETING_INTERNAL_LINKS = [
  {
    targetSlug: "/solutions/aeo-sprint",
    anchorText: "focused micro-sprints",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-blueprint",
    anchorText: "The AEObility Blueprint",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions",
    anchorText: "View current service pricing and scope",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function AISearchMarketingPage() {
  const rawFaqs = [
    {
      question: "Is AI search marketing different from traditional SEO?",
      answer: "AI search marketing builds on sound SEO; it does not replace it. Traditional SEO helps pages rank for keyword strings. AI search marketing restructures your business details, credentials, services, and evidence so search engines, digital assistants, and generative platforms (like ChatGPT, Gemini, and Perplexity) can extract and reference your information accurately."
    },
    {
      question: "Can anyone guarantee citations in ChatGPT, Gemini, or Perplexity?",
      answer: "No, and no honest agency should promise guaranteed AI search placements. Generative search engines select citations based on data clarity, entity consistency, and verified evidence. Our work focuses on eliminating technical gaps, structuring atomic answer units, and validating signal consistency."
    },
    {
      question: "How do you measure AI search visibility and citation share?",
      answer: "We establish a documented query set based on your core services, locations, and high-intent customer prompts. Citation share is tracked as the percentage of responses where your business is cited, referenced, or linked across agreed platforms under consistent reporting rules."
    },
    {
      question: "Does structured schema markup help AI engines find my business?",
      answer: "Yes. Schema markup (such as LocalBusiness, Service, Offer, and Organisation) provides explicit machine-readable context. It reduces ambiguity during passage retrieval, making your business data significantly easier for scrapers and AI agents to ingest."
    },
    {
      question: "What is included in the $995 AEObility Blueprint?",
      answer: "The Blueprint includes a complete digital presence audit, technical gap analysis, visibility scorecard, and a practical 90-day execution roadmap. If you proceed with Foundation Implementation within 60 days, the full $995 Blueprint fee is credited toward your implementation cost."
    },
    {
      question: "How long does an AI search marketing sprint take to deliver?",
      answer: "Most targeted Micro-Sprints are delivered within 4–5 business days after scope and access are confirmed. Foundation Implementation is delivered across a structured four-week schedule with agreed milestones."
    }
  ];

  const formattedFaqs = rawFaqs.map((f) => ({
    q: f.question,
    a: f.answer,
  }));

  const jsonLdGraph = getAiSearchMarketingSchemaGraph(rawFaqs);

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
              <Cpu className="w-4 h-4 text-aeo-cyan" />
              <span>AI Search Marketing &amp; Generative Strategy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              AI Search Marketing &amp; <span className="text-gradient-aeo">Generative Strategy</span>
            </h1>
            <div className="space-y-3 max-w-3xl mx-auto">
              <h2 className="text-lg sm:text-xl text-zinc-100 font-medium leading-relaxed font-soehne-breit">
                Make your business easier for search engines, digital assistants and AI search platforms to identify, understand, and reference. Clear scope. Flat rates.
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
                src="/images/services/ai-search-marketing-strategy_AEObility.webp"
                alt="AEObility AI search marketing strategy dashboard illustrating vector retrieval accuracy, prompt citation tracking, and structured entity verification."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-4 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-4 shadow-2xl">
                <div className="text-left space-y-1">
                  <span className="text-xs sm:text-sm font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix one technical gap or build a comprehensive AI search foundation.</span>
                  <span className="text-xs sm:text-[14px] text-zinc-200 font-medium block">
                    Typical delivery: <strong className="text-white font-semibold">4–5 business days</strong> from confirmed scope and access.
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
                  <a
                    href="#ai-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(0,229,255,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Run Free Scan</span>
                    <ArrowRight className="w-4 h-4 text-slate-950 shrink-0" />
                  </a>
                  <a
                    href="#ai-contact-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-zinc-100 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Discuss AI Search Strategy</span>
                  </a>
                </div>
              </div>
            </div>

            {/* IA & SLM Atomic Answer Block (Row 16 Focus Keyphrase: AI Search Marketing) */}
            <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-cyan-500/30 text-left space-y-2.5 shadow-[0_0_25px_rgba(6,182,212,0.12)]">
              <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Executive Summary: AI Search Marketing Strategy</span>
              </div>
              <p className="text-sm sm:text-base text-zinc-200 font-sans leading-relaxed">
                <strong className="text-white font-semibold">AI Search Marketing</strong> is the strategic practice of engineering your digital footprint so conversational AI platforms (ChatGPT, Perplexity, Google AI Overviews, Gemini) retrieve, understand, and cite your brand as a trusted source. AEObility replaces speculative keyword guessing with verified schema graphs, atomic answer blocks, and provenance networks. Engagements start from fixed-scope micro-sprints at $495 AUD ex. GST with typical 4–5 business day delivery, connecting directly to authoritative entity registries with zero ongoing lock-in contracts.
              </p>
            </div>

            {/* Grounded Real-World Practitioner Field Note */}
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-950/90 border border-cyan-500/30 shadow-lg text-left relative overflow-hidden max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-2 text-cyan-400 font-mono font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Field Note: Vector Extraction &amp; Query Fan-Out</span>
              </div>
              <p className="text-sm text-zinc-200 font-sans leading-relaxed max-w-prose">
                When auditing an Australian professional services firm, generative engines consistently omitted their primary practice area because key pricing and credentials were buried in multi-column brochures. Restructuring their core service facts into modular atomic HTML sections and structured Service schema restored direct citation in Perplexity and Gemini within 72 hours of search crawler ingestion.
              </p>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Looking for specific technical execution? Explore our <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">focused micro-sprints</Link> from $495 ex. GST or <Link href="/solutions/aeo-blueprint" className="text-cyan-400 hover:underline font-medium">The AEObility Blueprint</Link>.
            </p>
          </section>

          {/* 2. "Choose Your Starting Point" Engagement Grid */}
          <section id="engagement-paths" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Predictable Fixed-Scope Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Choose Your Starting Point</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Select a targeted micro-sprint, a comprehensive foundation implementation, or a diagnostic audit.</p>
            </div>

            <AeoStartingPointGrid targetFormId="ai-contact-form" />

            {/* Clean 3-Tier Comparison Matrix Table */}
            <div id="ai-comparison" className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-md scroll-mt-24">
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
                  <span>Validation checks, summary of completed changes, and complete handover notes.</span>
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
          </section>

          {/* 3. Streamlined 12-Column Responsive Diagnostic Form Module */}
          <AeoDiagnosticSection
            id="ai-diagnostic-form"
            badgeTitle="Instant AI Readiness Scan"
            heading="Run a Free AI Readiness Scan"
            subheading="Enter your website URL to check structured data, entity clarity, and AI search readiness signals."
            formId="ai_diagnostic_scan_form"
            leadType="ai_readiness_scan"
          />

          {/* 4. Operational 3-Step Process Flow Pipeline Graphic */}
          <section id="ai-process" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Simple 3-Step Operational Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How AI Search Optimisation Works</h2>
              <p className="text-xs text-white/60 font-serif">Clear sequence from initial readiness scan to complete handover notes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">1</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Readiness Audit</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run a free scan or confirm your site priorities with our strategy team.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-purple-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(168,85,247,0.2)]">2</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">4–5 Day Execution</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Deploy agreed schema markup, atomic page rewrites, or internal linking.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">3</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Validation &amp; Handover</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run validation checks and receive complete documentation &amp; ownership notes.</p>
              </div>
            </div>
          </section>

          {/* 5. Regional Service Specialisations and Local Entities */}
          <section id="ai-regional-specialisations" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-aeo-purple font-bold uppercase tracking-wider">L3 Hyper-Local Node Corridors</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Regional Service Specialisations and Local Entities</h2>
              <p className="text-xs text-white/60 font-serif">Explore our targeted AI search marketing capabilities across major Australian markets.</p>
            </div>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/services/ai-search-marketing/perth" className="block p-5 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.02] transition-all group">
                <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">AI Search Optimisation Services for Perth Businesses</span>
                <span className="flex items-center gap-1 text-[11px] text-zinc-500 mt-2 font-mono uppercase tracking-wider">
                  View Local Node <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="/services/ai-search-marketing/melbourne" className="block p-5 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.02] transition-all group">
                <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">AI Search Optimisation Services for Melbourne Businesses</span>
                <span className="flex items-center gap-1 text-[11px] text-zinc-500 mt-2 font-mono uppercase tracking-wider">
                  View Local Node <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="/services/ai-search-marketing/sydney" className="block p-5 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.02] transition-all group">
                <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">AI Search Optimisation Services for Sydney Businesses</span>
                <span className="flex items-center gap-1 text-[11px] text-zinc-500 mt-2 font-mono uppercase tracking-wider">
                  View Local Node <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="/services/ai-search-marketing/adelaide" className="block p-5 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.02] transition-all group">
                <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">AI Search Optimisation Services for Adelaide Businesses</span>
                <span className="flex items-center gap-1 text-[11px] text-zinc-500 mt-2 font-mono uppercase tracking-wider">
                  View Local Node <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="/services/ai-search-marketing/brisbane" className="block p-5 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.02] transition-all group">
                <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">AI Search Optimisation Services for Brisbane Businesses</span>
                <span className="flex items-center gap-1 text-[11px] text-zinc-500 mt-2 font-mono uppercase tracking-wider">
                  View Local Node <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            <div className="mt-8 text-center text-sm text-zinc-400">
              Learn how these optimisation frameworks are verified in our active{' '}
              <Link href="/knowledge-hub/case-studies/baby-bento" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-300">
                E-Commerce AEO Case Study
              </Link>.
            </div>
          </section>

          {/* 6. Bottom Conversion CTA Block + Direct Contact Form */}
          <AeoContactSection
            id="ai-contact-form"
            badgeTitle="AI Search Sprint"
            heading="Discuss AI Search Strategy"
            subheading="Tell us about your business goals and AI search priorities. We will confirm scope and pricing before you commit."
            formId="ai_search_contact_form"
            leadType="ai_marketing_enquiry"
            buttonText="Discuss AI Search Strategy"
            receivedHeading="AI Search Enquiry Received"
          />

          {/* 7. FAQ Accordion Section (Rendered via accessible FaqAccordion component) */}
          <section id="faq-ai" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about AEObility AI search marketing services.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FaqAccordion faqs={formattedFaqs} />
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
