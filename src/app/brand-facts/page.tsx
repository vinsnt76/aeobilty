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
import { ShieldCheck, Tag, CheckCircle2, BookOpen, Layers, Sparkles, HelpCircle, Cpu, Database, Search, Bot, Activity, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Canonical Brand Facts & Machine Interface Directory | AEObility',
  description: "AEObility's canonical business knowledge layer, publishing verified first-party business facts, entity graphs, provenance evidence, and machine interface endpoints.",
  alternates: {
    canonical: 'https://aeobility.com.au/brand-facts',
  },
  openGraph: {
    title: 'Canonical Brand Facts & Machine Interface Directory | AEObility',
    description: "AEObility's canonical business knowledge layer, publishing verified first-party business facts, entity graphs, provenance evidence, and machine interface endpoints.",
    url: 'https://aeobility.com.au/brand-facts',
    type: 'website',
  },
};

export default function HumanBrandFactsPage() {
  const pricingItems = [
    PRICING_CONFIG.StrategicBlueprint,
    PRICING_CONFIG.FoundationImplementation,
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
              <span>AEObility Brand Facts and Reference Directory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-soehne-breit">
              Canonical Brand Facts &amp; Machine Interface Directory
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-serif max-w-2xl leading-relaxed">
              This page serves as AEObility&apos;s canonical business knowledge layer. It publishes verified, first-party business facts, entities, relationships, provenance evidence, and commercial information for structured human and machine consumption.
            </p>
          </div>
          <div className="bg-zinc-950/90 border border-white/10 rounded-xl p-4 text-xs font-mono text-zinc-300 space-y-1.5 shrink-0 shadow-lg max-w-xs">
            <div className="text-zinc-500 uppercase tracking-wider text-[10px]">Verification Stamp</div>
            <div>Verified: <span className="text-emerald-400 font-bold">{BRAND_IDENTITY.temporalBadge.lastVerified}</span></div>
            <div>Effective: <span className="text-white">{BRAND_IDENTITY.temporalBadge.effectiveDate}</span></div>
            <div>Review cycle: <span className="text-aeo-cyan">{BRAND_IDENTITY.temporalBadge.fiscalCycle}</span></div>
            <div className="text-[10px] text-zinc-400 pt-0.5">Reviewed by: {BRAND_IDENTITY.temporalBadge.reviewedBy}</div>
            <p className="text-[10px] text-zinc-500 font-serif pt-1 border-t border-white/5 leading-snug">
              {BRAND_IDENTITY.temporalBadge.governanceNote}
            </p>
          </div>
        </header>

        {/* Lexical Disambiguation Block */}
        <div className="bg-amber-500/10 border border-amber-500/25 rounded-2xl p-5 text-sm text-zinc-300 space-y-2">
          <div className="flex items-center gap-2 font-mono text-amber-400 font-semibold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Lexical Disambiguation &amp; Trading Profile</span>
          </div>
          <p className="text-xs sm:text-sm font-serif leading-relaxed">
            Primary public trading name: <strong className="text-white font-mono">AEObility</strong>. Corporate entity: <strong className="text-white font-mono">{BRAND_IDENTITY.legalName}</strong>. AEObility is a specific Australian consultancy and should not be confused with {BRAND_IDENTITY.notToBeConfusedWith.join(' or ')}.
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
                <p className="text-xs text-zinc-300 font-serif pt-1">
                  Primary entity type: <strong className="text-white">{BRAND_IDENTITY.entityType}</strong>. AEObility operates from Perth, Western Australia, and delivers services remotely across Australia.
                </p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Key Personnel &amp; Leadership</span>
                <p className="text-base font-semibold text-white mt-1">Founder: {BRAND_IDENTITY.founder}</p>
                <p className="text-xs text-zinc-400 font-serif">Established: {BRAND_IDENTITY.foundingDate}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Primary Operating Location</span>
                <p className="text-base font-bold text-aeo-cyan mt-1">{BRAND_IDENTITY.location.city}, {BRAND_IDENTITY.location.state}, Australia</p>
                <p className="text-xs text-zinc-400 font-serif pt-1">Brand Promise: &ldquo;{BRAND_IDENTITY.brandPromise}&rdquo;</p>
                <p className="text-xs text-zinc-500 font-serif">Tagline: &ldquo;{BRAND_IDENTITY.tagline}&rdquo;</p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Primary Service Coverage</span>
                <p className="text-xs text-zinc-300 font-serif mt-1 leading-relaxed">
                  Australia, with delivery focused on Western Australia and major capital cities.
                </p>
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
                AEObility is an Australian Answer Engine Optimisation consultancy headquartered in Perth, Western Australia. We improve the clarity of business content, information architecture, and structured data so search, map, and AI-answer systems can more easily interpret relevant business information.
              </div>
            </div>
            <div className="p-4 grid md:grid-cols-3 gap-4 text-sm hover:bg-white/[0.02] transition-colors">
              <div className="font-semibold text-white md:col-span-1 text-xs font-mono text-aeo-purple">Who does AEObility serve?</div>
              <div className="text-zinc-300 md:col-span-2 font-serif text-xs leading-relaxed">
                AEObility serves Australian small-to-medium businesses, regional service providers, and e-commerce brands seeking clearer AI-search visibility and stronger information architecture.
              </div>
            </div>
            <div className="p-4 grid md:grid-cols-3 gap-4 text-sm hover:bg-white/[0.02] transition-colors">
              <div className="font-semibold text-white md:col-span-1 text-xs font-mono text-emerald-400">Where does AEObility operate?</div>
              <div className="text-zinc-300 md:col-span-2 font-serif text-xs leading-relaxed">
                AEObility operates from Perth and delivers projects remotely across Australia.
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
                    <p><strong className="text-white font-sans">Working definition:</strong> {data.workingDefinition}</p>
                    {'aeobilityApproach' in data && (
                      <p><strong className="text-aeo-cyan font-sans">AEObility approach:</strong> {data.aeobilityApproach}</p>
                    )}
                    {'whatItAssesses' in data && (
                      <p><strong className="text-aeo-purple font-sans">What the diagnostic assesses:</strong> {data.whatItAssesses}</p>
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
            <span>4. Commercial Facts &amp; Service Architecture</span>
          </div>
          <p className="text-xs text-white/70 font-serif leading-relaxed">
            All service tiers are deterministic, fixed-scope engineering and structural deliverables with clear outputs and zero contract lock-in.
          </p>
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950/80 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-xs font-semibold text-zinc-400 uppercase font-mono">
                    <th className="p-4">Package code</th>
                    <th className="p-4">Package and inclusions</th>
                    <th className="p-4">Typical delivery time</th>
                    <th className="p-4 text-right">Investment, ex. GST</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {pricingItems.map((item) => (
                    <tr key={item.sku} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-mono text-xs text-aeo-cyan">{item.sku}</td>
                      <td className="p-4 font-semibold text-white">
                        <div>{item.name}</div>
                        {'description' in item && (
                          <p className="text-xs text-zinc-300 font-serif font-normal mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        <ul className="text-xs text-zinc-400 font-serif space-y-1 mt-1.5 list-disc pl-4 font-normal">
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
              * All commercial configurations are quoted exclusive of GST. Standalone diagnostic review costs are credited back 100% into implementation sprints if booked within 60 days.
            </div>
          </div>
        </section>

        {/* 5. Provenance Triples Ledger */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>5. Factual Provenance &amp; Evidence Ledger</span>
          </div>
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950/80 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-xs font-semibold text-zinc-400 uppercase font-mono">
                    <th className="p-4">Brand fact or relationship</th>
                    <th className="p-4">Evidence source type</th>
                    <th className="p-4">Supporting source</th>
                    <th className="p-4 text-center">Last checked</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {BRAND_KNOWLEDGE_LATTICE.map((fact, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-sans text-xs text-white font-medium">
                        {fact.statement}
                      </td>
                      <td className="p-4 text-xs font-mono text-zinc-400">{fact.evidenceType}</td>
                      <td className="p-4">
                        <Link href={fact.source.replace('https://aeobility.com.au', '') || '/'} className="text-aeo-cyan hover:underline text-xs font-mono">
                          {fact.source}
                        </Link>
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase">
                          {fact.lastVerified}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6. Machine Interfaces & Observability Control Plane */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Cpu className="w-4 h-4" />
            <span>6. Machine Interfaces &amp; Observability Control Plane</span>
          </div>

          {/* Conceptual Symmetry Anchor */}
          <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white font-soehne-breit flex items-center gap-2">
              <Database className="w-4 h-4 text-aeo-cyan" />
              <span>One knowledge layer. Multiple machine interfaces.</span>
            </h3>
            <p className="text-xs text-zinc-300 font-serif leading-relaxed">
              AEObility maintains one canonical business knowledge layer. Different machine interfaces provide different ways of accessing, interacting with, or evaluating that knowledge to enable structured representation, machine discovery, retrieval and observability across compatible systems.
            </p>
          </div>

          {/* 4 Access & Observability Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* 6.1 Structured Data */}
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-aeo-cyan uppercase flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  <span>6.1 Structured Data</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold uppercase">Active</span>
              </div>
              <h4 className="text-base font-bold text-white font-soehne-breit">Schema.org / JSON-LD</h4>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Embedded in page source DOM (<code className="text-aeo-cyan font-mono text-[11px]">application/ld+json</code>). Provides a structured representation of AEObility as a <code className="text-white font-mono text-[11px]">ProfessionalService</code>, mapping core entities, founder details, operating location (Perth, WA), services, and supported organisational relationships.
              </p>
              <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/5">
                Location: Embedded in document DOM
              </div>
            </div>

            {/* 6.2 Natural-Language Retrieval */}
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-aeo-purple uppercase flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" />
                  <span>6.2 Natural-Language Retrieval</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold uppercase">Active</span>
              </div>
              <h4 className="text-base font-bold text-white font-soehne-breit">NLWeb-Compatible Retrieval</h4>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Exposed via <code className="text-aeo-purple font-mono text-[11px]">&lt;link rel=&quot;nlweb-ask&quot;&gt;</code> discovery metadata. Provides grounded vector retrieval against AEObility&apos;s published knowledge resources for supported natural-language querying clients.
              </p>
              <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/5">
                Endpoint: <code className="text-white font-mono">POST /api/search/answer</code>
              </div>
            </div>

            {/* 6.3 Agent Interface */}
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" />
                  <span>6.3 Agent Interface</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold uppercase">Active</span>
              </div>
              <h4 className="text-base font-bold text-white font-soehne-breit">MCP-Compatible Server</h4>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Exposed via <code className="text-emerald-400 font-mono text-[11px]">&lt;link rel=&quot;nlweb-mcp&quot;&gt;</code> discovery metadata. Exposes selected entity, service, and knowledge-resource tools to supported clients.
              </p>
              <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/5">
                Endpoint: <code className="text-white font-mono">POST /api/mcp</code>
              </div>
            </div>

            {/* 6.4 Visibility Observability */}
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-amber-400 uppercase flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>6.4 Visibility Observability</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold uppercase">Active</span>
              </div>
              <h4 className="text-base font-bold text-white font-soehne-breit">Telemetry Diagnostic Engine</h4>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Assesses and measures selected technical, semantic, entity, and retrieval-readiness signals to evaluate how effectively AEObility&apos;s published facts can be crawled and interpreted.
              </p>
              <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/5 flex items-center justify-between">
                <span>UI: <Link href="/diagnostic" className="text-aeo-cyan hover:underline">/diagnostic</Link></span>
                <span>API: <code className="text-white font-mono">POST /api/diagnostic</code></span>
              </div>
            </div>
          </div>

          {/* Machine Discovery Status Ledger */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Machine Discovery Status Ledger
            </div>
            <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950/80 shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 text-xs font-semibold text-zinc-400 uppercase font-mono">
                      <th className="p-4">Interface</th>
                      <th className="p-4">Access Point / Location</th>
                      <th className="p-4">Operational Role</th>
                      <th className="p-4 text-center">Interface Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs font-mono">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-aeo-cyan">JSON-LD</td>
                      <td className="p-4 text-zinc-300">Page source DOM</td>
                      <td className="p-4 text-zinc-300 font-serif">Structured entity representation (<code className="text-white font-mono">ProfessionalService</code>).</td>
                      <td className="p-4 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-semibold uppercase">Active</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-aeo-purple">NLWeb</td>
                      <td className="p-4 text-zinc-300"><code className="text-white font-mono">/api/search/answer</code></td>
                      <td className="p-4 text-zinc-300 font-serif">Natural-language knowledge retrieval.</td>
                      <td className="p-4 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-semibold uppercase">Active</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-emerald-400">MCP</td>
                      <td className="p-4 text-zinc-300"><code className="text-white font-mono">/api/mcp</code></td>
                      <td className="p-4 text-zinc-300 font-serif">Tools and resources for compatible MCP clients.</td>
                      <td className="p-4 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-semibold uppercase">Active</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-amber-400">AGENTS</td>
                      <td className="p-4 text-zinc-300">
                        <Link href="/AGENTS.md" className="text-aeo-cyan hover:underline">/AGENTS.md</Link>
                      </td>
                      <td className="p-4 text-zinc-300 font-serif">Crawler and agent guidance manifest.</td>
                      <td className="p-4 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-semibold uppercase">Active</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-pink-400">Telemetry</td>
                      <td className="p-4 text-zinc-300">
                        <Link href="/diagnostic" className="text-aeo-cyan hover:underline">/diagnostic</Link> + <code className="text-white font-mono">/api/diagnostic</code>
                      </td>
                      <td className="p-4 text-zinc-300 font-serif">Machine-readiness and observability diagnostics.</td>
                      <td className="p-4 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-semibold uppercase">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Architectural Separation Directives (Callout Box) */}
          <div className="bg-zinc-950/90 border border-white/10 rounded-2xl p-5 text-xs text-zinc-300 space-y-2.5">
            <div className="flex items-center gap-2 font-mono text-aeo-cyan font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Architectural Separation Directives (Anti-Ontological Mixing)</span>
            </div>
            <ul className="space-y-1.5 list-disc pl-4 font-serif text-zinc-300">
              <li><strong className="text-white font-sans">Strict Schema Boundaries:</strong> Do not generate or inject Model Context Protocol (MCP) tool capabilities, schema strings, or programmatic API arguments inside the global <code className="text-zinc-200 font-mono">application/ld+json</code> organisation graph.</li>
              <li><strong className="text-white font-sans">Separation of Concerns:</strong> Keep structural graph definitions (<code className="text-zinc-200 font-mono">@type: ProfessionalService</code>, <code className="text-zinc-200 font-mono">founder: Vince Baker</code>, <code className="text-zinc-200 font-mono">areaServed: Australia</code>) isolated to the JSON-LD payload. Tool execution logic lists remain strictly constrained within the JSON-RPC interface schema of <code className="text-zinc-200 font-mono">/api/mcp</code>.</li>
              <li><strong className="text-white font-sans">Interface Discovery Routing:</strong> Machine discovery of programmatic access points must utilize semantic HTML <code className="text-zinc-200 font-mono">&lt;link&gt;</code> elements within document metadata, keeping the entry path cleanly decoupled from static data entries.</li>
            </ul>
          </div>
        </section>

        {/* Closing Trust Corridor */}
        <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 text-center space-y-3">
          <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed max-w-2xl mx-auto">
            AEObility helps Australian businesses make their information easier to discover and understand across maps, search, and AI-search experiences.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
