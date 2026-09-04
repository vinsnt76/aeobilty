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
  Search, 
  Scale, 
  ChevronDown,
  Compass,
  Calendar,
  Check,
  Rocket,
  Boxes,
  FileCheck,
  Code,
  Layers,
  Sparkles,
  ShieldCheck,
  FileText,
  MapPin,
  ShoppingBag,
  Briefcase,
  HelpCircle
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
  const [formMode, setFormMode] = useState<'scan' | 'enquiry'>('scan');
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
    setFormMode('enquiry');
    const formElement = document.getElementById('unified-conversion-hub');
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
      badge: "Quick Fix",
      badgeColor: "bg-purple-950/60 border-purple-500/30 text-purple-300",
      isFeatured: false,
      title: "AEO Technical Micro-Sprint",
      price: "From $495 AUD",
      priceSub: "ex. GST",
      scope: "1 Priority Page or Schema Gap",
      whatYouGet: "One agreed high-impact fix deployed directly to your priority page with complete handover notes.",
      whatChanges: "Your page is restructured with concise answer blocks and validated JSON-LD schema markup.",
      whyItMatters: "Eliminates the exact technical hurdle preventing AI engines from parsing and quoting that specific offer.",
      ctaLabel: "Book a Micro-Sprint"
    },
    {
      key: "foundation",
      anchorId: "comparison-foundation",
      icon: <Boxes className="w-6 h-6 text-aeo-cyan" />,
      badge: "Most Popular",
      badgeColor: "bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(0,229,255,0.3)]",
      isFeatured: true,
      title: "Foundation Implementation",
      price: "From $3,195 AUD",
      priceSub: "ex. GST",
      scope: "Connected Multi-Page & Entity Build (4-Week Sprint)",
      whatYouGet: "Full-scale overhaul across primary commercial pages, internal link lattice, and citation alignment.",
      whatChanges: "Core service pages receive synchronised schema graphs, atomic answer units, and verifiable evidence links.",
      whyItMatters: "Establishes your business as an authoritative, connected knowledge entity across all generative search engines.",
      ctaLabel: "Start Foundation Build"
    },
    {
      key: "blueprint",
      anchorId: "comparison-blueprint",
      icon: <Compass className="w-6 h-6 text-aeo-cyan" />,
      badge: "Diagnostic Audit",
      badgeColor: "bg-zinc-800/80 border-zinc-600 text-zinc-300",
      isFeatured: false,
      title: "The AEObility Blueprint",
      price: "$995 AUD",
      priceSub: "ex. GST",
      scope: "Complete Digital Audit & 90-Day Roadmap",
      whatYouGet: "Diagnostic audit analysing visible content clarity, entity salience, and AI retrieval gaps with a 90-day roadmap.",
      whatChanges: "Diagnostic phase with zero code changes: gives you the blueprint of exact fixes before spending build budget.",
      whyItMatters: "100% credited toward Foundation Implementation within 60 days. Eliminates guesswork on search gaps.",
      ctaLabel: "Get The $995 Blueprint"
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

          {/* 1. Hero Block: SEO Foundation + AEO Layer */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <Scale className="w-4 h-4 text-aeo-cyan" />
              <span>Search Foundation + Answer Engine Layer</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              SEO Gets You Indexed. <span className="text-gradient-aeo">AEO Gets You Cited in AI Answers.</span>
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Traditional SEO builds your crawlability and organic ranking. Answer Engine Optimisation (AEO) layers machine clarity on top so AI search engines can extract, verify, and cite your business. <strong className="text-cyan-300 font-semibold">Get found in organic search. Get chosen in AI answers.</strong> Clear scope. Flat rates. No lock-in contracts.
              </h2>
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>The AEObility Blueprint $995 AUD ex. GST</span>
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
                    href="#unified-conversion-hub"
                    onClick={() => setFormMode('scan')}
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

          {/* 2. Intro Narrative: Why SEO and AEO Work Best Together */}
          <section id="complementary-narrative" className="border-t border-white/10 pt-16 space-y-6 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">The Two Layers of Modern Search</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif">
                You do not have to choose between traditional SEO and Answer Engine Optimisation. They solve two different parts of the same customer journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm font-sans">
                  <Search className="w-4 h-4" />
                  <span>Layer 1: The SEO Foundation (Discoverability)</span>
                </div>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Ensures your website is fast, technically sound, crawlable, and authoritative in organic search results. Without solid SEO foundations, search crawlers and AI models cannot reliably find or index your pages.
                </p>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-cyan-500/30 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-purple-300 font-bold text-sm font-sans">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Layer 2: The AEO Extension (Comprehension &amp; Citation)</span>
                </div>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Restructures your visible content and schema markup into self-contained answer blocks and explicit entity relationships. This makes it effortless for generative search models to quote your pricing, verify your credentials, and recommend your services.
                </p>
              </div>
            </div>
          </section>

          {/* 3. "What This Means for Your Website" (Applied Page Changes) */}
          <section id="what-it-means" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">What This Means for Your Website</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif">Here is how layering AEO on top of strong SEO transforms your actual pages.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">Service Pages</h3>
                  <div className="space-y-2 text-xs text-zinc-300 font-serif">
                    <p><strong className="text-zinc-200 block">SEO Foundation:</strong> Targets high-intent keywords, meta tags, and backlinks.</p>
                    <p><strong className="text-cyan-300 block">What AEO Adds:</strong> Atomic Q&amp;A units, explicit deliverables, and connected Service schema.</p>
                    <p><strong className="text-zinc-200 block">Visible Live Change:</strong> Clear pricing tables, exact inclusions, and self-contained answer summaries that AI engines quote directly.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit">
                    <ShoppingBag className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">Product &amp; E-Commerce</h3>
                  <div className="space-y-2 text-xs text-zinc-300 font-serif">
                    <p><strong className="text-zinc-200 block">SEO Foundation:</strong> Optimises product titles, taxonomies, descriptions, and crawl depth.</p>
                    <p><strong className="text-purple-300 block">What AEO Adds:</strong> Verified specifications, use-case matching, and nested Offer schema.</p>
                    <p><strong className="text-zinc-200 block">Visible Live Change:</strong> Answers for comparative queries (e.g. &quot;Which model fits my space?&quot;), eliminating AI hallucination.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">Local &amp; Location Pages</h3>
                  <div className="space-y-2 text-xs text-zinc-300 font-serif">
                    <p><strong className="text-zinc-200 block">SEO Foundation:</strong> Manages Google Business Profile, NAP consistency, and local directory listings.</p>
                    <p><strong className="text-cyan-300 block">What AEO Adds:</strong> Verifiable local proximity nodes, regional service radius, and local proof signals.</p>
                    <p><strong className="text-zinc-200 block">Visible Live Change:</strong> AI assistants accurately cite your exact suburbs and service areas in multi-turn conversational searches.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Applied Contrast Matrix Table: SEO vs AEO vs GEO */}
          <section id="comparison-matrix" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">The Applied Contrast Matrix</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif">A practical breakdown of responsibilities across your search architecture.</p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-950/80 shadow-2xl">
              <table className="w-full text-left text-xs font-serif border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    <th className="p-4">Practical Dimension</th>
                    <th className="p-4 text-zinc-300">The SEO Foundation</th>
                    <th className="p-4 text-cyan-300">The AEO Layer</th>
                    <th className="p-4 text-purple-300">The Local GEO Extension</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Primary Job</td>
                    <td className="p-4">Earn rankings and clicks in organic search engines.</td>
                    <td className="p-4">Get extracted, summarised, and cited in AI answer engines.</td>
                    <td className="p-4">Dominate local map packs and voice/proximity queries.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">How It Works</td>
                    <td className="p-4">Search crawlers index page content and evaluate link authority.</td>
                    <td className="p-4">Retrieval systems match user questions to atomic, factual answer blocks on your site.</td>
                    <td className="p-4">AI assistants match customer location with verified geographic service areas.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Visible Site Changes</td>
                    <td className="p-4">Keyword-optimised page copy, clean URL structure, and fast load times.</td>
                    <td className="p-4">Standalone answer boxes, bulleted scope lists, and explicit pricing tables.</td>
                    <td className="p-4">Verified suburb service lists, local review highlights, and operating details.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Code &amp; Schema Work</td>
                    <td className="p-4">Canonical tags, XML sitemaps, and robots.txt rules.</td>
                    <td className="p-4 font-mono font-bold text-cyan-300">Nested JSON-LD graphs linking services, credentials, and evidence.</td>
                    <td className="p-4 font-mono font-bold text-purple-300">LocalBusiness schema with precise geolocation and verified address nodes.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Target Platforms</td>
                    <td className="p-4">Google Search, Bing Organic</td>
                    <td className="p-4">ChatGPT, Perplexity, Google AI Overviews, Copilot</td>
                    <td className="p-4">Google Maps, Apple Maps, Local Search Packs</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Commercial Model</td>
                    <td className="p-4">Often sold as ongoing monthly retainers</td>
                    <td className="p-4 font-mono font-bold text-cyan-300">Fixed-Scope Micro-Sprints ($495 AUD)</td>
                    <td className="p-4 font-mono font-bold text-purple-300">Fixed-Scope Local Sprints ($495 to $695 AUD)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Practical Decision Guide: Which to Prioritise */}
          <section id="decision-guide" className="border-t border-white/10 pt-16 space-y-6 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Practical Decision Guide</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif">How to determine whether your business should focus on SEO foundations or layer AEO immediately.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-sm font-bold text-white font-sans flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  <span>Prioritise SEO Foundation First If:</span>
                </h3>
                <ul className="space-y-2 text-xs text-zinc-300 font-serif">
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-500">•</span>
                    <span>You have a brand-new website that search engines have not yet indexed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-500">•</span>
                    <span>Your site suffers from technical crawling errors, broken pages, or severe speed issues.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-500">•</span>
                    <span>You do not currently rank for your core brand name or essential commercial terms.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-cyan-500/30 rounded-2xl space-y-3">
                <h3 className="text-sm font-bold text-cyan-300 font-sans flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Layer AEO on Top Now If:</span>
                </h3>
                <ul className="space-y-2 text-xs text-zinc-300 font-serif">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Your site is indexed, but AI tools (ChatGPT, Perplexity, AI Overviews) fail to cite you or misstate your services.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Potential clients ask conversational questions before buying, and competitors are getting recommended instead.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>You want fixed-scope, flat-rate improvements without getting locked into expensive monthly agency retainers.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. Pricing & Engagement Tiers */}
          <section id="engagement-paths" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Choose Your Starting Point</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif">Select a targeted micro-sprint, a comprehensive foundation implementation, or a diagnostic audit.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {engagementPaths.map((path, idx) => (
                <div 
                  id={path.anchorId} 
                  key={idx} 
                  className={`bg-zinc-950/90 border rounded-2xl flex flex-col justify-between space-y-5 transition-all duration-300 group scroll-mt-24 relative p-6 ${
                    path.isFeatured 
                      ? 'border-cyan-400/80 shadow-[0_0_25px_rgba(0,229,255,0.15)] ring-1 ring-cyan-400/40 md:-translate-y-1' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {path.isFeatured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold font-mono text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md">
                      Recommended
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-black border border-white/10 rounded-xl shrink-0">
                        {path.icon}
                      </div>
                      <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded border ${path.badgeColor}`}>
                        {path.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white font-soehne-breit leading-snug">{path.title}</h3>
                      <div className="text-sm font-bold text-cyan-300 font-mono mt-1">
                        {path.price} <span className="text-[10px] text-zinc-400 font-normal">{path.priceSub}</span>
                      </div>
                      <span className="text-[11px] text-zinc-300 font-mono block mt-1">Scope: {path.scope}</span>
                    </div>

                    {/* Problem / Solution Breakdown */}
                    <div className="space-y-2 text-xs text-zinc-300 font-serif pt-1">
                      <div className="p-2.5 bg-black/50 border border-white/5 rounded-lg space-y-1">
                        <strong className="text-white block text-[11px]">What do I get?</strong>
                        <p className="text-zinc-300 text-[11px] leading-relaxed">{path.whatYouGet}</p>
                      </div>
                      <div className="p-2.5 bg-black/50 border border-white/5 rounded-lg space-y-1">
                        <strong className="text-white block text-[11px]">What changes on my site?</strong>
                        <p className="text-zinc-300 text-[11px] leading-relaxed">{path.whatChanges}</p>
                      </div>
                      <div className="p-2.5 bg-cyan-950/20 border border-cyan-500/20 rounded-lg space-y-1">
                        <strong className="text-cyan-300 block text-[11px]">Why it matters:</strong>
                        <p className="text-zinc-300 text-[11px] leading-relaxed">{path.whyItMatters}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => selectSprintForForm(path.key)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 cursor-pointer ${
                        path.isFeatured
                          ? 'bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black hover:opacity-95 shadow-[0_0_15px_rgba(0,205,216,0.3)]'
                          : 'bg-zinc-900 border border-white/15 hover:border-cyan-400 text-white hover:bg-zinc-800'
                      }`}
                    >
                      <span>{path.ctaLabel}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${path.isFeatured ? 'text-black' : 'text-cyan-400'}`} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges Positioned Near Pricing (Law of Proximity) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-center">
              <div className="p-3 bg-zinc-950/80 border border-white/10 rounded-xl text-xs text-zinc-300 font-mono flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Fixed-Scope Sprints</span>
              </div>
              <div className="p-3 bg-zinc-950/80 border border-white/10 rounded-xl text-xs text-zinc-300 font-mono flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>No Ongoing Lock-In Contracts</span>
              </div>
              <div className="p-3 bg-zinc-950/80 border border-white/10 rounded-xl text-xs text-zinc-300 font-mono flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>You Own All Deliverables &amp; Code</span>
              </div>
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
          </section>

          {/* 7. Proof & Evidence Layer (Machine-Readable Positioning) */}
          <section id="proof-layer" className="border-t border-white/10 pt-16 space-y-6 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How AI Engines Verify Your Business</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif">AI search models do not rely on keyword repetition. They require verifiable machine-readable relationships.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-5 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">1. Entity</div>
                <h3 className="text-sm font-bold text-white">What You Are</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Explicit schema naming your organisation, services, and locations without ambiguity.
                </p>
              </div>

              <div className="p-5 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-2">
                <div className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">2. Relationship</div>
                <h3 className="text-sm font-bold text-white">How It Connects</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Interlinked data connecting team credentials, operating areas, and service offerings together.
                </p>
              </div>

              <div className="p-5 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">3. Evidence</div>
                <h3 className="text-sm font-bold text-white">Where It Is Proven</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Case studies, verified reviews, transparent pricing tables, and Australian business registration details.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Operational 3-Step Process Flow Pipeline */}
          <section id="comparison-process" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Simple 3-Step Operational Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How We Transition Your Strategy</h2>
              <p className="text-xs text-zinc-300 font-serif">Clear sequence from initial strategy scan to complete handover notes.</p>
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

          {/* 9. Unified High-Conversion Hub */}
          <section id="unified-conversion-hub" className="border-t border-white/10 pt-16 scroll-mt-24">
            <div className="max-w-2xl mx-auto bg-zinc-950/90 border border-cyan-500/30 p-6 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full filter blur-3xl -z-10" />

              <div className="text-center space-y-3 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                  {formMode === 'scan' ? 'Run a Free Strategy Scan' : 'Discuss Strategy Priorities'}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif max-w-xl mx-auto leading-relaxed">
                  {formMode === 'scan'
                    ? 'Enter your website details to discover whether traditional SEO, Answer Engines (AEO), or Local GEO will unlock the highest visibility.'
                    : 'Tell us about your search goals and platform priorities. We will confirm scope and flat pricing before you commit.'}
                </p>

                {/* Mode Selector Tabs */}
                <div className="inline-flex p-1 bg-black/80 border border-white/10 rounded-xl mt-3">
                  <button
                    type="button"
                    onClick={() => setFormMode('scan')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      formMode === 'scan'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Free Strategy Scan</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormMode('enquiry')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      formMode === 'enquiry'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-400/40 shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Discuss Priorities</span>
                  </button>
                </div>
              </div>

              {/* TAB 1: FREE STRATEGY SCAN FORM */}
              {formMode === 'scan' && (
                diagnosticSubmitted ? (
                  <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                    <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                    <h4 className="font-bold text-white text-base">Strategy Scan Submitted</h4>
                    <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                      Thank you. Our AEObility strategy team will audit your digital footprint and send your gap report within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleDiagnosticSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-200" htmlFor="comp-diag-url">
                        Website URL <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="comp-diag-url"
                        required
                        value={diagnosticData.websiteUrl}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, websiteUrl: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. mybusiness.com.au"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-zinc-200" htmlFor="comp-diag-name">
                          Full Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="comp-diag-name"
                          required
                          value={diagnosticData.name}
                          onChange={(e) => setDiagnosticData({ ...diagnosticData, name: e.target.value })}
                          className="w-full bg-black/70 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="e.g. Sarah Jenkins"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-zinc-200" htmlFor="comp-diag-email">
                          Work Email <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="comp-diag-email"
                          required
                          value={diagnosticData.email}
                          onChange={(e) => setDiagnosticData({ ...diagnosticData, email: e.target.value })}
                          className="w-full bg-black/70 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="e.g. sarah@mybusiness.com.au"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                      >
                        <span>Run Free Strategy Scan</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                    <p className="text-[11px] text-zinc-400 text-center font-serif">
                      We check website structure, structured-data setup, and content clarity for common visibility gaps.
                    </p>
                  </form>
                )
              )}

              {/* TAB 2: CONSULTATION & STRATEGY PRIORITIES ENQUIRY FORM */}
              {formMode === 'enquiry' && (
                contactSubmitted ? (
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
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-zinc-200" htmlFor="comp-name">
                          Full Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="comp-name"
                          required
                          value={contactData.name}
                          onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                          className="w-full bg-black/70 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="e.g. Sarah Jenkins"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-zinc-200" htmlFor="comp-email">
                          Email Address <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="comp-email"
                          required
                          value={contactData.email}
                          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                          className="w-full bg-black/70 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="e.g. sarah@mybusiness.com.au"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-200" htmlFor="comp-service-type">
                        What would you like to discuss?
                      </label>
                      <select
                        id="comp-service-type"
                        value={contactData.serviceType}
                        onChange={(e) => setContactData({ ...contactData, serviceType: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-medium"
                      >
                        <option value="unsure">Not sure yet - Help me decide</option>
                        <option value="micro-sprint">AEO Micro-Sprint (From $495 AUD)</option>
                        <option value="blueprint">The AEObility Blueprint ($995 AUD)</option>
                        <option value="foundation">Foundation Implementation (From $3,195 AUD)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-200" htmlFor="comp-website">
                        Website URL (Optional)
                      </label>
                      <input
                        type="text"
                        id="comp-website"
                        value={contactData.website}
                        onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. mybusiness.com.au"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-200" htmlFor="comp-message">
                        What would you like help with? <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        id="comp-message"
                        required
                        rows={3}
                        value={contactData.message}
                        onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                        className="w-full bg-black/70 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                        placeholder="For example: evaluating traditional SEO vs AEO, schema markup deployment, or page restructuring..."
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                      >
                        <span>Discuss Strategy Priorities</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                    <p className="text-[11px] text-zinc-400 text-center font-serif">
                      Clear scope. Fixed pricing. No lock-in contracts. Your privacy is protected.
                    </p>
                  </form>
                )
              )}
            </div>
          </section>

          {/* 10. FAQ Accordion Section */}
          <section id="faq-comparison" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-zinc-300 font-serif">Everything you need to know about comparing AEO and traditional SEO.</p>
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
