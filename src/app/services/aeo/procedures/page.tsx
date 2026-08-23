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
import { getAeoProceduresSchemaGraph } from '@/lib/schema/aeoProcedures';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Layers,
  Cpu,
  CheckCircle2,
  PhoneCall,
  FileText,
  ChevronDown,
  Network,
  Database,
  Users,
  Calendar,
  Search,
  Rocket,
  Boxes,
  FileCheck,
  Code,
  Compass
} from 'lucide-react';

export const AEO_PROCEDURES_INTERNAL_LINKS = [
  {
    targetSlug: "/services/aeo",
    anchorText: "Canonical AEO Hub",
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

export default function AEOProceduresPage() {
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
    const formElement = document.getElementById('procedure-contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiagnosticSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'aeo_procedures_diagnostic_form',
      lead_type: 'aeo_procedure_scan',
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
      form_id: 'aeo_procedures_contact_form',
      lead_type: 'aeo_procedures_enquiry',
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
      question: "What are the most effective AEO procedures for Australian businesses?",
      answer: "The most effective procedures include structuring content with question-based H2/H3 headings, writing 40–60 word self-contained atomic answer summaries, deploying nested JSON-LD schema (Organization, Service, Offer, LocalBusiness), and building contextual internal links."
    },
    {
      question: "How does RAG chunking affect website content?",
      answer: "Retrieval-Augmented Generation (RAG) models split long pages into text chunks for embedding matching. If a paragraph relies on vague context from three sections above, the RAG chunk loses meaning. Writing self-contained answer units prevents context dilution."
    },
    {
      question: "Can I deploy AEO procedures on any CMS platform?",
      answer: "Yes. AEObility AEO procedures can be deployed across custom Next.js/React codebases, WordPress, Shopify, Webflow, or Squarespace. We provide clear code snippets and technical handover notes."
    },
    {
      question: "What is included in a $495 AEO Micro-Sprint?",
      answer: "A $495 Micro-Sprint targets one agreed technical priority: Schema Markup Deployment, Single Page Atomic Rewrite, or Category Answer Unit. It includes validation checks, a summary of completed changes, and handover notes."
    },
    {
      question: "What is the difference between an AEO Micro-Sprint and the Blueprint?",
      answer: "A Micro-Sprint ($495 AUD ex. GST) executes one specific technical fix within 4–5 business days. The AEObility Blueprint ($995 AUD ex. GST) provides a comprehensive digital presence audit and prioritised 90-day execution roadmap, which is 100% credited if you proceed with Foundation Implementation."
    },
    {
      question: "How long do AEO procedures take to implement?",
      answer: "Targeted Micro-Sprints are delivered within 4–5 business days after scope and access confirmation. Foundation Implementation is delivered across a structured four-week schedule."
    }
  ];

  const strategies = [
    {
      id: "strategy1",
      number: "01",
      title: "Question-Based Semantic Headings",
      description: "Structure content using H2 and H3 headings phrased as natural-language questions (e.g. 'What is included in an AEO sprint?'). This creates explicit conceptual boundaries that prevent context dilution during RAG scraper ingestion."
    },
    {
      id: "strategy2",
      number: "02",
      title: "Self-Contained Atomic Answer Blocks",
      description: "Place concise 40–60 word answer summaries directly beneath section headings. Provide direct facts, numbers, and scope criteria so search systems can extract clean passages."
    },
    {
      id: "strategy3",
      number: "03",
      title: "Nested JSON-LD Schema Graphs",
      description: "Inject explicit machine-readable context connecting Organization, LocalBusiness, Service, and Offer nodes to establish entity authority."
    },
    {
      id: "strategy4",
      number: "04",
      title: "Contextual Internal Linking Lattice",
      description: "Link core service pages to specific technical sub-nodes using descriptive, keyword-rich anchor text to pass semantic authority downward."
    },
    {
      id: "strategy5",
      number: "05",
      title: "Corroborated External Citation Alignment",
      description: "Standardise business NAP data, directory citations, and brand facts to build machine trust across search engines and AI platforms."
    },
    {
      id: "strategy6",
      number: "06",
      title: "Passage-Level `@id` Anchor Mapping",
      description: "Assign explicit element IDs (`#ss1micro`, `#bpstrat`, `#faq`) matching JSON-LD schema `@id` parameters to facilitate direct passage extraction."
    }
  ];

  const engagementPaths = [
    {
      key: "micro-sprint",
      anchorId: "procedure-micro-sprints",
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
      anchorId: "procedure-foundation",
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
      anchorId: "procedure-blueprint",
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

  const jsonLdGraph = getAeoProceduresSchemaGraph(faqs);

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
              <Sparkles className="w-4 h-4 text-aeo-cyan" />
              <span>AEO Strategies &amp; Execution Procedures</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Best AEO Strategies: <span className="text-gradient-aeo">Make Your Business AI-Readable</span>
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Actionable procedures for structured data, atomic answer blocks, entity authority, and RAG retrieval optimisation. Clear scope. Flat rates.
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
                src="/images/services/aeo-procedures-and-strategies_AEObility.webp"
                alt="AEObility step-by-step AEO procedure guide illustrating atomic answer block structuring, nested JSON-LD schema, and RAG retrieval optimisation."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-3.5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Deploy actionable AEO procedures on your website today.</span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 font-serif block">Typical delivery: 4–5 business days from confirmed scope and access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => selectSprintForForm('micro-sprint')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Discuss AEO Procedures</span>
                  </button>
                  <a
                    href="#procedure-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-white font-semibold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Run a free AEO scan</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Learn how AEO differs from legacy SEO on our <Link href="/services/aeo/comparison" className="text-cyan-400 hover:underline font-medium">AEO vs SEO Comparison page</Link> or review <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">focused micro-sprints</Link>.
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
            <div id="procedure-comparison" className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-md scroll-mt-24">
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

          {/* 3. 6 Core AEO Strategies */}
          <section id="procedure-strategies" className="border-t border-white/10 pt-16 space-y-10 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">6 Core AEO Strategies for Machine Understanding</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Actionable engineering procedures designed for modern search engines and AI platforms.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategies.map((strategy) => (
                <div id={strategy.id} key={strategy.id} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 text-left hover:border-cyan-500/40 transition scroll-mt-24">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                      STRATEGY {strategy.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">{strategy.title}</h3>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Streamlined 12-Column Responsive Diagnostic Form Module */}
          <section id="procedure-diagnostic-form" className="border-t border-white/10 pt-16 scroll-mt-24">
            <div className="max-w-3xl mx-auto bg-zinc-950/90 border border-cyan-500/30 p-6 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full filter blur-3xl -z-10" />

              <div className="text-center space-y-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                  <Search className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Instant AEO Readiness Scan</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Run a Free AEO Readiness Scan</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-serif max-w-xl mx-auto leading-relaxed">
                  Enter your website URL to check structured data, entity clarity, and AI search readiness signals.
                </p>
              </div>

              {diagnosticSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">AEO Readiness Scan Submitted</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you. Our AEObility team will audit your website structure and send your gap report within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDiagnosticSubmit} className="space-y-6">
                  {/* Strict 12-Column Grid Layout */}
                  <div className="grid grid-cols-12 gap-4">
                    {/* Website URL Field - Col Span 12 */}
                    <div className="col-span-12 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="proc-diag-url">
                        Website URL
                      </label>
                      <input
                        type="text"
                        id="proc-diag-url"
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
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="proc-diag-name">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="proc-diag-name"
                        required
                        value={diagnosticData.name}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Sarah"
                      />
                    </div>

                    {/* Primary Email Field - Col Span 12 on Mobile, Col Span 6 on Desktop */}
                    <div className="col-span-12 md:col-span-6 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="proc-diag-email">
                        Primary Email
                      </label>
                      <input
                        type="email"
                        id="proc-diag-email"
                        required
                        value={diagnosticData.email}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="sarah@mybusiness.com.au"
                      />
                    </div>

                    <div className="col-span-12">
                      <p className="text-[11px] text-zinc-400 font-serif leading-tight">
                        We use your details to deliver your AEO readiness score and gap report. We will not add you to marketing communications without your consent.
                      </p>
                    </div>
                  </div>

                  {/* Submission Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                    >
                      <span>Run Free AEO Readiness Scan</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* 5. Operational 3-Step Process Flow Pipeline Graphic */}
          <section id="procedure-process" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Simple 3-Step Operational Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How AEO Procedures Are Deployed</h2>
              <p className="text-xs text-white/60 font-serif">Clear sequence from initial scan to complete handover notes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">1</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Scan &amp; Access</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run a free scan or confirm your site priorities with our strategy team.</p>
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
          <section id="procedure-contact-form" className="border-t border-white/10 pt-16 text-center space-y-8 scroll-mt-24">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Discuss AEO Procedures</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Tell us about your website goals and technical priorities. We will confirm scope and pricing before you commit. <Link href="/contact" className="text-cyan-400 hover:underline font-medium">Request a quote</Link>.
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
                <h3 className="text-xl font-bold text-white font-soehne-breit">Discuss AEO Procedures</h3>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
                  AEO Sprint
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-serif mb-6 leading-relaxed">
                Select the option you are considering, or choose &quot;Not sure yet — Help me decide&quot; if you would like help deciding.
              </p>

              {contactSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Enquiry Received</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you for reaching out. Our AEObility strategy team will review your details and get in touch within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="proc-name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="proc-name"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Vince Baker"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="proc-email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="proc-email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="vince@example.com.au"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="proc-service-type">
                      What would you like to discuss?
                    </label>
                    <select
                      id="proc-service-type"
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
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="proc-website">
                      Website URL (Optional)
                    </label>
                    <input
                      type="text"
                      id="proc-website"
                      value={contactData.website}
                      onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="mybusiness.com.au"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="proc-message">
                      What would you like help with?
                    </label>
                    <textarea
                      id="proc-message"
                      required
                      rows={3}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="For example: schema markup deployment, restructuring key service pages, or atomic answer block creation..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                  >
                    <span>Discuss AEO Procedures</span>
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
          <section id="faq-procedures" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about AEObility AEO procedures.</p>
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
