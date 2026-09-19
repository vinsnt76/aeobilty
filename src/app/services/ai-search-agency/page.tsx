'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  Building2, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  FileCheck,
  Zap,
  Sparkles,
  Layers,
  ChevronDown
} from 'lucide-react';

export default function AiSearchAgencyPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const sprintOffers = [
    {
      sku: "GEO-DIAGNOSTIC-AUDIT",
      title: "GEO Visibility Diagnostic",
      price: "$995 AUD",
      priceSub: "100% GST-Inclusive • Standalone Audit & Strategic Roadmap",
      description: "Diagnostic starting point evaluating how conversational search engines parse and recommend your business.",
      deliverables: [
        "Live prompt testing across ChatGPT Search, Google AI Overviews, and Perplexity.",
        "Competitor citation overlap and authority gap analysis.",
        "Nested JSON-LD schema audit and structured data roadmap.",
        "100% of $995 fee credited toward Foundation Implementation within 60 days."
      ],
      link: "/diagnostic",
      ctaLabel: "Book Diagnostic Scan"
    },
    {
      sku: "GEO-FOUNDATION-4WK",
      title: "Foundation Implementation Sprint",
      price: "From $3,195 AUD",
      priceSub: "100% GST-Inclusive • 4 Structured Business Weeks",
      description: "Full implementation sprint engineering your digital footprint for high-confidence AI engine retrieval.",
      deliverables: [
        "Service page atomic answer block rewrites for LLM extraction.",
        "Canonical Brand Facts directory setup with entity relationship mapping.",
        "Nested JSON-LD schema graph implementation (Organization, Service, FAQ).",
        "Internal semantic linking lattice and baseline citation tracking setup."
      ],
      link: "/solutions/aeo-sprint",
      ctaLabel: "Explore Sprint Scope"
    }
  ];

  const differentiators = [
    {
      icon: <Zap className="w-5 h-5 text-aeo-cyan" />,
      title: "Fixed-Scope Sprints",
      description: "No ongoing retainer lock-in or open-ended agency billing. Every project has a clear deliverable roadmap and fixed outcome."
    },
    {
      icon: <Layers className="w-5 h-5 text-aeo-cyan" />,
      title: "Entity Graph Engineering",
      description: "We don't just write blog posts. We build machine-readable JSON-LD schema graphs that define your exact business offer to AI scrapers."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-aeo-cyan" />,
      title: "Founder-Led Delivery",
      description: "Work directly with lead specialist Vinnie Baker. Direct technical execution with zero junior account managers or offshore noise."
    }
  ];

  const faqs = [
    {
      question: "What does an AI Search Agency do?",
      answer: "An AI Search Agency specializes in Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO). We refactor website content, nested JSON-LD schema markup, and canonical business fact directories so conversational search engines (Google AI Overviews, ChatGPT, Perplexity) accurately cite and recommend your brand."
    },
    {
      question: "Why choose AEObility over a traditional SEO agency?",
      answer: "Traditional SEO agencies focus on keyword density, backlink quantity, and long-term retainer lock-ins. AEObility operates on fixed-scope sprints with zero contract lock-in. We focus on verifiable technical deliverables, clean entity schema graphs, and auditable baseline prompt tracking."
    },
    {
      question: "Who is the Foundation Implementation Sprint best suited for?",
      answer: "The Foundation Sprint is ideal for Australian service businesses, local operators, and growth-focused SMEs that have strong market expertise but an unclear or fragmented digital footprint across Google Maps, Search, and AI platforms."
    },
    {
      question: "How long does an AEO engagement take?",
      answer: "The standalone GEO Visibility Diagnostic is delivered within 5 business days. The full Foundation Implementation Sprint is executed across 4 structured business weeks."
    },
    {
      question: "Is the $995 Diagnostic price credited toward full implementation?",
      answer: "Yes. 100% of your $995 Diagnostic fee is credited directly toward your Foundation Implementation Sprint if booked within 60 days of audit delivery."
    },
    {
      question: "Do you guarantee #1 rankings or ChatGPT citations?",
      answer: "No consultant can guarantee citations or rankings in third-party AI platforms. AEObility optimizes entity clarity, structured data, and verifiable evidence so search engines have maximum confidence to cite your business accurately."
    }
  ];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://aeobility.com.au/services/ai-search-agency#service",
        "name": "AEObility AI Search Agency & Consultancy",
        "url": "https://aeobility.com.au/services/ai-search-agency",
        "description": "Australia's specialist AI search agency offering Generative Engine Optimisation, schema graph engineering, and brand citation strategy.",
        "provider": {
          "@type": "Organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AEO & GEO Agency Sprint Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "@id": "https://aeobility.com.au/services/ai-search-agency#GEO-DIAGNOSTIC-AUDIT",
              "name": "GEO Visibility Diagnostic",
              "sku": "GEO-DIAGNOSTIC-AUDIT",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "995.00",
                "priceCurrency": "AUD",
                "valueAddedTaxIncluded": true
              },
              "url": "https://aeobility.com.au/diagnostic"
            },
            {
              "@type": "Offer",
              "@id": "https://aeobility.com.au/services/ai-search-agency#GEO-FOUNDATION-4WK",
              "name": "Foundation Implementation Sprint",
              "sku": "GEO-FOUNDATION-4WK",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "3195.00",
                "priceCurrency": "AUD",
                "valueAddedTaxIncluded": true
              },
              "url": "https://aeobility.com.au/solutions/aeo-sprint"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/ai-search-agency#faq",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      
      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-10 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16 sm:space-y-20">
          
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto space-y-6 isolation isolate relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs text-aeo-cyan font-mono font-medium shadow-[0_0_12px_rgba(0,229,255,0.15)]">
              <Building2 className="w-4 h-4 text-aeo-cyan" />
              <span>AI SEARCH AGENCY · AUSTRALIA-WIDE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-soehne-breit text-white">
              AI Search Agency &amp; <span className="text-gradient-aeo">AEO Consultancy</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-200 font-bold max-w-3xl mx-auto font-soehne-breit leading-snug">
              Make your business legible, trusted, and recommended across Google Search, Maps, ChatGPT, and Gemini.
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto">
              AEObility is Australia&apos;s specialist AI search marketing consultancy based in Perth, Western Australia. We help growth-focused service businesses and marketing teams restructure their digital footprint so AI assistants understand who they are, what they offer, and why they should be cited accurately.
            </p>

            {/* High-Contrast Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00E5FF] text-[#050811] font-bold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:shadow-[0_0_30px_rgba(0,229,255,0.55)] cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#050811]" />
                <span>Run Free AI Visibility Scan</span>
              </Link>
              <Link
                href="#packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/70 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all hover:bg-slate-800/80 hover:border-slate-500"
              >
                <span>View Sprint Packages</span>
                <ArrowRight className="w-4 h-4 text-aeo-cyan" />
              </Link>
            </div>
          </section>

          {/* Differentiator Grid (Level 2 Glass) */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="relative isolate rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 space-y-3">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30">
                    {diff.icon}
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">{diff.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </section>

          {/* Agency Sprint Packages (Level 1 Glass) */}
          <section id="packages" className="space-y-6 border-t border-white/10 pt-12 scroll-mt-24">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-aeo-cyan uppercase tracking-widest block">Transparent Offerings</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit tracking-tight">Agency Engagement Packages</h2>
              <p className="text-xs sm:text-sm text-slate-300 font-sans">Fixed-scope, transparent pricing with zero contract lock-in.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sprintOffers.map((offer, idx) => (
                <div key={idx} className="relative isolate rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  {/* Top Specular Edge Highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-aeo-cyan bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-md">
                        SKU: {offer.sku}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">{offer.title}</h3>
                      <div className="text-lg font-bold text-aeo-cyan font-mono mt-1">{offer.price}</div>
                      <span className="text-xs text-slate-400 font-mono block mt-0.5">{offer.priceSub}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {offer.description}
                    </p>

                    {/* Scannable Deliverables List */}
                    <div className="space-y-2 pt-3 border-t border-white/10">
                      <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider block">Key Deliverables:</span>
                      <ul className="space-y-2">
                        {offer.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href={offer.link}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-600 hover:border-aeo-cyan text-white font-bold text-xs uppercase tracking-wider transition-all hover:bg-slate-800 cursor-pointer"
                    >
                      <span>{offer.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Expanded FAQ Section (Level 3 Quiet Surface) */}
          <section className="border-t border-white/10 pt-12 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-aeo-cyan font-semibold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit tracking-tight">Frequently asked questions about AI Search Agency consulting</h2>
            </div>

            <div className="space-y-3 max-w-4xl">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="bg-slate-950/70 border border-white/10 rounded-xl overflow-hidden transition-all">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                    >
                      <span className="font-bold text-sm sm:text-base text-slate-100 font-soehne-breit pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-aeo-cyan shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 border-t border-white/10 bg-black/50' : 'max-h-0'}`}
                    >
                      <p className="p-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{faq.answer}</p>
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
