import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowRight, FileText } from 'lucide-react';

export const metadata = {
  title: "AI Search Articles & Technical Guides | AEObility",
  description: "Read our latest articles on Answer Engine Optimisation (AEO), generative search, and semantic content structuring.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles",
  },
};

export default function ArticlesHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AEObility AI Search Articles & Technical Guides",
    "description": "Read our latest articles on Answer Engine Optimisation (AEO), generative search, and semantic content structuring.",
    "url": "https://aeobility.com.au/knowledge-hub/articles",
    "publisher": {
      "@type": "Organization",
      "name": "AEObility",
      "url": "https://aeobility.com.au"
    }
  };

  const articles = [
    {
      title: "RAG, Answer Engines & Why Machine‑Readable Content Matters",
      category: "Vector Retrieval & RAG",
      description: "Learn how Retrieval-Augmented Generation (RAG) works, why machine-readable content matters for AEO, and how chunking affects AI search visibility.",
      href: "/knowledge-hub/articles/retrieval-augmented-generation",
      image: "/ai-search-optimisation-why-RAG-matters-AEObilty.webp",
      alt: "AI Search Optimisation and Retrieval-Augmented Generation (RAG) visual diagram depicting vector retrieval, passage chunking, and semantic entity grounding by AEObility.",
      metrics: [
        { label: "Type", value: "Technical Guide" },
        { label: "Read Time", value: "6 min" }
      ]
    },
    {
      title: "AEO vs SEO: The Complete Guide to AI Search",
      category: "Generative Search",
      description: "Discover the shifting search landscape from lexical retrieval to semantic retrieval and learn how Answer Engine Optimisation (AEO) gets your brand into AI answers.",
      href: "/knowledge-hub/articles/aeo-vs-seo",
      image: "/traditional-seo-vs-aeo_AEObility.webp",
      alt: "Abstract visualisation of traditional SEO versus AEO semantic retrieval using AEObility gradient palette.",
      metrics: [
        { label: "Type", value: "Technical Guide" },
        { label: "Read Time", value: "5 min" }
      ]
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
                GEO & SEO Local Matrix
              </Link>
              <div className="h-px bg-white/5 my-2" />
              <div className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                Articles & Guides
              </div>
              <Link href="/knowledge-hub/articles/aeo-vs-seo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug ml-4 border-l-2 border-white/10 pl-3">
                AEO vs SEO
              </Link>
              <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug ml-4 border-l-2 border-white/10 pl-3">
                RAG & Answer Engines
              </Link>
              <div className="flex flex-col gap-1 ml-8 pl-3 border-l border-white/10 text-xs">
                <Link href="/knowledge-hub/articles/retrieval-augmented-generation#rag-misconceptions" className="text-white/50 hover:text-aeo-cyan transition-colors py-0.5">
                  &bull; Misconceptions
                </Link>
                <Link href="/knowledge-hub/articles/retrieval-augmented-generation#rag-faq" className="text-white/50 hover:text-aeo-cyan transition-colors py-0.5">
                  &bull; Technical FAQ
                </Link>
              </div>
              <Link href="/knowledge-hub/case-studies" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Client Case Studies
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Articles Directory */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>Technical Reading</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              AI Search <span className="text-gradient-aeo">Articles</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed font-light font-serif">
              Deep dives into generative search, entity modelling, and the strategies shaping modern machine readability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {articles.map((article, idx) => (
              <div key={idx} className="group relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-aeo-cyan/20 transition-all flex flex-col md:flex-row h-full">
                <div className="relative aspect-video md:w-2/5 w-full bg-neutral-950 flex-shrink-0 min-h-[220px]">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-4">
                    <div className="text-[10px] text-aeo-cyan uppercase tracking-widest font-bold">
                      {article.category}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-aeo-cyan transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed font-serif">
                      {article.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex gap-4">
                      {article.metrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-sm font-extrabold text-white">{metric.value}</div>
                          <div className="text-[9px] text-white/40 uppercase tracking-wider">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={article.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-aeo-cyan hover:text-white transition-colors"
                    >
                      Read Article <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Hub Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-white/5">
            <Link href="/knowledge-hub" className="group text-sm font-semibold text-aeo-cyan hover:text-white transition-colors flex items-center gap-1">
              &larr; Back to Knowledge Hub Overview
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
