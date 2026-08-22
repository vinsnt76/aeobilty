'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { ArrowRight, CheckCircle2, Compass, ShieldCheck, Calendar, UserCheck, Layers, BarChart3, Map, FileText, ChevronDown, Clock, Info } from 'lucide-react';
import { PRICING_CONFIG } from '@/lib/brandFacts';

export default function AEOBlueprintPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is included in the AEObility Blueprint?",
      answer: "The Blueprint includes a website and structured-data review, an AI and search visibility scorecard, a 90-day implementation roadmap, and a content and service-information audit."
    },
    {
      question: "How long does the Blueprint take?",
      answer: "Typical turnaround is 7–10 business days from receipt of required website access, local profile permissions, and business information."
    },
    {
      question: "Do you need access to my website or Google Business Profile?",
      answer: "Yes, read-only or administrative access to your website CMS, Google Business Profile, and Search Console helps us evaluate existing technical setup and local signals accurately."
    },
    {
      question: "Does the Blueprint include implementation?",
      answer: "No. The Blueprint is a strategic audit and roadmap. It does not include website development, schema deployment, content rewrites, or citation updates. Implementation can be scoped separately after handover."
    },
    {
      question: "How does the 100% fee credit work?",
      answer: "Your $995 Blueprint fee is credited towards Foundation Implementation or a qualifying implementation package booked within 60 days of your Blueprint handover."
    },
    {
      question: "Is the Blueprint suitable for agencies or multi-location businesses?",
      answer: "Yes. The Blueprint delivers clear, un-jargoned specifications and checklists that internal teams, developers, or external agency partners can execute directly."
    }
  ];

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.aeobility.com.au/#organization",
        "name": "AEObility",
        "legalName": "Trekaboutoz trading as AEObility",
        "url": "https://www.aeobility.com.au",
        "logo": "https://www.aeobility.com.au/Profile-Picture-Vinnie.png",
        "founder": {
          "@type": "Person",
          "name": "Vince Baker",
          "jobTitle": "Founder",
          "url": "https://www.aeobility.com.au/vince-baker"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aeobility.com.au/solutions/aeo-blueprint#webpage",
        "url": "https://www.aeobility.com.au/solutions/aeo-blueprint",
        "name": "The AEObility Blueprint | 90-Day Strategy & Audit",
        "description": "Understand what is limiting your visibility across Search, Maps and AI. Get a practical 90-day action plan for a fixed price of $995 AUD ex. GST.",
        "publisher": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "breadcrumb": {
          "@id": "https://www.aeobility.com.au/solutions/aeo-blueprint#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aeobility.com.au/solutions/aeo-blueprint#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.aeobility.com.au"
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
            "name": "The AEObility Blueprint",
            "item": "https://www.aeobility.com.au/solutions/aeo-blueprint"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.aeobility.com.au/solutions/aeo-blueprint#service",
        "name": "The AEObility Blueprint",
        "identifier": "BPSTRAT",
        "url": "https://www.aeobility.com.au/solutions/aeo-blueprint",
        "description": "A practical audit and 90-day action plan for stronger visibility across Search, Maps and AI. Fixed price of $995 AUD ex. GST.",
        "provider": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "offers": {
          "@type": "Offer",
          "sku": "BPSTRAT",
          "price": `${PRICING_CONFIG.blueprint.price}.00`,
          "priceCurrency": PRICING_CONFIG.currency,
          "priceSpecification": {
            "@type": "PriceSpecification",
            "valueAddedTaxIncluded": false,
            "description": "Excluding GST; credited towards qualifying implementation packages booked within 60 days."
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.aeobility.com.au/solutions/aeo-blueprint#faq",
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

  const deliverables = [
    {
      icon: <Layers className="w-6 h-6 text-aeo-cyan" />,
      title: "Website and structured-data review",
      description: "We identify technical and content gaps that may make your business harder for search platforms to interpret."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-aeo-purple" />,
      title: "Visibility scorecard",
      description: "A clear scorecard evaluating your business across Search, Maps and generative AI platforms, highlighting the most practical opportunities to improve visibility."
    },
    {
      icon: <Map className="w-6 h-6 text-aeo-cyan" />,
      title: "90-day roadmap",
      description: "A step-by-step priority roadmap mapping out the most impactful technical, content and local-visibility adjustments tailored to your business goals."
    },
    {
      icon: <FileText className="w-6 h-6 text-aeo-purple" />,
      title: "Content and service-information audit",
      description: "An analysis of your core service descriptions and client-facing pages to match active customer questions and local user search intents."
    }
  ];

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
          <section className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <Compass className="w-4 h-4 text-aeo-cyan" />
              <span>Strategic Audit (Code: {PRICING_CONFIG.blueprint.code})</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              The AEObility Blueprint
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                A practical audit and 90-day action plan for stronger visibility across Search, Maps and AI.
              </h2>
              <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
                Identify the highest-priority improvements across your website, structured data, business information and key service pages.
              </p>
              <div className="text-lg font-bold text-cyan-300 font-mono pt-1">
                ${PRICING_CONFIG.blueprint.price} AUD <span className="text-xs text-zinc-400 font-normal">ex. GST</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-base transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.3)] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Discuss the Blueprint</span>
              </Link>
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-900 border border-white/15 hover:border-aeo-cyan text-white font-semibold text-base transition-all duration-300 hover:bg-zinc-800 cursor-pointer"
              >
                <span>Run a free visibility scan</span>
                <ArrowRight className="w-4 h-4 text-aeo-cyan" />
              </Link>
            </div>
          </section>

          {/* 2. "Best For" Qualification Strip */}
          <section className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white font-soehne-breit">The Blueprint is best for businesses that:</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-white/80 font-serif">
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Are unsure what is limiting their visibility across Search, Maps or AI platforms.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Have several connected website, local-profile, or content issues to address.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Want an independent, prioritised plan before investing in full implementation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Need a clear scope for internal developers, content teams, or agency partners.</span>
              </li>
            </ul>
          </section>

          {/* 3. Core Deliverables Matrix (Four Responsive Cards) */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">What You Receive in Your Blueprint</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Four practical deliverables that show what to fix first and why it matters.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((item, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 hover:border-aeo-cyan/30 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-black border border-white/10 rounded-xl shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white font-soehne-breit">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* "What is Not Included" Restrained Note */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-4 flex items-start gap-3 text-xs text-zinc-400 font-serif leading-relaxed">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p>
                <strong className="text-white font-semibold">Scope note:</strong> The Blueprint is a strategic audit and roadmap. It does not include website development, schema deployment, content rewrites, citation updates or ongoing monitoring. These can be scoped separately after handover.
              </p>
            </div>
          </section>

          {/* 4. Price and Fee-Credit Terms Banner */}
          <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-cyan-500/30 rounded-2xl p-8 text-center space-y-4 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>100% Fee Credit Terms</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-soehne-breit">
              Fixed Price: ${PRICING_CONFIG.blueprint.price} AUD (ex. GST). No hidden retainers.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed font-serif">
              Your ${PRICING_CONFIG.blueprint.price} Blueprint fee is credited towards Foundation Implementation or a qualifying implementation package booked within 60 days of your Blueprint handover.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 pt-2 border-t border-white/5">
              <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Typical turnaround: 7–10 business days from receipt of required access and business information.</span>
            </div>
          </section>

          {/* 5. Three-Step Process ("How the Blueprint Works") */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How the Blueprint Works</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">From initial discovery to a practical handover, here is how the Blueprint works.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 text-left relative">
                <span className="text-2xl font-extrabold text-cyan-400 font-mono block">01</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">Initial Discovery & Setup</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-serif">We audit your existing local signals, brand claims, and technical structural data.</p>
              </div>

              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 text-left relative">
                <span className="text-2xl font-extrabold text-purple-400 font-mono block">02</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">Review & Strategic Mapping</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-serif">We build your priority roadmap, visibility scorecards, and a 90-day implementation plan.</p>
              </div>

              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 text-left relative">
                <span className="text-2xl font-extrabold text-cyan-400 font-mono block">03</span>
                <h3 className="text-base font-bold text-white font-soehne-breit">Handover & Strategy Session</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-serif">A comprehensive review meeting to hand over your actionable assets and plan next steps.</p>
              </div>
            </div>
          </section>

          {/* 6. Technical Review Section ("What we review in more detail") */}
          <section className="border-t border-white/10 pt-16 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white font-soehne-breit">What we review in more detail</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif leading-relaxed">
                For businesses and agency teams that want the technical detail, the Blueprint can examine:
              </p>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-white/80 font-serif">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Consistency of your key local business details and citations (NAP).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Schema markup syntax, nesting logic, and entity data relationships.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Page structural formatting, FAQ patterns, and information clarity.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Internal links between your key service, location and supporting pages.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 7. FAQ Accordion Block */}
          <section className="border-t border-white/10 pt-16 space-y-8">
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
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-white/5 pt-3 font-serif">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 8. Final Founder-Supported CTA */}
          <section className="border-t border-white/10 pt-16 text-center space-y-6">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Discuss the Blueprint</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Order your AEObility Blueprint today for ${PRICING_CONFIG.blueprint.price} AUD (ex. GST) and receive your prioritised 90-day action plan.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-100 transition-all duration-300 cursor-pointer shadow-lg text-sm"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Discuss the Blueprint</span>
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-2">
                <UserCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>You will speak directly with Vince Baker, AEObility’s founder.</span>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
