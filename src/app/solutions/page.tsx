'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Compass, Layers, Boxes, Network, ShieldCheck, ChevronDown, Calendar, UserCheck } from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { PRICING_CONFIG } from '@/lib/brandFacts';

export default function SolutionsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I need the Blueprint before booking a Micro-Sprint?",
      answer: "No. If you already know the specific issue you want addressed, you can book a Micro-Sprint directly. If you need help identifying and prioritising gaps, start with the Blueprint."
    },
    {
      question: "What is included in Foundation Implementation?",
      answer: "Foundation Implementation combines agreed priority improvements across technical setup, key pages, internal linking and business-information consistency. Scope is fully agreed before work begins."
    },
    {
      question: "Does Foundation Implementation include the full Blueprint?",
      answer: "Foundation Implementation includes initial discovery and priority scoping to target the immediate engagement. A standalone, comprehensive 90-day strategic AEObility Blueprint can be added if a broader roadmap is required."
    },
    {
      question: "How long does Foundation Implementation take?",
      answer: "Most Foundation engagements are delivered over 4–5 working days across a four-week period, allowing adequate time for precise implementation, validation and review."
    },
    {
      question: "Are there ongoing contracts or retainers?",
      answer: "No. All work is clearly scoped and fixed-price upfront. Ongoing optimisations or support are only available where explicitly agreed upon post-handover."
    },
    {
      question: "What happens after a sprint is completed?",
      answer: "You receive a full handover with clear documentation of all updates made. You can choose to manage the site internally, book additional targeted Micro-Sprints, or discuss ongoing support if required."
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
        "@id": "https://www.aeobility.com.au/solutions#webpage",
        "url": "https://www.aeobility.com.au/solutions",
        "name": "AEO Services, Sprints & Fixed Pricing | AEObility",
        "description": "Discover clear, fixed-price implementation work for Australian businesses. Choose a strategic roadmap, fix a single priority, or build a strong digital foundation.",
        "publisher": {
          "@id": "https://www.aeobility.com.au/#organization"
        },
        "breadcrumb": {
          "@id": "https://www.aeobility.com.au/solutions#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aeobility.com.au/solutions#breadcrumb",
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
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": "https://www.aeobility.com.au/solutions#catalog",
        "name": "AEObility Solutions & Engagement Pathways",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "The AEObility Blueprint",
            "identifier": "BPSTRAT",
            "url": "https://www.aeobility.com.au/solutions/aeo-blueprint",
            "description": "A strategic audit and 90-day roadmap to improve how search engines, Maps and AI systems understand your business.",
            "provider": {
              "@id": "https://www.aeobility.com.au/#organization"
            },
            "offers": {
              "@type": "Offer",
              "sku": "BPSTRAT",
              "price": "995.00",
              "priceCurrency": "AUD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "valueAddedTaxIncluded": false,
                "description": "Excluding GST"
              }
            }
          },
          {
            "@type": "Service",
            "name": "AEObility Micro-Sprints",
            "identifier": "SS1-SS4-MICRO",
            "url": "https://www.aeobility.com.au/solutions/aeo-sprint",
            "description": "A focused, fixed-scope sprint for a defined website, content or local-visibility issue.",
            "provider": {
              "@id": "https://www.aeobility.com.au/#organization"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Schema Sprint",
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
                "name": "Citation Clean-Up",
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
                "name": "Local Linking Sprint",
                "price": "695.00",
                "priceCurrency": "AUD",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "valueAddedTaxIncluded": false,
                  "description": "Excluding GST"
                }
              },
              {
                "@type": "Offer",
                "name": "Brand Facts Page",
                "price": "495.00",
                "priceCurrency": "AUD",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "valueAddedTaxIncluded": false,
                  "description": "Excluding GST"
                }
              }
            ]
          },
          {
            "@type": "Service",
            "name": "Foundation Implementation",
            "identifier": "SS1-SS4-MACRO",
            "url": "https://www.aeobility.com.au/contact",
            "description": "When several issues are connected, Foundation Implementation brings the most important work together in one focused engagement.",
            "provider": {
              "@id": "https://www.aeobility.com.au/#organization"
            },
            "offers": {
              "@type": "Offer",
              "sku": "SS1-SS4-MACRO",
              "priceCurrency": "AUD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "3195.00",
                "priceCurrency": "AUD",
                "valueAddedTaxIncluded": false,
                "description": "Starting from $3,195 AUD ex. GST; final scope confirmed before work begins."
              }
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.aeobility.com.au/solutions#faq",
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

  const selfSelectionItems = [
    {
      need: "Need clarity?",
      feeling: "“I’m not sure what is holding us back.”",
      solution: "The AEObility Blueprint",
      price: `$${PRICING_CONFIG.blueprint.price} AUD ex. GST`,
      href: "/solutions/aeo-blueprint"
    },
    {
      need: "Know the issue?",
      feeling: "“I know the issue and need it fixed.”",
      solution: "A Micro-Sprint",
      price: `From $${PRICING_CONFIG.microSprints.basePriceFrom} AUD ex. GST`,
      href: "/solutions/aeo-sprint"
    },
    {
      need: "Need several fixes?",
      feeling: "“We have several important issues to address.”",
      solution: "Foundation Implementation",
      price: `From $${PRICING_CONFIG.foundation.basePriceFrom} AUD ex. GST`,
      href: "/contact"
    }
  ];

  const buildingBlocks = [
    {
      id: "S1",
      title: "S1: Schema & Semantic Mapping",
      subtitle: "Clarify business, service and location information",
      application: "Structured data, service relationships and location signals.",
      icon: <Layers className="w-5 h-5 text-aeo-cyan" />
    },
    {
      id: "S2",
      title: "S2: Answer-Ready Content",
      subtitle: "Make key pages clearer for customers and search systems",
      application: "Page sections, FAQs, service explanations and proof points.",
      icon: <Boxes className="w-5 h-5 text-aeo-cyan" />
    },
    {
      id: "S3",
      title: "S3: Internal Linking & Content Connections",
      subtitle: "Connect related service, location and supporting pages",
      application: "Contextual internal links, navigation paths and topic relationships.",
      icon: <Network className="w-5 h-5 text-aeo-cyan" />
    },
    {
      id: "S4",
      title: "S4: Brand Facts & Consistency",
      subtitle: "Create a reliable central source of business information",
      application: "Brand Facts Page, core business claims, service details and trust information.",
      icon: <ShieldCheck className="w-5 h-5 text-aeo-cyan" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Unified Connected JSON-LD Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.solutions} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {/* 1. Hero Block with Dual CTAs */}
          <section className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <Compass className="w-4 h-4 text-aeo-cyan" />
              <span>Clear Pricing & Scoped Engagements</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              AEO Services, Sprints & <span className="text-gradient-aeo">Clear Pricing</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
              Start with a clear plan, fix one priority issue or tackle several improvements together. Transparent, fixed-price implementation designed specifically for Australian small businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-base transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.3)] cursor-pointer"
              >
                <span>Run a free visibility scan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-900 border border-white/15 hover:border-aeo-cyan text-white font-semibold text-base transition-all duration-300 hover:bg-zinc-800 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-aeo-cyan" />
                <span>Discuss your starting point</span>
              </Link>
            </div>
          </section>

          {/* 2. Engagement Paths (Three-Card Grid) */}
          <section className="space-y-8 border-t border-white/10 pt-16">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-soehne-breit">Choose Your Starting Point</h2>
              <p className="text-xs text-white/60 font-serif">Transparent, fixed-price implementation designed specifically for Australian small businesses.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              
              {/* Path 1: Start with a Blueprint */}
              <div className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider font-mono">Strategic Audit</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-cyan-300 font-mono">${PRICING_CONFIG.blueprint.price} AUD</span>
                      <span className="text-[10px] text-zinc-500 font-mono block">ex. GST</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">1. Start with a Blueprint</h2>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-serif">
                      Understand what is limiting your visibility, then receive a prioritised 90-day action plan.
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-zinc-300 pt-2 font-sans">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Website, entity and structured-data review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Visibility scorecard and priority actions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Practical 90-day roadmap</span>
                    </li>
                    <li className="flex items-start gap-2 font-medium text-cyan-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Blueprint fee credited towards eligible implementation work</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href="/solutions/aeo-blueprint"
                    className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-400 text-white font-bold text-xs transition-all duration-300 shadow-sm group-hover:bg-zinc-800"
                  >
                    <span>Explore the Blueprint</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Path 2: Fix One Priority */}
              <div className="relative p-0.5 rounded-2xl bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-500 shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300 group">
                <div className="flex flex-col justify-between h-full p-6 md:p-8 rounded-[15px] bg-zinc-950/95 backdrop-blur-xl">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider font-mono">Micro-Sprints</span>
                      <div className="text-right">
                        <span className="text-sm font-bold text-cyan-300 font-mono">From ${PRICING_CONFIG.microSprints.basePriceFrom} AUD</span>
                        <span className="text-[10px] text-zinc-500 font-mono block">ex. GST</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">2. Fix One Priority</h2>
                      <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-serif">
                        A focused, fixed-scope sprint for a defined website, content or local-visibility issue.
                      </p>
                    </div>

                    <ul className="space-y-2.5 text-xs text-zinc-300 pt-2 font-sans">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Schema Sprint — $495:</strong> Improve structured data for one service or location page</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Content Sprint — $495:</strong> Improve one priority page for customer questions and search visibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Citation Clean-Up — $495:</strong> Standardise core business details across priority platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Local Linking Sprint — $695:</strong> Better connect priority service, location and supporting pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Brand Facts Page — $495:</strong> Create a central source of clear, consistent business information</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Link
                      href="/solutions/aeo-sprint"
                      className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-95 text-black font-bold text-xs transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    >
                      <span>View Micro-Sprints</span>
                      <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Path 3: Build the Foundation */}
              <div className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">Foundation</span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-cyan-300 font-mono">From ${PRICING_CONFIG.foundation.basePriceFrom} AUD</span>
                      <span className="text-[10px] text-zinc-500 font-mono block">ex. GST</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">3. Build the Foundation</h2>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-serif">
                      When several issues are connected, Foundation Implementation brings the most important work together in one focused engagement.
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-zinc-300 pt-2 font-sans">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{PRICING_CONFIG.foundation.deliveryWindow}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Includes initial discovery and priority scoping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>May include structured data, page improvements, internal linking and business-information consistency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Progress updates, validation and handover</span>
                    </li>
                    <li className="flex items-start gap-2 font-medium text-cyan-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Clear scope, fixed pricing and no long-term contract</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-400 text-white font-bold text-xs transition-all duration-300 shadow-sm group-hover:bg-zinc-800"
                  >
                    <span>Discuss Foundation Implementation</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </section>

          {/* 3. Consolidated Trust Banner */}
          <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-8 text-center space-y-3 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>Commercial Guarantee & Clarity</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Clearly Scoped, Fixed Pricing
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed font-serif">
              Agree on the deliverables, timing and price before work begins. Every engagement includes agreed deliverables, progress updates and a full handover.
            </p>
          </section>

          {/* 4. Self-Selection Pathway Diagram (Responsive Stack) */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Not sure where to start?</h2>
              <p className="text-xs text-white/60 font-serif">Match your current situation to the recommended engagement pathway.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selfSelectionItems.map((item, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-aeo-cyan/30 transition-all duration-300">
                  <div className="space-y-3">
                    <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-aeo-cyan bg-aeo-cyan/10 border border-aeo-cyan/20 px-2.5 py-0.5 rounded-full">
                      {item.need}
                    </span>
                    <p className="text-sm font-medium text-white italic leading-relaxed">{item.feeling}</p>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-zinc-400 block">Best starting point</span>
                      <span className="text-sm font-bold text-white block">{item.solution}</span>
                      <span className="text-[11px] font-mono text-cyan-300 font-bold block">{item.price}</span>
                    </div>
                    <Link
                      href={item.href}
                      className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-aeo-cyan hover:bg-aeo-cyan/20 transition cursor-pointer"
                      aria-label={`Go to ${item.solution}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Technical Building Blocks (Four-Card Stack Layout) */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">The Technical Building Blocks</h2>
              <p className="text-xs text-white/60 font-serif">The practical areas we work on, selected to suit your business priorities:</p>
            </div>

            <p className="text-xs text-center text-zinc-400 max-w-xl mx-auto leading-relaxed font-serif italic">
              We structure important information into clear, well-connected page sections so customers and modern search tools can identify the answers they need.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {buildingBlocks.map((block) => (
                <div key={block.id} className="bg-zinc-950/80 border border-white/10 rounded-xl p-5 space-y-3 hover:border-aeo-cyan/30 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black border border-white/10 rounded-lg shrink-0">
                      {block.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{block.title}</h3>
                      <span className="text-xs text-cyan-400 font-medium block">{block.subtitle}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-zinc-500 block">Application</span>
                      <span className="text-white/80">{block.application}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mid-Page CTA */}
            <div className="text-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 cursor-pointer"
              >
                <span>Not sure which option fits? Discuss your priorities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* 6. "What Happens Next" 3-Step Strip */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">What Happens Next</h2>
              <p className="text-xs text-white/60 font-serif">Simple, transparent 3-step onboarding workflow from initial scoping to delivery.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-2 text-center relative">
                <span className="text-2xl font-extrabold text-cyan-400 font-mono block">01</span>
                <h3 className="text-sm font-bold text-white">Choose a starting point</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-serif">Select a Blueprint, Micro-Sprint, or Foundation Implementation based on your immediate needs.</p>
              </div>

              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-2 text-center relative">
                <span className="text-2xl font-extrabold text-purple-400 font-mono block">02</span>
                <h3 className="text-sm font-bold text-white">Confirm scope and priorities</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-serif">We agree on the work, deliverables and timing before implementation begins.</p>
              </div>

              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-2 text-center relative">
                <span className="text-2xl font-extrabold text-cyan-400 font-mono block">03</span>
                <h3 className="text-sm font-bold text-white">Receive updates and handover</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-serif">You receive progress updates, final checks and the information needed to manage the work afterwards.</p>
              </div>
            </div>
          </section>

          {/* 7. FAQ Accordion Block */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about our services, scoping, and implementation.</p>
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

          {/* 8. Bottom CTA Block with Founder Reassurance Line */}
          <section className="border-t border-white/10 pt-16 text-center space-y-6">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Discuss Your Starting Point</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Have questions about which path fits your business? Speak directly with AEObility founder Vince Baker to discuss your target objectives.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-100 transition-all duration-300 cursor-pointer shadow-lg text-sm"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Book a strategy call</span>
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-2">
                <UserCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Speak directly with AEObility founder Vince Baker to discuss your starting point.</span>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
