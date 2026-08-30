import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  BookOpen, 
  Cpu, 
  Layers, 
  Search, 
  Bot, 
  Activity, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Code, 
  Sparkles, 
  Database, 
  HelpCircle, 
  FileText, 
  Sliders,
  Check,
  Zap,
  Network
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Answer Engine Optimisation (AEO): Core Principles & System Mechanics | AEObility',
  description: 'Comprehensive technical whitepaper on RAG pipeline architecture, positional bias mitigation, semantic chunking, and atomic answer block engineering.',
  alternates: {
    canonical: 'https://aeobility.com.au/knowledge-hub/guides/aeo',
  },
  openGraph: {
    title: 'Answer Engine Optimisation (AEO): Core Principles & System Mechanics | AEObility',
    description: 'Technical architecture guide analysing RAG retrieval pipelines, positional bias mitigation, and atomic answer block engineering.',
    url: 'https://aeobility.com.au/knowledge-hub/guides/aeo',
    type: 'article',
  },
};

export default function AEOGuideWhitepaperPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': 'https://aeobility.com.au/knowledge-hub/guides/aeo#article',
        'isPartOf': {
          '@type': 'WebPage',
          '@id': 'https://aeobility.com.au/knowledge-hub/guides/aeo#webpage',
          'url': 'https://aeobility.com.au/knowledge-hub/guides/aeo',
          'name': 'Answer Engine Optimisation Principles & Machine Mechanics Guide'
        },
        'headline': 'Answer Engine Optimisation (AEO): Core Principles, System Mechanics, and Semantic Retrieval Architecture',
        'description': 'Comprehensive technical guide analysing Retrieval-Augmented Generation (RAG) pipelines, positional bias mitigation strategies, and atomic answer block engineering specifications.',
        'inLanguage': 'en-AU',
        'mainEntityOfPage': 'https://aeobility.com.au/knowledge-hub/guides/aeo',
        'datePublished': '2026-08-30T11:59:51+08:00',
        'dateModified': '2026-08-30T11:59:51+08:00',
        'dependencies': 'Vector Search Indexing, Contextual Chunking, JSON-LD Schema Graphs',
        'proficiencyLevel': 'Advanced',
        'author': {
          '@type': 'Person',
          '@id': 'https://aeobility.com.au/vince-baker#person',
          'name': 'Vince Baker',
          'jobTitle': 'Founder & Principal Consultant',
          'url': 'https://aeobility.com.au/vince-baker'
        },
        'publisher': {
          '@type': 'ProfessionalService',
          '@id': 'https://aeobility.com.au/#organization',
          'name': 'AEObility',
          'url': 'https://aeobility.com.au'
        },
        'about': [
          {
            '@type': 'Thing',
            'name': 'Answer Engine Optimisation',
            'sameAs': 'https://en.wikipedia.org/wiki/Answer_engine'
          },
          {
            '@type': 'Thing',
            'name': 'Retrieval-Augmented Generation',
            'sameAs': 'https://en.wikipedia.org/wiki/Retrieval-augmented_generation'
          }
        ],
        'mentions': [
          {
            '@type': 'Thing',
            'name': 'Information Retrieval',
            'sameAs': 'https://en.wikipedia.org/wiki/Information_retrieval'
          },
          {
            '@type': 'Thing',
            'name': 'Vector Space Model',
            'sameAs': 'https://en.wikipedia.org/wiki/Vector_space_model'
          },
          {
            '@type': 'Thing',
            'name': 'Cosine Similarity',
            'sameAs': 'https://en.wikipedia.org/wiki/Cosine_similarity'
          }
        ]
      },
      {
        '@type': 'HowTo',
        '@id': 'https://aeobility.com.au/knowledge-hub/guides/aeo#howto',
        'name': 'How to Build an Engineered Atomic Answer Block for AI Retrieval',
        'description': 'Step-by-step procedure for converting unstructured legacy corporate text into an optimised, high-salience 90-120 token answer segment.',
        'totalTime': 'PT15M',
        'inLanguage': 'en-AU',
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': 'Isolate Target Query Intent',
            'text': "Define a single, explicit user search question (e.g., 'What is AEO?') and strip out multiple conversational tangents."
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': 'Execute Primacy Grounding Placement',
            'text': 'Place the core structural fact statement or target entity definition within the initial 90 tokens of the text segment to accommodate transformer model attention spikes.'
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': 'Eliminate Jargon and Hedging Language',
            'text': "Remove all speculative verbs such as 'strive', 'aim', or 'might', and frame statements directly as strict semantic factual triplets."
          },
          {
            '@type': 'HowToStep',
            'position': 4,
            'name': 'Embed Contextual Link Bridges',
            'text': 'Integrate highly relevant, specific anchor text links directing human readers and automated crawlers back to canonical reference nodes or implementation targets.'
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Background Schema.org TechArticle & HowTo insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12 pb-32 sm:pb-20 w-full space-y-12">
        
        {/* Header Block */}
        <header className="border-b border-white/10 pb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/25 text-aeo-cyan text-xs font-mono">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Canonical Technical Whitepaper</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono">
              <span>Reading time: 12 mins</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span>Status: Verified Technical Guide</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-soehne-breit leading-tight">
            Answer Engine Optimisation (AEO): Core Principles, System Mechanics, and Semantic Retrieval Architecture
          </h1>

          <p className="text-base sm:text-lg text-white/80 font-serif leading-relaxed max-w-3xl">
            Answer Engine Optimisation (AEO) is the systematic engineering process of structuring, formatting, and grounding digital assets to maximise their retrievability, accuracy, and citation probability across LLM-driven discovery environments, conversational search engines, and Model Context Protocol (MCP) clients.
          </p>

          <div className="pt-2 flex items-center gap-3 text-xs text-zinc-400 font-mono">
            <span>Author: <Link href="/vince-baker" className="text-aeo-cyan hover:underline">Vince Baker</Link></span>
            <span>•</span>
            <span>Updated: August 30, 2026</span>
            <span>•</span>
            <span>Canonical Node: <code className="text-zinc-300">/knowledge-hub/guides/aeo</code></span>
          </div>
        </header>

        {/* Executive Paradigm Summary */}
        <section className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
          <h2 className="text-xl font-bold text-white font-soehne-breit flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-aeo-cyan" />
            <span>The Paradigm Shift: From Lexical Indexing to Dense Vector Spaces</span>
          </h2>
          <p className="text-sm text-zinc-300 font-serif leading-relaxed">
            Traditional search engine optimisation focuses on lexical string matching, domain authority metrics, and sparse retrieval mechanics (such as BM25). In contrast, modern answer engine discovery operates within dense vector spaces, utilising transformer-based attention models and Retrieval-Augmented Generation (RAG) pipelines. To establish absolute entity authority, an ecosystem must transition from legacy keyword-density parameters to structured data governance.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs font-mono">
            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/15 space-y-1.5">
              <span className="text-red-400 font-semibold uppercase tracking-wider">Legacy SEO Mechanics</span>
              <p className="text-zinc-400 font-serif">Keyword stuffing, backlink quantity, unstructured prose, lexical string overlap.</p>
            </div>
            <div className="p-4 rounded-xl bg-aeo-cyan/5 border border-aeo-cyan/20 space-y-1.5">
              <span className="text-aeo-cyan font-semibold uppercase tracking-wider">Modern AEO Architecture</span>
              <p className="text-zinc-300 font-serif">Dense vector embeddings, SPO triples, atomic answer blocks, MCP &amp; NLWeb discovery.</p>
            </div>
          </div>
        </section>

        {/* 1. RAG Pipeline Architecture */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Cpu className="w-4 h-4" />
            <span>1. Retrieval-Augmented Generation (RAG) Pipeline Architecture</span>
          </div>

          <p className="text-sm text-zinc-300 font-serif leading-relaxed">
            A RAG pipeline is a multi-stage architectural sequence designed to extend the baseline capabilities of a Large Language Model (LLM) by injecting relevant, verifiable, first-party contextual information directly into the prompt context window before inference. This framework mitigates model hallucinations and ensures that conversational outputs are grounded in explicit factual sources.
          </p>

          {/* ASCII / Monospace RAG Flow Diagram */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5 sm:p-6 overflow-x-auto shadow-2xl">
            <div className="text-[11px] font-mono text-zinc-400 pb-3 border-b border-white/5 flex justify-between items-center">
              <span>Operational RAG Flow Diagram</span>
              <span className="text-aeo-cyan text-[10px]">End-to-End Extraction Cycle</span>
            </div>
            <pre className="text-xs font-mono text-zinc-300 pt-4 leading-relaxed whitespace-pre">
{`[Raw Content Source] ──> [Semantic Chunking] ──> [Vector Embedding Engine] ──> [Vector Database Storage]
                                                                                        │
[User Natural Query] ──> [Embedding Generation] ──> [Cosine Proximity Search] ────────┘
                                                              │
                                                              ▼
[Injected Prompt Template] <── [Top-K Passage Extraction] ───┘
          │
          ▼
[LLM Synthesised Citation Answer]`}
            </pre>
          </div>

          {/* Three Stage Breakdown */}
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <span className="text-xs font-mono font-semibold text-aeo-cyan uppercase">1.1 Data Ingestion &amp; Encoding</span>
              <h3 className="text-base font-bold text-white font-soehne-breit">Vector Space Compilation</h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                During the compilation phase (automated via scripts such as <code className="text-aeo-cyan font-mono text-[11px]">build-knowledge-base.mjs</code>), raw markdown documents and unstructured strings are systematically parsed. The text attributes are passed through transformer models to calculate normalised vector coordinates (embeddings) representing precise semantic meaning, compiled dynamically into a localized knowledge repository (<code className="text-white font-mono text-[11px]">knowledgeBase.json</code>).
              </p>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <span className="text-xs font-mono font-semibold text-aeo-purple uppercase">1.2 Query Intent Classification</span>
              <h3 className="text-base font-bold text-white font-soehne-breit">Cosine Proximity Scoring</h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                When an external AI agent queries the Grounded Answer API (<code className="text-white font-mono text-[11px]">POST /api/search/answer</code>), the pipeline calculates real-time embeddings. An uncapped cosine similarity calculation is executed between the prompt coordinates (A) and knowledge base arrays (B):
              </p>
              <div className="p-2.5 rounded bg-black/60 border border-white/10 text-[11px] font-mono text-center text-aeo-cyan">
                Cosine Similarity = (A · B) / (||A|| ||B||)
              </div>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <span className="text-xs font-mono font-semibold text-emerald-400 uppercase">1.3 Context Injection &amp; Synthesis</span>
              <h3 className="text-base font-bold text-white font-soehne-breit">Top-K Passage Extraction</h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                The top-K matching passages are extracted as distinct context chunks and appended to the agent&apos;s system prompt context window alongside strict citation directives. The underlying model parses this unified payload, generating a concise conversational response anchored entirely by direct hyperlink attributions back to the primary source nodes.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Positional Bias & Attention Distribution */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-purple">
            <Sliders className="w-4 h-4" />
            <span>2. Positional Bias, Attention Distribution, and Salience Mechanics</span>
          </div>

          <p className="text-sm text-zinc-300 font-serif leading-relaxed">
            Positional bias refers to the systemic algorithmic tendency of transformer-based long-context models and synthesis engines to preferentially weight and extract information located at the absolute boundaries of a text block (the primacy and recency effects), while consistently failing to retrieve facts buried in the middle of dense prose. This performance drop is commonly defined as the &ldquo;lost in the middle&rdquo; phenomenon.
          </p>

          {/* Context Dilution Visual Curve */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl">
            <div className="text-[11px] font-mono text-zinc-400 pb-3 border-b border-white/5 flex justify-between items-center">
              <span>Transformer Attention Distribution &amp; Context Dilution Curve</span>
              <span className="text-aeo-purple text-[10px]">Lost in the Middle Phenomenon</span>
            </div>
            <pre className="text-xs font-mono text-zinc-300 pt-4 leading-relaxed whitespace-pre overflow-x-auto">
{`Retrieval Prob. Spikes
  │
1.0  │  █                                                 █
     │  █                                                 █
     │  █                 Context Dilution Curve          █
0.5  │  █                  (Lost in the Middle)           █
     │  █ █                                             █ █
     │  █ █ █ ▄                                       ▄ █ █ █
0.0  └─────────────────────────────────────────────────────────
     0% (Primacy Spike)      50% Context Window      100% (Recency Spike)`}
            </pre>
          </div>

          {/* Structural Engineering Rules */}
          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white font-soehne-breit">
              Structural Rules to Engineer Content Around Positional Bias
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 text-xs font-serif">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-aeo-cyan font-mono font-semibold text-[11px] uppercase">1. Primacy Grounding</span>
                <p className="text-zinc-300 leading-relaxed">
                  Place the core factual declaration, target entity definition, or direct answer within the initial 90 tokens of the text block.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-aeo-purple font-mono font-semibold text-[11px] uppercase">2. Recency Enforcement</span>
                <p className="text-zinc-300 leading-relaxed">
                  Close the text block with explicit verification metrics, citation links, or unhedged parameter properties.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-emerald-400 font-mono font-semibold text-[11px] uppercase">3. Elimination of Filler</span>
                <p className="text-zinc-300 leading-relaxed">
                  Remove introductory filler, transition prose, and ambiguous marketing jargon. Deliver structural facts as clean semantic triplets (Subject, Predicate, Object).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Atomic Answer Block Engineering */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <Terminal className="w-4 h-4" />
            <span>3. Atomic Answer Block Engineering</span>
          </div>

          <p className="text-sm text-zinc-300 font-serif leading-relaxed">
            An <strong className="text-white font-sans">Atomic Answer Block</strong> is a self-contained, high-density content segment engineered precisely between 90 and 120 tokens, configured to directly answer a single, high-intent natural language query without requiring downstream contextual support.
          </p>

          {/* Comparison Cards: Anti-Pattern vs Engineered Block */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Anti-Pattern */}
            <div className="bg-red-950/10 border border-red-500/25 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-red-400 uppercase flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" />
                    <span>Unstructured Legacy Copy (The Anti-Pattern)</span>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-400 border border-red-500/30 font-bold uppercase">FAIL</span>
                </div>
                <blockquote className="text-xs text-zinc-300 font-serif italic border-l-2 border-red-500/40 pl-3 leading-relaxed">
                  &ldquo;At AEObility, we always strive to provide our valued local clients in Western Australia with the absolute best digital services possible. If you have been wondering about what AEO actually means for your business, it is an innovative new strategy that changes the way websites interact with the internet. We help make your content really stand out because we understand that search engines are changing quite rapidly nowadays and traditional keyword approaches might not be delivering the exact results that you need to grow your traffic.&rdquo;
                </blockquote>
              </div>
              <div className="text-[11px] font-mono text-zinc-400 pt-3 border-t border-red-500/10 space-y-1">
                <div>Token Count: <span className="text-red-400 font-bold">112 tokens</span> (High Waste)</div>
                <div>Entity Assertions: <span className="text-red-400 font-bold">0 structured triples</span></div>
                <div>Flaws: Speculative hedging prose (<em>strive to provide</em>, <em>might not be</em>), unreadable to automated RAG scrapers.</div>
              </div>
            </div>

            {/* Engineered Pattern */}
            <div className="bg-emerald-950/10 border border-emerald-500/25 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Engineered Atomic Answer Block (Optimised Pattern)</span>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold uppercase">PASS</span>
                </div>
                <blockquote className="text-xs text-zinc-200 font-serif border-l-2 border-emerald-500/40 pl-3 leading-relaxed">
                  &ldquo;Answer Engine Optimisation (AEO) is the technical engineering process of structuring content to maximise its retrieval accuracy across AI search overrides and conversational assistant networks. AEObility deploys fixed-scope <Link href="/services/aeo" className="text-aeo-cyan hover:underline">AEO Technical Sprints</Link> to refactor unstructured website text into machine-readable data arrays. By aligning site architectures with explicit GeoCoordinate grounding and nested schema graphs, we ensure business facts are directly verified, extracted, and cited by conversational search engines.&rdquo;
                </blockquote>
              </div>
              <div className="text-[11px] font-mono text-zinc-400 pt-3 border-t border-emerald-500/10 space-y-1">
                <div>Token Count: <span className="text-emerald-400 font-bold">86 words / 108 tokens</span> (Optimised)</div>
                <div>Entity Assertions: <span className="text-emerald-400 font-bold">4 verifiable triples</span></div>
                <div>Commercial Bridges: Links to <Link href="/services/aeo" className="text-aeo-cyan hover:underline">AEO Sprints</Link> &amp; <Link href="/brand-facts" className="text-aeo-cyan hover:underline">Brand Facts</Link>.</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Operational Product Framework and Technical Handoff */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Layers className="w-4 h-4" />
            <span>4. Operational Product Framework and Technical Handoff</span>
          </div>

          <p className="text-sm text-zinc-300 font-serif leading-relaxed">
            AEObility executes this optimisation architecture through a disciplined, 4-stage commercial product ladder designed to eliminate ongoing agency retainers and substitute them with deterministic, fixed-scope milestones:
          </p>

          {/* 4-Stage Product Ladder */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-aeo-cyan/10 text-aeo-cyan border border-aeo-cyan/20 uppercase">Stage 1: Discover</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">AI Visibility Diagnostic</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Run a real-time 6-stage telemetric crawl to map vector proximity gaps and determine baseline RAG survival probability.
                </p>
              </div>
              <Link href="/diagnostic" className="text-xs font-mono text-aeo-cyan hover:underline inline-flex items-center gap-1 pt-2 border-t border-white/5">
                <span>Run Diagnostic</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-aeo-purple/10 text-aeo-purple border border-aeo-purple/20 uppercase">Stage 2: Define</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">MVP Strategic Blueprint</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Standalone $995 AUD 90-day technical roadmap detailing explicit structural indexing friction points (100% credited into Foundation).
                </p>
              </div>
              <Link href="/solutions/aeo-blueprint" className="text-xs font-mono text-aeo-purple hover:underline inline-flex items-center gap-1 pt-2 border-t border-white/5">
                <span>Review Blueprint</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">Stage 3: Build</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">Foundation Implementation</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  From $3,195 AUD ex. GST 4-week deployment: nested schemas, atomic answer rewrites, and bidirectional entity lattice paths.
                </p>
              </div>
              <Link href="/brand-facts" className="text-xs font-mono text-emerald-400 hover:underline inline-flex items-center gap-1 pt-2 border-t border-white/5">
                <span>Foundation Scope</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase">Stage 4: Optimise</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">Targeted Micro-Sprints</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Fixed-scope modular engineering sprints (from $495 AUD) targeting rapid schema refactoring, infrastructure, and token optimisation.
                </p>
              </div>
              <Link href="/services/geo-marketing" className="text-xs font-mono text-amber-400 hover:underline inline-flex items-center gap-1 pt-2 border-t border-white/5">
                <span>Sprint Catalogue</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Step-by-Step Procedure: Building an Atomic Answer Block */}
        <section className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Code className="w-4 h-4" />
            <span>How-To: 4-Step Atomic Answer Block Production Procedure</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 font-mono text-xs text-aeo-cyan font-bold">
                <span className="w-5 h-5 rounded-full bg-aeo-cyan/20 flex items-center justify-center text-[10px]">1</span>
                <span>Isolate Target Query Intent</span>
              </div>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed pl-7">
                Define a single, explicit user search question (e.g. &ldquo;What is AEO?&rdquo;) and strip out multiple conversational tangents.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 font-mono text-xs text-aeo-purple font-bold">
                <span className="w-5 h-5 rounded-full bg-aeo-purple/20 flex items-center justify-center text-[10px]">2</span>
                <span>Execute Primacy Grounding Placement</span>
              </div>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed pl-7">
                Place the core structural fact statement or target entity definition within the initial 90 tokens of the text segment.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-bold">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">3</span>
                <span>Eliminate Jargon &amp; Hedging</span>
              </div>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed pl-7">
                Remove all speculative verbs such as &ldquo;strive&rdquo;, &ldquo;aim&rdquo;, or &ldquo;might&rdquo;, framing statements directly as strict semantic triplets.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-[10px]">4</span>
                <span>Embed Contextual Link Bridges</span>
              </div>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed pl-7">
                Integrate specific anchor text links directing human readers and automated crawlers back to canonical reference nodes.
              </p>
            </div>
          </div>
        </section>

        {/* Author Bio Card */}
        <section className="bg-zinc-950/90 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-aeo-cyan/30 to-aeo-purple/30 border border-aeo-cyan/40 flex items-center justify-center text-xl font-bold font-mono text-white shrink-0">
            VB
          </div>
          <div className="space-y-2 flex-grow">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-bold text-white font-soehne-breit">Vince Baker</h3>
              <span className="text-xs font-mono text-aeo-cyan">Founder &amp; Principal Consultant</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              Vince Baker is an Answer Engine Optimisation (AEO) consultant based in Perth, Western Australia. He specialises in structured data engineering, RAG retrieval context, and entity SEO architecture for Australian enterprises.
            </p>
            <div className="pt-1 flex gap-4 text-xs font-mono">
              <Link href="/vince-baker" className="text-aeo-cyan hover:underline">Author Profile</Link>
              <Link href="/brand-facts" className="text-zinc-400 hover:text-white">Brand Facts Directory</Link>
              <Link href="/contact" className="text-zinc-400 hover:text-white">Contact</Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA / Corridor */}
        <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-8 text-center space-y-4 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
            Test Your Entity Salience and RAG Proximity
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed max-w-2xl mx-auto">
            Evaluate how effectively search engine scrapers and conversational answer models extract your key business facts.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/diagnostic"
              className="px-6 py-3 rounded-full bg-aeo-cyan text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-aeo-cyan/90 transition shadow-lg hover:shadow-aeo-cyan/20"
            >
              Run Telemetry Diagnostic
            </Link>
            <Link
              href="/brand-facts"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-xs font-mono uppercase tracking-wider hover:bg-white/10 transition"
            >
              View Canonical Brand Facts
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
