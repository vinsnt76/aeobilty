'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  Wrench, 
  Search, 
  ArrowRight, 
  BarChart3,
  HelpCircle
} from 'lucide-react';

export default function AiSeoToolsPage() {
  const tools = [
    {
      name: "AEObility Telemetry Engine",
      category: "AEO Vector & RAG Audit Engine",
      pricing: "Free Initial Audit / $995 AUD Diagnostic",
      badge: "Proprietary",
      description: "Automated vector proximity assessment, prompt fan-out simulation, and passage-level extraction audit engine built specifically for Australian local entities.",
      bestFor: "Measuring real brand citations across ChatGPT Search, Google AI Overviews, and Perplexity.",
      ctaText: "Run Telemetry Scan",
      ctaLink: "/diagnostic"
    },
    {
      name: "Schema.org Generator & Validator",
      category: "JSON-LD Graph Architecture",
      pricing: "Open Access / Freemium",
      badge: "Industry Standard",
      description: "Structured data generation tool producing clean JSON-LD microdata for LocalBusiness, Person, Service, and DefinedTerm schemas without syntax drift.",
      bestFor: "Building machine-readable entity triples that search scrapers can digest deterministically.",
      ctaText: "View Schema Templates",
      ctaLink: "/knowledge-hub/semantic-seo"
    },
    {
      name: "Dense Retrieval Vector Simulators",
      category: "LLM Context Window Parsers",
      pricing: "Technical Framework",
      badge: "Developer Tool",
      description: "Embeddings calculation frameworks evaluating text-embedding-004 cosine similarity and Lost in the Middle context dilution risks.",
      bestFor: "Mitigating positional bias in long-form technical articles and documentation.",
      ctaText: "Read Positional Guide",
      ctaLink: "/knowledge-hub/articles/positional-bias-in-retrieval"
    },
    {
      name: "AEO Prompt Fan-Out Simulators",
      category: "Conversational Query Expansion",
      pricing: "Diagnostic Integration",
      badge: "Analysis Tool",
      description: "Deconstructs single user searches into multi-stage sub-queries to evaluate how generative engines fan out prompt requests to vector indices.",
      bestFor: "Understanding multi-engine query processing across Perplexity, ChatGPT, and Copilot.",
      ctaText: "Explore Query Fan-Out",
      ctaLink: "/knowledge-hub/articles/structured-data-query-fan-out"
    }
  ];

  const faqs = [
    {
      question: "What are AI SEO tools?",
      answer: "AI SEO tools are software applications and technical frameworks designed to analyse, generate, or optimise web content for Large Language Models (LLMs) and generative search engines (Google AI Overviews, ChatGPT Search, Perplexity). Unlike legacy SEO keyword tools, AI SEO tools focus on entity salience, vector similarity, and structured JSON-LD schemas."
    },
    {
      question: "How does the AEObility Telemetry Engine differ from traditional SEO software?",
      answer: "Traditional SEO software tracks keyword rankings in SERP link lists. The AEObility Telemetry Engine simulates RAG retrieval pathways, testing real buyer prompts to verify whether your business facts, contact details, and core services are correctly cited inside synthesised AI answers."
    },
    {
      question: "Do AI SEO tools replace manual content and technical strategy?",
      answer: "No. AI SEO tools provide diagnostic insights, schema syntax validation, and vector proximity scores. Strategy, entity authority building, and human-written proof blocks remain essential to earn trust with search scrapers and human buyers."
    }
  ];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://aeobility.com.au/knowledge-hub/ai-seo-tools#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/ai-seo-tools",
        "name": "AI SEO Tools & Technology Comparison Hub | AEObility",
        "description": "Compare AI SEO tools, automated schema generators, and vector retrieval software built for Answer Engine Optimisation (AEO) and AI search marketing.",
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
              "name": "AI SEO Tools",
              "item": "https://aeobility.com.au/knowledge-hub/ai-seo-tools"
            }
          ]
        },
        "about": [
          {
            "@type": "SoftwareApplication",
            "@id": "https://aeobility.com.au/diagnostic#webapp",
            "name": "AEObility Telemetry Diagnostic Engine",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "url": "https://aeobility.com.au/diagnostic"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/ai-seo-tools#faq",
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
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
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
              <Wrench className="w-4 h-4 text-aeo-cyan" />
              <span>AI Search Tooling &amp; RAG Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              AI SEO Tools &amp; <span className="text-gradient-aeo">Technology Hub</span>
            </h1>

            <p className="text-lg sm:text-xl text-cyan-300 font-semibold max-w-3xl mx-auto font-soehne-breit">
              Compare AI SEO software, automated JSON-LD generators, and vector retrieval engines engineered to make digital entities machine readable.
            </p>

            <p className="text-base text-zinc-300 font-serif leading-relaxed max-w-3xl mx-auto">
              As discovery transitions from traditional search link lists to conversational AI answers, modern marketing teams require specialised tooling. Explore AEObility&apos;s curated collection of AI search tools, schema validators, and diagnostic engines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.4)]"
              >
                <Search className="w-4 h-4 text-black" />
                <span>Launch Free AI Visibility Scan</span>
              </Link>
            </div>
          </section>

          {/* Tools Grid Section */}
          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Core AI SEO Tools &amp; Frameworks</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">Diagnostic engines and technical generators for machine ingestion.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                        {tool.badge}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">{tool.pricing}</span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white font-soehne-breit">{tool.name}</h3>
                      <span className="text-xs text-aeo-purple font-mono font-semibold block">{tool.category}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                      {tool.description}
                    </p>

                    <div className="bg-black/50 border border-white/5 p-3 rounded-xl text-xs text-zinc-300 font-serif">
                      <strong className="text-cyan-300 block mb-0.5 font-mono font-bold">Best For:</strong>
                      <span>{tool.bestFor}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <Link
                      href={tool.ctaLink}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 border border-white/15 hover:border-cyan-400 text-white font-bold text-xs transition-all hover:bg-zinc-800"
                    >
                      <span>{tool.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Diagnostic Engine Spotlight */}
          <section className="bg-gradient-to-r from-cyan-950/40 via-zinc-950 to-purple-950/40 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold">
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  <span>Featured Software Tool</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                  AEObility AI Visibility Diagnostic Engine
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                  Evaluate how clearly generative search platforms ingest your business details. Our telemetry engine performs real-time prompt fan-out tests, dense retrieval similarity scoring, and brand citation accuracy reviews.
                </p>
              </div>

              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shrink-0"
              >
                <span>Run Free Diagnostic</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="border-t border-white/10 pt-12 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">AI SEO Tools FAQ</h2>
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
