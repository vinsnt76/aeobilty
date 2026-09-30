import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { getCanonicalAeoSchemaGraph } from '@/lib/schema/canonicalAeo';
import FaqAccordion from '@/components/FaqAccordion';
import AeoDiagnosticSection from '@/components/services/AeoDiagnosticSection';
import AeoContactSection from '@/components/services/AeoContactSection';
import AeoStartingPointGrid from '@/components/services/AeoStartingPointGrid';
import {
  ArrowRight,
  Eye,
  Brain,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Calendar,
  Layers,
  Code,
  Compass,
  DollarSign,
  Activity,
  Target,
  Bot,
  FileCheck,
  BarChart3
} from 'lucide-react';

export const metadata: Metadata = {
  title: "AI SEO Agency & AEO Services Australia | AEObility",
  description: "Australia's specialist AI SEO agency for AEO SEO, Answer Engine Optimisation, and structured entity graph architecture. Fixed-scope sprints from $495 AUD ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo",
  },
  openGraph: {
    title: "AI SEO Agency & AEO Services Australia | AEObility",
    description: "Australia's specialist AI SEO agency for AEO SEO, Answer Engine Optimisation, and structured entity graph architecture. Fixed-scope sprints from $495 AUD ex. GST.",
    url: "https://aeobility.com.au/services/aeo",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/services/canonical-aeo-services-hub_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility canonical AI SEO agency and Answer Engine Optimisation dashboard mapping 4 foundational pillars, structured content deliverables, and AEO sprint execution.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SEO Agency & AEO Services Australia | AEObility",
    description: "Australia's specialist AI SEO agency for AEO SEO, Answer Engine Optimisation, and structured entity graph architecture. Fixed-scope sprints from $495 AUD ex. GST.",
    images: ["https://aeobility.com.au/images/services/canonical-aeo-services-hub_AEObility.webp"],
  },
};

export const AEO_CANONICAL_INTERNAL_LINKS = [
  {
    targetSlug: "/services/aeo/definition",
    anchorText: "What is AEO?",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/aeo/comparison",
    anchorText: "AEO vs SEO Comparison Matrix",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/aeo/shopify",
    anchorText: "Shopify AEO Services",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/aeo/local-business",
    anchorText: "Local Business Visibility",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/knowledge-hub/aeo",
    anchorText: "AEO Core Principles & Machine Mechanics",
    entityRelation: "http://schema.org/subjectOf"
  },
  {
    targetSlug: "/knowledge-hub/articles/optimising-for-different-ai-search-engines",
    anchorText: "Multi-Engine AI Retrieval Guide",
    entityRelation: "http://schema.org/subjectOf"
  },
  {
    targetSlug: "/knowledge-hub/articles/retrieval-augmented-generation",
    anchorText: "RAG Search Optimisation Guide",
    entityRelation: "http://schema.org/subjectOf"
  },
  {
    targetSlug: "/knowledge-hub/articles/structured-data-query-fan-out",
    anchorText: "Structured Data & Query Fan-Out",
    entityRelation: "http://schema.org/subjectOf"
  },
  {
    targetSlug: "/knowledge-hub/articles/positional-bias-in-retrieval",
    anchorText: "Positional Bias Audit & Mitigation",
    entityRelation: "http://schema.org/subjectOf"
  },
  {
    targetSlug: "/knowledge-hub/articles/entity-authority-building",
    anchorText: "Entity Authority Guide",
    entityRelation: "http://schema.org/subjectOf"
  },
  {
    targetSlug: "/brand-facts",
    anchorText: "Canonical Brand Facts & SKU Pricing Registry",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/knowledge-hub/case-studies/aeo-geo-blueprint-90-days",
    anchorText: "first 90 days case study",
    entityRelation: "http://schema.org/subjectOf"
  }
];

export default function AEORootPage() {
  const faqs = [
    {
      question: "What is the difference between AEO and traditional SEO?",
      answer: "Traditional SEO focuses on keyword rankings and organic search traffic. Answer Engine Optimisation (AEO) structures your business information, content, and schema so AI search systems (Google AI Overviews, ChatGPT Search, and Perplexity) can easily understand, verify, and cite your brand in direct answer responses."
    },
    {
      question: "Which AI search engines do AEObility services optimise for?",
      answer: "We structure your web footprint for major AI search engines and discovery tools including Google AI Overviews, ChatGPT Search, Perplexity Pro, and Gemini."
    },
    {
      question: "What is the difference between a Micro-Sprint and Foundation Implementation?",
      answer: "A Micro-Sprint is a quick fix for one specific issue (e.g. structured schema deployment or a single atomic page rewrite) delivered in 4–5 business days for $495 AUD ex. GST. Foundation Implementation is a connected four-week engagement addressing multi-page schema, internal link lattices, and citation alignment."
    },
    {
      question: "How long do AEObility engagements take to deliver?",
      answer: "Delivery timeframes depend on service scope: Micro-Sprints are delivered in 4–5 business days after scope and access are confirmed, while Foundation Implementations run across a four-week schedule."
    },
    {
      question: "How does the $995 Strategic Blueprint credit work?",
      answer: "The Blueprint provides a complete digital presence audit and prioritised 90-day roadmap for $995 AUD ex. GST. The full $995 Blueprint fee is credited against a Foundation Implementation booked within 90 days."
    },
    {
      question: "Do I own all code and schema deliverables?",
      answer: "Yes. All completed schema markup, atomic content blocks, and handover documentation belong 100% to your organisation with zero ongoing contract lock-in."
    },
    {
      question: "Does AEO help with local search and Google Maps?",
      answer: "Yes. AEO strengthens local business detail consistency (name, address, phone number, services, and operating regions), improving local search visibility and voice assistant accuracy across Maps and local search packs."
    },
    {
      question: "What industries benefit most from Answer Engine Optimisation?",
      answer: "AEO is most effective for commercial services, trade providers, B2B companies, e-commerce stores, and local professional services where prospective buyers use search or AI assistants to compare options before purchasing."
    }
  ];

  const pillars = [
    {
      icon: <Layers className="w-6 h-6 text-aeo-cyan" />,
      title: "1. Machine-Readable Structure",
      description: "Deploy nested JSON-LD schema markup (Organisation, Service, Offer, LocalBusiness) so scrapers and search systems can extract structured facts without missing data."
    },
    {
      icon: <Brain className="w-6 h-6 text-aeo-purple" />,
      title: "2. Atomic Content Clarity",
      description: "Restructure service copy into concise, self-contained answer blocks formatted around real customer decision queries and high-intent search prompts."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-aeo-cyan" />,
      title: "3. Internal Linking Lattice",
      description: "Connect core service hubs, sub-node specialisations, and regional location pages with explicit contextual internal links that reinforce topic authority."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-aeo-purple" />,
      title: "4. Corroborated Brand Authority",
      description: "Align core NAP details, verified credentials, and client evidence across external citations and authority profiles to build machine trust."
    }
  ];

  const jsonLdGraph = getCanonicalAeoSchemaGraph(faqs);

  return (
    <div className="bg-[#07070a] text-slate-100 min-h-screen flex flex-col selection:bg-teal-500/30 selection:text-teal-200 relative overflow-hidden">
      {/* Ambient background glows matching knowledge hub design */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-teal-500/10 via-cyan-500/5 to-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Unified JSON-LD Connected Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar subnavItems={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* 1. Hero Block */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-400 uppercase tracking-widest font-semibold mb-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>AI SEO for Modern Answer Engines</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              AI SEO Services: <span className="text-gradient-aeo">Update your site for Modern Answer Retrieval</span>
            </h1>

            <div className="space-y-3 max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Make your business easier for AI search to understand, trust, and cite. AEObility improves the structure, clarity, and verification of your website content for Google AI Overviews, ChatGPT Search, and Perplexity. Clear scope. Fixed pricing. No lock-in contracts.
              </p>
            </div>

            {/* Featured 1200x800 WebP Image Hero Banner with Overlaid CTAs */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/services/canonical-aeo-services-hub_AEObility.webp"
                alt="AEObility canonical Answer Engine Optimisation dashboard mapping 4 foundational pillars, structured content deliverables, and AEO sprint execution."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-slate-950/70 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-4 sm:p-6 rounded-2xl bg-slate-950/90 border border-slate-800/80 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-4 shadow-2xl">
                <div className="text-left space-y-1">
                  <span className="text-xs sm:text-sm font-mono text-teal-300 font-bold block uppercase tracking-wider">
                    AI SEO Structures your content for AI discovery
                  </span>
                  <span className="text-xs sm:text-[14px] text-slate-200 font-medium block leading-relaxed">
                    We refine your web pages for data clarity so generative search engines (including Google AI Overviews, ChatGPT Search, Perplexity, and Gemini) can reliably retrieve, understand, and recommend your business in its answers.
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
                  <a
                    href="#aeo-contact-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-teal-500/20 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>Discuss Services</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Visual "On This Page" Subnav Bar */}
            <nav aria-label="On this page navigation" className="max-w-3xl mx-auto my-6 p-4 bg-slate-950/80 border border-slate-800/80 rounded-2xl flex flex-wrap items-center gap-3 shadow-lg">
              <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-teal-400" />
                On this page:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a href="#engagement-paths" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-teal-400 text-slate-300 hover:text-teal-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                  Engagement Paths
                </a>
                <a href="#aeo-comparison" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                  Comparison Matrix
                </a>
                <a href="#aeo-cost" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-purple-400 text-slate-300 hover:text-purple-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                  Investment Model
                </a>
                <a href="#multi-engine-capabilities" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-400 text-slate-300 hover:text-emerald-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                  AI Engines
                </a>
                <a href="#pillars" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-teal-400 text-slate-300 hover:text-teal-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                  4 Pillars
                </a>
                <a href="#aeo-process" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                  3-Step Process
                </a>
                <a href="#faq-aeo" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-purple-400 text-slate-300 hover:text-purple-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                  FAQs
                </a>
                <a href="#aeo-contact-form" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-teal-500/40 text-teal-300 hover:text-teal-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                  Discuss Scope
                </a>
              </div>
            </nav>

            {/* Inclusions Box */}
            <div className="max-w-3xl mx-auto bg-teal-950/30 border border-teal-500/30 rounded-2xl p-6 text-sm text-slate-300 text-left leading-relaxed space-y-3 shadow-md">
              <div className="flex items-center gap-2 font-bold text-white text-base">
                <FileCheck className="w-5 h-5 text-teal-400" />
                <span>Every AEObility Engagement includes:</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>One agreed business priority, specified schema deployment, or page rewrite work.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Validation checks, summary of completed changes, and handover notes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Delivery timeframes vary by service: Micro-Sprints are typically 4–5 business days; Foundation Implementations run across four weeks. View <Link href="/solutions" className="text-teal-400 hover:underline font-semibold">current service pricing and scope</Link>.</span>
                </li>
              </ul>
            </div>

            {/* How AI Search Chooses What to Quote */}
            <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-left space-y-6 shadow-2xl backdrop-blur-xl">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-400 uppercase tracking-wider font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  <span>Here is how AEObility helps your business get cited:</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  How AI Search Chooses What to Quote
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  ChatGPT, Google, and Perplexity do not just rank links. They answer questions directly and quote the websites that are easiest to verify. If your site is full of vague sales copy, AI tools simply quote your competitors instead.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-teal-300 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Clear, bite-sized answers</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We write direct two-sentence answers under clear headings, giving AI tools clean text to pull straight into their summaries.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Matching real questions</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We structure your pages around the specific problems buyers ask about, rather than chasing outdated keyword tricks.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Answering the next step</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    AI tools quietly check related questions to build full answers. We cover those natural follow-ups so you stay in the final summary.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Verified business details</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We add standard background labels to prove your services, pricing, and location. When an AI can verify your facts instantly, it can trust and recommend you.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-teal-950/30 border border-teal-500/30 text-xs sm:text-sm text-slate-200 font-sans font-medium shadow-md flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                <span>AI search rewards clear, proven facts. We make your business simple for search engines to find, trust, and quote.</span>
              </div>
            </div>

            {/* Grounded Real-World Practitioner Field Note */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-teal-500/30 shadow-xl text-left relative overflow-hidden max-w-3xl mx-auto backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-2 text-teal-400 font-mono font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Field Note: Fixing AI Hallucinations for a WA Trade</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                When AI search engines get confused by messy data, they guess. In a recent audit for a Western Australian commercial trade business, outdated PDF price lists and mismatched business registry details caused Perplexity to quote legacy, incorrect rates to prospective clients.
              </p>

              <div className="space-y-2 pt-1">
                <p className="text-xs sm:text-sm font-semibold text-white">We fixed the underlying evidence:</p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Removed the guesswork:</strong> We converted buried PDF pricing into a clean, readable on-page table.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Verified the facts:</strong> We added structured local business code that tied the website directly to its official Australian Business Number (ABN).</span>
                  </li>
                </ul>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-teal-950/40 border border-teal-500/30 text-xs sm:text-sm text-teal-200 font-medium">
                <strong className="text-teal-300">The result:</strong> Perplexity corrected its citations within two crawl cycles.
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                When your business data is clear, verified, and easy to parse, AI tools stop hallucinating your prices and start quoting you with confidence. We make sure they get your details right the first time.
              </p>
            </div>

          </section>

          {/* 2. "Choose Your Starting Point" Engagement Grid */}
          <section id="engagement-paths" className="border-t border-slate-800/80 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider">Predictable Fixed-Scope Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-3">
                <Target className="w-6 h-6 text-teal-400" />
                Choose Your Starting Point
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">Fixed pricing and clear scopes. No lock-in contracts.</p>
            </div>

            {/* Proof Card Near Pricing */}
            <div className="max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-left space-y-3 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-teal-400 font-mono font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Verified Client Evidence &amp; Case Results</span>
                </div>
                <Link href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days" className="text-xs font-mono text-teal-300 hover:underline font-bold">
                  View 90-Day Case Study &rarr;
                </Link>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                <strong className="text-white">Real-world impact:</strong> In a recent audit for a Western Australian commercial trade provider, inconsistent NAP details and unstructured PDF price sheets caused Perplexity Search to hallucinate outdated rates. Restructuring their service copy into atomic HTML tables with nested <code className="text-teal-300 font-mono text-xs">LocalBusiness</code> schema restored citation accuracy across 2 recrawl cycles.
              </p>
            </div>

            <AeoStartingPointGrid />

            {/* Clean 3-Tier Comparison Matrix Table */}
            <div id="aeo-comparison" className="overflow-x-auto rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-2xl scroll-mt-24">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[580px]">
                <thead>
                  <tr className="bg-slate-950 text-teal-300 border-b border-slate-800 font-mono text-xs uppercase tracking-wider">
                    <th className="p-3.5 sm:p-4 border-r border-slate-800">Service / Tier</th>
                    <th className="p-3.5 sm:p-4 border-r border-slate-800">Target Scope</th>
                    <th className="p-3.5 sm:p-4 border-r border-slate-800">Expected Outcome</th>
                    <th className="p-3.5 sm:p-4 text-right">Price (ex. GST)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-slate-300">
                  <tr className="hover:bg-slate-800/40 transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white border-r border-slate-800">AEO Technical Micro-Sprint</td>
                    <td className="p-3.5 sm:p-4 border-r border-slate-800">1 Defined Priority Page / Schema Fix</td>
                    <td className="p-3.5 sm:p-4 border-r border-slate-800 text-teal-200">Fix one high-impact AEO gap quickly</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-teal-400">$495 AUD</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white border-r border-slate-800">AEObility Blueprint</td>
                    <td className="p-3.5 sm:p-4 border-r border-slate-800">Full Digital Audit &amp; 90-Day Roadmap</td>
                    <td className="p-3.5 sm:p-4 border-r border-slate-800 text-cyan-200">Understand what limits AI search visibility before investing</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-teal-400">$995 AUD</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white border-r border-slate-800">Foundation Implementation</td>
                    <td className="p-3.5 sm:p-4 border-r border-slate-800">Connected Multi-Page &amp; Entity Fixes</td>
                    <td className="p-3.5 sm:p-4 border-r border-slate-800 text-teal-200">Implement connected improvements across priority pages</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-teal-400">From $3,195 AUD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Deliverables Ownership Statement */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-300 shadow-xl">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-bold block mb-0.5 text-sm sm:text-base">You own the agreed deliverables</strong>
                  <span>Use completed code and handover notes with your internal developer, or ask AEObility to implement the agreed changes.</span>
                </div>
              </div>
            </div>

            {/* Deep Mechanics Evidence Bridge */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-teal-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-300 shadow-xl">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase font-bold text-teal-300 tracking-wider block">Deep Mechanics &amp; Algorithmic Grounding</span>
                <p className="text-xs sm:text-sm text-slate-200">
                  <strong>Deep Mechanics:</strong> Explore how retrieval-augmented engines deconstruct conversational queries via our <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-teal-400 font-semibold hover:underline">RAG &amp; Answer Engine Search</Link> index or review our operational <Link href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days" className="text-purple-400 font-semibold hover:underline">first 90 days case study</Link> to safeguard content density.
                </p>
              </div>
              <Link
                href="/knowledge-hub/aeo"
                className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-teal-400 text-white rounded-xl text-xs font-mono font-bold shrink-0 transition-all"
              >
                Review Methodology &rarr;
              </Link>
            </div>

            {/* High-Density Declarative Answer Block: Transparent Investment */}
            <div id="aeo-cost" className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl scroll-mt-24">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium">
                  <DollarSign className="w-3.5 h-3.5 text-teal-400" />
                  <span>Fixed Investment Model</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Transparent Investment: How Much Does AEO Cost?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Answer Engine Optimisation costs vary depending on the scale of your digital footprint, but our pricing remains entirely fixed and transparent. We eliminate agency retainers and multi-month contract locks by delivering high-density technical improvements in structured deployment phases.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-teal-300 font-bold text-sm sm:text-base">Micro-Sprints</strong>
                    <span className="font-mono text-teal-400 font-bold">$495 AUD</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-xs">
                    A targeted, fixed-scope engineering sprint focused on a single tactical priority: custom JSON-LD schema nesting, atomic block rewrites, or internal linking repairs.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-teal-500/30 space-y-2 shadow-md">
                  <div className="flex items-center justify-between">
                    <strong className="text-white font-bold text-sm sm:text-base">Strategic Blueprint</strong>
                    <span className="font-mono text-teal-400 font-bold">$995 AUD</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-xs">
                    A comprehensive diagnostic audit and custom 90-day execution roadmap measuring your brand entity salience across major AI retrieval models.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-purple-300 font-bold text-sm sm:text-base">Foundation Implementation</strong>
                    <span className="font-mono text-purple-400 font-bold">From $3,195 AUD</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-xs">
                    A comprehensive four-week technical engagement delivering connected multi-page schema mapping, modular HTML blocks formatted for clear passage extraction, and contextual internal links.
                  </p>
                </div>
              </div>

              {/* 100% Risk-Reversal Callout */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-teal-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <strong className="text-white text-xs sm:text-sm font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal-400" />
                    <span>The 100% Risk-Reversal Credit</span>
                  </strong>
                  <p className="text-xs text-slate-300">
                    The full $995 Blueprint fee is credited against a Foundation Implementation booked within 90 days.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  <Link
                    href="/services/aeo/costs-timing"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs border border-slate-800 transition-colors"
                  >
                    <span>Costs &amp; Timelines Hub</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </Link>
                  <Link
                    href="/solutions/aeo-blueprint"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20"
                  >
                    <span>Explore Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* High-Density Declarative Answer Block: Defining the Roadmap */}
            <div id="aeo-blueprint-definition" className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl scroll-mt-24">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium">
                  <Compass className="w-3.5 h-3.5 text-purple-400" />
                  <span>Strategic Methodology</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Defining the Roadmap: What Is the AEObility AEO Blueprint?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The AEObility Strategic Blueprint is a standalone clarity phase designed to diagnose machine-readability friction across your web ecosystem. Instead of delivering vague marketing reports, this process builds an actionable 90-day execution roadmap tailored specifically to your commercial intent.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold">
                    <Target className="w-4 h-4 text-cyan-400" />
                    <span>Vector Proximity Audit</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We evaluate how closely your website context matches target user search intents within dense vector spaces.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-purple-300 font-bold">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>Entity Relationship Mapping</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our team reviews your underlying code to uncover missing schema ties, inconsistent NAP details, and hidden brand facts.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span>90-Day Operational Timeline</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    You receive a prioritised implementation roadmap detailing what to fix first to ensure accurate AI indexing.
                  </p>
                </div>
              </div>
            </div>

            {/* High-Density Declarative Answer Block: AI AEO Services for Perth & Australia */}
            <div id="ai-aeo-services" className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl scroll-mt-24">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Local &amp; Enterprise Grounding</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Verified Ingestion: AI AEO Services for Perth and Australian Businesses
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Traditional SEO models match static keyword strings, but modern conversational platforms extract structured facts. Our specialised AEO services help AI search systems understand, verify, and cite your business information across Google AI Overviews, ChatGPT Search, and Perplexity.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  We restructure your digital presence for Google AI Overviews, Perplexity Pro, and ChatGPT Search:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <strong className="text-white font-bold text-sm block">1. Local Detail Consistency</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Strengthen local entity signals through consistent location data, schema, and corroborating business-profile references.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <strong className="text-white font-bold text-sm block">2. Atomic Content Formatting</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Unstructured text walls are broken down into clear, modular answer blocks formatted around the exact questions your buyers ask.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <strong className="text-white font-bold text-sm block">3. Structured Ingestion Testing</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      We test how cleanly AI search crawlers ingest, verify, and cite your business facts before deploying to production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2.5 Multi-Engine Retrieval Capability Module */}
          <section id="multi-engine-capabilities" className="border-t border-slate-800/80 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 font-medium">
                <Bot className="w-3.5 h-3.5 text-cyan-400" />
                <span>Multi-Engine Citation Readiness</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-3">
                <Bot className="w-6 h-6 text-cyan-400" />
                Engineered for Every Major AI Answer Engine
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Different AI models evaluate content through different retrieval mechanisms. We structure your assets so each engine extracts clean, uncompromised facts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Perplexity Pro Card */}
              <div className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl flex flex-col justify-between space-y-5 hover:border-teal-500/40 transition-all duration-300 shadow-xl backdrop-blur-xl">
                <div className="space-y-4">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border border-teal-500/20 bg-teal-500/10 text-teal-400">
                    Deep Research &amp; Synthesis
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">Perplexity Pro Search</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      Extracts numerical data, pricing tables, and factual comparisons to construct research briefs with attributed footnotes.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <strong className="text-xs text-white block font-sans">Sprint Deliverables:</strong>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Structured HTML tables</strong> with explicit dimensions &amp; pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Direct provenance links</strong> connecting claims to case studies</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider block font-semibold">Citation Outcome</span>
                  <p className="text-[11px] text-slate-300 leading-tight">Increases the probability of footnote attribution by providing retrieval models with verified tabular data and clear citation links.</p>
                </div>
              </div>

              {/* ChatGPT Search Card */}
              <div className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl flex flex-col justify-between space-y-5 hover:border-purple-500/40 transition-all duration-300 shadow-xl backdrop-blur-xl">
                <div className="space-y-4">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400">
                    Conversational Intent Matching
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">ChatGPT Search &amp; Operator</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      Matches conversational queries directly against verified business facts and schema catalog offerings.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <strong className="text-xs text-white block font-sans">Sprint Deliverables:</strong>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Atomic Q&amp;A blocks</strong> positioned beneath headers to improve direct brand citation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Nested Schema catalogs</strong> linking verified deliverables</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block font-semibold">Citation Outcome</span>
                  <p className="text-[11px] text-slate-300 leading-tight">Improves the likelihood of direct brand recommendation when users ask conversational discovery questions.</p>
                </div>
              </div>

              {/* Google AI Overviews Card */}
              <div className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl flex flex-col justify-between space-y-5 hover:border-cyan-400/50 transition-all duration-300 shadow-xl backdrop-blur-xl">
                <div className="space-y-4">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
                    Knowledge Graph Salience
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">Google AI Overviews &amp; Gemini</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      Evaluates relational triples against external authority registries (ABN, ASIC, Wikidata) for high-salience passage extraction.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <strong className="text-xs text-white block font-sans">Sprint Deliverables:</strong>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Triple-linked JSON-LD</strong> referencing Wikidata entity nodes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Passage extraction tuning</strong> to prevent context window dilution</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider block font-semibold">Citation Outcome</span>
                  <p className="text-[11px] text-slate-300 leading-tight">Increases the likelihood of passage extraction in AI Overview snapshots above organic search results.</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <p className="text-xs text-slate-400 font-mono">
                Learn how each search bot extracts and parses website data in our technical guide:{' '}
                <Link
                  href="/knowledge-hub/articles/optimising-for-different-ai-search-engines"
                  className="text-teal-400 hover:underline font-semibold"
                >
                  How Perplexity, ChatGPT, Google, and Copilot Find and Cite Your Content
                </Link>
                .
              </p>
            </div>
          </section>

          {/* 3. The 4 Foundational AEO Pillars */}
          <section id="pillars" className="border-t border-slate-800/80 pt-16 space-y-10 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-3">
                <Layers className="w-6 h-6 text-teal-400" />
                Our Four Foundational Framework Pillars
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">A structured approach to machine readability, content clarity, and entity trust.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl space-y-3 text-left shadow-xl backdrop-blur-xl">
                  <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl w-fit">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Streamlined 12-Column Responsive Diagnostic Form Module */}
          <AeoDiagnosticSection />

          {/* 5. Operational 3-Step Process Flow Pipeline Graphic */}
          <section id="aeo-process" className="border-t border-slate-800/80 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider">Simple 3-Step Operational Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-3">
                <Compass className="w-6 h-6 text-cyan-400" />
                How AEO Sprints Work
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">Clear sequence from initial scan to complete handover notes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl space-y-3 relative hover:border-teal-500/40 transition shadow-xl backdrop-blur-xl">
                <div className="w-10 h-10 rounded-full bg-slate-950 border border-teal-500/40 text-teal-400 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-md">1</div>
                <h3 className="text-base sm:text-lg font-bold text-white">Scan &amp; Access</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Run a free scan or confirm your site priorities with our AEO team.</p>
              </div>

              <div className="p-6 bg-slate-900/60 border border-purple-500/30 rounded-2xl space-y-3 relative hover:border-purple-500/40 transition shadow-xl backdrop-blur-xl">
                <div className="w-10 h-10 rounded-full bg-slate-950 border border-purple-500/40 text-purple-400 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-md">2</div>
                <h3 className="text-base sm:text-lg font-bold text-white">4–5 Day Execution</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Deploy agreed schema markup, atomic page rewrites, or internal linking.</p>
              </div>

              <div className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl space-y-3 relative hover:border-teal-500/40 transition shadow-xl backdrop-blur-xl">
                <div className="w-10 h-10 rounded-full bg-slate-950 border border-teal-500/40 text-teal-400 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-md">3</div>
                <h3 className="text-base sm:text-lg font-bold text-white">Validation &amp; Handover</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Run validation checks and receive complete documentation &amp; ownership notes.</p>
              </div>
            </div>
          </section>

          {/* 6. Bottom Conversion CTA Block + Direct Contact Form */}
          <AeoContactSection />

          {/* 7. FAQ Accordion Section */}
          <section id="faq-aeo" className="border-t border-slate-800/80 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6 text-teal-400" />
                Frequently asked questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">Everything you need to know about AEObility AEO services.</p>
            </div>

            <div className="max-w-3xl mx-auto bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-xl">
              <FaqAccordion faqs={faqs.map(f => ({ q: f.question, a: f.answer }))} />
            </div>
          </section>

          {/* 8. Canonical Internal Links Lattice */}
          <section id="aeo-lattice" className="border-t border-slate-800/80 pt-16 space-y-6 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-400">
                <Eye className="w-3.5 h-3.5 text-teal-400" />
                <span>Machine-Readable Internal Links Lattice</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">Connected Concepts &amp; Related Nodes</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Direct contextual links anchoring this service hub to core definitions, technical guides, and verified case studies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {AEO_CANONICAL_INTERNAL_LINKS.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.targetSlug}
                  className="p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-xl hover:border-teal-400 hover:bg-slate-900/80 transition-all flex flex-col justify-between group shadow-sm"
                >
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
                    {link.anchorText}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 mt-2 block">
                    {link.entityRelation.replace('http://schema.org/', '')} &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Technical Guide Callout & Foundational Concepts */}
          <div className="space-y-4 pt-8 max-w-3xl mx-auto text-center">
            <div className="p-5 rounded-2xl bg-teal-950/30 border border-teal-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed shadow-md text-left">
              To review the underlying data structures that govern passage extraction, read our technical guide on how to <Link href="/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps" className="text-teal-400 font-semibold hover:underline">fix AI brand hallucinations and evidence gaps</Link> using verified provenance networks.
            </div>

            <p className="text-xs text-slate-400 font-mono">
              Looking for foundational concepts? Read our guide on <Link href="/services/aeo/definition" className="text-teal-400 font-semibold hover:underline">What is AEO (Answer Engine Optimisation)?</Link> or explore specialised solutions like <Link href="/services/aeo/shopify" className="text-cyan-400 hover:underline font-medium">Shopify AEO Services</Link> and <Link href="/services/aeo/local-business" className="text-cyan-400 hover:underline font-medium">Local Business Visibility</Link>.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
