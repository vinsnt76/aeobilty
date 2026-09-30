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
          className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all duration-300 relative group scroll-mt-28"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 bg-black border border-white/10 rounded-xl group-hover:border-cyan-500/30 transition-colors">
                {path.icon}
              </div>
              <span className="text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                {path.code}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white font-soehne-breit">{path.title}</h3>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-xl font-bold font-mono text-cyan-300">{path.price}</span>
                <span className="text-[11px] text-zinc-400 font-mono">{path.priceSub}</span>
              </div>
              <p className="text-xs text-cyan-400/90 font-mono mt-1">{path.scope}</p>
            </div>

            <p className="text-xs text-zinc-300 font-serif leading-relaxed">
              {path.description}
            </p>

            <div className="bg-black/50 border border-white/5 p-2.5 rounded-lg text-[11px] text-zinc-400 font-serif leading-relaxed">
              <strong className="text-white block mb-0.5">When to choose:</strong>
              <span>{path.whenToChoose}</span>
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t border-white/5">
            <p className="text-[10px] text-zinc-500 font-mono leading-tight">{path.techNote}</p>
            <button
              type="button"
              onClick={() => handleSelectSprint(path.key)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/15 hover:border-cyan-400 text-white font-bold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer"
            >
              <span>{path.ctaLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
