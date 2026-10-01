'use client';

import React, { useState } from 'react';
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
  Sparkles, 
  Globe, 
  AlertTriangle,
  Zap,
  Target,
  ShieldCheck,
  Building2,
  FileCheck
} from 'lucide-react';

export default function WhatIsAeoPage() {
  const router = useRouter();
  const [heroUrl, setHeroUrl] = useState('');

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
          
          {/* SECTION 1: HERO / CLEAR ANSWER & INSTANT CHECK */}
          <section className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-medium">
              <BookOpen className="w-4 h-4 text-aeo-cyan" />
              <span>Core AEO Definition &amp; Educational Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              What is <span className="text-gradient-aeo">Answer Engine Optimisation (AEO)?</span>
            </h1>

            <p className="text-lg sm:text-xl text-cyan-300 font-semibold max-w-3xl mx-auto font-soehne-breit">
              AEO is the process of organising your business details so AI tools like ChatGPT, Perplexity, and Google AI Overviews can easily read, trust, and recommend your business when customers search.
            </p>

            <p className="text-base text-zinc-300 font-serif leading-relaxed max-w-3xl mx-auto">
              Answer Engine Optimisation (AEO) represents the structural evolution of digital marketing. While traditional SEO focuses on earning links and keyword positions in 10 blue link search result pages, AEO formats your core business facts into clean, verified entity graphs and direct answer passages that AI models can quote with confidence.
            </p>

            {/* Atomic Answer Block 1 (80-120 Tokens for RAG Extraction) */}
            <div className="bg-gradient-to-r from-cyan-950/40 via-zinc-950 to-purple-950/40 border border-cyan-500/30 rounded-2xl p-6 text-left space-y-3 shadow-2xl">
              <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Atomic Definition Block</span>
              </div>
              <h2 className="text-xl font-bold text-white font-soehne-breit">
                Answer Engine Optimisation (AEO) Defined
              </h2>
              <p className="text-sm text-zinc-200 font-serif leading-relaxed">
                <strong>Answer Engine Optimisation (AEO)</strong> is the technical and structural discipline of formatting web content, business facts, and entity relationship graphs so Large Language Models (LLMs) and generative search systems can retrieve, verify, and cite a brand as a primary authoritative source when generating direct answers.
              </p>
            </div>

            {/* Low-Friction Primary Hero CTA Container */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#0A0F1C] border border-[#00E5FF] shadow-[0_0_30px_rgba(0,229,255,0.15)] text-left max-w-3xl mx-auto space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-aeo-cyan text-xs font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-aeo-cyan animate-pulse" />
                  <span>Free 45-Second AI Visibility Scan</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/60">
                  Instant On-Screen Diagnostic
                </span>
              </div>

              <p className="text-lg sm:text-xl font-bold text-white font-soehne-breit">
                Enter your website address to check if AI search tools can find and cite your business right now.
              </p>
              
              <p className="text-xs text-zinc-400 font-mono">
                3-Point Real-Time Telemetry Check: Evaluates Entity Schema Health, RAG Retrieval Survival &amp; AI Citation Share in 45 seconds.
              </p>

              <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="relative flex-grow">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your website address (e.g. example.com.au)"
                    value={heroUrl}
                    onChange={(e) => setHeroUrl(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-zinc-900/90 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-[#00E5FF] hover:bg-cyan-300 text-black font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Run Free 45-Second AI Scan →</span>
                </button>
              </form>
            </div>
          </section>

          {/* SECTION 2: THE BUSINESS RISK & REAL-WORLD IMPACT (The "Why") */}
          <section className="space-y-8 border-t border-white/10 pt-12">
            <div className="space-y-3 text-center max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Commercial Impact</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">Why AEO Matters for Your Business</h2>
              <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed">
                People no longer just click links on Google. They ask AI assistants like ChatGPT, Perplexity, and Google AI Overviews for direct recommendations. If your web copy is vague, AI engines simply recommend your competitor instead.
              </p>
            </div>

            {/* Side-by-Side Before & After Visual Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-red-950/20 border border-red-500/30 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-red-400 font-mono font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Without AEO (Traditional Web Copy)</span>
                </div>
                <h3 className="text-lg font-bold text-white font-soehne-breit">AI Ignores or Hallucinates Your Brand</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Generative engines encounter vague sales copy, unformatted paragraphs, and missing schema. When a prospective customer asks for top service providers in Perth, the AI leaves your business out or attributes outdated details.
                </p>
                <div className="p-3.5 bg-black/60 rounded-xl border border-red-500/20 text-xs text-red-300/90 font-mono">
                  &quot;I could not find verified pricing or local service credentials for this business... Here are 3 recommended competitors instead.&quot;
                </div>
              </div>

              <div className="p-6 bg-cyan-950/30 border border-cyan-500/40 rounded-2xl space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>With AEObility AEO Architecture</span>
                </div>
                <h3 className="text-lg font-bold text-white font-soehne-breit">AI Quotes &amp; Recommends Your Business</h3>
                <p className="text-xs text-zinc-200 font-serif leading-relaxed">
                  Your website presents structured entity graphs, 90-token atomic answer blocks, and explicit schema triples. AI engines parse your exact services, pricing, ABN, and locations, citing your brand directly in synthesized answers.
                </p>
                <div className="p-3.5 bg-cyan-950/80 rounded-xl border border-cyan-500/30 text-xs text-cyan-200 font-mono">
                  &quot;According to AEObility&apos;s verified service graph, they provide fixed-scope AEO Micro-Sprints in Perth, Western Australia...&quot;
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
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                    <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Positional Bias</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    <strong className="text-white">Business Impact:</strong> Placing core services and locations at the top of structural passages ensures AI models read your key facts before context windows truncate.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                    <FileCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Atomic Passages</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    <strong className="text-white">Business Impact:</strong> Formatting key answers into 2-3 sentence blocks under direct headings allows AI tools to quote your pricing and services verbatim.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2">
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
              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Pillar 1</span>
                <h3 className="text-lg font-bold text-white font-soehne-breit">Putting Key Facts First</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  We place your most important services, prices, and locations at the very top of structural web pages so search bots and RAG crawlers read them instantly where attention weights peak.
                </p>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Pillar 2</span>
                <h3 className="text-lg font-bold text-white font-soehne-breit">Short, Direct Answers</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  We write clear, 2–3 sentence direct answer passages (80–120 tokens) under clean headings, giving conversational AI systems text they can extract and quote without paraphrasing.
                </p>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Pillar 3</span>
                <h3 className="text-lg font-bold text-white font-soehne-breit">Connecting Business Details</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  We link your business name, address, phone number, ABN, and licences into a consistent JSON-LD entity graph that search engines and LLMs verify across external registries.
                </p>
              </div>
            </div>

            {/* Comparison Table: AEO vs SEO */}
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-950/80 p-6">
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
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Internal Links &amp; Site Structure</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Entity Mesh: Related AEO Resources &amp; Service Hubs</h2>
              <p className="text-sm text-zinc-300 font-serif leading-relaxed max-w-3xl">
                Connect your understanding of Answer Engine Optimisation with our technical guides, machine definition triples, and commercial execution sprints:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <Link
                href="/services/aeo"
                className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/50 transition-all space-y-2 group"
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
                className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/50 transition-all space-y-2 group"
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
                className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/50 transition-all space-y-2 group"
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
                className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/50 transition-all space-y-2 group"
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

      <Footer />
    </div>
  );
}
