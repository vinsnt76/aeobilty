'use client';

import React from 'react';
import Link from 'next/link';
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
  Layers, 
  Brain, 
  Search, 
  Sparkles,
  FileText
} from 'lucide-react';

export default function WhatIsAeoPage() {
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
              Answer Engine Optimisation (AEO) is the evolution of search marketing. While traditional SEO aims to rank web links in search engine results pages, AEO formats digital facts into machine-readable entity graphs so conversational search engines can synthesise accurate direct answers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/services/aeo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.4)]"
              >
                <Brain className="w-4 h-4 text-black" />
                <span>Explore AEO Services</span>
              </Link>
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/20 hover:border-cyan-400 text-white font-semibold text-sm transition-all hover:bg-zinc-800"
              >
                <span>Run AI Visibility Diagnostic</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>
          </section>

          {/* Definition Box */}
          <section className="bg-gradient-to-r from-cyan-950/40 via-zinc-950 to-purple-950/40 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xl">
            <span className="text-xs text-cyan-300 font-mono font-bold uppercase tracking-wider block">Official Definition</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit leading-snug">
              Answer Engine Optimisation (AEO)
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

      <Footer />
    </div>
  );
}
