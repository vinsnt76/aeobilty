import React from 'react';
import { ArrowRight, Compass, Milestone, Layers, CheckCircle2, ShieldCheck, Clock, FileText, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { TECHNICAL_SPRINT_CATALOG, GOVERNANCE_RULES, formatAudCurrency } from '@/lib/pricing';

export default function BlueprintSection() {
  const bpSku = TECHNICAL_SPRINT_CATALOG['BPSTRAT'];

  const blueprintPhases = [
    {
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      title: 'Days 1-30: Foundation & Entity Setup',
      description: 'Analyse existing assets and organise business details so Google, map services, and modern AI engines can resolve your business identity with zero ambiguity.',
    },
    {
      icon: <Milestone className="w-5 h-5 text-cyan-400" />,
      title: 'Days 31-60: Local Presence & Answer Restructuring',
      description: 'Optimise local listings, Google Business Profile attributes, and structure targeted question-and-answer atomic passages that capture high-intent search queries.',
    },
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: 'Days 61-90: Scaling Authority & Semantic Lattice',
      description: 'Acquire high-quality local mentions and directory citations while connecting pages with structured internal link lattices to solidify ongoing generative visibility.',
    },
  ];

  return (
    <section id="blueprint" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-gradient-to-r from-aeo-purple/20 to-aeo-cyan/20 glow-blur opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Scope, Pricing, Deliverables & Governance */}
          <div className="lg:col-span-7 relative">
            {/* Geometric Grid Background Motif */}
            <div className="absolute inset-y-0 -inset-x-8 pointer-events-none bg-grid-motif-dark opacity-60 z-0" />
            
            <div className="relative z-10 space-y-6">
              {/* Eyebrows & SKU */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs text-cyan-300 font-medium font-mono">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Strategic Blueprint</span>
                </div>
                <span className="font-mono text-xs text-zinc-500 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  SKU: {bpSku.code}
                </span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-xs text-cyan-300 font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>100% Credit-Back Corridor ({GOVERNANCE_RULES.creditWindowDays} Days)</span>
                </div>
              </div>

              {/* Title & Investment Block */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-soehne-breit tracking-tight text-white">
                  The AEObility<br />
                  <span className="text-gradient-aeo">Strategic Blueprint</span>
                </h2>
                <div className="flex flex-wrap items-baseline gap-2 mt-3">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                    {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
                    ex. GST • Delivery SLA: 5–7 Business Days
                  </span>
                </div>
                <p className="mt-1 text-xs text-zinc-400 font-serif italic">
                  (100% of your {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} fee is credited directly toward Foundation Implementation when activated within {GOVERNANCE_RULES.creditWindowDays} days)
                </p>
              </div>

              {/* Objective & Purpose */}
              <div className="p-4 rounded-xl bg-zinc-950/90 border border-white/10 space-y-1.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 block">
                  Objective &amp; Purpose
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed font-serif">
                  De-risk technical execution through comprehensive diagnostic discovery. Identify latent entity gaps, citation decay, positional bias, and schema drift across your digital footprint before deploying code.
                </p>
              </div>

              {/* Core Deliverables & Strategic Scope */}
              <div className="p-5 rounded-xl bg-zinc-950/90 border border-white/10 space-y-3.5">
                <span className="text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider block">
                  Core Deliverables &amp; Strategic Scope
                </span>
                <ul className="space-y-3 text-xs text-zinc-300 font-sans">
                  <li className="flex items-start gap-2.5">
                    <Compass className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Entity Architecture &amp; Gap Analysis:</strong> Comprehensive audit of brand entities, Wikidata/knowledge graph alignment, and competitive schema coverage.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FileText className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Schema Drift &amp; Syntax Report:</strong> DOM-level diagnostic identifying malformed JSON-LD, missing entity nodes, and Google Search Console rich-result errors.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Retrieval &amp; Positional Bias Evaluation:</strong> Empirical evaluation of passage retrieval, token density, and semantic coverage for LLM and AI Overview visibility.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Milestone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
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
              <div className="p-4 rounded-xl bg-zinc-950/90 border border-cyan-500/30 space-y-2.5">
                <span className="text-xs font-mono font-bold uppercase text-cyan-300 tracking-wider block">
                  Delivery &amp; Commercial Governance
                </span>
                <div className="space-y-2 text-xs text-zinc-300 font-sans">
                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Delivery Turnaround SLA:</strong> 5–7 Business Days from kickoff and credential verification.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Commercial Credit Terms:</strong> 100% of the {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} investment is deductible against <code className="text-cyan-300 font-mono text-[10px] bg-cyan-950/60 px-1 py-0.5 rounded">AEO-FOUNDATION-CORE</code> (Pathway 1) or Month 1 Retainer (Pathway 2). Valid for {GOVERNANCE_RULES.creditWindowDays} calendar days post-delivery.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 pt-1 border-t border-white/5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Client IP Ownership:</strong> 100% unencumbered client ownership of all audit findings, mapping tables, and strategic artifacts.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="/contact?tier=blueprint"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 text-zinc-950 font-bold text-sm hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
                  title="Commission Strategic Blueprint"
                >
                  <span>Commission Strategic Blueprint →</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 90-Day Execution Plan & Handover Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl">
              <div className="p-6 sm:p-8 space-y-6 bg-neutral-950/90 rounded-xl">
                <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold font-soehne-breit text-white">
                    90-Day Execution Roadmap
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">Staged Sprints</span>
                </div>
                
                <div className="space-y-5">
                  {blueprintPhases.map((phase, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 mt-0.5">
                        {phase.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white font-soehne-breit">{phase.title}</h4>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed font-serif">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 space-y-2">
                  <span className="text-xs font-mono font-bold text-cyan-300 block">
                    Strategic Handover Touchpoints:
                  </span>
                  <ul className="text-xs text-zinc-300 space-y-1 font-serif">
                    <li>• <strong>Strategy Kickoff:</strong> Stakeholder alignment &amp; asset discovery</li>
                    <li>• <strong>Findings Briefing:</strong> 45-min executive walkthrough of roadmap</li>
                    <li>• <strong>Turnaround:</strong> 5–7 Business Days from access verification</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>Effort: {bpSku.handsOnEffort}</span>
                  <span>Turnaround: {bpSku.deliverySla}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


