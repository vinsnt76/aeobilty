'use client';

import React from 'react';
import { Rocket, Boxes, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRICING_TIERS, TECHNICAL_SPRINT_CATALOG, GOVERNANCE_RULES, formatAudCurrency } from '@/lib/pricing';

interface DeliverableItem {
  title: string;
  detail: string;
}

interface EngagementPath {
  key: string;
  anchorId: string;
  badge: string;
  icon: React.ReactNode;
  category: string;
  title: string;
  price: string;
  priceSub: string;
  scopeSub: string;
  description: string;
  deliverables: DeliverableItem[];
  turnaround: string;
  delivery: string;
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
  const macroSku = TECHNICAL_SPRINT_CATALOG['SS1MACRO'];

  const tier1 = PRICING_TIERS.find((t) => t.id === 'blueprint') || PRICING_TIERS[0];
  const tier2 = PRICING_TIERS.find((t) => t.id === 'foundation') || PRICING_TIERS[1];
  const tier3 = PRICING_TIERS.find((t) => t.id === 'macro-sprints') || PRICING_TIERS[2];

  const engagementPaths: EngagementPath[] = [
    {
      key: "blueprint",
      anchorId: "aeo-blueprint",
      badge: "Standalone audit • 100% credited toward implementation within 60 days",
      icon: <Compass className="w-5 h-5 text-aeo-cyan" />,
      category: "Diagnostic & Planning",
      title: tier1.name,
      price: formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false }),
      priceSub: "ex. GST",
      scopeSub: "Standalone audit • 100% credited toward implementation within 60 days",
      description: "Find the data errors, missing business facts, and structured code issues preventing search engines and AI models from recommending your business.",
      deliverables: [
        { title: "Search & AI Visibility Audit", detail: "Checks how Google, Apple Maps, and AI tools extract your business details." },
        { title: "Code & Schema Review", detail: "Identifies broken structured data, incorrect tags, and indexing errors." },
        { title: "Prioritised 90-Day Plan", detail: "An ordered checklist of required technical fixes and page updates." },
        { title: "45-Minute Review Call", detail: "A direct walkthrough of findings and next steps with your team." }
      ],
      turnaround: "5–7 business days",
      delivery: "Complete report and fix checklist",
      ctaLabel: "Commission Strategic Blueprint"
    },
    {
      key: "foundation",
      anchorId: "aeo-foundation",
      badge: "Complete setup • Covers up to 10 core pages • Includes $250 onboarding setup",
      icon: <Boxes className="w-5 h-5 text-aeo-cyan" />,
      category: "Core Setup (Recommended)",
      title: tier2.name,
      price: formatAudCurrency(foundationCore.priceExGst, { includeTaxSuffix: false }),
      priceSub: "ex. GST",
      scopeSub: "Complete setup • Covers up to 10 core pages • Includes $250 onboarding setup",
      description: "Hands-on technical implementation to resolve code errors, rewrite key pages for direct-answer search, and align your business listings.",
      deliverables: [
        { title: "Structured Data Installation", detail: "Valid schema markup added directly to your site or supplied as ready-to-paste code." },
        { title: "Direct-Answer Content", detail: "Up to 10 priority service pages updated into clear, extractable answer blocks." },
        { title: "Internal Page Linking", detail: "Connects core services to relevant proof points and case studies." },
        { title: "Directory Alignment", detail: "Syncs name, address, phone number, and services across Google, Apple Maps, and Bing." }
      ],
      turnaround: "4 weeks in staged milestones",
      delivery: "Direct CMS installation or code files for your developer",
      ctaLabel: "Deploy AEO Foundation"
    },
    {
      key: "macro-sprints",
      anchorId: "aeo-macro-sprints",
      badge: "Monthly technical cycles • No lock-in contracts • Pause anytime",
      icon: <Rocket className="w-5 h-5 text-aeo-purple" />,
      category: "Monthly Improvements",
      title: tier3.name,
      price: "From $495 AUD",
      priceSub: "ex. GST (or $1,980/mo bundle)",
      scopeSub: "Monthly technical cycles • No lock-in contracts • Pause anytime",
      description: "Focused monthly technical work blocks to clear site bottlenecks, expand service pages, and adapt to search updates.",
      deliverables: [
        { title: "Monthly Work Focus", detail: "Dedicated execution across code fixes, content updates, or directory cleanup." },
        { title: "Flexible 30-Day Cycles", detail: "Clear scope agreed upon each month with zero long-term commitments." },
        { title: "Progress Verification", detail: "Verification checks on indexing health, search appearance, and data accuracy." },
        { title: "Documentation & Handoff", detail: "Plain-English summary and review call for all completed updates." }
      ],
      turnaround: "10 business days per sprint cycle",
      delivery: "Adjust priorities monthly or cancel at the end of any cycle",
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
            {/* Eyebrow */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[11px] font-mono font-bold uppercase tracking-wider text-teal-300">
                {path.icon}
                <span>{path.category}</span>
              </div>
            </div>

            {/* Title & Pricing Block */}
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">{path.title}</h3>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-xl sm:text-2xl font-extrabold font-mono text-white">{path.price}</span>
                <span className="text-xs text-slate-400 font-mono">{path.priceSub}</span>
              </div>
              <p className="text-xs text-slate-400 font-sans mt-1">{path.scopeSub}</p>
            </div>

            {/* Single-Sentence Scope */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
              {path.description}
            </p>

            {/* 4 Scannable Deliverables */}
            <ul className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-slate-800/60 font-sans">
              {path.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">{item.title}</span>
                    <span className="text-[11px] text-slate-400 font-serif leading-snug">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Delivery Details */}
            <div className="pt-3 border-t border-slate-800/80 font-mono text-xs">
              <div className="bg-slate-950/80 border border-slate-800/80 p-3 rounded-xl space-y-1.5">
                <div className="text-slate-300 text-[11px]">
                  <strong className="text-teal-300">Turnaround:</strong> {path.turnaround}
                </div>
                <div className="text-slate-300 text-[11px] pt-1 border-t border-slate-800/60">
                  <strong className="text-teal-300">{path.key === 'macro-sprints' ? 'Flexibility:' : 'Delivery:'}</strong> {path.delivery}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/80">
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

