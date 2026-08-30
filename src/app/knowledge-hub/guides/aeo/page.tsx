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
  Network,
  ExternalLink,
  Info,
  ListOrdered
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Answer Engine Optimisation (AEO): Core Principles & System Mechanics | AEObility',
  description: 'Evidence-based technical guide on RAG retrieval pipelines, positional bias heuristics, semantic chunking, and structured entity architecture.',
  alternates: {
    canonical: 'https://aeobility.com.au/knowledge-hub/guides/aeo',
  },
  openGraph: {
    title: 'Answer Engine Optimisation (AEO): Core Principles & System Mechanics | AEObility',
    description: 'Evidence-based technical architecture guide analysing RAG retrieval pipelines, positional bias heuristics, and structured entity architecture.',
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
        'description': 'Comprehensive technical guide analysing Retrieval-Augmented Generation (RAG) pipelines, positional bias heuristics, structured data governance, and atomic answer block engineering.',
        'inLanguage': 'en-AU',
        'mainEntityOfPage': 'https://aeobility.com.au/knowledge-hub/guides/aeo',
        'datePublished': '2026-08-30T11:59:51+08:00',
        'dateModified': '2026-08-30T12:15:00+08:00',
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
        'description': 'Step-by-step editorial procedure for formatting priority business information into clear, citation-ready text blocks.',
        'totalTime': 'PT15M',
        'inLanguage': 'en-AU',
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': 'Isolate Target Query Intent',
            'text': "Define a single, explicit customer question (e.g. 'What does this service include?') and eliminate extraneous conversational tangents."
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': 'Apply Primacy Grounding',
            'text': 'Place the direct declarative answer within the opening sentences of the text block to assist retrieval scrapers and reader comprehension.'
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': 'Eliminate Jargon and Speculative Hedging',
            'text': 'Replace vague marketing claims with verifiable facts, quantifiable deliverables, and specific entity relationships.'
          },
          {
            '@type': 'HowToStep',
            'position': 4,
            'name': 'Connect Evidence and Internal References',
            'text': 'Support the claim with relevant internal links, documentation references, and valid structured data where applicable.'
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: 'definition', label: '1. What AEO Is and How It Complements SEO' },
    { id: 'retrieval-mechanics', label: '2. Multi-Stage AI Retrieval Mechanics (RAG)' },
    { id: 'positional-bias', label: '3. Positional Bias & Attention Heuristics' },
    { id: 'atomic-answers', label: '4. Content Architecture & Atomic Answer Blocks' },
    { id: 'structured-data', label: '5. Structured Data: Role & Limitations' },
    { id: 'implementation-checklist', label: '6. Practical Implementation Checklist' },
    { id: 'sources-notes', label: '7. Primary Sources & Research Notes' },
    { id: 'service-framework', label: '8. AEObility Methodology & Service Pathways' },
  ];

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
              <span>Technical Whitepaper</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono">
              <span>Reading time: ~12 mins</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <ShieldCheck className="w-3 h-3" />
              <span>Peer-Referenced Technical Guide</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-soehne-breit leading-tight">
            Answer Engine Optimisation (AEO): Core Principles, System Mechanics, and Semantic Retrieval Architecture
          </h1>

          <p className="text-base sm:text-lg text-white/80 font-serif leading-relaxed max-w-3xl">
            Answer Engine Optimisation (AEO) improves the clarity, structure, and evidence behind your website content so AI search tools and conversational assistants can more accurately understand, retrieve, and reference it. It complements SEO rather than replacing it.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-400 font-mono border-t border-white/5 pt-4">
            <span>Author: <Link href="/vince-baker" className="text-aeo-cyan hover:underline">Vince Baker</Link></span>
            <span>•</span>
            <span>Reviewed by: AEObility Editorial &amp; Technical Team</span>
            <span>•</span>
            <span>Last reviewed: August 30, 2026</span>
            <span>•</span>
            <span>Canonical: <code className="text-zinc-300">/knowledge-hub/guides/aeo</code></span>
          </div>
        </header>

        {/* Table of Contents Box */}
        <nav aria-label="Table of Contents" className="bg-zinc-950/90 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-aeo-cyan font-bold uppercase tracking-wider">
            <ListOrdered className="w-4 h-4" />
            <span>Table of Contents</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-2 text-xs font-mono">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-zinc-300 hover:text-aeo-cyan transition-colors py-1 flex items-center gap-1.5"
              >
                <span className="text-zinc-500">→</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Section 1: Definition & Relationship with SEO */}
        <section id="definition" className="space-y-4 scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Sparkles className="w-4 h-4" />
            <span>1. What AEO Is and How It Complements SEO</span>
          </div>
          
          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
            <h2 className="text-xl font-bold text-white font-soehne-breit">
              Understanding the Relationship Between Traditional Search and AI-Assisted Retrieval
            </h2>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              Traditional search engines and modern AI answer engines rely on overlapping information retrieval signals. Both evaluate domain trust, technical accessibility, crawlability, topic relevance, and structured markup. 
            </p>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              Where traditional SEO focuses primarily on earning rankings on traditional search engine results pages (SERPs) through keyword targeting and authority signals, <strong>Answer Engine Optimisation (AEO)</strong> focuses on the machine interpretability of your core facts, ensuring that conversational agents and Retrieval-Augmented Generation (RAG) pipelines can cleanly extract, synthesize, and cite specific business claims without ambiguity.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-3 text-xs font-mono">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <span className="text-white font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Search Engine Optimisation (SEO)</span>
                </span>
                <p className="text-zinc-400 font-serif leading-relaxed">
                  Focuses on indexing, keyword matching, user intent, technical site health, site speed, and link graph authority to earn traditional blue-link search traffic.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-aeo-cyan/5 border border-aeo-cyan/20 space-y-2">
                <span className="text-aeo-cyan font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-aeo-cyan" />
                  <span>Answer Engine Optimisation (AEO)</span>
                </span>
                <p className="text-zinc-300 font-serif leading-relaxed">
                  Extends SEO by refining answer structure, entity clarity, schema verification, and evidence provenance so AI systems can reliably cite your verified business facts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Retrieval-Augmented Generation (RAG) Architecture */}
        <section id="retrieval-mechanics" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Cpu className="w-4 h-4" />
            <span>2. Multi-Stage AI Retrieval Mechanics (RAG)</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
              How AI Retrieval Pipelines Process and Synthesize Web Content
            </h2>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              Many AI search platforms and conversational discovery tools operate using variants of <strong>Retrieval-Augmented Generation (RAG)</strong>. While individual platform implementations differ (incorporating proprietary hybrid lexical-vector indices, dense embeddings, knowledge graphs, and cross-encoder rerankers), the conceptual architecture typically executes across four sequential stages:
            </p>
          </div>

          {/* Accessible SVG/HTML Retrieval Flow Diagram */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="text-xs font-mono text-zinc-400">Conceptual Multi-Stage RAG Pipeline</span>
              <span className="text-aeo-cyan text-[11px] font-mono">Standard Architectural Sequence</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-xs font-mono text-aeo-cyan font-semibold">1. Ingestion &amp; Chunking</div>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  Web pages are crawled, stripped of boilerplate, and split into segmented text chunks.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-xs font-mono text-aeo-purple font-semibold">2. Semantic Vector Indexing</div>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  Chunks are converted into high-dimensional vector embeddings and indexed alongside lexical terms.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-xs font-mono text-emerald-400 font-semibold">3. Query Retrieval &amp; Reranking</div>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  When a user asks a question, candidate passages are scored for relevance and reranked.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-xs font-mono text-amber-400 font-semibold">4. Prompt Injection &amp; Citation</div>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  Top matching passages are appended to the LLM prompt context to synthesize a cited response.
                </p>
              </div>
            </div>
          </div>

          {/* Three Detailed Mechanics Blocks */}
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <span className="text-xs font-mono font-semibold text-aeo-cyan uppercase">2.1 Document Chunking</span>
              <h3 className="text-base font-bold text-white font-soehne-breit">Passage Segmentation</h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Retrieval engines rarely evaluate an entire 3,000-word article as a single unit. Content is broken down into semantic chunks (often 200–500 tokens). Clear subheadings and self-contained paragraphs ensure that extracted chunks retain full meaning without losing context.
              </p>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <span className="text-xs font-mono font-semibold text-aeo-purple uppercase">2.2 Hybrid Retrieval</span>
              <h3 className="text-base font-bold text-white font-soehne-breit">Vector &amp; Lexical Matching</h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Modern retrieval systems blend dense semantic vector embeddings (which capture conceptual meaning and synonyms) with traditional BM25 lexical keyword matching (which captures exact entity names, part numbers, and specific terminology).
              </p>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <span className="text-xs font-mono font-semibold text-emerald-400 uppercase">2.3 Context Grounding</span>
              <h3 className="text-base font-bold text-white font-soehne-breit">Citation Attribution</h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                When candidate passages provide explicit, unhedged answers supported by clear entity relationships, the language model can cite the original URL with higher confidence, reducing hallucination risk.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Positional Bias & Attention Heuristics */}
        <section id="positional-bias" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-purple">
            <Sliders className="w-4 h-4" />
            <span>3. Positional Bias &amp; Attention Heuristics</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
              Understanding Positional Bias and the &ldquo;Lost in the Middle&rdquo; Phenomenon
            </h2>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              Research in language model evaluation (notably by Liu et al., 2023) has documented that transformer-based models exhibit positional bias: performance is typically highest when critical information is located at the beginning (primacy effect) or end (recency effect) of an input context, with lower retrieval accuracy for information situated in the middle of long contexts.
            </p>
          </div>

          {/* Dilution Curve Box */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-3">
            <div className="text-[11px] font-mono text-zinc-400 pb-2 border-b border-white/5 flex justify-between items-center">
              <span>Attention Allocation Curve in Long-Context Retrieval</span>
              <span className="text-aeo-purple text-[10px]">Research-Backed Heuristic</span>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-xs text-zinc-300 space-y-2">
              <div className="text-aeo-cyan font-bold text-[11px]">Key Research Takeaway:</div>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                When LLMs process dense multi-document prompts, retrieval accuracy for facts placed in the first 10–20% or final 10% of a context window is significantly higher than for facts placed in the central 50%.
              </p>
            </div>
          </div>

          {/* Writing Heuristics based on Research */}
          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white font-soehne-breit">
              Practical Writing Heuristics for AI-Assisted Visibility
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 text-xs font-serif">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-aeo-cyan font-mono font-semibold text-[11px] uppercase">1. Answer-First Primacy</span>
                <p className="text-zinc-300 leading-relaxed">
                  State the core factual claim or direct answer in the opening sentences under each descriptive subheading before adding narrative background.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-aeo-purple font-mono font-semibold text-[11px] uppercase">2. Concrete Supporting Evidence</span>
                <p className="text-zinc-300 leading-relaxed">
                  Support the initial assertion with quantifiable metrics, explicit parameters, and specific examples rather than vague promotional prose.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-emerald-400 font-mono font-semibold text-[11px] uppercase">3. Verification &amp; Citations</span>
                <p className="text-zinc-300 leading-relaxed">
                  Conclude section blocks with links to canonical documentation, related entity pages, or verifiable primary sources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Content Architecture & Atomic Answer Blocks */}
        <section id="atomic-answers" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <Terminal className="w-4 h-4" />
            <span>4. Content Architecture &amp; Atomic Answer Blocks</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
              Engineering Self-Contained Answer Blocks
            </h2>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              At AEObility, we use the editorial guideline of an <strong>Atomic Answer Block</strong>: a concise, self-contained passage (typically between 80 and 120 words) engineered to answer one specific question directly without requiring prior or downstream paragraphs to make sense.
            </p>
          </div>

          {/* Educational Contrast Example */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vague Pattern */}
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-zinc-400 uppercase flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-amber-400" />
                    <span>Low-Specificity Copy (Vague &amp; Hedged)</span>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold uppercase">Weak Extraction</span>
                </div>
                <blockquote className="text-xs text-zinc-400 font-serif italic border-l-2 border-amber-500/40 pl-3 leading-relaxed">
                  &ldquo;At our company, we always strive to provide our valued clients with the absolute best digital solutions possible. If you have been wondering about what AEO actually means for your business, it is an innovative new approach that changes the way websites interact with the internet. We help make your content really stand out because we understand that technology is changing rapidly nowadays.&rdquo;
                </blockquote>
              </div>
              <div className="text-[11px] font-mono text-zinc-400 pt-3 border-t border-white/5 space-y-1">
                <div>Characteristics: Excessive promotional filler, speculative hedging (<em>strive to provide</em>), low in extractable facts and entity specificity.</div>
              </div>
            </div>

            {/* Clear Pattern */}
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>High-Clarity Answer Block (Fact-Dense &amp; Direct)</span>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold uppercase">Strong Extraction</span>
                </div>
                <blockquote className="text-xs text-zinc-200 font-serif border-l-2 border-emerald-500/40 pl-3 leading-relaxed">
                  &ldquo;Answer Engine Optimisation (AEO) is the practice of structuring website content and schema markup to make business information easily retrievable by AI search tools and conversational assistants. It focuses on direct answer formatting, clear entity definitions, and verifiable evidence sources so that machine systems can accurately interpret and cite business offerings.&rdquo;
                </blockquote>
              </div>
              <div className="text-[11px] font-mono text-zinc-400 pt-3 border-t border-white/5 space-y-1">
                <div>Characteristics: Direct declarative definition, zero filler words, clear entity context, easily cited in AI responses.</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-zinc-400 font-serif leading-relaxed flex items-start gap-2.5">
            <Info className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
            <span>
              <strong>Editorial Note:</strong> Writing in clear, atomic answer blocks improves human readability while providing distinct, high-salience chunks for search scrapers. However, no editorial format guarantees inclusion or citation by third-party search engines.
            </span>
          </div>
        </section>

        {/* Section 5: Structured Data: Role and Limitations */}
        <section id="structured-data" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Code className="w-4 h-4" />
            <span>5. Structured Data: Role &amp; Limitations</span>
          </div>

          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
            <h2 className="text-xl font-bold text-white font-soehne-breit">
              Schema.org JSON-LD as an Explicit Entity Disambiguation Layer
            </h2>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              While natural-language content is processed probabilistically by large language models, structured data (specifically Schema.org JSON-LD) provides an explicit, deterministic graph of entities, attributes, and relationships.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-xs font-mono font-semibold text-aeo-cyan uppercase">What Schema Does Well</span>
                <ul className="text-xs text-zinc-300 font-serif space-y-1.5 list-disc pl-4">
                  <li>Disambiguates your company identity (`@type: ProfessionalService`) from similar brands.</li>
                  <li>Declares official founding dates, founder identities, and corporate registration details (e.g. ABN).</li>
                  <li>Defines explicit service catalogues, fixed pricing configurations, and geographical operating areas.</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-xs font-mono font-semibold text-amber-400 uppercase">Limitations of Schema</span>
                <ul className="text-xs text-zinc-300 font-serif space-y-1.5 list-disc pl-4">
                  <li>Schema alone cannot compensate for thin, inaccurate, or contradictory on-page text.</li>
                  <li>Search engines ignore schema if claims do not match visible page content.</li>
                  <li>Over-complicated or unverified schemas create markup errors and risk manual penalties.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Practical Implementation Checklist */}
        <section id="implementation-checklist" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>6. Practical Implementation Checklist</span>
          </div>

          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
            <h2 className="text-xl font-bold text-white font-soehne-breit">
              Core Technical and Editorial Checklist for AEO Readiness
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-serif">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 font-mono font-semibold text-aeo-cyan">
                  <Check className="w-4 h-4 text-aeo-cyan" />
                  <span>1. Canonical Identity Grounding</span>
                </div>
                <p className="text-zinc-300 pl-6 leading-relaxed">
                  Establish a single canonical source of truth for your business details (legal name, ABN, operating location, founder, pricing) on a dedicated <Link href="/brand-facts" className="text-aeo-cyan hover:underline">Brand Facts directory</Link>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 font-mono font-semibold text-aeo-purple">
                  <Check className="w-4 h-4 text-aeo-purple" />
                  <span>2. Answer-First Page Restructuring</span>
                </div>
                <p className="text-zinc-300 pl-6 leading-relaxed">
                  Place direct, concise answers (80–120 words) immediately below relevant descriptive H2 headings across all priority commercial and educational pages.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 font-mono font-semibold text-emerald-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>3. Valid Schema.org Validation</span>
                </div>
                <p className="text-zinc-300 pl-6 leading-relaxed">
                  Implement valid, tested JSON-LD graphs linking your Organisation/ProfessionalService, Services, Articles, and Author profiles with fully qualified URIs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 font-mono font-semibold text-amber-400">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>4. Internal Link Architecture</span>
                </div>
                <p className="text-zinc-300 pl-6 leading-relaxed">
                  Connect related concepts, services, and evidence case studies using descriptive anchor text rather than generic &ldquo;click here&rdquo; labels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Primary Sources & Research Notes */}
        <section id="sources-notes" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <FileText className="w-4 h-4" />
            <span>7. Primary Sources &amp; Research Notes</span>
          </div>

          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
            <h2 className="text-lg font-bold text-white font-soehne-breit">
              Authoritative Citations and Research Foundation
            </h2>
            <ul className="space-y-3 text-xs font-mono text-zinc-300 divide-y divide-white/5">
              <li className="pt-2.5 first:pt-0 space-y-1">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>1. Retrieval-Augmented Generation (RAG)</span>
                  <span className="text-[10px] text-zinc-500">Lewis et al. (NeurIPS 2020)</span>
                </div>
                <p className="text-zinc-400 font-serif">
                  Lewis, P., et al. &ldquo;Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.&rdquo; <em>Advances in Neural Information Processing Systems</em> 33 (2020): 9459-9474.
                </p>
              </li>

              <li className="pt-2.5 space-y-1">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>2. Positional Bias &amp; &ldquo;Lost in the Middle&rdquo;</span>
                  <span className="text-[10px] text-zinc-500">Liu et al. (TACL 2023)</span>
                </div>
                <p className="text-zinc-400 font-serif">
                  Liu, N. F., Lin, K., Hewitt, J., Paranjape, A., Bevilacqua, M., Petroni, F., &amp; Liang, P. &ldquo;Lost in the Middle: How Language Models Use Long Contexts.&rdquo; <em>Transactions of the Association for Computational Linguistics</em> 12 (2024): 157-173.
                </p>
              </li>

              <li className="pt-2.5 space-y-1">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>3. Schema.org Specification</span>
                  <span className="text-[10px] text-zinc-500">W3C / Schema.org Community</span>
                </div>
                <p className="text-zinc-400 font-serif">
                  Official vocabulary guidelines for structured entities, professional services, and semantic triples. Reference: <a href="https://schema.org" target="_blank" rel="noopener noreferrer" className="text-aeo-cyan hover:underline inline-flex items-center gap-0.5">schema.org <ExternalLink className="w-3 h-3" /></a>.
                </p>
              </li>

              <li className="pt-2.5 space-y-1">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>4. Model Context Protocol (MCP)</span>
                  <span className="text-[10px] text-zinc-500">Anthropic Specification</span>
                </div>
                <p className="text-zinc-400 font-serif">
                  Open protocol standard for connecting AI models to external tools, resource endpoints, and contextual datasets. Reference: <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-aeo-cyan hover:underline inline-flex items-center gap-0.5">modelcontextprotocol.io <ExternalLink className="w-3 h-3" /></a>.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 8: AEObility Methodology & Service Pathways */}
        <section id="service-framework" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Layers className="w-4 h-4" />
            <span>8. AEObility Methodology &amp; Service Pathways</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
              Structured, Fixed-Scope Execution Framework
            </h2>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              AEObility delivers answer engine optimisation through modular, fixed-scope engagements designed around system mechanics rather than indefinite marketing retainers:
            </p>
          </div>

          {/* 4-Stage Service Grid with Accurately Routed CTAs */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-aeo-cyan/10 text-aeo-cyan border border-aeo-cyan/20 uppercase">Stage 1: Discover</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">Telemetry Diagnostic</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Automated scan of technical signals, structured data coverage, and content answer readiness.
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
                <h3 className="text-base font-bold text-white font-soehne-breit">Strategic Blueprint</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Fixed-scope $995 AUD 90-day technical roadmap detailing schema gaps and content restructuring targets.
                </p>
              </div>
              <Link href="/solutions/aeo-blueprint" className="text-xs font-mono text-aeo-purple hover:underline inline-flex items-center gap-1 pt-2 border-t border-white/5">
                <span>Strategic Blueprint</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">Stage 3: Build</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">Foundation Build</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Comprehensive 4-week implementation (from $3,195 AUD ex. GST): schema graphs, atomic page rewrites, and linking.
                </p>
              </div>
              <Link href="/solutions/aeo-sprint" className="text-xs font-mono text-emerald-400 hover:underline inline-flex items-center gap-1 pt-2 border-t border-white/5">
                <span>Foundation Scope</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase">Stage 4: Optimise</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">Technical Micro-Sprints</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Modular sprints (from $495 AUD) targeting single tactical priorities: schema nesting, citation cleanup, or internal links.
                </p>
              </div>
              <Link href="/services/aeo" className="text-xs font-mono text-amber-400 hover:underline inline-flex items-center gap-1 pt-2 border-t border-white/5">
                <span>AEO Services</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Author Bio Card & Editorial Transparency */}
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
              Vince Baker is an Answer Engine Optimisation (AEO) consultant based in Perth, Western Australia. He specialises in structured data engineering, RAG retrieval context, and entity architecture for Australian enterprises.
            </p>
            <div className="pt-1 flex flex-wrap gap-4 text-xs font-mono">
              <Link href="/vince-baker" className="text-aeo-cyan hover:underline">Author Profile</Link>
              <Link href="/brand-facts" className="text-zinc-400 hover:text-white">Brand Facts Directory</Link>
              <Link href="/contact" className="text-zinc-400 hover:text-white">Contact</Link>
            </div>
          </div>
        </section>

        {/* Bottom Verification & CTA Corridor */}
        <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-8 text-center space-y-4 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
            Assess Your Content Answer Readiness
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed max-w-2xl mx-auto">
            Evaluate how effectively search systems and conversational models can interpret and extract your key business offerings.
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

