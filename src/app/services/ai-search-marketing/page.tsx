import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  openGraph: {
    title: "AI Search Marketing & Strategy | AEObility",
    description: "Make your business easier for search and AI systems to identify, understand, and use.",
    url: "https://aeobility.com.au/services/ai-search-marketing",
    siteName: "AEObility",
    images: [
      {
        url: "https://aeobility.com.au/images/services/ai-search-marketing-visibility.jpg",
        width: 1600,
        height: 900,
        alt: "A graphic illustrating how verified business facts and trusted evidence support visibility in conversational AI search answers.",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Marketing & Strategy | AEObility",
    description: "Make your business easier for search and AI systems to identify, understand, and use.",
    images: ["https://aeobility.com.au/images/services/ai-search-marketing-visibility.jpg"],
  },
};

export default function AISearchMarketingPage() {
  const faqs = [
    {
      q: "Is AI search marketing different from SEO?",
      a: "AI search marketing builds on sound SEO; it does not replace it. SEO helps pages get discovered and ranked. AI search marketing makes your business details, services, evidence, and locations easier for Search, Maps, and AI systems to interpret and use when answering customer questions."
    },
    {
      q: "Can anyone guarantee citations in ChatGPT, Gemini, Perplexity, or Google AI?",
      a: "No — and no honest agency should promise that. AI platforms choose what to reference based on clarity and trust. Our work focuses on improving the clarity, consistency, and corroboration of the signals those systems rely on, and tracking visibility across a documented set of prompts."
    },
    {
      q: "How do you measure AI-search visibility and citation share?",
      a: "We establish a repeatable query set based on your services, locations, and customer questions. Citation share is calculated as the percentage of tracked responses where your business is named, cited, or linked across agreed platforms (Gemini, ChatGPT, Perplexity) under consistent reporting rules."
    },
    {
      q: "Does schema markup make a business appear in AI answers?",
      a: "Schema helps search engines understand structured facts about your business, such as locations, services, and credentials. It supports clarity and eligibility, but it is not a standalone shortcut to guaranteed citations."
    },
    {
      q: "What does the $995 AEObility Blueprint include?",
      a: "The Blueprint provides an entity audit, priority technical gaps, query-opportunity mapping, and a 90-day roadmap. If you proceed with ongoing implementation, the $995 is credited directly toward your package."
    },
    {
      q: "How long does AI-search work take to show results?",
      a: "The Blueprint establishes the plan. Measurable movement depends on crawl cycles, baseline site health, and how platforms update their indexes. We treat AI visibility as an ongoing program of clear signals rather than a one-off ranking promise."
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
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/services/ai-search-marketing",
        "url": "https://aeobility.com.au/services/ai-search-marketing",
        "name": "AI Search Marketing & Strategy",
        "description": "Make your business easier for AI search tools to understand, retrieve and reference.",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/images/services/ai-search-marketing-visibility.jpg",
          "width": 1600,
          "height": 900,
          "caption": "A clean visual showing how business information and evidence support AI search visibility."
        }
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
          AI search engines construct answers dynamically using <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-aeo-cyan underline hover:text-white transition-colors">Retrieval-Augmented Generation (RAG)</Link> rather than static index lookups. Structuring machine-readable schemas, maintaining signal freshness, and providing clear content nodes help make your content easier for retrieval systems to find and reference when relevant.
        </>
      )
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-aeo-purple" />,
      title: "First-Party Entity Verification",
      desc: (
        <>
          Consistent information across your website and trusted third-party sources makes your business easier for AI systems to verify and recommend. We align your Name, Address, Phone (NAP), corporate identifiers, and JSON-LD sameAs schema across digital platforms to build clear <Link href="/knowledge-hub/articles/entity-authority-building" className="text-aeo-purple underline hover:text-white transition-colors font-medium">entity authority</Link>.
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
      activities: ["Strengthen relevant references and supporting content", "Cross-verify NAP data across knowledge bases", "Format citation & reference nodes"],
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
      activities: ["Track visibility across a documented set of representative customer prompts", "Track citation frequency across ChatGPT, Gemini, and Perplexity", "Sprint review & strategy adjustment"],
      deliverable: "Query-set reporting and 90-day roadmap review",
      icon: <BarChart3 className="w-4 h-4 text-aeo-purple" />
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
      category: "Related Service",
      desc: "Align your brand for Google AI Overviews and visual generative search outputs.",
      url: "/services/geo-marketing"
    },
    {
      title: "Local Business AEO",
      category: "Related Service",
      desc: "Dominate local map packs and conversational AI location queries.",
      url: "/services/aeo/local-business"
    },
    {
      title: "AEO vs SEO: The Definitive Guide",
      category: "Helpful Guide",
      desc: "Understand the core paradigm shift between traditional rankings and AI citations.",
      url: "/knowledge-hub/articles/aeo-vs-seo"
    },
    {
      title: "Structured Data & Query Fan-Out",
      category: "Helpful Guide",
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
                  Help customers find and understand your business in AI search
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

            {/* Hero Featured Editorial Illustration */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02] p-2 mt-4">
              <Image
                src="/images/services/ai-search-marketing-visibility-australia.jpg"
                alt="A graphic illustrating how verified business facts and trusted evidence support visibility in conversational AI search answers."
                width={1600}
                height={900}
                priority
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>

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

          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <h2 className="text-[11px] font-mono font-bold text-aeo-cyan uppercase tracking-widest">
                Visual Retrieval Mechanism
              </h2>
              <h2 className="text-2xl font-bold text-white">AI Search Visibility &amp; Retrieval Flow</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                How clear business information travels from your website to search and AI answers.
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

          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-bold">Why Generative Search Engine Optimisation Matters</h2>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Strong SEO remains the foundation. AI search adds new ways people discover and evaluate businesses by making the relationships between your services, locations, and proof easier to interpret.
            </p>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              By publishing clear <Link href="/knowledge-hub/articles/structured-data-query-fan-out" className="text-aeo-cyan underline hover:text-white transition-colors">atomic answer blocks</Link>, structuring machine-readable schemas, and maintaining consistent multi-channel citations, AEObility helps your brand stand out when Search, Maps, and AI platforms answer customer questions.
            </p>
          </div>

          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-[11px] font-mono font-bold text-aeo-cyan uppercase tracking-widest">Foundational Methodology</h2>
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
                    <div className="text-xs text-white/70 leading-relaxed font-light">
                      {directive.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-[11px] font-mono font-bold text-aeo-cyan uppercase tracking-widest">Execution Roadmap</h2>
              <h2 className="text-2xl font-bold text-white">🛠️ The AEObility AI Search Execution Framework</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                A straightforward 4-step plan with clear milestones and practical deliverables.
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
                        {phase.activities.map((act, i) => (
                          <li key={i} className="flex items-center gap-2">
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

          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-[11px] font-mono font-bold text-aeo-purple uppercase tracking-widest flex items-center gap-2">
                <Table className="w-4 h-4" />
                <span>Technical Specifications</span>
              </h2>
              <h2 className="text-2xl font-bold text-white">Structured Technical Capability Matrix</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                How our structured-content and AEO work connects technical improvements to practical outcomes.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.01]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white font-bold">
                    <th className="p-4 sm:p-5 w-1/3">Capability</th>
                    <th className="p-4 sm:p-5 w-1/3">Mechanism</th>
                    <th className="p-4 sm:p-5 w-1/3">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-light text-white/80">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white">Query Fan-Out</td>
                    <td className="p-4 sm:p-5">Semantic clustering</td>
                    <td className="p-4 sm:p-5 text-aeo-cyan">Captures complex search prompts.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white">Atomic Blocks</td>
                    <td className="p-4 sm:p-5">Schema-backed data nodes</td>
                    <td className="p-4 sm:p-5 text-aeo-cyan">Direct extraction by LLM pipelines.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white">Vector Alignment</td>
                    <td className="p-4 sm:p-5">Embeddings sync</td>
                    <td className="p-4 sm:p-5 text-aeo-cyan">Increases citation frequency.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

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

            <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-2">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group py-5" open={idx === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-sm text-white focus:outline-none focus:ring-1 focus:ring-aeo-cyan rounded-lg p-1">
                    <span className="flex items-center gap-2.5 leading-snug">
                      <HelpCircle className="w-4 h-4 text-aeo-cyan shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <span aria-hidden="true" className="transition-transform group-open:rotate-45 text-aeo-cyan text-xl font-mono shrink-0">+</span>
                  </summary>
                  <div className="pt-3 text-xs sm:text-sm leading-relaxed text-white/70 font-light pl-7">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

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
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
