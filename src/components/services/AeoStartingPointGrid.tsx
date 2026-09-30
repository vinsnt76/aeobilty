'use client';

import React from 'react';
import { Rocket, Boxes, Compass, ArrowRight } from 'lucide-react';

interface EngagementPath {
  key: string;
  anchorId: string;
  icon: React.ReactNode;
  title: string;
  code: string;
  price: string;
  priceSub: string;
  scope: string;
  description: string;
  techNote: string;
  whenToChoose: string;
  ctaLabel: string;
}

const engagementPaths: EngagementPath[] = [
  {
    key: "micro-sprint",
    anchorId: "aeo-micro-sprints",
    icon: <Rocket className="w-6 h-6 text-aeo-purple" />,
    title: "AEO Technical Micro-Sprint",
    code: "Quick Fix",
    price: "$495 AUD",
    priceSub: "ex. GST per sprint",
    scope: "One priority page or schema fix",
    description: "Fix one high-impact AEO gap quickly: Structured Schema Deployment, Single Page Atomic Rewrite, or Category Answer Unit. Typically delivered in 4–5 business days.",
    techNote: "For technical teams: We implement nested JSON-LD schema graphs that tie your business facts directly to authoritative registries, paired with modular HTML blocks for clean passage extraction.",
    whenToChoose: "Outcome: Fix one high-impact AEO gap quickly. Ideal when you have a specific page or schema issue limiting AI search readability.",
    ctaLabel: "Book Micro-Sprint"
  },
  {
    key: "foundation",
    anchorId: "aeo-foundation",
    icon: <Boxes className="w-6 h-6 text-aeo-cyan" />,
    title: "Foundation Implementation",
    code: "Full Implementation",
    price: "From $3,195 AUD",
    priceSub: "ex. GST",
    scope: "Connected multi-page & entity improvements",
    description: "Implement connected improvements across structured data, atomic page rewrites, internal linking, and citation structures in a structured four-week engagement.",
    techNote: "For technical teams: Multi-page schema integration, restructuring internal contextual links to pass explicit topical salience, and aligning citation records across platforms.",
    whenToChoose: "Outcome: Implement connected improvements across your priority pages. Ideal when your business requires systematic AI visibility across multiple core services.",
    ctaLabel: "Book Foundation Implementation"
  },
  {
    key: "blueprint",
    anchorId: "aeo-blueprint",
    icon: <Compass className="w-6 h-6 text-aeo-cyan" />,
    title: "The AEObility Blueprint",
    code: "Diagnostic",
    price: "$995 AUD",
    priceSub: "ex. GST",
    scope: "Full digital audit & 90-day roadmap",
    description: "Audit your website structure, entity signals, and query opportunities. Receive a practical 90-day prioritised implementation roadmap. The full $995 Blueprint fee is credited against a Foundation Implementation booked within 90 days.",
    techNote: "For technical teams: Practical audit of structured data gaps, entity clarity review, and query intent mapping.",
    whenToChoose: "Outcome: Understand what is limiting AI visibility before investing. Ideal when you need a clear diagnostic plan before committing to implementation.",
    ctaLabel: "Book Blueprint Diagnostic"
  }
];

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

            <div>
              <h3 className="text-lg font-extrabold text-white tracking-tight">{path.title}</h3>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl font-extrabold font-mono text-white">{path.price}</span>
                <span className="text-xs text-slate-400 font-mono">{path.priceSub}</span>
              </div>
              <p className="text-xs text-teal-400 font-mono font-medium mt-1">{path.scope}</p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {path.description}
            </p>

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
