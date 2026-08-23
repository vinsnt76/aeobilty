'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { trackGaEvent } from '@/lib/gtag';
import { getShopifyAeoSchemaGraph } from '@/lib/schema/shopifyAeo';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShoppingBag, 
  Tag, 
  Layers, 
  FileText, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Code, 
  Info, 
  HelpCircle, 
  ChevronDown, 
  Users,
  Boxes,
  FileCheck,
  Compass,
  Rocket,
  Search,
  Sparkles
} from 'lucide-react';

export const SHOPIFY_AEO_INTERNAL_LINKS = [
  {
    targetSlug: "/solutions",
    anchorText: "View current service pricing and scope",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-sprint",
    anchorText: "AEO Technical Sprints Package",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/contact",
    anchorText: "Request a quote",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function ShopifyAeoPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [diagnosticSubmitted, setDiagnosticSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const [diagnosticData, setDiagnosticData] = useState({
    storeUrl: '',
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
    const formElement = document.getElementById('shopify-contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiagnosticSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'shopify_diagnostic_form',
      lead_type: 'shopify_audit_request',
      value: 1,
    });
    setDiagnosticSubmitted(true);
    setTimeout(() => {
      setDiagnosticSubmitted(false);
      setDiagnosticData({ storeUrl: '', name: '', email: '' });
    }, 6000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'shopify_contact_form',
      lead_type: 'shopify_enquiry',
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
      question: "What makes Shopify store optimization for AI search different from traditional SEO?",
      answer: "AI search engines (like ChatGPT, Perplexity, and Gemini) extract structured product details, price specifications, availability, and clear collection answers directly. We format your Shopify Liquid schema and product hierarchy so digital assistants can interpret your product information more accurately."
    },
    {
      question: "What is included in a $495 Shopify Product Data Micro-Sprint?",
      answer: "The sprint covers one agreed product, collection or schema priority. It includes the specified implementation or rewrite work, validation checks, a summary of completed changes and handover notes. Additional products, collections or unrelated issues are scoped separately."
    },
    {
      question: "How long does a Shopify AEO sprint take to deliver?",
      answer: "Most Micro-Sprints are delivered within 4–5 business days after the scope, required access and store information have been confirmed. Larger or more complex requirements may need a separate scope."
    },
    {
      question: "Can I credit my Blueprint fee towards Foundation Implementation?",
      answer: "Yes. If you have completed the AEObility Blueprint, the full $995 fee can be credited towards Foundation Implementation booked within 60 days of handover. The credit applies to Foundation Implementation only, is applied to the agreed implementation fee and cannot be exchanged for cash."
    },
    {
      question: "Do you require ongoing monthly retainers or app subscriptions?",
      answer: "No. The work is scoped as a fixed-price engagement. AEObility does not require an ongoing retainer or a particular app subscription, although any third-party tools or app costs needed for your store remain your responsibility."
    },
    {
      question: "What access is required to begin a Shopify sprint?",
      answer: "Depending on the agreed scope, we may need your store URL, theme or theme-preview access, relevant product or collection information and access to any tools involved in validation. We will confirm the minimum access required before work begins."
    }
  ];

  const engagementPaths = [
    {
      key: "micro-sprint",
      anchorId: "ss1micro-shopify",
      icon: <Rocket className="w-6 h-6 text-aeo-purple" />,
      title: "Product Data Micro-Sprint",
      code: "SS1 / SS2",
      price: "From $495 AUD",
      priceSub: "ex. GST",
      scope: "One priority collection or product schema",
      description: "Choose one focused priority: Product or Collection schema implementation for $495, or a Single Collection Rewrite for $495.",
      techNote: "For technical teams: Review Product, Offer and CollectionPage schema alongside the relevant Shopify Liquid templates.",
      whenToChoose: "Choose this when you have one specific product line or collection page that needs structured data or copy improvements.",
      ctaLabel: "Discuss Product Data Sprint"
    },
    {
      key: "foundation",
      anchorId: "shopify-foundation",
      icon: <Boxes className="w-6 h-6 text-aeo-cyan" />,
      title: "Shopify Foundation Implementation",
      code: "MACRO TIER",
      price: "From $3,195 AUD",
      priceSub: "ex. GST",
      scope: "Connected improvements across priority products & collections",
      description: "Combine agreed improvements across product data, structured data, collection pages, internal linking and selected product pages in one focused four-week engagement.",
      techNote: "For technical teams: Store-wide structured data alignment, collection internal linking, and key product page rewrites.",
      whenToChoose: "Choose this when your Shopify store has multiple connected product data, schema or collection layout priorities.",
      ctaLabel: "Discuss Shopify Foundation"
    },
    {
      key: "blueprint",
      anchorId: "bpstrat-shopify",
      icon: <Compass className="w-6 h-6 text-aeo-cyan" />,
      title: "E-Commerce Blueprint",
      code: "BPSTRAT",
      price: "$995 AUD",
      priceSub: "ex. GST",
      scope: "Full store diagnostic & 90-day roadmap",
      description: "Audit your product data, structured data, store hierarchy and collection-page intent. Receive a practical 90-day execution roadmap.",
      techNote: "For technical teams: Comprehensive review of Product, Offer, CollectionPage schema and Liquid template nesting.",
      whenToChoose: "Choose this when you are unsure what is limiting your store's product visibility across search engines and AI tools.",
      ctaLabel: "Discuss E-Commerce Blueprint"
    }
  ];

  const jsonLdGraph = getShopifyAeoSchemaGraph(faqs);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Unified JSON-LD Connected Graph with Passage @id Anchors */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. Hero Block with Clean Featured WebP Image Backdrop & Overlaid CTAs */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <ShoppingBag className="w-4 h-4 text-aeo-cyan" />
              <span>Shopify E-Commerce AEO &amp; AI Search</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Shopify AI Search Marketing &amp; <span className="text-gradient-aeo">Product Visibility</span>
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Improve how search engines, digital assistants and AI-assisted search read your Shopify products, collections and store information. Clear scope, flat rates.
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
                src="/images/services/shopify-aeo-and-ai-search-marketing_AEObility.webp"
                alt="AEObility Shopify e-commerce audit interface mapping product graph data, Liquid schema structures, and collection page intent hierarchies."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-3.5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix one product-data issue or build a stronger store foundation</span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 font-serif block">Typical delivery: 4–5 business days from confirmed scope and access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => selectSprintForForm('micro-sprint')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Discuss your Shopify store</span>
                  </button>
                  <a
                    href="#shopify-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-white font-semibold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Run a free store scan</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Not sure whether you need product schema clean-up or a broader store audit? We will help you choose the right starting point.
            </p>
          </section>

          {/* 2. "Choose Your Starting Point" Engagement Grid (Micro-Sprints, Foundation, Blueprint) */}
          <section id="engagement-paths" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Choose Your Starting Point</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Select a targeted micro-sprint, a comprehensive store foundation, or a diagnostic audit.</p>
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

            {/* Scope & Inclusion Box */}
            <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-5 text-xs text-zinc-300 font-serif leading-relaxed space-y-3 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span>Every Shopify Sprint includes:</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300 font-serif">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>One agreed store priority, specified product schema or collection rewrite work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Comprehensive validation checks, summary of completed changes, and handover notes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Typical delivery: 4–5 business days from confirmed scope and store access. Additional collections or products scoped separately. View <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">current service pricing and scope</Link>.</span>
                </li>
              </ul>
            </div>

            {/* Deliverables Ownership Statement */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">You own the agreed deliverables</strong>
                  <span>Use the completed work and handover notes with your internal developer, or ask AEObility to implement the agreed changes.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Streamlined 12-Column Responsive Diagnostic Form Module */}
          <section id="shopify-diagnostic-form" className="border-t border-white/10 pt-16 scroll-mt-24">
            <div className="max-w-3xl mx-auto bg-zinc-950/90 border border-cyan-500/30 p-6 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full filter blur-3xl -z-10" />

              <div className="text-center space-y-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                  <Search className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Instant Shopify Store Scan</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Run a Free Shopify Visibility Scan</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-serif max-w-xl mx-auto leading-relaxed">
                  Enter your store URL to check key Shopify product-data, collection-structure and AI-search readiness signals.
                </p>
              </div>

              {diagnosticSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Store Scan Diagnostic Submitted</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you. Our AEObility e-commerce team will audit your store&apos;s product graph data and send your gap report within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDiagnosticSubmit} className="space-y-6">
                  {/* Strict 12-Column Grid Layout */}
                  <div className="grid grid-cols-12 gap-4">
                    {/* Store URL Field - Col Span 12 */}
                    <div className="col-span-12 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="diag-store-url">
                        Shopify Store URL
                      </label>
                      <input
                        type="text"
                        id="diag-store-url"
                        required
                        value={diagnosticData.storeUrl}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, storeUrl: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. mystore.com.au or mystore.myshopify.com"
                      />
                      <p className="text-[11px] text-zinc-400 font-serif leading-tight">
                        Checks your Shopify Liquid feed nesting, product graph data, and collection page structural formatting.
                      </p>
                    </div>

                    {/* First Name Field - Col Span 12 on Mobile, Col Span 6 on Desktop */}
                    <div className="col-span-12 md:col-span-6 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="diag-name">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="diag-name"
                        required
                        value={diagnosticData.name}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Sarah"
                      />
                    </div>

                    {/* Primary Email Field - Col Span 12 on Mobile, Col Span 6 on Desktop */}
                    <div className="col-span-12 md:col-span-6 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="diag-email">
                        Primary Email
                      </label>
                      <input
                        type="email"
                        id="diag-email"
                        required
                        value={diagnosticData.email}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="sarah@mystore.com.au"
                      />
                    </div>

                    <div className="col-span-12">
                      <p className="text-[11px] text-zinc-400 font-serif leading-tight">
                        We use your details to deliver your store visibility score and technical gap report. We will not add you to marketing communications without your consent.
                      </p>
                    </div>
                  </div>

                  {/* Submission Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                    >
                      <span>Run Free Store Scan</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* 4. Foundation Implementation Upgrade Block */}
          <section id="shopify-foundation" className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-purple-500/30 rounded-2xl p-8 space-y-6 shadow-[0_0_30px_rgba(168,85,247,0.15)] scroll-mt-24">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                  <Boxes className="w-4 h-4 text-purple-400" />
                  <span>Connected improvements across priority products &amp; collections</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-soehne-breit">
                  Shopify Foundation Implementation
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif">
                  Combine agreed improvements across product data, structured data, collection pages, internal linking and selected product pages in one focused four-week engagement.
                </p>

                {/* Prominently Elevated Blueprint Credit Callout Box */}
                <div className="p-4.5 bg-black/70 border border-cyan-500/30 rounded-xl text-xs text-zinc-300 font-serif leading-relaxed space-y-1 shadow-md">
                  <strong className="text-cyan-300 font-mono text-sm block font-bold">Completed the Blueprint?</strong>
                  <p>
                    If you have completed the AEObility Blueprint and book Foundation Implementation within 60 days of handover, we will apply the full $995 Blueprint fee to the Foundation work. The credit applies to Foundation Implementation only, is applied to the agreed implementation fee and cannot be exchanged for cash. View <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">current service pricing and scope</Link>.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end justify-between space-y-4 shrink-0 w-full md:w-auto">
                <div className="text-left md:text-right">
                  <span className="text-2xl font-extrabold text-cyan-300 font-mono block">From $3,195 AUD ex. GST</span>
                  <span className="text-xs text-zinc-400 font-mono block mt-0.5">Typically delivered across four weeks</span>
                  <span className="text-[11px] text-zinc-400 font-serif block mt-0.5">Final scope depends on the number of pages, locations and implementation requirements. We confirm the deliverables and price before work begins.</span>
                </div>
                <button
                  type="button"
                  onClick={() => selectSprintForForm('foundation')}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Discuss Shopify Foundation</span>
                </button>
              </div>
            </div>
          </section>

          {/* 5. Technical Building Blocks Reassurance (S1 & S2 Focus) */}
          <section id="technical-blocks" className="border-t border-white/10 pt-16 space-y-10 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Core Technical Foundations (S1 &amp; S2)</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Practical engineering areas for product data and collection page optimization.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div id="s1-product-schema" className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4 text-left scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                    <Tag className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold">FOUNDATION S1</span>
                    <h3 className="text-base font-bold text-white font-soehne-breit">Product Data &amp; Schema Integration</h3>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Structure product variants, pricing, availability and GTIN details so search systems and AI-assisted tools can interpret your product information more accurately. Helps reduce ambiguity and missing information when search systems read your product pages.
                </p>
                <p className="text-[11px] text-zinc-400 font-serif italic border-t border-white/5 pt-2">
                  For technical teams: Validate Product, Offer, and AggregateRating markup against the visible product content and Shopify Liquid templates.
                </p>
                <div className="pt-1">
                  <Link href="/solutions/aeo-sprint" className="text-xs font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1">
                    <span>AEO Technical Sprints Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div id="s2-collection-optimisation" className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4 text-left scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                    <Layers className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-purple-400 font-bold">FOUNDATION S2</span>
                    <h3 className="text-base font-bold text-white font-soehne-breit">Collection Page &amp; Search Intent Optimisation</h3>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Rewrite and structure collection pages so shoppers can quickly understand what the collection contains, who it is for and how related products fit together.
                </p>
                <p className="text-[11px] text-zinc-400 font-serif italic border-t border-white/5 pt-2">
                  For technical teams: Refactor collection headings, category descriptions and internal links around customer search intent.
                </p>
                <div className="pt-1">
                  <Link href="/services/aeo/procedures" className="text-xs font-semibold text-purple-400 hover:underline inline-flex items-center gap-1">
                    <span>Learn more about AEO Procedures</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 6. FAQ Accordion Section (All 6 Answers Rendered in DOM) */}
          <section id="faq-shopify" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about AEObility Shopify AEO sprints.</p>
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

          {/* 7. Bottom Conversion CTA Block + Direct Contact Form */}
          <section id="shopify-contact-form" className="border-t border-white/10 pt-16 text-center space-y-8 scroll-mt-24">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Send Shopify Store Enquiry</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Tell us about your Shopify store and product data priorities. We will confirm the scope and price before you commit. <Link href="/contact" className="text-cyan-400 hover:underline font-medium">Request a quote</Link>.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-1">
                <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>You will speak with an AEObility specialist based in Perth. Complex scopes or strategic requirements may be reviewed by senior AEObility specialists.</span>
              </div>
            </div>

            {/* Inline Shopify Contact Form */}
            <div className="max-w-xl mx-auto bg-zinc-950/90 border border-white/10 p-6 sm:p-8 rounded-2xl text-left shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-2xl -z-10" />
              <div className="flex items-center justify-between gap-4 mb-1.5">
                <h3 className="text-xl font-bold text-white font-soehne-breit">Discuss Your Shopify Store</h3>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
                  Shopify AEO Sprint
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-serif mb-6 leading-relaxed">
                Select the option you are considering, or choose &quot;Not sure yet — Help me decide&quot; if you would like help deciding.
              </p>

              {contactSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Shopify Enquiry Received</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you for reaching out. Our AEObility e-commerce team will review your details and get in touch within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="shop-name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="shop-name"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Vince Baker"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="shop-email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="shop-email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="vince@example.com.au"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="shop-service-type">
                      What would you like to discuss?
                    </label>
                    <select
                      id="shop-service-type"
                      value={contactData.serviceType}
                      onChange={(e) => setContactData({ ...contactData, serviceType: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-medium"
                    >
                      <option value="unsure">Not sure yet — Help me decide</option>
                      <option value="micro-sprint">Product Data Micro-Sprint (From $495 AUD)</option>
                      <option value="foundation">Shopify Foundation Implementation (From $3,195 AUD)</option>
                      <option value="blueprint">E-Commerce Blueprint ($995 AUD)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="shop-website">
                      Shopify Store URL (Optional)
                    </label>
                    <input
                      type="text"
                      id="shop-website"
                      value={contactData.website}
                      onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="mystore.com.au"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="shop-message">
                      What would you like help with?
                    </label>
                    <textarea
                      id="shop-message"
                      required
                      rows={3}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="For example: product variants missing from schema, a collection page that needs rewriting, or unclear product-category structure."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                  >
                    <span>Discuss Your Shopify Store</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center font-serif">
                    Clear scope. Fixed pricing. No lock-in contracts. Your privacy is protected.
                  </p>
                </form>
              )}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
