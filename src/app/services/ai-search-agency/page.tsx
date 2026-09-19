'use client';

import React from 'react';
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
  Boxes, 
  BarChart3, 
  ShieldCheck, 
  Code,
  HelpCircle
} from 'lucide-react';

export default function AiSearchAgencyPage() {
  const sprintOffers = [
    {
      sku: "GEO-DIAGNOSTIC-AUDIT",
      title: "GEO Visibility Diagnostic",
      price: "$995 AUD",
      priceSub: "ex. GST • Standalone Audit & Strategic Roadmap",
      description: "Primary starting point testing buyer prompts across ChatGPT Search, Google AI Overviews, and Perplexity. Includes competitor overlap analysis and 100% credit toward Foundation Implementation.",
      link: "/diagnostic",
      ctaLabel: "Book Diagnostic"
    },
    {
      sku: "GEO-FOUNDATION-4WK",
      title: "Foundation Implementation",
      price: "From $3,195 AUD",
      priceSub: "ex. GST • Delivered across 4 business weeks",
      description: "Comprehensive four-week engagement restructuring key service pages, canonical Brand Facts directory, internal semantic linking lattices, JSON-LD schema validation, and citation tracking setup.",
      link: "/services/geo-marketing#foundation-implementation",
      ctaLabel: "Discuss Foundation Scope"
    }
  ];

  const faqs = [
    {
      question: "What does an AI Search Agency do?",
      answer: "An AI Search Agency specialises in Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO). We refactor website content, JSON-LD schema markup, and business fact directories so conversational search engines (Google AI Overviews, ChatGPT, Perplexity) accurately cite and recommend your brand."
    },
    {
      question: "Why choose AEObility as your AI Search Marketing Consultancy?",
      answer: "AEObility delivers fixed-scope sprints with zero long-term retainer lock-in. We focus on verifiable technical deliverables, clean schema graphs, and auditable baseline measurement prompt sets."
    },
    {
      question: "How long does an AI search marketing engagement take?",
      answer: "Individual Micro-Sprints are delivered within 4–5 business days. Full Foundation Implementation engagements run across a 4-week structured timeframe."
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
        "description": "Australia's premier AI Search Agency specialising in Generative Engine Optimisation, schema graph refactoring, and brand citation engineering.",
        "provider": {
          "@id": "https://aeobility.com.au/#organisation"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AEO & GEO Agency Sprint Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "@id": "https://aeobility.com.au/brand-facts#GEO-DIAGNOSTIC-AUDIT",
              "name": "GEO Visibility Diagnostic",
              "sku": "GEO-DIAGNOSTIC-AUDIT",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "995.00",
                "priceCurrency": "AUD",
                "valueAddedTaxIncluded": false
              },
              "url": "https://aeobility.com.au/diagnostic"
            },
            {
              "@type": "Offer",
              "@id": "https://aeobility.com.au/brand-facts#GEO-FOUNDATION-4WK",
              "name": "Foundation Implementation",
              "sku": "GEO-FOUNDATION-4WK",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "3195.00",
                "priceCurrency": "AUD",
                "valueAddedTaxIncluded": false
              },
              "url": "https://aeobility.com.au/services/geo-marketing#foundation-implementation"
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

      <main className="flex-grow w-full py-12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[80px] space-y-16">
          
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-medium">
              <Building2 className="w-4 h-4 text-aeo-cyan" />
              <span>AI Search Marketing &amp; AEO Consultancy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              AI Search Agency &amp; <span className="text-gradient-aeo">AEO Consultancy</span>
            </h1>

            <p className="text-lg sm:text-xl text-cyan-300 font-semibold max-w-3xl mx-auto font-soehne-breit">
              Deploy custom AI search marketing strategies for generative engines (Gemini, ChatGPT, Perplexity). Elevate brand citation index scores.
            </p>

            <p className="text-base text-zinc-300 font-serif leading-relaxed max-w-3xl mx-auto">
              AEObility is Australia&apos;s specialist AI search marketing consultancy. We help enterprise and SMB marketing teams restructure their digital footprint so AI assistants understand who they are, what they offer, and why they should be cited.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.4)]"
              >
                <Search className="w-4 h-4 text-black" />
                <span>Run AI Visibility Scan</span>
              </Link>
              <Link
                href="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/20 hover:border-cyan-400 text-white font-semibold text-sm transition-all hover:bg-zinc-800"
              >
                <span>View Sprint Packages</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>
          </section>

          {/* Agency Sprint Packages */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Agency Engagement Packages</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">Fixed-scope, transparent pricing with zero contract lock-in.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sprintOffers.map((offer, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                        SKU: {offer.sku}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white font-soehne-breit">{offer.title}</h3>
                      <div className="text-base font-bold text-cyan-300 font-mono mt-1">{offer.price}</div>
                      <span className="text-xs text-zinc-400 font-mono block mt-0.5">{offer.priceSub}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                      {offer.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <Link
                      href={offer.link}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 border border-white/15 hover:border-cyan-400 text-white font-bold text-xs transition-all hover:bg-zinc-800"
                    >
                      <span>{offer.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="border-t border-white/10 pt-12 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Agency FAQ</h2>
            </div>

            <div className="space-y-4 max-w-3xl">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/80 border border-white/10 rounded-xl space-y-2">
                  <h3 className="text-base font-bold text-white font-soehne-breit">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
