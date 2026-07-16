import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, Layers, Zap } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services: AEO, AI Search & GEO Marketing | AEObility",
  description: "See how AEObility helps Australian small businesses become discoverable, understandable, and chosen across search engines, maps, and AI platforms.",
  keywords: [
    "Digital Marketing Specialist Perth",
    "aeo services",
    "geo marketing",
    "local business visibility",
    "get found on maps",
    "ai search strategy",
    "semantic site mapping",
    "structured optimisation",
    "conversion insights"
  ]
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/android-chrome-512x512.png"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "Australia"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://aeobility.com.au/#website",
        "name": "AEObility",
        "url": "https://aeobility.com.au/",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": ["WebPage", "AboutPage"],
        "@id": "https://aeobility.com.au/services#webpage",
        "url": "https://aeobility.com.au/services",
        "name": "Our Services: AEO, AI Search & GEO Marketing | AEObility",
        "description": "See how AEObility helps Australian small businesses become discoverable, understandable, and chosen across search engines, maps, and AI platforms.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/services#breadcrumb"
        },
        "mainEntity": {
          "@type": "ItemList",
          "name": "Our Core Service Layers",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Service",
                "name": "Answer Engine Optimisation (AEO)",
                "url": "https://aeobility.com.au/services/aeo",
                "description": "Optimise your digital footprint so modern LLMs (ChatGPT, Claude, Perplexity) easily extract, cite, and recommend your services.",
                "provider": {
                  "@id": "https://aeobility.com.au/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Service",
                "name": "Local & GEO Map Marketing",
                "url": "https://aeobility.com.au/services/geo-marketing",
                "description": "Ensure high visibility across Google Maps, Apple Maps, and immediate regional intent queries in Perth and across Australia.",
                "provider": {
                  "@id": "https://aeobility.com.au/#organization"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Service",
                "name": "AI Search Strategy",
                "url": "https://aeobility.com.au/services/ai-search-marketing",
                "description": "Design a long-term strategy to capture conversational queries, aligning your brand with complex search parameters.",
                "provider": {
                  "@id": "https://aeobility.com.au/#organization"
                }
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services#faq",
        "isPartOf": {
          "@id": "https://aeobility.com.au/services#webpage"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do AI Search and GEO Marketing work together?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. AI systems use location data to personalise answers. Strong GEO signals help AI understand where your business operates, while AI Search optimisation helps AI understand what you do."
            }
          },
          {
            "@type": "Question",
            "name": "Will this help me appear in AI-generated answers for local queries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. When someone asks an AI system for a local service, your structured data, GEO signals, and semantic clarity determine whether your business is included in the generated answer."
            }
          },
          {
            "@type": "Question",
            "name": "Is this relevant for service-based businesses in Australia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "More than ever. AI systems are rapidly replacing traditional search for local queries. Businesses in WA and across Australia need both GEO and AI Search optimisation to stay visible."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aeobility.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://aeobility.com.au/services"
          }
        ]
      }
    ]
  };

  const layers = [
    {
      title: "Answer Engine Optimisation (AEO)",
      tagline: "Be the answer LLMs retrieve.",
      desc: "Optimise your digital footprint so modern LLMs (ChatGPT, Claude, Perplexity) easily extract, cite, and recommend your services.",
      bullets: ["Structured schema markup", "Neural vector alignment", "Semantic question architecture"],
      href: "/services/aeo"
    },
    {
      title: "Local & GEO Map Marketing",
      tagline: "Put your business on the map.",
      desc: "Ensure high visibility across Google Maps, Apple Maps, and immediate regional intent queries in Perth and across Australia.",
      bullets: ["Optimised pins & citations", "GBP profile authority", "Local entity link building"],
      href: "/services/geo-marketing"
    },
    {
      title: "AI Search Strategy",
      tagline: "Own the conversational search corridors.",
      desc: "Design a long-term strategy to capture conversational queries, aligning your brand with complex search parameters.",
      bullets: ["Intent-to-product mapping", "LLM indexing checks", "Competitor gap analysis"],
      href: "/services/ai-search-marketing"
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
                <span>Digital Marketing Specialist Perth</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                AEO, AI Search & <br />
                <span className="text-gradient-aeo">GEO Marketing</span> Services
              </h1>
              <p className="text-lg text-white/70 font-light leading-relaxed max-w-xl">
                AEObility helps local Australian businesses transition into the era of AI. We make your services discoverable, understandable, and highly recommended.
              </p>
              <div className="pt-4">
                <Link
                  href="/diagnostic"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold rounded-xl hover:opacity-90 transition-opacity"
                >
                  <span>Get Visibility Score</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/50 shadow-2xl">
                <Image
                  src="/service-dashboard-layers.png"
                  alt="AEObility service dashboard showing optimisation layers"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
          </section>

          {/* Core Service Layers */}
          <section className="space-y-12 border-t border-white/5 pt-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Core Service Layers</h2>
              <p className="text-white/60 font-light leading-relaxed">
                We combine deep technical structure with semantic brand authority to secure top recommendation placements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {layers.map((layer, idx) => (
                <Link
                  key={idx}
                  href={layer.href}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-aeo-cyan/20 transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-aeo-cyan transition-colors">{layer.title}</h3>
                      <ArrowRight className="w-5 h-5 text-white/25 group-hover:text-aeo-cyan group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-xs text-aeo-cyan font-medium uppercase tracking-wider">{layer.tagline}</p>
                    <p className="text-sm text-white/60 font-light leading-relaxed">{layer.desc}</p>
                  </div>
                  <ul className="space-y-2 pt-6 mt-6 border-t border-white/5">
                    {layer.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex gap-2 items-center text-xs text-white/80 font-light">
                        <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </section>

          {/* Machine Understanding Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/5 pt-16">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/50 shadow-2xl">
                <Image
                  src="/services-intent-matrix.png"
                  alt="Matrix graphic showing services grouped by user intent"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-white">Built for Machine Understanding</h2>
              <p className="text-base text-white/70 font-light leading-relaxed">
                Before search engines or conversational AI tools can recommend your brand, they must understand your site structure. We implement comprehensive <span className="font-semibold text-white">semantic site mapping</span> and <span className="font-semibold text-white">structured optimisation</span> so vector-based retrieval engines can easily ingest, map, and index your business details.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 mt-1">
                    <Layers className="w-4 h-4 text-aeo-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Topical Graph Nodes</h4>
                    <p className="text-xs text-white/60 font-light leading-relaxed">We map your services into relational semantic node sets that match target queries.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 mt-1">
                    <ShieldCheck className="w-4 h-4 text-aeo-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Schema Verification</h4>
                    <p className="text-xs text-white/60 font-light leading-relaxed">We validate all microdata formatting templates directly against Google and schema.org standard models.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Human Selection Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/5 pt-16">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-bold text-white">Engineered for Human Selection</h2>
              <p className="text-base text-white/70 font-light leading-relaxed">
                Showing up is only half the battle. Once an answer engine lists your brand as a primary citation, we ensure your message is compelling. We track <span className="font-semibold text-white">conversion insights</span> and optimize context to make sure target clients click, contact, and trust your brand.
              </p>
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
                <div className="flex gap-3 items-center text-xs font-bold uppercase tracking-wider text-aeo-cyan">
                  <Zap className="w-4 h-4" />
                  <span>The Final Selection Formula</span>
                </div>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Machines filter by authority and context; humans decide based on reviews, proximity, clarity, and trust. Our combined AEO & local MAP strategies optimise for both layers, turning citations into conversions.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 p-8 bg-gradient-to-br from-aeo-cyan/10 to-aeo-purple/10 border border-white/5 rounded-3xl text-center space-y-6">
              <h3 className="text-2xl font-bold">Ready to get started?</h3>
              <p className="text-sm text-white/60 font-light max-w-sm mx-auto">
                Discover where your business ranks across AI platforms and Google Maps today.
              </p>
              <div>
                <Link
                  href="/diagnostic"
                  className="flex items-center gap-2 px-5 py-2.5 bg-aeo-cyan text-black text-xs font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_15px_rgba(0,205,216,0.2)]"
                >
                  <span>Get Visibility Score</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="border-t border-white/5 pt-16">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-white text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group bg-white/[0.02] border border-white/5 rounded-xl p-6 cursor-pointer open:bg-white/[0.04] transition-colors">
                  <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center">
                    Do AI Search and GEO Marketing work together?
                    <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                    Absolutely. AI systems use location data to personalise answers. Strong GEO signals help AI understand where your business operates, while AI Search optimisation helps AI understand what you do.
                  </p>
                </details>
                <details className="group bg-white/[0.02] border border-white/5 rounded-xl p-6 cursor-pointer open:bg-white/[0.04] transition-colors">
                  <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center">
                    Will this help me appear in AI-generated answers for local queries?
                    <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                    Yes. When someone asks an AI system for a local service, your structured data, GEO signals, and semantic clarity determine whether your business is included in the generated answer.
                  </p>
                </details>
                <details className="group bg-white/[0.02] border border-white/5 rounded-xl p-6 cursor-pointer open:bg-white/[0.04] transition-colors">
                  <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center">
                    Is this relevant for service-based businesses in Australia?
                    <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                    More than ever. AI systems are rapidly replacing traditional search for local queries. Businesses in WA and across Australia need both GEO and AI Search optimisation to stay visible.
                  </p>
                </details>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
