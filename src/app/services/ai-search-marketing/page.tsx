import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
  ArrowRight,
  Layers,
  Cpu,
  Search,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Compass,
  Share2,
  BarChart3,
  Sparkles,
  Table,
  FileText,
  ChevronRight
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "AI Search Marketing & Strategy | AEObility",
  description: "Make your business easier for AI search tools to understand, retrieve and reference. Get the $995 AEObility Blueprint and 90-day roadmap.",
  keywords: [
    "ai search marketing",
    "ai search strategy",
    "ai search marketing strategy",
    "ai search marketing examples",
    "answer engine prompt strategy"
  ],
  alternates: {
    canonical: "https://aeobility.com.au/services/ai-search-marketing",
  },
};

export default function AISearchMarketingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organisation",
        "name": "AEObility",
        "url": "https://aeobility.com.au"
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/ai-search-marketing#service",
        "name": "AI Search Marketing",
        "description": "Make your business easier for AI search tools to understand, retrieve and reference.",
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "provider": {
          "@id": "https://aeobility.com.au/#organisation"
        }
      }
    ]
  };

  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-aeo-cyan" />,
      title: "Improving AI Retrieval & Reference",
      desc: "Make your core business offerings clearly interpretable by search and AI platforms so your services are accurately surfaced in answer outputs."
    },
    {
      icon: <Layers className="w-5 h-5 text-aeo-purple" />,
      title: "Building Corroborating Citation Share",
      desc: "Establish consistent entity signals across authoritative digital properties so generative models present your business with confidence."
    },
    {
      icon: <Search className="w-5 h-5 text-aeo-cyan" />,
      title: "Structuring Atomic Answer Content",
      desc: "Format priority services into modular Q&A nodes and schema-backed blocks that directly resolve complex user queries during search sessions."
    }
  ];

  const visibilityFlowNodes = [
    {
      step: "01",
      title: "Business Facts & Evidence",
      icon: <FileText className="w-5 h-5 text-aeo-cyan" />,
      tag: "Helps clarify core footprint",
      desc: "Services, locations, expertise, proof points, and structured JSON-LD data."
    },
    {
      step: "02",
      title: "Clear, Machine-Readable Web Content",
      icon: <CheckCircle2 className="w-5 h-5 text-aeo-purple" />,
      tag: "Supports model extraction",
      desc: "Entity consistency, schema markup, atomic answer blocks, and accessible pages."
    },
    {
      step: "03",
      title: "Independent Corroboration",
      icon: <ShieldCheck className="w-5 h-5 text-aeo-cyan" />,
      tag: "Builds entity trust",
      desc: "Relevant directory profiles, industry references, editorial coverage, and customer reviews."
    },
    {
      step: "04",
      title: "Search & AI Retrieval Systems",
      icon: <Sparkles className="w-5 h-5 text-aeo-purple" />,
      tag: "Improves eligibility for retrieval",
      desc: "Google AI, Gemini, ChatGPT, Perplexity &rarr; Greater opportunity for qualified discovery."
    }
  ];

  const strategicDirectives = [
    {
      icon: <Zap className="w-5 h-5 text-aeo-cyan" />,
      title: "Optimise for RAG Over Crawling",
      desc: "AI search engines construct answers dynamically using Retrieval-Augmented Generation (RAG) rather than static index lookups. Structuring machine-readable schemas, maintaining signal freshness, and providing fast API-friendly data nodes ensure your content is retrieved live during prompt resolution."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-aeo-purple" />,
      title: "First-Party Entity Verification",
      desc: "LLMs require cross-platform consensus before citing a brand in answer outputs. We align your Name, Address, Phone (NAP), corporate identifiers, and JSON-LD sameAs schema across global knowledge graphs to establish unassailable entity authority."
    },
    {
      icon: <Compass className="w-5 h-5 text-aeo-cyan" />,
      title: "Conversational Intent Mapping",
      desc: "Users pose long-tail, multi-clause comparative queries (e.g., 'best B2B AI search agency in Australia vs traditional SEO'). We map nuanced intent clusters into structured answer blocks that resolve complex prompts directly."
    }
  ];

  const executionPhases = [
    {
      phase: "Phase 1: Diagnose",
      title: "Establish baseline and prioritise gaps",
      activities: ["Audit knowledge graph representation", "Identify entity misalignments & semantic gaps", "Review crawlability and schema validation"],
      deliverable: "AI visibility and entity-readiness audit",
      icon: <Search className="w-4 h-4 text-aeo-cyan" />
    },
    {
      phase: "Phase 2: Clarify",
      title: "Make priority pages easier to interpret",
      activities: ["Structure atomic answer blocks", "Implement JSON-LD schema markup", "Format modular Q&A content nodes"],
      deliverable: "Prioritised content, entity, and schema backlog",
      icon: <Layers className="w-4 h-4 text-aeo-purple" />
    },
    {
      phase: "Phase 3: Build Evidence",
      title: "Strengthen corroborating information",
      activities: ["Align multi-channel entity references", "Cross-verify NAP data across knowledge bases", "Format citation & reference nodes"],
      deliverable: "Citation/reference and content-distribution plan",
      icon: <Share2 className="w-4 h-4 text-aeo-cyan" />
    },
    {
      phase: "Phase 4: Measure",
      title: "Track movements and refine priorities",
      activities: ["Monitor synthetic prompt rankings", "Track citation frequency across ChatGPT, Gemini, Perplexity", "Sprint review & strategy adjustment"],
      deliverable: "Query-set reporting and 90-day roadmap review",
      icon: <BarChart3 className="w-4 h-4 text-aeo-purple" />
    }
  ];

  const capabilityMatrix = [
    {
      capability: "Query Fan-Out Optimisation",
      mechanism: "Multi-intent semantic cluster mapping",
      outcome: "Captures complex, multi-clause conversational search prompts."
    },
    {
      capability: "Atomic Answer Blocks",
      mechanism: "Self-contained, schema-backed data nodes",
      outcome: "Direct extraction by LLM RAG pipelines into conversational outputs."
    },
    {
      capability: "Vector Space Alignment",
      mechanism: "Embeddings alignment across entity nodes",
      outcome: "Increases citation index frequency across Gemini, ChatGPT, and Perplexity."
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
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full flex flex-col gap-14">
        <section className="flex flex-col gap-14">

          {/* STEP 1: Hero Header & Compact Above-The-Fold Hero Conversion Band */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Search Marketing Strategies</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                AI Search <span className="text-gradient-aeo">Marketing & Strategy</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl font-light">
                Make your business easier for AI search tools to understand, retrieve and reference.
              </p>
            </div>

            {/* Compact Above-The-Fold Hero Conversion Band */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-aeo-cyan/10 via-white/[0.02] to-aeo-purple/10 border border-aeo-cyan/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-aeo-cyan/10 text-aeo-cyan border border-aeo-cyan/30 text-xs font-mono font-bold">
                    From $995
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-white/80 border border-white/10 text-xs font-mono">
                    90-day action roadmap
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-white/80 border border-white/10 text-xs font-mono">
                    No lock-ins
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Get Found, Understood &amp; Cited in Generative AI Search
                </h2>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Australian AEO specialists &bull; Evaluation report within 24 hours &bull; Built for Australian businesses
                </p>
              </div>

              {/* Action Buttons with Unambiguous CTA Hierarchy */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
                <Link
                  href="/solutions/aeo-blueprint"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-aeo-cyan/20 whitespace-nowrap"
                >
                  <span>Get the $995 AEObility Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  <span>Talk Through a Custom Strategy</span>
                </Link>
              </div>
            </div>
          </div>

          {/* STEP 2: Pillars Overview (Plain-Language Outcomes) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors">
                <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{pillar.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* STEP 3: AI Visibility Retrieval Flow Diagram */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <h2 className="inline-flex items-center gap-2 text-aeo-cyan font-bold text-xs tracking-widest uppercase m-0">
                <span>Visual Retrieval Mechanism</span>
              </h2>
              <h2 className="text-2xl font-bold text-white">AI Search Visibility &amp; Retrieval Flow</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                How structured web signals move from core business facts to AI retrieval systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative pt-4">
              {visibilityFlowNodes.map((node, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3 relative hover:border-white/10 transition-colors group">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-aeo-cyan px-2 py-0.5 rounded bg-aeo-cyan/10 border border-aeo-cyan/20">
                      Step {node.step}
                    </span>
                    <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                      {node.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug pt-1">{node.title}</h3>
                  <span className="inline-block text-[10px] text-aeo-cyan font-mono italic">
                    {node.tag}
                  </span>
                  <p className="text-xs text-white/70 leading-relaxed font-light">{node.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* STEP 4: Why Generative Search Engine Optimisation Matters */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-bold">Why Generative Search Engine Optimisation Matters</h2>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              As search tools transition from list-based keyword matching to conversational retrieval platforms, traditional SEO alone is insufficient. Users no longer just type &quot;plumber Perth&quot;; they use complex sentences querying specific capabilities, price transparent policies, and availability.
            </p>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              By structuring your business data for <strong>retrieval augmentation</strong>, optimising against <strong>query fan-out</strong> behaviours, and aligning your local pages within <strong>vector space</strong> maps, AEObility positions your brand directly in the citations LLMs output.
            </p>
          </div>

          {/* STEP 5: Strategic Directives Section */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Strategic Directives for Generative Search</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                To position your organisation at the forefront of AI-driven discovery, our methodology centers on three foundational principles:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {strategicDirectives.map((directive, idx) => (
                <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3 hover:border-white/10 transition-colors flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                      {directive.icon}
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">{directive.title}</h3>
                    <p className="text-xs text-white/70 leading-relaxed font-light">{directive.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STEP 6: Four-Phase Execution Framework (Outcomes & Deliverables) */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="inline-flex items-center gap-2 text-aeo-cyan font-bold text-xs tracking-widest uppercase m-0">
                <span>Execution Roadmap</span>
              </h2>
              <h2 className="text-2xl font-bold text-white">🛠️ The AEObility AI Search Execution Framework</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                A productised 4-phase methodology with defined buyer outcomes and concrete deliverables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {executionPhases.map((phase, idx) => (
                <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors relative overflow-hidden group flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-aeo-cyan px-2.5 py-0.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20">
                        {phase.phase}
                      </span>
                      <div className="p-2 bg-white/5 rounded-lg">
                        {phase.icon}
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">{phase.title}</h3>
                    
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">Key Activities:</span>
                      <ul className="space-y-1 text-xs text-white/70 font-light">
                        {phase.activities.map((act, aIdx) => (
                          <li key={aIdx} className="flex items-center gap-2">
                            <ChevronRight className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-aeo-cyan">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Deliverable: {phase.deliverable}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STEP 7: Baby Bento Case Study Proof Card */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-white/[0.03] via-aeo-purple/10 to-aeo-cyan/10 border border-white/10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-3 max-w-xl">
              <h3 className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 text-aeo-cyan border border-aeo-cyan/20 text-xs font-semibold m-0">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Baby Bento | Children&apos;s Lunch Solutions</span>
              </h3>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                +310% Citation-Share Growth across AI Search Engines
              </h3>
              
              <div className="flex flex-wrap items-center gap-2 pt-1 pb-1">
                <span className="px-2.5 py-1 rounded-md bg-aeo-cyan/10 border border-aeo-cyan/30 text-aeo-cyan text-xs font-mono font-bold">
                  +310% Citation-Share Growth
                </span>
                <span className="px-2.5 py-1 rounded-md bg-aeo-purple/10 border border-aeo-purple/30 text-aeo-purple text-xs font-mono font-bold">
                  +95% Organic CTR Lift
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80 text-xs font-mono font-bold">
                  +17&ndash;18% Sales Uplift
                </span>
              </div>

              <p className="text-xs text-white/60 font-light leading-relaxed">
                * Measured over 90 days using a defined set of tracked prompts across Gemini, ChatGPT and Perplexity. Results are client-specific and not guaranteed.
              </p>
            </div>
            <Link
              href="/knowledge-hub/case-studies/baby-bento"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs sm:text-sm rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-aeo-cyan/20 whitespace-nowrap"
            >
              <span>Read the Baby Bento case study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* STEP 8: Blueprint Scope & Inclusions Panel */}
          <div className="p-8 bg-gradient-to-br from-aeo-purple/10 via-white/[0.02] to-aeo-cyan/15 border border-white/10 rounded-3xl space-y-6">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="px-3 py-1 rounded-full bg-aeo-cyan/10 text-aeo-cyan border border-aeo-cyan/20 text-xs font-mono font-bold">
                Productised Assessment Scope
              </span>
              <h3 className="text-2xl font-bold text-white">See What is Limiting Your AI-Search Visibility</h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                Receive an AI-readiness evaluation and a prioritised 90-day roadmap.
              </p>
            </div>

            {/* 4 Inclusions List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-2">
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Priority Entity &amp; Technical Gaps</h4>
                  <p className="text-[11px] text-white/60 font-light mt-0.5">Identify schema errors, broken canonicals, and entity misalignments holding back retrieval.</p>
                </div>
              </div>
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Query &amp; Content Opportunities</h4>
                  <p className="text-[11px] text-white/60 font-light mt-0.5">Map long-tail conversational prompts into atomic answer block templates.</p>
                </div>
              </div>
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Recommended Implementation Sequence</h4>
                  <p className="text-[11px] text-white/60 font-light mt-0.5">Step-by-step technical backlog ordered by commercial effort vs impact.</p>
                </div>
              </div>
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Practical Measurement Framework</h4>
                  <p className="text-[11px] text-white/60 font-light mt-0.5">Setup query-set tracking across Gemini, ChatGPT, and Perplexity.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/solutions/aeo-blueprint"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_15px_rgba(0,205,216,0.2)]"
              >
                <span>Get the $995 AEObility Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/10 transition-all"
              >
                <span>Talk Through a Custom Strategy</span>
              </Link>
            </div>
          </div>

          {/* STEP 9: Structured Technical Capability Matrix Table */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="inline-flex items-center gap-2 text-aeo-purple font-bold text-xs tracking-widest uppercase m-0">
                <Table className="w-4 h-4" />
                <span>Technical Specifications</span>
              </h2>
              <h2 className="text-2xl font-bold text-white">Structured Technical Capability Matrix</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                How AEObility&apos;s vector and AEO capabilities map technical mechanisms directly to tangible business outcomes for AI models.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.01]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white font-bold">
                    <th className="p-4 sm:p-5 w-1/3">Vector / AEO Capability</th>
                    <th className="p-4 sm:p-5 w-1/3">Technical Mechanism</th>
                    <th className="p-4 sm:p-5 w-1/3">Business Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-light text-white/80">
                  {capabilityMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0" />
                        <span>{row.capability}</span>
                      </td>
                      <td className="p-4 sm:p-5 text-white/70">{row.mechanism}</td>
                      <td className="p-4 sm:p-5 text-aeo-cyan font-medium">{row.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* STEP 10: Final Conversion Corridor & Quick Checklist */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">AI Readiness Quick Checklist</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Optimise website code for query fan-out search agent parsing.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Configure structures to excel in vector space relevance algorithms.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Verify and format atomic answer blocks for direct model retrieval.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Configure content indexing authority to match generative visibility models.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


