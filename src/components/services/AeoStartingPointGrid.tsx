'use client';

import React from 'react';
import { Rocket, Boxes, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRICING_TIERS, TECHNICAL_SPRINT_CATALOG, GOVERNANCE_RULES, formatAudCurrency } from '@/lib/pricing';

interface EngagementPath {
  key: string;
  anchorId: string;
  badge: string;
  icon: React.ReactNode;
  title: string;
  code: string;
  price: string;
  priceSub: string;
  scope: string;
  description: string;
  deliverables: string[];
  techNote: string;
  whenToChoose: string;
  ctaLabel: string;
}

interface AeoStartingPointGridProps {
  id?: string;
  targetFormId?: string;
  contactAnchor?: string;
  diagnosticAnchor?: string;
}

export default function AeoStartingPointGrid({
  id,
  targetFormId = "aeo-contact-form",
  contactAnchor,
  diagnosticAnchor,
}: AeoStartingPointGridProps) {
  const effectiveFormId = contactAnchor ? contactAnchor.replace('#', '') : targetFormId;

  const bpSku = TECHNICAL_SPRINT_CATALOG['BPSTRAT'];
  const foundationCore = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-CORE'] || TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'];
  const foundationTurnkey = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'];
  const macroSku = TECHNICAL_SPRINT_CATALOG['SS1MACRO'];

  const tier1 = PRICING_TIERS.find((t) => t.id === 'blueprint') || PRICING_TIERS[0];
  const tier2 = PRICING_TIERS.find((t) => t.id === 'foundation') || PRICING_TIERS[1];
  const tier3 = PRICING_TIERS.find((t) => t.id === 'macro-sprints') || PRICING_TIERS[2];

  const engagementPaths: EngagementPath[] = [
    {
      key: "blueprint",
      anchorId: "aeo-blueprint",
      badge: tier1.badge || "100% Credit-Back Corridor (60 Days)",
      icon: <Compass className="w-6 h-6 text-aeo-cyan" />,
      title: tier1.name,
      code: bpSku.code,
      price: formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false }),
      priceSub: "ex. GST",
      scope: "Full digital audit, 90-day roadmap & stakeholder briefing",
      description: tier1.targetGoal,
      deliverables: bpSku.deliverables,
      techNote: "For technical teams: Comprehensive entity gap analysis, canonical schema drift auditing, passage retrieval evaluation, and 45-minute executive briefing.",
      whenToChoose: "Outcome: Understand what is limiting AI visibility before investing. Ideal when you need a clear diagnostic plan before committing to implementation.",
      ctaLabel: "Commission Strategic Blueprint"
    },
    {
      key: "foundation",
      anchorId: "aeo-foundation",
      badge: tier2.badge || "$250 Setup Fee Waived",
      icon: <Boxes className="w-6 h-6 text-aeo-cyan" />,
      title: tier2.name,
      code: "AEO-FOUNDATION-CORE",
      price: formatAudCurrency(foundationCore.priceExGst, { includeTaxSuffix: false }),
      priceSub: "ex. GST",
      scope: `Deterministic 4-pillar deployment (up to ${GOVERNANCE_RULES.turnkeyPageLimit} pages)`,
      description: tier2.targetGoal,
      deliverables: foundationCore.deliverables,
      techNote: "For technical teams: Nested JSON-LD DOM injection, 90–120 token extraction passages, semantic lattice mapping, and multi-platform NAP parity.",
      whenToChoose: "Outcome: Bridge AI visibility into live production across up to 10 priority pages with 100% client IP ownership and zero retainer lock-in.",
      ctaLabel: "Deploy AEO Foundation"
    },
    {
      key: "macro-sprints",
      anchorId: "aeo-macro-sprints",
      badge: tier3.badge || "Zero Contract Lock-In",
      icon: <Rocket className="w-6 h-6 text-aeo-purple" />,
      title: tier3.name,
      code: "Ongoing Dominance",
      price: `${formatAudCurrency(macroSku.priceExGst, { includeTaxSuffix: false })} / mo`,
      priceSub: "ex. GST",
      scope: "Macro Sprint cycles (bundles 4x micro-sprints)",
      description: tier3.targetGoal,
      deliverables: tier3.deliverables,
      techNote: "For technical teams: Modular sprints targeting schema nesting, answer extraction, contextual link graphs, or directory citation parity.",
      whenToChoose: "Outcome: Target specific technical bottlenecks in focused 10-day execution blocks. Ideal for continuous optimisation with zero contract lock-in.",
      ctaLabel: "Explore AEO Sprints"
    }
  ];

  const handleSelectSprint = (key: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('select-aeo-sprint', { detail: key }));
      const formElement = document.getElementById(effectiveFormId);
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div id={id} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {engagementPaths.map((path) => (
        <div
          key={path.key}
          id={path.anchorId}
          className="bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:border-teal-500/40 transition-all duration-300 relative group scroll-mt-28 backdrop-blur-xl shadow-xl"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl group-hover:border-teal-500/40 transition-colors">
                {path.icon}
              </div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2.5 py-1 rounded-full">
                {path.code}
              </span>
            </div>

            {/* High-Contrast Badge */}
            <div className="inline-block px-2.5 py-1 rounded-md bg-teal-950/80 border border-teal-500/30 text-[11px] font-mono font-bold text-teal-300">
              {path.badge}
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-white tracking-tight">{path.title}</h3>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-xl sm:text-2xl font-extrabold font-mono text-white">{path.price}</span>
                <span className="text-xs text-slate-400 font-mono">{path.priceSub}</span>
              </div>
              <p className="text-xs text-teal-400 font-mono font-medium mt-1">{path.scope}</p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {path.description}
            </p>

            {/* Itemized Deliverables */}
            <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800/60">
              {path.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-950/80 border border-slate-800/80 p-3 rounded-xl text-xs text-slate-300 leading-relaxed">
              <strong className="text-teal-300 font-semibold block mb-0.5">When to choose:</strong>
              <span>{path.whenToChoose}</span>
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t border-slate-800/80">
            <p className="text-xs text-slate-400 font-mono leading-relaxed">{path.techNote}</p>
            <button
              type="button"
              onClick={() => handleSelectSprint(path.key)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-teal-500/20 cursor-pointer"
            >
              <span>{path.ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

