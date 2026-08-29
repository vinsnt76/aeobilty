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
import { getGeoMarketingSchemaGraph } from '@/lib/schema/geoMarketing';
import { 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Globe, 
  Link as LinkIcon, 
  FileText, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Code, 
  Info, 
  HelpCircle, 
  ChevronDown, 
  Users,
  Cpu,
  Boxes,
  FileCheck,
  Building2,
  Navigation,
  DollarSign,
  Target,
  Layers,
  Sparkles,
  Compass,
  Activity
} from 'lucide-react';

export const GEO_MARKETING_INTERNAL_LINKS = [
  {
    targetSlug: "/solutions",
    anchorText: "current service pricing and scope",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-blueprint",
    anchorText: "website visibility audit and 90-day strategic roadmap",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-sprint",
    anchorText: "AEO Technical Sprints",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function GeoMarketingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    website: '',
    serviceType: 'ss4micro1',
    message: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const selectSprintForForm = (typeKey: string) => {
    setContactData(prev => ({ ...prev, serviceType: typeKey }));
    const formElement = document.getElementById('geo-contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'geo_marketing_contact_form',
      lead_type: 'geo_enquiry',
      service_selected: contactData.serviceType,
      value: 1,
    });
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactData({ name: '', email: '', website: '', serviceType: 'ss4micro1', message: '' });
    }, 6000);
  };

  const faqs = [
    {
      question: "What is included in a Local Visibility Micro-Sprint?",
      answer: "Each Micro-Sprint includes one agreed local priority, the specified implementation or clean-up work, validation checks, a summary of completed changes and handover notes. Additional locations or pages are scoped separately."
    },
    {
      question: "How long does a Citation Clean-Up sprint take?",
      answer: "Most Local Visibility Micro-Sprints are delivered within 4–5 business days after the scope, required business information and access have been confirmed. Additional locations or complex listing issues may require a separate scope."
    },
    {
      question: "Why is a Brand Facts Page important for local search?",
      answer: "It gives customers and search systems one clear place to verify your business identity, services, locations and contact information. It also helps reduce confusion when important facts are spread across multiple pages or platforms."
    },
    {
      question: "Can I credit my Blueprint fee towards Foundation Implementation?",
      answer: "Yes. If you have completed the AEObility Blueprint, the full $995 fee can be credited towards Foundation Implementation booked within 60 days of handover. The credit does not apply to standalone Micro-Sprints and cannot be exchanged for cash."
    },
    {
      question: "Do you require long-term contracts or monthly retainers?",
      answer: "No. Local Visibility Sprints are fixed-scope engagements. Any further work or ongoing support is discussed separately."
    },
    {
      question: "What information is needed to begin a local sprint?",
      answer: "We may need your website address, business name, address, phone number, service areas, priority listings and access to relevant platforms. We will confirm exactly what is required before work begins."
    }
  ];

  const localSprints = [
    {
      key: "ss4micro1",
      anchorId: "ss4micro1",
      icon: <Building2 className="w-6 h-6 text-aeo-cyan" />,
      title: "Business Details & Citation Clean-Up",
      code: "SS4MICRO1",
      price: "$495 AUD",
      priceSub: "ex. GST",
      scope: "Priority business profiles & directories",
      description: "Review and correct your core business details across priority directories, maps and local platforms.",
      techNote: "For technical teams: We check for inconsistent listings, duplicates and conflicting business information.",
      whenToChoose: "Choose this when your business name, address or phone details vary across online listings, maps and directories.",
      ctaLabel: "Discuss Citation Clean-Up"
    },
    {
      key: "ss3micro1",
      anchorId: "ss3micro1",
      icon: <LinkIcon className="w-6 h-6 text-aeo-purple" />,
      title: "Local Internal-Linking Sprint",
      code: "SS3MICRO1",
      price: "$695 AUD",
      priceSub: "ex. GST",
      scope: "Priority location hubs & service pages",
      description: "Connect important location, service and supporting pages so visitors and search engines can navigate your local offering more easily.",
      techNote: "For technical teams: Connects your main location page with relevant service and regional pages so the relationship between them is clearer.",
      whenToChoose: "Choose this when your location or service pages exist but are difficult to discover from the rest of your website.",
      ctaLabel: "Discuss Local Internal Linking"
    },
    {
      key: "ss4micro3",
      anchorId: "ss4micro3",
      icon: <FileText className="w-6 h-6 text-aeo-cyan" />,
      title: "Brand Facts Page Creation",
      code: "SS4MICRO3",
      price: "$495 AUD",
      priceSub: "ex. GST",
      scope: "One central site reference page",
      description: "Create one clear reference page covering your business, services, locations, contact details and key trust information.",
      techNote: "For technical teams: We can add appropriate structured data where the visible page content supports it.",
      whenToChoose: "Choose this when your business information is scattered, inconsistent or difficult for customers to verify online.",
      ctaLabel: "Discuss a Brand Facts Page"
    }
  ];

  const jsonLdGraph = getGeoMarketingSchemaGraph(faqs);

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
              <MapPin className="w-4 h-4 text-aeo-cyan" />
              <span>Local Proximity & Map Visibility</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Local Visibility & <span className="text-gradient-aeo">GEO Sprints</span>
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Make it easier for customers to find the right business, service and location information across Search, Maps and AI-assisted search. Fix one local visibility issue or address several connected problems without committing to a long-term retainer.
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
                src="/images/services/geo-marketing-services_AEObility.webp"
                alt="Local visibility diagram showing business information, location pages and directory signals."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-3.5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix a Single Priority or Build a Foundation</span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 font-serif block">Typical delivery: 4–5 business days from confirmed scope and access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => selectSprintForForm('ss4micro1')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Discuss your local visibility</span>
                  </button>
                  <Link
                    href="/diagnostic"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-white font-semibold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Run a free visibility scan</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              For trade services and clinic locations, view our dedicated <Link href="/services/aeo/local-business" className="text-cyan-400 hover:underline font-medium">Local Business Visibility</Link> guide. Not sure whether you need citation clean-up or a broader regional sprint? We will help you choose the right starting point.
            </p>
          </section>

          {/* 2. Recommended Decision Strip */}
          <section id="decision-strip" className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 space-y-3 scroll-mt-24">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white font-soehne-breit">Which option fits your priority?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-serif pt-1">
              <div className="p-4 bg-black/60 border border-white/10 rounded-xl space-y-1">
                <span className="text-cyan-300 font-bold block font-mono">Know the issue?</span>
                <span className="text-zinc-300 block">Choose a Micro-Sprint from $495 ex. GST.</span>
              </div>
              <div className="p-4 bg-black/60 border border-white/10 rounded-xl space-y-1">
                <span className="text-purple-300 font-bold block font-mono">Need several connected fixes?</span>
                <span className="text-zinc-300 block">
                  Discuss <Link href="/solutions" className="text-purple-400 hover:underline font-medium">Foundation Implementation from $3,195 ex. GST</Link>.
                </span>
              </div>
              <div className="p-4 bg-black/60 border border-white/10 rounded-xl space-y-1">
                <span className="text-cyan-300 font-bold block font-mono">Unsure what limits local visibility?</span>
                <span className="text-zinc-300 block">
                  <Link href="/solutions/aeo-blueprint" className="text-cyan-400 hover:underline font-medium">Start with a comprehensive website visibility audit and 90-day strategic roadmap</Link> ($995 AUD).
                </span>
              </div>
            </div>
          </section>

          {/* 3. Local Sprints Catalogue Grid (3 Cards with Explicit Passage @id Anchors) */}
          <section id="local-sprints" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Local Visibility Sprint Catalogue</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Standardise local business information, correct citation inconsistencies, and connect regional pages.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {localSprints.map((sprint, idx) => (
                <div id={sprint.anchorId} key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col justify-between space-y-5 hover:border-cyan-500/40 transition-all duration-300 group scroll-mt-24">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-black border border-white/10 rounded-xl shrink-0">
                        {sprint.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                        {sprint.code}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white font-soehne-breit leading-snug">{sprint.title}</h3>
                      <div className="text-sm font-bold text-cyan-300 font-mono mt-1">
                        {sprint.price} <span className="text-[10px] text-zinc-400 font-normal">{sprint.priceSub}</span>
                      </div>
                      <span className="text-[11px] text-zinc-400 font-mono block mt-1">Scope: {sprint.scope}</span>
                    </div>

                    <p className="text-xs text-zinc-300 font-serif leading-relaxed pt-1">
                      {sprint.description}
                    </p>

                    <div className="bg-black/50 border border-white/5 p-2.5 rounded-lg text-[11px] text-zinc-400 font-serif leading-relaxed">
                      <strong className="text-white block mb-0.5">When to choose:</strong>
                      <span>{sprint.whenToChoose}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/5">
                    <p className="text-[10px] text-zinc-500 font-mono leading-tight">{sprint.techNote}</p>
                    <button
                      type="button"
                      onClick={() => selectSprintForForm(sprint.key)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/15 hover:border-cyan-400 text-white font-bold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer"
                    >
                      <span>{sprint.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro-Sprint Scope & Exclusion Box (Bulleted for High Mobile Scannability) */}
            <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-5 text-xs text-zinc-300 font-serif leading-relaxed space-y-3 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span>Every Local Visibility Sprint includes:</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300 font-serif">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>One agreed local priority, specified implementation or clean-up work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Comprehensive validation checks, summary of completed changes, and handover notes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Typical delivery: 4–5 business days from confirmed scope and access. Additional locations or pages scoped separately. View <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">current service pricing and scope</Link>.</span>
                </li>
              </ul>
            </div>

            {/* Deliverables & Handover Ownership Statement (Positioned after Scope Box) */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">You own the agreed deliverables</strong>
                  <span>Use the completed work and handover notes with your internal team or developer, or ask AEObility to implement the agreed changes.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Foundation Implementation Upgrade Block */}
          <section id="foundation-implementation" className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-purple-500/30 rounded-2xl p-8 space-y-6 shadow-[0_0_30px_rgba(168,85,247,0.15)] scroll-mt-24">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                  <Boxes className="w-4 h-4 text-purple-400" />
                  <span>Multi-Page Implementation Tier</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-soehne-breit">
                  Foundation Implementation
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif">
                  For businesses that need several connected improvements. May include internal linking, structured data, priority-page improvements or local business information, depending on the agreed scope. Final scope depends on the number of pages, locations and implementation requirements. We confirm the deliverables and price before work begins.
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
                  <span className="text-xs text-zinc-400 font-mono block mt-0.5">Typically delivered across a four-week period</span>
                </div>
                <button
                  type="button"
                  onClick={() => selectSprintForForm('foundation')}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Discuss Foundation Implementation</span>
                </button>
              </div>
            </div>
          </section>

          {/* 5. High-Density Declarative Answer Block: Transparent Investment */}
          <section id="geo-cost" className="bg-zinc-950/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl scroll-mt-24">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
                <span>Fixed Investment Model</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
                Transparent Investment: How Much Does GEO Marketing Cost?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed">
                Our geographic engine strategies operate on a strict, fixed-scope sprint framework. By replacing unpredictable agency retainers with transparent deliverables, you receive machine-readable optimisation without long-term contractual exposure.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-xs font-serif">
              <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-cyan-300 font-sans font-bold text-sm">Citation Clean-Up Sprint</strong>
                  <span className="font-mono text-cyan-400 font-bold">$495 AUD</span>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  A rapid operational micro-sprint resolving scattered location signals across mapping platforms. This sprint fixes inconsistent name, address, and telephone profiles to secure a clear baseline footprint.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/90 border border-cyan-500/30 space-y-2 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <div className="flex items-center justify-between">
                  <strong className="text-white font-sans font-bold text-sm">Internal-Linking Lattice</strong>
                  <span className="font-mono text-cyan-300 font-bold">$695 AUD</span>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Deploys a rigid linking architecture connecting high-precision technical articles straight to local conversion pages, passing earned informational authority directly into active commercial routes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-purple-300 font-sans font-bold text-sm">Local Foundation Tier</strong>
                  <span className="font-mono text-purple-400 font-bold">From $3,195 AUD</span>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  A comprehensive four-week technical implementation building deeply nested Schema.org code, exact coordinate boundaries, and token-optimised local text blocks across your core site infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Single Transparent Engagement Standards Banner */}
          <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>No Jargon, Just Clarity</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
              No jargon, just clarity.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto font-serif leading-relaxed">
              Every engagement has agreed deliverables, a clear delivery window, validation checks and a practical handover. No ongoing retainer is required.
            </p>
          </section>

          {/* 7. Core Technical Foundations */}
          <section id="building-blocks" className="border-t border-white/10 pt-16 space-y-10 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Core Technical Foundations</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">These are the practical areas we work on, selected to suit your business priorities.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div id="s3-linking" className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4 text-left scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                    <Navigation className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-purple-400 font-bold">FOUNDATION S3</span>
                    <h3 className="text-base font-bold text-white font-soehne-breit">Internal Linking & Content Connections</h3>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Connect related service and location pages so customers can move through your website more easily and search engines can understand how the pages relate.
                </p>
                <p className="text-[11px] text-zinc-400 font-serif italic border-t border-white/5 pt-2">
                  For technical teams: Connects your main location page with relevant service and regional pages so the relationship between them is clearer.
                </p>
                <div className="pt-1">
                  <Link href="/solutions/aeo-sprint" className="text-xs font-semibold text-purple-400 hover:underline inline-flex items-center gap-1">
                    <span>Explore AEO Technical &amp; Schema Sprints</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div id="s4-brand-facts" className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4 text-left scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold">FOUNDATION S4</span>
                    <h3 className="text-base font-bold text-white font-soehne-breit">Brand Facts & Business Profile</h3>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Create a clear, structured reference page that confirms your business details, core services and service areas in one verified place.
                </p>
                <p className="text-[11px] text-zinc-400 font-serif italic border-t border-white/5 pt-2">
                  For technical teams: Structured reference copy and optional schema deployment to reduce entity ambiguity across search systems.
                </p>
                <div className="pt-1">
                  <Link href="/brand-facts" className="text-xs font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1">
                    <span>View Canonical Brand Facts</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 8. High-Density Declarative Answer Block: What Is GEO? */}
          <section id="geo-definition" className="bg-zinc-950/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl scroll-mt-24">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                <Compass className="w-3.5 h-3.5 text-purple-400" />
                <span>Machine Discovery Framework</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
                Machine Discovery: What Is Generative Engine Optimisation (GEO) for Local Business?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed">
                Traditional search optimisation relies on capturing standard keyword patterns, but modern local engines extract machine-readable structural facts. Generative Engine Optimisation (GEO) is the technical framework used to ensure AI discovery engines, voice assistants, and location-aware models can verify your operational coordinates without guessing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-black/70 border border-white/10 text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed space-y-2">
              <p>
                When a potential client queries an AI system for an open service provider nearby, the underlying engine queries a localised vector index. It scans for explicit entity boundaries, clean coordinate data, and structured service arrays.
              </p>
              <p className="text-zinc-200">
                If your local presence is trapped inside un-indexed website files or unstructured paragraphs, AI crawlers skip your asset entirely. GEO fixes this by making your physical business facts perfectly readable to software bots.
              </p>
            </div>
          </section>

          {/* 9. Visual Comparison Card: Local GEO vs Traditional Local SEO */}
          <section id="geo-vs-seo" className="border border-white/15 rounded-2xl overflow-hidden bg-zinc-950/90 shadow-2xl scroll-mt-24">
            <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                  The Architecture Paradigm: Local GEO vs Traditional Local SEO
                </h3>
              </div>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                Entity vs Lexical
              </span>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3 p-5 rounded-xl bg-red-950/20 border border-red-500/20">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-red-400 font-soehne-breit text-base">Legacy Local SEO</h4>
                  <span className="text-[10px] font-mono text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/30">Lexical</span>
                </div>
                <p className="text-zinc-300 text-xs font-serif leading-relaxed">
                  Relies heavily on surface-level keyword inclusion, high volumes of generic directory citations, and basic backlink acquisition. This system targets algorithmic signals built for traditional lexical search boxes.
                </p>
                <ul className="space-y-1.5 text-xs text-zinc-400 font-serif pt-1">
                  <li>• Focuses on raw keyword density</li>
                  <li>• Vulnerable to multi-node signal dilution</li>
                  <li>• Relies on static directory scraping</li>
                </ul>
              </div>

              <div className="space-y-3 p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-emerald-400 font-soehne-breit text-base">Modern Local GEO</h4>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">Vector &amp; Semantic</span>
                </div>
                <p className="text-zinc-300 text-xs font-serif leading-relaxed">
                  Prioritises deep entity disambiguation, precise coordinate matrix routing, and the deployment of nested JSON-LD schema graphs. Engineered to satisfy retrieval-augmented generation (RAG) pipelines and vector proximity calculations used by Perplexity, Apple Maps, and ChatGPT Search.
                </p>
                <ul className="space-y-1.5 text-xs text-zinc-300 font-serif pt-1">
                  <li>• Hard-codes coordinate matrices for proximity routing</li>
                  <li>• Unifies Brand Facts with Wikidata entities</li>
                  <li>• Optimized for passage-level extraction and AI citations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. FAQ Accordion Section (All 6 Answers Rendered in DOM) */}
          <section id="faq" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about AEObility local visibility sprints.</p>
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

          {/* 8. Bottom Conversion CTA Block + Direct Contact Form */}
          <section id="geo-contact-form" className="border-t border-white/10 pt-16 text-center space-y-8 scroll-mt-24">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Send Local Visibility Enquiry</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Tell us about your business locations and local priority issues. We will confirm the scope and price before you commit.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-1">
                <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>You will speak with an AEObility specialist based in Perth. Vince Baker, AEObility’s founder, reviews more complex scopes and strategic enquiries.</span>
              </div>
            </div>

            {/* Inline Local Contact Form */}
            <div className="max-w-xl mx-auto bg-zinc-950/90 border border-white/10 p-6 sm:p-8 rounded-2xl text-left shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-2xl -z-10" />
              <div className="flex items-center justify-between gap-4 mb-1.5">
                <h3 className="text-xl font-bold text-white font-soehne-breit">Discuss Your Local Visibility</h3>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
                  Local GEO Sprint
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-serif mb-6 leading-relaxed">
                Select the option you are considering, or choose &quot;Not sure yet — Help me decide&quot; if you would like help deciding.
              </p>

              {contactSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Local Visibility Enquiry Received</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you for reaching out. Our AEObility local visibility team will review your details and get in touch within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="geo-name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="geo-name"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Vince Baker"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="geo-email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="geo-email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="vince@example.com.au"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="geo-service-type">
                      What would you like to discuss?
                    </label>
                    <select
                      id="geo-service-type"
                      value={contactData.serviceType}
                      onChange={(e) => setContactData({ ...contactData, serviceType: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-medium"
                    >
                      <option value="ss4micro1">Business Details & Citation Clean-Up ($495 AUD)</option>
                      <option value="ss3micro1">Local Internal-Linking Sprint ($695 AUD)</option>
                      <option value="ss4micro3">Brand Facts Page Creation ($495 AUD)</option>
                      <option value="foundation">Foundation Implementation (from $3,195 AUD)</option>
                      <option value="unsure">Not sure yet — Help me decide</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="geo-website">
                      Website URL (Optional)
                    </label>
                    <input
                      type="text"
                      id="geo-website"
                      value={contactData.website}
                      onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="example.com.au"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="geo-message">
                      Business Locations or Local Issues to Address
                    </label>
                    <textarea
                      id="geo-message"
                      required
                      rows={3}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="Tell us about your locations or citation issues..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                  >
                    <span>Discuss Your Local Visibility</span>
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
