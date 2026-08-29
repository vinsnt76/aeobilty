import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';

export const metadata = {
  title: "Answer Engine Optimisation Principles & Mechanics | AEObility",
  description: "Technical guide on how search bots parse files for direct citation extraction. Learn to maximise positional bias within text fields.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/aeo",
  },
};

export default function AEOKnowledgeNodePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/aeo#article",
        "headline": "Answer Engine Optimisation Principles & Mechanics",
        "description": "Technical guide on how search bots parse files for direct citation extraction. Learn to maximise positional bias within text fields.",
        "inLanguage": "en-AU",
        "author": {
          "@type": "Organization",
          "name": "AEObility"
        },
        "about": {
          "@type": "Service",
          "@id": "https://aeobility.com.au/services/aeo#service",
          "name": "AEO Services",
          "url": "https://aeobility.com.au/services/aeo"
        }
      }
    ]
  };

  const pillars = [
    {
      title: "The Mechanics of Retrieval-Augmented Generation (RAG)",
      desc: "LLMs do not scan the live web dynamically for every question. RAG pipelines query database indexes and feed context chunks into the model context window."
    },
    {
      title: "Exploiting Positional Bias Rules",
      desc: "Retrieval models prioritise answers located at the extreme beginning or end of text blocks. We position key facts where attention weights peak."
    },
    {
      title: "Atomic Answer Block Engineering",
      desc: "Convert generic website copy into concise, factual answer nodes tailored to match typical LLM query patterns."
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
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        <section className="flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>Answer Engine Optimisation (AEO) Deep Dive</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              What is AEO in <span className="text-gradient-aeo">Digital Marketing?</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light">
              Technical guide on how search bots parse files for direct citation extraction. Learn to maximize positional bias within text fields.
            </p>
          </div>

          {/* Flow visualization diagram showing raw unstructured paragraphs converted into tidy atomic blocks */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 p-6 flex flex-col justify-between shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.06),transparent_50%)]" />
            <div className="flex justify-between items-center relative z-10 border-b border-white/5 pb-3">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Paragraph Node Restructuring</span>
              <span className="text-[9px] font-mono text-aeo-cyan bg-aeo-cyan/10 px-2 py-0.5 rounded border border-aeo-cyan/25">Token Optimisation Pass</span>
            </div>
            <div className="grid grid-cols-5 gap-4 items-center my-auto relative z-10">
              <div className="col-span-2 p-3 bg-white/[0.01] border border-white/5 rounded-xl space-y-1 text-left">
                <p className="text-[9px] font-mono text-red-400 uppercase">Raw Unstructured copy</p>
                <div className="w-full h-1 bg-white/20 rounded"></div>
                <div className="w-5/6 h-1 bg-white/20 rounded"></div>
                <div className="w-4/5 h-1 bg-white/20 rounded"></div>
              </div>
              <div className="flex justify-center text-aeo-cyan text-lg font-bold">&gt;&gt;&gt;</div>
              <div className="col-span-2 p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-1.5 text-left">
                <p className="text-[9px] font-mono text-green-400 uppercase">Tidy Atomic Block</p>
                <div className="w-full h-1.5 bg-aeo-cyan/40 rounded"></div>
                <div className="w-2/3 h-1.5 bg-aeo-purple/40 rounded"></div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 relative z-10 pt-3 border-t border-white/5">
              <span>Positional Bias Rule: Extreme Endpoints Active</span>
              <span>Model Attention Weight: 0.94</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors flex flex-col justify-between">
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "TechArticle",
                      "name": pillar.title,
                      "description": pillar.desc,
                      "articleSection": "AEO Core Principles"
                    })
                  }}
                />
                <div className="space-y-3">
                  <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                    <BookOpen className="w-5 h-5 text-aeo-cyan" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">{pillar.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{pillar.desc}</p>
                </div>

                {idx === 0 && (
                  <div className="pt-3 border-t border-white/10 flex flex-col gap-1.5 text-[11px]">
                    <Link 
                      href="/knowledge-hub/what-is-seo-optimisation"
                      className="text-aeo-cyan hover:underline font-semibold flex items-center gap-1"
                    >
                      &rarr; What Is SEO Optimisation? (Lexical Baseline)
                    </Link>
                    <Link 
                      href="/knowledge-hub/articles/telemetry-diagnostic-architecture"
                      className="text-white/70 hover:text-white hover:underline font-normal flex items-center gap-1"
                    >
                      &rarr; Telemetry Diagnostic Architecture Spec
                    </Link>
                    <Link 
                      href="/knowledge-hub/articles/retrieval-augmented-generation#rag-misconceptions"
                      className="text-white/70 hover:text-white hover:underline font-normal flex items-center gap-1"
                    >
                      &rarr; Common RAG Misconceptions
                    </Link>
                    <Link 
                      href="/knowledge-hub/articles/retrieval-augmented-generation#rag-faq"
                      className="text-aeo-purple hover:underline font-semibold flex items-center gap-1"
                    >
                      &rarr; RAG Technical FAQ
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Deep Dive Section */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-bold">Maximizing Crawler Confidence and Attentional Weight</h2>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Answer Engine Optimisation (AEO) deep dive guides explain how LLM text scraping metrics evaluate external sites. When search models perform context extraction, they prioritise specific structural anchors.
            </p>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              By balancing token weight and placing critical citation anchors cleanly within high-salience paragraph tags, your business details are easily parsed and direct recommendations can be generated during RAG processes.
            </p>
          </div>

          {/* Action List */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">AEO Engineering Checklist</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Format paragraphs into 90-120 token blocks to align context weights.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Inject clear brand entity markers at the top of structural pages.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Audit server response headers for search bot crawl permissions.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Verify citation index reference points using test prompt strategies.</span>
              </li>
            </ul>
          </div>

          {/* Telemetry Technical Architecture Callout Banner */}
          <div className="p-6 bg-neutral-950 border border-aeo-cyan/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-left">
              <div className="text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">Deep Technical Specification</div>
              <h3 className="text-base font-bold text-white">Telemetry Diagnostic Engine Architecture Guide</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Explore our detailed walkthrough on 384-dim vs 768-dim vector maps, text-embedding-004 RAG dilution mitigation, 5-tier scoring math, and NLWeb/MCP protocols.
              </p>
            </div>
            <Link
              href="/knowledge-hub/articles/telemetry-diagnostic-architecture"
              className="px-5 py-2.5 bg-aeo-cyan/10 border border-aeo-cyan/40 text-aeo-cyan hover:bg-aeo-cyan hover:text-black transition-all rounded-xl text-xs font-bold shrink-0 flex items-center gap-2"
            >
              <span>Read Architecture Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Phase 5 Radial Return CTA Banner */}
          <div className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/5 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Unlock Your AI Visibility Metrics</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto font-light leading-relaxed">
              AEObility provides technical audits analysing how modern LLMs index your digital presence. Request your strategic roadmap today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/services/aeo"
                className="px-5 py-3 bg-aeo-cyan text-black text-xs font-bold rounded-xl hover:bg-white transition-all shadow-[0_0_15px_rgba(0,205,216,0.2)]"
              >
                AEO Services
              </Link>
              <Link
                href="/solutions/aeo-blueprint"
                className="px-5 py-3 bg-gradient-to-r from-aeo-purple to-pink-600 text-white text-xs font-bold rounded-xl hover:opacity-90 transition-all"
              >
                Get AEObility Blueprint
              </Link>
              <Link
                href="/contact"
                className="px-5 py-3 bg-white/5 border border-white/10 text-white text-xs font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Contact Strategy Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
