import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { BookOpen, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: "Machine Legibility & Data Provenance: Intentional Data Structures | AEObility",
  description: "AEObility's foundational theoretical paper establishing machine legibility, verifiable data provenance, deterministic triple representation, and intentional data alignment principles for AI search engines.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance",
  },
  openGraph: {
    title: "Machine Legibility & Data Provenance: Intentional Data Structures | AEObility",
    description: "Foundational theoretical paper establishing machine legibility, data provenance, and intentional data structures.",
    url: "https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance",
    type: "article",
  },
};

export default function MachineLegibilityDataProvenancePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": ["Article", "DigitalDocument"],
    "@id": "https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance",
    "name": "Machine Legibility & Data Provenance: Intentional Data Structures",
    "headline": "Machine Legibility & Data Provenance: Intentional Data Structures",
    "description": "Foundational theoretical paper establishing machine legibility, data provenance, and intentional alignment principles.",
    "url": "https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance",
    "inLanguage": "en-AU",
    "datePublished": "2024-03-15",
    "dateModified": "2026-09-23",
    "version": "1.1.0",
    "articleSection": "AI Search and Entity Architecture",
    "mainEntityOfPage": {
      "@id": "https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance"
    },
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
    },
    "about": [
      "Machine legibility",
      "Data provenance",
      "Entity relationship modelling",
      "Answer Engine Optimisation"
    ]
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
            Machine Legibility &amp; Data Provenance: Intentional Data Structures
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-2">
            <div>Author: <strong className="text-white">Vince Baker</strong></div>
            <div>Published: <span className="text-zinc-300">15 Mar 2024</span></div>
            <div>Updated: <span className="text-zinc-300">23 Sep 2026</span></div>
            <div>Version: <span className="text-aeo-cyan font-bold">1.1.0</span></div>
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
          <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
            <span>Primary Research Artifact:</span>
            <a
              href="https://notebook.google.com/notebook/d07f8fc9-9b06-4a47-82ad-ef7993048f53"
              target="_blank"
              rel="noopener noreferrer"
              className="text-aeo-cyan hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <span>NotebookLM &bull; The Art of Vibrational Alignment</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
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
            <h2 className="text-xl font-bold text-white font-soehne-breit">2. Deterministic Triple Anchoring &amp; Disambiguation</h2>
            <p>
              First-party business facts must be anchored in deterministic structures (<code className="text-aeo-cyan font-mono text-xs">Entity &rarr; Relationship &rarr; Evidence</code>). By structuring business scope, pricing, key personnel, and operating locations into monosemantic blocks, answer engines can verify factual assertions without inferring ungrounded attributes.
            </p>
            <p>
              When external aggregators publish conflicting claims, a verifiable first-party canonical graph provides deterministic reconciliation, enabling retrieval models to disregard corrupted third-party mentions.
            </p>
            <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400 not-prose">
              <span>Architectural Essay:</span>
              <a
                href="https://vinniebakeraeoinsights.substack.com/p/the-irony-of-trying-to-be-found"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aeo-cyan hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <span>Substack &bull; The Irony of Trying to Be Found (Entity Disambiguation &amp; Internal Search Lattice)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white font-soehne-breit">3. Lineage to Interactive Agent Execution</h2>
            <p>
              The theoretical concepts established in <em>Machine Legibility &amp; Data Provenance</em> (originating under the conceptual title <em>Vibrational Alignment</em>) served as the primary foundation for AEObility&apos;s transitional research persona <strong>AG Shapeshifter</strong>, which subsequently evolved into <strong>AI Bill</strong>, AEObility&apos;s production interactive agent runtime.
            </p>
            <p>
              This lineage exemplifies how theoretical semantic graph modeling translates into functional autonomous agent tooling—providing grounded, deterministic question-answering with zero hallucination.
            </p>
            <div className="pt-2 border-t border-white/5 space-y-2 text-xs font-mono text-zinc-400 not-prose">
              <div className="flex flex-wrap items-center gap-2">
                <span>Prototype Project:</span>
                <a
                  href="https://www.linkedin.com/in/vince-baker/details/projects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aeo-cyan hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>LinkedIn Projects &bull; AG Shapeshifter Architecture &amp; RAG Prototype</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span>Interactive Runtime:</span>
                <a
                  href="https://lnkd.in/p/gh9Z-v7X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aeo-cyan hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>AI Bill NLWeb Ingestion &amp; Natural Language Interface</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
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
