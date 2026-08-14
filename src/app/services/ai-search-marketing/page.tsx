import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import FaqAccordion from '@/components/FaqAccordion';
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
  ChevronRight,
  HelpCircle,
  BookOpen,
  ArrowUpRight
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
  const faqs = [
    {
      q: "Is AI search marketing different from SEO?",
      a: "AI search marketing builds on good SEO — it doesn't replace it. SEO helps pages get discovered and ranked. AI search marketing makes your business easier for Search, Maps and AI systems to understand, interpret and use when answering customer questions. Google's guidance is simple: content still needs to be crawlable, helpful and clear."
    },
    {
      q: "Can anyone guarantee citations in ChatGPT, Gemini, Perplexity or Google AI?",
      a: "No. No business can guarantee how a third-party AI system will cite or recommend a brand. What AEObility can do is improve the clarity, consistency and corroboration of the signals those systems rely on — and measure visibility across a documented set of prompts."
    },
    {
      q: "How does AEObility measure AI-search visibility?",
      a: "We create a repeatable query set based on your services, locations and customer questions. We test it across agreed AI platforms and track whether your brand appears, is cited or is referenced over time. Every report includes the query list, dates, platforms and measurement rules so results stay transparent."
    },
    {
      q: "What does \"citation share\" mean?",
      a: "Citation share is the percentage of tracked AI responses where your business is named, cited or surfaced. It's not a universal metric — it's a documented measurement rule we apply consistently across your query set."
    },
    {
      q: "Does schema markup make a business appear in AI answers?",
      a: "Schema helps search engines understand structured facts about your business. It supports clarity, but it doesn't guarantee citations or recommendations. Google's guidance is clear: focus on helpful, crawlable content rather than chasing AI-specific shortcuts."
    },
    {
      q: "What is Retrieval-Augmented Generation (RAG) in simple terms?",
      a: "RAG is a method some AI systems use to pull in relevant information while forming an answer. For businesses, the takeaway is simple: publish clear, accurate, well-structured information that can be found and trusted."
    },
    {
      q: "What are \"atomic answer blocks\"?",
      a: "They're small, self-contained pieces of content that answer one customer question clearly. Think service explanations, pricing notes, eligibility details, location availability or short FAQs. They help AI systems understand your business without guessing."
    },
    {
      q: "Will AI search reduce traffic to my website?",
      a: "AI can change how people discover businesses. Some simple questions may be answered directly in the interface, while high-intent queries still drive strong visits. The goal is to appear for commercially meaningful questions and give people a clear reason to click through."
    },
    {
      q: "Which businesses benefit most from AI-search marketing?",
      a: "Businesses with clear services, multiple locations, strong proof, or complex customer questions usually benefit the most. It's less effective when a site lacks accurate business information or doesn't convert well once visitors arrive."
    },
    {
      q: "What does the $995 AEObility Blueprint include?",
      a: "The Blueprint gives you a deeper technical audit, an AI-readiness review, priority fixes, and a 90-day roadmap. It shows exactly how to improve visibility, understanding and selection across Search, Maps and AI — and the cost is fully credited if you continue with AEObility."
    },
    {
      q: "How long does AI-search work take to show results?",
      a: "The Blueprint creates the plan. Movement depends on your starting point, competition, crawl cycles and how AI platforms retrieve information at the time. Treat AI visibility as an ongoing improvement program, not a one-off ranking promise."
    },
    {
      q: "Do you need access to our website?",
      a: "For an assessment, basic read-only access to analytics, Search Console or CMS details is helpful but not essential. For implementation, access requirements are agreed upfront so it's clear what AEObility delivers and what your team or developer handles."
    }
  ];

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
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/ai-search-marketing#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
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
      desc: (
        <>
          AI search engines construct answers dynamically using <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-aeo-cyan underline hover:text-white transition-colors">Retrieval-Augmented Generation (RAG)</Link> rather than static index lookups. Structuring machine-readable schemas, maintaining signal freshness, and providing fast API-friendly data nodes ensure your content is retrieved live during prompt resolution.
        </>
      )
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-aeo-purple" />,
      title: "First-Party Entity Verification",
      desc: (
        <>
          LLMs require cross-platform consensus before citing a brand in answer outputs. We align your Name, Address, Phone (NAP), corporate identifiers, and JSON-LD sameAs schema across global knowledge graphs to establish unassailable <Link href="/knowledge-hub/articles/entity-authority-building" className="text-aeo-purple underline hover:text-white transition-colors font-medium">entity authority</Link>.
        </>
      )
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
      deliverable: (
        <>
          Prioritised content, entity, and <Link href="/solutions/aeo-sprint" className="text-aeo-cyan underline hover:text-white">schema backlog</Link>
        </>
      ),
      icon: <Layers className="w-4 h-4 text-aeo-purple" />
    },
    {
      phase: "Phase 3: Build Evidence",
      title: "Strengthen corroborating information",
      activities: ["Align multi-channel entity references", "Cross-verify NAP data across knowledge bases", "Format citation & reference nodes"],
      deliverable: (
        <>
          <Link href="/services/aeo/local-business" className="text-aeo-cyan underline hover:text-white">Citation/reference</Link> and content-distribution plan
        </>
      ),
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

  const relatedLinks = [
    {
      title: "All Digital Services Hub",
      category: "Services Hub",
      desc: "Explore our full suite of AI search, GEO, and technical optimisation capabilities.",
      url: "/services"
    },
    {
      title: "Generative Engine Optimisation (GEO)",
      category: "Sibling Service",
      desc: "Align your brand for Google AI Overviews and visual generative search outputs.",
      url: "/services/geo-marketing"
    },
    {
      title: "Local Business AEO",
      category: "Sibling Service",
      desc: "Dominate local map packs and conversational AI location queries.",
      url: "/services/aeo/local-business"
    },
    {
      title: "AEO vs SEO: The Definitive Guide",
      category: "Knowledge Hub",
      desc: "Understand the core paradigm shift between traditional rankings and AI citations.",
      url: "/knowledge-hub/articles/aeo-vs-seo"
    },
    {
      title: "Structured Data & Query Fan-Out",
      category: "Technical Guide",
      desc: "Technical blueprint for multi-clause prompt resolution and JSON-LD node structure.",
      url: "/knowledge-hub/articles/structured-data-query-fan-out"
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
                Make your business easier for AI search tools to understand, retrieve and reference. Deploy <Link href="/services/aeo" className="text-aeo-cyan underline hover:text-white transition-colors font-medium">generative search engine optimisation (AEO)</Link> strategies built for Gemini, Perplexity, and ChatGPT.
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
              Strong SEO remains the foundation. AI search adds new ways people discover and evaluate businesses by making the relationships between your services, locations, and proof easier to interpret.
            </p>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              By publishing clear <Link href="/knowledge-hub/articles/structured-data-query-fan-out" className="text-aeo-cyan underline hover:text-white transition-colors">atomic answer blocks</Link>, structuring machine-readable schemas, and maintaining consistent multi-channel citations, AEObility helps your brand stand out when Search, Maps, and AI platforms answer customer questions.
            </p>
          </div>

          {/* STEP 5: Strategic Directives Section */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-[11px] font-mono font-bold text-aeo-cyan uppercase tracking-widest">Foundational Methodology</h2>
              <h2 className="text-2xl font-bold">Strategic Directives for Generative Search</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                To position your organisation at the forefront of AI-driven discovery, our methodology centers on three foundational principles:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3 hover:border-white/10 transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                    <Zap className="w-5 h-5 text-aeo-cyan" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">Optimise for RAG Over Crawling</h3>
                  <div className="text-xs text-white/70 leading-relaxed font-light">
                    AI search engines construct answers dynamically using <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-aeo-cyan underline hover:text-white transition-colors">Retrieval-Augmented Generation (RAG)</Link> rather than static index lookups. Structuring machine-readable schemas, maintaining signal freshness, and providing clear content nodes help make your content easier for retrieval systems to find and reference when relevant.
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3 hover:border-white/10 transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                    <ShieldCheck className="w-5 h-5 text-aeo-purple" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">First-Party Entity Verification</h3>
                  <div className="text-xs text-white/70 leading-relaxed font-light">
                    Consistent information across your website and trusted third-party sources makes your business easier for AI systems to verify and recommend. We align your Name, Address, Phone (NAP), corporate identifiers, and JSON-LD sameAs schema across digital platforms to build clear <Link href="/knowledge-hub/articles/entity-authority-building" className="text-aeo-purple underline hover:text-white transition-colors font-medium">entity authority</Link>.
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3 hover:border-white/10 transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                    <Compass className="w-5 h-5 text-aeo-cyan" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">Conversational Intent Mapping</h3>
                  <div className="text-xs text-white/70 leading-relaxed font-light">
                    Users pose long-tail, multi-clause comparative queries (e.g., &apos;best B2B AI search agency in Australia vs traditional SEO&apos;). We map nuanced intent clusters into structured answer blocks that resolve complex prompts directly.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 6: Four-Phase Execution Framework (Outcomes & Deliverables) */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-[11px] font-mono font-bold text-aeo-cyan uppercase tracking-widest">Execution Roadmap</h2>
              <h2 className="text-2xl font-bold text-white">🛠️ The AEObility AI Search Execution Framework</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                A productised 4-phase methodology with defined buyer outcomes and concrete deliverables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors relative overflow-hidden group flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-aeo-cyan px-2.5 py-0.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20">
                      Phase 1: Diagnose
                    </span>
                    <div className="p-2 bg-white/5 rounded-lg">
                      <Search className="w-4 h-4 text-aeo-cyan" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">Establish baseline and prioritise gaps</h3>
                  
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">Key Activities:</span>
                    <ul className="space-y-1 text-xs text-white/70 font-light">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                        <span>Audit knowledge graph representation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                        <span>Identify entity misalignments &amp; semantic gaps</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                        <span>Review crawlability and schema validation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-aeo-cyan">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Deliverable: AI visibility and entity-readiness audit</span>
                </div>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors relative overflow-hidden group flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-aeo-cyan px-2.5 py-0.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20">
                      Phase 2: Clarify
                    </span>
                    <div className="p-2 bg-white/5 rounded-lg">
                      <Layers className="w-4 h-4 text-aeo-purple" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">Make priority pages easier to interpret</h3>
                  
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">Key Activities:</span>
                    <ul className="space-y-1 text-xs text-white/70 font-light">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                        <span>Structure atomic answer blocks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                        <span>Implement JSON-LD schema markup</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                        <span>Format modular Q&amp;A content nodes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-aeo-cyan">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Deliverable: Prioritised content, entity, and <Link href="/solutions/aeo-sprint" className="text-aeo-cyan underline hover:text-white">schema backlog</Link></span>
                </div>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors relative overflow-hidden group flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-aeo-cyan px-2.5 py-0.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20">
                      Phase 3: Build Evidence
                    </span>
                    <div className="p-2 bg-white/5 rounded-lg">
                      <Share2 className="w-4 h-4 text-aeo-cyan" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">Strengthen corroborating information</h3>
                  
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">Key Activities:</span>
                    <ul className="space-y-1 text-xs text-white/70 font-light">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                        <span>Strengthen relevant third-party references</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                        <span>Cross-verify NAP data across knowledge bases</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                        <span>Format citation &amp; reference nodes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-aeo-cyan">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Deliverable: <Link href="/services/aeo/local-business" className="text-aeo-cyan underline hover:text-white">Citation/reference</Link> and content-distribution plan</span>
                </div>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors relative overflow-hidden group flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-aeo-cyan px-2.5 py-0.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20">
                      Phase 4: Measure
                    </span>
                    <div className="p-2 bg-white/5 rounded-lg">
                      <BarChart3 className="w-4 h-4 text-aeo-purple" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">Track movements and refine priorities</h3>
                  
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">Key Activities:</span>
                    <ul className="space-y-1 text-xs text-white/70 font-light">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                        <span>Track visibility across a documented set of representative customer prompts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                        <span>Track citation frequency across ChatGPT, Gemini, and Perplexity</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                        <span>Sprint review &amp; strategy adjustment</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-aeo-cyan">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Deliverable: Query-set reporting and 90-day roadmap review</span>
                </div>
              </div>
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
                * Citation share represents the percentage of tracked prompts where Baby Bento was named, cited, or linked under our standardised testing methodology over 90 days across Gemini, ChatGPT, and Perplexity. Results are client-specific and not guaranteed.
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

          {/* STEP 8: Blueprint Scope & Inclusions Panel with Explicit Border Separation */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="p-8 bg-gradient-to-br from-aeo-purple/10 via-white/[0.02] to-aeo-cyan/15 border border-white/10 rounded-3xl space-y-6">
              <div className="text-center space-y-2 max-w-xl mx-auto">
                <h2 className="text-[11px] font-mono font-bold text-aeo-cyan uppercase tracking-widest">
                  Productised Assessment Scope
                </h2>
                <h2 className="text-2xl font-bold text-white">See What is Limiting Your AI-Search Visibility</h2>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Receive an AI-readiness evaluation and a prioritised 90-day roadmap.
                </p>
              </div>

              {/* 4 Inclusions List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-2">
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white">Priority Entity &amp; Technical Gaps</h3>
                    <p className="text-[11px] text-white/60 font-light mt-0.5">Identify schema errors, broken canonicals, and entity misalignments holding back retrieval.</p>
                  </div>
                </div>
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white">Query &amp; Content Opportunities</h3>
                    <p className="text-[11px] text-white/60 font-light mt-0.5">Map long-tail conversational prompts into atomic answer block templates.</p>
                  </div>
                </div>
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white">Recommended Implementation Sequence</h3>
                    <p className="text-[11px] text-white/60 font-light mt-0.5">Step-by-step technical backlog ordered by commercial effort vs impact.</p>
                  </div>
                </div>
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white">Practical Measurement Framework</h3>
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
          </div>

          {/* STEP 9: Structured Technical Capability Matrix Table */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-[11px] font-mono font-bold text-aeo-purple uppercase tracking-widest flex items-center gap-2">
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
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0" />
                      <span>Query Fan-Out Optimisation</span>
                    </td>
                    <td className="p-4 sm:p-5 text-white/70">Multi-intent semantic cluster mapping</td>
                    <td className="p-4 sm:p-5 text-aeo-cyan font-medium">Captures complex, multi-clause conversational search prompts.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0" />
                      <span>Atomic Answer Blocks</span>
                    </td>
                    <td className="p-4 sm:p-5 text-white/70">Self-contained, schema-backed data nodes</td>
                    <td className="p-4 sm:p-5 text-aeo-cyan font-medium">Designed to make answers easier to identify and use when relevant, improving coverage across tracked AI-search queries.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0" />
                      <span>Vector Space Alignment</span>
                    </td>
                    <td className="p-4 sm:p-5 text-white/70">Embeddings alignment across entity nodes</td>
                    <td className="p-4 sm:p-5 text-aeo-cyan font-medium">Improves citation and recommendation frequency across Gemini, ChatGPT, and Perplexity.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* STEP 10: Brand-Aligned Interactive FAQ Accordion Module */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-[11px] font-mono font-bold text-aeo-cyan uppercase tracking-widest flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </h2>
              <h2 className="text-2xl font-bold text-white">AI Search Marketing Insights &amp; FAQs</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                Clear, grounded answers to common questions about Answer Engine Optimisation, RAG models, and measurement.
              </p>
            </div>

            <FaqAccordion faqs={faqs} />

            {/* Conversion Bridge Panel */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-aeo-purple/10 via-white/[0.02] to-aeo-cyan/10 border border-aeo-cyan/20 rounded-2xl text-center space-y-4 shadow-xl">
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug max-w-xl mx-auto">
                Not sure whether AI search is relevant to your business?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light max-w-md mx-auto leading-relaxed">
                The AEObility Blueprint shows the highest-priority gaps and opportunities before you commit to anything.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Link
                  href="/solutions/aeo-blueprint"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_15px_rgba(0,205,216,0.2)] whitespace-nowrap"
                >
                  <span>Get the $995 AEObility Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  <span>Talk Through a Custom Strategy</span>
                </Link>
              </div>
            </div>
          </div>

          {/* STEP 11: Related Services & Knowledge Hub Grid */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-[11px] font-mono font-bold text-aeo-purple uppercase tracking-widest flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>SILO Architecture &amp; Knowledge Network</span>
              </h2>
              <h2 className="text-2xl font-bold text-white">Explore Related Services &amp; Deep Dives</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                Strengthen your digital entity authority across our connected service silos and technical guides.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.url}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3 hover:border-aeo-cyan/30 hover:bg-white/[0.04] transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-aeo-cyan px-2.5 py-0.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20">
                        {item.category}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-aeo-cyan transition-colors" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-snug group-hover:text-aeo-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-2 text-xs font-mono text-aeo-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore Route</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Actionable Plain-English AI Readiness Checklist */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">AI Readiness Quick Checklist</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex gap-2.5 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Publish clear, structured service explanations with transparent pricing and location details.</span>
              </li>
              <li className="flex gap-2.5 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Implement valid JSON-LD schema markup so search engines can verify core business facts.</span>
              </li>
              <li className="flex gap-2.5 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Maintain consistent Name, Address, Phone (NAP) details across your site and third-party profiles.</span>
              </li>
              <li className="flex gap-2.5 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Create self-contained atomic Q&amp;A blocks that directly answer your customers&apos; key questions.</span>
              </li>
            </ul>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
