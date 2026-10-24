import React from 'react';
import { ArrowRight, Compass, Milestone, Layers, Rocket, CheckCircle2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { TECHNICAL_SPRINT_CATALOG, GOVERNANCE_RULES, formatAudCurrency } from '@/lib/pricing';

export default function BlueprintSection() {
  const bpSku = TECHNICAL_SPRINT_CATALOG['BPSTRAT'];

  const blueprintPhases = [
    {
      icon: <Compass className="w-5 h-5 text-aeo-cyan" />,
      title: 'Days 1-30: Foundation & Entity Setup',
      description: 'Analyse existing assets and organise business details so Google, map services, and modern AI tools can resolve your business identity with zero ambiguity.',
    },
    {
      icon: <Milestone className="w-5 h-5 text-aeo-cyan" />,
      title: 'Days 31-60: Local Presence & Answer Restructuring',
      description: 'Optimise local listings, Google Business Profile attributes, and structure targeted question-and-answer atomic passages that capture high-intent search queries.',
    },
    {
      icon: <Layers className="w-5 h-5 text-aeo-cyan" />,
      title: 'Days 61-90: Scaling Authority & Semantic Lattice',
      description: 'Acquire high-quality local mentions and directory citations while connecting pages with structured internal link lattices to solidify ongoing generative visibility.',
    },
  ];

  return (
    <section id="blueprint" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-gradient-to-r from-aeo-purple/20 to-aeo-cyan/20 glow-blur opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative">
            {/* Geometric Grid Background Motif */}
            <div className="absolute inset-y-0 -inset-x-8 pointer-events-none bg-grid-motif-dark opacity-60 z-0" />
            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium font-mono">
                  <Rocket className="w-3.5 h-3.5" />
                  <span>Strategic Roadmap</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-xs text-cyan-300 font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>100% Credit Back ({GOVERNANCE_RULES.creditWindowDays} Days)</span>
                </div>
              </div>

              <div>
                <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight font-soehne-breit">
                  The AEObility<br />
                  <span className="text-gradient-aeo">90-Day Blueprint</span>
                </h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl font-bold font-mono text-cyan-300">
                    {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">ex. GST • Delivery SLA: {bpSku.deliverySla}</span>
                </div>
              </div>

              <p className="text-lg text-white/70 font-light leading-relaxed font-serif">
                A clear, actionable roadmap to improve visibility, increase leads, and prepare your business for local maps and future AI search discovery.
              </p>

              {/* Itemized Deliverables */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 space-y-2.5">
                <span className="text-xs font-mono font-bold uppercase text-zinc-400 tracking-wider block">
                  Itemized Diagnostic Deliverables
                </span>
                <ul className="space-y-2 text-xs text-zinc-300 font-sans">
                  {bpSku.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 60-Day Credit Reversal Callout */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-purple-950/30 border border-cyan-500/30 space-y-1">
                <span className="text-xs font-bold text-cyan-300 font-mono block">
                  60-Day Credit Reversal Guarantee:
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed font-serif">
                  100% of your {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} Blueprint fee is credited back and deducted from Foundation Implementation when booked within {GOVERNANCE_RULES.creditWindowDays} calendar days of handover.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <Link
                  href="/book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-cyan-400 text-zinc-950 font-bold text-sm hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  <span>Book a 15-Minute Diagnostic</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl">
              <div className="p-8 space-y-8 bg-neutral-950/80 rounded-xl">
                <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold font-soehne-breit">
                    What is included in the plan?
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">90-Day Execution</span>
                </div>
                
                <div className="space-y-6">
                  {blueprintPhases.map((phase, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 mt-1">
                        {phase.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white font-soehne-breit">{phase.title}</h4>
                        <p className="text-xs text-white/60 font-light leading-relaxed font-serif">{phase.description}</p>
                      </div>
                    </div>
                  ))}
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

