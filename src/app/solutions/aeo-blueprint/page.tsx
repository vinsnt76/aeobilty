import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { ArrowRight, CheckCircle2, Compass, ShieldCheck, Calendar, UserCheck, Layers, BarChart3, Map, FileText } from 'lucide-react';
import { PRICING_CONFIG } from '@/lib/brandFacts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The AEObility Blueprint | 90-Day Strategy & Audit",
  description: "Understand what is limiting your visibility across Search, Maps and AI. Get a practical 90-day action plan for a fixed price of $995 AUD ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/solutions/aeo-blueprint",
  },
  keywords: [
    "AEObility Blueprint",
    "AEO strategic audit",
    "90-day marketing roadmap",
    "structured data audit",
    "local visibility audit",
    "search visibility scorecard",
    "fixed price marketing audit Australia"
  ]
};

export default function AEOBlueprintPage() {
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
        "description": "A practical audit and 90-day action plan identifying the highest-priority opportunities across your website, structured data, business information and local visibility.",
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
            "description": "Excluding GST; 100% credited towards eligible implementation work."
          }
        }
      }
    ]
  };

  const deliverables = [
    {
      icon: <Layers className="w-6 h-6 text-aeo-cyan" />,
      title: "Website & Structured Data Review",
      description: "A detailed evaluation of your website's structural architecture and existing schema markup. We identify exactly where search platforms encounter confusion or indexing limits."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-aeo-purple" />,
      title: "Visibility Scorecard & Gaps",
      description: "A clear scorecard evaluating your business across Search, Maps and generative AI platforms, pinpointing immediate performance opportunities."
    },
    {
      icon: <Map className="w-6 h-6 text-aeo-cyan" />,
      title: "90-Day Implementation Roadmap",
      description: "A step-by-step priority roadmap mapping out the most impactful technical, content and local-visibility adjustments tailored to your business goals."
    },
    {
      icon: <FileText className="w-6 h-6 text-aeo-purple" />,
      title: "Content & Service Information Audit",
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

          {/* Section A: Hero Block */}
          <section className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <Compass className="w-4 h-4 text-aeo-cyan" />
              <span>Strategic Audit (Code: {PRICING_CONFIG.blueprint.code})</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              The AEObility Blueprint
            </h1>
            <h2 className="text-base sm:text-lg text-white/70 font-light leading-relaxed font-serif max-w-2xl mx-auto">
              A practical audit and 90-day action plan identifying the highest-priority opportunities across your website, structured data, business information and local visibility. Fixed price of ${PRICING_CONFIG.blueprint.price} AUD (ex. GST).
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-base transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.3)] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Book a Blueprint Strategy Call</span>
              </Link>
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-900 border border-white/15 hover:border-aeo-cyan text-white font-semibold text-base transition-all duration-300 hover:bg-zinc-800 cursor-pointer"
              >
                <span>Run a Free Visibility Scan</span>
                <ArrowRight className="w-4 h-4 text-aeo-cyan" />
              </Link>
            </div>
          </section>

          {/* Section B: Core Deliverables Matrix (Four Responsive Cards) */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">What You Receive in Your Blueprint</h2>
              <p className="text-xs text-white/60 font-serif">Four core deliverables designed to provide complete clarity and immediate action.</p>
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
          </section>

          {/* Section C: Fixed Pricing & Credit-Back Trust Banner */}
          <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-cyan-500/30 rounded-2xl p-8 text-center space-y-4 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>100% Fee Credit Guarantee</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-soehne-breit">
              Fixed Price: ${PRICING_CONFIG.blueprint.price} AUD (ex. GST). No hidden retainers.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed font-serif">
              Every dollar spent on your AEObility Blueprint is credited 100% back towards eligible implementation work if you choose to fix your gaps with us.
            </p>
          </section>

          {/* Section D: "How the Audit Works" Operational Timeline */}
          <section className="border-t border-white/10 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How the Audit Works</h2>
              <p className="text-xs text-white/60 font-serif">A simple 3-step operational workflow from initial booking to strategic handover.</p>
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

          {/* Section E: The Technical Specifications */}
          <section className="border-t border-white/10 pt-16 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-soehne-breit">The areas we cross-examine</h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif leading-relaxed">
                To build absolute trust for technical and agency buyers, our analysis investigates:
              </p>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-white/80 font-serif">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Local business profile structures, geographic coordinates, and hyper-local citation alignment (NAP).</span>
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
                  <span>Internal context link webs and topic connectivity across service nodes.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section F: Bottom Conversion CTA Block */}
          <section className="border-t border-white/10 pt-16 text-center space-y-6">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Ready for Complete Clarity?</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Order your AEObility Blueprint today for ${PRICING_CONFIG.blueprint.price} AUD (ex. GST) and receive your prioritised 90-day action plan.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-100 transition-all duration-300 cursor-pointer shadow-lg text-sm"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Discuss Your Blueprint Strategy</span>
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-2">
                <UserCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>You will speak directly with AEObility's founder, Vince Baker. No sales pitches—just practical next steps for your business.</span>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
