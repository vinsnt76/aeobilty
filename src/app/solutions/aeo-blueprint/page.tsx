'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { ArrowRight, CheckCircle2, Compass, ShieldCheck, Calendar, UserCheck, Layers, BarChart3, Map, FileText, ChevronDown, Clock, Info, HelpCircle, Award, Code, Users } from 'lucide-react';
import { PRICING_CONFIG } from '@/lib/brandFacts';
import { trackGaEvent } from '@/lib/gtag';

export default function AEOBlueprintPage() {
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
      form_id: 'blueprint_page_contact_form',
      lead_type: 'blueprint_enquiry',
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
      question: "What is included in the AEObility Blueprint?",
      answer: "The Blueprint includes a website and structured-data review, a visibility scorecard, a prioritised 90-day roadmap, and an audit of key service and content pages. You receive practical recommendations for the highest-priority improvements."
    },
    {
      question: "How long does the Blueprint take?",
      answer: "Most Blueprints are completed within 7 to 10 business days after we receive the required access and business information. Timing may vary for larger or multi-location businesses."
    },
    {
      question: "Can I implement the Blueprint myself or give it to my developer?",
      answer: "Yes. The Blueprint is fully developer-ready and delivered as a clear, un-jargoned specification. You can implement it in-house, hand it to your developer, or hire AEObility for implementation."
    },
    {
      question: "Does the Blueprint include implementation?",
      answer: "No. The Blueprint is a strategic audit and 90-day implementation roadmap. Website development, schema deployment, page rewrites, citation updates and ongoing support can be scoped separately after handover."
    },
    {
      question: "How does the 100% fee credit work?",
      answer: "Your $995 Blueprint fee is credited back when you book any Foundation Sprint or higher ($3,195 AUD ex. GST baseline). It does not apply to standalone Micro-Sprints."
    },
    {
      question: "Is the Blueprint suitable for agencies or multi-location businesses?",
      answer: "Yes. The Blueprint can support internal marketing teams, developers and agency partners, and can be scoped for multi-location businesses. Contact us to confirm the appropriate scope and pricing before booking."
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
            "description": "Excluding GST; credited towards Foundation Sprints and above when booked within 60 days."
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
      description: "A clear scorecard evaluating your business across Search, Maps and AI-assisted search tools, highlighting the most practical opportunities to improve visibility."
    },
    {
      icon: <Map className="w-6 h-6 text-aeo-cyan" />,
      title: "90-day roadmap",
      description: "A step-by-step priority roadmap mapping out the most impactful website, content and local visibility improvements tailored to your business goals."
    },
    {
      icon: <FileText className="w-6 h-6 text-aeo-purple" />,
      title: "Content and service-information audit",
      description: "An analysis of your core service descriptions and client-facing pages to match the questions local customers are asking."
    }
  ];

  const valueProps = [
    "Fixed $995 price with clearly defined deliverables",
    "Independent, prioritised recommendations rather than an open-ended retainer",
    "Developer-ready specifications you can implement in-house or with AEObility",
    "Built for Australian businesses, local visibility and modern search behaviour"
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

            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact?service=blueprint"
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
              <p className="text-xs text-zinc-400 font-serif">
                Not sure whether you need a Blueprint or a focused sprint? We will help you choose the right starting point.
              </p>
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

            {/* Decision Guide Helper Strip */}
            <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-serif mt-4">
              <span className="text-white/80 font-medium flex items-center gap-1.5 shrink-0">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                Need help deciding?
              </span>
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-zinc-300">
                <span className="text-cyan-300">Unsure what is limiting visibility → Blueprint</span>
                <span className="text-zinc-600">|</span>
                <Link href="/solutions/aeo-sprint" className="text-purple-400 hover:underline">Know the issue → Micro-Sprint</Link>
                <span className="text-zinc-600">|</span>
                <Link href="/solutions" className="text-cyan-400 hover:underline">Multiple priorities → Foundation</Link>
              </div>
            </div>
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

            {/* Handover & Developer-Ready Callout */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">Developer-Ready Asset: Implement In-House or With Us</strong>
                  <span>You can take your Blueprint and implement it in-house or hand it to your developer. If you choose AEObility for implementation, your $995 fee is credited back when you book any Foundation Sprint or higher.</span>
                </div>
              </div>
            </div>

            {/* "What is Not Included" Restrained Scope Callout Container */}
            <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-4 flex items-start gap-3 text-xs text-zinc-300 font-serif leading-relaxed shadow-sm">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p>
                <strong className="text-white font-semibold">Scope note:</strong> The Blueprint is a strategic audit and roadmap. It does not include website development, schema deployment, content rewrites, citation updates or ongoing monitoring. These can be scoped separately after handover.
              </p>
            </div>
          </section>

          {/* 4. Price and Fee-Credit Terms Banner + High-Intent Mid-Page CTA */}
          <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-cyan-500/30 rounded-2xl p-8 text-center space-y-6 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>100% Fee Credit Terms</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-soehne-breit">
                Fixed Price: ${PRICING_CONFIG.blueprint.price} AUD (ex. GST). No hidden retainers.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed font-serif">
                Your ${PRICING_CONFIG.blueprint.price} Blueprint fee is credited back when you book any Foundation Sprint or higher ($3,195 AUD ex. GST baseline) within 60 days of your Blueprint handover. Credit does not apply to standalone Micro-Sprints and is not redeemable for cash.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 pt-2 border-t border-white/5">
                <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Typical turnaround: 7 to 10 business days from receipt of required access and business information.</span>
              </div>
            </div>

            {/* Mid-Page High-Intent Conversion CTA */}
            <div className="pt-2">
              <Link
                href="/contact?service=blueprint"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Discuss the Blueprint</span>
              </Link>
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
                <p className="text-xs text-zinc-400 leading-relaxed font-serif">We audit your existing local signals, brand claims, and website structure and business information.</p>
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

          {/* 6. Technical Review Section ("A closer look at what we review") */}
          <section className="border-t border-white/10 pt-16 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white font-soehne-breit">A closer look at what we review</h2>
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
                  <span>How your services and locations are described consistently online.</span>
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

          {/* 7. Trust & Evidence Strip ("Why Businesses Choose the Blueprint") */}
          <section className="border-t border-white/10 pt-16 space-y-6">
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white font-soehne-breit">Why businesses choose the Blueprint</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-white/80 font-serif">
                {valueProps.map((prop, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{prop}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 8. Full FAQ Accordion Block (All Answers Rendered & Accessible) */}
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

          {/* 9. Final Role-Based Conversion CTA & Direct Contact Form */}
          <section className="border-t border-white/10 pt-16 text-center space-y-8">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Ready for a Clearer Picture of What to Fix First?</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Discuss your Blueprint with an AEObility specialist and receive your practical 90-day action plan.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-1">
                <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Speak with an AEObility specialist (guided by founder Vince Baker).</span>
              </div>
            </div>

            {/* Inline Blueprint Direct Contact Form */}
            <div className="max-w-xl mx-auto bg-zinc-950/90 border border-white/10 p-6 sm:p-8 rounded-2xl text-left shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full filter blur-2xl -z-10" />
              <h3 className="text-xl font-bold text-white font-soehne-breit mb-1.5">Send a Direct Blueprint Enquiry</h3>
              <p className="text-xs text-zinc-400 font-serif mb-6 leading-relaxed">
                Submit your details below to discuss your Strategic Blueprint audit (${PRICING_CONFIG.blueprint.price} AUD ex. GST, credited back towards Foundation Sprints and above).
              </p>

              {contactSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Blueprint Enquiry Received</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you for reaching out. Our AEObility visibility team will review your website details and get in touch within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="blueprint-name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="blueprint-name"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Vince Baker"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="blueprint-email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="blueprint-email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="vince@example.com.au"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="blueprint-website">
                      Website URL (Optional)
                    </label>
                    <input
                      type="text"
                      id="blueprint-website"
                      value={contactData.website}
                      onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="example.com.au"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="blueprint-message">
                      Project Notes / Primary Objective
                    </label>
                    <textarea
                      id="blueprint-message"
                      required
                      rows={3}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="Tell us about your business or what you'd like to achieve with the Blueprint..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                  >
                    <span>Submit Blueprint Enquiry</span>
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
