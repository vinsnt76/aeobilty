import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, DollarSign, HelpCircle, Compass, Target, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AEO Service Costs, Packages & Sprints | AEObility",
  description: "Explore clear pricing models — from the $995 Strategic Blueprint to targeted optimisation sprints.",
  keywords: [
    "AEO Service Cost",
    "aeo services vs seo services",
    "transparent digital marketing pricing",
    "90‑day marketing roadmap",
    "strategic audit and roadmap",
    "no‑contract marketing agency",
    "project deliverables",
    "pricing clarity",
    "sprint milestones"
  ]
};

export default function SolutionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AEObility 90-Day Success Blueprint",
    "image": "https://aeobility.com.au/pricing-tiered-modules.png",
    "description": "A comprehensive visibility audit and deep-dive strategic roadmap to structure your business for Search, Maps, and conversational AI.",
    "brand": {
      "@type": "Brand",
      "name": "AEObility"
    },
    "offers": {
      "@type": "Offer",
      "price": "995.00",
      "priceCurrency": "AUD",
      "url": "https://aeobility.com.au/solutions",
      "areaServed": "AU"
    }
  };

  const packages = [
    {
      name: "The Strategic Blueprint Method",
      price: "$995 AUD",
      description: "A comprehensive, risk-free visibility audit and 90-day step-by-step roadmap to format your business details for generative search.",
      features: [
        "Full entity & schema audit",
        "AI discovery readiness score",
        "Topical Q&A structure map",
        "Vector indexing compatibility check",
        "100% credit back if you stay with us"
      ],
      cta: "Claim Strategic Blueprint",
      href: "/#audit-form",
      highlighted: false
    },
    {
      name: "Full AEO Implementation Plan",
      price: "$2,495 AUD / mo",
      description: "Complete execution, deployment, and management of your brand entity profile across all conversational search engines.",
      features: [
        "Full schema markup deployment",
        "Weekly vector indexing checks",
        "AI-optimised content generation",
        "Google & Apple Maps pin sync",
        "No locked-in commitments"
      ],
      cta: "Secure Partner Slot",
      href: "/contact",
      highlighted: true
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />

      <main className="flex-grow w-full py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-24">

          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
                <Compass className="w-3.5 h-3.5" />
                <span>AEO Service Cost & Pricing Clarity</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Transparent AEO Solutions, <br />
                <span className="text-gradient-aeo">Sprints & Pricing</span>
              </h1>
              <p className="text-lg text-white/70 font-light leading-relaxed max-w-xl">
                Compare AEO services vs SEO services. We offer simple, milestone-based packages with full pricing clarity so you always know what you are paying for.
              </p>
              <div className="pt-4">
                <Link
                  href="/#audit-form"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold rounded-xl hover:opacity-90 transition-opacity animate-pulse"
                >
                  <span>Get My Free Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/50 shadow-2xl">
                <Image
                  src="/pricing-tiered-modules.png"
                  alt="Tiered pricing modules showing deliverables and inclusions"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
          </section>

          {/* Core Optimisation Engagements */}
          <section className="space-y-12 border-t border-white/5 pt-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Core Optimisation Engagements</h2>
              <p className="text-white/60 font-light leading-relaxed">
                Whether you need a standalone strategic audit and roadmap or complete implementation, we provide flat-rate solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
              {packages.map((pkg, idx) => (
                <div 
                  key={idx}
                  className={`p-1 rounded-2xl bg-gradient-to-br transition-all duration-300 ${
                    pkg.highlighted 
                      ? 'from-aeo-cyan via-aeo-purple to-black shadow-[0_0_30px_rgba(0,240,255,0.15)] scale-105' 
                      : 'from-white/10 to-white/5 border border-white/5'
                  }`}
                >
                  <div className="p-8 bg-neutral-950 rounded-xl flex flex-col justify-between h-full gap-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                      <div className="text-3xl font-extrabold text-white">{pkg.price}</div>
                      <p className="text-sm text-white/60 font-light leading-relaxed">{pkg.description}</p>
                      <ul className="space-y-3 pt-4">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex gap-2.5 items-start text-xs text-white/80 font-light">
                            <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={pkg.href}
                      className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold transition-all duration-300 ${
                        pkg.highlighted 
                          ? 'bg-gradient-to-r from-aeo-cyan to-aeo-purple text-white shadow-lg' 
                          : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{pkg.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Onboarding Flow & Sprint Milestones */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/5 pt-16">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/50 shadow-2xl">
                <Image
                  src="/client-milestones-onboarding.png"
                  alt="Flowchart showing client milestones during onboarding"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-white">Transparent Sprints</h2>
              <p className="text-base text-white/70 font-light leading-relaxed">
                We believe in structured, transparent sprints. Our onboarding workflow guides you through concrete <span className="font-semibold text-white">sprint milestones</span> to build and format your business entity model. You receive regular status updates on all project deliverables.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 mt-1">
                    <Target className="w-4 h-4 text-aeo-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Sprint 1: Schema & Semantic Mapping</h4>
                    <p className="text-xs text-white/60 font-light leading-relaxed">Defining your business nodes and setting up microdata formats.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 mt-1">
                    <Rocket className="w-4 h-4 text-aeo-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Sprint 2: Vector Sync & Map Indexing</h4>
                    <p className="text-xs text-white/60 font-light leading-relaxed">Pinning addresses across major map interfaces and pushing to local systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* No Locked-In Commitments Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/5 pt-16">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-bold text-white">No Locked‑In Commitments</h2>
              <p className="text-base text-white/70 font-light leading-relaxed">
                As a proudly <span className="font-semibold text-white">no‑contract marketing agency</span>, we keep it simple. If we do not deliver results, you can leave anytime. No locked-in agreements, no hidden fees. Just clear partnership models and actionable digital results.
              </p>
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
                <div className="flex gap-2 items-center text-xs font-bold uppercase tracking-wider text-aeo-cyan">
                  <HelpCircle className="w-4 h-4" />
                  <span>Why No Contracts?</span>
                </div>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  We believe visibility marketing agency arrangements should align both incentives. If we help your brand gain citations and local map ranks, you will stay because it grows your revenue, not because of a piece of paper.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 p-8 bg-gradient-to-br from-aeo-cyan/10 to-aeo-purple/10 border border-white/5 rounded-3xl text-center space-y-6">
              <h3 className="text-2xl font-bold">Secure Your Visibility Audit</h3>
              <p className="text-sm text-white/60 font-light max-w-sm mx-auto">
                Get a free manual audit of your search and map visibility within 24 hours.
              </p>
              <div>
                <Link
                  href="/#audit-form"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-neutral-100 transition-all duration-300"
                >
                  <span>Start Audit Request</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
