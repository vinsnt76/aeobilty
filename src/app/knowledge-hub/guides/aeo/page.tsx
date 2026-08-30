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
  ListOrdered,
  GitGraph,
  ChevronDown,
  Target,
  Wrench,
  TrendingUp,
  MapPin
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
        'dateModified': '2026-08-30T12:25:00+08:00',
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
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://aeobility.com.au/knowledge-hub/guides/aeo#faq',
        'isPartOf': {
          '@type': 'WebPage',
          '@id': 'https://aeobility.com.au/knowledge-hub/guides/aeo#webpage'
        },
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Is AEO replacing traditional SEO?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. It acts as a complementary layer. Traditional SEO targets lexical indexing loops and human click-through paths on legacy digital maps, while AEO optimizes passage extraction accuracy within dense vector retrieval layers.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do I absolutely require structured schema for AEO?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. While Schema.org data does not guarantee inclusion, nested JSON-LD graphs provide machines with unambiguous entity boundaries, linking business metrics directly to verified Wikidata identifiers.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How long does a standard AEO implementation engagement take?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A baseline deployment via our Foundation Implementation package executes over a fixed four-week cycle, establishing your connected semantic structure.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What website components should be optimised first?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Priority should be allocated to your primary identity directory, service capability definitions, and core commercial fact listings before addressing deep informational archives.'
            }
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
    { id: 'service-framework', label: '8. AEObility Methodology & 6-Stage Diagnostic' },
    { id: 'site-architecture', label: '9. Site Architecture & Entity Graph Model' },
    { id: 'faq-section', label: '10. Frequently Asked Questions (FAQ)' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Background Schema.org TechArticle, HowTo & FAQ insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12 pb-32 sm:pb-20 w-full space-y-12">
        
        {/* Header Block with Low-Contrast Geometric Background */}
        <header className="relative border border-white/10 rounded-3xl p-6 sm:p-10 overflow-hidden bg-gradient-to-b from-zinc-900/60 via-zinc-950/80 to-black shadow-2xl space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.06),transparent_60%)] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-aeo-cyan/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
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

            {/* Humanization Bridge (Primacy Placement) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed">
              <strong className="text-aeo-cyan font-sans uppercase tracking-wider text-xs block mb-1">Executive Summary:</strong>
              Before we unpack the underlying engineering code, here is the simple version: Answer Engine Optimisation (AEO) helps AI search models understand your business facts the same way a human colleague would: clearly, consistently, and without guesswork. If you are a non-technical leader, this guide reveals how to ensure your brand is accurately cited when AI systems answer questions on behalf of users.
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-400 font-mono border-t border-white/5 pt-4">
              <span>Author: <Link href="/vince-baker" className="text-aeo-cyan hover:underline">Vince Baker</Link></span>
              <span>•</span>
              <span>Reviewed by: AEObility Editorial &amp; Technical Team</span>
              <span>•</span>
              <span>Last reviewed: August 30, 2026</span>
              <span>•</span>
              <span>Canonical: <code className="text-zinc-300">/knowledge-hub/guides/aeo</code></span>
            </div>
          </div>
        </header>

        {/* Break-Up Block 1: The Conceptual 3-Card Summary */}
        <section aria-label="Conceptual 3-Card Summary" className="grid sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2 shadow-xl flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white font-soehne-breit">What AEO Solves</h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Eliminates multi-node signal dilution, missing context chunks, and brand hallucinations across AI scrapers.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2 shadow-xl flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/20 flex items-center justify-center text-aeo-cyan">
                <Wrench className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white font-soehne-breit">How It Works</h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Restructures unstructured copy into distinct, high-density token blocks wrapped in nested JSON-LD schema graphs.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2 shadow-xl flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white font-soehne-breit">Why It Matters</h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Ensures your service modules and pricing structures are directly extractable by automated conversational search engines.
              </p>
            </div>
          </div>
        </section>

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
              Traditional search engines and modern AI answer engines rely on overlapping information retrieval signals. Both evaluate domain trust, technical accessibility, crawlability, topic relevance, and structured markup. For an in-depth breakdown of how ranking factors diverge, explore our comparative analysis on <Link href="/knowledge-hub/articles/aeo-vs-seo" className="text-aeo-cyan hover:underline">AEO vs Traditional SEO Mechanics</Link>.
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
            
            {/* Humanization Bridge for RAG */}
            <p className="text-sm text-zinc-200 font-serif leading-relaxed bg-white/[0.02] border-l-2 border-aeo-cyan p-3.5 rounded-r-xl">
              To understand how AI engines discover your data, we must look at the retrieval process. Think of a RAG pipeline as an automated research assistant that cross-references a closed database before compiling a clean brief.
            </p>

            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              Many AI search platforms and conversational discovery tools operate using variants of <strong>Retrieval-Augmented Generation (RAG)</strong>. While individual platform implementations differ (incorporating proprietary hybrid lexical-vector indices, dense embeddings, knowledge graphs, and cross-encoder rerankers), the conceptual architecture typically executes across four sequential stages. For a comprehensive architectural deep-dive, see our detailed whitepaper on <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-aeo-cyan hover:underline">RAG Engineering and Context Injection</Link>.
            </p>
          </div>

          {/* Accessible Flowchart Mapping Ingestion Pipeline */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="text-xs font-mono text-zinc-400">Diagram 1: End-to-End RAG Ingestion &amp; Synthesis Pipeline</span>
              <span className="text-aeo-cyan text-[11px] font-mono">Standard Retrieval Architecture</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-xs font-mono text-aeo-cyan font-semibold">1. Data Ingestion</div>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  Web pages are crawled, stripped of boilerplate, and split into segmented text chunks.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-xs font-mono text-aeo-purple font-semibold">2. Vector Encoding</div>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  Chunks are converted into high-dimensional vector embeddings and indexed in vector databases.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-xs font-mono text-emerald-400 font-semibold">3. Cosine Search</div>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  When a user asks a query, candidate passages are scored for relevance and reranked.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-xs font-mono text-amber-400 font-semibold">4. Context Injection</div>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  Top matching passages are injected into the LLM prompt context to synthesize a cited response.
                </p>
              </div>
            </div>

            {/* Localized Scenario Example Micro-Relief */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs text-zinc-300 font-serif leading-relaxed flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
              <span>
                <strong className="text-white font-mono uppercase text-[11px] block">Localised Retrieval Scenario:</strong>
                For example, when a prospect asks an AI engine for an &ldquo;AEO specialist in Perth&rdquo;, the RAG framework does not just guess. It scans available indexes for localised coordinate arrays and semantic matches, pulling out exact text chunks to verify our operating footprint.
              </span>
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
                When candidate passages provide explicit, unhedged answers supported by clear entity relationships, the language model can cite the original URL with higher confidence, reducing hallucination risk. For guidance on remediating citation errors, read <Link href="/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps" className="text-emerald-400 hover:underline">Fixing AI Brand Hallucinations</Link>.
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

            {/* Humanization Bridge for Positional Bias */}
            <p className="text-sm text-zinc-200 font-serif leading-relaxed bg-white/[0.02] border-l-2 border-aeo-purple p-3.5 rounded-r-xl">
              If you are managing content, the key takeaway here is simple: location matters. Just like humans skip the middle paragraphs of a dense legal document, AI attention models focus their primary token budgets on the absolute beginning and end of a text block.
            </p>

            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              Research in language model evaluation (notably by Liu et al., 2023) has documented that transformer-based models exhibit positional bias: performance is typically highest when critical information is located at the beginning (primacy effect) or end (recency effect) of an input context, with lower retrieval accuracy for information situated in the middle of long contexts. For a specialized study of this effect, see our research article on <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="text-aeo-purple hover:underline">Positional Bias in AI Retrieval</Link>.
            </p>
          </div>

          {/* Diagram 2: Positional Bias Coordinate Curve */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-3">
            <div className="text-[11px] font-mono text-zinc-400 pb-2 border-b border-white/5 flex justify-between items-center">
              <span>Diagram 2: Attention Allocation Curve in Long-Context Retrieval</span>
              <span className="text-aeo-purple text-[10px]">Research-Backed Heuristic</span>
            </div>
            
            <div className="p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-xs text-zinc-300 space-y-3 overflow-x-auto">
              <pre className="text-xs font-mono text-zinc-300 leading-relaxed whitespace-pre">
{`Retrieval Accuracy Spikes
  │
1.0  │  █ [Primacy Spike: 0-10%]                          █ [Recency Spike: 90-100%]
     │  █                                                 █
     │  █                 Context Dilution Valley         █
0.5  │  █                  (The 20%-80% Middle Zone)      █
     │  █ █                                             █ █
     │  █ █ █ ▄                                       ▄ █ █ █
0.0  └─────────────────────────────────────────────────────────
     0% Initial Chunk        50% Context Window      100% Final Chunk`}
              </pre>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed pt-2 border-t border-white/5">
                <strong>Key Finding:</strong> When LLMs process dense multi-document prompts, retrieval accuracy for facts placed in the first 10–20% or final 10% of a context window is significantly higher than for facts placed in the central 50%.
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

          {/* Diagram 3: Before vs After Side-by-Side Comparison */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-400">Diagram 3: Before vs. After Code &amp; Copy Architecture</div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-zinc-400 uppercase flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-amber-400" />
                      <span>Before (Machine-Illegible / Low Specificity)</span>
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

              {/* After */}
              <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>After (AEO Optimised Pattern)</span>
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold uppercase">Strong Extraction</span>
                  </div>
                  <blockquote className="text-xs text-zinc-200 font-serif border-l-2 border-emerald-500/40 pl-3 leading-relaxed">
                    &ldquo;Answer Engine Optimisation (AEO) is the practice of structuring website content and schema markup to make business information easily retrievable by AI search tools and conversational assistants. It focuses on direct answer formatting, clear entity definitions, and verifiable evidence sources so that machine systems can accurately interpret and cite business offerings.&rdquo;
                  </blockquote>
                </div>
                <div className="text-[11px] font-mono text-zinc-400 pt-3 border-t border-white/5 space-y-1">
                  <div>Characteristics: Direct declarative definition, zero filler words, clear entity context, easily cited in AI responses. See <Link href="/services/aeo" className="text-aeo-cyan hover:underline">how we implement AEO for Australian enterprises</Link>.</div>
                </div>
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
              While natural-language content is processed probabilistically by large language models, structured data (specifically Schema.org JSON-LD) provides an explicit, deterministic graph of entities, attributes, and relationships. Learn more about interconnected entity graphs in our analysis of <Link href="/knowledge-hub/articles/structured-data-query-fan-out" className="text-aeo-cyan hover:underline">Structured Data Query Fan-Out</Link>.
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
                  Implement valid, tested JSON-LD graphs linking your Organisation/ProfessionalService, Services, Articles, and Author profiles with fully qualified URIs. See our guide on <Link href="/knowledge-hub/articles/entity-authority-building" className="text-emerald-400 hover:underline">Entity Authority Building</Link>.
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

        {/* Section 8: AEObility Methodology & 6-Stage Diagnostic */}
        <section id="service-framework" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Layers className="w-4 h-4" />
            <span>8. AEObility Methodology &amp; 6-Stage Diagnostic</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
              Structured Engagements &amp; Diagnostic Methodology
            </h2>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              AEObility uses a working model to align client content with AI retrieval behaviour. Our diagnostic engine evaluates website content through an automated 6-stage telemetry analysis. For an open technical specification of this engine, review the <Link href="/knowledge-hub/articles/telemetry-diagnostic-architecture" className="text-aeo-cyan hover:underline">Telemetry Diagnostic Technical Architecture Guide</Link>.
            </p>
          </div>

          {/* 6-Stage Diagnostic Breakdown Box */}
          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-white font-soehne-breit flex items-center gap-2">
              <Activity className="w-4 h-4 text-aeo-cyan" />
              <span>The 6 Stages of the AEObility Telemetric Audit</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-serif">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="font-mono text-aeo-cyan font-semibold">Stage 1: DOM Semantic Parsing</div>
                <p className="text-zinc-400 leading-relaxed">Checks heading hierarchy, paragraph conciseness, and presence of atomic answer passages.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="font-mono text-aeo-purple font-semibold">Stage 2: Schema Triple Extraction</div>
                <p className="text-zinc-400 leading-relaxed">Validates JSON-LD entities, Subject-Predicate-Object triples, and absolute canonical URI integrity.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="font-mono text-emerald-400 font-semibold">Stage 3: Positional Salience Check</div>
                <p className="text-zinc-400 leading-relaxed">Assesses whether direct answers occur in the initial chunk (primacy) to minimise context dilution.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="font-mono text-amber-400 font-semibold">Stage 4: Entity Alignment</div>
                <p className="text-zinc-400 leading-relaxed">Evaluates consistency between on-page assertions and external knowledge bases (Wikidata, industry nodes).</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="font-mono text-pink-400 font-semibold">Stage 5: Vector Proximity Test</div>
                <p className="text-zinc-400 leading-relaxed">Runs semantic similarity tests across common customer search queries against page text embeddings.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="font-mono text-cyan-300 font-semibold">Stage 6: Evidence &amp; Provenance</div>
                <p className="text-zinc-400 leading-relaxed">Verifies that commercial claims are grounded by proof, internal link bridges, and public case studies.</p>
              </div>
            </div>
            <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/5">
              <em>Note: Diagnostic scores indicate content readiness and structured markup quality; they do not guarantee indexing or inclusion by third-party search engines.</em>
            </div>
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

        {/* Section 9: Site Architecture & Entity Graph Model */}
        <section id="site-architecture" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <GitGraph className="w-4 h-4" />
            <span>9. Site Architecture &amp; Entity Graph Model</span>
          </div>

          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
            <h2 className="text-xl font-bold text-white font-soehne-breit">
              The Node &amp; Edge Information Architecture Model
            </h2>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              To support both human navigation and automated AI entity extraction, AEObility organizes website content as a network of typed nodes connected by explicit semantic relationships (edges):
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <span className="text-aeo-cyan font-bold uppercase">Node Definition</span>
                <p className="text-zinc-400 font-serif">A specific URL characterized by a Schema.org <code className="text-zinc-300">@type</code> and a primary topical query cluster.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <span className="text-aeo-purple font-bold uppercase">Edge Definition</span>
                <p className="text-zinc-400 font-serif">A typed, descriptive internal link connecting two nodes (e.g. <code className="text-zinc-300">implements</code>, <code className="text-zinc-300">identityOf</code>).</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <span className="text-emerald-400 font-bold uppercase">Anchor Text Principle</span>
                <p className="text-zinc-400 font-serif">Descriptive, natural anchor text designed for human clarity while defining the conceptual relationship.</p>
              </div>
            </div>

            {/* Architecture Node-to-Node Relationship Matrix Table */}
            <div className="space-y-3 pt-4">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                Canonical Node-to-Edge Mapping Table
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border border-white/10 rounded-xl overflow-hidden">
                  <thead className="bg-white/5 text-zinc-300 border-b border-white/10">
                    <tr>
                      <th className="p-3 font-semibold">Source Node</th>
                      <th className="p-3 font-semibold">Target Node</th>
                      <th className="p-3 font-semibold">Relationship (Edge)</th>
                      <th className="p-3 font-semibold">Descriptive Anchor Text Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-zinc-300">
                    <tr>
                      <td className="p-3 text-zinc-400"><code className="text-white">/knowledge-hub/guides/aeo</code></td>
                      <td className="p-3 text-aeo-cyan"><Link href="/services/aeo" className="hover:underline">/services/aeo</Link></td>
                      <td className="p-3 text-amber-400">implements</td>
                      <td className="p-3 font-serif">&ldquo;how we implement AEO for Australian enterprises&rdquo;</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-zinc-400"><code className="text-white">/knowledge-hub/guides/aeo</code></td>
                      <td className="p-3 text-aeo-cyan"><Link href="/brand-facts" className="hover:underline">/brand-facts</Link></td>
                      <td className="p-3 text-emerald-400">identityOf</td>
                      <td className="p-3 font-serif">&ldquo;canonical brand facts directory and corporate ledger&rdquo;</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-zinc-400"><code className="text-white">/knowledge-hub/guides/aeo</code></td>
                      <td className="p-3 text-aeo-cyan"><Link href="/solutions/aeo-sprint" className="hover:underline">/solutions/aeo-sprint</Link></td>
                      <td className="p-3 text-aeo-purple">offers</td>
                      <td className="p-3 font-serif">&ldquo;fixed-scope AEO implementation sprints&rdquo;</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-zinc-400"><code className="text-white">/knowledge-hub/guides/aeo</code></td>
                      <td className="p-3 text-aeo-cyan"><Link href="/knowledge-hub/case-studies/baby-bento" className="hover:underline">/case-studies/baby-bento</Link></td>
                      <td className="p-3 text-cyan-400">evidenceFor</td>
                      <td className="p-3 font-serif">&ldquo;verified case study on structured AEO deployment&rdquo;</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-zinc-400"><code className="text-white">/knowledge-hub/guides/aeo</code></td>
                      <td className="p-3 text-aeo-cyan"><Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="hover:underline">/articles/positional-bias</Link></td>
                      <td className="p-3 text-pink-400">elaborates</td>
                      <td className="p-3 font-serif">&ldquo;technical study on positional bias in AI retrieval&rdquo;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Frequently Asked Questions (FAQ) */}
        <section id="faq-section" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <HelpCircle className="w-4 h-4" />
            <span>10. Frequently Asked Questions (AEO Guide)</span>
          </div>

          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
            <h2 className="text-xl font-bold text-white font-soehne-breit">
              Direct Answers to Common AEO Implementation Inquiries
            </h2>
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="text-sm font-bold text-white font-soehne-breit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-aeo-cyan"></span>
                  <span>Is AEO replacing traditional SEO?</span>
                </h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed pl-4">
                  No. It acts as a complementary layer. Traditional SEO targets lexical indexing loops and human click-through paths on legacy digital maps, while AEO optimizes passage extraction accuracy within dense vector retrieval layers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="text-sm font-bold text-white font-soehne-breit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-aeo-purple"></span>
                  <span>Do I absolutely require structured schema for AEO?</span>
                </h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed pl-4">
                  Yes. While Schema.org data does not guarantee inclusion, nested JSON-LD graphs provide machines with unambiguous entity boundaries, linking business metrics directly to verified Wikidata identifiers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="text-sm font-bold text-white font-soehne-breit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>How long does a standard AEO implementation engagement take?</span>
                </h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed pl-4">
                  A baseline deployment via our Foundation Implementation package executes over a fixed four-week cycle, establishing your connected semantic structure.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="text-sm font-bold text-white font-soehne-breit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>What website components should be optimised first?</span>
                </h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed pl-4">
                  Priority should be allocated to your primary identity directory (<Link href="/brand-facts" className="text-aeo-cyan hover:underline">Brand Facts</Link>), service capability definitions, and core commercial fact listings before addressing deep informational archives.
                </p>
              </div>
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



