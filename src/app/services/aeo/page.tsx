import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ArrowRight, Eye, Brain, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: "Answer Engine Optimisation (AEO) Services — AEObility",
  description: "Professional content engineering solutions that restructure, format, and optimise digital assets for conversational AI engines and RAG systems.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo",
  },
};

export default function AEORootPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/aeo#service",
        "name": "Answer Engine Optimisation (AEO) Services",
        "description": "Professional content engineering solutions that restructure, format, and optimise digital assets to be accurately ingested, synthesized, and cited by conversational AI engines and retrieval-augmented generation (RAG) systems.",
        "provider": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1102555",
            "https://www.crunchbase.com/organization/aeobility"
          ]
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      {/* Navigation Header */}
      <header className="py-6 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <svg
              className="w-6 h-6 text-aeo-cyan group-hover:scale-105 transition-transform"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2L2 10L16 18L30 10L16 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 22L16 30L30 22"
                stroke="#bd00ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-semibold tracking-wider text-white">AEO<span className="text-aeo-cyan font-light">bility</span></span>
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="text-xs font-semibold text-white/60 hover:text-white transition-colors py-2 px-3">
              Home
            </Link>
            <Link href="/services/aeo" className="text-xs font-semibold text-aeo-cyan py-2 px-3">
              AEO Services
            </Link>
            <Link href="/support" className="text-xs font-semibold text-white/60 hover:text-white transition-colors py-2 px-3">
              Support
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Navigation Links & Entity Map */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">AEO Knowledge Hub</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/services/aeo" className="text-sm font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg">
                Hub Overview
              </Link>
              <Link href="/services/aeo/definition" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                1. Definition
              </Link>
              <Link href="/services/aeo/comparison" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                2. AEO vs. Traditional SEO
              </Link>
              <Link href="/services/aeo/procedures" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                3. Technical Optimisation Workflow
              </Link>
              <Link href="/services/aeo/constraints" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                4. Eligibility & Constraints
              </Link>
              <Link href="/services/aeo/costs-timing" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                5. Costs & Timelines
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>Brand Promise: Get Found. Get Chosen.</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Answer Engine <span className="text-gradient-aeo">Optimisation</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light">
              AEObility helps your business appear, make sense, and stand out across Search, Maps & AI — so you get more enquiries without the complexity.
            </p>
          </div>

          {/* Value Pillars Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Our Five Value Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-aeo-cyan">
                  <Eye className="w-5 h-5" />
                  <h3 className="font-bold text-sm">Visibility</h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Show up more often across AI search engines, digital maps, and conversational assistants.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-aeo-cyan">
                  <Brain className="w-5 h-5" />
                  <h3 className="font-bold text-sm">Understanding</h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Ensure machines interpret your business correctly. Instead of just keyword matching, pages are structured so answer engines can read, chunk, and comprehend them.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-aeo-cyan">
                  <CheckCircle2 className="w-5 h-5" />
                  <h3 className="font-bold text-sm">Selection</h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Provide AI systems with high-confidence data so they actively recommend and select your brand for search queries.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-aeo-cyan">
                  <MapPin className="w-5 h-5" />
                  <h3 className="font-bold text-sm">Local Intent</h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Optimise digital footprints so your business appears consistently for nearby customers looking to purchase.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2 md:col-span-2">
                <div className="flex items-center gap-2 text-aeo-cyan">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="font-bold text-sm">Trust</h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Establish clarity, consistency, and transparency. Building deeper machine understanding leads to stronger direct trust from AI search and retrieval networks.
                </p>
              </div>
            </div>
          </div>

          {/* Quick CTAs */}
          <div className="p-6 bg-gradient-to-r from-aeo-purple/10 to-aeo-cyan/10 border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-base font-bold text-white">Get Started with AEObility</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Enter your website URL to get a free visibility audit delivered straight to your inbox, or secure our 90-day technical roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/#audit-form"
                className="group flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-100 transition-all"
              >
                Generate My Free Audit
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services/aeo/costs-timing"
                className="flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all"
              >
                View Pricing & Blueprint Offer
              </Link>
            </div>
          </div>

          {/* Hub Top-Down Navigation Corridors (Fidelity Rule verified) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Topical Corridors</h2>
            <div className="grid grid-cols-1 gap-4">
              <Link href="/services/aeo/definition" className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-aeo-cyan/20 transition-all flex justify-between items-center group">
                <span className="text-sm font-semibold text-white group-hover:text-aeo-cyan transition-colors">AEO definitions and core concepts</span>
                <span className="text-aeo-cyan">→</span>
              </Link>

              <Link href="/services/aeo/comparison" className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-aeo-cyan/20 transition-all flex justify-between items-center group">
                <span className="text-sm font-semibold text-white group-hover:text-aeo-cyan transition-colors">AEO vs SEO comparison</span>
                <span className="text-aeo-cyan">→</span>
              </Link>

              <Link href="/services/aeo/procedures" className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-aeo-cyan/20 transition-all flex justify-between items-center group">
                <span className="text-sm font-semibold text-white group-hover:text-aeo-cyan transition-colors">AEO optimisation procedures for LLM ingestion</span>
                <span className="text-aeo-cyan">→</span>
              </Link>

              <Link href="/services/aeo/constraints" className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-aeo-cyan/20 transition-all flex justify-between items-center group">
                <span className="text-sm font-semibold text-white group-hover:text-aeo-cyan transition-colors">AEO constraints, authority thresholds, and edge cases</span>
                <span className="text-aeo-cyan">→</span>
              </Link>

              <Link href="/services/aeo/costs-timing" className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-aeo-cyan/20 transition-all flex justify-between items-center group">
                <span className="text-sm font-semibold text-white group-hover:text-aeo-cyan transition-colors">AEO pricing, costs, and timelines</span>
                <span className="text-aeo-cyan">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
