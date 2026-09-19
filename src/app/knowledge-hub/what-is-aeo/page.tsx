'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Brain, 
  Search, 
  Sparkles,
  Database,
  Cpu,
  Globe,
  X,
  Layers,
  ShieldCheck
} from 'lucide-react';

export default function WhatIsAeoPage() {
  const router = useRouter();
  const [heroUrl, setHeroUrl] = useState('');
  const [showStickyBanner, setShowStickyBanner] = useState(false);
  const [dismissSticky, setDismissSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrollPercentage = window.scrollY / scrollHeight;
      if (scrollPercentage > 0.4 && !dismissSticky) {
        setShowStickyBanner(true);
      } else if (scrollPercentage <= 0.4) {
        setShowStickyBanner(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissSticky]);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroUrl.trim()) return;

    let formatted = heroUrl.trim();
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = `https://${formatted}`;
    }
    router.push(`/diagnostic?url=${encodeURIComponent(formatted)}&auto=true`);
  };

  const faqs = [
    {
      question: "What does AEO stand for in digital marketing?",
      answer: "AEO stands for Answer Engine Optimisation. Unlike traditional SEO which focuses on web page ranking positions, AEO structures business data for direct passage retrieval across conversational AI surfaces like ChatGPT, Google AI Overviews, Perplexity, and Gemini."
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
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
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
          "description": "Answer Engine Optimisation (AEO) is the technical and structural practice of formatting digital content, business facts, and entity relationship graphs so Large Language Models and AI search engines can ingest, verify, and reference a brand as an explicit source when synthesising answers.",
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
          
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-medium">
              <BookOpen className="w-4 h-4 text-aeo-cyan" />
              <span>Core AEO Definition &amp; Educational Pillar</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              What is <span className="text-gradient-aeo">Answer Engine Optimisation (AEO)?</span>
            </h1>

            <p className="text-lg sm:text-xl text-cyan-300 font-semibold max-w-3xl mx-auto font-soehne-breit">
              Learn how modern AI systems read, verify, and cite business information across Google AI features, ChatGPT Search, and Perplexity.
            </p>

            <p className="text-base text-zinc-300 font-serif leading-relaxed max-w-3xl mx-auto">
              Answer Engine Optimisation (AEO) represents the structural evolution of digital marketing. While legacy SEO targets link indexation in search results, AEO structures facts into verified entity graphs using the <Link href="/diagnostic" className="text-aeo-cyan underline hover:text-cyan-300 font-semibold">AEObility Telemetry Diagnostic Engine</Link> so AI models cite your business directly.
            </p>

            {/* Interactive Hero Web Banner (Top of Page) */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#0A0F1C] border border-[#00E5FF] shadow-[0_0_30px_rgba(0,229,255,0.15)] text-left max-w-3xl mx-auto space-y-4">
              <div className="flex items-center gap-2 text-aeo-cyan text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-aeo-cyan animate-pulse" />
                <span>Instant AI Visibility Check</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-white font-soehne-breit">
                Wondering how AI models cite your business? Run a free 60-second diagnostic.
              </p>
              <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="relative flex-grow">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your website URL (e.g. example.com.au)"
                    value={heroUrl}
                    onChange={(e) => setHeroUrl(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-zinc-900/90 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-[#00E5FF] hover:bg-cyan-300 text-black font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Audit My Brand →</span>
                </button>
              </form>
            </div>
          </section>

          {/* Definition Box (Atomic Answer Block 1) */}
          <section className="bg-gradient-to-r from-cyan-950/40 via-zinc-950 to-purple-950/40 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xl">
            <span className="text-xs text-cyan-300 font-mono font-bold uppercase tracking-wider block">Atomic Definition Block</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit leading-snug">
              Answer Engine Optimisation (AEO) Defined
            </h2>
            <p className="text-sm sm:text-base text-zinc-200 font-serif leading-relaxed">
              <strong>Answer Engine Optimisation (AEO)</strong> is the technical and structural discipline of structuring web content, business facts, and entity relationship graphs so Large Language Models (LLMs) and generative search systems can retrieve, verify, and cite a brand as a primary authoritative source when generating direct answers.
            </p>
          </section>

          {/* AEO vs SEO Comparison */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">AEO vs Traditional SEO</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">Understanding the shift from link ranking to passage retrieval.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3">
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider block">Traditional SEO</span>
                <h3 className="text-lg font-bold text-white font-soehne-breit">Keyword Search &amp; Page Ranking</h3>
                <ul className="space-y-2 text-xs text-zinc-300 font-serif">
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-500 font-bold">•</span>
                    <span>Focuses on earning top positions in 10 blue links search result pages.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-500 font-bold">•</span>
                    <span>Measures organic positions, URL clicks, and page impressions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-500 font-bold">•</span>
                    <span>Relies heavily on lexical keyword density and backlink volume.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-cyan-500/30 rounded-2xl space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">AEO (AI Search)</span>
                <h3 className="text-lg font-bold text-white font-soehne-breit">Entity Retrieval &amp; Citation Inclusion</h3>
                <ul className="space-y-2 text-xs text-zinc-200 font-serif">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Focuses on making facts easy to retrieve, verify, and cite in synthesised AI answers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Measures brand mentions, citation accuracy, and AI referral traffic.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Relies on JSON-LD entity graphs, atomic passage blocks, and evidence triples.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mid-Page In-Line Callout Card (Contextual CTA) */}
          <section className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 border border-aeo-cyan/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl text-left">
              <span className="text-xs font-mono font-bold text-aeo-cyan uppercase tracking-wider block">AEO Strategic Blueprint</span>
              <p className="text-base sm:text-lg font-bold text-white font-soehne-breit leading-snug">
                Ready to upgrade your web presence for conversational search? See how our $995 AEO Strategic Blueprint delivers actionable schema and entity maps.
              </p>
            </div>
            <Link
              href="/solutions/aeo-blueprint"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,205,216,0.3)] whitespace-nowrap flex items-center gap-2"
            >
              <span>Explore $995 Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* Local AEO & Regional Implementation Section */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Regional Authority</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Local AEO &amp; Australian Entity Salience</h2>
              <p className="text-sm text-zinc-300 font-serif leading-relaxed max-w-3xl">
                For commercial enterprises in Australia, establishing clear local entity context prevents AI hallucination. Working alongside a <Link href="/services/perth/seo-specialist" className="text-aeo-cyan underline hover:text-cyan-300 font-semibold">Perth SEO specialist and local AEO consultant</Link> guarantees your NAP (Name, Address, Phone) and service definitions align cleanly across Google Maps, Apple Intelligence, and ChatGPT search nodes.
              </p>
            </div>
          </section>

          {/* Implementation & Agency Sprint Section */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Execution Framework</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Deploying AEO in Your Business</h2>
              <p className="text-sm text-zinc-300 font-serif leading-relaxed max-w-3xl">
                Executing a complete Answer Engine Optimisation strategy requires decoupling traditional web content into decoupled entity graphs, RAG-friendly atomic passages, and explicit schema triples. Engaging in a <Link href="/services/ai-search-agency" className="text-aeo-cyan underline hover:text-cyan-300 font-semibold">dedicated AI search agency engagement</Link> ensures your digital assets achieve high vector salience across all major search models.
              </p>
            </div>
          </section>

          {/* Tools & Technology Comparison Reference */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Technology Stack</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">AEO vs. AI SEO Software Tools</h2>
              <p className="text-sm text-zinc-300 font-serif leading-relaxed max-w-3xl">
                Evaluating the software platforms needed to audit, monitor, and refine your LLM citations is straightforward when consulting our <Link href="/knowledge-hub/ai-seo-tools" className="text-aeo-cyan underline hover:text-cyan-300 font-semibold">AI SEO tools and technology comparison hub</Link>, which benchmarks real-time vector crawlers and schema generators.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="border-t border-white/10 pt-12 space-y-6">
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

      {/* Sticky Footer Banner / Article Sticky Rail */}
      {showStickyBanner && !dismissSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0F1C]/95 backdrop-blur-md border-t border-[#00E5FF]/40 p-4 shadow-[0_-5px_25px_rgba(0,229,255,0.2)] transition-all duration-300 animate-in slide-in-from-bottom-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-aeo-cyan hidden sm:block">
                <Brain className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-white font-soehne-breit">
                Unsure if your schema graph is LLM-ready?
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#00E5FF] hover:bg-cyan-300 text-black font-bold text-xs transition-all shadow-[0_0_15px_rgba(0,229,255,0.4)] text-center cursor-pointer"
              >
                Get Free Visibility Score
              </Link>
              <button
                onClick={() => setDismissSticky(true)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

