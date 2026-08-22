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
  Boxes,
  FileCheck
} from 'lucide-react';

export const TECHNICAL_SPRINT_INTERNAL_LINKS = [
  {
    targetSlug: "/services/geo-marketing",
    anchorText: "local business profile signals",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions",
    anchorText: "uniform pricing database",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-blueprint",
    anchorText: "website visibility audit and 90-day strategic roadmap",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function AEOSprintPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedSprintType, setSelectedSprintType] = useState('schema');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    website: '',
    serviceType: 'schema',
    message: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const selectSprintForForm = (typeKey: string) => {
    setSelectedSprintType(typeKey);
    setContactData(prev => ({ ...prev, serviceType: typeKey }));
    const formElement = document.getElementById('sprint-contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'sprint_page_contact_form',
      lead_type: 'sprint_enquiry',
      service_selected: contactData.serviceType,
      value: 1,
    });
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactData({ name: '', email: '', website: '', serviceType: 'schema', message: '' });
    }, 6000);
  };

  const faqs = [
    {
      question: "What is included in a $495 Micro-Sprint?",
      answer: "Each Micro-Sprint addresses one defined page, schema or content priority. Before work begins, we confirm the scope, deliverables and information or access required for implementation."
    },
    {
      question: "What is the turnaround time for a Technical Sprint?",
      answer: "Most Micro-Sprints are delivered within 4–5 business days once the scope, required access and source information have been confirmed. Foundation Implementation is delivered across a four-week period."
    },
    {
      question: "Can my in-house team or developer implement the code?",
      answer: "Yes. Where relevant, we provide the completed schema, content recommendations, implementation notes and handover documentation for your internal team or developer. If preferred, AEObility can implement the agreed work."
    },
    {
      question: "How does the Blueprint fee credit apply to Foundation Implementation?",
      answer: "If you have completed the AEObility Blueprint, the full $995 fee can be credited towards Foundation Implementation booked within 60 days of handover. The credit does not apply to standalone Micro-Sprints and cannot be exchanged for cash."
    },
    {
      question: "Are there any ongoing retainers or lock-in contracts?",
      answer: "No. Micro-Sprints and Foundation Implementation are scoped as individual engagements. You receive the agreed deliverables and handover documentation, with any further work discussed separately."
    },
    {
      question: "What access is required to start a sprint?",
      answer: "Depending on the sprint type, we may need temporary CMS or staging access, access to current page content, or business details for schema markup. All access requirements are confirmed before work begins."
    }
  ];

  const microSprints = [
    {
      key: "schema",
      icon: <FileCode className="w-6 h-6 text-aeo-cyan" />,
      title: "Service or Location Schema Sprint",
      code: "SS1",
      price: "$495 AUD",
      priceSub: "ex. GST",
      scope: "One key service or location page",
      description: "Add or improve structured data for one important service or location page, helping search platforms interpret your business details more consistently.",
      techNote: "Technical detail: JSON-LD implementation may include Service, LocalBusiness or FAQPage markup where appropriate.",
      whenToChoose: "Choose this when you need structured data added to a key service or location page."
    },
    {
      key: "content",
      icon: <FileText className="w-6 h-6 text-aeo-purple" />,
      title: "Single-Page Content Sprint",
      code: "SS2",
      price: "$495 AUD",
      priceSub: "ex. GST",
      scope: "One priority client-facing page",
      description: "Rewrite one priority page so its services, answers and proof points are easier for customers to scan and understand.",
      techNote: "Technical detail: Refactors page copy into clear answer blocks formatted to match customer search questions.",
      whenToChoose: "Choose this when the page content is unclear, incomplete or not answering customer questions well."
    },
    {
      key: "structure",
      icon: <Layers className="w-6 h-6 text-aeo-cyan" />,
      title: "Page Structure & Search Intent Sprint",
      code: "SS3",
      price: "$495 AUD",
      priceSub: "ex. GST",
      scope: "One critical landing page",
      description: "Structure headings, sub-headers and content sections around customer search intent and clear information hierarchy.",
      techNote: "Technical focus: passage structure, headings and search-intent mapping.",
      whenToChoose: "Choose this when the page has useful content, but its headings, sections and information hierarchy need restructuring."
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
            "name": "Service or Location Schema Sprint",
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
            "name": "Single-Page Content Sprint",
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
            "name": "Page Structure & Search Intent Sprint",
            "sku": "SS3",
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
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. Hero Block with Sleek Featured Image Backdrop & Overlaid CTAs */}
          <section className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <Rocket className="w-4 h-4 text-aeo-cyan" />
              <span>Rapid Implementation Sprints</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              AEO Technical <span className="text-gradient-aeo">Sprints</span>
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Focused improvements for your website, structured data and priority service pages. Work on one defined priority without committing to a long-term retainer.
              </p>
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>Foundation Implementation from $3,195 AUD ex. GST</span>
              </div>
            </div>

            {/* Hero Banner with Featured 1200x800 WebP Image Backdrop & Code Block Terminal Widget */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[460px]">
              <Image
                src="/aeo-technical-sprints_AEObility.webp"
                alt="AEO Technical Sprints and Schema Deployments by AEObility"
                width={1200}
                height={800}
                className="w-full h-[460px] object-cover opacity-20"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/80 to-transparent" />

              {/* Code block terminal representation widget */}
              <div className="absolute inset-x-4 top-4 bottom-24 z-10 rounded-xl border border-white/15 bg-neutral-950/95 p-5 shadow-2xl font-mono text-xs text-left overflow-hidden backdrop-blur-md">
                <div className="flex items-center gap-1.5 border-b border-white/10 pb-2.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  <span className="text-[11px] text-white/50 ml-2">aeo-sprint-deployment-agent (~/bin)</span>
                </div>
                <div className="space-y-1.5 text-white/80 text-[11px] leading-relaxed">
                  <p className="text-aeo-cyan animate-pulse">Initializing token optimisation pass...</p>
                  <p className="text-white/40">&gt; Building local JSON-LD graph relations...</p>
                  <div className="p-2.5 bg-black/60 border border-white/10 rounded-lg space-y-0.5">
                    <p className="text-aeo-purple font-semibold">{"{"}</p>
                    <p className="text-aeo-purple pl-4">&quot;@context&quot;: &quot;https://schema.org&quot;,</p>
                    <p className="text-aeo-purple pl-4">&quot;@type&quot;: &quot;Service&quot;,</p>
                    <p className="text-aeo-purple pl-4">&quot;name&quot;: &quot;Local Business Authority Map&quot;,</p>
                    <p className="text-aeo-purple pl-4">&quot;areaServed&quot;: &quot;Perth, WA&quot;</p>
                    <p className="text-aeo-purple">{"}"}</p>
                  </div>
                  <p className="text-green-400 font-semibold">&gt; Schema JSON Validation: OK (Passage-level extraction active)</p>
                  <p className="text-white/40">&gt; Initiating programmatic code deployments...</p>
                </div>
              </div>

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 inset-x-3 z-20 p-4 rounded-xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5">
                  <span className="text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix a Single Priority or Build a Foundation</span>
                  <span className="text-xs text-zinc-300 font-serif block">Typical delivery: 4–5 business days from confirmed scope and access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <Link
                    href="/contact?service=sprint"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.4)] cursor-pointer shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-black" />
                    <span>Discuss a Technical Sprint</span>
                  </Link>
                  <Link
                    href="/diagnostic"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-white font-semibold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer shrink-0"
                  >
                    <span>Run a free visibility scan</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Not sure whether you need a single micro-sprint or Foundation Implementation? We will help you choose the right starting point.
            </p>
          </section>

          {/* 2. Recommended Decision Strip (Positioned ABOVE Micro-Sprint Catalogue) */}
          <section className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white font-soehne-breit">Which option fits your priority?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-serif pt-1">
              <div className="p-3.5 bg-black/60 border border-white/10 rounded-xl space-y-1">
                <span className="text-cyan-300 font-bold block font-mono">Know exactly what needs fixing?</span>
                <span className="text-zinc-300 block">Choose a Micro-Sprint from $495 ex. GST.</span>
              </div>
              <div className="p-3.5 bg-black/60 border border-white/10 rounded-xl space-y-1">
                <span className="text-purple-300 font-bold block font-mono">Need several connected fixes?</span>
                <span className="text-zinc-300 block">
                  Discuss <Link href="/solutions" className="text-purple-400 hover:underline">Foundation Implementation from $3,195 ex. GST</Link>.
                </span>
              </div>
              <div className="p-3.5 bg-black/60 border border-white/10 rounded-xl space-y-1">
                <span className="text-cyan-300 font-bold block font-mono">Unsure what is limiting visibility?</span>
                <span className="text-zinc-300 block">
                  <Link href="/solutions/aeo-blueprint" className="text-cyan-400 hover:underline font-medium">Start with a comprehensive website visibility audit and 90-day strategic roadmap</Link> ($995 AUD).
                </span>
              </div>
            </div>
          </section>

          {/* 3. Micro-Sprints Catalog Grid (Three Clean Cards with Individual CTAs) */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Micro-Sprint Catalogue</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Choose one defined improvement for a priority page, structured-data asset or <Link href="/services/geo-marketing" className="text-cyan-400 hover:underline font-medium">local business profile signals</Link>.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {microSprints.map((sprint, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col justify-between space-y-5 hover:border-cyan-500/40 transition-all duration-300 group">
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
                      <span>Discuss this Micro-Sprint</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro-Sprint Scope & Exclusion Qualification Box */}
            <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-5 text-xs text-zinc-300 font-serif leading-relaxed space-y-2 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span>Every Micro-Sprint includes:</span>
              </div>
              <p>
                One agreed priority page or asset, implementation or rewrite work, validation checks, a summary of completed updates, and handover notes. Additional pages, substantial revision cycles or unrelated technical issues are scoped separately. Typical delivery: 4–5 business days from confirmed scope and access.
              </p>
            </div>
          </section>

          {/* 4. Foundation Implementation Upgrade Block */}
          <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-purple-500/30 rounded-2xl p-8 space-y-6 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                  <Boxes className="w-4 h-4 text-purple-400" />
                  <span>Multi-Page Implementation Tier</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-soehne-breit">
                  Foundation Implementation
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif">
                  For businesses with multi-page, multi-issue priorities. Combines agreed improvements across website technical setup, priority pages, internal linking structures, and local signals. Final pricing depends on the number of pages, implementation requirements and agreed deliverables. Scope is confirmed before work begins.
                </p>

                {/* Blueprint Credit Block */}
                <div className="p-4 bg-black/60 border border-white/10 rounded-xl text-xs text-zinc-300 font-serif leading-relaxed">
                  <strong className="text-cyan-300 font-mono block mb-1">Completed the Blueprint?</strong>
                  If you book Foundation Implementation within 60 days of your Blueprint handover, we will apply the full $995 Blueprint fee to the Foundation work. The credit does not apply to standalone Micro-Sprints. Access our <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">uniform pricing database</Link> for full engagement rates.
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
                  <span>Discuss Foundation Implementation</span>
                </Link>
              </div>
            </div>
          </section>

          {/* 5. "How Sprints Are Deployed" 3-Step Process */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Three-Step Deployment Process</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">A clear, transparent execution workflow designed for speed and quality.</p>
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
                <p className="text-xs text-zinc-400 leading-relaxed font-serif">We make the agreed changes to your page or structured data during the scheduled delivery window.</p>
              </div>

              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 text-left relative">
                <span className="text-2xl font-extrabold text-cyan-400 font-mono block">03</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">Validation and handover</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-serif">We check the changes, explain what was completed and provide the files or notes your team needs next.</p>
              </div>
            </div>

            {/* Ownership & Handover Statement */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">You own the agreed deliverables</strong>
                  <span>Take the completed work, implementation notes and handover documentation to your internal team or developer, or ask AEObility to complete the implementation.</span>
                </div>
              </div>
            </div>

            {/* Technical Building Blocks Reassurance (S1 & S2 Focus) */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">Built on Core Engineering Foundations</strong>
                  <span>These sprints use the same engineering foundations as our Schema & Semantic Mapping (S1) and Atomic Answer Blocks (S2) work. Learn more about our <Link href="/services/aeo/procedures" className="text-cyan-400 hover:underline font-medium">AEO Services & Procedures</Link>.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Full FAQ Accordion Block */}
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

          {/* 7. Scalable Team Conversion Block & Direct Contact Form */}
          <section id="sprint-contact-form" className="border-t border-white/10 pt-16 text-center space-y-8">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Send Sprint Enquiry</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Tell us about the specific issue or priority page you want to fix. We will confirm the scope and price before you commit.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-1">
                <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>You will speak with an AEObility specialist. Vince Baker, AEObility’s founder, is available for more complex scopes or strategic questions.</span>
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
                Select your preferred sprint option below to confirm scope and timing.
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
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="sprint-service-type">
                      What would you like to discuss?
                    </label>
                    <select
                      id="sprint-service-type"
                      value={contactData.serviceType}
                      onChange={(e) => setContactData({ ...contactData, serviceType: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="schema">Service or Location Schema Sprint ($495 AUD)</option>
                      <option value="content">Single-Page Content Sprint ($495 AUD)</option>
                      <option value="structure">Page Structure & Search Intent Sprint ($495 AUD)</option>
                      <option value="foundation">Foundation Implementation (from $3,195 AUD)</option>
                      <option value="unsure">Not sure yet — Help me decide</option>
                    </select>
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
                      placeholder="Tell us about the priority page or issue you want to address..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                  >
                    <span>Send Sprint Enquiry</span>
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
