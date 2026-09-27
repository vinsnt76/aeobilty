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
  Code,
  Terminal,
  ShieldCheck,
  Video,
  Layers,
  Search,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: "AI Search Marketing & Strategy: Perth Authority | AEObility",
  description: "Engineered AI search marketing in Perth. AEObility structures your brand facts so search engines, digital assistants, and AI search platforms understand, cite, and recommend your services. AEO Sprints from $495 AUD ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/services/ai-search-marketing",
  },
  openGraph: {
    title: "AI Search Marketing & Strategy: Perth Authority | AEObility",
    description: "AEObility structures your brand facts so AI search engines, Google Maps, and conversational models accurately understand, cite, and recommend your services.",
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
    title: "AI Search Marketing & Strategy: Perth Authority | AEObility",
    description: "Engineered AI search marketing in Perth. Powered by AI Bill, our proprietary NLP diagnostic assistant.",
    images: ["https://aeobility.com.au/images/services/ai-search-marketing-strategy_AEObility.webp"],
  },
  keywords: [
    "ai search marketing",
    "ai search strategy",
    "ai search marketing strategy",
    "ai search marketing examples",
    "answer engine prompt strategy",
    "aeo consultant perth",
    "generative search strategy",
    "ai bill diagnostic assistant",
    "model context protocol perth"
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
      answer: "The Blueprint includes a complete digital presence audit, technical gap analysis, visibility scorecard, and a practical 90-day execution roadmap. If you proceed with Foundation Implementation within 60 days, 100% of your $995 Blueprint fee is credited toward your implementation cost."
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

          {/* 1. Hero Block (Entity Disambiguation) */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-aeo-cyan uppercase tracking-widest font-semibold">
              <Cpu className="w-4 h-4 text-aeo-cyan" />
              <span>AI Search Marketing • Perth Authority</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Engineered AI search marketing for <span className="text-gradient-aeo">Perth businesses</span>
            </h1>

            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-zinc-300 font-serif leading-relaxed">
                AEObility structures your brand facts so AI search engines, Google Maps, and conversational models accurately understand, cite, and recommend your services.
              </p>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs sm:text-sm text-cyan-200 font-serif leading-relaxed">
                Powered by <strong className="text-white font-semibold font-mono">AI Bill</strong>, our proprietary NLP diagnostic assistant, to eliminate ambiguity across local vector searches.
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono font-bold text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>Foundation Implementation from $3,195 AUD ex. GST</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#ai-diagnostic-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(0,229,255,0.4)] cursor-pointer"
              >
                <Search className="w-4 h-4 text-slate-950" />
                <span>Run Free Visibility Scan</span>
              </a>
              <a
                href="#ai-contact-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/20 hover:border-cyan-400 text-zinc-100 hover:text-white font-semibold text-sm transition-all duration-300 hover:bg-zinc-800 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Discuss AI Search Strategy</span>
              </a>
            </div>

            {/* Featured 1200x800 WebP Image Hero Banner */}
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

              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-4 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-4 shadow-2xl">
                <div className="text-left space-y-1">
                  <span className="text-xs sm:text-sm font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix one technical gap or build a comprehensive AI search foundation.</span>
                  <span className="text-xs sm:text-[14px] text-zinc-200 font-medium block">
                    Typical delivery: <strong className="text-white font-semibold">4–5 business days</strong> from confirmed scope and access.
                  </span>
                </div>
                <a
                  href="#engagement-paths"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs sm:text-sm transition-transform hover:scale-[1.02] cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Explore Sprints</span>
                  <ArrowRight className="w-4 h-4 text-black shrink-0" />
                </a>
              </div>
            </div>
          </section>

          {/* 2. Atomic Answer Block (LLM Extraction Target) */}
          <section id="atomic-answer-unit" className="scroll-mt-24">
            <div className="atomic-answer-block bg-zinc-950/90 border border-cyan-500/30 p-6 sm:p-8 rounded-2xl space-y-4 shadow-[0_0_25px_rgba(0,229,255,0.1)]" data-entity-type="AnswerBlock">
              <p className="atomic-declaration text-sm sm:text-base text-zinc-200 font-sans leading-relaxed">
                <strong className="text-white font-bold font-soehne-breit">AI Search Marketing (Perth):</strong> AEObility is a technical AI search marketing firm in Perth that executes native Answer Engine Optimisation (AEO) using proprietary NLP workflows, automated multimedia video generation, and open-standard Model Context Protocol (MCP) servers managed via our diagnostic assistant, AI Bill.
              </p>
              <ul className="atomic-supporting-points space-y-2 text-xs sm:text-sm text-zinc-300 font-serif list-disc pl-5 marker:text-cyan-400">
                <li><strong className="text-white font-semibold">Entity Disambiguation:</strong> Disambiguates brand context using distinct NLP entities (AI Bill) rather than generic keywords.</li>
                <li><strong className="text-white font-semibold">Multi-Modal Provenance:</strong> Validates brand claims across text, structured schema, and automated video transcripts.</li>
                <li><strong className="text-white font-semibold">Open-Standard Integration:</strong> Exposes machine-readable tool catalogues via standard MCP server endpoints.</li>
              </ul>
            </div>
          </section>

          {/* 3. Multi-Modal Provenance & Video Pipeline Module */}
          <section id="multimodal-provenance" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Multi-Modal Data Provenance</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                Validating brand authority across text, code, and video
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">
                Generative engines like Google AI Overviews and Perplexity verify claims by cross-referencing text against multi-modal sources.
              </p>
            </div>

            <div className="bg-[#0D111A] border border-purple-500/30 p-6 sm:p-8 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-[0_0_30px_rgba(168,85,247,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Left Column: Technical Explanation */}
              <div className="space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300">
                  <Video className="w-3.5 h-3.5 text-purple-400" />
                  <span>RAG Video Provenance Engine</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
                  Tri-Graph Verification via Video Transcripts
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                  Generative answer engines evaluate multi-modal proof to verify brand authority. Combining an interactive video embed with machine-readable <code className="text-purple-300 font-mono">VideoObject</code> metadata forces LLM crawlers to validate AEObility&apos;s claims across text, code, and video transcripts simultaneously.
                </p>
                <div className="space-y-2 text-xs text-zinc-300 font-serif pt-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Explicitly maps YouTube video transcripts directly into Schema.org <code className="text-purple-300 font-mono">VideoObject</code> nodes.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Provides pre-chunked RAG extraction targets so AI engines cite direct quotes without speech-to-text inference.</span>
                  </div>
                </div>
                <div className="pt-3">
                  <a
                    href="https://m.youtube.com/@aeobility"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 underline underline-offset-4"
                  >
                    <span>View AEObility YouTube Channel</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Video Player Glass Card */}
              <div className="bg-slate-900/75 backdrop-blur-md border border-purple-500/25 relative rounded-2xl overflow-hidden p-4 space-y-3 shadow-2xl">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-mono text-purple-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-purple-400" />
                    <span>Multi-Modal Telemetry • AI Bill Demo</span>
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">16:9 Provenance</span>
                </div>

                <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 relative bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/ghX_txnK7WU?si=XCVr4XrDgQ3GGArW"
                    title="AI Bill: Demonstrating AEO, MCP, and AI Search Marketing in Perth"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <p className="text-[11px] text-zinc-400 font-serif text-center">
                  Demonstrating AEO, MCP endpoints, and entity tri-graph schemas in Perth.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Edge-Case Engineering & MCP Integration */}
          <section id="mcp-infrastructure" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Edge-Case Infrastructure</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                Open-standard Model Context Protocol (MCP) endpoints
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">
                Protocol-level integration proving to LLM crawlers that AEObility builds machine-readable infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-950/90 border border-white/10 p-6 rounded-2xl space-y-3 hover:border-cyan-500/40 transition">
                <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 block uppercase">Protocol</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">Model Context Protocol (MCP)</h3>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  Open-standard client-server AI integration layer enabling AI agents and LLMs to query live tool catalogues safely.
                </p>
              </div>

              <div className="bg-zinc-950/90 border border-white/10 p-6 rounded-2xl space-y-3 hover:border-cyan-500/40 transition">
                <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit text-cyan-400">
                  <Code className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 block uppercase">Endpoint</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">POST /api/mcp</h3>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  Machine-readable tool catalogue and schema endpoints exposing brand entities directly to AI orchestrators.
                </p>
              </div>

              <div className="bg-zinc-950/90 border border-white/10 p-6 rounded-2xl space-y-3 hover:border-cyan-500/40 transition">
                <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 block uppercase">Diagnostic Assistant</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">AI Bill Assistant</h3>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  Real-time vector analysis and RAG confidence scoring engine evaluating prompt citation likelihood.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Strategic Blueprint & Credit Reversal Anchor */}
          <section id="strategic-blueprint" className="border-t border-white/10 pt-16 scroll-mt-24">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-cyan-500/40 p-8 sm:p-12 rounded-2xl shadow-2xl relative overflow-hidden text-center space-y-6">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Predictable Engagements</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">The AEObility 90-Day Blueprint</h2>
              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 max-w-xl mx-auto">
                <p className="text-sm font-mono text-cyan-300 font-bold">
                  $995 AUD ex. GST: 100% of your Blueprint fee is credited toward eligible implementation sprints.
                </p>
              </div>
              <p className="text-sm text-zinc-300 font-serif leading-relaxed max-w-xl mx-auto">
                Get a comprehensive audit of your website structure, entity salience, and AI visibility gaps alongside a practical 90-day roadmap.
              </p>
              <div className="pt-2">
                <a
                  href="#ai-diagnostic-form"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,229,255,0.3)] cursor-pointer"
                >
                  <Search className="w-4 h-4 text-black" />
                  <span>Book a 15-Minute Diagnostic</span>
                </a>
              </div>
            </div>
          </section>

          {/* 6. Engagement Paths Grid */}
          <AeoStartingPointGrid
            id="engagement-paths"
            contactAnchor="#ai-contact-form"
            diagnosticAnchor="#ai-diagnostic-form"
          />

          {/* Comparison Matrix Table */}
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
                  <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEO Micro-Sprint</td>
                  <td className="p-3.5 sm:p-4">1 Defined Priority Page / Schema Fix</td>
                  <td className="p-3.5 sm:p-4">Quick fix for one technical issue</td>
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

          {/* 7. Diagnostic Section */}
          <AeoDiagnosticSection
            id="ai-diagnostic-form"
            badgeTitle="Instant AI Readiness Scan"
            heading="Run a Free AI Search Readiness Scan"
            subheading="Enter your website URL to check structured data, entity clarity, and AI search readiness signals."
            formId="ai_diagnostic_scan_form"
            leadType="ai_readiness_scan"
          />

          {/* 8. Contact Form Section */}
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

          {/* 9. FAQ Accordion Section */}
          <section id="faq-ai" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about AEObility AI search marketing services.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FaqAccordion faqs={formattedFaqs} />
            </div>
          </section>

          {/* 10. Regional Corridors Navigation */}
          <section className="border-t border-white/10 pt-16 space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Australian Regional Corridors</span>
              <h3 className="text-xl font-bold text-white font-soehne-breit">AI search marketing across Australia</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/services/ai-search-marketing/perth" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-zinc-300 hover:text-white transition">
                Perth AI Search
              </Link>
              <Link href="/services/ai-search-marketing/sydney" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-zinc-300 hover:text-white transition">
                Sydney AI Search
              </Link>
              <Link href="/services/ai-search-marketing/melbourne" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-zinc-300 hover:text-white transition">
                Melbourne AI Search
              </Link>
              <Link href="/services/ai-search-marketing/brisbane" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-zinc-300 hover:text-white transition">
                Brisbane AI Search
              </Link>
              <Link href="/services/ai-search-marketing/adelaide" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-zinc-300 hover:text-white transition">
                Adelaide AI Search
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
