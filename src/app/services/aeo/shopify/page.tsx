'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { PRICING_CONFIG } from '@/lib/brandFacts';
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
    anchorText: "canonical product database and uniform pricing framework",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-sprint",
    anchorText: "AEO Technical Sprints Package",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/contact",
    anchorText: "Quote Request",
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
    serviceType: 'blueprint',
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
      setContactData({ name: '', email: '', website: '', serviceType: 'blueprint', message: '' });
    }, 6000);
  };

  const faqs = [
    {
      question: "What makes Shopify store optimization for AI search different from traditional SEO?",
      answer: "AI search engines (like ChatGPT, Perplexity, and Gemini) extract structured product details, price specifications, availability, and clear collection answers directly. We format your Shopify Liquid schema and product hierarchy so digital assistants can cite and recommend your products."
    },
    {
      question: "What is included in a $495 Shopify Product Data Micro-Sprint?",
      answer: "Each Micro-Sprint addresses one specific Shopify collection or product schema priority. Includes structured data markup (Product, Offer, AggregateRating) or a single collection page rewrite with handover documentation."
    },
    {
      question: "How long does a Shopify AEO sprint take to deliver?",
      answer: "Most single Micro-Sprints are delivered within 4–5 business days after scope and store access have been confirmed. Comprehensive Store Foundation Implementation is delivered across a four-week schedule."
    },
    {
      question: "Can I credit my Blueprint fee towards Foundation Implementation?",
      answer: "Yes. If you complete the AEObility Blueprint and book Foundation Implementation within 60 days of handover, we apply the full $995 Blueprint fee to the Foundation work. The credit applies to Foundation Implementation only and cannot be exchanged for cash."
    },
    {
      question: "Do you require ongoing monthly retainers or app subscriptions?",
      answer: "No. All Shopify Micro-Sprints and Foundation engagements are fixed-scope projects with clear deliverables, transparent flat rates, and no lock-in contracts."
    },
    {
      question: "What access is required to begin a Shopify sprint?",
      answer: "We typically require collaborator access to your Shopify admin (specifically Theme/Liquid template access or app metadata permissions) or your staging theme. All requirements are confirmed before work begins."
    }
  ];

  const engagementPaths = [
    {
      key: "blueprint",
      anchorId: "ecommerce-blueprint",
      icon: <Compass className="w-6 h-6 text-aeo-cyan" />,
      title: "E-Commerce Blueprint",
      code: "BPSTRAT",
      price: "$995 AUD",
      priceSub: "ex. GST",
      scope: "Full store diagnostic & 90-day roadmap",
      description: "Audit your product feed schema, website hierarchy, and collection intent matching. Receive a practical 90-day execution roadmap.",
      techNote: "For technical teams: Comprehensive review of Product, Offer, CollectionPage schema and Liquid template nesting.",
      whenToChoose: "Choose this when you are unsure what is limiting your store's product visibility across search engines and AI tools.",
      ctaLabel: "Discuss E-Commerce Blueprint"
    },
    {
      key: "micro-sprint",
      anchorId: "product-data-sprint",
      icon: <Rocket className="w-6 h-6 text-aeo-purple" />,
      title: "Product Data Micro-Sprint",
      code: "SS1 / SS2",
      price: "From $495 AUD",
      priceSub: "ex. GST",
      scope: "One priority collection or product schema",
      description: "Target one specific collection page or product schema mismatch. Includes Product/Collection Schema ($495) or Single Collection Rewrite ($495).",
      techNote: "For technical teams: Adds structured schema data or refactors collection page text into clear answer blocks.",
      whenToChoose: "Choose this when you have one specific product line or collection page that needs structured data or copy improvements.",
      ctaLabel: "Discuss Micro-Sprint"
    },
    {
      key: "foundation",
      anchorId: "store-foundation",
      icon: <Boxes className="w-6 h-6 text-aeo-cyan" />,
      title: "Comprehensive Store Foundation",
      code: "MACRO TIER",
      price: "From $3,195 AUD",
      priceSub: "ex. GST",
      scope: "Multi-collection & store-wide fixes",
      description: "Combine your highest-priority technical data, internal contextual linking, and content fixes into one focused four-week engagement.",
      techNote: "For technical teams: Store-wide structured data alignment, collection internal linking, and key product page rewrites.",
      whenToChoose: "Choose this when your Shopify store has multiple connected product data, schema or collection layout priorities.",
      ctaLabel: "Discuss Store Foundation"
    }
  ];

  const jsonLdGraph = getShopifyAeoSchemaGraph(faqs);

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
                Improve how search engines, digital assistants and modern AI platforms crawl, understand and extract your Shopify store&apos;s product data and service collection structures. Clear scope, flat rates.
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
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix Product Schema or Build Store Depth</span>
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

          {/* 2. "Choose Your Starting Point" Engagement Grid */}
          <section id="engagement-paths" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Choose Your Starting Point</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Select a diagnostic audit, a targeted micro-sprint, or a comprehensive store foundation.</p>
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
                  <span>Typical delivery: 4–5 business days from confirmed scope and store access. Additional collections or products scoped separately. View <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">canonical product database and uniform pricing framework</Link>.</span>
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
                  Enter your store URL to check your Liquid schema data, collection page structures, and product visibility signals across AI platforms.
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
                        We use your details strictly to deliver your custom store visibility score and technical gap report.
                      </p>
                    </div>
                  </div>

                  {/* Submission Action Button & In-Line Risk Reversal Banner */}
                  <div className="pt-2 space-y-4">
                    <button
                      type="submit"
                      className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                    >
                      <span>Run Free Store Scan</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Risk Reversal Banner */}
                    <div className="p-3 bg-black/50 border border-white/10 rounded-xl text-center text-xs text-zinc-300 font-serif leading-relaxed">
                      Clear scope. Fixed pricing. No lock-in contracts. Every diagnostic evaluation maps directly to practical next steps.
                    </div>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* 4. Technical Building Blocks Reassurance (S1 & S2 Focus) */}
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
                  Structure product variants, pricing, availability, and GTIN details so AI assistants cite your store accurately. Ensures search engines extract clean product details without missing data.
                </p>
                <p className="text-[11px] text-zinc-400 font-serif italic border-t border-white/5 pt-2">
                  For technical teams: Validates Product, Offer, and AggregateRating JSON-LD schema against visible Liquid store templates.
                </p>
                <div className="pt-1">
                  <Link href="/solutions/aeo-sprint" className="text-xs font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1">
                    <span>AEO Technical Sprints Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div id="s2-collection-structure" className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4 text-left scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                    <Layers className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-purple-400 font-bold">FOUNDATION S2</span>
                    <h3 className="text-base font-bold text-white font-soehne-breit">Collection Page &amp; Search Intent Optimization</h3>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Rewrite and format collection pages into clear answer blocks that match high-intent customer search queries. Connects main collection hubs with sub-category pages cleanly.
                </p>
                <p className="text-[11px] text-zinc-400 font-serif italic border-t border-white/5 pt-2">
                  For technical teams: Refactors collection page headers and category descriptions into structured answer units.
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

          {/* 5. FAQ Accordion Section (All 6 Answers Rendered in DOM) */}
          <section id="faq" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
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

          {/* 6. Bottom Conversion CTA Block + Direct Contact Form */}
          <section id="shopify-contact-form" className="border-t border-white/10 pt-16 text-center space-y-8 scroll-mt-24">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Send Shopify Store Enquiry</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Tell us about your Shopify store and product data priorities. We will confirm the scope and price before you commit. Request a <Link href="/contact" className="text-cyan-400 hover:underline font-medium">Quote Request</Link>.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-1">
                <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>You will speak with an AEObility specialist based in Perth. Vince Baker, AEObility’s founder, reviews more complex scopes and strategic enquiries.</span>
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
                      <option value="blueprint">E-Commerce Blueprint ($995 AUD)</option>
                      <option value="micro-sprint">Product Data Micro-Sprint (From $495 AUD)</option>
                      <option value="foundation">Comprehensive Store Foundation (From $3,195 AUD)</option>
                      <option value="unsure">Not sure yet — Help me decide</option>
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
                      Product Data or Collection Issues to Address
                    </label>
                    <textarea
                      id="shop-message"
                      required
                      rows={3}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="Tell us about your product catalog or collection page priorities..."
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
