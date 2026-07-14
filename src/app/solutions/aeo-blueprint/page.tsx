import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "The $995 AEObility MVP Strategic Blueprint",
  description: "Get a deep technical audit and an actionable 90-day strategic roadmap for $995. Fully credited back if you choose us for implementation.",
  alternates: {
    canonical: "https://aeobility.com.au/solutions/aeo-blueprint",
  },
};

export default function AEOBlueprintPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://aeobility.com.au/solutions/aeo-blueprint#product",
        "name": "The AEObility MVP Strategic Blueprint",
        "image": "https://aeobility.com.au/client-milestones-onboarding.png",
        "description": "Get a deep technical audit and an actionable 90-day strategic roadmap for $995. Fully credited back if you choose us for implementation.",
        "offers": {
          "@type": "Offer",
          "price": "995",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "Perth" },
            { "@type": "AdministrativeArea", "name": "Western Australia" },
            { "@type": "Country", "name": "Australia" }
          ]
        }
      }
    ]
  };

  const pillars = [
    {
      title: "The Standalone $995 Clarity Phase",
      desc: "No long contracts. We map out your entire entity framework and crawl accessibility before you spend a cent on execution."
    },
    {
      title: "What is Included in Your Blueprint",
      desc: "Receive a detailed technical gap analysis, entity optimization review, local tracking audit, and a step-by-step checklist."
    },
    {
      title: "The 100% Risk-Reversal Implementation Credit",
      desc: "If you decide to hire us to deploy the roadmap, we credit the entire $995 blueprint fee back to your implementation package."
    }
  ];

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

      <Navbar />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Navigation Links & Entity Map */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Our Solutions</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/solutions" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Solutions Overview
              </Link>
              <Link href="/solutions/aeo-blueprint" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                The AEObility Blueprint
              </Link>
              <Link href="/solutions/aeo-sprint" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AEO Sprints
              </Link>
              <Link href="/solutions/geo-services" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                GEO Services Sprint
              </Link>
            </nav>
          </div>

          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Our Services</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/services" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Services Overview
              </Link>
              <Link href="/services/aeo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Answer Engine Optimisation (AEO)
              </Link>
              <Link href="/services/ai-search-marketing" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AI Search Marketing
              </Link>
              <Link href="/services/geo-marketing" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Local & GEO Map Marketing
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>The Standalone $995 Clarity Phase</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              The AEObility <span className="text-gradient-aeo">Strategic Blueprint</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light">
              Get a deep technical audit and an actionable 90-day strategic roadmap for $995. Fully credited back if you choose us for implementation.
            </p>
          </div>

          {/* Premium printed Strategy mock-up design representation */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/80 shadow-2xl flex flex-col justify-between p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.08),transparent_50%)]" />
            <div className="flex justify-between items-start border-b border-white/10 pb-4 relative z-10">
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Blueprint Specification Document</p>
                <h4 className="text-sm font-bold text-white">AEObility MVP Strategy & Roadmapping</h4>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-aeo-purple/20 bg-aeo-purple/5 text-aeo-purple uppercase">v1.0.4 AUD</span>
            </div>
            <div className="grid grid-cols-2 gap-4 my-auto relative z-10 text-xs text-white/50">
              <div className="space-y-2 border-r border-white/5 pr-4">
                <p className="font-mono text-[9px] uppercase tracking-wider text-aeo-cyan">01 / Technical Gap Analysis</p>
                <p className="font-light leading-relaxed">Evaluation of indexing compliance issues, crawler accessibility limits, and entity identification flags.</p>
              </div>
              <div className="space-y-2 pl-2">
                <p className="font-mono text-[9px] uppercase tracking-wider text-aeo-purple">02 / 90-Day Roadmap Checklist</p>
                <p className="font-light leading-relaxed">Custom step-by-step milestones to deploy nested schemas and establish local tracking parameters.</p>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-neutral-400 relative z-10">
              <span>Risk-Free Onboarding Process Enabled</span>
              <span>100% Refundable Implementation Credit</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors">
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Product",
                      "name": pillar.title,
                      "description": pillar.desc,
                      "category": "Strategic Blueprint Pillar"
                    })
                  }}
                />
                <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                  <Sparkles className="w-5 h-5 text-aeo-cyan" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{pillar.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Deep Dive Section */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-bold">Unlocking Generative Index Ranks Without Commitment</h2>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Many local businesses in Perth run traditional marketing campaigns but fail to account for how machines read their business details. The Strategic Blueprint is a flat-rate clarity phase designed to perform a thorough technical gap analysis and an entity optimization review.
            </p>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              We trace exactly how crawler engines and LLM retrievals see your site, locate indexing conflicts in local directories, and output a detailed website visibility audit checklist.
            </p>
          </div>

          {/* Action List */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">What We Audit & Configure</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Validate crawler indexing permissions in site code files.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Assess local tracking audit metrics and map pin coordinates.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Examine entity schema structure for search database integrity.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Verify trust metrics and search index representation accuracy.</span>
              </li>
            </ul>
          </div>

          {/* Pricing CTA */}
          <div className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/5 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Claim Your Strategic Roadmap</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto font-light leading-relaxed">
              Order your Standalone $995 Clarity Phase. We build the roadmap, and credit the fee back in full if you hire us to implement it.
            </p>
            <div className="pt-4 flex justify-center">
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold rounded-xl hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,205,216,0.2)]"
              >
                <span>Get Visibility Score</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
