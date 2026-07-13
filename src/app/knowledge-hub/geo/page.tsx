import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, CheckCircle2, Grid } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "GEO and SEO: Local Discovery Matrix | AEObility",
  description: "Advanced techniques balancing localized map rankings and systemic generative visibility rules without triggering focus dilution gaps.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/geo",
  },
};

export default function GEOKnowledgeNodePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/geo#article",
        "headline": "GEO and SEO: Local Discovery Matrix",
        "description": "Advanced techniques balancing localized map rankings and systemic generative visibility rules without triggering focus dilution gaps.",
        "author": {
          "@type": "Organization",
          "name": "AEObility"
        }
      }
    ]
  };

  const pillars = [
    {
      title: "Resolving Map Pack vs LLM Discovery Friction",
      desc: "Traditional local map packs depend heavily on proximity signals. Generative AI models prioritize global brand salience and cross-node reference consensus."
    },
    {
      title: "Structuring Multi-Location Brand Identity",
      desc: "Avoid focus dilution gaps. We link multiple coordinate pins to one unified core brand entity to keep authority high."
    },
    {
      title: "GEO Content Pattern Blueprints",
      desc: "Restructure service location pages into high-density local footprint arrays that both scraper bots and LLMs easily index."
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
              <Link href="/knowledge-hub/aeo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AEO Core Principles
              </Link>
              <Link href="/knowledge-hub/semantic-seo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AI Semantic SEO
              </Link>
              <Link href="/knowledge-hub/geo" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                GEO & SEO Local Matrix
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>GEO vs SEO: Local Discovery Matrix</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              GEO vs SEO <span className="text-gradient-aeo">Matrix</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light">
              Advanced techniques balancing localized map rankings and systemic generative visibility rules without triggering focus dilution gaps.
            </p>
          </div>

          {/* Digital interface overlay measuring regional grid parameters and local coordinate listings */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 p-6 flex flex-col justify-between shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.06),transparent_60%)]" />
            <div className="flex justify-between items-center relative z-10 border-b border-white/5 pb-3">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Regional Proximity Grid</span>
              <span className="text-[9px] font-mono text-aeo-cyan bg-aeo-cyan/10 px-2 py-0.5 rounded border border-aeo-cyan/25">Coordinate Grid: WA</span>
            </div>
            
            {/* Grid display layout */}
            <div className="grid grid-cols-4 gap-2 my-auto relative z-10 p-2 border border-white/5 rounded-xl bg-white/[0.01]">
              <div className="h-10 border border-white/10 rounded flex items-center justify-center text-[10px] text-white/20 font-mono">grid-01</div>
              <div className="h-10 border border-aeo-cyan/35 rounded flex items-center justify-center text-[10px] text-aeo-cyan font-mono bg-aeo-cyan/5">grid-02 (AEO)</div>
              <div className="h-10 border border-white/10 rounded flex items-center justify-center text-[10px] text-white/20 font-mono">grid-03</div>
              <div className="h-10 border border-aeo-purple/35 rounded flex items-center justify-center text-[10px] text-aeo-purple font-mono bg-aeo-purple/5">grid-04 (GEO)</div>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 relative z-10 pt-3 border-t border-white/5">
              <span>Proximity Signal Matrix: Active</span>
              <span>Cross-Node Referencing: Synced</span>
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
                      "articleSection": "GEO Local Matrix"
                    })
                  }}
                />
                <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                  <Grid className="w-5 h-5 text-aeo-cyan" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{pillar.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Deep Dive Section */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-bold">Integrating Maps Authority with Large Language Models</h2>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Modern local discovery uses a blend of geographic maps data and structured AI search parameters. A location search on a smartphone query will parse coordinates through local indexes while matching brand references across LLM text databases.
            </p>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              To capture local discovery matrix visibility in Perth or anywhere across Australia, businesses must balance their physical maps profile credentials with explicit site area served graphs and coordinate matrices.
            </p>
          </div>

          {/* Action List */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">Local Integration Checklist</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Format coordinate precision matrices in local schema profiles.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Verify cross-node references across Google Maps and website pages.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Deploy area served schema graphs defining service boundaries.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Test localized query pathways to detect rank dilution flags.</span>
              </li>
            </ul>
          </div>

          {/* Pricing CTA */}
          <div className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/5 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Align Your Local Map Assets</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto font-light leading-relaxed">
              Ensure you capture nearby client queries. Secure your manual map and local search visibility check today.
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
