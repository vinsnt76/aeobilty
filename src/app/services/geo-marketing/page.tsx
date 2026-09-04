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
  Code, 
  HelpCircle, 
  ChevronDown, 
  Users,
  Boxes,
  FileCheck,
  Building2,
  Navigation,
  DollarSign,
  Layers,
  Search,
  BarChart3,
  AlertTriangle,
  XCircle,
  Sparkles,
  Check
} from 'lucide-react';

export default function GeoMarketingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    website: '',
    serviceType: 'geo-diagnostic',
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
      setContactData({ name: '', email: '', website: '', serviceType: 'geo-diagnostic', message: '' });
    }, 6000);
  };

  const faqs = [
    {
      question: "Is GEO different from SEO?",
      answer: "Yes. GEO builds on SEO foundations. While traditional SEO focuses on earning rankings and clicks in search result lists, GEO focuses on whether AI-assisted search experiences (like Google AI Overviews, ChatGPT Search, and Perplexity) can retrieve, verify, and accurately reference your business when generating answers."
    },
    {
      question: "Can you guarantee AI citations or ChatGPT recommendations?",
      answer: "No agency can control proprietary AI results or guarantee citations. AEObility identifies the structural, factual, and entity gaps you can influence, implements agreed fixes on your site and key platforms, and measures changes against a transparent baseline."
    },
    {
      question: "Which platforms do you assess?",
      answer: "We scope our diagnostics around the search engines and AI surfaces relevant to your audience, including Google AI features (AI Overviews), ChatGPT Search, Perplexity, and Gemini."
    },
    {
      question: "Do I need to replace my existing SEO provider?",
      answer: "No. Our GEO services are designed to work alongside your in-house team, existing SEO agency, web developer, or content partner. We deliver scoped technical implementation, validated structured facts, and practical handover documentation."
    },
    {
      question: "How long does a GEO sprint take?",
      answer: "A single Micro-Sprint is delivered within 4–5 business days once scope, access, and business facts are confirmed. Comprehensive Foundation Implementation is delivered across a four-week structured timeframe."
    },
    {
      question: "Is GEO just schema markup?",
      answer: "No. Schema markup is only one implementation layer. GEO also involves cleaning up conflicting business information across directories, restructuring priority pages for passage-level extraction, establishing clear internal entity relationships, providing verifiable proof, and tracking cross-platform visibility."
    }
  ];

  const microSprints = [
    {
      key: "s1-citation",
      anchorId: "s1-citation",
      icon: <Building2 className="w-6 h-6 text-aeo-cyan" />,
      title: "Business Facts & Citation Clean-Up",
      code: "SPRINT S1",
      price: "$495 AUD",
      priceSub: "ex. GST",
      scope: "Priority directory profiles & NAP references",
      description: "Identify and resolve conflicting business names, addresses, phone numbers, and profile details across primary Australian directories and map platforms.",
      buyerOutcome: "Reduces conflicting business information across priority sources so AI engines can verify core facts without ambiguity.",
      ctaLabel: "Select Citation Clean-Up"
    },
    {
      key: "s2-service-page",
      anchorId: "s2-service-page",
      icon: <FileText className="w-6 h-6 text-aeo-purple" />,
      title: "AI-Ready Service Page Sprint",
      code: "SPRINT S2",
      price: "$495 AUD",
      priceSub: "ex. GST",
      scope: "Priority commercial service page",
      description: "Restructure key service pages with direct answer scaffolding, clear eligibility requirements, location context, and structured proof blocks.",
      buyerOutcome: "Makes core services, target location relevance, and business differentiation easy for AI search scrapers to extract and cite.",
      ctaLabel: "Select Service Page Sprint"
    },
    {
      key: "s3-entity-arch",
      anchorId: "s3-entity-arch",
      icon: <Navigation className="w-6 h-6 text-aeo-cyan" />,
      title: "Local Entity Architecture Sprint",
      code: "SPRINT S3",
      price: "$695 AUD",
      priceSub: "ex. GST",
      scope: "Location hubs & service relationships",
      description: "Deploy semantic internal linking lattices connecting regional location pages with core commercial services to establish explicit entity relationships.",
      buyerOutcome: "Clarifies structural relationships between physical locations, service areas, and commercial offerings across your website.",
      ctaLabel: "Select Entity Architecture"
    },
    {
      key: "s4-schema-val",
      anchorId: "s4-schema-val",
      icon: <Code className="w-6 h-6 text-aeo-purple" />,
      title: "Structured Data Validation Sprint",
      code: "SPRINT S4",
      price: "$495 AUD",
      priceSub: "ex. GST",
      scope: "Eligible Schema.org JSON-LD nodes",
      description: "Audit and validate eligible, visible JSON-LD structured data (LocalBusiness, Service, areaServed) and resolve syntax or cross-reference errors.",
      buyerOutcome: "Validates eligible structured data so search engines receive clean, error-free machine-readable facts backed by visible content.",
      ctaLabel: "Select Schema Validation"
    },
    {
      key: "s5-reporting-setup",
      anchorId: "s5-reporting-setup",
      icon: <BarChart3 className="w-6 h-6 text-aeo-cyan" />,
      title: "AI Visibility Reporting Setup",
      code: "SPRINT S5",
      price: "$495 AUD",
      priceSub: "ex. GST",
      scope: "Auditable prompt set & tracking baseline",
      description: "Establish a customised, auditable baseline prompt set covering your core services, locations, and buyer questions, with recurring citation tracking.",
      buyerOutcome: "Establishes an auditable baseline to monitor brand inclusion, citation accuracy, and competitor presence over time.",
      ctaLabel: "Select Reporting Setup"
    }
  ];

  const jsonLdGraph = getGeoMarketingSchemaGraph(faqs);

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
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[80px] space-y-16">

          {/* 1. Hero Block */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <MapPin className="w-4 h-4 text-aeo-cyan" />
              <span>Perth & Regional AI Search Optimisation</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Generative Engine Optimisation (GEO) Services <span className="text-gradient-aeo">in Perth</span>
            </h1>

            <p className="text-lg sm:text-xl text-cyan-300 font-semibold max-w-3xl mx-auto font-soehne-breit">
              Find out why your business is missing, misrepresented or uncited in AI search—and fix the content, entity and local visibility signals that make it easier to verify.
            </p>

            <div className="space-y-3 max-w-3xl mx-auto text-base text-zinc-300 font-serif leading-relaxed">
              <p>
                AEObility helps Perth and Australian businesses improve how they are understood across Google AI features, ChatGPT Search, Perplexity and other AI-assisted discovery experiences. We start by testing the buyer questions that matter, identifying visibility and accuracy gaps, then implementing practical fixes across your website, business facts, structured data and supporting local signals. GEO is not a replacement for SEO—it is a focused extension of it for search experiences that synthesise answers instead of simply ranking links.
              </p>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap"
              >
                <Search className="w-4 h-4 text-black" />
                <span>Run an AI Visibility Scan</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  const element = document.getElementById('local-sprints');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/20 hover:border-cyan-400 text-white font-semibold text-sm transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap"
              >
                <span>View GEO Micro-Sprints</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            <p className="text-xs text-zinc-400 font-mono pt-1">
              Fixed scope, practical deliverables, no long-term retainer required.
            </p>

            {/* Featured Image Hero Graphic */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] my-8">
              <Image
                src="/images/services/geo-marketing-services_AEObility.webp"
                alt="Diagram explaining how Generative Engine Optimisation extends local SEO foundations to improve AI search visibility."
                width={1200}
                height={800}
                className="w-full h-[320px] sm:h-[380px] object-cover opacity-85"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </section>

          {/* 2. Buyer Pain Section */}
          <section id="buyer-pain" className="bg-zinc-950/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl scroll-mt-24">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>The AI Search Gap</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                You rank in search, but AI answers miss or misrepresent you
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-zinc-300 font-serif">
              <div className="p-5 bg-black/60 border border-white/10 rounded-xl space-y-2">
                <span className="text-amber-300 font-bold font-mono text-sm block">1. Uncited in AI Answers</span>
                <p className="leading-relaxed">
                  Potential clients search ChatGPT or Google AI Overviews for your exact services in Perth, but AI synthesises answers recommending competitors who have clearer machine-readable proof.
                </p>
              </div>
              <div className="p-5 bg-black/60 border border-white/10 rounded-xl space-y-2">
                <span className="text-amber-300 font-bold font-mono text-sm block">2. Inaccurate Business Details</span>
                <p className="leading-relaxed">
                  Conflicting address records, outdated phone numbers, or inconsistent service names across legacy directories lead AI engines to present inaccurate business details to buyers.
                </p>
              </div>
              <div className="p-5 bg-black/60 border border-white/10 rounded-xl space-y-2">
                <span className="text-amber-300 font-bold font-mono text-sm block">3. Lack of Measurement</span>
                <p className="leading-relaxed">
                  Most businesses have no visibility into how often their brand is mentioned, cited, or misrepresented across generative engines, making strategic decisions pure guesswork.
                </p>
              </div>
            </div>
          </section>

          {/* 3. GEO vs SEO Comparison Section */}
          <section id="geo-vs-seo" className="bg-zinc-950/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl scroll-mt-24">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Strategic Alignment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                Understanding GEO vs SEO: How AI Search Builds on Organic Foundations
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Generative Engine Optimisation does not replace SEO—it extends sound SEO practices for generative search engines that synthesise answers instead of simply returning links.
              </p>
            </div>

            {/* GEO vs SEO Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-white/5 border-b border-white/10 text-cyan-400">
                  <tr>
                    <th className="p-3.5 w-1/4">Dimension</th>
                    <th className="p-3.5 w-3/8">Traditional SEO</th>
                    <th className="p-3.5 w-3/8 text-cyan-300">GEO / AI-Search Optimisation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300 font-serif">
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">Main Aim</td>
                    <td className="p-3.5">Help relevant pages earn visibility and ranking positions in web search results.</td>
                    <td className="p-3.5 text-cyan-200">Help accurate business information become easier to retrieve, verify, and reference in AI-assisted answers.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">Core Work</td>
                    <td className="p-3.5">Technical website health, target keywords, backlinks, internal linking, and search intent.</td>
                    <td className="p-3.5 text-cyan-200">Builds on SEO with answer-focused page structure, entity clarity, structured proof, source consistency, and AI visibility testing.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">What is Measured</td>
                    <td className="p-3.5">Organic rankings, impressions, clicks, traffic volume, and web conversions.</td>
                    <td className="p-3.5 text-cyan-200">Brand inclusion, factual accuracy, source/citation inclusion, AI referral traffic, and Search Console AI overview impressions.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">What it is Not</td>
                    <td className="p-3.5">A guarantee of top-ranking search positions or instant traffic.</td>
                    <td className="p-3.5 text-cyan-200">A guarantee of AI citations, recommendations, or model behaviour across proprietary platforms.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Primary Offer Gateway: GEO Visibility Diagnostic */}
          <section id="geo-diagnostic" className="bg-gradient-to-r from-cyan-950/40 via-zinc-950 to-purple-950/40 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_0_30px_rgba(0,205,216,0.15)] scroll-mt-24">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold">
                  <Search className="w-4 h-4 text-cyan-400" />
                  <span>Primary Starting Point / Pre-Sprint Gateway</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                  GEO Visibility Diagnostic
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                  Best for businesses that rank in traditional search but are missing, misrepresented, or uncited in AI answers. We test the real buyer questions that matter and deliver a prioritised 30- or 90-day action plan.
                </p>
                <ul className="space-y-1.5 text-xs text-zinc-300 font-serif pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Prompt set testing based on real services, locations, and buyer questions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Cross-platform review across Google AI features, ChatGPT Search, and Perplexity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Brand mention accuracy, citation inclusion, and competitor comparison</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>First-party content, technical structure, and business fact consistency audit</span>
                  </li>
                </ul>

                {/* Credit Guarantee Note */}
                <div className="p-3.5 bg-black/60 border border-cyan-500/30 rounded-lg text-xs font-serif text-cyan-300">
                  <strong className="font-mono text-white block mb-0.5 font-bold">100% Credit Guarantee:</strong>
                  <span>The full $995 diagnostic fee is credited toward Foundation Implementation booked within 60 days of handover.</span>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end justify-between space-y-4 shrink-0 w-full md:w-auto">
                <div className="text-left md:text-right">
                  <span className="text-3xl font-extrabold text-cyan-300 font-mono block">$995 AUD</span>
                  <span className="text-xs text-zinc-400 font-mono block mt-0.5">ex. GST • Standalone Audit &amp; Roadmap</span>
                </div>
                <button
                  type="button"
                  onClick={() => selectSprintForForm('geo-diagnostic')}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.3)] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Book GEO Diagnostic</span>
                </button>
              </div>
            </div>
          </section>

          {/* 5. GEO Micro-Sprints Catalogue */}
          <section id="local-sprints" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-300 font-mono">
                <span>Fixed Scope Sprints</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">GEO Micro-Sprints</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">Fixed-scope, fast turnaround implementations focused on specific local and entity outcomes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {microSprints.slice(0, 3).map((sprint, idx) => (
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

                    <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                      {sprint.description}
                    </p>

                    <div className="bg-black/50 border border-white/5 p-2.5 rounded-lg text-[11px] text-zinc-300 font-serif leading-relaxed">
                      <strong className="text-cyan-300 block mb-0.5 font-mono font-bold">Buyer Outcome:</strong>
                      <span>{sprint.buyerOutcome}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {microSprints.slice(3).map((sprint, idx) => (
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

                    <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                      {sprint.description}
                    </p>

                    <div className="bg-black/50 border border-white/5 p-2.5 rounded-lg text-[11px] text-zinc-300 font-serif leading-relaxed">
                      <strong className="text-cyan-300 block mb-0.5 font-mono font-bold">Buyer Outcome:</strong>
                      <span>{sprint.buyerOutcome}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5">
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

            {/* Deliverables Ownership Callout */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">Full Deliverable Ownership</strong>
                  <span>You own all completed page modifications, schema code, and handover notes. Deliverables can be implemented by AEObility or handed directly to your internal team or web developer.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Foundation Implementation Section */}
          <section id="foundation-implementation" className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-purple-500/30 rounded-2xl p-8 space-y-6 shadow-[0_0_30px_rgba(168,85,247,0.15)] scroll-mt-24">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                  <Boxes className="w-4 h-4 text-purple-400" />
                  <span>Four-Week Structured Engagement</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-soehne-breit">
                  Foundation Implementation
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif">
                  A structured four-week deployment for businesses requiring comprehensive, connected improvements across content, entity architecture, and measurement.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300 font-serif pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Priority service and location page rewrites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Canonical Brand Facts reference page</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Internal linking &amp; entity mapping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Structured data validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Profile &amp; citation consistency work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Measurement baseline setup</span>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-400 font-serif italic pt-1">
                  We promise defined technical work, validated schema, and transparent handover. We do not make unsupported claims regarding guaranteed rankings or proprietary model behaviour.
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end justify-between space-y-4 shrink-0 w-full md:w-auto">
                <div className="text-left md:text-right">
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-300 font-mono block">From $3,195 AUD ex. GST</span>
                  <span className="text-xs text-zinc-400 font-mono block mt-0.5 font-normal">Delivered across 4 business weeks</span>
                </div>
                <button
                  type="button"
                  onClick={() => selectSprintForForm('foundation')}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Discuss Foundation Scope</span>
                </button>
              </div>
            </div>
          </section>

          {/* 7. What We Assess and Measure Section */}
          <section id="measurement" className="bg-zinc-950/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl scroll-mt-24">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Proof &amp; Accountability</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                What We Measure
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Clear baseline metrics to evaluate visibility, citation accuracy, and brand inclusion over time.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-white/5 border-b border-white/10 text-cyan-400">
                  <tr>
                    <th className="p-3.5 w-1/3">Metric</th>
                    <th className="p-3.5 w-2/3">What it Tells You</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300 font-serif">
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">AI Visibility Baseline</td>
                    <td className="p-3.5">Whether your business appears for a defined set of service, location, and problem-led buyer prompts across target AI surfaces.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">Brand-Answer Accuracy</td>
                    <td className="p-3.5">Whether your core services, locations, contact details, pricing structure, and key differentiators are described correctly by generative engines.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">Source or Citation Inclusion</td>
                    <td className="p-3.5">Whether your primary website domain or verified third-party profiles are linked or cited in generative search answers.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">Competitor Presence</td>
                    <td className="p-3.5">Which market competitors repeatedly appear in AI answers for target buyer questions, and which source platforms support them.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">AI Referral Traffic</td>
                    <td className="p-3.5">Website visits and downstream user actions attributable to AI search engines (e.g. ChatGPT, Perplexity, Claude).</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">Search Generative-AI Performance</td>
                    <td className="p-3.5">Google Search visibility data from generative features, where reporting and segmentation are accessible within your client Search Console.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-zinc-400 font-serif italic">
              Google advises site owners to follow standard technical and content quality practices for AI features. Performance measurement approaches align with standard Webmaster and Search Console reporting.
            </p>
          </section>

          {/* 8. High-Trust Transparency Section */}
          <section id="transparency" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Service Scope &amp; Boundaries</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">Radical transparency on suitability, testing parameters, and service limitations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Who This Is For */}
              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm font-soehne-breit">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>Who This Is For</span>
                </div>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-serif leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Businesses with solid organic SEO visibility that are missing or misrepresented in AI search.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Multi-location service providers with inconsistent address or service details online.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Marketing teams needing an auditable AI search baseline before modifying strategy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Perth businesses seeking local relevance without committing to ongoing agency retainers.</span>
                  </li>
                </ul>
              </div>

              {/* What We Test */}
              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-purple-300 font-bold text-sm font-soehne-breit">
                  <Search className="w-4 h-4 text-purple-400" />
                  <span>What We Test</span>
                </div>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-serif leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>&quot;Best [service] in Perth&quot; and suburb-level regional intent prompts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Problem-led commercial buyer questions (&quot;Who provides X in Perth?&quot;).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Service comparisons, pricing queries, and eligibility requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Branded queries assessing factual accuracy and citation sources.</span>
                  </li>
                </ul>
              </div>

              {/* What GEO Cannot Do */}
              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm font-soehne-breit">
                  <XCircle className="w-4 h-4 text-amber-400" />
                  <span>What GEO Cannot Do</span>
                </div>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-serif leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">•</span>
                    <span>Cannot force ChatGPT, Google, or Perplexity to cite your website.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">•</span>
                    <span>Cannot compensate for unclear service offerings, weak proof, or poor technical foundations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">•</span>
                    <span>Should not replace core SEO, paid acquisition, reputation management, or conversion optimisation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 9. FAQ Accordion Section */}
          <section id="faq" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently Asked Questions</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">Direct answers to common questions about AEObility GEO services.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-white/10 rounded-xl bg-zinc-950/80 overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-white hover:text-cyan-300 font-soehne-breit focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
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

          {/* 10. Direct Contact / Enquiry Form Section */}
          <section id="geo-contact-form" className="border-t border-white/10 pt-16 text-center space-y-8 scroll-mt-24">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Send a GEO Enquiry</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Tell us about your business services and AI search priorities. We will review your details and confirm the scope and investment before you commit.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-1">
                <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>You will speak with an AEObility specialist based in Perth.</span>
              </div>
            </div>

            {/* Inline Contact Form */}
            <div className="max-w-xl mx-auto bg-zinc-950/90 border border-white/10 p-6 sm:p-8 rounded-2xl text-left shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-2xl -z-10" />
              <div className="flex items-center justify-between gap-4 mb-1.5">
                <h3 className="text-xl font-bold text-white font-soehne-breit">Discuss Your GEO Priority</h3>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
                  Fixed Scope
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-serif mb-6 leading-relaxed">
                Select the diagnostic or sprint option you are considering, or select &quot;Help me decide&quot;.
              </p>

              {contactSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">GEO Enquiry Received</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you for reaching out. Our AEObility team will review your website details and get in touch within 24 business hours.
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
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="geo-email">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="geo-email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="sarah@example.com.au"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="geo-website">
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="geo-website"
                        required
                        value={contactData.website}
                        onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                        placeholder="https://example.com.au"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="geo-service">
                        Option Under Consideration
                      </label>
                      <select
                        id="geo-service"
                        value={contactData.serviceType}
                        onChange={(e) => setContactData({ ...contactData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400"
                      >
                        <option value="geo-diagnostic">GEO Visibility Diagnostic ($995 AUD ex. GST)</option>
                        <option value="s1-citation">Sprint S1: Business Facts Clean-Up ($495 AUD ex. GST)</option>
                        <option value="s2-service-page">Sprint S2: AI-Ready Service Page ($495 AUD ex. GST)</option>
                        <option value="s3-entity-arch">Sprint S3: Local Entity Architecture ($695 AUD ex. GST)</option>
                        <option value="s4-schema-val">Sprint S4: Schema Validation ($495 AUD ex. GST)</option>
                        <option value="s5-reporting-setup">Sprint S5: AI Reporting Setup ($495 AUD ex. GST)</option>
                        <option value="foundation">Foundation Implementation (From $3,195 AUD ex. GST)</option>
                        <option value="unsure">Not sure yet — Help me decide</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="geo-message">
                      Details or Buyer Questions to Test
                    </label>
                    <textarea
                      id="geo-message"
                      rows={3}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder="Tell us about your services, locations, or current AI visibility concerns..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs hover:scale-[1.01] transition-transform shadow-[0_0_15px_rgba(0,205,216,0.3)] cursor-pointer"
                  >
                    Submit Enquiry
                  </button>

                  <p className="text-[10px] text-zinc-400 text-center font-mono pt-1">
                    AEObility respects your privacy. Zero ongoing contract lock-in.
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
