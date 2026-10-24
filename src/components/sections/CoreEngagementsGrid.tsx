'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Rocket, Compass, ShieldCheck, Clock } from 'lucide-react';
import { trackGaEvent } from '@/lib/gtag';
import { PRICING_TIERS, TECHNICAL_SPRINT_CATALOG, GOVERNANCE_RULES, formatAudCurrency } from '@/lib/pricing';

export function CoreEngagementsGrid() {
  const bpSku = TECHNICAL_SPRINT_CATALOG['BPSTRAT'];
  const foundationCore = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-CORE'] || TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'];
  const foundationTurnkey = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'];
  const macroSku = TECHNICAL_SPRINT_CATALOG['SS1MACRO'];

  const tier1 = PRICING_TIERS.find((t) => t.id === 'blueprint') || PRICING_TIERS[0];
  const tier2 = PRICING_TIERS.find((t) => t.id === 'foundation') || PRICING_TIERS[1];
  const tier3 = PRICING_TIERS.find((t) => t.id === 'macro-sprints') || PRICING_TIERS[2];

  return (
    <section className="w-full bg-black py-16 md:py-20 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-radial from-aeo-cyan/10 via-aeo-purple/5 to-transparent glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-400 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Predictable Engagements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-soehne-breit">
            Fixed-Scope Sprints. Zero Retainer Lock-In.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-serif leading-relaxed">
            Work directly with a qualified <Link href="/services/perth/seo-specialist" className="text-cyan-400 underline hover:text-cyan-300 font-medium">Perth SEO specialist &amp; local AEO consultant</Link> to secure top placement across Google Maps, local search, and AI answer engines. All engagements are clearly scoped and transparently priced.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Tier 1 (Strategic Blueprint) */}
          <div className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400 transition-all duration-300 group">
            <div className="space-y-4">
              {/* Eyebrow & SKU */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Strategic Blueprint</span>
                </div>
                <span className="font-mono text-xs text-zinc-500">
                  SKU: {bpSku.code}
                </span>
              </div>

              {/* Title & Pricing Block */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">{tier1.name}</h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">ex. GST</span>
                </div>
                <p className="mt-1 text-xs text-zinc-400 font-sans">
                  Standalone Investment • 100% Credited Toward Foundation
                </p>
              </div>

              {/* High-Contrast Badge & Guarantee Line */}
              <div className="space-y-1.5">
                <div className="inline-block px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-400/50 text-[11px] font-mono font-bold text-cyan-300">
                  100% Credit-Back Corridor ({GOVERNANCE_RULES.creditWindowDays} Days)
                </div>
                <p className="text-[11px] text-zinc-400 italic font-serif leading-relaxed">
                  (100% of your {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} fee is credited directly toward Foundation Implementation when activated within {GOVERNANCE_RULES.creditWindowDays} days)
                </p>
              </div>

              {/* Objective & Purpose */}
              <div className="space-y-1 pt-1">
                <span className="font-mono text-[10px] uppercase font-bold text-cyan-400 tracking-wider block">
                  Objective &amp; Purpose
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif">
                  {tier1.targetGoal}
                </p>
              </div>

              {/* Itemised Technical Deliverables */}
              <div className="space-y-3 pt-2 border-t border-white/5">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Core Deliverables &amp; Strategic Scope
                </h4>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-sans">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Entity Architecture &amp; Gap Analysis:</strong> Comprehensive audit of brand entities, Wikidata/knowledge graph alignment, and competitive schema coverage.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Schema Drift &amp; Syntax Report:</strong> DOM-level diagnostic identifying malformed JSON-LD, missing entity nodes, and Google Search Console rich-result errors.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Retrieval &amp; Positional Bias Evaluation:</strong> Empirical evaluation of passage retrieval, token density, and semantic coverage for LLM and AI Overview visibility.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">90-Day Prioritised Implementation Roadmap:</strong> Chronological sprint plan detailing priority fixes, required labour allocation, and engineering prerequisites.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Executive Stakeholder Briefing (45 Mins):</strong> Dedicated presentation and strategic walkthrough of diagnostic findings with your marketing and engineering leads.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Delivery & Commercial Governance */}
              <div className="space-y-2.5 pt-2 border-t border-white/5">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Delivery &amp; Commercial Governance
                </h4>
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3.5 space-y-2">
                  <div className="flex items-start gap-2 font-mono text-xs text-white">
                    <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Delivery Turnaround SLA:</strong> 5–7 Business Days from kickoff and credential verification.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[11px] text-zinc-300 font-serif leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-zinc-200 font-sans">Commercial Credit Terms:</strong> 100% of the {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} investment is deductible against <code className="text-cyan-300 font-mono text-[10px] bg-cyan-950/60 px-1 py-0.5 rounded">AEO-FOUNDATION-CORE</code> (Pathway 1) or Month 1 Retainer (Pathway 2). Valid for {GOVERNANCE_RULES.creditWindowDays} calendar days post-delivery.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[11px] text-zinc-300 pt-1.5 border-t border-white/5 font-sans">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Client IP Ownership:</strong> 100% unencumbered client ownership of all audit findings, mapping tables, and strategic artifacts.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href={tier1.ctaHref}
                className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs transition-all duration-300 shadow-lg shadow-cyan-500/20 text-left cursor-pointer"
                title="Commission Strategic Blueprint"
              >
                <span>Commission Strategic Blueprint →</span>
                <ArrowRight className="w-4 h-4 text-zinc-950 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </Link>
            </div>
          </div>

          {/* Card 2: Tier 2 (Foundation Core - Featured Gradient Border) */}
          <div className="relative p-0.5 rounded-2xl bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-500 shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300 group">
            <div className="flex flex-col justify-between h-full p-6 md:p-8 rounded-[15px] bg-zinc-950/95 backdrop-blur-xl">
              <div className="space-y-4">
                {/* Eyebrow & SKU */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                    <span>$250 Setup Fee Waived</span>
                  </div>
                  <span className="font-mono text-xs text-zinc-500">
                    SKU: AEO-FOUNDATION-CORE
                  </span>
                </div>

                {/* Title & Pricing Block */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">Foundation Core</h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                      {formatAudCurrency(foundationCore.priceExGst, { includeTaxSuffix: false })}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">ex. GST</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400 font-sans">
                    Fixed Investment • Complimentary Onboarding ($250 Value)
                  </p>
                </div>

                {/* Objective */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif">
                  Bridge strategic AI visibility into live production. Establish deterministic machine readability, high-density atomic answers, and connected entity graphs across up to 10 priority commercial pages to secure retrieval across AI Overviews, Perplexity, and conversational search engines.
                </p>

                {/* Itemised Technical Deliverables */}
                <div className="space-y-3 pt-2 border-t border-white/5">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Itemised Technical Deliverables
                  </h4>
                  <ul className="space-y-2.5 text-xs text-zinc-300 font-sans">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Pillar 1: Structured Data &amp; Schema Graph</strong>: Custom nested JSON-LD schema injected into the DOM (<em>Organisation, LocalBusiness, Service, GeoCoordinates, FAQPage</em>) with 0 syntax errors.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Pillar 2: Atomic Answer Copywriting</strong>: Answer-first restructuring across up to 10 priority pages formatted into 90–120 token extraction passages with strict H1–H3 intent hierarchy.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Pillar 3: Semantic Lattice Mapping</strong>: Bidirectional hub-and-spoke entity linking connecting core services to proof assets, mitigating crawler dead-ends and vector retrieval drift.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Pillar 4: Citation Provenance &amp; NAP Parity</strong>: Deployed canonical Brand Facts architecture with multi-platform NAP standardisation across GBP, Apple Maps, and Bing Places.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Complimentary Telemetry &amp; Setup</strong>: Pre-sprint environment access verification, index ping baseline, and final telemetry verification audit ($250 value included).
                      </span>
                    </li>
                  </ul>
                </div>

                {/* SLA & Open-Book Deployment Box */}
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3.5 space-y-1.5">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Turnaround SLA: 4-Week Staged Sprint</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-serif leading-relaxed">
                    <strong className="text-zinc-300 font-sans">Open-Book Deployment:</strong> Injected directly into your CMS or provided as clean engineering pull requests. Full schema entity mapping logs and technical documentation delivered at handover.
                  </p>
                </div>

                {/* Governance */}
                <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>100% Client IP Ownership • Zero Retainer Lock-in</span>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href={tier2.ctaHref}
                  className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-95 text-black font-bold text-xs transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] text-left"
                >
                  <span>{tier2.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Tier 3 (Ongoing Dominance - Governed Sprints) */}
          <div className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Ongoing Dominance</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-cyan-300 font-mono">{formatAudCurrency(macroSku.priceExGst, { includeTaxSuffix: false })} / mo</span>
                  <span className="text-[10px] text-zinc-500 font-mono block">ex. GST</span>
                </div>
              </div>

              {/* High-Contrast Badge */}
              <div className="inline-block px-2.5 py-1 rounded-md bg-zinc-900 border border-cyan-500/40 text-[11px] font-mono font-bold text-cyan-300">
                {tier3.badge || 'Zero Contract Lock-In'}
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">{tier3.name}</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-serif">
                  {tier3.targetGoal}
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-300 pt-2 font-sans">
                {tier3.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] text-zinc-400 font-mono italic pt-1 border-t border-white/5">
                {GOVERNANCE_RULES.clientIpOwnership}. Governed 30-day cadence.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href={tier3.ctaHref}
                className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-400 text-white font-bold text-xs transition-all duration-300 shadow-sm group-hover:bg-zinc-800 text-left"
                title="Explore Governed Technical Sprints"
              >
                <span>{tier3.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Semantic Service Architecture Decoupling: Core Solutions Navigation Landmark */}
        <nav aria-label="Core solutions" className="mt-14 w-full max-w-5xl mx-auto text-left relative z-10 border-t border-white/10 pt-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
            Explore AI Search Support
          </div>
          <h2 className="text-lg font-bold text-slate-100 mb-4 font-soehne-breit">
            Get Expert support and service
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li>
              <Link
                href="/solutions/aeo-blueprint"
                onClick={() => trackGaEvent('core_solutions_nav_clicked', { tier: 'blueprint', destination: '/solutions/aeo-blueprint' })}
                className="block p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">Strategic Blueprint &amp; Roadmap</span>
                <span className="text-xs text-slate-400">Diagnostic gap analysis &amp; engineering plan</span>
              </Link>
            </li>
            <li>
              <Link
                href="/solutions/aeo-sprint"
                onClick={() => trackGaEvent('core_solutions_nav_clicked', { tier: 'sprint', destination: '/solutions/aeo-sprint' })}
                className="block p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">Technical Implementation</span>
                <span className="text-xs text-slate-400">Deterministic schema &amp; knowledge node deployment</span>
              </Link>
            </li>
            <li>
              <Link
                href="/services/aeo/local-business"
                onClick={() => trackGaEvent('core_solutions_nav_clicked', { tier: 'local', destination: '/services/aeo/local-business' })}
                className="block p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">Local Visibility Support</span>
                <span className="text-xs text-slate-400">GEO optimisation &amp; citation integrity</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default CoreEngagementsGrid;

