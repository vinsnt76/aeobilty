import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Compass, Layers, Boxes, Network, ShieldCheck, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { PRICING_CONFIG } from '@/lib/brandFacts';

export const metadata: Metadata = {
  title: "AEO Services, Sprints & Clear Pricing | AEObility",
  description: "Explore transparent AEO services, Micro-Sprints, and Foundation Implementation starting from $495 AUD. Scoped work for Australian businesses across Search, Maps, and AI.",
  alternates: {
    canonical: "https://aeobility.com.au/solutions",
  },
  keywords: [
    "AEO Services Australia",
    "transparent digital marketing pricing",
    "AEO technical sprints",
    "90-day marketing roadmap",
    "strategic audit and roadmap",
    "no-contract marketing agency",
    "pricing clarity",
    "local visibility sprints"
  ]
};

export default function SolutionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AEObility 90-Day Success Blueprint",
    "description": "A strategic audit and 90-day roadmap to improve how search engines, Maps and AI systems understand your business.",
    "brand": {
      "@type": "Brand",
      "name": "AEObility"
    },
    "offers": {
      "@type": "Offer",
      "price": `${PRICING_CONFIG.blueprint.price}.00`,
      "priceCurrency": PRICING_CONFIG.currency,
      "url": "https://aeobility.com.au/solutions",
      "areaServed": "AU"
    }
  };

  const decisionStrip = [
    {
      feeling: "“I’m not sure what is holding us back.”",
      solution: "The AEObility Blueprint",
      href: "/solutions/aeo-blueprint"
    },
    {
      feeling: "“I know the issue and need it fixed.”",
      solution: "A Micro-Sprint",
      href: "/solutions/aeo-sprint"
    },
    {
      feeling: "“We have several important issues to address.”",
      solution: "Foundation Implementation",
      href: "/contact"
    }
  ];

  const buildingBlocks = [
    {
      id: "S1",
      title: "S1: Schema & Semantic Mapping",
      achieves: "Clarify business, service and location information",
      application: "Structured data, service relationships and location signals",
      icon: <Layers className="w-5 h-5 text-aeo-cyan" />
    },
    {
      id: "S2",
      title: "S2: Answer-Ready Content",
      subtitle: "(Formerly Atomic Answer Blocks)",
      achieves: "Make key pages clearer for customers and search systems",
      application: "Page sections, FAQs, service explanations and proof points",
      icon: <Boxes className="w-5 h-5 text-aeo-cyan" />
    },
    {
      id: "S3",
      title: "S3: Internal Linking & Content Connections",
      subtitle: "(Formerly Semantic Lattice Linking)",
      achieves: "Connect related service, location and supporting pages",
      application: "Contextual internal links, navigation paths and topic relationships",
      icon: <Network className="w-5 h-5 text-aeo-cyan" />
    },
    {
      id: "S4",
      title: "S4: Brand Facts & Consistency",
      achieves: "Create a reliable central source of business information",
      application: "Brand Facts Page, core business claims, service details and trust information",
      icon: <ShieldCheck className="w-5 h-5 text-aeo-cyan" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.solutions} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {/* 1. Hero Section */}
          <section className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <Compass className="w-4 h-4 text-aeo-cyan" />
              <span>Clear Pricing & Scoped Engagements</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              AEO Services, Sprints & <span className="text-gradient-aeo">Clear Pricing</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
              Choose a clear roadmap, fix one priority issue or build stronger foundations across Search, Maps and AI. No locked-in contracts—just clearly scoped work and transparent pricing.
            </p>
            <div className="pt-2">
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-base transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.3)] cursor-pointer"
              >
                <span>Get a Free Visibility Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* 2. The Three Engagement Paths */}
          <section className="space-y-8 border-t border-white/10 pt-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Choose Your Engagement Path</h2>
              <p className="text-white/60 text-sm font-light">
                Transparent, fixed-price implementation designed specifically for Australian small businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              
              {/* Path 1: Start with a Blueprint */}
              <div className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider font-mono">1. Start with a Blueprint</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-cyan-300 font-mono">${PRICING_CONFIG.blueprint.price} AUD</span>
                      <span className="text-[10px] text-zinc-500 font-mono block">ex. GST</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{PRICING_CONFIG.blueprint.title}</h3>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      Understand what is limiting your visibility, then receive a prioritised 90-day action plan.
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-zinc-300 pt-2">
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
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider font-mono">2. Fix One Priority</span>
                      <div className="text-right">
                        <span className="text-sm font-bold text-cyan-300 font-mono">From ${PRICING_CONFIG.microSprints.basePriceFrom} AUD</span>
                        <span className="text-[10px] text-zinc-500 font-mono block">ex. GST</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">Micro-Sprints</h3>
                      <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                        A focused, fixed-scope sprint for a defined website, content or local-visibility issue.
                      </p>
                    </div>

                    <ul className="space-y-2.5 text-xs text-zinc-300 pt-2">
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
                      <span>Explore Micro-Sprints</span>
                      <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Path 3: Build the Foundation */}
              <div className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">3. Build the Foundation</span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-cyan-300 font-mono">From ${PRICING_CONFIG.foundation.basePriceFrom} AUD</span>
                      <span className="text-[10px] text-zinc-500 font-mono block">ex. GST</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Foundation Implementation</h3>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      For businesses with several connected priorities, combining the most important technical, content and local-visibility improvements into one structured programme.
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-zinc-300 pt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{PRICING_CONFIG.foundation.deliveryWindow}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Priorities selected through your Blueprint or initial scoping</span>
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
                    <span>Explore Foundation Implementation</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </section>

          {/* 3. Decision Strip (Quick Self-Selection) */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Self-Selection Guide</h2>
              <p className="text-xs text-white/60">Find the right starting point for your business goals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {decisionStrip.map((item, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-5 rounded-xl flex flex-col justify-between space-y-4 hover:border-aeo-cyan/30 transition">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">If this sounds like you</span>
                    <p className="text-sm font-medium text-white italic">{item.feeling}</p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-aeo-cyan block">Best starting point</span>
                      <span className="text-xs font-bold text-white">{item.solution}</span>
                    </div>
                    <Link
                      href={item.href}
                      className="p-2 bg-white/5 border border-white/10 rounded-lg text-aeo-cyan hover:bg-aeo-cyan/20 transition"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Technical Building Blocks (Reframed Modules) */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Technical Building Blocks</h2>
              <p className="text-xs text-white/60">Modular building blocks used in Micro-Sprints and Foundation Implementation.</p>
            </div>

            {/* Mobile-Friendly Stacked List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {buildingBlocks.map((block) => (
                <div key={block.id} className="bg-zinc-950/80 border border-white/10 rounded-xl p-5 space-y-3 hover:border-aeo-cyan/30 transition">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black border border-white/10 rounded-lg">
                      {block.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{block.title}</h3>
                      {block.subtitle && (
                        <span className="text-[10px] text-zinc-500 font-mono block">{block.subtitle}</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-zinc-500 block">What it helps achieve</span>
                      <span className="text-white/90">{block.achieves}</span>
                    </div>
                    <div className="pt-1">
                      <span className="text-[10px] uppercase font-mono text-zinc-500 block">Typical application</span>
                      <span className="text-white/70">{block.application}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. No Lock-In Trust Banner */}
          <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>Transparent & Risk-Free</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Clearly Scoped, Fixed Pricing</h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              No long-term contracts, lock-in commitments, or hidden retainer fees. Every engagement is scoped with explicit deliverables, milestones, and handover documentation.
            </p>
          </section>

          {/* 6. Contact CTA */}
          <section className="border-t border-white/10 pt-16 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
            <p className="text-sm text-zinc-400 max-w-md mx-auto">
              Have questions or want to discuss the best path for your business? Get in touch with our Perth team today.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-100 transition-all duration-300 cursor-pointer shadow-lg"
              >
                <span>Talk to Vince Baker</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
