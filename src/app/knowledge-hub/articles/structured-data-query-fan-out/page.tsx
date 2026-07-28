import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
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
  GitFork
} from 'lucide-react';

export const metadata = {
  title: "Structured Data and Query Fan-Out: How to Survive AI Search",
  description: "Learn how structured data helps brands survive query fan-out in AI search by improving entity clarity, retrieval, and citation accuracy.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out",
  },
};

export default function StructuredDataQueryFanOutArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out",
        "url": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out",
        "name": "Structured Data and Query Fan-Out: How to Survive AI Search",
        "description": "A practical guide explaining how structured data improves brand resilience under query fan-out, reduces positional bias risk, and strengthens entity recognition across AI search.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#breadcrumb"
        }
      },
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#article",
        "headline": "Structured Data and Query Fan-Out: How to Survive AI Search",
        "description": "Learn how structured data strengthens entity clarity, reduces retrieval errors, and improves performance under query fan-out in modern AI search.",
        "author": {
          "@id": "https://aeobility.com.au/#vince-baker"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "datePublished": "2026-07",
        "dateModified": "2026-07",
        "image": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#imageobject"
        },
        "articleSection": [
          "What Query Fan-Out Is",
          "Why Fan-Out Makes Retrieval Harder",
          "Positional Bias Collision",
          "Why Structured Data Helps",
          "How Schema Supports Multi-Intent Retrieval",
          "Engineering Schema for Fan-Out Performance",
          "Technical FAQ"
        ],
        "keywords": [
          "query fan-out",
          "structured data",
          "AI search",
          "entity optimisation",
          "positional bias",
          "schema engineering",
          "AEO",
          "AEObility"
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#imageobject",
        "url": "https://aeobility.com.au/structured-data-query-fan-out_AEObility.webp",
        "contentUrl": "https://aeobility.com.au/structured-data-query-fan-out_AEObility.webp",
        "encodingFormat": "image/webp",
        "name": "Query Fan-Out Visualisation Banner",
        "description": "Abstract landscape visualisation showing query fan-out constrained within a strong data structure using azure, green, and orange gradients.",
        "uploadDate": "2026-07-01",
        "creator": {
          "@id": "https://aeobility.com.au/#vince-baker"
        }
      },
      {
        "@type": "CreativeWork",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#creativework",
        "name": "Query Fan-Out Structural Visualisation",
        "description": "A cyber-abstract artwork illustrating how query fan-out expands into multiple retrieval paths and how structured data constrains and stabilises those paths.",
        "creator": {
          "@id": "https://aeobility.com.au/#vince-baker"
        },
        "image": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#imageobject"
        },
        "genre": "Abstract Digital Art",
        "encodingFormat": "image/webp",
        "dateCreated": "2026-07",
        "contentLocation": {
          "@type": "Place",
          "name": "Perth, Western Australia"
        }
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/#vince-baker",
        "name": "Vince Baker",
        "jobTitle": "Senior Information Architect & AEO Strategist",
        "description": "Vince Baker specialises in structured data engineering, query fan-out resilience, and AI vector retrieval for Australian enterprises.",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
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
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "logo": "https://aeobility.com.au/android-chrome-512x512.png",
        "description": "AEObility helps Australian small businesses become discoverable, understandable, and recommended across search, maps, and generative AI.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "Australia"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#breadcrumb",
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
            "name": "Structured Data & Query Fan-Out",
            "item": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is query fan-out in AI search?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Query fan-out is when an answer engine expands a single user question into multiple retrieval intents or micro-queries, such as materials, brand reputation, location, or pricing."
            }
          },
          {
            "@type": "Question",
            "name": "How does structured data help under query fan-out?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Structured data provides a stable, machine-readable canonical reference point so each intent fragment resolves directly to explicit entity attributes."
            }
          },
          {
            "@type": "Question",
            "name": "Where does positional bias collide with fan-out?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fan-out multiplies retrieval passes, and positional bias suppresses middle-placed text across both the retrieval bottleneck and the synthesis bottleneck."
            }
          }
        ]
      }
    ]
  };

  const engineeringSteps = [
    {
      title: "1. Front-Load Key Facts",
      desc: "Place your most important entity attributes at the start of your schema block. Engines process schema top-down, and early placement improves recognition."
    },
    {
      title: "2. Use Explicit Definitions",
      desc: "Begin with a clear statement such as 'Baby Bento is a kids lunchbox brand based in Perth, Western Australia.' This helps engines resolve the entity before processing deeper attributes."
    },
    {
      title: "3. Prioritise High-Intent Properties",
      desc: "Include properties that map directly to common fan-out fragments: brand, material, location, product type, audience, safety rating, dimensions, and price."
    },
    {
      title: "4. Keep Schema Blocks Modular",
      desc: "Use compact, atomic schema blocks that focus on one entity at a time. This prevents dilution and keeps critical facts accessible."
    },
    {
      title: "5. Maintain Cross-Platform Consistency",
      desc: "Ensure your structured data matches your Google Business Profile, product feeds, marketplace listings, and social profiles. Consistency strengthens entity recognition."
    }
  ];

  const microFaqs = [
    {
      q: "What is query fan-out in simple terms?",
      a: "It is how AI breaks one question into many smaller searches (materials, price, safety, reputation) to find the best answer."
    },
    {
      q: "Why does structured data matter here?",
      a: "It gives AI a clear, machine-readable map of your business, so every micro-query leads directly back to your brand."
    },
    {
      q: "Can small businesses fix fan-out issues easily?",
      a: "Yes: consistent schema markup and clear entity definitions make a massive difference in AI citation rates."
    },
    {
      q: "Does schema improve rankings?",
      a: "Not directly. Schema improves understanding and machine retrieval reliability, which increases your chances of being cited in AI answers."
    },
    {
      q: "What happens if my structured data is inconsistent?",
      a: "Inconsistent attributes across platforms can cause AI systems to treat your brand as multiple separate entities, reducing retrieval accuracy."
    },
    {
      q: "How often should structured data be updated?",
      a: "Any time your services, pricing, location, or product attributes change. Consistency across the web strengthens entity resolution."
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

      {/* Main Layout Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Sidebar Navigation */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl sticky top-24">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Knowledge Hub</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/knowledge-hub" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Hub Overview
              </Link>
              <Link href="/knowledge-hub/aeo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AEO Core Principles
              </Link>
              <Link href="/knowledge-hub/semantic-seo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AI Semantic SEO
              </Link>
              <Link href="/knowledge-hub/geo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                GEO &amp; SEO Local Matrix
              </Link>
              <div className="h-px bg-white/5 my-2" />
              <Link href="/knowledge-hub/articles" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Articles &amp; Guides
              </Link>

              <div className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug ml-4 border-l-2 border-aeo-cyan pl-3">
                Structured Data &amp; Fan-Out
              </div>
              <div className="flex flex-col gap-1 ml-8 pl-3 border-l border-white/10 text-xs">
                <Link href="#what-is-fanout" className="text-white/50 hover:text-aeo-cyan transition-colors py-0.5">
                  &bull; What Query Fan-Out Is
                </Link>
                <Link href="#positional-collision" className="text-white/50 hover:text-aeo-cyan transition-colors py-0.5">
                  &bull; Positional Bias Collision
                </Link>
                <Link href="#why-structured-data" className="text-white/50 hover:text-aeo-cyan transition-colors py-0.5">
                  &bull; Why Schema Helps
                </Link>
                <Link href="#engineering-schema" className="text-white/50 hover:text-aeo-cyan transition-colors py-0.5">
                  &bull; Engineering Schema
                </Link>
              </div>

              <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug ml-4 border-l-2 border-white/10 pl-3">
                Positional Bias Guide
              </Link>
              <Link href="/knowledge-hub/articles/entity-authority-building" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug ml-4 border-l-2 border-white/10 pl-3">
                Entity Authority Building
              </Link>
              <Link href="/knowledge-hub/case-studies" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Client Case Studies
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Main Article Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">

          {/* Article Header */}
          <div className="space-y-6 border-b border-white/5 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>AEO &amp; Structured Data Architecture &bull; Technical Guide</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              How <span className="text-gradient-aeo">Structured Data</span> Helps You Survive the Query Fan-Out
            </h1>

            <h2 className="text-lg md:text-xl font-light text-white/80 font-serif leading-relaxed">
              Structured data gives answer engines a stable machine‑readable entity anchor when one query expands into many micro‑queries. This guide explains how AEObility, based in Perth, uses structured data and Query Fan‑Out principles to keep entities consistent across Search, Maps and AI.
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50 border-t border-b border-white/10 py-4">
              <span>Published by <strong className="text-white">AEObility</strong></span>
              <span>&bull;</span>
              <span>Location: <strong className="text-white">Perth, Western Australia</strong></span>
              <span>&bull;</span>
              <span>Updated July 2026</span>
              <span>&bull;</span>
              <span>5 min read</span>
              <span>&bull;</span>
              <span>Author: <Link href="/about/freelance-seo-consultant-perth" className="text-aeo-cyan hover:underline font-semibold">Vince Baker</Link></span>
              <span>&bull;</span>
              <span>Topic: <strong className="text-white">Structured Data &amp; Query Fan Out</strong></span>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="relative aspect-[16/9] w-full bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/structured-data-query-fan-out_AEObility.webp"
              alt="High-tech structured data and query fan-out architecture banner visualising machine-readable Schema.org entity anchors, AI search vector retrieval, and micro-query intent expansion by AEObility in Perth, Western Australia."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          {/* Direct Answer Atomic Block */}
          <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900/60 to-transparent border-l-4 border-aeo-cyan rounded-r-2xl space-y-2 shadow-xl">
            <span className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">Direct Answer: Structured Data &amp; Fan-Out</span>
            <p className="text-white text-base font-medium leading-relaxed">
              Structured data helps your entity perform better under query fan-out by giving answer engines a clear, machine-readable reference point. When one question expands into many retrieval tasks, explicit entity definitions and consistent attributes make it easier for engines to resolve, retrieve, and cite your brand accurately, even when content is fragmented across the web.
            </p>
          </div>

          {/* Section: What Query Fan-Out Actually Is */}
          <section id="what-is-fanout" className="space-y-6 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              What Query Fan-Out Actually Is
            </h2>

            {/* Section: What is Query Fan-Out? */}
            <div className="p-5 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900 to-transparent border-l-4 border-aeo-cyan rounded-r-xl space-y-2">
              <span className="text-xs text-aeo-cyan font-mono font-bold uppercase">What is Query Fan-Out?</span>
              <p className="text-sm text-white/90 font-medium leading-relaxed">
                Query fan-out is when an answer engine expands one user question into multiple micro-queries. Each micro-query targets a different intent fragment, such as materials, durability, safety, or price. Brands with clear, consistent entity definitions perform better because engines can resolve them across all fragments.
              </p>
            </div>

            <div className="space-y-4 text-white/85 text-base sm:text-lg font-light leading-relaxed font-serif">
              <p>
                When someone asks a question, AI doesn&apos;t just look for one answer: it breaks that question into dozens of smaller checks. Each one looks at a different angle: price, quality, location, availability, trust, and whether the business actually does what the person needs.
              </p>
              <p>
                The clearer your <Link href="/knowledge-hub/semantic-seo" className="text-aeo-cyan hover:underline font-semibold">structured data</Link> is, the easier it is for AI to connect those dots and choose you.
              </p>

              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-3 font-sans text-sm">
                <p className="font-semibold text-white">
                  For example, a search for &ldquo;best plumber in Perth for blocked drains&rdquo; triggers micro-queries such as:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Does this business actually offer blocked-drain services?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Are they located near the searcher?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Do they list emergency call-outs?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>What&apos;s their average response time?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Are their prices visible and consistent across the web?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Do reviews mention reliability or fast fixes?</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm sm:text-base font-normal text-white">
                If your structured data is clean, consistent, and complete, AI can resolve all those micro-queries back to your business: which dramatically increases your chances of being selected in an AI answer.
              </p>
            </div>

            {/* Sub-Section: Why Fan-Out Makes Retrieval Harder */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GitFork className="w-5 h-5 text-aeo-cyan" />
                <span>Why Fan-Out Makes Retrieval Harder</span>
              </h3>

              {/* Retrieval Complexity Block */}
              <div className="p-4 bg-white/5 border-l-2 border-aeo-cyan rounded-r-lg space-y-1 mb-3">
                <span className="text-[10px] text-aeo-cyan font-mono font-bold uppercase">Retrieval Complexity</span>
                <p className="text-xs text-white/90 font-medium leading-relaxed">
                  Fan-out multiplies retrieval passes by splitting a user query into specialized sub-intents. When entity facts are buried mid-paragraph or conflict across pages, neural retrievers struggle to score relevance, increasing competition and risking citation dropouts.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-white/80 font-light leading-relaxed font-serif">
                <p>
                  Fan-out increases retrieval complexity because the engine must match many intent fragments against your content. If your entity information is buried mid-paragraph or inconsistently expressed across pages, the retriever may fail to recognise it.
                </p>
                <p>
                  Fragmented intent amplifies competition, and unclear entities lose visibility. Aligning with <Link href="/knowledge-hub/aeo" className="text-aeo-cyan hover:underline font-semibold">AEO Core Principles</Link> and <Link href="/knowledge-hub/semantic-seo" className="text-aeo-cyan hover:underline font-semibold">AI Semantic SEO &amp; Atomic Blocks</Link> provides the necessary structural clarity.
                </p>
              </div>
            </div>

            {/* Why This Matters Block */}
            <div className="p-5 bg-gradient-to-r from-aeo-cyan/10 to-transparent border border-aeo-cyan/20 rounded-xl space-y-1">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase">Why This Matters for AI Search</span>
              <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                When one query expands into ten micro-queries, your brand must win multiple retrieval passes. Clear entity anchors ensure your facts survive each pass.
              </p>
            </div>
          </section>

          {/* Flowchart Diagram: Query Fan-Out Architecture */}
          <div className="p-6 bg-neutral-950 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center space-y-4">
            <span className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">Diagram: Query Fan-Out from One Question to Multiple Retrieval Paths</span>
            <svg viewBox="0 0 760 180" className="w-full h-auto text-xs font-mono max-w-xl">
              <g transform="translate(10, 70)">
                <rect x="0" y="0" width="130" height="40" rx="8" fill="#18181b" stroke="#00cdd8" strokeWidth="1.5" />
                <text x="65" y="24" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">User Query</text>
              </g>
              <line x1="140" y1="90" x2="190" y2="90" stroke="#00cdd8" strokeWidth="2" />
              <g transform="translate(190, 70)">
                <rect x="0" y="0" width="140" height="40" rx="8" fill="#022c22" stroke="#10b981" strokeWidth="1.5" />
                <text x="70" y="24" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Fan-Out Expansion</text>
              </g>
              <path d="M 330 90 L 370 30 M 330 90 L 370 90 M 330 90 L 370 150" stroke="#00cdd8" strokeWidth="1.5" strokeDasharray="3 3" />
              <g transform="translate(370, 10)">
                <rect x="0" y="0" width="170" height="35" rx="6" fill="#3b0764" stroke="#c084fc" strokeWidth="1" />
                <text x="85" y="22" textAnchor="middle" fill="#ffffff" fontSize="9">Sub-Query 1: Materials</text>
              </g>
              <g transform="translate(370, 72)">
                <rect x="0" y="0" width="170" height="35" rx="6" fill="#3b0764" stroke="#c084fc" strokeWidth="1" />
                <text x="85" y="22" textAnchor="middle" fill="#ffffff" fontSize="9">Sub-Query 2: Durability</text>
              </g>
              <g transform="translate(370, 134)">
                <rect x="0" y="0" width="170" height="35" rx="6" fill="#3b0764" stroke="#c084fc" strokeWidth="1" />
                <text x="85" y="22" textAnchor="middle" fill="#ffffff" fontSize="9">Sub-Query 3: Safety/Price</text>
              </g>
              <line x1="540" y1="27" x2="590" y2="90" stroke="#00cdd8" strokeWidth="1.5" />
              <line x1="540" y1="90" x2="590" y2="90" stroke="#00cdd8" strokeWidth="1.5" />
              <line x1="540" y1="151" x2="590" y2="90" stroke="#00cdd8" strokeWidth="1.5" />
              <g transform="translate(590, 70)">
                <rect x="0" y="0" width="150" height="40" rx="8" fill="#18181b" stroke="#00cdd8" strokeWidth="1.5" />
                <text x="75" y="18" textAnchor="middle" fill="#00cdd8" fontSize="10" fontWeight="bold">Schema Match</text>
                <text x="75" y="32" textAnchor="middle" fill="#ffffff" fontSize="9">Cited Brand Entity</text>
              </g>
            </svg>

            {/* Machine Readable Diagram Caption */}
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center text-xs text-white/70 font-mono max-w-xl">
              <strong>Caption:</strong> Query fan-out architecture mapping 4 sequential stages: User Query prompt decomposition, Fan-Out Intent Expansion, Sub-Query Vector Retrieval, and Schema Attribute Resolution.
            </div>
          </div>

          {/* Section: Where Positional Bias Collides with Query Fan-Out */}
          <section id="positional-collision" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan font-bold text-sm">
                !
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Where Positional Bias Collides with Query Fan-Out
              </h2>
            </div>

            {/* Atomic Answer Block */}
            <div className="p-5 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900 to-transparent border-l-4 border-aeo-cyan rounded-r-xl space-y-2">
              <span className="text-xs text-aeo-cyan font-mono font-bold uppercase">Positional Collision</span>
              <p className="text-sm text-white/90 font-medium leading-relaxed">
                Positional bias depresses middle-placed text across dense vector retrieval and LLM context window synthesis. Query fan-out compounds this bottleneck because every micro-query performs an independent retrieval pass, suppressing buried facts across multiple stages.
              </p>
            </div>

            <p className="text-white/80 text-base leading-relaxed font-serif">
              Our <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="text-aeo-cyan hover:underline font-semibold">Positional Bias in Retrieval</Link> guide details the two-stage bottleneck affecting retrieval and synthesis. Fan-out multiplies its impact across every micro-query.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bottleneck 1 */}
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 hover:border-aeo-cyan/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
                    <Search className="w-4 h-4" />
                    <span>1. The Retrieval Bottleneck</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Primacy Bias in Vector Search</h3>
                  
                  <div className="space-y-3 text-xs sm:text-sm text-white/80 font-light leading-relaxed font-serif">
                    <div className="p-3 bg-white/5 rounded-xl space-y-1">
                      <strong className="text-aeo-cyan text-xs font-mono uppercase">Primacy Bias in Embeddings:</strong>
                      <p className="text-xs text-white/70">Dense embedding and ColBERT-style models show reduced effectiveness when key facts appear later in a passage rather than early.</p>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl space-y-1">
                      <strong className="text-aeo-cyan text-xs font-mono uppercase">Why Late-Placed Facts Lose:</strong>
                      <p className="text-xs text-white/70">When important information is buried deep in a text block, it becomes less prominent in the vector embedding, making the passage appear less relevant.</p>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl space-y-1">
                      <strong className="text-aeo-cyan text-xs font-mono uppercase">Fan-Out Amplification:</strong>
                      <p className="text-xs text-white/70">Modern neural retrievers are heavily affected by positional placement during multi-intent fan-out passes.</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-aeo-cyan font-mono pt-3 border-t border-white/5">
                  Passages with front-loaded facts consistently win every micro-query pass.
                </p>
              </div>

              {/* Bottleneck 2 */}
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 hover:border-purple-400/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-widest">
                    <Cpu className="w-4 h-4" />
                    <span>2. The Synthesis Bottleneck</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Primacy, Recency, &amp; Lost in the Middle</h3>
                  
                  <div className="space-y-3 text-xs sm:text-sm text-white/80 font-light leading-relaxed font-serif">
                    <div className="p-3 bg-white/5 rounded-xl space-y-1">
                      <strong className="text-purple-300 text-xs font-mono uppercase">Attention Dilution:</strong>
                      <p className="text-xs text-white/70">Longer prompts spread attention thin across context windows, increasing error rates.</p>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl space-y-1">
                      <strong className="text-purple-300 text-xs font-mono uppercase">Primacy &amp; Recency Bias:</strong>
                      <p className="text-xs text-white/70">Transformer attention naturally favours tokens at the beginning and end of a text block.</p>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl space-y-1">
                      <strong className="text-purple-300 text-xs font-mono uppercase">Lost in the Middle &amp; Multi-Pass Synthesis:</strong>
                      <p className="text-xs text-white/70">Information in the centre of a sequence is statistically harder to access when synthesizing across multiple retrieved passages.</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-purple-300 font-mono pt-3 border-t border-white/5">
                  Buried facts fail to register during synthesis.
                </p>
              </div>
            </div>

            {/* Why This Matters Block */}
            <div className="p-5 bg-gradient-to-r from-aeo-purple/10 to-transparent border border-aeo-purple/20 rounded-xl space-y-1">
              <span className="text-xs font-mono text-purple-300 font-bold uppercase">Why This Matters for AI Search</span>
              <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                Positional bias and fan-out create a compound penalty for unstructured text. Structured data bypasses text placement heuristics entirely.
              </p>
            </div>
          </section>

          {/* Section: Why Structured Data Helps */}
          <section id="why-structured-data" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Why Structured Data Helps
            </h2>

            {/* Atomic Answer Block */}
            <div className="p-5 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900 to-transparent border-l-4 border-aeo-cyan rounded-r-xl space-y-2">
              <span className="text-xs text-aeo-cyan font-mono font-bold uppercase">Schema Resilience</span>
              <p className="text-sm text-white/90 font-medium leading-relaxed">
                Structured data provides a stable, machine-readable canonical representation of your entity. By declaring explicit Schema.org properties, engines extract core facts directly without relying on passage positioning or text embedding heuristics.
              </p>
            </div>

            <p className="text-white/80 text-base leading-relaxed font-serif">
              Instead of relying solely on long text blocks, engines extract key attributes directly from schema. Strengthening your <Link href="/knowledge-hub/articles/entity-authority-building" className="text-aeo-cyan hover:underline font-semibold">entity clarity</Link> ensures that your core brand properties are recognised unambiguously across Search, Maps and AI. Refer to our <Link href="/knowledge-hub/articles/entity-authority-building" className="text-aeo-cyan hover:underline font-semibold">Entity Authority Guide</Link> for foundational principles.
            </p>

            <div className="p-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-aeo-cyan/20 rounded-2xl space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-aeo-cyan" />
                <span>Structured Data Improves Retrieval By:</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/90 font-light">
                <li className="p-3 bg-white/5 rounded-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-aeo-cyan shrink-0" />
                  <span>Providing explicit entity definitions</span>
                </li>
                <li className="p-3 bg-white/5 rounded-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-aeo-cyan shrink-0" />
                  <span>Supporting disambiguation across micro-queries</span>
                </li>
                <li className="p-3 bg-white/5 rounded-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-aeo-cyan shrink-0" />
                  <span>Reducing reliance on passage position</span>
                </li>
                <li className="p-3 bg-white/5 rounded-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-aeo-cyan shrink-0" />
                  <span>Ensuring consistent naming and attributes</span>
                </li>
                <li className="p-3 bg-white/5 rounded-xl flex items-center gap-2 sm:col-span-2">
                  <span className="w-2 h-2 rounded-full bg-aeo-cyan shrink-0" />
                  <span>Offering a stable reference point when the web contains conflicting information</span>
                </li>
              </ul>
            </div>

            {/* Sub-Section: Multi-Intent Retrieval */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                <h3 className="text-base font-bold text-white">How Schema Supports Multi-Intent Retrieval</h3>
                
                <div className="p-3 bg-white/5 border-l-2 border-aeo-cyan rounded-r-lg space-y-1 mb-2">
                  <span className="text-[10px] text-aeo-cyan font-mono font-bold uppercase">Multi-Intent Mapping</span>
                  <p className="text-xs text-white/90 font-medium leading-relaxed">
                    Multi-intent fan-out queries test specific product, location, or brand properties simultaneously. Schema.org attributes map each intent fragment directly to a property, increasing selection probability across all micro-queries.
                  </p>
                </div>

                <p className="text-xs text-white/70 leading-relaxed font-light font-serif">
                  Fan-out produces mixed-intent retrieval tasks spanning specifications, brand reputation, location, safety, and price ranges.
                </p>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                <h3 className="text-base font-bold text-white">Why Consistency Across the Web Matters</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light font-serif">
                  Fan-out rewards entities with consistent structured data across all surfaces. See how this is demonstrated in our <Link href="/knowledge-hub/case-studies/baby-bento" className="text-aeo-cyan hover:underline font-semibold">Baby Bento Case Study</Link>.
                </p>
                <p className="text-xs text-white/70 leading-relaxed font-light font-serif">
                  If attributes differ across platforms, the retrieval engine treats them as separate entities, degrading entity resolution.
                </p>
              </div>
            </div>
          </section>

          {/* Section: How to Engineer Structured Data for Fan-Out Performance */}
          <section id="engineering-schema" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              How to Engineer Structured Data for Fan-Out Performance
            </h2>

            {/* Atomic Answer Block */}
            <div className="p-5 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900 to-transparent border-l-4 border-aeo-cyan rounded-r-xl space-y-2">
              <span className="text-xs text-aeo-cyan font-mono font-bold uppercase">Schema Engineering</span>
              <p className="text-sm text-white/90 font-medium leading-relaxed">
                Engineering schema for fan-out requires front-loading key facts, defining explicit entity statements, prioritizing high-intent properties, keeping blocks modular, and maintaining strict cross-platform consistency.
              </p>
            </div>

            <div className="space-y-4">
              {engineeringSteps.map((step, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2 hover:border-aeo-cyan/30 transition-all">
                  <h3 className="text-base font-bold text-white leading-snug">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Why This Matters Block */}
            <div className="p-5 bg-gradient-to-r from-aeo-cyan/10 to-transparent border border-aeo-cyan/20 rounded-xl space-y-1">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase">Why This Matters for AI Search</span>
              <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                Modular, front-loaded schema gives AI crawlers unambiguous signals on the first pass, shielding your brand against query fragmentation.
              </p>
            </div>

            {/* Mid-Page Conversion CTA Block */}
            <div className="p-6 bg-gradient-to-r from-aeo-purple/10 via-neutral-900 to-transparent border border-aeo-cyan/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base font-bold text-white">Want your structured data engineered for AI search?</h4>
                <p className="text-xs text-white/70 font-light">Get your free visibility audit with AEObility today.</p>
              </div>
              <Link
                href="/diagnostic"
                className="px-5 py-2.5 rounded-full bg-aeo-cyan text-black font-extrabold text-xs hover:bg-white transition-all shrink-0"
              >
                <span>Get Your Free AI Search Visibility Audit</span>
              </Link>
            </div>
          </section>

          {/* Section: Why Structured Data Is Now Essential */}
          <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
            <h2 className="text-xl font-bold text-white">Why Structured Data Is Now Essential</h2>
            <p className="text-sm text-white/80 font-light leading-relaxed font-serif">
              Fan-out is how modern answer engines operate. Without structured data, your brand competes inside long text blocks where positional bias reduces visibility. With structured data, your entity becomes a stable reference point that engines can trust and reuse across many retrieval intents.
            </p>
            <div className="p-3 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-xl text-xs font-mono text-aeo-cyan font-bold">
              Structured data is not a ranking trick. It is a resilience mechanism.
            </div>
          </div>

          {/* Section: AEObility's View */}
          <div className="p-6 bg-gradient-to-r from-aeo-purple/10 via-neutral-900 to-transparent border-l-4 border-aeo-purple rounded-r-2xl space-y-3">
            <div className="text-xs uppercase tracking-widest font-bold text-aeo-purple flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>AEObility’s View</span>
            </div>
            <p className="text-sm md:text-base text-white/90 font-light leading-relaxed font-serif italic">
              If you want your brand to be cited in AI search, you must design for retrieval first. Structured data is the most reliable way to improve performance under query fan-out, reduce positional risk, and ensure your entity is consistently recognised across the web.
            </p>
          </div>

          {/* Micro-FAQs Section */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Technical &amp; Micro-FAQs</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Query Fan-Out &amp; Structured Data FAQ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {microFaqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2 hover:border-aeo-cyan/30 transition-all">
                  <h4 className="text-sm font-bold text-white leading-snug">{faq.q}</h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Post-FAQ Conversion CTA */}
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <span className="text-xs text-white/80 font-medium">Run a fan-out resilience check for your brand today.</span>
              <Link href="/diagnostic" className="text-xs text-aeo-cyan font-bold hover:underline">
                Get Your Free AI Search Visibility Audit &rarr;
              </Link>
            </div>
          </section>

          {/* Tools & Resources Section */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-aeo-cyan" />
              <h2 className="text-2xl font-bold text-white">Tools &amp; Resources for Fan-Out Resilience</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/diagnostic" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>AI Search Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Run a passage structure check and test vector retrieval performance for your brand under fan-out.
                </p>
              </Link>

              <Link href="/knowledge-hub/semantic-seo" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>AI Semantic SEO &amp; Atomic Blocks</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Learn how to construct Atomic Answer Blocks and RDF triple schema microdata.
                </p>
              </Link>

              <Link href="/knowledge-hub/articles/entity-authority-building" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>Entity Authority Guide</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Discover why AI search ranks entities instead of keyword pages.
                </p>
              </Link>

              <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>Positional Bias Guide</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Mitigate the retrieval and synthesis bottlenecks in dense vector search.
                </p>
              </Link>
            </div>
          </section>

          {/* Author Entity Bio Box */}
          <section className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-aeo-cyan/50 shrink-0 shadow-lg">
              <Image
                src="/Profile-Picture-Vinnie.png"
                alt="Vince Baker - Senior Information Architect &amp; AEO Strategist Perth"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-white">Vince Baker</h3>
                <span className="text-xs text-aeo-cyan font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">Senior Information Architect &amp; AEO Strategist</span>
              </div>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Vince Baker is an Answer Engine Optimisation (AEO) consultant based in Perth, Western Australia. He specialises in structured data engineering, query fan-out resilience, and AI vector retrieval for Australian enterprises.
              </p>
              <div className="pt-1 text-xs">
                <Link href="/about/freelance-seo-consultant-perth" className="text-aeo-cyan hover:underline font-semibold flex items-center gap-1">
                  <span>View Author Entity Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </section>

          {/* Bottom Audit CTA */}
          <div className="p-8 bg-gradient-to-br from-neutral-900 to-black border border-aeo-cyan/30 rounded-2xl text-center space-y-4 shadow-xl">
            <h3 className="text-xl md:text-3xl font-extrabold text-white">
              Protect Your Brand Against <span className="text-gradient-aeo">Query Fan-Out</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light">
              Get your structured data and entity schema audited for AI search engines and RAG retrieval pipelines.
            </p>
            <div className="pt-2">
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-aeo-cyan text-black font-extrabold text-sm hover:bg-white transition-all shadow-lg hover:shadow-aeo-cyan/20"
              >
                <span>Get Your Free AI Search Visibility Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Related Articles Navigation */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link 
              href="/knowledge-hub/articles/positional-bias-in-retrieval" 
              className="group text-xs font-semibold text-white/60 hover:text-aeo-cyan transition-colors flex items-center gap-1"
            >
              &larr; Prev: Positional Bias in Retrieval
            </Link>
            
            <Link 
              href="/knowledge-hub/articles" 
              className="text-xs font-semibold text-aeo-cyan hover:text-white transition-colors"
            >
              All Articles &amp; Technical Reading &rarr;
            </Link>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
