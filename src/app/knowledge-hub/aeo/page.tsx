import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "Answer Engine Optimization Core Principles | AEObility",
  description: "Technical guide on how search bots parse files for direct citation extraction. Learn to maximize positional bias within text fields.",
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
        "headline": "Answer Engine Optimization Core Principles",
        "description": "Technical guide on how search bots parse files for direct citation extraction. Learn to maximize positional bias within text fields.",
        "author": {
          "@type": "Organization",
          "name": "AEObility"
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
      desc: "Retrieval models prioritize answers located at the extreme beginning or end of text blocks. We position key facts where attention weights peak."
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
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Navigation Links & Entity Map */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Knowledge Hub</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/knowledge-hub" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Hub Overview
              </Link>
              <Link href="/knowledge-hub/aeo" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                AEO Core Principles
              </Link>
              <Link href="/knowledge-hub/semantic-seo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AI Semantic SEO
              </Link>
              <Link href="/knowledge-hub/geo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                GEO & SEO Local Matrix
              </Link>
              <div className="h-px bg-white/5 my-2" />
              <Link href="/knowledge-hub/articles" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Articles & Guides
              </Link>
              <Link href="/knowledge-hub/case-studies" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Client Case Studies
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>Answer Engine Optimization (AEO) Deep Dive</span>
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
              <span className="text-[9px] font-mono text-aeo-cyan bg-aeo-cyan/10 px-2 py-0.5 rounded border border-aeo-cyan/25">Token Optimization Pass</span>
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
                      href="/knowledge-hub/articles/retrieval-augmented-generation#rag-misconceptions"
                      className="text-aeo-cyan hover:underline font-semibold flex items-center gap-1"
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
              Answer Engine Optimization (AEO) deep dive guides explain how LLM text scraping metrics evaluate external sites. When search models perform context extraction, they prioritize specific structural anchors.
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

          {/* Pricing CTA */}
          <div className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/5 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Unlock Your AI Visibility Metrics</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto font-light leading-relaxed">
              AEObility provides technical audits analyzing how modern LLMs index your digital presence. Request your strategic roadmap today.
            </p>
            <div className="flex justify-center gap-3">
                <Link
                  href="/diagnostic"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-xl hover:bg-neutral-100 transition-all duration-300"
                >
                  <span>Get Visibility Score</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
