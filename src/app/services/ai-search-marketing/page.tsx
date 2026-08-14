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
  Database,
  Network,
  Brain,
  Check
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "AI Search Marketing & Strategy | AEObility",
  description: "Deploy optimisation strategies built for generative search engines (Gemini, Perplexity, ChatGPT). Elevate your brand citation index scores.",
  keywords: [
    "ai search marketing",
    "ai search strategy",
    "ai search marketing strategy",
    "ai search marketing examples",
    "ai search marketing course",
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
        "description": "Deploy optimisation strategies built for generative search engines (Gemini, Perplexity, ChatGPT). Elevate your brand citation index scores.",
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
      title: "The Core Priorities of Generative Search Engine Optimisation",
      desc: "Deploy structured vector configurations to ensure query fan-out models and retrieval augmentation systems place your brand in direct answer outputs."
    },
    {
      icon: <Layers className="w-5 h-5 text-aeo-purple" />,
      title: "Maximising Your Citation Share",
      desc: "Build authority across generative visibility models and coordinate vector space networks so LLMs confidently index and reference your business."
    },
    {
      icon: <Search className="w-5 h-5 text-aeo-cyan" />,
      title: "Mapping Atomic Answer Blocks",
      desc: "We parse your services into granular semantic components optimised for LLM search queries, answering multi-layered user intents clearly."
    }
  ];

  const visibilityFlowNodes = [
    {
      step: "01",
      title: "Business Facts & Schema",
      icon: <Database className="w-5 h-5 text-aeo-cyan" />,
      desc: "JSON-LD structured data, NAP verification, and atomic answer nodes formatted for web scrapers."
    },
    {
      step: "02",
      title: "Vector Space Alignment",
      icon: <Network className="w-5 h-5 text-aeo-purple" />,
      desc: "Semantic cluster mapping and embeddings alignment connecting business entity parameters."
    },
    {
      step: "03",
      title: "Multi-Source Consensus",
      icon: <Brain className="w-5 h-5 text-aeo-cyan" />,
      desc: "RAG pipeline validation across Perplexity, ChatGPT, and Gemini live web retrieval models."
    },
    {
      step: "04",
      title: "Generative Answer Citations",
      icon: <Sparkles className="w-5 h-5 text-aeo-purple" />,
      desc: "Top-tier brand placement in direct conversational outputs and location recommendations."
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
      phase: "Phase 1",
      title: "Entity & Semantic Audit",
      icon: <Search className="w-4 h-4 text-aeo-cyan" />,
      desc: "We audit your site's knowledge graph representation against target LLM retrieval pipelines and vector indexes to pinpoint semantic gaps and entity misalignments."
    },
    {
      phase: "Phase 2",
      title: "Atomic Content Restructuring",
      icon: <Layers className="w-4 h-4 text-aeo-purple" />,
      desc: "Formatting core service propositions into modular, machine-readable blocks (Q&A format, schema markup, summary tables) optimised for instantaneous RAG retrieval."
    },
    {
      phase: "Phase 3",
      title: "Citation & Reference Network Distribution",
      icon: <Share2 className="w-4 h-4 text-aeo-cyan" />,
      desc: "Building multi-channel entity references, cross-verified citations, and high-authority contextual nodes to drive multi-source LLM consensus during live generative retrieval."
    },
    {
      phase: "Phase 4",
      title: "Citation Index Monitoring & Iteration",
      icon: <BarChart3 className="w-4 h-4 text-aeo-purple" />,
      desc: "Tracking brand citation share and synthetic query rankings across Gemini, Perplexity, and ChatGPT on a continuous monthly sprint cadence."
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
          {/* STEP 1: Hero Header & Above-The-Fold Hero Conversion Band */}
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
                Deploy optimisation strategies built specifically for generative search engines (Gemini, Perplexity, ChatGPT). Elevate your brand citation index scores and dominate conversational discovery.
              </p>
            </div>

            {/* Above-The-Fold Hero Conversion Band Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-aeo-cyan/10 via-white/[0.02] to-aeo-purple/10 border border-aeo-cyan/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 text-aeo-cyan border border-aeo-cyan/20 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>From $995 &bull; 90-Day AI Readiness Roadmap</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Turn Generative AI Search into Your Top Lead Channel
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-white/70 font-light pt-1">
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-aeo-cyan shrink-0" /> No Lock-in Contracts</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-aeo-cyan shrink-0" /> 24-Hour Evaluation Report</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-aeo-cyan shrink-0" /> Australian AEO Specialists</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
                <Link
                  href="/solutions/aeo-blueprint"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-aeo-cyan/20 whitespace-nowrap"
                >
                  <span>Get AEObility Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  <span>Request Custom Strategy</span>
                </Link>
              </div>
            </div>
          </div>

          {/* STEP 2: Pillars Overview */}
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
                <Network className="w-4 h-4" />
                <span>Visual Retrieval Mechanism</span>
              </h2>
              <h2 className="text-2xl font-bold text-white">AI Search Visibility &amp; Retrieval Flow</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                How AEObility structures your business facts into machine-readable nodes for multi-source LLM discovery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative pt-4">
              {visibilityFlowNodes.map((node, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3 relative hover:border-white/10 transition-colors group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-aeo-cyan px-2 py-0.5 rounded bg-aeo-cyan/10 border border-aeo-cyan/20">
                      Step {node.step}
                    </span>
                    <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                      {node.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug pt-1">{node.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-light">{node.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* STEP 4: Deep Dive Section */}
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

          {/* STEP 6: 4-Phase Productised Timeline Roadmap */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="inline-flex items-center gap-2 text-aeo-cyan font-bold text-xs tracking-widest uppercase m-0">
                <span>Execution Roadmap</span>
              </h2>
              <h2 className="text-2xl font-bold text-white">🛠️ The AEObility AI Search Execution Framework</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                A productised 4-phase methodology designed to capture, hold, and scale brand citation share across AI search engines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {executionPhases.map((phase, idx) => (
                <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3 hover:border-white/10 transition-colors relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-aeo-cyan px-2.5 py-0.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20">
                      {phase.phase}
                    </span>
                    <div className="p-2 bg-white/5 rounded-lg">
                      {phase.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug pt-1">{phase.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-light">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* STEP 7: Structured Case Study Proof Card Section */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-white/[0.03] via-aeo-purple/10 to-aeo-cyan/10 border border-white/10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-3 max-w-xl">
              <h3 className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 text-aeo-cyan border border-aeo-cyan/20 text-xs font-semibold m-0">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Proven Real-World Impact</span>
              </h3>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                +310% Citation Share Growth across AI Search Engines
              </h3>
              
              <div className="flex flex-wrap items-center gap-2 pt-1 pb-1">
                <span className="px-2.5 py-1 rounded-md bg-aeo-cyan/10 border border-aeo-cyan/30 text-aeo-cyan text-xs font-mono font-bold">
                  Sales Uplift +17-18%
                </span>
                <span className="px-2.5 py-1 rounded-md bg-aeo-purple/10 border border-aeo-purple/30 text-aeo-purple text-xs font-mono font-bold">
                  CTR Lift +95%
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80 text-xs font-mono">
                  Qualified Clicks +55%
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                See how AEObility transformed Baby Bento&apos;s generative search presence through atomic answer blocks, schema restructuring, and vector space alignment.
              </p>
              <p className="text-[11px] text-aeo-cyan/80 font-mono pt-1">
                * Measured across 50+ synthetic prompt variations on Gemini, ChatGPT, and Perplexity over a 90-day tracking sprint.
              </p>
            </div>
            <Link
              href="/knowledge-hub/case-studies/baby-bento"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs sm:text-sm rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-aeo-cyan/20 whitespace-nowrap"
            >
              <span>Read Baby Bento Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* STEP 8: Structured Technical Capability Matrix Table */}
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

          {/* STEP 9: AI Readiness Quick Checklist */}
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

          {/* STEP 10: Final Conversion Corridor Banner */}
          <div className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/5 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Capture AI Search Engine Citations</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto font-light leading-relaxed">
              Start with our $995 AEObility Blueprint. Get an AI-readiness evaluation and a 90-day execution roadmap.
            </p>

            {/* Scope / Deliverables Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto pt-2 pb-1 font-light text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>Comprehensive AI Visibility &amp; Knowledge Graph Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>Vector Alignment &amp; Query Fan-Out Mapping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>Step-by-Step 90-Day Technical Execution Roadmap</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>Direct 1-on-1 Strategy &amp; Implementation Call</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/solutions/aeo-blueprint"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_15px_rgba(0,205,216,0.2)]"
              >
                <span>Get AEObility Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/10 transition-all"
              >
                <span>Request a Quote</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

