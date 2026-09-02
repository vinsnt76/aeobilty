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
import { getAeoBlueprintSchemaGraph } from '@/lib/schema/aeoBlueprint';
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  ShieldCheck, 
  Calendar, 
  Layers, 
  BarChart3, 
  Map, 
  FileText, 
  ChevronDown, 
  Clock, 
  Info, 
  HelpCircle, 
  Award, 
  Code, 
  Users, 
  Search, 
  Target, 
  Cpu, 
  CheckSquare,
  FileCheck,
  Boxes,
  Rocket
} from 'lucide-react';

export const BLUEPRINT_INTERNAL_LINKS = [
  {
    targetSlug: "/solutions/aeo-sprint",
    anchorText: "focused micro-sprints",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/geo-marketing",
    anchorText: "local business profiles",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions",
    anchorText: "View current service pricing and scope",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function AEOBlueprintPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'blueprint_page_contact_form',
      lead_type: 'blueprint_enquiry',
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
      question: "What is included in the AEObility Blueprint?",
      answer: "The Blueprint includes a website visibility assessment, structured-data review, visibility scorecard, prioritised 90-day action roadmap, and an audit of key service and content pages. You receive practical recommendations for technical gap analysis and entity optimisation."
    },
    {
      question: "How long does the Blueprint take to deliver?",
      answer: "Most Blueprints are completed within 7–10 business days once we have confirmed the required information and access. Larger or multi-location businesses may require a custom scope, which we will confirm before work begins."
    },
    {
      question: "Can I implement the Blueprint myself or give it to my developer?",
      answer: "Yes. Your Blueprint is designed to be actionable whether you implement the recommendations internally, with a developer or agency partner, or ask AEObility to execute implementation. It includes clear priorities and technical handover notes."
    },
    {
      question: "Does the Blueprint include implementation work?",
      answer: "No. The Blueprint is a standalone diagnostic audit and strategic roadmap. Technical implementation, structured-data deployment, content rewrites, citation updates, and ongoing support are scoped separately as Micro-Sprints or Foundation Implementation."
    },
    {
      question: "How does the 100% fee credit work?",
      answer: "If you book Foundation Implementation within 60 days of receiving your Blueprint, we apply the full $995 Blueprint fee to the Foundation work. The credit applies to Foundation Implementation only, is applied to the agreed implementation fee and cannot be exchanged for cash."
    },
    {
      question: "Is the Blueprint suitable for agencies or multi-location businesses?",
      answer: "Yes. We can scope the Blueprint for agency partners, internal marketing teams, and multi-location businesses. Contact us before booking so we can confirm the scope and deliverables."
    }
  ];

  const deliverables = [
    {
      icon: <Layers className="w-6 h-6 text-aeo-cyan" />,
      title: "Website & structured-data review",
      description: "We perform a technical gap analysis and entity optimisation review to identify missing signals that make your business harder for search platforms to interpret."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-aeo-purple" />,
      title: "Visibility scorecard",
      description: "A clear scorecard evaluating your digital footprint across Search, Maps and AI-assisted search tools, highlighting practical visibility opportunities."
    },
    {
      icon: <Map className="w-6 h-6 text-aeo-cyan" />,
      title: "90-day execution roadmap",
      description: "A step-by-step priority roadmap mapping out the most impactful website, content, and local visibility improvements tailored to your business goals."
    },
    {
      icon: <FileText className="w-6 h-6 text-aeo-purple" />,
      title: "Content & service-information audit",
      description: "An analysis of your core service descriptions and client-facing pages to ensure they match high-intent customer search queries."
    }
  ];

  const jsonLdGraph = getAeoBlueprintSchemaGraph(faqs);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Unified JSON-LD Connected Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.solutions} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. Hero Block with Clean Featured WebP Image Backdrop & Overlaid CTAs */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Strategic Diagnostic Audit &amp; 90-Day Roadmap</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              The AEObility <span className="text-gradient-aeo">Blueprint</span>
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed font-sans">
                Get a deep technical audit and a practical 90-day strategic roadmap for your business. 100% of your $995 Blueprint fee is credited toward eligible implementation sprints.
              </p>
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Standalone Audit: $995 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>100% Fee Credited to Eligible Sprints</span>
              </div>
            </div>

            {/* Featured 1200x800 WebP Image Hero Banner with Overlaid CTAs */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/solutions/aeo-blueprint-strategic-audit_AEObility.webp"
                alt="AEObility Blueprint technical audit interface displaying digital presence review, entity scorecard, and 90-day action plan timeline."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-3.5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Audit your digital footprint &amp; get a 90-day roadmap</span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 font-serif block">Typical delivery: 7–10 business days from confirmed access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <a
                    href="#blueprint-contact-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Order $995 Blueprint</span>
                  </a>
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
              Know what needs fixing? Explore our <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">focused micro-sprints</Link> from $495 ex. GST or <Link href="/services/geo-marketing" className="text-cyan-400 hover:underline font-medium">local business profiles</Link>.
            </p>
          </section>

          {/* 2. Recommended Decision Strip */}
          <section id="decision-strip" className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 space-y-3 scroll-mt-24">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <h2 className="text-base font-bold text-white font-soehne-breit">Which option fits your current priority?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-serif pt-1">
              <div className="p-4 bg-black/60 border border-cyan-500/40 rounded-xl space-y-1">
                <span className="text-cyan-300 font-bold block font-mono">Unsure what limits search visibility?</span>
                <span className="text-zinc-300 block">Start with the standalone AEObility Blueprint ($995 ex. GST).</span>
              </div>
              <div className="p-4 bg-black/60 border border-white/10 rounded-xl space-y-1">
                <span className="text-purple-300 font-bold block font-mono">Know the single priority issue?</span>
                <span className="text-zinc-300 block">
                  Choose a <Link href="/solutions/aeo-sprint" className="text-purple-400 hover:underline font-medium">Micro-Sprint from $495 ex. GST</Link>.
                </span>
              </div>
              <div className="p-4 bg-black/60 border border-white/10 rounded-xl space-y-1">
                <span className="text-cyan-300 font-bold block font-mono">Need connected implementation?</span>
                <span className="text-zinc-300 block">
                  Discuss <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">Foundation Implementation from $3,195 ex. GST</Link>.
                </span>
              </div>
            </div>
          </section>

          {/* 3. Deliverables Grid (4 Self-Contained Cards with Passage @id Anchors) */}
          <section id="bpstrat-deliverables" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">What is included in your Blueprint</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Every Blueprint provides four core audit deliverables to guide your next 90 days.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((item, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 hover:border-cyan-500/40 transition">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">{item.title}</h3>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Clean 3-Tier Service Comparison Matrix Table */}
            <div id="blueprint-comparison" className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-md scroll-mt-24">
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
                  <tr className="bg-cyan-950/20 border-l-2 border-l-cyan-400 hover:bg-cyan-950/30 transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEObility Blueprint</td>
                    <td className="p-3.5 sm:p-4">Full Digital Audit &amp; 90-Day Roadmap</td>
                    <td className="p-3.5 sm:p-4">Unclear what is limiting search visibility</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">$995 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Micro-Sprint Tier</td>
                    <td className="p-3.5 sm:p-4">1 Defined Priority Page / Schema Fix</td>
                    <td className="p-3.5 sm:p-4">Quick fix for one specific issue</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $495 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Foundation Tier</td>
                    <td className="p-3.5 sm:p-4">Multi-Page &amp; Connected Fixes</td>
                    <td className="p-3.5 sm:p-4">Connected improvements across entire site</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $3,195 AUD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Prominently Elevated Blueprint Credit Callout Box */}
            <div id="blueprint-credit-terms" className="p-6 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-cyan-500/30 rounded-2xl text-xs text-zinc-300 font-serif leading-relaxed space-y-2 shadow-lg scroll-mt-24">
              <div className="flex items-center gap-2 text-cyan-300 font-mono text-sm font-bold">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>100% Risk-Reversal Implementation Credit Policy</span>
              </div>
              <p>
                100% of your $995 Blueprint fee is credited toward eligible implementation sprints booked within 60 days of handover. The credit applies to agreed implementation work and cannot be exchanged for cash. View <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">current service pricing and scope</Link>.
              </p>
            </div>

            {/* Deliverables Ownership Statement */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">You own the agreed audit deliverables</strong>
                  <span>Use your completed 90-day roadmap with your internal developer or agency partner, or ask AEObility to implement the agreed changes.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Operational 3-Step Process Flow Pipeline Graphic */}
          <section id="blueprint-process" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Simple 3-Step Operational Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How the Blueprint audit works</h2>
              <p className="text-xs text-white/60 font-serif">Clear sequence from initial digital presence review to strategic walkthrough.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">1</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Digital assessment</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Submit your website URL and confirm business objectives with our audit team.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-purple-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(168,85,247,0.2)]">2</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">7–10 day audit &amp; roadmap</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">We audit your structured data, content clarity, local signals, and technical gap analysis.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">3</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Walkthrough &amp; credit-back</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Receive your 90-day roadmap in a 45-minute walkthrough. 100% of your $995 fee is credited toward eligible implementation sprints.</p>
              </div>
            </div>
          </section>

          {/* 5. Streamlined 12-Column Responsive Form & Enquiry Module */}
          <section id="blueprint-contact-form" className="border-t border-white/10 pt-16 scroll-mt-24">
            <div className="relative isolate max-w-3xl mx-auto bg-slate-900/80 border border-purple-500/25 p-6 sm:p-10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Top Specular Light Catch */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full filter blur-3xl -z-10" />

              <div className="text-center space-y-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Order Strategic Audit</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Order your AEObility Blueprint ($995 ex. GST)</h2>
                <p className="text-xs sm:text-sm text-slate-300 font-serif max-w-xl mx-auto leading-relaxed">
                  Enter your business details below to request your standalone AEObility Blueprint strategic audit and 90-day execution roadmap.
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-mono pt-1">
                  <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>You will speak with an AEObility specialist based in Perth. Complex scopes or strategic requirements may be reviewed by senior AEObility specialists.</span>
                </div>
              </div>

              {contactSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h3 className="font-bold text-white text-base font-soehne-breit">Blueprint order request received</h3>
                  <p className="text-xs text-slate-300 font-serif leading-relaxed">
                    Thank you. Our AEObility strategy team will review your website details and get in touch within 24 business hours to confirm your audit scope.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  {/* Strict 12-Column Grid Layout */}
                  <div className="grid grid-cols-12 gap-4">
                    {/* Store URL Field - Col Span 12 */}
                    <div className="col-span-12 space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono" htmlFor="bp-store-url">
                        Website URL
                      </label>
                      <input
                        type="text"
                        id="bp-store-url"
                        required
                        value={contactData.website}
                        onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                        className="w-full bg-[#080B12] border border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                        placeholder="e.g. mybusiness.com.au"
                      />
                      <p className="text-[11px] text-slate-400 font-serif leading-tight">
                        We check website structure, structured-data markup, content clarity, and local search signals.
                      </p>
                    </div>

                    {/* Full Name Field - Col Span 12 on Mobile, Col Span 6 on Desktop */}
                    <div className="col-span-12 md:col-span-6 space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono" htmlFor="bp-name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="bp-name"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full bg-[#080B12] border border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                        placeholder="e.g. Vince Baker"
                      />
                    </div>

                    {/* Primary Email Field - Col Span 12 on Mobile, Col Span 6 on Desktop */}
                    <div className="col-span-12 md:col-span-6 space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono" htmlFor="bp-email">
                        Primary Email
                      </label>
                      <input
                        type="email"
                        id="bp-email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full bg-[#080B12] border border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                        placeholder="vince@example.com.au"
                      />
                    </div>

                    {/* Service Type Selector */}
                    <div className="col-span-12 space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono" htmlFor="bp-service-type">
                        What would you like to discuss?
                      </label>
                      <select
                        id="bp-service-type"
                        value={contactData.serviceType}
                        onChange={(e) => setContactData({ ...contactData, serviceType: e.target.value })}
                        className="w-full bg-[#080B12] border border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 transition-all font-medium"
                      >
                        <option value="blueprint">AEObility Blueprint Strategic Audit ($995 AUD)</option>
                        <option value="micro-sprint">Micro-Sprint (From $495 AUD)</option>
                        <option value="foundation">Foundation Implementation (From $3,195 AUD)</option>
                        <option value="unsure">Not sure yet — Help me decide</option>
                      </select>
                    </div>

                    {/* Notes Textarea */}
                    <div className="col-span-12 space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono" htmlFor="bp-message">
                        What would you like help with?
                      </label>
                      <textarea
                        id="bp-message"
                        required
                        rows={3}
                        value={contactData.message}
                        onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                        className="w-full bg-[#080B12] border border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 transition-all resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                        placeholder="Tell us about your business goals, key service pages, or visibility priorities..."
                      />
                    </div>

                    <div className="col-span-12">
                      <p className="text-[11px] text-slate-400 font-serif leading-tight">
                        We use your details to deliver your strategic audit and roadmap. We will not add you to marketing communications without your consent.
                      </p>
                    </div>
                  </div>

                  {/* Submission Action Button & In-Line Risk Reversal Banner */}
                  <div className="pt-2 space-y-4">
                    <button
                      type="submit"
                      className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                    >
                      <span>Order $995 Blueprint</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Risk Reversal Banner */}
                    <div className="p-3 bg-black/50 border border-white/10 rounded-xl text-center text-xs text-slate-300 font-serif leading-relaxed">
                      Fixed $995 AUD price. No ongoing retainer. 100% credited towards eligible implementation sprints booked within 60 days.
                    </div>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* 6. FAQ Accordion Section (All 6 Answers Rendered in DOM) */}
          <section id="faq-blueprint" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about the AEObility Blueprint audit.</p>
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
