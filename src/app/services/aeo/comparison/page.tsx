'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { trackGaEvent } from '@/lib/gtag';
import { getAeoComparisonSchemaGraph } from '@/lib/schema/aeoComparison';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  HelpCircle, 
  Search, 
  Cpu, 
  Sparkles, 
  Scale, 
  AlertCircle,
  FileText,
  Wrench,
  ChevronDown,
  Compass,
  BarChart3,
  Calendar,
  Check,
  XCircle,
  Users,
  Rocket,
  Boxes,
  FileCheck,
  Code
} from 'lucide-react';

export const AEO_COMPARISON_INTERNAL_LINKS = [
  {
    targetSlug: "/services/aeo",
    anchorText: "Canonical AEO Hub",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/aeo/procedures",
    anchorText: "AEO Strategies & Procedures",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-sprint",
    anchorText: "focused micro-sprints",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-blueprint",
    anchorText: "The AEObility Blueprint",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions",
    anchorText: "View current service pricing and scope",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function AEOVsSEOPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [diagnosticSubmitted, setDiagnosticSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const [diagnosticData, setDiagnosticData] = useState({
    websiteUrl: '',
    name: '',
    email: ''
  });

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    website: '',
    serviceType: 'unsure',
    message: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const selectSprintForForm = (typeKey: string) => {
    setContactData(prev => ({ ...prev, serviceType: typeKey }));
    const formElement = document.getElementById('comparison-contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiagnosticSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'aeo_comparison_diagnostic_form',
      lead_type: 'aeo_comparison_scan',
      value: 1,
    });
    setDiagnosticSubmitted(true);
    setTimeout(() => {
      setDiagnosticSubmitted(false);
      setDiagnosticData({ websiteUrl: '', name: '', email: '' });
    }, 6000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'aeo_comparison_contact_form',
      lead_type: 'aeo_comparison_enquiry',
      service_selected: contactData.serviceType,
      value: 1,
    });
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactData({ name: '', email: '', website: '', serviceType: 'unsure', message: '' });
    }, 6000);
  };

  const faqs = [
    {
      question: "Is AEO a replacement for traditional SEO?",
      answer: "No. AEO complements traditional SEO. SEO ensures your website is crawlable, fast, and discoverable in organic search engines. AEO restructures your content and schema so digital assistants and AI search engines can parse, understand, and reference your business accurately."
    },
    {
      question: "What is the key difference between SEO, AEO, and GEO?",
      answer: "SEO focuses on keyword search ranking and organic traffic; AEO focuses on structured answer units and machine extraction for digital assistants; GEO (Generative Engine Optimisation) focuses on location vector nodes and proximity signals for maps and local AI search packs."
    },
    {
      question: "How do I know whether my business needs SEO or AEO first?",
      answer: "If your website has technical errors, broken pages, or indexing issues, fix SEO foundations first. If your website is indexed but customers are asking AI assistants (like ChatGPT or Perplexity) for business recommendations, AEO micro-sprints will help format your data."
    },
    {
      question: "What is included in a $495 AEO Micro-Sprint?",
      answer: "A $495 Micro-Sprint targets one agreed technical priority: Schema Markup Deployment, Single Page Atomic Rewrite, or Category Answer Unit. It includes validation checks, a summary of completed changes, and handover notes."
    },
    {
      question: "Can I credit my Blueprint fee towards Foundation Implementation?",
      answer: "Yes. If you complete the AEObility Blueprint and book Foundation Implementation within 60 days of handover, the full $995 Blueprint fee is applied to the Foundation work. The credit applies to Foundation Implementation only, is applied to the agreed implementation fee and cannot be exchanged for cash."
    },
    {
      question: "Do you require ongoing monthly retainers or contracts?",
      answer: "No. AEObility AEO sprints are fixed-scope, flat-rate engagements. No ongoing monthly retainer or locked-in contract is required."
    }
  ];

  const engagementPaths = [
    {
      key: "micro-sprint",
      anchorId: "comparison-micro-sprints",
      icon: <Rocket className="w-6 h-6 text-aeo-purple" />,
      title: "AEO Technical Micro-Sprint",
      code: "SS1 / SS2",
      price: "From $495 AUD",
      priceSub: "ex. GST",
      scope: "One priority page or schema fix",
      description: "Choose one focused priority for $495 AUD ex. GST: Schema Markup Deployment, Single Page Atomic Rewrite, or Category Answer Unit.",
      techNote: "For technical teams: Deployment of nested JSON-LD graphs and atomic HTML passage markup.",
      whenToChoose: "Choose this when you have one specific page or schema gap limiting AI search readability.",
      ctaLabel: "Discuss Micro-Sprint"
    },
    {
      key: "foundation",
      anchorId: "comparison-foundation",
      icon: <Boxes className="w-6 h-6 text-aeo-cyan" />,
      title: "Foundation Implementation",
      code: "MACRO TIER",
      price: "From $3,195 AUD",
      priceSub: "ex. GST",
      scope: "Connected multi-page & entity improvements",
      description: "Combine agreed improvements across structured data, atomic page rewrites, internal linking, and citation structures in a focused four-week engagement.",
      techNote: "For technical teams: Multi-page schema integration, internal linking lattice refactoring, and citation alignment.",
      whenToChoose: "Choose this when your business requires connected improvements across multiple core pages.",
      ctaLabel: "Discuss Foundation Tier"
    },
    {
      key: "blueprint",
      anchorId: "comparison-blueprint",
      icon: <Compass className="w-6 h-6 text-aeo-cyan" />,
      title: "The AEObility Blueprint",
      code: "BPSTRAT",
      price: "$995 AUD",
      priceSub: "ex. GST",
      scope: "Full digital audit & 90-day roadmap",
      description: "Audit your website structure, entity signals, and query opportunities. Receive a practical 90-day roadmap. 100% credited toward Foundation work.",
      techNote: "For technical teams: Technical gap analysis, entity salience review, and query fan-out mapping.",
      whenToChoose: "Choose this when you need a clear diagnostic plan before committing to implementation.",
      ctaLabel: "Discuss $995 Blueprint"
    }
  ];

  const jsonLdGraph = getAeoComparisonSchemaGraph(faqs);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Unified JSON-LD Connected Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. Hero Block with Clean Featured WebP Image Backdrop & Overlaid CTAs */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <Scale className="w-4 h-4 text-aeo-cyan" />
              <span>AEO vs SEO: Generative Search Paradigm Shift</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              AEO vs SEO: <span className="text-gradient-aeo">Choosing the Right Strategy</span>
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Compare legacy keyword-driven search ranking against dense retrieval vector systems. Learn how Answer Engine Optimisation complements search foundations. Clear scope. Flat rates.
              </h2>
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>Foundation Implementation from $3,195 AUD ex. GST</span>
              </div>
            </div>

            {/* Featured 1200x800 WebP Image Hero Banner with Overlaid CTAs */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/services/aeo-vs-seo-comparison_AEObility.webp"
                alt="AEObility AEO vs SEO comparison matrix chart contrasting legacy keyword search ranking against dense vector RAG retrieval systems."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-3.5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix one technical gap or build a comprehensive AEO foundation.</span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 font-serif block">Typical delivery: 4–5 business days from confirmed scope and access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => selectSprintForForm('micro-sprint')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Discuss AEO vs SEO Strategy</span>
                  </button>
                  <a
                    href="#comparison-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-white font-semibold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Run a free strategy scan</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Explore step-by-step technical procedures on our <Link href="/services/aeo/procedures" className="text-cyan-400 hover:underline font-medium">AEO Procedures page</Link> or review <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">focused micro-sprints</Link>.
            </p>
          </section>

          {/* 2. "Choose Your Starting Point" Engagement Grid */}
          <section id="engagement-paths" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Choose Your Starting Point</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Select a targeted micro-sprint, a comprehensive foundation implementation, or a diagnostic audit.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementPaths.map((path, idx) => (
                <div id={path.anchorId} key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col justify-between space-y-5 hover:border-cyan-500/40 transition-all duration-300 group scroll-mt-24">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-black border border-white/10 rounded-xl shrink-0">
                        {path.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                        {path.code}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white font-soehne-breit leading-snug">{path.title}</h3>
                      <div className="text-sm font-bold text-cyan-300 font-mono mt-1">
                        {path.price} <span className="text-[10px] text-zinc-400 font-normal">{path.priceSub}</span>
                      </div>
                      <span className="text-[11px] text-zinc-400 font-mono block mt-1">Scope: {path.scope}</span>
                    </div>

                    <p className="text-xs text-zinc-300 font-serif leading-relaxed pt-1">
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
                      onClick={() => selectSprintForForm(path.key)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/15 hover:border-cyan-400 text-white font-bold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer"
                    >
                      <span>{path.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Clean 3-Tier Comparison Matrix Table */}
            <div id="comparison-pricing-table" className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-md">
              <table className="w-full text-left text-xs font-serif border-collapse min-w-[580px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    <th className="p-3.5 sm:p-4">Service / Tier</th>
                    <th className="p-3.5 sm:p-4">Target Scope</th>
                    <th className="p-3.5 sm:p-4">Best For</th>
                    <th className="p-3.5 sm:p-4 text-right">Price (ex. GST)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEO Technical Micro-Sprint</td>
                    <td className="p-3.5 sm:p-4">1 Defined Priority Page / Schema Fix</td>
                    <td className="p-3.5 sm:p-4">Quick fix for one specific issue</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $495 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEObility Blueprint</td>
                    <td className="p-3.5 sm:p-4">Full Digital Audit &amp; 90-Day Roadmap</td>
                    <td className="p-3.5 sm:p-4">Unclear what is limiting search visibility</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">$995 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Foundation Implementation</td>
                    <td className="p-3.5 sm:p-4">Connected Multi-Page &amp; Entity Fixes</td>
                    <td className="p-3.5 sm:p-4">Connected improvements across core services</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $3,195 AUD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Inclusions Box */}
            <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-5 text-xs text-zinc-300 font-serif leading-relaxed space-y-3 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span>Every AEObility Engagement includes:</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300 font-serif">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>One agreed business priority, specified schema deployment, or page rewrite work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Validation checks, summary of completed changes, and handover notes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Typical delivery: 4–5 business days for Micro-Sprints. View <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">current service pricing and scope</Link>.</span>
                </li>
              </ul>
            </div>

            {/* Deliverables Ownership Statement */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">You own the agreed deliverables</strong>
                  <span>Use completed code and handover notes with your internal developer, or ask AEObility to implement the agreed changes.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Contrast Matrix Table: SEO vs AEO vs GEO */}
          <section id="comparison-matrix" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">The Contrast Matrix: SEO vs AEO vs GEO</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Understanding the differences in retrieval mechanisms, content structure, and target platforms.</p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-950/80 shadow-2xl">
              <table className="w-full text-left text-xs font-serif border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    <th className="p-4">Feature / Dimension</th>
                    <th className="p-4 text-zinc-300">Traditional SEO</th>
                    <th className="p-4 text-cyan-300">Answer Engine (AEO)</th>
                    <th className="p-4 text-purple-300">Generative Local (GEO)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Primary Goal</td>
                    <td className="p-4">Organic SERP Rankings &amp; Clicks</td>
                    <td className="p-4">Machine Readability &amp; Citations</td>
                    <td className="p-4">Local Map Pack &amp; Proximity Dominance</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Retrieval Mechanism</td>
                    <td className="p-4">Lexical Crawling &amp; Indexing</td>
                    <td className="p-4">Dense Vector RAG Retrieval</td>
                    <td className="p-4">Location Vector &amp; Proximity Nodes</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Content Structure</td>
                    <td className="p-4">Long-form Keyword Pages</td>
                    <td className="p-4">Atomic Self-Contained Answer Blocks</td>
                    <td className="p-4">Verified NAP &amp; Location Schema</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Primary Platforms</td>
                    <td className="p-4">Google Search, Bing Organic</td>
                    <td className="p-4">ChatGPT, Perplexity, Gemini, Copilot</td>
                    <td className="p-4">Google Maps, Apple Maps, Local AI</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Commercial Model</td>
                    <td className="p-4">Monthly Ongoing Retainers</td>
                    <td className="p-4 font-mono font-bold text-cyan-300">Flat-Rate Micro-Sprints ($495 AUD)</td>
                    <td className="p-4 font-mono font-bold text-purple-300">Local Sprints ($495 – $695 AUD)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Streamlined 12-Column Responsive Diagnostic Form Module */}
          <section id="comparison-diagnostic-form" className="border-t border-white/10 pt-16 scroll-mt-24">
            <div className="max-w-3xl mx-auto bg-zinc-950/90 border border-cyan-500/30 p-6 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full filter blur-3xl -z-10" />

              <div className="text-center space-y-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                  <Search className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Instant Strategy Scan</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Run a Free Strategy Scan</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-serif max-w-xl mx-auto leading-relaxed">
                  Enter your website URL to check whether your site is optimised for traditional SEO, Answer Engines (AEO), or Local GEO.
                </p>
              </div>

              {diagnosticSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Strategy Scan Submitted</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you. Our AEObility strategy team will audit your digital footprint and send your gap report within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDiagnosticSubmit} className="space-y-6">
                  {/* Strict 12-Column Grid Layout */}
                  <div className="grid grid-cols-12 gap-4">
                    {/* Website URL Field - Col Span 12 */}
                    <div className="col-span-12 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="comp-diag-url">
                        Website URL
                      </label>
                      <input
                        type="text"
                        id="comp-diag-url"
                        required
                        value={diagnosticData.websiteUrl}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, websiteUrl: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. mybusiness.com.au"
                      />
                      <p className="text-[11px] text-zinc-400 font-serif leading-tight">
                        We check website structure, structured-data setup, and content clarity for common visibility gaps.
                      </p>
                    </div>

                    {/* First Name Field - Col Span 12 on Mobile, Col Span 6 on Desktop */}
                    <div className="col-span-12 md:col-span-6 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="comp-diag-name">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="comp-diag-name"
                        required
                        value={diagnosticData.name}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Sarah"
                      />
                    </div>

                    {/* Primary Email Field - Col Span 12 on Mobile, Col Span 6 on Desktop */}
                    <div className="col-span-12 md:col-span-6 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="comp-diag-email">
                        Primary Email
                      </label>
                      <input
                        type="email"
                        id="comp-diag-email"
                        required
                        value={diagnosticData.email}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="sarah@mybusiness.com.au"
                      />
                    </div>

                    <div className="col-span-12">
                      <p className="text-[11px] text-zinc-400 font-serif leading-tight">
                        We use your details to deliver your strategy score and gap report. We will not add you to marketing communications without your consent.
                      </p>
                    </div>
                  </div>

                  {/* Submission Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                    >
                      <span>Run Free Strategy Scan</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* 5. Operational 3-Step Process Flow Pipeline Graphic */}
          <section id="comparison-process" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Simple 3-Step Operational Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How We Transition Your Strategy</h2>
              <p className="text-xs text-white/60 font-serif">Clear sequence from initial strategy scan to complete handover notes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">1</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Strategy Assessment</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run a free scan or confirm your current search priorities with our team.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-purple-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(168,85,247,0.2)]">2</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">4–5 Day Execution</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Deploy agreed schema markup, atomic page rewrites, or internal linking.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">3</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Validation &amp; Handover</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run validation checks and receive complete documentation &amp; ownership notes.</p>
              </div>
            </div>
          </section>

          {/* 6. Bottom Conversion CTA Block + Direct Contact Form */}
          <section id="comparison-contact-form" className="border-t border-white/10 pt-16 text-center space-y-8 scroll-mt-24">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Discuss AEO vs SEO Strategy</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Tell us about your search goals and platform priorities. We will confirm scope and pricing before you commit. <Link href="/contact" className="text-cyan-400 hover:underline font-medium">Request a quote</Link>.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-1">
                <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>You will speak with an AEObility specialist based in Perth. Complex scopes or strategic requirements may be reviewed by senior AEObility specialists.</span>
              </div>
            </div>

            {/* Inline Contact Form */}
            <div className="max-w-xl mx-auto bg-zinc-950/90 border border-white/10 p-6 sm:p-8 rounded-2xl text-left shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-2xl -z-10" />
              <div className="flex items-center justify-between gap-4 mb-1.5">
                <h3 className="text-xl font-bold text-white font-soehne-breit">Discuss Strategy Priorities</h3>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
                  AEO vs SEO Sprint
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-serif mb-6 leading-relaxed">
                Select the option you are considering, or choose &quot;Not sure yet — Help me decide&quot; if you would like help deciding.
              </p>

              {contactSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Strategy Enquiry Received</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you for reaching out. Our AEObility strategy team will review your details and get in touch within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="comp-name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="comp-name"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Vince Baker"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="comp-email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="comp-email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="vince@example.com.au"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="comp-service-type">
                      What would you like to discuss?
                    </label>
                    <select
                      id="comp-service-type"
                      value={contactData.serviceType}
                      onChange={(e) => setContactData({ ...contactData, serviceType: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-medium"
                    >
                      <option value="unsure">Not sure yet — Help me decide</option>
                      <option value="micro-sprint">AEO Micro-Sprint (From $495 AUD)</option>
                      <option value="blueprint">The AEObility Blueprint ($995 AUD)</option>
                      <option value="foundation">Foundation Implementation (From $3,195 AUD)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="comp-website">
                      Website URL (Optional)
                    </label>
                    <input
                      type="text"
                      id="comp-website"
                      value={contactData.website}
                      onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="mybusiness.com.au"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="comp-message">
                      What would you like help with?
                    </label>
                    <textarea
                      id="comp-message"
                      required
                      rows={3}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="For example: evaluating traditional SEO vs AEO, schema markup deployment, or page restructuring..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                  >
                    <span>Discuss Strategy Priorities</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center font-serif">
                    Clear scope. Fixed pricing. No lock-in contracts. Your privacy is protected.
                  </p>
                </form>
              )}
            </div>
          </section>

          {/* 7. FAQ Accordion Section (All 6 Answers Rendered in DOM) */}
          <section id="faq-comparison" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about comparing AEO and traditional SEO.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-zinc-950/80 border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-bold text-white">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyan-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-white/5 pt-3 font-serif transition-all duration-200 ${
                        isOpen ? 'block' : 'hidden'
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
