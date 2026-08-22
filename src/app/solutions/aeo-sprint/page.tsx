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
import { 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Rocket, 
  FileCode, 
  FileText, 
  Layers, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Code, 
  Info, 
  HelpCircle, 
  ChevronDown, 
  Users,
  Cpu,
  Boxes
} from 'lucide-react';

export const SPRINT_INTERNAL_LINKS = [
  {
    targetSlug: "/solutions/aeo-blueprint",
    anchorText: "AEObility Blueprint strategic audit",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/aeo/procedures",
    anchorText: "AEO Services & Procedures",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions",
    anchorText: "current service pricing",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function AEOSprintPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'sprint_page_contact_form',
      lead_type: 'sprint_enquiry',
      value: 1,
    });
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactData({ name: '', email: '', website: '', message: '' });
    }, 6000);
  };

  const faqs = [
    {
      question: "Do I need the Blueprint before booking a Micro-Sprint?",
      answer: "No. If you already know the specific issue or priority page you want addressed, you can book a Micro-Sprint directly. If you need help identifying and prioritising website gaps, start with the AEObility Blueprint."
    },
    {
      question: "What is included in a $495 Micro-Sprint?",
      answer: "Each $495 Micro-Sprint focuses on one defined asset: either a Service/Location Schema implementation, a single-page content rewrite into atomic answer blocks, or passage-level chunking for a priority page."
    },
    {
      question: "What is the turnaround time for a Technical Sprint?",
      answer: "Most Micro-Sprints are delivered within 4–5 business days once we receive access and required business information. Foundation Implementation engagements are delivered over 4–5 working days across a four-week period."
    },
    {
      question: "Can my in-house team or developer implement the code?",
      answer: "Yes. All sprint code, schema graphs, and content modules are delivered as clean, developer-ready assets. You can implement them internally or ask AEObility to handle deployment."
    },
    {
      question: "How does the Blueprint fee credit apply to Foundation Implementation?",
      answer: "If you have completed the AEObility Blueprint, your full $995 fee is credited back when you book Foundation Implementation ($3,195 AUD ex. GST baseline) within 60 days of Blueprint handover."
    },
    {
      question: "Are there any ongoing retainers or lock-in contracts?",
      answer: "No. All AEObility Technical Sprints are strictly fixed-price with defined deliverables and no ongoing contracts."
    }
  ];

  const microSprints = [
    {
      icon: <FileCode className="w-6 h-6 text-aeo-cyan" />,
      title: "Service or Location Schema Sprint",
      code: "SS1",
      price: "$495 AUD",
      priceSub: "ex. GST",
      scope: "One key service or local page",
      description: "Programmatic implementation of nested JSON-LD schema (Service, LocalBusiness, FAQPage) establishing clear entity connections for search platforms.",
      badge: "S1: Schema & Semantic Mapping"
    },
    {
      icon: <FileText className="w-6 h-6 text-aeo-purple" />,
      title: "Single-Page Content Sprint",
      code: "SS2",
      price: "$495 AUD",
      priceSub: "ex. GST",
      scope: "One priority client-facing page",
      description: "Refactoring raw page text into clear, answer-ready copy blocks formatted to match the questions target customers are asking.",
      badge: "S2: Atomic Answer Blocks"
    },
    {
      icon: <Layers className="w-6 h-6 text-aeo-cyan" />,
      title: "Passage-Level Chunking & Intent Mapping",
      code: "SS3",
      price: "$495 AUD",
      priceSub: "ex. GST",
      scope: "One critical landing page",
      description: "Structuring headings, sub-headers, and content sections into scannable chunks aligned to user search intent and topic authority.",
      badge: "Passage Extraction"
    }
  ];

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.aeobility.com.au/solutions/aeo-sprint#webpage",
        "url": "https://www.aeobility.com.au/solutions/aeo-sprint",
        "name": "AEO Technical Sprints & Schema Deployments | AEObility",
        "description": "Focused, fixed-scope implementation for your website, structured data and priority service pages. Micro-Sprints from $495 AUD ex. GST.",
        "inLanguage": "en-AU",
        "isPartOf": {
          "@id": "https://www.aeobility.com.au/#website"
        },
        "about": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "breadcrumb": {
          "@id": "https://www.aeobility.com.au/solutions/aeo-sprint#breadcrumb"
        },
        "mainEntity": {
          "@id": "https://www.aeobility.com.au/solutions/aeo-sprint#service"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aeobility.com.au/solutions/aeo-sprint#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.aeobility.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Solutions",
            "item": "https://www.aeobility.com.au/solutions"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AEO Technical Sprints",
            "item": "https://www.aeobility.com.au/solutions/aeo-sprint"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.aeobility.com.au/solutions/aeo-sprint#service",
        "name": "AEObility Technical Sprints",
        "alternateName": "SS1-SS4-MICRO",
        "description": "Focused, fixed-scope implementation for website code, structured data schema, and priority page rewrites.",
        "provider": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Schema Sprint",
            "sku": "SS1",
            "price": "495.00",
            "priceCurrency": "AUD",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "valueAddedTaxIncluded": false,
              "description": "Excluding GST"
            }
          },
          {
            "@type": "Offer",
            "name": "Content Sprint",
            "sku": "SS2",
            "price": "495.00",
            "priceCurrency": "AUD",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "valueAddedTaxIncluded": false,
              "description": "Excluding GST"
            }
          },
          {
            "@type": "Offer",
            "name": "Foundation Implementation",
            "sku": "SS1-SS4-MACRO",
            "price": "3195.00",
            "priceCurrency": "AUD",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "valueAddedTaxIncluded": false,
              "description": "Excluding GST; $995 Blueprint credit applicable"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.aeobility.com.au/solutions/aeo-sprint#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

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

      <main className="flex-grow w-full py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-20">

          {/* 1. Hero Block */}
          <section className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <Rocket className="w-4 h-4 text-aeo-cyan" />
              <span>Fixed-Scope Implementation Sprints</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              AEO Technical Sprints
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Focused, fixed-scope execution for your website, structured data and priority service pages. No long-term contracts.
              </p>
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>Foundation from $3,195 AUD ex. GST</span>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)] my-8 group">
              <Image
                src="/aeo-services-and-geo-marketing_AEObility.webp"
                alt="AEO Technical Sprints and Schema Deployments by AEObility"
                width={1200}
                height={800}
                className="w-full h-auto object-cover opacity-85 transition-opacity duration-300 group-hover:opacity-95"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-6 inset-x-6 z-10 p-6 rounded-2xl bg-zinc-950/80 border border-white/15 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
                <div className="text-left space-y-1">
                  <span className="text-xs font-mono text-purple-300 font-bold block uppercase tracking-wider">Fast Turnaround (4–5 Days)</span>
                  <span className="text-sm font-semibold text-white font-serif block">Fix a single priority or build a full foundation</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <Link
                    href="/contact?service=sprint"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.4)] cursor-pointer shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-black" />
                    <span>Discuss a Technical Sprint</span>
                  </Link>
                  <Link
                    href="/diagnostic"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-white font-semibold text-sm transition-all duration-300 hover:bg-zinc-800 cursor-pointer shrink-0"
                  >
                    <span>Run free scan</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Not sure whether you need a single micro-sprint or Foundation Implementation? We will help you choose the right starting point.
            </p>
          </section>

          {/* 2. Micro-Sprints Catalog Grid (Three Clean Cards) */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Micro-Sprint Catalog</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Fixed-scope technical fixes for individual pages and schema assets.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {microSprints.map((sprint, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 bg-black border border-white/10 rounded-xl shrink-0">
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
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>{sprint.badge}</span>
                    <span className="text-cyan-400 font-medium">4–5 Days</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Building Blocks Reassurance (S1 & S2 Focus) */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">Built on Core Engineering Foundations</strong>
                  <span>These sprints use the same engineering foundations as our Schema & Semantic Mapping (S1) and Atomic Answer Blocks (S2) work. You get focused fixes without needing a full multi-week engagement. Learn more about our <Link href="/services/aeo/procedures" className="text-cyan-400 hover:underline font-medium">AEO Services & Procedures</Link>.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Foundation Tier Upgrade Block */}
          <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-purple-500/30 rounded-2xl p-8 space-y-6 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                  <Boxes className="w-4 h-4 text-purple-400" />
                  <span>Comprehensive Implementation Tier</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-soehne-breit">
                  Foundation Implementation
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif">
                  For businesses with multi-page, multi-issue priorities. Combines agreed improvements across website technical setup, priority pages, internal linking structures, and local signals.
                </p>
                <div className="p-4 bg-black/60 border border-white/10 rounded-xl text-xs text-zinc-300 font-serif leading-relaxed">
                  <strong className="text-cyan-300 font-mono block mb-1">Blueprint Credit Eligible:</strong>
                  If you have completed the <Link href="/solutions/aeo-blueprint" className="text-cyan-400 hover:underline font-medium">AEObility Blueprint strategic audit</Link>, your full $995 fee is credited when you book Foundation Implementation ($3,195 AUD ex. GST baseline) within 60 days of handover. Review <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">current service pricing</Link>.
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end justify-between space-y-4 shrink-0 w-full md:w-auto">
                <div className="text-left md:text-right">
                  <span className="text-2xl font-extrabold text-cyan-300 font-mono block">From $3,195 AUD</span>
                  <span className="text-xs text-zinc-400 font-mono">ex. GST | 4-Week Schedule</span>
                </div>
                <Link
                  href="/contact?service=foundation"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Discuss Foundation Tier</span>
                </Link>
              </div>
            </div>
          </section>

          {/* 4. "How Sprints Are Deployed" 3-Step Strip */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How Sprints Are Deployed</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">A practical 3-step execution framework designed for clarity and speed.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 text-left relative">
                <span className="text-2xl font-extrabold text-cyan-400 font-mono block">01</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">Scope selection</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-serif">We clarify and agree on the exact page, schema or content priority before work begins.</p>
              </div>

              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 text-left relative">
                <span className="text-2xl font-extrabold text-purple-400 font-mono block">02</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">Active implementation</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-serif">We build and refactor your website or schema during dedicated engineering windows.</p>
              </div>

              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 text-left relative">
                <span className="text-2xl font-extrabold text-cyan-400 font-mono block">03</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">Validation and handover</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-serif">We validate the changes and hand over clean, ready-to-use assets and documentation.</p>
              </div>
            </div>

            {/* Handover & Developer-Ready Callout */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">Use your sprint outcomes your way</strong>
                  <span>You can take your sprint code, schema graphs, and implementation plan to your in-house team or developer, or ask AEObility to implement the agreed priorities.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Full FAQ Accordion Block */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about AEObility Technical Sprints.</p>
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

          {/* 6. Scalable Team Conversion Block & Direct Contact Form */}
          <section className="border-t border-white/10 pt-16 text-center space-y-8">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Discuss a Technical Sprint</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Tell us about the specific issue or priority page you want to fix. We will confirm the scope and price before you commit.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-1">
                <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Speak with an AEObility specialist about your technical priorities. Where helpful, founder Vince Baker may join the strategy session.</span>
              </div>
            </div>

            {/* Inline Sprint Direct Contact Form */}
            <div className="max-w-xl mx-auto bg-zinc-950/90 border border-white/10 p-6 sm:p-8 rounded-2xl text-left shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-2xl -z-10" />
              <div className="flex items-center justify-between gap-4 mb-1.5">
                <h3 className="text-xl font-bold text-white font-soehne-breit">Discuss a Technical Sprint</h3>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
                  Fixed-Scope Sprint
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-serif mb-6 leading-relaxed">
                Submit your details below to discuss a $495 Micro-Sprint or Foundation Implementation.
              </p>

              {contactSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Sprint Enquiry Received</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you for reaching out. Our AEObility technical team will review your details and get in touch within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <input type="hidden" name="service" value="sprint" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="sprint-name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="sprint-name"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Vince Baker"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="sprint-email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="sprint-email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="vince@example.com.au"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="sprint-website">
                      Website URL (Optional)
                    </label>
                    <input
                      type="text"
                      id="sprint-website"
                      value={contactData.website}
                      onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="example.com.au"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="sprint-message">
                      Priority Page or Issue to Address
                    </label>
                    <textarea
                      id="sprint-message"
                      required
                      rows={3}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="e.g. Schema implementation for service page or content rewrite..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                  >
                    <span>Submit Sprint Enquiry</span>
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
