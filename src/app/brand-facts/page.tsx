import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  BRAND_IDENTITY, 
  BRAND_DEFINITIONS, 
  PRICING_CONFIG, 
  BRAND_KNOWLEDGE_LATTICE,
  PUBLIC_SCHEMA_GRAPH 
} from '@/lib/brandFacts';
import { ShieldCheck, Tag, CheckCircle2, ArrowRight, BookOpen, Layers } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Verified Brand Facts & Commercial Registry | AEObility',
  description: 'Authoritative data registry detailing core corporate identities, operational definitions, and itemised service deliverables.',
  alternates: {
    canonical: 'https://aeobility.com.au/brand-facts',
  },
  openGraph: {
    title: 'Verified Brand Facts & Commercial Registry | AEObility',
    description: 'Authoritative data registry detailing core corporate identities, operational definitions, and itemised service deliverables.',
    url: 'https://aeobility.com.au/brand-facts',
    type: 'website',
  },
};

export default function HumanBrandFactsPage() {
  const pricingItems = [
    PRICING_CONFIG.StrategicBlueprint,
    PRICING_CONFIG.MicroSprints,
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Background Interoperable Schema Insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PUBLIC_SCHEMA_GRAPH) }}
      />

      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12 w-full space-y-12">
        
        {/* Header Section */}
        <header className="border-b border-white/10 pb-8 text-center sm:text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/25 text-aeo-cyan text-xs font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Canonical Brand Knowledge Layer (CBKL)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-soehne-breit">
            Canonical Brand Facts &amp; Commercial Registry
          </h1>
          <p className="text-base sm:text-lg text-white/70 font-serif max-w-3xl leading-relaxed">
            No jargon. No pressure. Just clarity. This reference ledger maps our verified organizational identity, operational frameworks, and public pricing parameters.
          </p>
        </header>

        {/* 1. Identity Alignment Block */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Layers className="w-4 h-4" />
            <span>1. Identity Alignment</span>
          </div>
          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 grid sm:grid-cols-2 gap-6 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Registered Corporate Entity</span>
              <p className="text-lg font-bold text-white">{BRAND_IDENTITY.legalName}</p>
              <p className="text-xs text-zinc-400 font-serif">Trading Name: <strong className="text-white">{BRAND_IDENTITY.name}</strong></p>
              <p className="text-xs text-zinc-500 font-mono pt-1">Entity Type: {BRAND_IDENTITY.entityType}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Operational Footprint</span>
              <p className="text-lg font-bold text-aeo-cyan">{BRAND_IDENTITY.foundingLocation.city}, {BRAND_IDENTITY.foundingLocation.state}</p>
              <p className="text-xs text-zinc-400 font-serif">Country: Australia (AU)</p>
              <p className="text-xs text-zinc-500 font-serif pt-1">Brand Promise: &ldquo;{BRAND_IDENTITY.brandPromise}&rdquo;</p>
            </div>
          </div>
        </section>

        {/* 2. Glossary Blocks */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-purple">
            <BookOpen className="w-4 h-4" />
            <span>2. Terminology Scope Boundaries</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(BRAND_DEFINITIONS).map(([term, data]) => (
              <div key={term} className="border border-white/10 rounded-2xl p-6 bg-zinc-950/80 shadow-xl space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-soehne-breit">{term}</h3>
                  <div className="space-y-2.5 text-xs text-zinc-300 font-serif leading-relaxed">
                    <p><strong className="text-white font-sans">Established Fact:</strong> {data.establishedFact}</p>
                    {'aeobilityMethodology' in data && (
                      <p><strong className="text-aeo-cyan font-sans">AEObility Methodology:</strong> {data.aeobilityMethodology}</p>
                    )}
                    {'aeobilityClaim' in data && (
                      <p><strong className="text-aeo-purple font-sans">AEObility Functional Claim:</strong> {data.aeobilityClaim}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Costing Table Registry */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Tag className="w-4 h-4" />
            <span>3. Transparent Sprint Pricing Matrix</span>
          </div>
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950/80 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-xs font-semibold text-zinc-400 uppercase font-mono">
                    <th className="p-4">SKU Code</th>
                    <th className="p-4">Execution Framework</th>
                    <th className="p-4">Target Timeline</th>
                    <th className="p-4 text-right">Cost (AUD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {pricingItems.map((item) => (
                    <tr key={item.sku} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-mono text-xs text-aeo-cyan">{item.sku}</td>
                      <td className="p-4 font-semibold text-white">
                        <div>{item.name}</div>
                        <ul className="text-xs text-zinc-400 font-serif space-y-0.5 mt-1 list-disc pl-4">
                          {item.deliverables.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-4 text-zinc-300 font-mono text-xs">{item.duration}</td>
                      <td className="p-4 text-right font-bold text-white text-base">
                        ${'priceAUD' in item ? item.priceAUD : item.priceFromAUD}*
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-white/[0.02] p-4 border-t border-white/10 text-xs text-zinc-400 font-serif">
              * All commercial configurations are quoted exclusive of GST. Standalone diagnostic review costs are credited back 100% into implementation sprints.
            </div>
          </div>
        </section>

        {/* 4. Provenance Triples Ledger */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>4. Factual Provenance &amp; Evidence Ledger</span>
          </div>
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950/80 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-xs font-semibold text-zinc-400 uppercase font-mono">
                    <th className="p-4">Assertion Triple (S-P-O)</th>
                    <th className="p-4">Evidence Type</th>
                    <th className="p-4">Source Verification Authority</th>
                    <th className="p-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {BRAND_KNOWLEDGE_LATTICE.map((fact, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-mono text-xs text-white">
                        <span className="text-aeo-cyan">{fact.subject}</span> &rarr; <span className="text-zinc-400">{fact.predicate}</span> &rarr; <span className="text-aeo-purple">{fact.object}</span>
                      </td>
                      <td className="p-4 text-xs font-mono text-zinc-400">{fact.evidenceType}</td>
                      <td className="p-4">
                        <Link href={fact.source.replace('https://aeobility.com.au', '') || '/'} className="text-aeo-cyan hover:underline text-xs font-mono">
                          {fact.source}
                        </Link>
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase">
                          {fact.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
