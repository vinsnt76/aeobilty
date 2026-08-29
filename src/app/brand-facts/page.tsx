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
import { ShieldCheck, Tag, CheckCircle2, ArrowRight, BookOpen, Layers, Sparkles, HelpCircle, MapPin, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Verified Brand Facts & Canonical Entity Directory | AEObility',
  description: 'Authoritative data registry detailing core corporate identities, atomic answer extractions, and itemised service deliverables.',
  alternates: {
    canonical: 'https://aeobility.com.au/brand-facts',
  },
  openGraph: {
    title: 'Verified Brand Facts & Canonical Entity Directory | AEObility',
    description: 'Authoritative data registry detailing core corporate identities, atomic answer extractions, and itemised service deliverables.',
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

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12 pb-32 sm:pb-20 w-full space-y-12">
        
        {/* Header and Temporal Badge */}
        <header className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/25 text-aeo-cyan text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>Canonical Brand Knowledge Layer (CBKL) - Enterprise Surface</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-soehne-breit">
              Canonical Brand Facts &amp; Entity Directory
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-serif max-w-2xl leading-relaxed">
              Authoritative corporate ledger mapping our verified identity, operational frameworks, and public pricing parameters.
            </p>
          </div>
          <div className="bg-zinc-950/90 border border-white/10 rounded-xl p-4 text-xs font-mono text-zinc-300 space-y-1.5 shrink-0 shadow-lg">
            <div className="text-zinc-500 uppercase tracking-wider text-[10px]">Verification Stamp</div>
            <div>Verified: <span className="text-emerald-400 font-bold">{BRAND_IDENTITY.temporalBadge.lastVerified}</span></div>
            <div>Effective: <span className="text-white">{BRAND_IDENTITY.temporalBadge.effectiveDate}</span></div>
            <div>Cycle: <span className="text-aeo-cyan">{BRAND_IDENTITY.temporalBadge.fiscalCycle}</span></div>
          </div>
        </header>

        {/* Lexical Disambiguation Block */}
        <div className="bg-amber-500/10 border border-amber-500/25 rounded-2xl p-5 text-sm text-zinc-300 space-y-2">
          <div className="flex items-center gap-2 font-mono text-amber-400 font-semibold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Lexical Disambiguation Note</span>
          </div>
          <p className="text-xs sm:text-sm font-serif leading-relaxed">
            Not to be confused with <strong className="text-white">{BRAND_IDENTITY.notToBeConfusedWith.join(' or ')}</strong>. Recognized brand aliases and trading variants include: <span className="text-amber-200 font-mono">{BRAND_IDENTITY.knownAs.join(', ')}</span>.
          </p>
        </div>

        {/* 1. Identity Alignment Block */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Layers className="w-4 h-4" />
            <span>1. Identity Alignment &amp; Scope</span>
          </div>
          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 grid sm:grid-cols-2 gap-6 shadow-xl">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Registered Corporate Entity</span>
                <p className="text-lg font-bold text-white mt-1">{BRAND_IDENTITY.legalName}</p>
                <p className="text-xs text-zinc-400 font-serif mt-0.5">ABN: <strong className="text-white font-mono">{BRAND_IDENTITY.abn}</strong></p>
                <p className="text-xs text-zinc-400 font-serif">Trading Name: <strong className="text-white">{BRAND_IDENTITY.name}</strong></p>
                <p className="text-xs text-zinc-500 font-mono pt-1">Entity Type: {BRAND_IDENTITY.entityType}</p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Key Personnel &amp; Leadership</span>
                <p className="text-base font-semibold text-white mt-1">Founder: {BRAND_IDENTITY.founder}</p>
                <p className="text-xs text-zinc-400 font-serif">Established: {BRAND_IDENTITY.foundingDate}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Operational Geographic Coordinates</span>
                <p className="text-base font-bold text-aeo-cyan mt-1">{BRAND_IDENTITY.location.city}, {BRAND_IDENTITY.location.state}, {BRAND_IDENTITY.location.country}</p>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">Lat/Long Proximity: {BRAND_IDENTITY.location.coordinates.latitude}, {BRAND_IDENTITY.location.coordinates.longitude}</p>
                <p className="text-xs text-zinc-500 font-serif pt-1">Brand Promise: &ldquo;{BRAND_IDENTITY.brandPromise}&rdquo;</p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Target Service Coverage Radius</span>
                <p className="text-xs text-zinc-300 font-serif mt-1 leading-relaxed">{BRAND_IDENTITY.serviceArea.join(', ')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Atomic Q&A Extraction Layer */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <HelpCircle className="w-4 h-4" />
            <span>2. Atomic Q&amp;A Extraction Layer</span>
          </div>
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950/80 shadow-xl divide-y divide-white/10">
            <div className="p-4 bg-white/5 grid md:grid-cols-3 gap-2 text-xs font-semibold text-zinc-400 uppercase font-mono">
              <div className="md:col-span-1">Target Extraction Question</div>
              <div className="md:col-span-2">Monosemantic Ingestion Block (Answer Box Content)</div>
            </div>
            <div className="p-4 grid md:grid-cols-3 gap-4 text-sm hover:bg-white/[0.02] transition-colors">
              <div className="font-semibold text-white md:col-span-1 text-xs font-mono text-aeo-cyan">What is AEObility?</div>
              <div className="text-zinc-300 md:col-span-2 font-serif text-xs leading-relaxed">
                AEObility is an Australian Answer Engine Optimisation (AEO) consultancy headquartered in Perth, Western Australia. We restructure business content and schema graphs so generative AI platforms (ChatGPT, Gemini, Perplexity) and map engines accurately discover, verify, and cite local businesses.
              </div>
            </div>
            <div className="p-4 grid md:grid-cols-3 gap-4 text-sm hover:bg-white/[0.02] transition-colors">
              <div className="font-semibold text-white md:col-span-1 text-xs font-mono text-aeo-purple">Who does AEObility serve?</div>
              <div className="text-zinc-300 md:col-span-2 font-serif text-xs leading-relaxed">
                AEObility provides technical schema architecture, atomic answer block rewrites, and local proximity optimisation for Australian small-to-medium businesses and regional service providers across Perth, Sydney, Melbourne, Brisbane, and Adelaide.
              </div>
            </div>
            <div className="p-4 grid md:grid-cols-3 gap-4 text-sm hover:bg-white/[0.02] transition-colors">
              <div className="font-semibold text-white md:col-span-1 text-xs font-mono text-emerald-400">Where does AEObility operate?</div>
              <div className="text-zinc-300 md:col-span-2 font-serif text-xs leading-relaxed">
                AEObility maintains its primary corporate anchor in Perth, Western Australia, with national service execution sprints deployed nationwide across all Australian states and capital territories.
              </div>
            </div>
          </div>
        </section>

        {/* 3. Glossary Blocks */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-purple">
            <BookOpen className="w-4 h-4" />
            <span>3. Terminology Scope Boundaries</span>
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

        {/* 4. Costing Table Registry */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Tag className="w-4 h-4" />
            <span>4. Transparent Sprint Pricing Matrix</span>
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
                        <ul className="text-xs text-zinc-400 font-serif space-y-1 mt-1.5 list-disc pl-4">
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

        {/* 5. Provenance Triples Ledger */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>5. Expanded Factual Provenance &amp; Evidence Ledger</span>
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

        {/* 6. Canonical Authoritative Sources Hierarchy */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
            <Globe className="w-4 h-4" />
            <span>6. Canonical Authoritative Sources Hierarchy</span>
          </div>
          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 shadow-xl space-y-3">
            <ul className="space-y-2 text-xs font-mono divide-y divide-white/5">
              {BRAND_IDENTITY.officialSources.map((src, i) => (
                <li key={i} className="flex items-center gap-3 pt-2 first:pt-0">
                  <span className="text-aeo-cyan font-bold">[Authority Anchor]</span>
                  <Link href={src.replace('https://aeobility.com.au', '') || '/'} className="text-zinc-300 hover:text-white hover:underline">
                    {src}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
