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
import { getLocalBusinessAeoSchemaGraph } from '@/lib/schema/localBusinessAeo';
import {
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  ChevronDown,
  Building2,
  Calendar,
  Search,
  Rocket,
  Boxes,
  Compass,
  FileCheck,
  Code,
  Users,
  ShieldCheck,
  Stethoscope,
  Wrench,
  AlertTriangle,
  FileText,
  Activity,
  Check,
  Home
} from 'lucide-react';

export const LOCAL_BUSINESS_AEO_INTERNAL_LINKS = [
  {
    targetSlug: "/brand-facts",
    anchorText: "canonical product database and uniform pricing framework",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/geo-marketing",
    anchorText: "GEO Services Sprints",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-blueprint",
    anchorText: "AEObility Strategic Blueprint",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function LocalBusinessAEOPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeAudienceTab, setActiveAudienceTab] = useState<'service-areas' | 'storefronts' | 'regional'>('service-areas');
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
    const formElement = document.getElementById('local-contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiagnosticSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'local_business_aeo_diagnostic_form',
      lead_type: 'local_aeo_scan',
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
      form_id: 'local_business_aeo_contact_form',
      lead_type: 'local_business_enquiry',
      service_selected: contactData.serviceType,
      value: 1,
    });
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactData({ name: '', email: '', website: '', serviceType: 'unsure', message: '' });
    }, 6000);
  };

  const symptoms = [
    {
      title: "Your business appears for the wrong suburb—or not at all",
      symptom: "Customers search for local trades, clinics or services in nearby suburbs, but your business is invisible or mapped to an old location.",
      solution: "We inject exact location schema and restructure suburb service area pages so search engines verify your true coverage radius."
    },
    {
      title: "Maps and directories show conflicting business details (NAP)",
      symptom: "Google Maps, Apple Maps, Yellow Pages and TrueLocal display different phone numbers, addresses or operating hours.",
      solution: "We standardise your Name, Address and Phone (NAP) details across priority directories and align your Google Business Profile."
    },
    {
      title: "You have a good website, but calls and bookings remain inconsistent",
      symptom: "Visitors land on generic service pages that lack clear suburb details, operating hours or immediate contact actions.",
      solution: "We rewrite key service pages into self-contained atomic answer blocks that make calling or booking straightforward."
    },
    {
      title: "Your multi-location business sends authority to the wrong page",
      symptom: "Search engines direct local patients or clients to your main head-office page instead of their nearest branch or clinic.",
      solution: "We build a multi-location schema graph and internal linking lattice to pass authority directly to individual clinic/branch pages."
    }
  ];

  const engagementPaths = [
    {
      key: "micro-sprint",
      anchorId: "local-micro-sprints",
      icon: <Rocket className="w-6 h-6 text-aeo-purple" />,
      title: "Proximity Micro-Sprint",
      code: "SS1 / SS4 Series",
      price: "From $495 AUD",
      priceSub: "ex. GST",
      scope: "One priority local signal fix",
      description: "Target a defined local signal issue: Location Schema Injection ($495 AUD ex. GST), Service Schema Injection ($495 AUD ex. GST), or Citation Clean-Up & NAP Standardisation ($495 AUD ex. GST).",
      techNote: "For technical teams: Deployment of LocalBusiness schema and directory NAP standardisation.",
      whenToChoose: "Choose this when you have one specific location schema or directory citation discrepancy limiting local search visibility.",
      ctaLabel: "Discuss Micro-Sprint"
    },
    {
      key: "foundation",
      anchorId: "local-foundation",
      icon: <Boxes className="w-6 h-6 text-aeo-cyan" />,
      title: "Unified Local Foundation",
      code: "Macro Tier",
      price: "From $3,195 AUD",
      priceSub: "ex. GST",
      scope: "Connected multi-location & service area fixes",
      description: "For multi-location clinics or growing trade services, combine your structured data, cross-directory consistency, and internal location page connections into one focused four-week engagement.",
      techNote: "For technical teams: Multi-location schema graphs, cross-directory NAP alignment, and internal linking lattice.",
      whenToChoose: "Choose this when your business operates across multiple locations or requires connected improvements across service areas.",
      ctaLabel: "Discuss Foundation Tier"
    },
    {
      key: "blueprint",
      anchorId: "local-blueprint",
      icon: <Compass className="w-6 h-6 text-aeo-cyan" />,
      title: "Local Visibility Blueprint",
      code: "BPSTRAT",
      price: "$995 AUD",
      priceSub: "ex. GST",
      scope: "Full local profile audit & 90-day roadmap",
      description: "Audit your local profile structures, map coordinate logic, and existing structured data. Receive a practical 90-day regional execution roadmap. 100% credited toward Foundation work.",
      techNote: "For technical teams: Local signal audit, map coordinate review, and geographic query fan-out mapping.",
      whenToChoose: "Choose this when you need a clear diagnostic plan before committing to implementation.",
      ctaLabel: "Discuss $995 Blueprint"
    }
  ];

  const technicalBuildingBlocks = [
    {
      icon: <MapPin className="w-6 h-6 text-cyan-400" />,
      title: "Make your business details machine-readable (LocalBusiness Schema)",
      code: "S1 Series",
      description: "Deploy nested JSON-LD schema (LocalBusiness, MedicalClinic, Electrician, Air Conditioning Business) defining exact geographic coordinates, operating hours, and service radiuses so search engines and AI assistants parse your true location."
    },
    {
      icon: <Building2 className="w-6 h-6 text-purple-400" />,
      title: "Fix conflicting business listings (Directory Citation Clean-Up)",
      code: "S4 Series",
      description: "Standardise business name, address, and phone number (NAP) details across major Australian business directories (Yellow Pages, TrueLocal), Google Business Profile, and Apple Maps to eliminate machine confusion."
    },
    {
      icon: <Wrench className="w-6 h-6 text-cyan-400" />,
      title: "Restructure service-area pages into clear answers (Service Area Restructuring)",
      code: "S2 Series",
      description: "Structure suburb and service area pages into self-contained atomic answer blocks answering specific local queries (e.g. emergency plumbing responses, clinical consultation hours) for RAG scrapers."
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-purple-400" />,
      title: "Connect multi-location authority (Internal Location Lattice)",
      code: "S3 Series",
      description: "Link core service pages to regional clinic or suburb location pages using structured anchor text to pass local search authority directly to individual branch locations."
    }
  ];

  const faqs = [
    {
      question: "Can a mobile trade or service business rank across multiple suburbs without a physical storefront?",
      answer: "Yes. Mobile trades (plumbers, electricians, builders, air conditioning specialists) operate as Service Area Businesses (SABs). We configure your LocalBusiness schema with explicit GeoCircle and areaServed properties, standardise directory listings, and structure suburb service pages without disclosing private home addresses."
    },
    {
      question: "Do you handle healthcare clinic advertising and compliance guidelines in Australia?",
      answer: "Yes. For medical practices, dental clinics, and allied health providers, all content, schema markup, and patient trust messaging adhere strictly to Australian Health Practitioner Regulation Agency (AHPRA) advertising guidelines. We focus on verifiable facts, operating hours, practitioner details, and direct booking paths."
    },
    {
      question: "Can AEObility work with our existing web developer or internal team?",
      answer: "Absolutely. Every AEObility sprint includes complete handover notes, copy files, and validated JSON-LD schema snippets. Your existing web developer can easily copy-paste the updates, or our strategy team can implement them directly on your CMS."
    },
    {
      question: "What happens if certain local citations or directory listings cannot be claimed?",
      answer: "Where third-party directory listings cannot be claimed directly, we submit verified update notices, align your website footer and Google Business Profile NAP strings, and inject authoritative JSON-LD schema on your canonical domain to establish primary source authority."
    },
    {
      question: "What is the difference between the Free Local Scan and the $995 Blueprint?",
      answer: "The Free Local Scan provides a quick local signal scorecard highlighting your top 3 verified technical gaps and recommended next actions. The AEObility Blueprint ($995 AUD ex. GST) is an in-depth digital presence audit and 90-day execution roadmap—which is 100% credited if you book Foundation Implementation within 60 days."
    },
    {
      question: "Are there any ongoing monthly contracts or agency retainers?",
      answer: "No. All AEObility local business sprints are fixed-scope, flat-rate engagements delivered in 4–5 business days (Micro-Sprints) or 4 weeks (Foundation). No ongoing monthly retainer or locked-in contract is required."
    }
  ];

  const jsonLdGraph = getLocalBusinessAeoSchemaGraph(faqs);

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

          {/* 1. Outcome-Led Hero Block */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <MapPin className="w-4 h-4 text-aeo-cyan" />
              <span>Local Search &amp; Proximity Optimisation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Local Search &amp; AEO for <span className="text-gradient-aeo">Local Businesses</span>
            </h1>

            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Fix inconsistent business details, missing suburb schema, and location mapping gaps across Search, Maps, and AI answers.
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
                src="/images/services/aeo-local-business_perth_AEObility.webp"
                alt="Clean smartphone UI display emphasizing an optimized map pin interaction state"
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs with Elevated Free Scan Highlight */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-3.5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix one local signal gap or build a complete local foundation.</span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 font-serif block">Typical delivery: 4–5 business days from confirmed scope and access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <a
                    href="#local-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Search className="w-4 h-4 text-black shrink-0" />
                    <span>Run a Free Local Scan</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => selectSprintForForm('micro-sprint')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/20 hover:border-cyan-400 text-white font-semibold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Discuss Local Sprints</span>
                  </button>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Looking for our broader service catalogue? Explore <Link href="/services/geo-marketing" className="text-cyan-400 hover:underline font-medium">GEO Services Sprints</Link>, review our <Link href="/brand-facts" className="text-cyan-400 hover:underline font-medium">canonical product database and uniform pricing framework</Link>, or check <Link href="/solutions/aeo-blueprint" className="text-cyan-400 hover:underline font-medium">AEObility Strategic Blueprint</Link>.
            </p>
          </section>

          {/* 2. Dominating Local Map Packs (Symptom Checklist) */}
          <section id="symptoms" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Dominating Local Map Packs</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Signs Your Local Search Signals Are Broken</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Ensure your local business gets found on maps and surfaces in local search optimisation Perth &amp; national proximity engines.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {symptoms.map((item, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 hover:border-cyan-500/40 transition">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    <strong className="text-white block mb-0.5">What happens:</strong>
                    {item.symptom}
                  </p>
                  <div className="bg-cyan-950/30 border border-cyan-500/20 p-3 rounded-xl text-xs text-cyan-300 font-serif leading-relaxed">
                    <strong className="text-white block mb-0.5">What AEObility fixes:</strong>
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Optimizing for Voice and Conversational Assistant Proximity */}
          <section id="audience-pathways" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Optimizing for Voice and Conversational Assistant Proximity</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Built for Service Areas &amp; Local Locations</h2>
              <p className="text-xs text-white/60 font-serif">Proximity algorithm targeting and local entity profiles for businesses seeking aeo marketers near me and aeo services near me.</p>
            </div>

            {/* Audience Toggle Tabs */}
            <div className="flex justify-center border-b border-white/10 max-w-xl mx-auto overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveAudienceTab('service-areas')}
                className={`py-3 px-4 text-xs font-bold font-mono transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
                  activeAudienceTab === 'service-areas'
                    ? 'border-cyan-400 text-cyan-300 bg-cyan-950/40'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                🛠️ MOBILE &amp; SERVICE AREAS
              </button>
              <button
                type="button"
                onClick={() => setActiveAudienceTab('storefronts')}
                className={`py-3 px-4 text-xs font-bold font-mono transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
                  activeAudienceTab === 'storefronts'
                    ? 'border-purple-400 text-purple-300 bg-purple-950/40'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                🏥 STOREFRONTS &amp; CLINICS
              </button>
              <button
                type="button"
                onClick={() => setActiveAudienceTab('regional')}
                className={`py-3 px-4 text-xs font-bold font-mono transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
                  activeAudienceTab === 'regional'
                    ? 'border-emerald-400 text-emerald-300 bg-emerald-950/40'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                🏡 REGIONAL OPERATIONS
              </button>
            </div>

            {/* Tab Content 1: Mobile & Service Areas */}
            {activeAudienceTab === 'service-areas' && (
              <div id="service-areas-pathway" className="bg-zinc-950/90 border border-cyan-500/30 p-6 sm:p-8 rounded-2xl space-y-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-cyan-950 border border-cyan-500/40 rounded-xl">
                    <Wrench className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-soehne-breit">Mobile &amp; Service-Area Businesses</h3>
                    <p className="text-xs text-zinc-400 font-serif">Plumbers, Electricians, Air Conditioning Specialists, Builders &amp; Mobile Technicians</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300 font-serif">
                  <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
                    <strong className="text-white font-semibold block text-sm">Key Search Priorities:</strong>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Emergency &amp; urgent local service intent (&quot;electrician near me&quot;)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Mobile service area coverage across multiple target suburbs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Direct phone click-to-call lead generation for technicians</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
                    <strong className="text-white font-semibold block text-sm">AEObility Sprint Actions:</strong>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>S1 Schema: Inject LocalBusiness &amp; GeoCircle service area radiuses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>S4 Directory Clean-Up: Align NAP data across Yellow Pages &amp; Google Maps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>S2 Page Restructuring: Turn generic services pages into suburb answer units</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => selectSprintForForm('micro-sprint')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition cursor-pointer"
                  >
                    <span>Discuss Service Area Sprints</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Tab Content 2: Storefronts & Clinics */}
            {activeAudienceTab === 'storefronts' && (
              <div id="storefronts-pathway" className="bg-zinc-950/90 border border-purple-500/30 p-6 sm:p-8 rounded-2xl space-y-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-purple-950 border border-purple-500/40 rounded-xl">
                    <Stethoscope className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-soehne-breit">Storefronts &amp; Local Clinics</h3>
                    <p className="text-xs text-zinc-400 font-serif">Medical practices, Dental Clinics, Allied Health, Retail &amp; Commercial Offices</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300 font-serif">
                  <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
                    <strong className="text-white font-semibold block text-sm">Key Search Priorities:</strong>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>Symptom, condition &amp; practitioner specialty query matching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>AHPRA-compliant reputation, verified facts &amp; clinical credentials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>Direct online booking friction reduction per physical branch</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
                    <strong className="text-white font-semibold block text-sm">AEObility Sprint Actions:</strong>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>S1 Schema: Deploy MedicalClinic &amp; Physician nested JSON-LD graphs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>S3 Linking Lattice: Connect specialty pages directly to location booking nodes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>S4 Citation Clean-Up: Align clinic operating hours across healthcare directories</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => selectSprintForForm('foundation')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-500 text-black font-bold text-xs hover:bg-purple-400 transition cursor-pointer"
                  >
                    <span>Discuss Storefront Sprints</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Tab Content 3: Regional Operations */}
            {activeAudienceTab === 'regional' && (
              <div id="regional-pathway" className="bg-zinc-950/90 border border-emerald-500/30 p-6 sm:p-8 rounded-2xl space-y-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-950 border border-emerald-500/40 rounded-xl">
                    <Home className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-soehne-breit">Home-Based &amp; Regional Operations</h3>
                    <p className="text-xs text-zinc-400 font-serif">Consultants, Regional Contractors, Specialized Services &amp; Hybrid Operations</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300 font-serif">
                  <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
                    <strong className="text-white font-semibold block text-sm">Key Regional Priorities:</strong>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Privacy-safe address suppression with defined regional coverage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Cross-suburb authority building for regional growth corridors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Verified contact NAP consistency across digital directories</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/60 border border-white/10 p-4 rounded-xl space-y-2">
                    <strong className="text-white font-semibold block text-sm">AEObility Sprint Actions:</strong>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>S1 Schema: Inject privacy-compliant LocalBusiness schema with areaServed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>S2 Restructuring: Build regional answer units for outlying service hubs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>S4 Citation Alignment: Fix inconsistent phone and website URLs across directories</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => selectSprintForForm('micro-sprint')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400 transition cursor-pointer"
                  >
                    <span>Discuss Regional Sprints</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </section>

          {/* 4. "Choose Your Starting Point" Engagement Grid & Comparison Table */}
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
            <div id="local-comparison-table" className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-md">
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
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Proximity Micro-Sprint</td>
                    <td className="p-3.5 sm:p-4">1 Defined Local Signal / Schema Fix</td>
                    <td className="p-3.5 sm:p-4">Trades &amp; clinics fixing 1 issue</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $495 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Unified Local Foundation</td>
                    <td className="p-3.5 sm:p-4">Multi-Location &amp; Service Area Fixes</td>
                    <td className="p-3.5 sm:p-4">Multi-location clinics &amp; growing trade services</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $3,195 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Local Visibility Blueprint</td>
                    <td className="p-3.5 sm:p-4">Local Profile Audit &amp; 90-Day Roadmap</td>
                    <td className="p-3.5 sm:p-4">Businesses needing diagnostic direction</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">$995 AUD</td>
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

          {/* 5. Clear Entity Signals for Local Trades */}
          <section id="technical-blocks" className="border-t border-white/10 pt-16 space-y-10 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Clear Entity Signals for Local Trades</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How We Fix Your Local Search Signals</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Practical specifications detailing how hyper-local coordinates, NAP consistency, and service area schema are structured.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalBuildingBlocks.map((block, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 text-left hover:border-cyan-500/40 transition">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit">
                      {block.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                      {block.code}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">{block.title}</h3>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {block.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mid-Page Duplicate Scan CTA */}
            <div className="text-center pt-4">
              <a
                href="#local-diagnostic-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.3)] cursor-pointer"
              >
                <Search className="w-4 h-4 text-black" />
                <span>Run Free Local Signal Scan</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>
            </div>
          </section>

          {/* 6. Streamlined 12-Column Responsive Diagnostic Form Module */}
          <section id="local-diagnostic-form" className="border-t border-white/10 pt-16 scroll-mt-24">
            <div className="max-w-3xl mx-auto bg-zinc-950/90 border border-cyan-500/30 p-6 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full filter blur-3xl -z-10" />

              <div className="text-center space-y-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                  <Search className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Instant Local Signal Scan</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Run a Free Local Visibility Scan</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-serif max-w-xl mx-auto leading-relaxed">
                  Delivers a short local signal scorecard highlighting your top 3 verified technical gaps and recommended next actions.
                </p>
              </div>

              {diagnosticSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Local Visibility Scan Submitted</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you. Our AEObility strategy team will audit your local profile signals and send your 3-point scorecard within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDiagnosticSubmit} className="space-y-6">
                  {/* Strict 12-Column Grid Layout */}
                  <div className="grid grid-cols-12 gap-4">
                    {/* Business Website or Profile URL - Col Span 12 */}
                    <div className="col-span-12 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="local-diag-url">
                        Business Website or Profile URL
                      </label>
                      <input
                        type="text"
                        id="local-diag-url"
                        required
                        value={diagnosticData.websiteUrl}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, websiteUrl: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. myclinic.com.au or Google Maps link"
                      />
                      <p className="text-[11px] text-zinc-400 font-serif leading-tight">
                        Checks your geographic coordinate strings, LocalBusiness schema nesting, and cross-directory NAP profile consistency.
                      </p>
                    </div>

                    {/* First Name Field - Col Span 12 on Mobile, Col Span 6 on Desktop */}
                    <div className="col-span-12 md:col-span-6 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="local-diag-name">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="local-diag-name"
                        required
                        value={diagnosticData.name}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Sarah"
                      />
                    </div>

                    {/* Primary Email Field - Col Span 12 on Mobile, Col Span 6 on Desktop */}
                    <div className="col-span-12 md:col-span-6 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="local-diag-email">
                        Primary Email
                      </label>
                      <input
                        type="email"
                        id="local-diag-email"
                        required
                        value={diagnosticData.email}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="sarah@mybusiness.com.au"
                      />
                    </div>

                    <div className="col-span-12">
                      <p className="text-[11px] text-zinc-400 font-serif leading-tight">
                        We use your details strictly to validate your local tracking signals and deliver your prioritised 90-day action roadmap.
                      </p>
                    </div>
                  </div>

                  {/* Submission Action Button & Single Consolidated In-Line Risk Reversal Banner */}
                  <div className="space-y-3 pt-2">
                    <button
                      type="submit"
                      className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                    >
                      <span>Run Free Local Scan</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-[11px] text-zinc-400 font-serif text-center">
                      Clear scope. Upfront flat rates. No lock-in contracts. Every evaluation maps to practical next steps.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* 7. Operational 3-Step Process Flow Pipeline Graphic */}
          <section id="local-process" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Simple 3-Step Operational Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How Local Sprints Are Deployed</h2>
              <p className="text-xs text-white/60 font-serif">Clear sequence from initial local scan to complete handover notes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">1</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Local Signal Assessment</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run a free scan or confirm your local search priorities with our team.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-purple-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(168,85,247,0.2)]">2</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">4–5 Day Execution</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Deploy agreed LocalBusiness schema, citation clean-up, or service area rewrites.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">3</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Validation &amp; Handover</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run validation checks and receive complete documentation &amp; ownership notes.</p>
              </div>
            </div>
          </section>

          {/* 8. Bottom Conversion CTA Block + Direct Contact Form */}
          <section id="local-contact-form" className="border-t border-white/10 pt-16 text-center space-y-8 scroll-mt-24">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Discuss Local AEO Priorities</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Tell us about your business locations and service area goals. We will confirm scope and pricing before you commit. <Link href="/contact" className="text-cyan-400 hover:underline font-medium">Request a quote</Link>.
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
                <h3 className="text-xl font-bold text-white font-soehne-breit">Discuss Local AEO Sprints</h3>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
                  Local AEO
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
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="local-name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="local-name"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Sarah Jenkins"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="local-email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="local-email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="sarah@example.com.au"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="local-service-type">
                      What would you like to discuss?
                    </label>
                    <select
                      id="local-service-type"
                      value={contactData.serviceType}
                      onChange={(e) => setContactData({ ...contactData, serviceType: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-medium"
                    >
                      <option value="unsure">Not sure yet — Help me decide</option>
                      <option value="micro-sprint">Proximity Micro-Sprint (From $495 AUD)</option>
                      <option value="foundation">Unified Local Foundation (From $3,195 AUD)</option>
                      <option value="blueprint">Local Visibility Blueprint ($995 AUD)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="local-website">
                      Website or Profile URL (Optional)
                    </label>
                    <input
                      type="text"
                      id="local-website"
                      value={contactData.website}
                      onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="myclinic.com.au"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="local-message">
                      What would you like help with?
                    </label>
                    <textarea
                      id="local-message"
                      required
                      rows={3}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="For example: location schema injection, directory citation clean-up, or multi-location page restructuring..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                  >
                    <span>Discuss Local Priorities</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center font-serif">
                    Clear scope. Fixed pricing. No lock-in contracts. Your privacy is protected.
                  </p>
                </form>
              )}
            </div>
          </section>

          {/* 9. Decision Blockers FAQ Accordion Section (All 6 Answers Rendered in DOM) */}
          <section id="faq-local" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about local search and AEO for local businesses.</p>
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
