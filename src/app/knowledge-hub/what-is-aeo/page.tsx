'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Zap,
  Target,
  Building2,
  FileCheck,
  Search
} from 'lucide-react';

export default function WhatIsAeoPage() {
  const router = useRouter();
  const [heroUrl, setHeroUrl] = useState('');
  const [heroQuery, setHeroQuery] = useState('');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroUrl.trim()) return;

    let formatted = heroUrl.trim();
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = `https://${formatted}`;
    }
    const queryParam = heroQuery.trim() ? `&query=${encodeURIComponent(heroQuery.trim())}` : '';
    router.push(`/diagnostic?url=${encodeURIComponent(formatted)}${queryParam}&auto=true`);
  };

  const faqs = [
    {
      question: "What does AEO stand for in digital marketing?",
      answer: "AEO stands for Answer Engine Optimisation. Unlike traditional SEO which focuses on web page ranking positions in blue-link search results, AEO structures business data for direct passage retrieval across conversational AI surfaces like ChatGPT, Google AI Overviews, Perplexity, and Gemini."
    },
    {
      question: "How is AEO different from traditional SEO?",
      answer: "Traditional SEO relies on keyword matching, backlinks, and ranking web page URLs in search engine result pages (SERPs). AEO builds on SEO foundations by formatting content into machine-readable JSON-LD entity graphs, atomic passage blocks, and verified proof triples so AI models can cite your brand."
    },
    {
      question: "Why is Answer Engine Optimisation important for Australian businesses?",
      answer: "As buyers increasingly rely on conversational assistants and Google AI features for local service recommendations, businesses without clear machine-readable entity data risk being omitted or misrepresented in AI synthesised answers."
    },
    {
      question: "What are the core principles of AEO?",
      answer: "The core principles of AEO include establishing unambiguous brand identity signals (JSON-LD schema), building topical entity authority, structuring content into 90–120 token atomic answer blocks, ensuring multi-platform citation consistency, and verifying claims with evidence triples."
    }
  ];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-aeo#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/what-is-aeo",
        "name": "What is AEO? Answer Engine Optimisation Guide | AEObility",
        "description": "Discover what Answer Engine Optimisation (AEO) means in digital marketing. Learn how machine learning models ingest, verify, and cite business information.",
        "inLanguage": "en-AU",
        "primaryImageOfPage": {
          "@id": "https://aeobility.com.au/images/knowledge-hub/ai-engine-optimization-visibility-scanner-AEObility.webp#primaryimage"
        },
        "image": {
          "@id": "https://aeobility.com.au/images/knowledge-hub/ai-engine-optimization-visibility-scanner-AEObility.webp#primaryimage"
        },
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "author": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/vince-baker#person",
          "name": "Vince Baker",
          "jobTitle": "Technical Search Architect",
          "url": "https://aeobility.com.au/vince-baker"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
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
              "name": "What is AEO?",
              "item": "https://aeobility.com.au/knowledge-hub/what-is-aeo"
            }
          ]
        }
      },
      {
        "@type": "DefinedTermSet",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-aeo#termset",
        "name": "Answer Engine Optimisation Terminology",
        "hasDefinedTerm": {
          "@type": "DefinedTerm",
          "@id": "https://aeobility.com.au/knowledge-hub/what-is-aeo#definition",
          "name": "Answer Engine Optimisation (AEO)",
          "description": "Answer Engine Optimisation (AEO) is a technical search discipline that structures brand identity, web content, and first-party facts into machine-readable JSON-LD entity graphs and atomic passage blocks. Built for Retrieval-Augmented Generation (RAG) pipelines, Large Language Models (LLMs), and generative search platforms like Google AI Overviews, Perplexity, and ChatGPT, AEO ensures retrieval engines can resolve entity relationships, verify authoritative proof triples, and cite the brand directly within synthesised answers.",
          "inDefinedTermSet": "https://aeobility.com.au/knowledge-hub/what-is-aeo#termset"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-aeo#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/images/knowledge-hub/ai-engine-optimization-visibility-scanner-AEObility.webp#primaryimage",
        "url": "https://aeobility.com.au/images/knowledge-hub/ai-engine-optimization-visibility-scanner-AEObility.webp",
        "contentUrl": "https://aeobility.com.au/images/knowledge-hub/ai-engine-optimization-visibility-scanner-AEObility.webp",
        "headline": "AI Visibility Scanner – Connecting User Prompts to Business Entities via AEO",
        "name": "AI Visibility Scanner – Connecting User Prompts to Business Entities via AEO",
        "caption": "Conceptual graphic illustrating Answer Engine Optimization (AEO). An AI scanner robot parses prompt coordinate points and vector data, demonstrating how AI models discover, interpret, and link digital entities to business brands.",
        "description": "Conceptual graphic illustrating Answer Engine Optimization (AEO). An AI scanner robot parses prompt coordinate points and vector data, demonstrating how AI models discover, interpret, and link digital entities to business brands.",
        "author": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/vince-baker#person",
          "name": "Vincent Baker (AEObility)"
        },
        "creator": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/vince-baker#person",
          "name": "Vincent Baker (AEObility)"
        },
        "copyrightNotice": "© 2026 AEObility. All rights reserved.",
        "copyrightHolder": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "creditText": "AEObility",
        "provider": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organization",
          "name": "AEObility"
        },
        "keywords": [
          "AEO",
          "Answer Engine Optimization",
          "AI Visibility Scanner",
          "Business Entity",
          "Vector Space",
          "AI Search Optimization",
          "GEO",
          "Prompt Retrieval",
          "Aeobility",
          "Entity SEO"
        ],
        "contentLocation": {
          "@type": "Place",
          "name": "Perth, Western Australia, Australia",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Perth",
            "addressRegion": "Western Australia",
            "addressCountry": "Australia"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -31.9505,
            "longitude": 115.8605
          }
        },
        "fileFormat": "image/webp",
        "width": 1200,
        "height": 800
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      
      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledge} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[80px] space-y-16">
          
          {/* SECTION 1: HERO / CLEAR ANSWER & INSTANT CHECK (Text-First) */}
          <section className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-aeo-cyan" />
              <span>WHAT IS AEO</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              What is <span className="text-gradient-aeo">Answer Engine Optimisation?</span>
            </h1>

            {/* Lean Author & Provenance Bar */}
            <div className="flex items-center justify-center gap-3 py-1">
              <Image
                src="/images/about/vince-baker-profile_AEObility.webp"
                alt="Vince Baker - Technical Search Architect"
                width={36}
                height={36}
                className="w-9 h-9 rounded-full border border-cyan-400/50 object-cover shadow-sm"
              />
              <div className="text-left text-xs font-mono">
                <div className="text-zinc-200">
                  By{' '}
                  <Link href="/vince-baker" className="text-cyan-400 font-bold hover:underline">
                    Vince Baker
                  </Link>{' '}
                  <span className="text-zinc-500">|</span> Technical Search Architect
                </div>
                <div className="text-zinc-400 text-[11px]">
                  Reviewed &amp; Updated: 1 October 2026 <span className="text-zinc-500">|</span> Fact-Checked &amp; Entity Grounded
                </div>
              </div>
            </div>

            {/* Left-Aligned 2-Paragraph Introductory Unit */}
            <div className="max-w-3xl mx-auto space-y-3 text-left">
              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                <strong>Answer Engine Optimisation (AEO)</strong> is the process of structuring business facts so AI engines like ChatGPT, Perplexity, and Google AI Overviews can discover, verify, and recommend your brand.
              </p>

              <p className="text-sm sm:text-base text-slate-300 font-serif leading-relaxed">
                While traditional SEO focuses on earning links and keyword positions for 10 blue links, AEO formats your data into <strong>verified entity graphs</strong> and direct answer passages that AI models cite with confidence.
              </p>
            </div>

            {/* Low-Friction Primary Hero CTA Container (Overlaid directly on top of the Brand Scanner Image) */}
            <div className="mt-8 rounded-2xl border border-[#00E5FF]/40 shadow-[0_0_40px_rgba(0,229,255,0.2)] text-left max-w-5xl mx-auto isolate relative overflow-hidden bg-slate-950">
              {/* Background Image Layer */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <Image
                  src="/images/knowledge-hub/ai-engine-optimization-visibility-scanner-AEObility.webp"
                  alt="AI Engine Optimization Visibility Scanner - AEObility"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover object-center opacity-35 md:opacity-50 transition-opacity duration-700"
                  priority
                />
                {/* Lighter Gradient Overlay Masks for Maximum Artwork Visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/75 via-[#0A0F1C]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 via-transparent to-[#0A0F1C]/30" />
              </div>

              {/* Specular Edge Glow Top Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/80 to-transparent pointer-events-none z-20" />

              {/* Overlaid Form & Content Layer */}
              <div className="relative z-10 p-6 sm:p-8 md:p-10 space-y-6">
                {/* Header & Title Stack */}
                <div className="space-y-3 text-left max-w-md">
                  {/* Single Context Eyebrow Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/90 border border-cyan-500/50 text-aeo-cyan text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-aeo-cyan animate-pulse" />
                    <span>Instant On-Screen Evaluation</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-soehne-breit leading-tight drop-shadow-md">
                    AI Visibility Scan
                  </h2>

                  <p className="text-sm sm:text-base text-zinc-100 font-medium leading-relaxed drop-shadow max-w-sm">
                    Check if AI search engines understand what your business sells. Enter your website and the main service you want to be recommended for.
                  </p>
                </div>

                {/* Overlaid Form Controls */}
                <form onSubmit={handleHeroSubmit} className="border-t border-slate-700/60 pt-5 space-y-5">
                  {/* Left-Aligned Input Stack - Aligned Width with Trust Note (max-w-md) */}
                  <div className="space-y-4 max-w-md">
                    {/* Line 1: Website Domain URL */}
                    <div className="space-y-1.5">
                      <label htmlFor="hero-scan-url" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 drop-shadow">
                        Website Domain URL
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input
                          id="hero-scan-url"
                          type="text"
                          required
                          placeholder="e.g. example.com.au"
                          value={heroUrl}
                          onChange={(e) => setHeroUrl(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-500 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] placeholder:text-slate-400 placeholder:opacity-100 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Line 2: Core Service or Topic (On New Line, Aligned Left) */}
                    <div className="space-y-1.5">
                      <label htmlFor="hero-scan-query" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 drop-shadow">
                        Core Service or Topic
                      </label>
                      <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input
                          id="hero-scan-query"
                          type="text"
                          placeholder="e.g. Answer Engine Optimisation"
                          value={heroQuery}
                          onChange={(e) => setHeroQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-500 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] placeholder:text-slate-400 placeholder:opacity-100 transition-all shadow-inner"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar: Cyan Blue Sub-Text & Bottom Right High-Luminance CTA */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-1">
                    <p className="text-xs text-cyan-300 font-mono max-w-md leading-relaxed drop-shadow p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 backdrop-blur-sm">
                      Once your diagnostic generates on screen, open the chat with <span className="text-[#00E5FF] font-bold underline decoration-cyan-500/50">AI Bill</span> to review the specific gaps and discuss practical fixes for your site.
                    </p>

                    <div className="md:self-end shrink-0">
                      <button
                        type="submit"
                        className="w-full md:w-auto px-7 py-4 rounded-xl text-[#050B14] font-bold text-base sm:text-lg tracking-wide border border-white/30 shadow-[0_0_20px_rgba(0,198,255,0.35),0_4px_12px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,242,254,0.6),0_6px_16px_rgba(0,0,0,0.5)] active:translate-y-0.5 active:shadow-[0_0_12px_rgba(0,198,255,0.4)] transition-all duration-200 ease-out whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
                        style={{ background: 'linear-gradient(135deg, #00F2FE 0%, #00C6FF 100%)' }}
                      >
                        <span>Run Free 45-Second AI Scan →</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* SEPARATE MODULE: Diagnostic Methodology & 3 Coverage Cards (Positioned Directly Beneath the Scan Container) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0F1C] border border-cyan-500/30 text-left max-w-5xl mx-auto space-y-4 shadow-xl">
              <p className="text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed">
                AEObility uses natural language processing (NLP) and Natural Language Web (NLWeb) analysis to evaluate your pages against real conversational search queries. In 45 seconds, you receive a direct on-screen diagnostic covering:
              </p>

              {/* 3 Diagnostic Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Entity and Schema Health</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Checks whether machine crawlers can resolve your core business facts, accreditations, and service locations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Retrieval Survival</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Evaluates how cleanly your key answers survive extraction by Retrieval-Augmented Generation (RAG) pipelines.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Target className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>AI Citation Share</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Identifies whether generative models cite your brand or default to a competitor for your priority topics.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Atomic Answer Block (High-Density Vector Retrieval Target) */}
            <div className="bg-gradient-to-r from-cyan-950/40 via-zinc-950 to-purple-950/40 border border-cyan-500/30 rounded-2xl p-6 text-left space-y-3 shadow-2xl">
              <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>WHY ANSWER ENGINE OPTIMISATION IS IMPORTANT FOR YOUR BUSINESS</span>
              </div>
              <h2 className="text-xl font-bold text-white font-soehne-breit">
                Answer Engine Optimisation (AEO)
              </h2>
              <p className="text-sm sm:text-base text-zinc-200 font-serif leading-relaxed">
                <strong>Answer Engine Optimisation (AEO)</strong> is a technical search discipline that structures brand identity, web content, and first-party facts into machine-readable JSON-LD entity graphs and atomic passage blocks. Built for Retrieval-Augmented Generation (RAG) pipelines, Large Language Models (LLMs), and generative search platforms like Google AI Overviews, Perplexity, and ChatGPT, AEO ensures retrieval engines can resolve entity relationships, verify authoritative proof triples, and cite the brand directly within synthesised answers.
              </p>
            </div>
          </section>

          {/* SECTION 2: THE BUSINESS RISK & REAL-WORLD IMPACT (Mid-Article Side-by-Side Infographic) */}
          <section className="space-y-8 border-t border-white/10 pt-12">
            <div className="space-y-3 text-center max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Commercial Impact</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">Why AEO Matters for Your Business</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed">
                People no longer just click links on Google. They ask AI assistants like ChatGPT, Perplexity, and Google AI Overviews for direct recommendations. If your web copy is vague, AI engines simply recommend your competitor instead.
              </p>
            </div>

            {/* Mid-Article Infographic: Traditional 10 Blue Links vs Synthesised Gemini/ChatGPT Answer */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="text-center space-y-1">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Side-by-Side Retrieval Architecture</span>
                <h3 className="text-xl font-bold text-white font-soehne-breit">
                  Traditional Search Results vs. Synthesised AI Answer Engines
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: Traditional 10 Blue Links Search Result */}
                <div className="p-5 bg-zinc-950/90 border border-slate-800 rounded-2xl space-y-4 flex flex-col justify-between shadow-lg text-left">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                      <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5 text-zinc-400" />
                        Traditional 10 Blue Links SERP
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                        Keyword Match
                      </span>
                    </div>

                    {/* Mock Search Bar */}
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 flex items-center justify-between">
                      <span className="truncate">&quot;best AEO &amp; local service specialists Perth&quot;</span>
                      <Search className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    </div>

                    {/* Mock SERP Result Cards */}
                    <div className="space-y-3 pt-1">
                      <div className="space-y-1 text-left p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                        <div className="text-[10px] font-mono text-zinc-500">Sponsored Ad • www.generic-directory.example</div>
                        <div className="text-xs font-bold text-blue-400 hover:underline">Top 10 Marketing Companies Perth 2026</div>
                        <div className="text-[11px] text-zinc-400 font-serif leading-snug line-clamp-2">
                          Find top listed agencies, read user reviews, and compare quotes for marketing services in WA...
                        </div>
                      </div>

                      <div className="space-y-1 text-left p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                        <div className="text-[10px] font-mono text-zinc-500">https://aeobility.com.au › services › aeo</div>
                        <div className="text-xs font-bold text-blue-400 hover:underline">Answer Engine Optimisation (AEO) Services | AEObility</div>
                        <div className="text-[11px] text-zinc-400 font-serif leading-snug line-clamp-2">
                          AEObility helps Australian businesses structure web data for conversational AI and search engines...
                        </div>
                      </div>

                      <div className="space-y-1 text-left p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60 opacity-60">
                        <div className="text-[10px] font-mono text-zinc-500">www.competitor-seo-agency.example</div>
                        <div className="text-xs font-bold text-blue-400 hover:underline">SEO &amp; Digital Services Perth</div>
                        <div className="text-[11px] text-zinc-400 font-serif leading-snug line-clamp-2">
                          Full service agency offering SEO, Google Ads, and social media management...
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 text-[11px] text-zinc-400 font-mono flex items-center justify-between">
                    <span>Friction: High cognitive load</span>
                    <span className="text-red-400 font-bold">10 Links to Click</span>
                  </div>
                </div>

                {/* Right: Synthesised Gemini / ChatGPT Answer */}
                <div className="p-5 bg-gradient-to-b from-cyan-950/40 via-zinc-950 to-zinc-950 border border-cyan-500/40 rounded-2xl space-y-4 flex flex-col justify-between shadow-2xl relative overflow-hidden text-left">
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2.5">
                      <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        Synthesised Gemini / ChatGPT Answer
                      </span>
                      <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        Verified JSON-LD Graph
                      </span>
                    </div>

                    {/* Mock AI Synthesised Response Panel */}
                    <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-cyan-500/30 text-left space-y-3 shadow-inner">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-white/5 pb-2">
                        <span className="text-cyan-300 font-bold">Direct Conversational Synthesis</span>
                        <span className="text-zinc-500">Passage Confidence: 98.4%</span>
                      </div>

                      <p className="text-xs text-zinc-200 font-serif leading-relaxed">
                        For Australian businesses seeking Answer Engine Optimisation (AEO) in Perth, <strong className="text-white font-semibold">AEObility</strong> provides technical schema infrastructure and 90-token atomic answer passage structuring.
                      </p>

                      <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 space-y-1">
                        <div className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider flex items-center justify-between">
                          <span>Verified Entity Citation [1]</span>
                          <span className="text-cyan-400 font-bold">Direct Recommendation</span>
                        </div>
                        <p className="text-[11px] text-zinc-200 font-serif leading-snug">
                          AEObility specialises in fixed-scope AEO Micro-Sprints, binding brand identity to ABN credentials and schema graphs across Google AI Overviews and ChatGPT Search.
                        </p>
                        <div className="pt-1 flex items-center gap-1 text-[10px] font-mono text-cyan-400">
                          <Globe className="w-3 h-3 text-cyan-400" />
                          <Link href="/services/aeo" className="hover:underline font-bold">https://aeobility.com.au/services/aeo</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-cyan-500/20 text-[11px] text-cyan-300 font-mono flex items-center justify-between">
                    <span>Outcome: Instant Verified Citation</span>
                    <span className="text-cyan-400 font-bold">1-Click Direct Answer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Concrete Real-World Example & Business Impact Matrix */}
            <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-white/10 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Real-World Scenario</span>
                <h3 className="text-xl font-bold text-white font-soehne-breit">Real-World Example: Winning Local Service Leads</h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                  When a customer in Perth asks ChatGPT for the best local electrician, specialist clinic, or commercial consultant, AI models select the business with clear, machine-verified details. If your details are hard for machines to parse, you lose the customer before they ever visit your website.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2 text-left">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                    <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Positional Bias</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    <strong className="text-white">Business Impact:</strong> Placing core services and locations at the top of structural passages ensures AI models read your key facts before context windows truncate.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2 text-left">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                    <FileCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Atomic Passages</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    <strong className="text-white">Business Impact:</strong> Formatting key answers into 2-3 sentence blocks under direct headings allows AI tools to quote your pricing and services verbatim.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2 text-left">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                    <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Entity Mesh Triples</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    <strong className="text-white">Business Impact:</strong> Linking your ABN, location facts, and founder identity stops conversational AI assistants from confusing your brand with competitors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: HOW IT WORKS (Three Core Pillars Explained Simply) */}
          <section className="space-y-8 border-t border-white/10 pt-12">
            <div className="space-y-3 text-center max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Execution Mechanics</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">How Answer Engine Optimisation Works</h2>
              <p className="text-sm text-zinc-300 font-serif leading-relaxed">
                We refactor your website copy into three structured pillars engineered for artificial intelligence retrieval systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3 text-left">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Pillar 1</span>
                <h3 className="text-lg font-bold text-white font-soehne-breit">Putting Key Facts First</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  We place your most important services, prices, and locations at the very top of structural web pages so search bots and RAG crawlers read them instantly where attention weights peak.
                </p>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3 text-left">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Pillar 2</span>
                <h3 className="text-lg font-bold text-white font-soehne-breit">Short, Direct Answers</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  We write clear, 2–3 sentence direct answer passages (80–120 tokens) under clean headings, giving conversational AI systems text they can extract and quote without paraphrasing.
                </p>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3 text-left">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Pillar 3</span>
                <h3 className="text-lg font-bold text-white font-soehne-breit">Connecting Business Details</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  We link your business name, address, phone number, ABN, and licences into a consistent JSON-LD entity graph that search engines and LLMs verify across external registries.
                </p>
              </div>
            </div>

            {/* Comparison Table: AEO vs SEO */}
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-950/80 p-6 text-left">
              <h3 className="text-lg font-bold text-white font-soehne-breit mb-4">AEO vs. Traditional SEO: At a Glance</h3>
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-cyan-400 font-mono">
                    <th className="py-3 px-4">Feature</th>
                    <th className="py-3 px-4">Traditional SEO</th>
                    <th className="py-3 px-4">Answer Engine Optimisation (AEO)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 font-serif text-zinc-300">
                  <tr>
                    <td className="py-3 px-4 font-bold text-white">Target Destination</td>
                    <td className="py-3 px-4">10 blue links search result pages</td>
                    <td className="py-3 px-4 text-cyan-300">AI synthesised summaries &amp; direct answer blocks</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-white">Primary Metric</td>
                    <td className="py-3 px-4">URL ranking positions &amp; organic clicks</td>
                    <td className="py-3 px-4 text-cyan-300">AI citation share, brand mentions &amp; recommendation frequency</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-white">Content Structure</td>
                    <td className="py-3 px-4">Long-form keyword dense blog posts</td>
                    <td className="py-3 px-4 text-cyan-300">90-token atomic answer blocks &amp; direct passage headings</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-white">Data Format</td>
                    <td className="py-3 px-4">Standard HTML tags &amp; basic meta tags</td>
                    <td className="py-3 px-4 text-cyan-300">JSON-LD entity relationship graphs &amp; verified proof triples</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 4: CONVERSION HANDOFF & STREAMLINED CTAs */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 border border-cyan-500/40 shadow-2xl space-y-6 text-left max-w-4xl mx-auto">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Strategic Solution Handoff</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">Ready to Fix Your AI Visibility Gaps?</h2>
                <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed">
                  Identified missing schema or retrieval gaps during your free scan? Our fixed-scope <strong>$995 AEObility Strategic Blueprint</strong> delivers a step-by-step technical roadmap, customized entity maps, and direct passage rewrites to get your business recommended across AI search engines and local maps.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/solutions/aeo-blueprint"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,205,216,0.3)] whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <span>See How the $995 Blueprint Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/solutions/aeo-sprint"
                  className="px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/20 hover:border-cyan-400 text-white font-bold text-sm transition-all whitespace-nowrap text-center"
                >
                  Explore Fixed-Scope Micro-Sprints
                </Link>
              </div>
            </div>
          </section>

          {/* SECTION 5: INTERNAL RADIAL LINKS & SITE STRUCTURE (Entity Mesh) */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2 text-left">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Internal Links &amp; Site Structure</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Entity Mesh: Related AEO Resources &amp; Service Hubs</h2>
              <p className="text-sm text-zinc-300 font-serif leading-relaxed max-w-3xl">
                Connect your understanding of Answer Engine Optimisation with our technical guides, machine definition triples, and commercial execution sprints:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <Link
                href="/services/aeo"
                className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/50 transition-all space-y-2 group text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">Commercial Hub</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit group-hover:text-cyan-300 transition-colors">
                  AEO Services &amp; Digital Infrastructure
                </h3>
                <p className="text-xs text-zinc-400 font-serif">
                  Explore our core commercial service offerings, micro-sprint options, and fixed-scope delivery timelines.
                </p>
              </Link>

              <Link
                href="/services/aeo/definition"
                className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/50 transition-all space-y-2 group text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">Core Definition Model</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit group-hover:text-cyan-300 transition-colors">
                  AEO Definition &amp; Machine Triple Schema
                </h3>
                <p className="text-xs text-zinc-400 font-serif">
                  Review the structured machine-readable triple model linking entity, relationship, and evidence.
                </p>
              </Link>

              <Link
                href="/knowledge-hub/aeo"
                className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/50 transition-all space-y-2 group text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">Technical Deep Dive</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit group-hover:text-cyan-300 transition-colors">
                  AEO Principles &amp; Machine Mechanics
                </h3>
                <p className="text-xs text-zinc-400 font-serif">
                  Learn how RAG pipelines, token weight distributions, and positional bias rules shape LLM citation ranking.
                </p>
              </Link>

              <Link
                href="/solutions/aeo-sprint"
                className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/50 transition-all space-y-2 group text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">Commercial Sprint</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit group-hover:text-cyan-300 transition-colors">
                  Fixed-Scope AEO Micro-Sprints
                </h3>
                <p className="text-xs text-zinc-400 font-serif">
                  Rapid 4 to 5 business day implementation sprints addressing structured data, atomic rewrites, and MCP setup.
                </p>
              </Link>
            </div>
          </section>

          {/* SECTION 6: FAQ SECTION */}
          <section className="border-t border-white/10 pt-12 space-y-6 text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">AEO Questions &amp; Answers</h2>
            </div>

            <div className="space-y-4 max-w-3xl">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/80 border border-white/10 rounded-xl space-y-2">
                  <h3 className="text-base font-bold text-white font-soehne-breit">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
