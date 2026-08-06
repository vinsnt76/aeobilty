import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Sparkles, ArrowRight, ShieldCheck, Layers, Cpu, CheckCircle2, PhoneCall, FileText, ChevronDown, Network, Database } from 'lucide-react';

export const metadata = {
  title: "Best AEO Strategies: How to Make Your Business AI-Readable — AEObility",
  description: "Discover the best AEO strategies to make your business AI-readable. Actionable procedures for structured data, atomic answer blocks, entity authority, and RAG retrieval optimisation.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/procedures",
  },
};

export default function AEOProceduresPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/services/aeo/procedures",
        "name": "Best AEO Strategies: How to Make Your Business AI-Readable",
        "description": "AEO strategies for making your business machine-readable using semantic boundaries, atomic answer blocks, structured schema, internal linking, co-citations, and multimodal optimisation.",
        "primaryImageOfPage": {
          "@id": "https://aeobility.com.au/best-seo-strategies-for-ai-search-marketing_AEObility.webp"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/services/aeo/procedures#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/services/aeo/procedures#breadcrumb",
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
            "name": "AEO Services",
            "item": "https://aeobility.com.au/services/aeo"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AEO Procedures",
            "item": "https://aeobility.com.au/services/aeo/procedures"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#org",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "description": "Optimising Australian small businesses for the future of search — discoverable, understandable, and recommended across maps, search, and generative AI corridors.",
        "logo": "https://aeobility.com.au/aeobility-logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU"
        }
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/aeo",
        "name": "AEO Strategy & Implementation",
        "provider": {
          "@id": "https://aeobility.com.au/#org"
        },
        "serviceType": "Answer Engine Optimisation",
        "areaServed": "AU",
        "description": "Refactoring digital content so AI systems can parse, chunk, and cite your business with high confidence.",
        "offers": {
          "@type": "Offer",
          "url": "https://aeobility.com.au/services/aeo/procedures",
          "price": "0",
          "priceCurrency": "AUD",
          "description": "Free AI Visibility Scan and AEO audit."
        }
      },
      {
        "@type": "HowTo",
        "@id": "https://aeobility.com.au/services/aeo/procedures#howto",
        "name": "Best AEO Strategies: How to Make Your Business AI-Readable",
        "description": "A technical step-by-step guide detailing the best Answer Engine Optimisation (AEO) strategies for structuring content to be easily parsed, chunked, and cited by RAG pipelines and Large Language Models (LLMs).",
        "totalTime": "PT30M",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Establish Semantic Boundaries with Question-Based Headings",
            "text": "Structure content using H2 and H3 headings phrased as natural-language questions (e.g., 'What are the best AEO strategies?'). This creates explicit, machine-readable conceptual boundaries that prevent context dilution when RAG scrapers chunk documents.",
            "url": "https://aeobility.com.au/services/aeo/procedures#strategy1"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Write Standalone, Atomic Answer Blocks",
            "text": "Keep core answer blocks within a tight sweet spot of 90 to 120 tokens. Lead with a direct 1-2 sentence definition immediately beneath the heading before providing supporting technical details.",
            "url": "https://aeobility.com.au/services/aeo/procedures#strategy2"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Implement Relationship-Rich Internal Linking",
            "text": "Upgrade internal link anchor text to explicitly declare semantic entity relationships (e.g., 'how adaptive semantic chunking resolves LLM context limitations') rather than generic phrases like 'click here'.",
            "url": "https://aeobility.com.au/services/aeo/procedures#strategy3"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Deploy Structured Schema & Entity Markup (JSON-LD)",
            "text": "Implement nested JSON-LD schema (FAQPage, HowTo, Organization, LocalBusiness) to provide deterministic entity graphs that AI scrapers parse without guessing context.",
            "url": "https://aeobility.com.au/services/aeo/procedures#strategy4"
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Build Off-Page Entity Authority & Co-Citations",
            "text": "Strengthen off-page AEO signals by aligning brand entity profiles across Wikidata, Google Knowledge Graph, industry registries, and authoritative media publications.",
            "url": "https://aeobility.com.au/services/aeo/procedures#strategy5"
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Optimise for Multimodal & Conversational Search",
            "text": "Format content for conversational assistants and vision models (GPT-4o, Gemini) by using conversational phrasing, voice search patterns, and descriptive media metadata.",
            "url": "https://aeobility.com.au/services/aeo/procedures#strategy6"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/aeo/procedures#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AEO & how does it work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Answer Engine Optimisation refactors content so AI systems can parse, understand, and cite a business directly."
            }
          },
          {
            "@type": "Question",
            "name": "AEO vs SEO: What is the generative shift?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AEO focuses on entity salience, vector proximity, and structured schema, whereas SEO focuses on keyword-based ranking."
            }
          },
          {
            "@type": "Question",
            "name": "What stops your business from showing up?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Weak entity signals, inconsistent NAP citations, vague headings, and lack of structured schema reduce AI visibility."
            }
          },
          {
            "@type": "Question",
            "name": "How much does AEO cost & what do I get?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AEO sprints include atomic answer blocks, schema graphs, entity salience optimisation, and a 90-day roadmap."
            }
          },
          {
            "@type": "Question",
            "name": "How does AEO improve local business visibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Consistent NAP citations, structured schema, and entity co-citations strengthen local visibility across maps and AI search."
            }
          },
          {
            "@type": "Question",
            "name": "How does AEO support AI Semantic SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Semantic boundaries, atomic blocks, and relationship-rich internal linking create machine-readable entity networks."
            }
          },
          {
            "@type": "Question",
            "name": "What is an AI Search Marketing Strategy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI search strategy optimises content for conversational, multimodal, and generative search systems."
            }
          }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/best-seo-strategies-for-ai-search-marketing_AEObility.webp",
        "contentUrl": "https://aeobility.com.au/best-seo-strategies-for-ai-search-marketing_AEObility.webp",
        "name": "Best AEO Strategies for AI Search Marketing",
        "description": "Architectural diagram depicting Answer Engine Optimisation, RAG vector retrieval, structured schema, and AI search marketing by AEObility.",
        "uploadDate": "2026-08-06",
        "creator": {
          "@id": "https://aeobility.com.au/#org"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://aeobility.com.au/services/aeo/procedures#faq-knowledge-graph",
        "name": "AEO FAQ Knowledge Graph",
        "description": "Structured FAQ Knowledge Graph mapping parent, child, and sibling entity relationships across Answer Engine Optimisation framework nodes.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "What is AEO & how does it work?",
            "url": "https://aeobility.com.au/services/aeo/definition",
            "description": "Root Parent FAQ Node establishing foundational Answer Engine Optimisation concepts."
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AEO vs SEO: The Generative Shift",
            "url": "https://aeobility.com.au/services/aeo/comparison",
            "description": "Child FAQ Node declaring structural differences between SEO link-building and AEO vector retrieval."
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "What stops your business from showing up?",
            "url": "https://aeobility.com.au/services/aeo/constraints",
            "description": "Child FAQ Node defining trust thresholds, entity ambiguity, and positional bias blockers."
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "AEO Pricing & Sprint Deliverables",
            "url": "https://aeobility.com.au/services/aeo/costs-timing",
            "description": "Child FAQ Node detailing implementation pricing, milestones, and schema deliverables."
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Shopify AEO Services",
            "url": "https://aeobility.com.au/services/aeo/shopify",
            "description": "Sibling FAQ Node feeding ecommerce entity authority back to core AEO framework."
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Local Business Visibility & Maps",
            "url": "https://aeobility.com.au/services/aeo/local-business",
            "description": "Sibling FAQ Node feeding geographic NAP and local map authority back to core AEO framework."
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "AI Semantic SEO Framework",
            "url": "https://aeobility.com.au/knowledge-hub/semantic-seo",
            "description": "Child FAQ Node mapping adaptive semantic chunking and knowledge lattice graphs."
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "AI Search Marketing Strategy",
            "url": "https://aeobility.com.au/services/ai-search-marketing",
            "description": "Sibling FAQ Node connecting multimodal search optimization to broader AI marketing strategy."
          }
        ]
      }
    ]
  };

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
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Navigation Links & Entity Map */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl sticky top-28">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">AEO Service Architecture</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/services/aeo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                Hub Overview
              </Link>
              <Link href="/services/aeo/definition" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                1. What is AEO and why does it matter?
              </Link>
              <Link href="/services/aeo/comparison" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                2. Is AEO just SEO with a new name?
              </Link>
              <Link href="/services/aeo/procedures" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                3. Best AEO Strategies & Procedures
              </Link>
              <Link href="/services/aeo/constraints" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                4. What stops my business from showing up?
              </Link>
              <Link href="/services/aeo/costs-timing" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                5. How much does AEO cost & what do I get?
              </Link>
              <Link href="/services/aeo/shopify" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                6. Shopify AEO Services
              </Link>
              <Link href="/services/aeo/local-business" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                7. Local Business Visibility
              </Link>
            </nav>

            <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/40 block">Free Technical Audit</span>
              <p className="text-xs text-white/60 leading-relaxed">Want us to audit your website against these 6 AEO strategies?</p>
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-aeo-cyan hover:underline pt-1"
              >
                <span>Run Free AI Visibility Scan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-8">
          {/* Hero Banner Image */}
          <div className="relative w-full h-48 sm:h-64 md:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,205,216,0.12)] group">
            <Image
              src="/best-seo-strategies-for-ai-search-marketing_AEObility.webp"
              alt="Best AEO strategies architecture diagram illustrating Answer Engine Optimisation, RAG vector retrieval, structured JSON-LD schema, and AI search marketing for Australian businesses by AEObility"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>

          {/* Header Section */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20 text-aeo-cyan text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROVEN AEO PLAYBOOK</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Best AEO Strategies: <span className="text-gradient-aeo">How to Make Your Business AI-Readable</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              Answer Engine Optimisation (AEO) requires refactoring digital content so Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) engines can parse, chunk, and cite your business with high confidence. Explore the 6 essential AEO strategies below.
            </p>

            {/* Elevated Primary Hero CTA Block */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-aeo-cyan/15 to-aeo-purple/15 border border-aeo-cyan/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-white block">Test Your Site Signals</span>
                <span className="text-[11px] text-white/70 block">Instant AI visibility check for your business. No email required.</span>
              </div>
              <Link
                href="/diagnostic"
                className="px-5 py-2.5 rounded-lg bg-aeo-cyan hover:bg-white text-black text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-md flex items-center gap-1.5"
              >
                <span>Run Free AI Visibility Scan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 1. Visually Elevated Atomic Summary (Top of Page) */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-aeo-cyan/10 via-black to-aeo-purple/10 border border-aeo-cyan/40 shadow-[0_0_30px_rgba(0,205,216,0.1)] space-y-3 font-sans">
            <div className="flex items-center gap-2 text-aeo-cyan font-mono text-xs uppercase font-bold tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Atomic Summary: What Are the Best AEO Strategies?</span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
              The best AEO strategies transform legacy promotional copy into machine-readable entity networks. Key tactics include: <strong>(1) Question-Based Headings</strong> for topic boundaries, <strong>(2) 90–120 Token Atomic Answer Blocks</strong> for direct RAG snippet extractions, <strong>(3) Relationship-Rich Internal Linking</strong> to declare entity connections, <strong>(4) Nested JSON-LD Schema Markup</strong> for structured data indexing, <strong>(5) Off-Page Entity Co-Citations</strong> on authoritative registries, and <strong>(6) Multimodal Conversational Tuning</strong> for voice and vision search systems.
            </p>
          </div>

          {/* 2. Detailed Strategy Playbook Grid with Visual Separators */}
          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-bold text-white tracking-tight border-b border-white/10 pb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-aeo-cyan" />
              <span>The 6 Core AEO Optimisation Strategies</span>
            </h2>

            {/* Strategy 1 */}
            <div id="strategy1" className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-aeo-cyan font-bold font-mono text-lg px-2.5 py-1 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-lg">01</span>
                <h3 className="text-white font-bold text-lg">Strategy 1: Establish Semantic Boundaries with Question-Based Headings</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Structure content using H2 and H3 headings phrased as natural-language questions (e.g., <em>&quot;What is AEO in digital marketing?&quot;</em>). Modern RAG chunking algorithms rely on structural headers to split documents into discrete vectors. Question-based headings define explicit topic boundaries, preventing context leakage between adjacent paragraphs.
              </p>

              {/* Visual Micro-Diagram 1: Semantic Boundaries */}
              <div className="bg-black/80 border border-white/10 rounded-xl p-4 space-y-3 text-xs font-mono">
                <div className="text-[10px] text-aeo-cyan font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Network className="w-3.5 h-3.5" />
                  <span>Visual Micro-Diagram: RAG Topic Boundary Chunking</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-sans">
                  <div className="p-3 bg-zinc-950 rounded border border-rose-500/30">
                    <span className="text-[10px] font-mono text-rose-400 font-bold block mb-1">❌ Generic Headers (Vague Vector)</span>
                    <p className="text-white/60 text-xs">&lt;h3&gt;Benefits&lt;/h3&gt; → Scraper chunks paragraph with surrounding unrelated noise, causing context dilution.</p>
                  </div>
                  <div className="p-3 bg-zinc-950 rounded border border-emerald-500/30">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold block mb-1">✅ Question Headers (Isolated Boundary)</span>
                    <p className="text-white/60 text-xs">&lt;h3&gt;What are the benefits of AEO?&lt;/h3&gt; → Scraper locks 100% focused vector chunk directly into RAG index.</p>
                  </div>
                </div>
              </div>

              {/* Internal Link 1 -> Strategy 2 */}
              <div className="pt-2">
                <Link href="#strategy2" className="inline-flex items-center gap-1.5 text-xs font-semibold text-aeo-cyan hover:underline">
                  <span>Explore how semantic boundaries improve atomic answer extraction</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Native Interactive Accordion Detail */}
              <details className="group border border-white/10 rounded-xl p-4 bg-black/40 cursor-pointer">
                <summary className="font-semibold text-xs text-aeo-cyan flex items-center justify-between list-none">
                  <span>Deep Technical Implementation Detail</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-3 text-xs text-white/70 space-y-2 border-t border-white/5 mt-3 font-sans">
                  <p>When RAG scrapers evaluate a webpage, document chunkers look for structural header elements (`&lt;h2&gt;`, `&lt;h3&gt;`) as token boundary markers. Standard promotional subheadings like &quot;Our Process&quot; produce low-similarity vector embeddings. In contrast, question-based headings map directly to user search queries, maximising vector similarity scores in dense retrieval pipelines.</p>
                </div>
              </details>
            </div>

            {/* Gradient Separator */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent my-1" />

            {/* Strategy 2 */}
            <div id="strategy2" className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-aeo-purple font-bold font-mono text-lg px-2.5 py-1 bg-aeo-purple/10 border border-aeo-purple/20 rounded-lg">02</span>
                <h3 className="text-white font-bold text-lg">Strategy 2: Write Standalone, Atomic Answer Blocks</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Keep primary answer blocks within a tight sweet spot of <strong>90 to 120 tokens</strong> (max 250 words). Lead with a concise, direct 1–2 sentence definition immediately beneath the heading before expanding into supporting technical points. This ensures generative LLMs extract your precise answer without losing critical qualifications.
              </p>

              {/* Visual Micro-Diagram 2: Atomic Block Anatomy */}
              <div className="bg-black/80 border border-white/10 rounded-xl p-4 space-y-2 text-xs font-mono">
                <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  <span>Atomic Block Anatomy (90–120 Tokens)</span>
                </div>
                <div className="text-zinc-200 bg-zinc-950 p-3 rounded border border-white/10 leading-relaxed font-sans text-xs">
                  &quot;Answer Engine Optimisation (AEO) is the technical discipline of refactoring web content so AI systems like ChatGPT, Perplexity, and Google Search AI Overviews can parse, understand, and cite a business directly. Unlike legacy SEO, AEO focuses on entity salience, vector proximity, and structured JSON-LD schema.&quot;
                </div>
              </div>

              {/* Internal Link 2 -> Strategy 4 */}
              <div className="pt-2">
                <Link href="#strategy4" className="inline-flex items-center gap-1.5 text-xs font-semibold text-aeo-purple hover:underline">
                  <span>See why atomic answers strengthen JSON-LD entity declarations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <details className="group border border-white/10 rounded-xl p-4 bg-black/40 cursor-pointer">
                <summary className="font-semibold text-xs text-aeo-purple flex items-center justify-between list-none">
                  <span>Deep Technical Implementation Detail</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-3 text-xs text-white/70 space-y-2 border-t border-white/5 mt-3 font-sans">
                  <p>Positional bias in LLMs means models give higher attention weights to the beginning of document chunks. By putting direct definitions immediately under headers, the model ingests the core fact before token context windows decay.</p>
                </div>
              </details>
            </div>

            {/* Gradient Separator */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent my-1" />

            {/* Strategy 3 */}
            <div id="strategy3" className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-aeo-cyan font-bold font-mono text-lg px-2.5 py-1 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-lg">03</span>
                <h3 className="text-white font-bold text-lg">Strategy 3: Implement Relationship-Rich Internal Linking</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Replace generic internal link anchors (like <em>&quot;click here&quot;</em> or <em>&quot;read more&quot;</em>) with descriptive phrases that explicitly declare entity relationships. LLM crawlers follow internal links to construct knowledge graphs; relationship-rich anchor text provides semantic context that elevates your domain authority.
              </p>

              {/* Visual Micro-Diagram 3: Internal Link Graph */}
              <div className="bg-black/80 border border-white/10 rounded-xl p-4 space-y-2 text-xs font-mono">
                <div className="text-[10px] text-rose-400 font-bold uppercase tracking-wider">❌ Generic Anchor Text (No Entity Relation)</div>
                <div className="text-zinc-400 bg-zinc-950 p-2 rounded border border-white/5">
                  To learn about chunking, &lt;a href=&quot;/services/aeo/comparison&quot;&gt;click here&lt;/a&gt;.
                </div>
                <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider pt-2">✅ Relationship-Rich Anchor Text (Explicit Entity Relation)</div>
                <div className="text-emerald-300 bg-zinc-950 p-2 rounded border border-emerald-500/20">
                  <Link href="/services/aeo/comparison" className="underline hover:text-white">
                    See how entity relationships shape AEO vs SEO in generative search
                  </Link>
                </div>
              </div>

              {/* Internal Link 3 -> AEO vs SEO */}
              <div className="pt-2">
                <Link href="/services/aeo/comparison" className="inline-flex items-center gap-1.5 text-xs font-semibold text-aeo-cyan hover:underline">
                  <span>See how entity relationships shape AEO vs SEO in generative search</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Single Mid-Page Commercial CTA (Between Strategy 3 & Strategy 4) */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-aeo-purple/20 via-black to-aeo-cyan/20 border border-aeo-purple/40 shadow-[0_0_30px_rgba(189,0,255,0.15)] flex flex-col sm:flex-row items-center justify-between gap-6 my-4">
              <div className="space-y-1 text-left max-w-lg">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-aeo-cyan bg-aeo-cyan/10 px-2.5 py-0.5 rounded border border-aeo-cyan/25">
                  <Sparkles className="w-3 h-3" />
                  <span>Commercial Implementation</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">Ready to Refactor Your Business Content for AI Search Systems?</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Get a transparent quote and a 90-day AEO roadmap.
                </p>
              </div>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-aeo-purple hover:opacity-90 text-white text-xs font-bold uppercase tracking-wider transition-all text-center shadow-lg border-0 shrink-0 flex items-center justify-center gap-1.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Strategy 4 */}
            <div id="strategy4" className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-aeo-purple font-bold font-mono text-lg px-2.5 py-1 bg-aeo-purple/10 border border-aeo-purple/20 rounded-lg">04</span>
                <h3 className="text-white font-bold text-lg">Strategy 4: Deploy Structured Schema & Entity Markup (JSON-LD)</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Implement rich, nested JSON-LD schema markup (`Organization`, `LocalBusiness`, `FAQPage`, `HowTo`, `Service`). Schema acts as an explicit data dictionary for scrapers, eliminating ambiguity around business entities, geographic service areas, and product offerings.
              </p>

              {/* Visual Micro-Diagram 4: Schema Node Graph */}
              <div className="bg-black/80 border border-white/10 rounded-xl p-4 space-y-2 text-xs font-mono overflow-x-auto">
                <div className="text-[10px] text-aeo-cyan font-bold uppercase tracking-wider">Nested JSON-LD Schema Snippet</div>
                <pre className="text-zinc-300 bg-zinc-950 p-3 rounded border border-white/10 text-[11px] leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Best AEO Strategies & Implementation",
  "provider": {
    "@type": "Organisation",
    "name": "AEObility",
    "url": "https://aeobility.com.au"
  },
  "areaServed": "AU"
}`}
                </pre>
              </div>

              {/* Internal Link 4 -> Costs & Pricing */}
              <div className="pt-2">
                <Link href="/services/aeo/costs-timing" className="inline-flex items-center gap-1.5 text-xs font-semibold text-aeo-purple hover:underline">
                  <span>Structured schema is included in all AEO sprint deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Gradient Separator */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent my-1" />

            {/* Strategy 5 */}
            <div id="strategy5" className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-aeo-cyan font-bold font-mono text-lg px-2.5 py-1 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-lg">05</span>
                <h3 className="text-white font-bold text-lg">Strategy 5: Build Off-Page Entity Authority & Co-Citations</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                AI engines evaluate external consensus to verify entity legitimacy. Strengthen off-page AEO by ensuring your brand Name, Address, Phone (NAP), and primary service credentials are consistently cited across Wikidata, Google Knowledge Graph nodes, industry registries, and authoritative Australian media publications.
              </p>

              {/* Trust & Authority Signals: "Where AEObility Signals Are Indexed" */}
              <div className="pt-2 space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-aeo-cyan block">Where AEObility Entity Signals Are Indexed</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
                  <div className="p-3 bg-white/[0.02] border border-white/10 rounded-xl text-center space-y-1">
                    <div className="font-bold text-white text-xs flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Wikidata & Knowledge Graph</span>
                    </div>
                    <div className="text-white/50 text-[11px]">Structured entity nodes</div>
                  </div>
                  <div className="p-3 bg-white/[0.02] border border-white/10 rounded-xl text-center space-y-1">
                    <div className="font-bold text-white text-xs flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Australian NAP</span>
                    </div>
                    <div className="text-white/50 text-[11px]">ABN & Registry signals</div>
                  </div>
                  <div className="p-3 bg-white/[0.02] border border-white/10 rounded-xl text-center space-y-1">
                    <div className="font-bold text-white text-xs flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Media Co-Citations</span>
                    </div>
                    <div className="text-white/50 text-[11px]">Unlinked brand mentions</div>
                  </div>
                </div>
              </div>

              {/* Internal Link 5 -> Local Business */}
              <div className="pt-2">
                <Link href="/services/aeo/local-business" className="inline-flex items-center gap-1.5 text-xs font-semibold text-aeo-cyan hover:underline">
                  <span>How off-page citations improve local business visibility in AI search</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Gradient Separator */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent my-1" />

            {/* Strategy 6 */}
            <div id="strategy6" className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-aeo-purple font-bold font-mono text-lg px-2.5 py-1 bg-aeo-purple/10 border border-aeo-purple/20 rounded-lg">06</span>
                <h3 className="text-white font-bold text-lg">Strategy 6: Optimise for Multimodal & Conversational Search</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Modern models (GPT-4o, Gemini 1.5) process text, audio, and visual inputs simultaneously. Optimise for conversational queries by using natural speech phrasing, optimizing image `alt` attributes with descriptive entity context, and providing structured video metadata for voice search assistants.
              </p>

              {/* Internal Link 6 -> AI Search Marketing Strategy */}
              <div className="pt-2">
                <Link href="/services/ai-search-marketing" className="inline-flex items-center gap-1.5 text-xs font-semibold text-aeo-purple hover:underline">
                  <span>Multimodal optimisation is part of our AI Search Strategy blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* 3. Bottom Pre-Exit CTA: Schedule a Call */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-aeo-cyan/20 via-black to-aeo-purple/20 border border-aeo-cyan/30 flex flex-col sm:flex-row items-center justify-between gap-4 my-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-aeo-cyan/15 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan shrink-0">
                <PhoneCall className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Speak with an Australian AEO Specialist</h4>
                <p className="text-xs text-white/70">15-minute clarity call. Direct advice for your business.</p>
              </div>
            </div>
            <Link
              href="/book"
              className="px-6 py-3 rounded-xl bg-aeo-cyan hover:bg-white text-black text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-md flex items-center gap-1.5"
            >
              <span>Schedule a Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4. True AEO FAQ Knowledge Graph Navigation (Declared Parent, Child, & Sibling Nodes with Semantic Edges) */}
          <div className="border-t border-white/10 pt-8 mt-2 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-aeo-cyan flex items-center gap-2">
                  <Cpu className="w-4.5 h-4.5 text-aeo-cyan" />
                  <span>AEO FAQ Knowledge Graph (Declared Entity Topology)</span>
                </h3>
                <p className="text-xs text-white/60 pt-1">Parent, child, and sibling entity nodes linked by explicit semantic relationships.</p>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 bg-aeo-cyan/10 border border-aeo-cyan/30 text-aeo-cyan rounded-full font-semibold shrink-0">8 Connected Graph Nodes</span>
            </div>

            {/* Step 1: Declared Parent Node (Root FAQ Entity) */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-aeo-cyan/15 via-black to-aeo-purple/15 border border-aeo-cyan/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-aeo-cyan bg-aeo-cyan/10 px-2 py-0.5 rounded border border-aeo-cyan/30">
                  Parent Node (Root FAQ Entity)
                </span>
                <span className="text-[10px] text-white/50 font-mono">Foundational Concept Root</span>
              </div>
              <Link href="/services/aeo/definition" className="group flex items-center justify-between pt-1">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors">1. What is AEO & how does it work?</h4>
                  <p className="text-xs text-white/60 pt-0.5">Establishes core Answer Engine Optimisation principles, RAG architecture, and machine indexing.</p>
                </div>
                <ArrowRight className="w-4 h-4 text-aeo-cyan group-hover:translate-x-1 transition-transform shrink-0 ml-3" />
              </Link>
            </div>

            {/* Step 2: Child Nodes Cluster (Inside Conversion Corridor) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-aeo-purple" />
                  <span>Child Nodes (Inside Conversion Corridor)</span>
                </span>
                <span className="text-[10px] text-white/40 font-mono">Links Upward to Parent & Laterally</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
                <Link href="/services/aeo/comparison" className="p-3.5 bg-white/[0.02] border border-white/10 rounded-xl hover:border-aeo-purple/40 hover:text-aeo-purple transition-colors flex items-center justify-between group">
                  <div className="space-y-0.5">
                    <span className="text-white block group-hover:text-aeo-purple transition-colors">2. AEO vs SEO: The Generative Shift</span>
                    <span className="text-[10px] text-white/50 block font-sans font-normal">Edge: Structural differences in vector retrieval</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-aeo-purple transition-colors shrink-0 ml-2" />
                </Link>
                <Link href="/services/aeo/constraints" className="p-3.5 bg-white/[0.02] border border-white/10 rounded-xl hover:border-aeo-purple/40 hover:text-aeo-purple transition-colors flex items-center justify-between group">
                  <div className="space-y-0.5">
                    <span className="text-white block group-hover:text-aeo-purple transition-colors">4. What stops your business from showing up?</span>
                    <span className="text-[10px] text-white/50 block font-sans font-normal">Edge: Trust thresholds & positional bias blockers</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-aeo-purple transition-colors shrink-0 ml-2" />
                </Link>
                <Link href="/services/aeo/costs-timing" className="p-3.5 bg-white/[0.02] border border-white/10 rounded-xl hover:border-aeo-purple/40 hover:text-aeo-purple transition-colors flex items-center justify-between group">
                  <div className="space-y-0.5">
                    <span className="text-white block group-hover:text-aeo-purple transition-colors">5. AEO Pricing & Sprint Deliverables</span>
                    <span className="text-[10px] text-white/50 block font-sans font-normal">Edge: Implementation deliverables & timelines</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-aeo-purple transition-colors shrink-0 ml-2" />
                </Link>
                <Link href="/knowledge-hub/semantic-seo" className="p-3.5 bg-white/[0.02] border border-white/10 rounded-xl hover:border-aeo-purple/40 hover:text-aeo-purple transition-colors flex items-center justify-between group">
                  <div className="space-y-0.5">
                    <span className="text-white block group-hover:text-aeo-purple transition-colors">8. AI Semantic SEO Framework</span>
                    <span className="text-[10px] text-white/50 block font-sans font-normal">Edge: Adaptive chunking & knowledge graph lattice</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-aeo-purple transition-colors shrink-0 ml-2" />
                </Link>
              </div>
            </div>

            {/* Step 3: Sibling Nodes Cluster (Radial Trust Loops) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Network className="w-3.5 h-3.5 text-aeo-cyan" />
                  <span>Sibling Nodes (Radial Trust Loops)</span>
                </span>
                <span className="text-[10px] text-white/40 font-mono">Feeds Authority Back to Core Framework</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold">
                <Link href="/services/aeo/shopify" className="p-3.5 bg-white/[0.02] border border-white/10 rounded-xl hover:border-aeo-cyan/40 hover:text-aeo-cyan transition-colors flex flex-col justify-between gap-2 group">
                  <span className="text-white group-hover:text-aeo-cyan transition-colors">6. Shopify AEO Services</span>
                  <span className="text-[10px] text-white/50 font-sans font-normal">Edge: Ecommerce entity trust loop</span>
                </Link>
                <Link href="/services/aeo/local-business" className="p-3.5 bg-white/[0.02] border border-white/10 rounded-xl hover:border-aeo-cyan/40 hover:text-aeo-cyan transition-colors flex flex-col justify-between gap-2 group">
                  <span className="text-white group-hover:text-aeo-cyan transition-colors">7. Local Business Visibility</span>
                  <span className="text-[10px] text-white/50 font-sans font-normal">Edge: Geographic NAP map signals</span>
                </Link>
                <Link href="/services/ai-search-marketing" className="p-3.5 bg-white/[0.02] border border-white/10 rounded-xl hover:border-aeo-cyan/40 hover:text-aeo-cyan transition-colors flex flex-col justify-between gap-2 group">
                  <span className="text-white group-hover:text-aeo-cyan transition-colors">9. AI Search Marketing</span>
                  <span className="text-[10px] text-white/50 font-sans font-normal">Edge: Multimodal search strategy</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom-Up Link to Root Hub */}
          <div className="pt-4 flex items-center justify-between border-t border-white/5">
            <Link href="/services/aeo" className="text-xs font-medium text-white/60 hover:text-white transition-colors">
              ← Back to <strong className="text-white hover:underline">AEO Services Hub</strong>
            </Link>
            <Link
              href="/book"
              className="px-4 py-2 text-xs font-bold bg-aeo-purple text-white rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-1.5 shadow-md"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
