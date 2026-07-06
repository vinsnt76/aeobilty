import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, CheckCircle2, Network } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "AI Semantic SEO & Entity-Based Layout Frameworks | AEObility",
  description: "Transition from legacy keyword strings to relational topic graphs. Learn to map RDF triples and build contextual entity salience.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/semantic-seo",
  },
};

export default function SemanticSEONodePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/semantic-seo#article",
        "headline": "AI Semantic SEO & Entity-Based Layout Frameworks",
        "description": "Transition from legacy keyword strings to relational topic graphs. Learn to map RDF triples and build contextual entity salience.",
        "author": {
          "@type": "Organization",
          "name": "AEObility"
        }
      }
    ]
  };

  const pillars = [
    {
      title: "Moving from Strings to Entities",
      desc: "Search engines no longer match exact keyword strings. They link relational facts to absolute brand entities stored in knowledge databases."
    },
    {
      title: "How Large Language Models Embed Context",
      desc: "LLMs map text into high-dimensional semantic vector spaces. Relational distance determines topical authority."
    },
    {
      title: "Building High-Density Content Lattices",
      desc: "Connect your content pages using explicit predicate mapping rules, forming a clean relational graph crawlers can easily parse."
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Knowledge Nodes</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/knowledge-hub" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Hub Overview
              </Link>
              <Link href="/knowledge-hub/aeo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AEO Core Principles
              </Link>
              <Link href="/knowledge-hub/semantic-seo" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                AI Semantic SEO
              </Link>
              <Link href="/knowledge-hub/geo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                GEO & SEO Local Matrix
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>AI Semantic SEO & Entity Based Optimization</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              AI Semantic <span className="text-gradient-aeo">SEO</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light">
              Transition from legacy keyword strings to relational topic graphs. Learn to map RDF triples and build contextual entity salience.
            </p>
          </div>

          {/* Graphic mapping interconnected semantic circles representing complex technical entity nodes */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 p-6 flex flex-col justify-between shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.06),transparent_60%)]" />
            <div className="flex justify-between items-center relative z-10 border-b border-white/5 pb-3">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Entity Relationship Graph</span>
              <span className="text-[9px] font-mono text-aeo-purple bg-aeo-purple/10 px-2 py-0.5 rounded border border-aeo-purple/20">RDF Triple Map</span>
            </div>
            <div className="relative h-24 my-auto flex justify-center items-center gap-8 z-10">
              <div className="w-16 h-16 rounded-full border border-aeo-cyan flex items-center justify-center bg-aeo-cyan/5 text-[9px] font-mono text-white text-center">Subject (Brand)</div>
              <div className="h-[2px] w-12 bg-gradient-to-r from-aeo-cyan to-aeo-purple relative flex items-center justify-center">
                <span className="absolute -top-3 text-[8px] font-mono text-white/40">predicate</span>
              </div>
              <div className="w-16 h-16 rounded-full border border-aeo-purple flex items-center justify-center bg-aeo-purple/5 text-[9px] font-mono text-white text-center">Object (Service)</div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 relative z-10 pt-3 border-t border-white/5">
              <span>Knowledge Graph Path: Active</span>
              <span>Semantic Vector Dimensions: 1536</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors">
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "TechArticle",
                      "name": pillar.title,
                      "description": pillar.desc,
                      "articleSection": "AI Semantic SEO"
                    })
                  }}
                />
                <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                  <Network className="w-5 h-5 text-aeo-cyan" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{pillar.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Deep Dive Section */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-bold">Relational SEO Over Keyword Clustering</h2>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Traditional SEO agencies focus heavily on keywords, but AI search models look for contextual entity salience. When Google or OpenAI indexes site data, it builds a complex knowledge graph path connecting your business nodes to specific categories.
            </p>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              By structuring page data into high-density content lattices using explicit RDF predicate mapping rules, you tell LLMs exactly who you serve and where, allowing them to categorise your brand confidently.
            </p>
          </div>

          {/* Action List */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">Semantic Optimization Checklist</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Map RDF relationships to define subjects and predicates.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Optimize website copy density to increase entity salience scores.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Format internal links into a clear contextual semantic grid.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Test how transformers parse topic patterns on your site.</span>
              </li>
            </ul>
          </div>

          {/* Pricing CTA */}
          <div className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/5 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Claim Your Entity Analysis</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto font-light leading-relaxed">
              Find out if search machines represent your services correctly. Secure a free entity audit with AEObility today.
            </p>
            <div className="flex justify-center gap-3">
              <Link
                href="/#audit-form"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-neutral-100 transition-all"
              >
                <span>Request Free Audit</span>
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
