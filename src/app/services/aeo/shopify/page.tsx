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
  Sparkles,
  Cpu,
  AlertTriangle,
  Database,
  RefreshCw,
  Check
} from 'lucide-react';

export const SHOPIFY_AEO_INTERNAL_LINKS = [
  {
    targetSlug: "/services/aeo",
    anchorText: "canonical AEO Services Hub",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/aeo/costs-timing",
    anchorText: "AEO Costs & Timing",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-sprint",
    anchorText: "AEO Technical Sprints Package",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/contact",
    anchorText: "Book an AEO Content & Schema Audit",
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
      question: "How does AEO optimise Shopify collection pages?",
      answer: "By implementing CollectionPage and ItemList schema types that organise product sub-nodes into structured indexes, allowing AI scrapers to read catalogue relationships without relying on client-side script filtering."
    },
    {
      question: "What is included in a $495 Shopify Product Data Micro-Sprint?",
      answer: "One Micro-Sprint covers one agreed product, collection or structured-data priority. It includes the agreed implementation or rewrite work, validation checks, a summary of completed changes, and handover notes. Additional products or collections are scoped separately."
    },
    {
      question: "How long does a Shopify AEO sprint take to deliver?",
      answer: "Most Micro-Sprints are delivered within 4–5 business days after the scope, store access, and required product parameters are confirmed. More complex multi-collection requirements are scheduled across our 4-week Foundation track."
    },
    {
      question: "Can I credit my Blueprint fee towards Foundation Implementation?",
      answer: "Yes. If you complete the AEObility Blueprint and book Foundation Implementation within 60 days of handover, the full $995 Blueprint fee is applied directly to the Foundation work. The credit does not apply to standalone Micro-Sprints."
    },
    {
      question: "Do you require ongoing monthly retainers or app subscriptions?",
      answer: "No. Shopify Sprints are fixed-scope, productised engagements. No ongoing retainer or AEObility app subscription is required; all changes are made directly within your Liquid theme and schema graphs."
    },
    {
      question: "What access is required to begin a Shopify sprint?",
      answer: "Depending on the agreed scope, we require collaborator access to your Shopify theme preview, Google Merchant Center feed access, and read-access to Google Search Console for validation. We confirm minimal necessary permissions before work begins."
    },
    {
      question: "What makes Shopify store optimisation for AI search different from traditional SEO?",
      answer: "AI search engines (such as ChatGPT, Perplexity, Claude, and Gemini) extract structured product details, price specifications, availability, and clear collection answers directly. We format your Shopify Liquid schema, Google Merchant Center feed fields, and product hierarchy so AI assistants interpret your inventory with high confidence."
    }
  ];

  const engagementPaths = [
    {
      key: "product-data-micro-sprint",
      anchorId: "ss1micro-shopify",
      icon: <Rocket className="w-6 h-6 text-aeo-purple" />,
      title: "Product Data Micro-Sprint",
      code: "SS1 / SS2",
      price: "From $495 AUD",
      priceSub: "ex. GST",
      scope: "One priority collection or product schema",
      description: "Choose one focused priority for $495 AUD ex. GST: Product or Collection structured-data work, or a Single Collection Rewrite.",
      techNote: "For technical teams: Review Product, Offer, and CollectionPage schema alongside the relevant Shopify Liquid templates.",
      whenToChoose: "Choose this when you have one specific product line or collection page that needs structured data or copy improvements.",
      ctaLabel: "Discuss Product Data Sprint"
    },
    {
      key: "shopify-foundation",
      anchorId: "shopify-foundation",
      icon: <Boxes className="w-6 h-6 text-aeo-cyan" />,
      title: "Comprehensive Store Foundation",
      code: "MACRO TIER",
      price: "From $3,195 AUD",
      priceSub: "ex. GST",
      scope: "Connected improvements across priority products & collections",
      description: "Combine agreed improvements across product data, structured data, collection pages, internal linking, and selected product pages in one focused four-week engagement.",
      techNote: "For technical teams: Store-wide structured data alignment, collection internal linking, and key product page rewrites.",
      whenToChoose: "Choose this when your Shopify store has multiple connected product data, schema, or collection layout priorities.",
      ctaLabel: "Discuss Shopify Foundation"
    },
    {
      key: "ecommerce-blueprint",
      anchorId: "bpstrat-shopify",
      icon: <Compass className="w-6 h-6 text-aeo-cyan" />,
      title: "E-Commerce Blueprint",
      code: "BPSTRAT",
      price: "$995 AUD",
      priceSub: "ex. GST",
      scope: "Full store diagnostic & 90-day roadmap",
      description: "Audit your product data, structured data, store hierarchy, and collection-page intent. Receive a practical 90-day execution roadmap.",
      techNote: "For technical teams: Comprehensive review of Product, Offer, CollectionPage schema and Liquid template nesting.",
      whenToChoose: "Choose this when you are unsure what is limiting your store's product visibility across search engines and AI tools.",
      ctaLabel: "Discuss E-Commerce Blueprint"
    }
  ];

  const jsonLdGraph = getShopifyAeoSchemaGraph(faqs);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Unified JSON-LD Connected Graph with Full FAQPage Support */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      {/* Main Container with Defensive Bottom Padding */}
      <main className="flex-grow w-full py-12 pb-32 sm:pb-24">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. Hero Block with Clean Featured WebP Image Backdrop & Overlaid CTAs */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <ShoppingBag className="w-4 h-4 text-aeo-cyan" />
              <span>Shopify E-Commerce AEO &amp; AI Search</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Shopify AEO Services: <span className="text-gradient-aeo">AI-Ready Ingestion Architecture</span>
            </h1>

            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Make your Shopify products and collections reliably discoverable across AI search interfaces, AI Overviews, digital maps, and conversational shopping surfaces.
              </p>
              
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                This Shopify sub-node extends the canonical <Link href="/services/aeo" className="text-aeo-cyan font-semibold hover:underline">AEO Services Hub</Link> with platform-specific ingestion patterns for e-commerce.
              </p>

              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>Foundation Implementation from $3,195 AUD ex. GST</span>
              </div>
            </div>

            {/* Who This Is For Qualification Matrix */}
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl max-w-2xl mx-auto text-left space-y-3 shadow-lg">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-aeo-cyan flex items-center gap-1.5">
                <Check className="w-4 h-4 text-aeo-cyan" />
                <span>Who this is for:</span>
              </h3>
              <ul className="space-y-2 text-xs text-white/80 font-light">
                <li className="flex items-start gap-2">
                  <span className="text-aeo-cyan mt-0.5">&bull;</span>
                  <span>Shopify store owners managing 20+ active product lines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-aeo-cyan mt-0.5">&bull;</span>
                  <span>E-commerce brands running synchronised Google Merchant Center feeds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-aeo-cyan mt-0.5">&bull;</span>
                  <span>Retailers navigating variant-rich catalogues or high-frequency stock changes.</span>
                </li>
              </ul>
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
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix one product-data issue or build a stronger store foundation.</span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 font-serif block">Typical delivery: 4–5 business days from confirmed scope and access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => selectSprintForForm('product-data-micro-sprint')}
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

          {/* 2. Primary H2 Refactoring & Core Technical Foundations */}
          <section id="technical-blocks" className="border-t border-white/10 pt-16 space-y-10 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Shopify Ingestion Architecture &amp; Technical Foundations</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Practical engineering frameworks for product data, template rendering, and collection structure.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Liquid Restructuring */}
              <div id="liquid-restructuring" className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4 text-left scroll-mt-24 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                      <Code className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-bold">PILLAR 01</span>
                      <h3 className="text-base font-bold text-white font-soehne-breit">Restructuring Shopify Liquid for LLM Scraping</h3>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    AI search systems and web crawlers ingest products by reading your rendered HTML code. We refactor your Shopify Liquid templates to ensure that unstructured text elements, variant pricing arrays, and product availability criteria are presented in clean, well-scoped blocks. This structure removes code friction and allows crawlers to index your content accurately.
                  </p>
                </div>
                <p className="text-[11px] text-zinc-400 font-serif italic border-t border-white/5 pt-2">
                  For technical teams: This process customises robots.txt accessibility and manages your crawl budget for extensive product collections.
                </p>
              </div>

              {/* Card 2: Merchant Center Feed */}
              <div id="merchant-center-feed" className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4 text-left scroll-mt-24 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                      <Database className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-purple-400 font-bold">PILLAR 02</span>
                      <h3 className="text-base font-bold text-white font-soehne-breit">Google Merchant Center Feed Optimisation</h3>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    AI discovery engines frequently cross-reference live web scrapes with structured feed data to verify product listings. We optimise your Google Merchant Center feed fields (including id, title, link, image_link, availability, price, gtin, brand, and condition), ensuring your external feed signals align perfectly with your on-page data graph.
                  </p>
                </div>
                <p className="text-[11px] text-zinc-400 font-serif italic border-t border-white/5 pt-2">
                  For technical teams: Cross-validates Content API for Shopping payloads against server-rendered JSON-LD graphs.
                </p>
              </div>

              {/* Card 3: Server-Side Conversion Integrity */}
              <div id="server-side-conversion" className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4 text-left scroll-mt-24 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                      <ShieldCheck className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-bold">PILLAR 03</span>
                      <h3 className="text-base font-bold text-white font-soehne-breit">Server-Side Conversion Integrity</h3>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    To protect your store&apos;s factual footprint across automated platforms, we audit your server-side conversion parameters. We structure your thank-you page scripts, dataLayer integrations, and consent mode parameters to establish complete content boundaries.
                  </p>
                </div>
                <p className="text-[11px] text-zinc-400 font-serif italic border-t border-white/5 pt-2">
                  For technical teams: This secures data continuity between your internal checkout states and external ingestion points.
                </p>
              </div>
            </div>

            {/* Critical Conversion Warning Box */}
            <div className="p-5 bg-amber-500/10 border-l-4 border-amber-400 rounded-r-2xl text-xs text-amber-200/90 leading-relaxed shadow-lg">
              <p className="font-bold text-amber-300 uppercase tracking-wider font-mono mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Critical Conversion Warning</span>
              </p>
              <p>
                Without clean product schema and feed data, AI search engines and conversational shopping assistants may misread product variants, prices, or live stock availability, excluding your store from direct product recommendations.
              </p>
            </div>
          </section>

          {/* 3. "Choose Your Starting Point" Engagement Grid */}
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

            {/* Clean 3-Tier Comparison Matrix Table */}
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-md">
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
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Product Data Sprint</td>
                    <td className="p-3.5 sm:p-4">1 Collection or Product Schema</td>
                    <td className="p-3.5 sm:p-4">Quick fix for a single priority product line</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $495 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">E-Commerce Blueprint</td>
                    <td className="p-3.5 sm:p-4">Full Store Audit &amp; 90-Day Plan</td>
                    <td className="p-3.5 sm:p-4">Unclear what is blocking store AI visibility</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">$995 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Shopify Foundation</td>
                    <td className="p-3.5 sm:p-4">Multi-Page &amp; Collection Alignment</td>
                    <td className="p-3.5 sm:p-4">Connected improvements across entire store</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $3,195 AUD</td>
                  </tr>
                </tbody>
              </table>
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
                  <span>One agreed store priority, specified product schema, or collection rewrite work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Comprehensive validation checks, summary of completed changes, and handover notes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Typical delivery: 4–5 business days from confirmed scope and store access. View <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">current service pricing and scope</Link>.</span>
                </li>
              </ul>
            </div>

            {/* Downstream Commercial Ladder Bridge */}
            <div className="p-4 bg-white/[0.01] border border-white/10 rounded-xl text-xs text-zinc-300 font-light leading-relaxed flex items-center justify-between flex-wrap gap-3">
              <span>Evaluating implementation options and roadmap costs?</span>
              <div className="flex gap-2">
                <Link href="/services/aeo/costs-timing" className="text-aeo-cyan font-semibold hover:underline">
                  Review our comprehensive AEO Costs &amp; Timing framework &rarr;
                </Link>
              </div>
            </div>
          </section>

          {/* 4. Streamlined 12-Column Responsive Diagnostic Form Module */}
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
                  Enter your store URL to check key product-data, collection-page, and AI-search readiness signals.
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
                        We check product information, structured-data setup, and collection-page structure for common visibility gaps.
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

          {/* 5. Foundation Implementation Upgrade Block */}
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
                  Combine agreed improvements across product data, structured data, collection pages, internal linking, and selected product pages in one focused four-week engagement.
                </p>

                {/* Prominently Elevated Blueprint Credit Callout Box */}
                <div className="p-4.5 bg-black/70 border border-cyan-500/30 rounded-xl text-xs text-zinc-300 font-serif leading-relaxed space-y-1 shadow-md">
                  <strong className="text-cyan-300 font-mono text-sm block font-bold">Completed the Blueprint?</strong>
                  <p>
                    If you complete the AEObility Blueprint and book Foundation Implementation within 60 days of handover, the full $995 Blueprint fee is applied to the Foundation work. The credit does not apply to standalone Micro-Sprints and cannot be exchanged for cash. View <Link href="/services/aeo/costs-timing" className="text-cyan-400 hover:underline font-medium">AEO Costs &amp; Timing</Link>.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end justify-between space-y-4 shrink-0 w-full md:w-auto">
                <div className="text-left md:text-right">
                  <span className="text-2xl font-extrabold text-cyan-300 font-mono block">From $3,195 AUD ex. GST</span>
                  <span className="text-xs text-zinc-400 font-mono block mt-0.5">Typical schedule: delivered across four weeks</span>
                  <span className="text-[11px] text-zinc-400 font-serif block mt-0.5">Deliverables and implementation windows agreed before work begins.</span>
                </div>
                <button
                  type="button"
                  onClick={() => selectSprintForForm('shopify-foundation')}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Discuss Shopify Foundation</span>
                </button>
              </div>
            </div>
          </section>

          {/* 6. Customer-Facing "Atomic Answer Block" (Retail Schema Parsing) */}
          <section id="shopify-parsing-atomic-block" className="border-t border-white/10 pt-16 scroll-mt-24">
            <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-gradient-to-r from-aeo-cyan/10 via-white/[0.02] to-aeo-purple/10 border-l-4 border-aeo-cyan rounded-r-2xl shadow-xl space-y-3">
              <p className="text-xs font-mono font-bold uppercase text-aeo-cyan tracking-wider flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-aeo-cyan" />
                <span>Direct Answer &bull; E-Commerce Ingestion</span>
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-white font-soehne-breit">
                How do AI search systems parse product data on Shopify stores?
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                AI search crawlers read Shopify store data by moving systematically from collection overview pages down to individual product nodes. Eligible AI systems extract both visible text descriptions and embedded, machine-readable JSON-LD metadata, alongside synchronised Google Merchant Center feed signals. To resolve ambiguity between complex product variants, sizes, or fluctuating price options, engines rely on explicit identity attributes (such as Global Trade Item Numbers (GTIN), manufacturer brand data, and clear stock status entries). Well-scoped code blocks ensure these product facts stay unified during retrieval, improving your visibility when platforms compose conversational shopping recommendations.
              </p>
            </div>
          </section>

          {/* 7. FAQ Accordion Section (All Answers Rendered in DOM) */}
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

          {/* 8. Operational 3-Step Process Flow Pipeline Graphic */}
          <section id="process-flow" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Simple 3-Step Operational Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How Shopify AEO Sprints Work</h2>
              <p className="text-xs text-white/60 font-serif">Clear sequence from initial diagnostic scan to complete handover notes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">1</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Store Scan &amp; Access</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run a free scan or confirm your store scope and theme preview permissions.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-purple-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(168,85,247,0.2)]">2</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">4–5 Day Execution</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Deploy agreed product schema, Liquid markup, or collection page rewrites.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">3</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Validation &amp; Handover</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run validation checks and receive complete documentation &amp; ownership notes.</p>
              </div>
            </div>
          </section>

          {/* 9. Bottom Conversion CTA Block + Direct Contact Form */}
          <section id="shopify-contact-form" className="border-t border-white/10 pt-16 text-center space-y-8 scroll-mt-24">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Send Shopify Store Enquiry</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Tell us about your Shopify store and product data priorities. We will confirm the scope and price before you commit.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-1">
                <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>You will speak directly with an AEObility specialist based in Perth.</span>
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
                Select the option you are considering, or choose &quot;Not sure yet &mdash; Help me decide&quot; if you would like help deciding.
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
                      <option value="unsure">Not sure yet &mdash; Help me decide</option>
                      <option value="product-data-micro-sprint">Product Data Micro-Sprint (From $495 AUD)</option>
                      <option value="shopify-foundation">Shopify Foundation Implementation (From $3,195 AUD)</option>
                      <option value="ecommerce-blueprint">E-Commerce Blueprint ($995 AUD)</option>
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
                      placeholder="For example: product variants missing from structured data, a collection page that needs rewriting, or unclear category structure."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                  >
                    <span>Book an AEO Content &amp; Schema Audit</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center font-serif">
                    Clear scope. Fixed pricing. No lock-in contracts. Your privacy is protected.
                  </p>
                </form>
              )}
            </div>
          </section>

          {/* Bottom-Up Link to Root Hub */}
          <div className="pt-4 flex">
            <Link href="/services/aeo" className="text-xs font-medium text-white/40 hover:text-white transition-colors">
              &larr; Back to <strong className="text-white hover:underline">AEO Services Hub</strong>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
