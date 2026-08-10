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
  AlertTriangle,
  TrendingDown,
  Target,
  Zap,
  Search,
  Cpu,
  Network,
  CheckSquare,
  Sparkles,
  Eye,
  Check,
  Award,
  Wrench,
  UserCheck,
  MapPin,
  XCircle,
  ExternalLink,
  Globe,
  Compass,
  BarChart3
} from 'lucide-react';

export const metadata = {
  title: "Optimising for Different AI Search Engines: Perplexity, ChatGPT, Google & Copilot | AEObility",
  description: "Learn how Perplexity, ChatGPT Search, Google AI Overviews, and Microsoft Copilot retrieve, interpret, and cite content, with documented controls and practical optimisation steps.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines",
  },
};

export default function OptimisingForDifferentAiSearchEnginesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines",
        "url": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines",
        "name": "Optimising for Different AI Search & Answer Engines | AEObility",
        "description": "How Perplexity, ChatGPT Search, Google AI Overviews, and Copilot retrieve, interpret, and cite content.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://aeobility.com.au/#website",
          "url": "https://aeobility.com.au",
          "name": "AEObility"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#breadcrumb"
        }
      },
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#article",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines"
        },
        "headline": "Optimising for Different AI Search & Answer Engines: How Perplexity, ChatGPT Search, Google AI Overviews, and Copilot Retrieve & Use Content",
        "description": "Comprehensive analysis of how major AI search engines retrieve, process, and cite web content, separating documented platform controls from observed patterns.",
        "inLanguage": "en-AU",
        "author": {
          "@type": "Organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        },
        "publisher": {
          "@type": "Organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au",
          "logo": {
            "@type": "ImageObject",
            "url": "https://aeobility.com.au/og-image.png"
          }
        },
        "mainEntityOfPage": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines",
        "about": [
          { "@type": "Thing", "name": "Answer Engine Optimisation" },
          { "@type": "Thing", "name": "Information Retrieval" },
          { "@type": "Thing", "name": "Perplexity Search" },
          { "@type": "Thing", "name": "ChatGPT Search" },
          { "@type": "Thing", "name": "Google AI Overviews" },
          { "@type": "Thing", "name": "Microsoft Copilot" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aeobility.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Knowledge Hub",
            "item": "https://aeobility.com.au/knowledge-hub"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Articles",
            "item": "https://aeobility.com.au/knowledge-hub/articles"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Optimising for Different AI Search Engines",
            "item": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AI-search retrieval?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI-search retrieval is the real-time process by which an AI engine fetches external web content to ground its generated responses. When a user submits a prompt, search-enabled AI interfaces execute one or more targeted search queries, fetch relevant web pages or passages, rerank those chunks for passage-level relevance, and synthesise a cited answer. Depending on the platform and query context, the final generated response may combine static model parameters (parametric knowledge) with dynamic web retrieval, structured Knowledge Graph nodes, and product-specific datasets."
            }
          },
          {
            "@type": "Question",
            "name": "Does being indexed guarantee an AI citation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Indexation is a basic eligibility prerequisite, not a guarantee of selection or citation. For example, Google explicitly states that web pages displayed as supporting links in AI Overviews and AI Mode must be indexed in Google Search, eligible for standard search snippets, and compliant with standard Google Search Essentials. Meeting these base indexability requirements makes a page eligible for retrieval, but the AI engine selects and cites passages based on real-time query intent, passage relevance, and entity authority."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need special schema markup for AI search?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. There is no special or separate 'AI-only' schema markup required for inclusion in Perplexity, ChatGPT Search, Google AI features, or Microsoft Copilot. While implementing standard Schema.org structured data (such as Organization, Article, or LocalBusiness) helps search engines parse entity attributes and relationships, schema markup cannot force an AI engine to retrieve, rank, or cite a page. Structured data should be used solely to accurately describe visible, rendered page content."
            }
          },
          {
            "@type": "Question",
            "name": "Is one optimisation strategy enough for every AI search engine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. There is no single, unified AI retrieval algorithm across platforms. Perplexity Search, ChatGPT Search, Google AI Overviews, and Microsoft Copilot each operate within distinct ecosystems with different user-agent controls, indexing requirements, and source-selection behaviours: Perplexity Search relies on PerplexityBot and real-time Perplexity-User agents, favouring concise, answer-first passage structures and explicit tabular evidence. ChatGPT Search utilises OAI-SearchBot for real-time retrieval, prioritising clean semantic HTML (<article>, <section>) and straightforward Q&A components. Google AI Overviews & AI Mode rely directly on the standard Google Search index and Knowledge Graph entity clarity, requiring compliance with standard Search Essentials. Microsoft Copilot integrates Bing search indexation, local schema feeds, and real-time protocol updates via IndexNow. While foundational practices (such as fast server response times, clean HTML structures, clear writing, and consistent business details) support cross-engine visibility, each platform requires targeted technical alignment."
            }
          }
        ]
      }
    ]
  };

  const misconceptions = [
    {
      myth: "Every AI answer comes from live web retrieval.",
      explanation: "Some answers rely mainly on model knowledge; search-enabled retrieval depends on the specific product, mode, user query, and context."
    },
    {
      myth: "Training data and a search index are the same thing.",
      explanation: "Training data influences stored parametric model knowledge, whereas search retrieval provides access to external, live web content."
    },
    {
      myth: "Indexation guarantees an AI citation.",
      explanation: "Indexation is generally a prerequisite eligibility condition, not a placement guarantee or citation assurance."
    },
    {
      myth: "Ranking number one guarantees inclusion.",
      explanation: "Traditional organic ranking supports discovery, but does not guarantee selection or citation in a generated AI answer."
    },
    {
      myth: "Schema guarantees AI visibility.",
      explanation: "Structured data aids machine interpretation when accurate, but cannot force retrieval, selection, or citation."
    },
    {
      myth: "A citation proves the answer is correct.",
      explanation: "Generated answers can still contain hallucinations or inaccuracies even when citing legitimate supporting sources."
    },
    {
      myth: "All answer engines use one algorithm.",
      explanation: "Each platform (Perplexity, OpenAI, Google, Microsoft) operates distinct crawler controls, indexes, context windows, and retrieval mechanics."
    },
    {
      myth: "ChatGPT, ChatGPT Search, and GPTBot are the same system.",
      explanation: "ChatGPT Search and model training involve separate product controls; OpenAI explicitly distinguishes OAI-SearchBot from GPTBot."
    },
    {
      myth: "Google requires special AI-only schema.",
      explanation: "Google officially confirms that AI Overviews and AI Mode use standard Search eligibility requirements with no additional AI-specific technical requirements."
    },
    {
      myth: "IndexNow guarantees instant Copilot visibility.",
      explanation: "IndexNow provides change notification signals to engines; it does not guarantee crawling, indexation, ranking, or inclusion."
    },
    {
      myth: "Longer pages are more likely to be cited.",
      explanation: "Relevance, structural clarity, supported claims, and machine accessibility matter significantly more than arbitrary word count."
    },
    {
      myth: "A citation automatically produces traffic or conversions.",
      explanation: "Visibility, citation placement, user click-through, trust, and conversion are separate stages in the user journey."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow Motifs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-aeo-cyan/5 rounded-full filter blur-[140px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-aeo-purple/5 rounded-full filter blur-[160px] -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full flex flex-col gap-12">

        {/* Hero Section */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Multi-Engine Retrieval Strategy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white font-soehne-breit">
            Optimising for Different AI Search &amp; Answer Engines: <br />
            <span className="text-gradient-aeo">How Perplexity, ChatGPT Search, Google AI Overviews, and Copilot Retrieve &amp; Use Content</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed font-serif max-w-3xl">
            A comprehensive technical breakdown of how major conversational AI platforms retrieve, interpret, and cite web content — separating documented platform controls from observed industry patterns.
          </p>

          {/* Author & Meta Bar */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-white/50 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 flex items-center justify-center text-aeo-cyan font-bold text-[10px]">
                AU
              </div>
              <span>Published by AEObility Strategy Team</span>
            </div>
            <span>•</span>
            <div>Reading Time: 10 mins</div>
            <span>•</span>
            <div>Audience: CMOs, Digital Leads &amp; SEO Directors</div>
          </div>

          {/* Hero Visual Graphic */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl mt-8">
            <Image
              src="/optimising-ai-search-engines-AEObility.png"
              alt="High-tech vector network architectural diagram showing multi-engine AI search retrieval pipeline across Perplexity, ChatGPT Search, Google AI Overviews, and Microsoft Copilot by AEObility in Perth, Australia."
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1000px"
            />
          </div>
        </header>

        {/* Section 1: Executive Summary */}
        <section id="executive-summary" className="scroll-mt-24 space-y-6">
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 shadow-2xl space-y-6 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-aeo-cyan">
              <Sparkles className="w-6 h-6" />
              <h2 className="text-xl font-bold tracking-tight text-white uppercase font-soehne-breit">Executive Summary &amp; Core Takeaway</h2>
            </div>
            
            <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed font-serif">
              AI-assisted search is introducing new retrieval and interpretation layers on top of established search infrastructure. When users query an AI assistant, responses combine stored model knowledge, web retrieval, structured entity graphs, and real-time contextual data rather than delivering a traditional list of ten blue links.
            </p>

            <blockquote className="p-6 rounded-2xl bg-black/50 border-l-4 border-aeo-cyan text-white/90 font-medium italic text-sm sm:text-base leading-relaxed">
              &quot;AI-assisted search does not operate through one shared ranking system. Each answer engine may retrieve, interpret, and cite content differently. The most durable cross-engine strategy is to create clear, accessible, evidence-backed content and maintain consistent business information across important web and local sources.&quot;
            </blockquote>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Fundamental Reality Checks:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                  <span>Search-enabled answers are not based entirely on live web retrieval.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                  <span>Model training data and a live search index are separate systems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                  <span>Search indexation is an eligibility condition, not an inclusion guarantee.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                  <span>Ranking #1 organically does not guarantee an AI answer citation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                  <span>Structured schema cannot force an AI engine to cite a page.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                  <span>A source citation does not prove every generated claim is factual.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: How AI Answer Engines Retrieve Information */}
        <section id="retrieval-mechanics" className="scroll-mt-24 space-y-8 border-t border-white/5 pt-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-aeo-purple uppercase tracking-widest">
              <Network className="w-4 h-4" />
              <span>Retrieval Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              How AI Answer Engines Retrieve Information
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              To understand how conversational engines process content, businesses must distinguish between two fundamental knowledge sources:
            </p>
          </div>

          {/* Parametric vs Grounded Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-aeo-cyan font-bold text-sm uppercase">
                <Cpu className="w-4 h-4" />
                <span>1. Parametric Knowledge</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-light font-serif leading-relaxed">
                Information encoded directly into the neural network weights during initial model pre-training and fine-tuning. This knowledge is static, immutable post-training, and does not require an active web search connection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-aeo-purple font-bold text-sm uppercase">
                <Globe className="w-4 h-4" />
                <span>2. Grounded / Retrieved Knowledge</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-light font-serif leading-relaxed">
                External information fetched in real time via search APIs, crawlers, or connected databases during query execution. Grounding grounds the LLM response in verified external documents to reduce hallucinations.
              </p>
            </div>
          </div>

          {/* 6-Step Pipeline Explanation */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-white font-soehne-breit">The Simplified 6-Stage AI Retrieval Pipeline</h3>
            <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
              While production architectures vary between commercial providers, most search-augmented AI systems follow a multi-stage Information Retrieval (IR) pipeline:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-aeo-cyan font-bold">STAGE 01</div>
                <div className="text-sm font-bold text-white">Query Interpretation</div>
                <p className="text-xs text-white/60 font-light">Deconstructs user prompt intent, expanding implicit acronyms and entities.</p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-aeo-cyan font-bold">STAGE 02</div>
                <div className="text-sm font-bold text-white">Query Fan-Out &amp; Search</div>
                <p className="text-xs text-white/60 font-light">Issues multiple sub-queries to internal indexes or search APIs simultaneously.</p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-aeo-cyan font-bold">STAGE 03</div>
                <div className="text-sm font-bold text-white">Passage Selection</div>
                <p className="text-xs text-white/60 font-light">Extracts candidate documents and splits them into discrete passage chunks.</p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-aeo-purple font-bold">STAGE 04</div>
                <div className="text-sm font-bold text-white">Relevance Reranking</div>
                <p className="text-xs text-white/60 font-light">Evaluates passage relevance using cross-encoder models to score candidate chunks.</p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-aeo-purple font-bold">STAGE 05</div>
                <div className="text-sm font-bold text-white">Synthesis &amp; Generation</div>
                <p className="text-xs text-white/60 font-light">Injects top-ranked passages into the LLM context window to generate the response.</p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-aeo-purple font-bold">STAGE 06</div>
                <div className="text-sm font-bold text-white">Citation Attribution</div>
                <p className="text-xs text-white/60 font-light">Maps generated assertions back to supporting source URLs where available.</p>
              </div>
            </div>
          </div>

          {/* Interactive Retrieval Pipeline Visualisation Box */}
          <div className="p-6 rounded-2xl bg-black/60 border border-aeo-cyan/20 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan flex items-center gap-2">
                <Network className="w-4 h-4" />
                Conceptual AI Retrieval &amp; Query Fan-Out Pipeline
              </h4>
              <span className="text-[10px] text-white/40 font-mono">Architecture Schema</span>
            </div>

            {/* Structured Visual Flow Diagram */}
            <div className="py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-medium w-full md:w-1/5">
                1. User Prompt
              </div>
              <ArrowRight className="w-4 h-4 text-aeo-cyan shrink-0 rotate-90 md:rotate-0" />
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-medium w-full md:w-1/4">
                2. Subtopic &amp; Entity Fan-Out
              </div>
              <ArrowRight className="w-4 h-4 text-aeo-cyan shrink-0 rotate-90 md:rotate-0" />
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-medium w-full md:w-1/4">
                3. Candidate Passages &amp; Reranking
              </div>
              <ArrowRight className="w-4 h-4 text-aeo-cyan shrink-0 rotate-90 md:rotate-0" />
              <div className="p-3 rounded-lg bg-white/5 border border-aeo-cyan/40 text-xs text-aeo-cyan font-bold w-full md:w-1/5 shadow-[0_0_15px_rgba(0,205,216,0.2)]">
                4. Generated Answer &amp; Citations
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
              <strong>Caveat:</strong> These are standard Information Retrieval (IR) concepts, not a confirmed blueprint of any specific provider&apos;s proprietary production stack. AI engines do not publicly disclose full ranking weights or internal reranking threshold scores.
            </div>
          </div>

          {/* Key Information Retrieval Terminology */}
          <div className="space-y-4 pt-2">
            <h3 className="text-base font-bold text-white font-soehne-breit">Core Technical IR Concepts Explained</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1">
                <span className="font-bold text-white">Sparse / Lexical Retrieval:</span>
                <p className="text-white/60 font-serif">Keyword-matching algorithms (e.g. BM25) that match exact tokens between query and document text.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1">
                <span className="font-bold text-white">Dense / Semantic Retrieval:</span>
                <p className="text-white/60 font-serif">Vector-embedding search that measures conceptual similarity using high-dimensional mathematical distance (e.g. cosine distance).</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1">
                <span className="font-bold text-white">Hybrid Retrieval:</span>
                <p className="text-white/60 font-serif">Combining lexical keyword precision with dense semantic vector retrieval to maximise recall and precision.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1">
                <span className="font-bold text-white">Query Fan-Out:</span>
                <p className="text-white/60 font-serif">Deconstructing a single complex prompt into multiple parallel search queries targeting sub-topics and entity facts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Common Misconceptions Matrix */}
        <section id="misconceptions" className="scroll-mt-24 space-y-6 border-t border-white/5 pt-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
              <AlertTriangle className="w-4 h-4" />
              <span>Fact vs Fiction</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              Common Misconceptions About AI Retrieval
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              Separating persistent industry myths from verifiable retrieval mechanics is essential for allocating digital marketing resources effectively.
            </p>
          </div>

          {/* Misconceptions Table */}
          <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/[0.01] shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm divide-y divide-white/10">
              <thead className="bg-white/5 text-white uppercase text-[11px] tracking-wider font-bold">
                <tr>
                  <th className="p-4 sm:p-5 w-2/5 text-amber-400">Common Misconception</th>
                  <th className="p-4 sm:p-5 text-aeo-cyan">Corrective Explanation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {misconceptions.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white/90 flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{item.myth}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-white/70 font-serif leading-relaxed">
                      {item.explanation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Detailed Platform Breakdown */}
        <section id="platform-breakdown" className="scroll-mt-24 space-y-12 border-t border-white/5 pt-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-aeo-cyan uppercase tracking-widest">
              <Compass className="w-4 h-4" />
              <span>Platform Deep Dives</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              Platform Breakdown: Controls, Patterns &amp; Recommendations
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              Each AI answer engine operates within distinct crawler environments, index permissions, and user experience paradigms. Below is a detailed breakdown of documented controls vs observed patterns for each engine.
            </p>
          </div>

          {/* Platform 1: Perplexity Search */}
          <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 font-bold">
                  PX
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-soehne-breit">Perplexity Search</h3>
                  <p className="text-xs text-white/50">Direct Answer &amp; Citation Engine</p>
                </div>
              </div>
              <a 
                href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:text-white transition-colors"
              >
                <span>Perplexity Crawler Docs</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider">1. Documented Controls</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>Documents <code className="text-teal-200">PerplexityBot</code> and <code className="text-teal-200">Perplexity-User</code> crawlers.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>Crawler access can be managed via <code className="text-teal-200">robots.txt</code> file directives.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>Crawler access does not guarantee prominent placement or source citation.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">2. Observed Patterns</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Direct answer-first introductory paragraphs are parsed cleanly.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Explicitly attributed evidence and data statistics support extraction.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Clean HTML tables help locate tabular data points.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-aeo-cyan uppercase tracking-wider">3. Editorial Recommendations</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Lead page sections with direct, complete answers.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Attribute statistics, claims, and expert quotes explicitly.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Avoid conversational introductory filler that delays the core answer.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Platform 2: ChatGPT Search */}
          <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-bold">
                  GPT
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-soehne-breit">ChatGPT Search</h3>
                  <p className="text-xs text-white/50">OpenAI Search &amp; Grounding Architecture</p>
                </div>
              </div>
              <a 
                href="https://developers.openai.com/api/docs/bots" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white transition-colors"
              >
                <span>OpenAI Bot Documentation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider">1. Documented Controls</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><code className="text-emerald-200">OAI-SearchBot</code> controls live ChatGPT Search inclusion.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><code className="text-emerald-200">GPTBot</code> is associated with offline model pre-training access.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Allowing <code className="text-emerald-200">OAI-SearchBot</code> does not guarantee inclusion or citation.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">2. Observed Patterns</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Descriptive H2/H3 headings improve passage extractability.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Q&amp;A phrasing reflecting genuine user intent aids context matching.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Heavy JS hydration creates parsing risks for lightweight scrapers.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-aeo-cyan uppercase tracking-wider">3. Editorial Recommendations</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Ensure core content renders natively in server-rendered HTML.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Use meaningful heading structures phrased as natural queries.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Do not rely on FAQPage schema as a guaranteed shortcut.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Platform 3: Google AI Overviews & AI Mode */}
          <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 font-bold">
                  G
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-soehne-breit">Google AI Overviews &amp; AI Mode</h3>
                  <p className="text-xs text-white/50">Google Search Generative Features</p>
                </div>
              </div>
              <a 
                href="https://developers.google.com/search/docs/appearance/ai-features" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-300 hover:text-white transition-colors"
              >
                <span>Google AI Search Documentation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-blue-300 uppercase tracking-wider">1. Documented Controls</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Pages must be indexed in Google Search.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Pages must be eligible for standard search snippet display.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Google explicitly confirms there are <strong>no additional AI-specific technical requirements</strong>.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">2. Observed Patterns</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Query fan-out targets related sub-intents across multiple sites.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Knowledge Graph entity accuracy supports machine interpretation.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Local intent signals influence location-sensitive prompts.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-aeo-cyan uppercase tracking-wider">3. Editorial Recommendations</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Strictly follow Google Search Essentials quality guidelines.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Ensure structured data matches actual visible page text.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Maintain consistent Google Business Profile location data.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Platform 4: Microsoft Copilot & Bing Experiences */}
          <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 font-bold">
                  MS
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-soehne-breit">Microsoft Copilot &amp; Bing Experiences</h3>
                  <p className="text-xs text-white/50">Consumer Web &amp; Enterprise Agent Ecosystem</p>
                </div>
              </div>
              <a 
                href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/generative-ai-public-websites" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-white transition-colors"
              >
                <span>Microsoft Copilot Guidance</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider">1. Documented Controls</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Copilot spans consumer web search, M365 Copilot, and Copilot Studio.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Public web experiences rely on Bing Search indexation.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>IndexNow provides change signals but does not guarantee inclusion.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">2. Observed Patterns</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Bing Webmaster Tools indexation correlates with consumer Copilot answers.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Bing Places listings supply location signals for proximity prompts.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Behaviour varies significantly depending on the specific Copilot tier.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-aeo-cyan uppercase tracking-wider">3. Editorial Recommendations</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Configure Bing Webmaster Tools &amp; active IndexNow submission.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Keep Bing Places and local business data current.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Specify the exact Copilot tier when auditing visibility.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Cross-Engine Comparison Matrix */}
        <section id="comparison-matrix" className="scroll-mt-24 space-y-6 border-t border-white/5 pt-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-aeo-cyan uppercase tracking-widest">
              <BarChart3 className="w-4 h-4" />
              <span>Engine Comparison</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              Cross-Engine Technical Comparison
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              Side-by-side comparison of the core access controls, documented rules, misconceptions, and practical focuses across major conversational platforms.
            </p>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/[0.01] shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm divide-y divide-white/10">
              <thead className="bg-white/5 text-white uppercase text-[11px] tracking-wider font-bold">
                <tr>
                  <th className="p-4 text-white">Dimension</th>
                  <th className="p-4 text-teal-300">Perplexity Search</th>
                  <th className="p-4 text-emerald-300">ChatGPT Search</th>
                  <th className="p-4 text-blue-300">Google AI Features</th>
                  <th className="p-4 text-purple-300">Microsoft Copilot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-serif text-white/80">
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-4 font-bold text-white font-sans">Relevant Access Control</td>
                  <td className="p-4">PerplexityBot &amp; Perplexity-User</td>
                  <td className="p-4">OAI-SearchBot</td>
                  <td className="p-4">Google Search indexability &amp; snippet eligibility</td>
                  <td className="p-4">Bing indexability &amp; product configuration</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-4 font-bold text-white font-sans">Documented Basis</td>
                  <td className="p-4">Crawler &amp; access documentation</td>
                  <td className="p-4">OpenAI crawler documentation</td>
                  <td className="p-4">Standard Search requirements</td>
                  <td className="p-4">Bing &amp; Copilot documentation</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-4 font-bold text-white font-sans">Main Misconception</td>
                  <td className="p-4">Real-time retrieval means every page is read</td>
                  <td className="p-4">GPTBot controls Search inclusion</td>
                  <td className="p-4">Special AI schema is required</td>
                  <td className="p-4">IndexNow guarantees instant inclusion</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-4 font-bold text-white font-sans">Practical Editorial Focus</td>
                  <td className="p-4">Clear answers &amp; supporting evidence</td>
                  <td className="p-4">Accessible, structured information</td>
                  <td className="p-4">Helpful content &amp; accurate entities</td>
                  <td className="p-4">Bing visibility &amp; accurate local data</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-4 font-bold text-white font-sans">Main Limitation</td>
                  <td className="p-4">Ranking logic is not publicly specified</td>
                  <td className="p-4">Crawler access does not guarantee prominence</td>
                  <td className="p-4">Feature appearance is query-dependent</td>
                  <td className="p-4">Behaviour varies by Copilot product</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Unified Optimisation Framework */}
        <section id="unified-framework" className="scroll-mt-24 space-y-8 border-t border-white/5 pt-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-aeo-purple uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Core Methodology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              The Unified Optimisation Framework (6 Principles)
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              Rather than attempting to hack platform-specific algorithms, businesses achieve durable multi-engine visibility by following six core engineering principles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h3 className="text-base font-bold text-white">Lead With Clarity</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
                Place the direct, complete answer near the very beginning of each document section. Avoid long introductory fluff that delays passage extraction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h3 className="text-base font-bold text-white">Use Semantic Hierarchy</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
                Structure documents with descriptive H1, H2, and H3 headings. Ensure each chunk or passage retains standalone context when extracted independently.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h3 className="text-base font-bold text-white">Provide Supported Information</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
                Ground claims with credible citations, expert quotations, empirical statistics, and transparent data methodology to improve source confidence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan flex items-center justify-center font-bold text-xs">
                  04
                </div>
                <h3 className="text-base font-bold text-white">Maintain Entity Consistency</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
                Keep business name, address, phone (NAP), service areas, products, and core claims strictly uniform across web directories and Knowledge Graphs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan flex items-center justify-center font-bold text-xs">
                  05
                </div>
                <h3 className="text-base font-bold text-white">Ensure Machine Readability</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
                Serve critical content in clean, native HTML text. Use descriptive internal links and accurate Schema.org markup that reflects visible content.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan flex items-center justify-center font-bold text-xs">
                  06
                </div>
                <h3 className="text-base font-bold text-white">Support Local Intent</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
                Maintain accurate Google Business Profile, Bing Places, map pins, and geographic microdata to support location-sensitive conversational queries.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Internal Linking & Measurement Framework */}
        <section id="measurement-framework" className="scroll-mt-24 space-y-8 border-t border-white/5 pt-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              Measurement Recommendations &amp; Editorial Guardrails
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              Treating &quot;AI visibility&quot; as a single rank metric is misleading. Organisations must measure separate stages across the retrieval lifecycle:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-xs font-bold text-aeo-cyan">1. Crawl &amp; Indexation</div>
              <p className="text-xs text-white/60 font-serif">Monitoring crawler access logs (<code className="text-white/80">OAI-SearchBot</code>, <code className="text-white/80">PerplexityBot</code>) and index status.</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-xs font-bold text-aeo-cyan">2. Entity Accuracy</div>
              <p className="text-xs text-white/60 font-serif">Verifying factual consistency across Knowledge Graph nodes and business profiles.</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-xs font-bold text-aeo-cyan">3. Answer Presence</div>
              <p className="text-xs text-white/60 font-serif">Tracking brand inclusion rates across target intent prompts in test environments.</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-xs font-bold text-aeo-cyan">4. Citation Quality</div>
              <p className="text-xs text-white/60 font-serif">Evaluating whether source links support positive, neutral, or accurate brand claims.</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-xs font-bold text-aeo-cyan">5. Citation-to-Click</div>
              <p className="text-xs text-white/60 font-serif">Measuring referral traffic sessions originating from AI answer engine domains.</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-xs font-bold text-aeo-cyan">6. Lead Enquiries</div>
              <p className="text-xs text-white/60 font-serif">Attributing assisted conversions and high-intent enquiries driven by AI search channels.</p>
            </div>
          </div>

          {/* Editorial Guardrail Box */}
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-amber-300">
              <ShieldCheck className="w-5 h-5" />
              <span>AEObility Editorial Guardrail</span>
            </div>
            <p className="text-xs sm:text-sm font-serif leading-relaxed text-amber-100/90">
              Do not promise ranking, inclusion, citation, traffic, or conversion outcomes from any single technical implementation. Describe recommendations as practices that improve clarity, accessibility, and eligibility rather than guaranteed platform-specific ranking factors.
            </p>
          </div>

          {/* Related Articles & Internal Links */}
          <div className="pt-6 border-t border-white/5 space-y-4">
            <h3 className="text-base font-bold text-white font-soehne-breit">Explore Related AEO &amp; GEO Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link 
                href="/services/ai-search-marketing"
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aeo-cyan/40 transition-all space-y-2 group block"
              >
                <div className="text-xs text-aeo-cyan font-bold flex items-center justify-between">
                  <span>Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors">AI Search Marketing</div>
                <p className="text-xs text-white/50 font-serif">Discover our full AEO sprint services.</p>
              </Link>

              <Link 
                href="/knowledge-hub/articles/positional-bias-in-retrieval"
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aeo-cyan/40 transition-all space-y-2 group block"
              >
                <div className="text-xs text-aeo-purple font-bold flex items-center justify-between">
                  <span>Technical Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors">Positional Bias in Retrieval</div>
                <p className="text-xs text-white/50 font-serif">Understanding lost-in-the-middle context bottlenecks.</p>
              </Link>

              <Link 
                href="/services/geo-marketing"
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aeo-cyan/40 transition-all space-y-2 group block"
              >
                <div className="text-xs text-aeo-cyan font-bold flex items-center justify-between">
                  <span>Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors">GEO Marketing</div>
                <p className="text-xs text-white/50 font-serif">Generative Engine Optimisation for Aussie brands.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Technical FAQs Section */}
        <section id="faq" className="scroll-mt-24 space-y-8 border-t border-white/5 pt-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-aeo-cyan uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Core Technical FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              Frequently Asked Questions: AI Search Retrieval
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              Clear, technical answers to common questions about multi-engine retrieval, indexation, schema markup, and cross-platform optimisation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                <span>What is AI-search retrieval?</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-serif leading-relaxed pl-7">
                AI-search retrieval is the real-time process by which an AI engine fetches external web content to ground its generated responses. When a user submits a prompt, search-enabled AI interfaces execute one or more targeted search queries, fetch relevant web pages or passages, rerank those chunks for passage-level relevance, and synthesise a cited answer.
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed pl-7 pt-1">
                Depending on the platform and query context, the final generated response may combine static model parameters (parametric knowledge) with dynamic web retrieval, structured Knowledge Graph nodes, and product-specific datasets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                <span>Does being indexed guarantee an AI citation?</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-serif leading-relaxed pl-7">
                No. Indexation is a basic eligibility prerequisite, not a guarantee of selection or citation.
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed pl-7 pt-1">
                For example, Google explicitly states that web pages displayed as supporting links in AI Overviews and AI Mode must be indexed in Google Search, eligible for standard search snippets, and compliant with standard Google Search Essentials. Meeting these base indexability requirements makes a page eligible for retrieval, but the AI engine selects and cites passages based on real-time query intent, passage relevance, and entity authority.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                <span>Do I need special schema markup for AI search?</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-serif leading-relaxed pl-7">
                No. There is no special or separate &quot;AI-only&quot; schema markup required for inclusion in Perplexity, ChatGPT Search, Google AI features, or Microsoft Copilot.
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed pl-7 pt-1">
                While implementing standard Schema.org structured data (such as Organization, Article, or LocalBusiness) helps search engines parse entity attributes and relationships, schema markup cannot force an AI engine to retrieve, rank, or cite a page. Structured data should be used solely to accurately describe visible, rendered page content.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                <span>Is one optimisation strategy enough for every AI search engine?</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-serif leading-relaxed pl-7">
                No. There is no single, unified AI retrieval algorithm across platforms.
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed pl-7 pt-1">
                Perplexity Search, ChatGPT Search, Google AI Overviews, and Microsoft Copilot each operate within distinct ecosystems with different user-agent controls, indexing requirements, and source-selection behaviours:
              </p>
              <ul className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed pl-12 space-y-2 pt-1 list-disc">
                <li>
                  <strong className="text-white">Perplexity Search:</strong> Relies on PerplexityBot and real-time Perplexity-User agents, favouring concise, answer-first passage structures and explicit tabular evidence.
                </li>
                <li>
                  <strong className="text-white">ChatGPT Search:</strong> Utilises OAI-SearchBot for real-time retrieval, prioritising clean semantic HTML (<code className="text-aeo-cyan">&lt;article&gt;</code>, <code className="text-aeo-cyan">&lt;section&gt;</code>) and straightforward Q&amp;A components.
                </li>
                <li>
                  <strong className="text-white">Google AI Overviews &amp; AI Mode:</strong> Rely directly on the standard Google Search index and Knowledge Graph entity clarity, requiring compliance with standard Search Essentials.
                </li>
                <li>
                  <strong className="text-white">Microsoft Copilot:</strong> Integrates Bing search indexation, local schema feeds, and real-time protocol updates via IndexNow.
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed pl-7 pt-2">
                While foundational practices: such as fast server response times, clean HTML structures, clear writing, and consistent business details: support cross-engine visibility, each platform requires targeted technical alignment.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="pt-8 border-t border-white/10 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-xs text-aeo-cyan font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Found. Get Chosen.</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-soehne-breit">
              Ready to Benchmark Your Multi-Engine AI Visibility?
            </h2>
            <p className="text-white/70 text-sm sm:text-base font-serif">
              Run our AI Visibility Telemetry audit to test how ChatGPT, Gemini, and Claude understand and cite your brand across core search intents.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/diagnostic"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-base transition-transform hover:scale-105 shadow-[0_0_25px_rgba(0,205,216,0.25)]"
            >
              Generate Your Free Visibility Audit
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/solutions/aeo-blueprint"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium text-base transition-all"
            >
              Explore 90-Day AI Success Blueprint
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
