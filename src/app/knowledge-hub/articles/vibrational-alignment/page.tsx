import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { BookOpen, ShieldCheck, ArrowRight, Layers, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: "Vibrational Alignment: Machine Legibility & Intentional Data Structures | AEObility",
  description: "AEObility's foundational theoretical paper establishing machine legibility, deterministic triple representation, and intentional data alignment principles for AI search engines.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/vibrational-alignment",
  },
  openGraph: {
    title: "Vibrational Alignment: Machine Legibility & Intentional Data Structures | AEObility",
    description: "Foundational theoretical paper on machine legibility and intentional data structures.",
    url: "https://aeobility.com.au/knowledge-hub/articles/vibrational-alignment",
    type: "article",
  },
};

export default function VibrationalAlignmentArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    "@id": "https://aeobility.com.au/knowledge-hub/articles/vibrational-alignment",
    "name": "Vibrational Alignment: Machine Legibility & Intentional Data Structures",
    "description": "Foundational theoretical paper establishing machine legibility and intentional alignment principles.",
    "datePublished": "2024-03-15",
    "dateModified": "2026-08-29",
    "version": "1.0.0",
    "author": {
      "@type": "Person",
      "@id": "https://aeobility.com.au/vince-baker#person",
      "name": "Vince Baker",
      "jobTitle": "Founder & Principal Technical Architect"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://aeobility.com.au/#organisation",
      "name": "AEObility",
      "url": "https://aeobility.com.au"
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12 pb-24 w-full space-y-10">
        
        {/* Article Header */}
        <header className="space-y-6 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aeo-purple/10 border border-aeo-purple/25 text-aeo-purple text-xs font-mono">
            <BookOpen className="w-4 h-4" />
            <span>Ideation Layer &bull; Foundational Paper</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-soehne-breit leading-tight">
            Vibrational Alignment: Machine Legibility &amp; Intentional Data Structures
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-2">
            <div>Author: <strong className="text-white">Vince Baker</strong></div>
            <div>Published: <span className="text-zinc-300">15 Mar 2024</span></div>
            <div>Version: <span className="text-aeo-cyan font-bold">1.0.0</span></div>
            <div>Layer: <span className="text-aeo-purple font-bold">Ideation</span></div>
          </div>
        </header>

        {/* Abstract Box */}
        <div className="bg-zinc-950/90 border border-white/15 rounded-2xl p-6 space-y-3 shadow-xl">
          <h2 className="text-sm font-bold font-mono text-aeo-cyan uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Abstract &amp; Theoretical Scope</span>
          </h2>
          <p className="text-sm text-zinc-300 font-serif leading-relaxed">
            This paper investigates how large language models and neural retrieval systems parse semantic context and infer business entity relationships. Rather than relying on unverified marketing assertions or raw keyword volume, the study demonstrates that representing first-party business facts as deterministic RDF triples and structured Schema.org graphs creates high-salience alignment anchors during answer engine retrieval.
          </p>
        </div>

        {/* Core Narrative Sections */}
        <article className="prose prose-invert prose-zinc max-w-none space-y-8 font-serif text-sm leading-relaxed text-zinc-300">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white font-soehne-breit">1. Machine Legibility vs Human Readability</h2>
            <p>
              Traditional search engine optimisation focused primarily on human legibility and keyword density. Modern Answer Engine Optimisation (AEO) requires dual-audience information architecture: content that remains approachable and clear for human readers while exposing machine-readable semantic structures for LLMs.
            </p>
            <p>
              When a language model executes passage extraction or Retrieval-Augmented Generation (RAG), ambiguous metaphors and vague superlatives cause context dilution. Intentional data alignment eliminates ambiguity by mapping entity, relationship, and evidence into explicit triples.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white font-soehne-breit">2. Deterministic Triple Anchoring</h2>
            <p>
              Vibrational Alignment establishes that first-party business facts must be anchored in deterministic structures (<code className="text-aeo-cyan font-mono text-xs">Entity &rarr; Relationship &rarr; Evidence</code>). By structuring business scope, pricing, key personnel, and operating locations into monosemantic blocks, answer engines can verify factual assertions without inferring ungrounded attributes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white font-soehne-breit">3. Lineage to Interactive Agent Execution</h2>
            <p>
              The theoretical concepts established in <em>Vibrational Alignment</em> served as the primary foundation for AEObility&apos;s transitional research persona <strong>AG Shapeshifter</strong>, which subsequently evolved into <strong>AI Bill</strong>, AEObility&apos;s production interactive agent runtime.
            </p>
          </section>
        </article>

        {/* Navigation CTAs */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/brand-facts" className="inline-flex items-center gap-2 text-xs font-mono text-aeo-cyan hover:underline">
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Inspect Canonical Brand Facts</span>
          </Link>
          <Link href="/knowledge-hub/articles" className="inline-flex items-center gap-2 text-xs font-mono text-aeo-purple hover:underline">
            <span>Explore Technical Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
