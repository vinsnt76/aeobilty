'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { trackGaEvent } from '@/lib/gtag';

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
  FileText,
  ChevronDown,
  HelpCircle,
  Users,
  Calendar,
  Rocket,
  Boxes,
  FileCheck,
  Code,
  Building2,
  Activity,
  Wrench
} from 'lucide-react';

export const AI_MARKETING_INTERNAL_LINKS = [
  {
    targetSlug: "/solutions/aeo-sprint",
    anchorText: "focused micro-sprints",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-blueprint",
    anchorText: "The AEObility Blueprint",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions",
    anchorText: "View current service pricing and scope",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function AISearchMarketingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [diagnosticSubmitted, setDiagnosticSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const [diagnosticData, setDiagnosticData] = useState({
    websiteUrl: '',
    name: '',
    email: ''
  });

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    website: '',
    serviceType: 'unsure',
    message: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const selectSprintForForm = (typeKey: string) => {
    setContactData(prev => ({ ...prev, serviceType: typeKey }));
    const formElement = document.getElementById('ai-contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiagnosticSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'ai_diagnostic_scan_form',
      lead_type: 'ai_readiness_scan',
      value: 1,
    });
    setDiagnosticSubmitted(true);
    setTimeout(() => {
      setDiagnosticSubmitted(false);
      setDiagnosticData({ websiteUrl: '', name: '', email: '' });
    }, 6000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'ai_search_contact_form',
      lead_type: 'ai_marketing_enquiry',
      service_selected: contactData.serviceType,
      value: 1,
    });
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactData({ name: '', email: '', website: '', serviceType: 'unsure', message: '' });
    }, 6000);
  };

  const faqs = [
    {
        "question": "Is AI search optimisation relevant for small Adelaide businesses?",
        "answer": "Yes. AI recommendations heavily favour clear, local, and well-structured businesses. Because many Adelaide competitors have not optimised for generative engines, early adoption offers a significant advantage for local SMBs."
    },
    {
        "question": "What’s the simplest way to get started with AI search in Adelaide?",
        "answer": "Start with the essentials: ensure your robots.txt allows AI bot crawling, deploy accurate LocalBusiness schema, complete your Google Business Profile (GBP), and publish 8–15 real customer FAQs using FAQPage schema."
    },
    {
        "question": "How does AI search help us win more local SA leads?",
        "answer": "Local buyers increasingly use AI to find specific solutions, like the 'best commercial plumber in Adelaide' or scenario-based queries. By structuring your answers to match these intents, AI tools will serve your brand directly to high-intent leads."
    },
    {
        "question": "Do we need a big budget to benefit from AI search optimisation?",
        "answer": "No. Clarity and consistency outpace massive ad budgets in AI search. You can achieve substantial wins simply by fixing technical basics, structuring your business data, and providing direct answers to real customer questions."
    },
    {
        "question": "How quickly can an Adelaide business expect to see AI search results?",
        "answer": "Foundational fixes—such as GBP alignment, adding FAQs, and deploying schema—can yield quick visibility wins as AI crawlers index the changes. Broader entity authority builds progressively over subsequent training cycles."
    }
];

  const engagementPaths = [
    {
      key: "micro-sprint",
      anchorId: "ai-micro-sprints",
      icon: <Rocket className="w-6 h-6 text-aeo-purple" />,
      title: "AEO technical micro-sprint",
      code: "SS1 / SS2",
      price: "From $495 AUD",
      priceSub: "ex. GST",
      scope: "One priority page or schema fix",
      description: "Choose one focused priority for $495 AUD ex. GST: Schema Markup Deployment, Single Page Atomic Rewrite, or Category Answer Unit.",
      techNote: "For technical teams: Deployment of nested JSON-LD graphs and atomic HTML passage markup.",
      whenToChoose: "Choose this when you have one specific page or schema gap limiting AI search readability.",
      ctaLabel: "Discuss Micro-Sprint"
    },
    {
      key: "foundation",
      anchorId: "ai-foundation",
      icon: <Boxes className="w-6 h-6 text-aeo-cyan" />,
      title: "Foundation implementation",
      code: "MACRO TIER",
      price: "From $3,195 AUD",
      priceSub: "ex. GST",
      scope: "Connected improvements across key service pages & entity data",
      description: "Combine agreed improvements across structured data, atomic page rewrites, internal linking, and citation structures in a focused four-week engagement.",
      techNote: "For technical teams: Multi-page schema integration, internal linking lattice refactoring, and citation alignment.",
      whenToChoose: "Choose this when your business requires connected improvements across multiple service pages.",
      ctaLabel: "Discuss Foundation Tier"
    },
    {
      key: "blueprint",
      anchorId: "ai-blueprint",
      icon: <Compass className="w-6 h-6 text-aeo-cyan" />,
      title: "The AEObility blueprint",
      code: "BPSTRAT",
      price: "$995 AUD",
      priceSub: "ex. GST",
      scope: "Full digital audit & 90-day roadmap",
      description: "Audit your website structure, entity signals, and query opportunities. Receive a practical 90-day roadmap. 100% credited toward Foundation work.",
      techNote: "For technical teams: Technical gap analysis, entity salience review, and query fan-out mapping.",
      whenToChoose: "Choose this when you need a clear diagnostic plan before committing to implementation.",
      ctaLabel: "Discuss $995 Blueprint"
    }
  ];

      const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/services/ai-search-marketing/adelaide#webpage",
        "url": "https://aeobility.com.au/services/ai-search-marketing/adelaide",
        "name": "AI Search Optimisation Services Adelaide | AEObility",
        "image": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/images/services/ai-search-optimisation-adelaide_AEObility.webp"
        },
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://aeobility.com.au/#website",
          "url": "https://aeobility.com.au/"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://aeobility.com.au/services/ai-search-marketing/adelaide#professional-service",
        "name": "AEObility AI Search Optimisation Adelaide",
        "description": "Professional AI search marketing, GEO, and answer engine optimisation services for businesses and clinics throughout the Adelaide metropolitan region.",
        "url": "https://aeobility.com.au/services/ai-search-marketing/adelaide",
        "telephone": "+61-480 286 282",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Adelaide",
          "addressRegion": "SA",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-34.9285",
          "longitude": "138.6007"
        },
        "areaServed": {
          "@type": "City",
          "name": "Adelaide",
          "sameAs": "https://en.wikipedia.org/wiki/Adelaide"
        },
        "sameAs": [
          "https://maps.app.goo.gl/zWC3RxsLV9JMBoGRA",
          "https://www.linkedin.com/company/133445734/"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/ai-search-marketing/adelaide#service",
        "name": "AI Search Optimisation Adelaide",
        "serviceType": "AI Search Optimisation",
        "provider": {
          "@id": "https://aeobility.com.au/#organisation"
        },
        "areaServed": {
          "@type": "City",
          "name": "Adelaide",
          "sameAs": "https://en.wikipedia.org/wiki/Adelaide"
          }
        },
        {
                "@type": "FAQPage",
                "@id": "https://aeobility.com.au/services/ai-search-marketing/adelaide#faq",
                "mainEntity": [
                        {
                                "@type": "Question",
                                "name": "Is AI search optimisation relevant for small Adelaide businesses?",
                                "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes. AI recommendations heavily favour clear, local, and well-structured businesses. Because many Adelaide competitors have not optimised for generative engines, early adoption offers a significant advantage for local SMBs."
                                }
                        },
                        {
                                "@type": "Question",
                                "name": "What’s the simplest way to get started with AI search in Adelaide?",
                                "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Start with the essentials: ensure your robots.txt allows AI bot crawling, deploy accurate LocalBusiness schema, complete your Google Business Profile (GBP), and publish 8–15 real customer FAQs using FAQPage schema."
                                }
                        },
                        {
                                "@type": "Question",
                                "name": "How does AI search help us win more local SA leads?",
                                "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Local buyers increasingly use AI to find specific solutions, like the 'best commercial plumber in Adelaide' or scenario-based queries. By structuring your answers to match these intents, AI tools will serve your brand directly to high-intent leads."
                                }
                        },
                        {
                                "@type": "Question",
                                "name": "Do we need a big budget to benefit from AI search optimisation?",
                                "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "No. Clarity and consistency outpace massive ad budgets in AI search. You can achieve substantial wins simply by fixing technical basics, structuring your business data, and providing direct answers to real customer questions."
                                }
                        },
                        {
                                "@type": "Question",
                                "name": "How quickly can an Adelaide business expect to see AI search results?",
                                "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Foundational fixes—such as GBP alignment, adding FAQs, and deploying schema—can yield quick visibility wins as AI crawlers index the changes. Broader entity authority builds progressively over subsequent training cycles."
                                }
                        }
                ]
        }
      ]
    };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Unified JSON-LD Connected Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. Hero Block with Clean Featured WebP Image Backdrop & Overlaid CTAs */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <Cpu className="w-4 h-4 text-aeo-cyan" />
              <span>AI Search Marketing &amp; Generative Strategy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              AI search marketing for <span className="text-gradient-aeo">Adelaide businesses</span>
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Adelaide is one of the most winnable AI search markets in Australia. Compared with Sydney and Melbourne, there is less noise, fewer agencies doing advanced AEO and GEO work, and a lot of businesses still relying on basic SEO or word-of-mouth. That is a challenge for some, but a genuine opportunity for Adelaide businesses that move early.
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed mt-4">
                Conversational search engines like ChatGPT, Google AI Overviews, and Perplexity do not just match keywords. They read, pull apart, and piece together actual facts using retrieval-augmented generation (RAG). For local clinics, tradies, and professional services across Adelaide and greater South Australia, that means businesses with clear, structured data are the ones AI systems understand and recommend with confidence.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed mt-4">
                AEObility builds the bridge between your brand and generative search. As your local visibility partner, we organise your business details across search engines, AI platforms, and digital maps so the right customers find you at the exact moment they need your help. We structure your content so machines can easily read and verify your real-world details, making sure your business stays visible and accurate across everyday chat interfaces and map apps.
              </p>

                <div className="mt-6 p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                  <p className="text-sm text-cyan-50 font-serif leading-relaxed">
                    See how machine-readable identity architecture reduces context dilution in our <Link href="/knowledge-hub/guides" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-300">Information Architecture & Lattice Overview</Link>.
                  </p>
                </div>
  
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>Foundation Implementation from $3,195 AUD ex. GST</span>
              </div>
            </div>

            {/* Featured 1200x800 WebP Image Hero Banner with Overlaid CTAs */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/services/ai-search-marketing-strategy_AEObility.webp"
                alt="AEObility AI search marketing strategy interface illustrating vector retrieval accuracy, prompt citation tracking, and structured entity verification."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-3.5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix one technical gap or build a comprehensive AI search foundation.</span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 font-serif block">Typical delivery: 4–5 business days from confirmed scope and access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => selectSprintForForm('micro-sprint')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Discuss AI Search Strategy</span>
                  </button>
                  <a
                    href="#ai-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-white font-semibold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Run a free readiness scan</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Looking for specific technical execution? Explore our <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">focused micro-sprints</Link> from $495 ex. GST or <Link href="/solutions/aeo-blueprint" className="text-cyan-400 hover:underline font-medium">The AEObility Blueprint</Link>.
            </p>
          </section>

          {/* New Copy Section: Who We Represent & Industry Focus */}
          <section className="border-t border-white/10 pt-16 space-y-12 scroll-mt-24">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Who we represent block */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                  Who we represent and how AI sees you
                </h2>
                <p className="text-base text-zinc-300 font-sans leading-relaxed">
                  When we set up your Adelaide presence for AI search, we are deliberate about five things:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">Who you are</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed">AEObility acts as your trusted, first-party authority for AI search optimisation across South Australia.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">What you offer</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed">Our core service is custom AI search optimisation (AEO/GEO) that improves how often you are cited in tools like ChatGPT, Google AI Overviews, Gemini, and Perplexity.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors md:col-span-2">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">Where you operate</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed">We centre your service area on the City of Adelaide, SA, then extend it across South Australia to cover key suburbs and regions like Adelaide CBD, Norwood, Glenelg, and Prospect.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">Who you serve</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed mb-3">We focus on three main groups:</p>
                    <ul className="space-y-2 text-sm text-zinc-400 font-serif list-disc pl-4 marker:text-cyan-500">
                      <li>South Australian SMBs and local service businesses that want more high-intent enquiries</li>
                      <li>Professional services (accountants, lawyers, clinics, and consultancies) targeting SA clients</li>
                      <li>Businesses looking for a low-competition, high-opportunity AI search market where early movers can dominate</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">How you are represented</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed">In structured data and AI knowledge graphs, your Adelaide entity is modelled as a LocalBusiness (subtype: ProfessionalService) so search engines and AI assistants can clearly identify you as a verified, location-based service provider.</p>
                  </div>
                </div>
              </div>

              {/* Industry Focus block */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                  Industry focus
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl bg-black/40 border border-white/5 items-start">
                    <div className="p-3 bg-cyan-950/40 rounded-lg text-cyan-400 shrink-0 mt-0.5">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-soehne-breit mb-1">Local SMBs and service businesses</h3>
                      <p className="text-sm text-zinc-400 font-serif leading-relaxed">Helping Adelaide operators show up when locals ask AI for recommendations, whether that is &quot;best accountant in Adelaide&quot;, &quot;reliable plumber near Norwood&quot;, or &quot;who can help with X in Glenelg&quot;.</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl bg-black/40 border border-white/5 items-start">
                    <div className="p-3 bg-purple-950/40 rounded-lg text-purple-400 shrink-0 mt-0.5">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-soehne-breit mb-1">Professional services and clinics</h3>
                      <p className="text-sm text-zinc-400 font-serif leading-relaxed">Setting up clear practitioner profiles, verified local addresses, and precise proximity data so patients and clients find you when they search for care or advice in their local Adelaide suburb.</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl bg-black/40 border border-white/5 items-start">
                    <div className="p-3 bg-cyan-950/40 rounded-lg text-cyan-400 shrink-0 mt-0.5">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-soehne-breit mb-1">Multi-location and growth-focused brands</h3>
                      <p className="text-sm text-zinc-400 font-serif leading-relaxed">Fixing inconsistent listings and unclear service boundaries so businesses with multiple SA locations stay trusted and visible in map packs, voice search, and AI-generated shortlists.</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <p className="text-base text-zinc-300 font-sans leading-relaxed">
                    Traditional digital marketing relies on churning out extra web pages and repeating keywords. AEObility replaces keyword-dense tactics with structured facts that make your services crystal clear to modern answer engines. When your core business details are neatly organised into single-topic segments, AI models can easily verify your brand and point people straight to you. We roll out these technical upgrades in fast, fixed-scope sprints, with zero lock-in contracts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. "Choose your starting point" Engagement Grid */}
          <section id="engagement-paths" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Choose your starting point</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Select a targeted micro-sprint, a comprehensive foundation implementation, or a diagnostic audit.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementPaths.map((path, idx) => (
                <div id={path.anchorId} key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col justify-between space-y-5 hover:border-cyan-500/40 transition-all duration-300 group scroll-mt-24">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-black border border-white/10 rounded-xl shrink-0">
                        {path.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                        {path.code}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white font-soehne-breit leading-snug">{path.title}</h3>
                      <div className="text-sm font-bold text-cyan-300 font-mono mt-1">
                        {path.price} <span className="text-[10px] text-zinc-400 font-normal">{path.priceSub}</span>
                      </div>
                      <span className="text-[11px] text-zinc-400 font-mono block mt-1">Scope: {path.scope}</span>
                    </div>

                    <p className="text-xs text-zinc-300 font-serif leading-relaxed pt-1">
                      {path.description}
                    </p>

                    <div className="bg-black/50 border border-white/5 p-2.5 rounded-lg text-[11px] text-zinc-400 font-serif leading-relaxed">
                      <strong className="text-white block mb-0.5">When to choose:</strong>
                      <span>{path.whenToChoose}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/5">
                    <p className="text-[10px] text-zinc-500 font-mono leading-tight">{path.techNote}</p>
                    <button
                      type="button"
                      onClick={() => selectSprintForForm(path.key)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/15 hover:border-cyan-400 text-white font-bold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer"
                    >
                      <span>{path.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Clean 3-Tier Comparison Matrix Table */}
            <div id="ai-comparison" className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-md scroll-mt-24">
              <table className="w-full text-left text-xs font-serif border-collapse min-w-[580px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    <th className="p-3.5 sm:p-4">Service / Tier</th>
                    <th className="p-3.5 sm:p-4">Target Scope</th>
                    <th className="p-3.5 sm:p-4">Best For</th>
                    <th className="p-3.5 sm:p-4 text-right">Price (ex. GST)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEO Micro-Sprint</td>
                    <td className="p-3.5 sm:p-4">1 Defined Priority Page / Schema Fix</td>
                    <td className="p-3.5 sm:p-4">Quick fix for one technical issue</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $495 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEObility Blueprint</td>
                    <td className="p-3.5 sm:p-4">Full Digital Audit &amp; 90-Day Roadmap</td>
                    <td className="p-3.5 sm:p-4">Unclear what is limiting search visibility</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">$995 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Foundation Implementation</td>
                    <td className="p-3.5 sm:p-4">Connected Multi-Page &amp; Entity Fixes</td>
                    <td className="p-3.5 sm:p-4">Connected improvements across core services</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $3,195 AUD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Inclusions Box */}
            <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-5 text-xs text-zinc-300 font-serif leading-relaxed space-y-3 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span>Every AEObility Engagement includes:</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300 font-serif">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>One agreed business priority, specified schema deployment, or page rewrite work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Validation checks, summary of completed changes, and complete handover notes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Typical delivery: 4–5 business days for Micro-Sprints. View <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">current service pricing and scope</Link>.</span>
                </li>
              </ul>
            </div>

            {/* Deliverables Ownership Statement */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">You own the agreed deliverables</strong>
                  <span>Use completed code and handover notes with your internal developer, or ask AEObility to implement the agreed changes.</span>
                </div>
              </div>
            </div>
          </section>

          
            {/* Action entity resolution framework CTA */}
            <section className="border-t border-white/10 pt-16 scroll-mt-24">
              <div className="max-w-3xl mx-auto bg-zinc-950/90 border border-cyan-500/30 p-8 sm:p-12 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-md text-center space-y-6">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full filter blur-3xl -z-10" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Check your AI search footprint</h3>
                <p className="text-sm sm:text-base text-zinc-300 font-serif max-w-2xl mx-auto leading-relaxed">
                  Are your Adelaide listings getting lost in the algorithms? Run a live scan through our diagnostic portal to see how easily search engines can read your site and spot the gaps holding back your visibility. In minutes, you will see which AI platforms can and cannot find you, plus a short list of fixes to prioritise for the SA market.
                </p>
                <div className="pt-2">
                  <Link href="/diagnostic?auto=true&intent=ai+search+optimisation+adelaide" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                    <Search className="w-4 h-4 text-black" />
                    <span>Run a live scan</span>
                  </Link>
                </div>
              </div>
            </section>
  

          {/* 4. Operational 3-Step Process Flow Pipeline Graphic */}
          <section id="ai-process" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Simple 3-Step Operational Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How AI search optimisation works</h2>
              <p className="text-xs text-white/60 font-serif">Clear sequence from initial readiness scan to complete handover notes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">1</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Readiness audit</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run a free scan or confirm your site priorities with our strategy team.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-purple-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(168,85,247,0.2)]">2</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">4–5 Day Execution</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Deploy agreed schema markup, atomic page rewrites, or internal linking.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">3</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Validation &amp; handover</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run validation checks and receive complete documentation &amp; ownership notes.</p>
              </div>
            </div>
          </section>

          {/* 5. Bottom Conversion CTA Block + Direct Contact Form */}
          <section id="ai-contact-form" className="border-t border-white/10 pt-16 text-center space-y-8 scroll-mt-24">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Discuss your AI search strategy</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Tell us about your business goals and AI search priorities. We will confirm scope and pricing before you commit. <Link href="/contact" className="text-cyan-400 hover:underline font-medium">Request a quote</Link>.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-1">
                <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>You will speak with an AEObility specialist based in Perth. Complex scopes or strategic requirements may be reviewed by senior AEObility specialists.</span>
              </div>
            </div>

            {/* Inline AI Search Contact Form */}
            <div className="max-w-xl mx-auto bg-zinc-950/90 border border-white/10 p-6 sm:p-8 rounded-2xl text-left shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-2xl -z-10" />
              <div className="flex items-center justify-between gap-4 mb-1.5">
                <h3 className="text-xl font-bold text-white font-soehne-breit">Discuss AI search optimisation</h3>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
                  AI Search Sprint
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-serif mb-6 leading-relaxed">
                Select the option you are considering, or choose &quot;Not sure yet — Help me decide&quot; if you would like help deciding.
              </p>

              {contactSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Enquiry received</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you for reaching out. Our AEObility strategy team will review your details and get in touch within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="ai-name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="ai-name"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Vince Baker"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="ai-email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="ai-email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="vince@example.com.au"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="ai-service-type">
                      What would you like to discuss?
                    </label>
                    <select
                      id="ai-service-type"
                      value={contactData.serviceType}
                      onChange={(e) => setContactData({ ...contactData, serviceType: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-medium"
                    >
                      <option value="unsure">Not sure yet — Help me decide</option>
                      <option value="micro-sprint">AEO Micro-Sprint (From $495 AUD)</option>
                      <option value="blueprint">The AEObility Blueprint ($995 AUD)</option>
                      <option value="foundation">Foundation Implementation (From $3,195 AUD)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="ai-website">
                      Website URL (Optional)
                    </label>
                    <input
                      type="text"
                      id="ai-website"
                      value={contactData.website}
                      onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="mybusiness.com.au"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="ai-message">
                      What would you like help with?
                    </label>
                    <textarea
                      id="ai-message"
                      required
                      rows={3}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="For example: schema markup deployment, restructuring a key service page, or an audit of our AI visibility..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                  >
                    <span>Discuss AI Search Strategy</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center font-serif">
                    Clear scope. Fixed pricing. No lock-in contracts. Your privacy is protected.
                  </p>
                </form>
              )}
            </div>
          </section>

          {/* 6. FAQ Accordion Section (All 6 Answers Rendered in DOM) */}
          <section id="faq-ai" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about AEObility AI search marketing services.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-zinc-950/80 border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-bold text-white">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyan-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-white/5 pt-3 font-serif transition-all duration-200 ${
                        isOpen ? 'block' : 'hidden'
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}


