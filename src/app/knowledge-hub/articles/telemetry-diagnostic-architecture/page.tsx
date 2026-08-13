import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  HelpCircle, 
  FileText,
  AlertCircle,
  Search,
  Cpu,
  Network,
  Sparkles,
  Wrench,
  GitFork,
  Code,
  Activity,
  Zap,
  Lock,
  Database,
  BarChart3,
  Bot
} from 'lucide-react';

export const metadata = {
  title: "Telemetry Diagnostic Tool: Technical Architecture Guide | AEObility",
  description: "Complete technical architecture guide for the AEObility Telemetry Engine: vector mapping, RAG dilution mitigation using text-embedding-004, scoring math, AI Bill ingestion, and NLWeb/MCP setup.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture",
  },
};

export default function TelemetryDiagnosticArchitectureArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture",
        "url": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture",
        "name": "Telemetry Diagnostic Tool: Technical Architecture Guide",
        "description": "Complete technical architecture guide for the AEObility Telemetry Engine: vector mapping, RAG dilution mitigation using text-embedding-004, scoring math, AI Bill ingestion, and NLWeb/MCP setup.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture#breadcrumb"
        }
      },
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture#article",
        "headline": "Telemetry Diagnostic Tool: Technical Architecture Guide",
        "description": "Comprehensive technical architecture guide detailing vector mapping infrastructure, text-embedding-004 RAG dilution mitigation, scoring math, AI Bill ingestion, and NLWeb/MCP protocols.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture"
        },
        "author": {
          "@id": "https://aeobility.com.au/#vince-baker"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organisation"
        },
        "datePublished": "2026-08-13",
        "dateModified": "2026-08-13",
        "articleSection": [
          "Architecture & Vector Map Infrastructure",
          "Mitigating Information Dilution in RAG Systems Using text-embedding-004",
          "System APIs & External Services Orchestration",
          "Mathematical Formulations & Weighting System",
          "Ingestion Pipeline into AI Bill",
          "Architecture Config for NLWeb & MCP",
          "Contextual Interlinking & Semantic Lattice"
        ],
        "keywords": [
          "telemetry diagnostic engine",
          "vector mapping architecture",
          "rag information dilution",
          "mcp schema configuration",
          "text-embedding-004 rag",
          "SPO entity extraction",
          "ai readiness score formula",
          "nlweb protocol",
          "AEO",
          "AEObility"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/#vince-baker",
        "name": "Vince Baker",
        "jobTitle": "Principal AEO Architect & Information Strategist",
        "description": "Vince Baker specialises in Answer Engine Optimisation (AEO), vector search architecture, and structured entity graphs for Australian enterprises.",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organisation"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "Australia"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organisation",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "logo": "https://aeobility.com.au/android-chrome-512x512.png",
        "description": "AEObility helps Australian small-to-medium businesses become discoverable, understandable, and recommended across AI search, maps, and RAG systems.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "Australia"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Knowledge Hub",
            "item": "https://aeobility.com.au/knowledge-hub"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Telemetry Diagnostic Technical Architecture Guide",
            "item": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Information Dilution in RAG systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Information Dilution occurs when embedding a monolithic web page averages out distinct topics into a single vector centroid, causing cosine similarity against specific queries to drop below retrieval thresholds."
            }
          },
          {
            "@type": "Question",
            "name": "How does text-embedding-004 solve retrieval drops?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google's text-embedding-004 provides 768-dimensional semantic resolution. Combined with 90-120 token paragraph chunking, each chunk is evaluated independently so core facts preserve similarity above 0.62."
            }
          },
          {
            "@type": "Question",
            "name": "How does AI Bill ingest diagnostic telemetry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When a scan completes, telemetry JSON is saved to localStorage and streamed to /api/bill, where Multi-Turn Skill Routing applies structured report envelope templates and conversational consultant modes."
            }
          }
        ]
      }
    ]
  };

  const microFaqs = [
    {
      q: "What is Information Dilution in RAG systems?",
      a: "Information Dilution occurs when a large document containing multiple topics is embedded as a single vector. The resulting spatial centroid dilutes specific high-value facts, pulling the vector away from query intent and dropping retrieval similarity below critical thresholds."
    },
    {
      q: "How does text-embedding-004 prevent RAG retrieval failure?",
      a: "text-embedding-004 utilizes 768 dimensions trained specifically for semantic retrieval. When combined with atomic paragraph chunking (90-120 tokens), each factual block maintains topically isolated similarity scores (>0.62) against synthetic user queries."
    },
    {
      q: "What mathematical weights determine the AI Readiness Score?",
      a: "The score is calculated from a base constant of 20 using five weighted dimensions: Semantic Proximity (40%), Technical SEO & CWV (20%), Knowledge Graph Strength (15%), Competitor Depth (15%), and Authority (10%)."
    },
    {
      q: "How does the NLWeb MCP endpoint (/api/mcp) interact with AI agents?",
      a: "The /api/mcp endpoint exposes machine-readable tool schemas (e.g. get_organization_entity, query_knowledge_hub_node) that allow external AI crawlers and agents to query AEObility's structured knowledge graph directly."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        <article className="flex flex-col gap-10">

          {/* Technical Architecture Guide Header */}
          <header className="space-y-6 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-xs text-aeo-cyan font-semibold font-mono tracking-wide">
              <Cpu className="w-3.5 h-3.5 animate-pulse" />
              <span>Technical Architecture Guide &bull; Level 3 System Specification</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Telemetry Diagnostic Tool: <span className="text-gradient-aeo">Technical Architecture Guide</span>
            </h1>

            <p className="text-lg md:text-xl font-light text-white/80 font-serif leading-relaxed">
              Complete technical architecture specification detailing vector map construction, RAG information dilution mitigation using <code className="text-aeo-cyan font-mono text-sm">text-embedding-004</code>, 5-tier scoring math, AI Bill ingestion pipelines, and NLWeb / MCP schema configurations.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50 border-t border-b border-white/10 py-4 font-sans">
              <span>Published by <strong className="text-white">AEObility</strong></span>
              <span>&bull;</span>
              <span>Location: <strong className="text-white">Perth, Western Australia</strong></span>
              <span>&bull;</span>
              <span>Updated August 2026</span>
              <span>&bull;</span>
              <span>8 min read</span>
              <span>&bull;</span>
              <span>Author: <Link href="/about/freelance-seo-consultant-perth" className="text-aeo-cyan hover:underline font-semibold">Vince Baker</Link></span>
            </div>
          </header>

          {/* Architecture Index (Table of Contents) */}
          <nav aria-label="Architecture Index" className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-3 font-sans shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-aeo-cyan uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Architecture Navigation Index</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs text-white/80">
              <a href="#vector-map-infrastructure" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 hover:border-aeo-cyan/30 transition flex items-center gap-2">
                <span className="text-aeo-cyan font-mono font-bold">1.</span>
                <span>Vector Map Infrastructure</span>
              </a>
              <a href="#information-dilution-mitigation" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 hover:border-aeo-cyan/30 transition flex items-center gap-2">
                <span className="text-aeo-cyan font-mono font-bold">2.</span>
                <span>RAG Dilution Mitigation</span>
              </a>
              <a href="#apis-orchestration" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 hover:border-aeo-cyan/30 transition flex items-center gap-2">
                <span className="text-aeo-cyan font-mono font-bold">3.</span>
                <span>APIs Orchestration</span>
              </a>
              <a href="#math-scoring-system" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 hover:border-aeo-cyan/30 transition flex items-center gap-2">
                <span className="text-aeo-cyan font-mono font-bold">4.</span>
                <span>5-Tier Scoring Math</span>
              </a>
              <a href="#bill-ingestion-pipeline" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 hover:border-aeo-cyan/30 transition flex items-center gap-2">
                <span className="text-aeo-cyan font-mono font-bold">5.</span>
                <span>AI Bill Ingestion Pipeline</span>
              </a>
              <a href="#nlweb-mcp-architecture" className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 hover:border-aeo-cyan/30 transition flex items-center gap-2">
                <span className="text-aeo-cyan font-mono font-bold">6.</span>
                <span>NLWeb &amp; MCP Config</span>
              </a>
            </div>
          </nav>

          {/* Core Technical Thesis Box */}
          <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900/60 to-transparent border-l-4 border-aeo-cyan rounded-r-2xl space-y-3 shadow-xl">
            <h2 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
              Core Technical Thesis
            </h2>
            <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
              AI Answer Engines do not evaluate web pages as flat text documents. They parse content into vector embeddings, chunked passages, and Subject-Predicate-Object (SPO) entity graphs. By structuring unstructured site data into 90-120 token atomic blocks verified with <code className="text-aeo-cyan font-mono text-xs">text-embedding-004</code>, websites eliminate RAG information dilution and maximize positional citation likelihood across ChatGPT, Perplexity, Gemini, and Claude.
            </p>
          </div>

          {/* Executive Summary TL;DR Block */}
          <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3 font-sans shadow-xl">
            <h2 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
              TL;DR: Architectural Specifications
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                <span><strong>Dual Vector Mapping:</strong> Combines 384-dim character 3-gram hashing vectors for local classification with 768-dim <code className="text-aeo-cyan font-mono text-xs">text-embedding-004</code> dense embeddings for semantic proximity.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                <span><strong>Information Dilution Solution:</strong> Monolithic pages average out semantic centroids. Atomic 90-120 token paragraph chunking keeps chunk similarity high ($&gt;0.62$), preserving retrieval survival.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                <span><strong>5-Tier Weighted Math:</strong> Calculates AI Readiness Scores via a base of 20 with weighted weights: Semantic ($40\%$), Technical ($20\%$), Entity Graph ($15\%$), Competitors ($15\%$), and Authority ($10\%$).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                <span><strong>AI Bill Ingestion:</strong> Telemetry streams into <code className="text-aeo-cyan font-mono text-xs">/api/bill</code> using Multi-Turn Skill Routing, enforcing structured report card templates on Turn 1 and conversational guidance on follow-up turns.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                <span><strong>NLWeb &amp; MCP Integration:</strong> Exposes discovery link relations and MCP tools (<code className="text-aeo-cyan font-mono text-xs">/api/mcp</code>) with multi-model Gemini <code className="text-aeo-cyan font-mono text-xs">parts</code> normalization.</span>
              </li>
            </ul>
          </div>

          {/* Section 1: Architecture & Vector Map Infrastructure */}
          <section id="vector-map-infrastructure" className="space-y-6 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              1. Architecture &amp; Vector Map Infrastructure
            </h2>

            <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed font-serif">
              The telemetry engine operates across two complementary vector representation layers: local character N-gram hashing vectors for sub-millisecond query intent classification, and dense neural embeddings for high-dimensional semantic proximity analysis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Network className="w-5 h-5 text-aeo-cyan" />
                  <span>384-Dim Local Vector Construction</span>
                </h3>
                <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed font-serif">
                  In <code className="text-aeo-cyan font-mono text-xs">src/lib/search/vectorEngine.ts</code>, text is stripped of non-alphanumeric characters, tokenised into 3-gram character sequences, and mapped into a 384-dimensional <code className="text-aeo-cyan font-mono text-xs">Float64Array</code> using L2 Euclidean normalisation:
                </p>
                <div className="p-4 bg-neutral-950 border border-white/10 rounded-xl font-mono text-xs text-aeo-cyan/90 space-y-1">
                  <div>{"$$\\text{hash} = \\left(\\sum_{i=0}^{k-1} c_i \\cdot 31^{k-1-i}\\right) \\pmod{384}$$"}</div>
                  <div>{"$$\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|_2} = \\frac{\\mathbf{v}}{\\sqrt{\\sum v_j^2}}$$" }</div>
                </div>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-purple-400" />
                  <span>768-Dim Dense Proximity Mapping</span>
                </h3>
                <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed font-serif">
                  In <code className="text-aeo-cyan font-mono text-xs">src/lib/telemetry/proximity.ts</code>, target search intent and crawled site content are converted into 768-dimensional dense vectors using Google Gemini&apos;s <code className="text-aeo-cyan font-mono text-xs">text-embedding-004</code>:
                </p>
                <div className="p-4 bg-neutral-950 border border-white/10 rounded-xl font-mono text-xs text-purple-300 space-y-1">
                  <div>{"Client Node: v_client (768 dimensions)"}</div>
                  <div>{"Competitor Nodes: v_comp_i (768 dimensions)"}</div>
                  <div>{"$$\\text{CosineSim}(\\mathbf{a}, \\mathbf{b}) = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|_2 \\|\\mathbf{b}\\|_2}$$"}</div>
                </div>
              </div>
            </div>

            {/* Uncapped Ranking Math */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <h3 className="text-lg font-bold text-white">Uncapped Knowledge Node Ranking Formula</h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed font-serif">
                Knowledge base matching combines raw cosine similarity with positional title match and keyword frequency boosts:
              </p>
              <div className="p-4 bg-neutral-950 border border-white/10 rounded-xl font-mono text-xs text-aeo-cyan/90 overflow-x-auto">
                {"$$\\text{RankingScore} = 1.5 \\times \\text{rawCos} + \\left(\\frac{\\text{exactTitleHits}}{N_{\\text{words}}}\\right) \\times 0.40 + \\left(\\frac{\\text{keywordHits}}{N_{\\text{words}}}\\right) \\times 0.20$$"}
              </div>
            </div>
          </section>

          {/* Section 2: Mitigating Information Dilution in RAG Systems Using text-embedding-004 */}
          <section id="information-dilution-mitigation" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan">
                <Zap className="w-4 h-4" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                2. Mitigating Information Dilution in RAG Systems Using <code className="text-aeo-cyan font-mono text-xl md:text-2xl">text-embedding-004</code>
              </h2>
            </div>

            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-3 text-sm font-serif">
              <h3 className="font-bold text-white text-base font-sans">What is Information Dilution?</h3>
              <p className="text-white/80 font-light leading-relaxed">
                In Retrieval-Augmented Generation (RAG) and Answer Engine Optimisation (AEO), <strong>Information Dilution</strong> occurs when a single document or large text chunk contains a wide mixture of disparate topics (e.g. brand backstory, generic marketing text, shipping policies, and multiple service details).
              </p>
              <p className="text-white/80 font-light leading-relaxed">
                When embedded into a vector space as one monolithic block, the resulting vector <code className="text-aeo-cyan font-mono text-xs">v_monolithic</code> represents a mathematical average (centroid) of all contained concepts:
              </p>
              <div className="p-3 bg-neutral-950 border border-white/10 rounded-lg font-mono text-xs text-aeo-cyan">
                {"$$\\mathbf{v}_{\\text{monolithic}} = \\frac{1}{N} \\sum_{k=1}^{N} \\mathbf{v}_{\\text{token}_k}$$"}
              </div>
              <p className="text-white/80 font-light leading-relaxed">
                This spatial averaging pulls the unit vector <code className="text-aeo-cyan font-mono text-xs">v_monolithic</code> away from specific high-intent search query vectors <code className="text-aeo-cyan font-mono text-xs">v_intent</code>, causing the cosine similarity score <code className="text-aeo-cyan font-mono text-xs">cos(&theta;) = v_intent &bull; v_monolithic</code> to drop below vector database top-K retrieval thresholds (&lt; 0.62). As a result, the content is <strong>dropped during RAG retrieval</strong> despite containing the correct answer somewhere on the page.
              </p>
            </div>

            {/* How text-embedding-004 solves this */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">AEObility&apos;s Four-Part Mitigation Architecture</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-aeo-cyan uppercase font-mono">1. 768-Dim Semantic Granularity</div>
                  <p className="text-xs text-white/75 font-light leading-relaxed">
                    Google&apos;s <code className="text-aeo-cyan font-mono">text-embedding-004</code> provides 768 dimensions trained specifically for semantic retrieval task types. The higher vector dimensionality prevents semantic collapse, allowing fine-grained entity relationships to remain distinct without overlapping generic terms.
                  </p>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-aeo-cyan uppercase font-mono">2. Atomic Paragraph Chunking</div>
                  <p className="text-xs text-white/75 font-light leading-relaxed">
                    In <code className="text-aeo-cyan font-mono">rag-sim.ts</code>, content is split into atomic paragraph chunks C1, C2, ..., Ck (k &le; 5, 90-120 tokens). Each chunk receives an isolated <code className="text-aeo-cyan font-mono">text-embedding-004</code> vector <code className="text-aeo-cyan font-mono">v_C_i</code>. RAG evaluates each chunk independently:
                    {"$$\\text{MaxSim}(Q) = \\max_{1 \\le i \\le k} \\left( \\frac{\\mathbf{v}_Q \\cdot \\mathbf{v}_{C_i}}{\\|\\mathbf{v}_Q\\|_2 \\|\\mathbf{v}_{C_i}\\|_2} \\right)$$" }
                  </p>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-purple-400 uppercase font-mono">3. SPO Entity Triples Integration</div>
                  <p className="text-xs text-white/75 font-light leading-relaxed">
                    In <code className="text-aeo-cyan font-mono">graph.ts</code>, unstructured text is refactored into Subject-Predicate-Object (SPO) entity triples. Embedding explicit triples creates hyper-focused semantic nodes free of conversational filler, maximizing semantic density.
                  </p>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-purple-400 uppercase font-mono">4. Adversarial Query Fan-Out Simulation</div>
                  <p className="text-xs text-white/75 font-light leading-relaxed">
                    In <code className="text-aeo-cyan font-mono">rag-sim.ts</code>, <code className="text-aeo-cyan font-mono">gemini-3.5-flash</code> generates 3 synthetic query variations. Chunk embeddings from <code className="text-aeo-cyan font-mono">text-embedding-004</code> are stress-tested against these queries to measure exact RAG survival rates (&gt;0.62).
                  </p>
                </div>
              </div>
            </div>

            {/* Interlinking Callouts */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-white/80 space-y-1 font-serif">
              <span className="font-bold text-white uppercase font-sans text-[11px] block">Related Structural Research:</span>
              <p>
                To learn more about context window bottlenecks, see our articles on <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="text-aeo-cyan hover:underline font-semibold">Positional Bias in Retrieval</Link>, <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-aeo-cyan hover:underline font-semibold">Retrieval-Augmented Generation</Link>, and <Link href="/knowledge-hub/articles/structured-data-query-fan-out" className="text-aeo-cyan hover:underline font-semibold">Structured Data Query Fan-Out</Link>.
              </p>
            </div>
          </section>

          {/* Section 3: System APIs & External Services Orchestration */}
          <section id="apis-orchestration" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              3. System APIs &amp; External Services Orchestration
            </h2>

            <p className="text-white/80 text-base font-light leading-relaxed font-serif">
              The diagnostic engine coordinates client-side execution, serverless route handlers, generative embedding APIs, and public SPARQL knowledge bases:
            </p>

            <div className="p-5 bg-neutral-950 border border-white/10 rounded-2xl overflow-x-auto shadow-2xl">
              <table className="w-full text-left text-xs font-sans border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-aeo-cyan uppercase font-mono">
                    <th className="py-3 px-3">API / Endpoint</th>
                    <th className="py-3 px-3">Provider / Path</th>
                    <th className="py-3 px-3">Function / Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/80 font-light">
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">POST /api/diagnostic</td>
                    <td className="py-3 px-3 font-mono text-white/60">src/app/api/diagnostic/route.ts</td>
                    <td className="py-3 px-3">Executes 3-stage async crawl, vector proximity embedding, RAG simulation, entity graph extraction, scoring, and strategic insight generation.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">POST /api/bill</td>
                    <td className="py-3 px-3 font-mono text-white/60">src/app/api/bill/route.ts</td>
                    <td className="py-3 px-3">Edge-streamed conversational AI assistant endpoint using OpenAI gpt-4o-mini via Vercel AI SDK. Ingests telemetry payloads.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">POST /api/search/answer</td>
                    <td className="py-3 px-3 font-mono text-white/60">src/app/api/search/answer/route.ts</td>
                    <td className="py-3 px-3">Grounded NLWeb vector search answer endpoint returning 2-sentence answers and similarity scores.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">GET /api/mcp</td>
                    <td className="py-3 px-3 font-mono text-white/60">src/app/api/mcp/route.ts</td>
                    <td className="py-3 px-3">Model Context Protocol JSON endpoint exposing machine-readable tool schemas for external AI agents.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">text-embedding-004</td>
                    <td className="py-3 px-3 font-mono text-white/60">Google Gemini API</td>
                    <td className="py-3 px-3">Generates 768-dimensional dense vector embeddings for target search intent and site text.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">gemini-3.5-flash</td>
                    <td className="py-3 px-3 font-mono text-white/60">Google Gemini API</td>
                    <td className="py-3 px-3">Powers adversarial query fan-out generation, SPO triple extraction, and Strategic Insight Engine synthesis.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">Wikidata SPARQL</td>
                    <td className="py-3 px-3 font-mono text-white/60">query.wikidata.org</td>
                    <td className="py-3 px-3">Validates extracted entity subjects against global open knowledge graphs.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Mathematical Formulations & 5-Tier Weighting System */}
          <section id="math-scoring-system" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              4. Mathematical Formulations &amp; Weighting System
            </h2>

            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 font-serif">
              <h3 className="text-lg font-bold text-white font-sans">5-Tier Category Scoring Weights</h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                In <code className="text-aeo-cyan font-mono text-xs">src/lib/telemetry/config.ts</code>, the AI Readiness Score is weighted across 5 primary observability dimensions:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-center text-xs">
                <div className="p-3 bg-neutral-950 rounded-xl border border-aeo-cyan/30">
                  <span className="text-white/50 text-[10px] block">Semantic</span>
                  <span className="text-aeo-cyan font-bold text-base">40%</span>
                </div>
                <div className="p-3 bg-neutral-950 rounded-xl border border-white/10">
                  <span className="text-white/50 text-[10px] block">Technical</span>
                  <span className="text-white font-bold text-base">20%</span>
                </div>
                <div className="p-3 bg-neutral-950 rounded-xl border border-white/10">
                  <span className="text-white/50 text-[10px] block">Entity Graph</span>
                  <span className="text-purple-300 font-bold text-base">15%</span>
                </div>
                <div className="p-3 bg-neutral-950 rounded-xl border border-white/10">
                  <span className="text-white/50 text-[10px] block">Competitor</span>
                  <span className="text-amber-300 font-bold text-base">15%</span>
                </div>
                <div className="p-3 bg-neutral-950 rounded-xl border border-white/10">
                  <span className="text-white/50 text-[10px] block">Authority</span>
                  <span className="text-emerald-400 font-bold text-base">10%</span>
                </div>
              </div>
            </div>

            {/* Readiness Score Equation */}
            <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-3 font-mono text-xs shadow-2xl">
              <span className="text-aeo-cyan font-bold uppercase text-[11px] block">Final AI Readiness Score Calculation</span>
              <p className="text-white/80 leading-relaxed font-sans text-xs">
                In <code className="text-aeo-cyan font-mono text-xs">src/lib/telemetry/scoring.ts</code>, the score is normalized starting from a base constant of 20:
              </p>
              <div className="p-4 bg-black rounded-xl text-aeo-cyan overflow-x-auto">
                {"$$\\text{ReadinessScore} = \\text{clamp}\\left(0, 100, \\text{round}\\left(20 + \\Delta_{\\text{semantic}} + \\Delta_{\\text{rag}} + \\Delta_{\\text{entity}} + \\Delta_{\\text{competitor}} + \\Delta_{\\text{technical}} + \\Delta_{\\text{cwv}}\\right)\\right)$$" }
              </div>
            </div>
          </section>

          {/* Section 5: Ingestion Pipeline into AI Bill */}
          <section id="bill-ingestion-pipeline" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              5. Ingestion Pipeline into AI Bill
            </h2>

            <p className="text-white/80 text-base font-light leading-relaxed font-serif">
              When a user completes a diagnostic scan on <Link href="/diagnostic" className="text-aeo-cyan hover:underline font-semibold">/diagnostic</Link>, the resulting telemetry payload is saved to <code className="text-aeo-cyan font-mono text-xs">localStorage</code> (<code className="text-aeo-cyan font-mono text-xs">aeo_telemetry_latest</code>) and handed off to AI Bill via custom browser events (<code className="text-aeo-cyan font-mono text-xs">open_bill_with_query</code>).
            </p>

            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Bot className="w-5 h-5 text-aeo-cyan" />
                <span>Multi-Turn Skill Routing &amp; Report Cards</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-white/80 font-light leading-relaxed font-serif">
                <p>
                  In <code className="text-aeo-cyan font-mono text-xs">src/app/api/bill/route.ts</code>, AI Bill evaluates user turn counts to determine skill routing:
                </p>
                <ul className="space-y-2 text-xs font-sans">
                  <li className="p-3 bg-neutral-950 border border-white/10 rounded-lg">
                    <strong className="text-aeo-cyan block mb-1">Turn 1 (Diagnostic Turn):</strong>
                    Activates <code className="text-aeo-cyan font-mono">[ACTIVE SKILL: Telemetry Guide]</code> and enforces a strict report block (<code className="text-aeo-cyan font-mono">[START_TELEMETRY_REPORT] ... [END_TELEMETRY_REPORT]</code>). In <code className="text-aeo-cyan font-mono">BillWidget.tsx</code>, <code className="text-aeo-cyan font-mono">parseTelemetryText()</code> extracts metrics via regex to render interactive UI cards (Clarity Index, Citation Share, First Impression, Blind Spot, Verdict).
                  </li>
                  <li className="p-3 bg-neutral-950 border border-white/10 rounded-lg">
                    <strong className="text-purple-300 block mb-1">Turn 2+ (Follow-up Turn):</strong>
                    Switches to <code className="text-purple-300 font-mono">[ACTIVE SKILL: Telemetry Consultant]</code>, answering follow-up questions conversationally in 2-3 direct sentences using the audit payload context without re-emitting cards.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Architecture Config for Natural Language Web (NLWeb) & MCP */}
          <section id="nlweb-mcp-architecture" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              6. Architecture Config for Natural Language Web (NLWeb) &amp; MCP
            </h2>

            <p className="text-white/80 text-base font-light leading-relaxed font-serif">
              AEObility implements the **Natural Language Web (NLWeb)** protocol and **Model Context Protocol (MCP)** to allow external AI crawlers and agents to discover, query, and consume site entities autonomously.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Code className="w-4 h-4 text-aeo-cyan" />
                  <span>Discovery Head Link Tags</span>
                </h3>
                <p className="text-xs text-white/75 font-light leading-relaxed font-serif">
                  In <code className="text-aeo-cyan font-mono text-xs">src/app/layout.tsx</code>, NLWeb endpoints are broadcast via HTML link tags:
                </p>
                <div className="p-3 bg-neutral-950 border border-white/10 rounded-xl font-mono text-[11px] text-aeo-cyan">
                  <div>&lt;link rel=&quot;nlweb-ask&quot; href=&quot;https://aeobility.com.au/api/search/answer&quot; /&gt;</div>
                  <div>&lt;link rel=&quot;nlweb-mcp&quot; href=&quot;https://aeobility.com.au/api/mcp&quot; /&gt;</div>
                </div>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>MCP Endpoint Tools (/api/mcp)</span>
                </h3>
                <p className="text-xs text-white/75 font-light leading-relaxed font-serif">
                  Exposes machine tool schemas for autonomous agent execution:
                </p>
                <ul className="text-xs text-white/80 space-y-1 font-mono">
                  <li>&bull; <code className="text-aeo-cyan">get_organization_entity</code></li>
                  <li>&bull; <code className="text-aeo-cyan">get_founder_entity</code></li>
                  <li>&bull; <code className="text-aeo-cyan">query_knowledge_hub_node</code></li>
                  <li>&bull; <code className="text-aeo-cyan">get_service_module</code></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Contextual Interlinking Matrix */}
          <section id="interlinking-matrix" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              7. Contextual Interlinking &amp; Semantic Lattice
            </h2>

            <p className="text-white/80 text-base font-light leading-relaxed font-serif">
              This guide sits at **Level 3 (L3)** under the Knowledge Hub hierarchy. To maintain strong semantic lattice connections across the AEObility platform, explore these linked nodes:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-sans text-xs">
              <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="p-4 bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 rounded-xl space-y-1 transition-all">
                <span className="text-aeo-cyan font-bold block">Positional Bias in Retrieval</span>
                <span className="text-white/60 block">Context window &amp; retrieval bottlenecks</span>
              </Link>

              <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="p-4 bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 rounded-xl space-y-1 transition-all">
                <span className="text-aeo-cyan font-bold block">RAG &amp; AI Search</span>
                <span className="text-white/60 block">RAG pipelines and vector search</span>
              </Link>

              <Link href="/knowledge-hub/articles/structured-data-query-fan-out" className="p-4 bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 rounded-xl space-y-1 transition-all">
                <span className="text-aeo-cyan font-bold block">Structured Data &amp; Fan-Out</span>
                <span className="text-white/60 block">Entity clarity under query fan-out</span>
              </Link>

              <Link href="/solutions/aeo-blueprint" className="p-4 bg-white/[0.02] border border-white/10 hover:border-purple-400/40 rounded-xl space-y-1 transition-all">
                <span className="text-purple-300 font-bold block">The AEO Blueprint ($995 AUD)</span>
                <span className="text-white/60 block">Clarity Phase audit execution engine</span>
              </Link>

              <Link href="/solutions/aeo-sprint" className="p-4 bg-white/[0.02] border border-white/10 hover:border-purple-400/40 rounded-xl space-y-1 transition-all">
                <span className="text-purple-300 font-bold block">AEO Implementation Sprints</span>
                <span className="text-white/60 block">Schema injection &amp; code refactoring</span>
              </Link>

              <Link href="/services/aeo/procedures" className="p-4 bg-white/[0.02] border border-white/10 hover:border-emerald-400/40 rounded-xl space-y-1 transition-all">
                <span className="text-emerald-400 font-bold block">AEO Procedures &amp; Refactoring</span>
                <span className="text-white/60 block">Atomic answer block guidelines</span>
              </Link>
            </div>
          </section>

          {/* Section 8: Technical FAQ */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Technical &amp; Architecture FAQ</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Telemetry Diagnostic Engine FAQ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {microFaqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2 hover:border-aeo-cyan/30 transition-all">
                  <h3 className="text-sm font-bold text-white leading-snug">{faq.q}</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Conversion CTA */}
          <div className="p-8 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900 to-transparent border border-aeo-cyan/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">Ready to inspect your site&apos;s AI visibility score?</h3>
              <p className="text-sm text-white/70 font-light max-w-lg">
                Run a live telemetry diagnostic on your website to evaluate vector proximity, entity clarity, and RAG retrieval survival.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/diagnostic"
                className="px-6 py-3.5 rounded-xl bg-aeo-cyan text-black font-extrabold text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(0,205,216,0.3)] flex items-center gap-2"
              >
                <span>Launch Telemetry Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solutions/aeo-blueprint"
                className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all border border-white/10"
              >
                <span>Explore $995 Blueprint</span>
              </Link>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
