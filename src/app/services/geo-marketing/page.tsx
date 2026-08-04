import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, MapPin, Map, Navigation, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteFormSection from '@/components/QuoteFormSection';

export const metadata = {
  title: "AEObility GEO Marketing Services for Perth SMBs | AEObility",
  description: "AEObility helps Perth SMBs improve local visibility through GEO Marketing. Your local GEO marketing company and specialist consultant for geolocation‑aware visibility. We optimise geographic engine performance (GEO) to help Perth businesses dominate location‑aware search, map applications, and local discovery engines.",
  keywords: [
    "geo marketing",
    "geo consultant perth",
    "geo marketing company perth",
    "geo specialist perth",
    "geo marketing strategy",
    "geo marketing tools perth"
  ],
  alternates: {
    canonical: "https://aeobility.com.au/services/geo-marketing",
  },
};

export default function GEOMarketingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/services/geo-marketing",
        "url": "https://aeobility.com.au/services/geo-marketing",
        "name": "AEObility GEO Marketing Services for Perth SMBs",
        "description": "GEO Marketing services for Australian SMBs. AEObility improves local visibility across Search, Maps and AI by strengthening proximity signals, location nodes and regional intent clarity.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "@id": "https://aeobility.com.au/services/geo-marketing#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://aeobility.com.au"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://aeobility.com.au/services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "GEO Marketing",
              "item": "https://aeobility.com.au/services/geo-marketing"
            }
          ]
        },
        "mainEntity": {
          "@id": "https://aeobility.com.au/services/geo-marketing#service"
        },
        "hasPart": [
          {
            "@type": "WebPage",
            "name": "Answer Engine Optimisation",
            "url": "https://aeobility.com.au/services/aeo",
            "description": "AEO improves how AI systems interpret your business and extract clear answers."
          },
          {
            "@type": "WebPage",
            "name": "AI Search Strategy",
            "url": "https://aeobility.com.au/services/ai-search-marketing",
            "description": "Long-term strategy for conversational search and generative engine visibility."
          }
        ],
        "about": [
          {
            "@type": "Thing",
            "name": "GEO Marketing"
          },
          {
            "@type": "Thing",
            "name": "Local Intent Signals"
          },
          {
            "@type": "Thing",
            "name": "Proximity Signals"
          },
          {
            "@type": "Thing",
            "name": "Regional Intent Nodes"
          },
          {
            "@type": "Thing",
            "name": "Location Vector Space"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://aeobility.com.au/#organisation",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "description": "AEO and GEO Marketing services for Australian small businesses. AEObility helps your business appear, make sense and stand out across Search, Maps and AI.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Perth",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "postalCode": "6000",
          "addressCountry": "Australia"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Perth, Australia"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -31.9523,
          "longitude": 115.8613
        }
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/geo-marketing#service",
        "name": "GEO Marketing",
        "serviceType": "Geolocation-Aware Visibility",
        "category": "AEO Services",
        "url": "https://aeobility.com.au/services/geo-marketing",
        "description": "GEO Marketing improves how your business appears in location-aware search, map applications and AI assistants. AEObility strengthens proximity signals, regional intent nodes and structured location clarity for Perth SMBs.",
        "provider": {
          "@id": "https://aeobility.com.au/#organisation"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Perth, Australia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Australian SMBs and local service businesses"
        },
        "isRelatedTo": [
          {
            "@type": "Service",
            "name": "Answer Engine Optimisation",
            "url": "https://aeobility.com.au/services/aeo",
            "description": "AEO improves how AI systems interpret your business and extract clear answers."
          },
          {
            "@type": "Service",
            "name": "AI Search Strategy",
            "url": "https://aeobility.com.au/services/ai-search-marketing",
            "description": "Long-term strategy for conversational search and generative engine visibility."
          }
        ],
        "offers": {
          "@type": "Offer",
          "url": "https://aeobility.com.au/solutions/aeo-blueprint",
          "priceCurrency": "AUD",
          "price": "995",
          "description": "The AEObility Blueprint is a deeper technical audit and 90-day roadmap that shows exactly how to improve visibility, understanding and selection across Search, Maps and AI."
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/geo-marketing#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is GEO Marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GEO Marketing improves how your business appears in location‑aware search, map applications and AI assistants. It strengthens your local signals so engines like Google Maps, Apple Maps and generative models can correctly interpret where you operate and who you serve."
            }
          },
          {
            "@type": "Question",
            "name": "How does GEO support AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GEO builds the location clarity that AEO relies on. When your coordinates, service areas and proximity signals are structured properly, answer engines can confidently match your business to nearby customers and include you in local recommendations."
            }
          },
          {
            "@type": "Question",
            "name": "What does a GEO strategy involve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A GEO strategy includes mapping your service areas, structuring location nodes, improving proximity signals and ensuring your business details are consistent across all platforms. This helps AI systems understand your footprint and present you accurately."
            }
          },
          {
            "@type": "Question",
            "name": "Who benefits most from GEO Marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Australian service businesses that rely on local enquiries benefit most. Clear location signals help plumbers, electricians, childcare centres and other SMBs appear more often in map results and AI‑generated local suggestions."
            }
          }
        ]
      }
    ]
  };

  const pillars = [
    {
      icon: <MapPin className="w-5 h-5 text-aeo-cyan" />,
      title: "Understanding Generative Engine Optimisation (GEO)",
      desc: "Align your business within the location vector space to ensure generative map packs and location-aware AI engines query and surface your brand."
    },
    {
      icon: <Map className="w-5 h-5 text-aeo-purple" />,
      title: "Structuring Location Nodes for Scrapers",
      desc: "Format schema structures and coordinate mapping rules so LLMs and web scrapers link your physical pins with highly relevant intent searches."
    },
    {
      icon: <Navigation className="w-5 h-5 text-aeo-cyan" />,
      title: "Hyper-Local Market Strategy",
      desc: "Implement regional intent nodes and coordinate parameters that feed proximity signals directly into real-time local search packs."
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
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 md:py-16 w-full flex flex-col gap-10">
        {/* Top Hero Section: Intro Text & Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <span>Geolocation-Aware Visibility</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              AEObility GEO Marketing Services <br className="hidden sm:block" />
              for <span className="text-gradient-aeo">Perth SMBs</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
              AEObility helps Perth SMBs improve local visibility through GEO Marketing as a specialised sub-pillar of our overarching <Link href="/services/aeo" className="text-aeo-cyan underline hover:text-white transition-colors font-medium">AEO Services</Link>. As your local GEO marketing company and specialist consultant, we optimise geographic engine performance (GEO) to help Perth businesses dominate location‑aware search, map applications, and local discovery engines.
            </p>
          </div>

          {/* Hero Banner Image */}
          <div className="lg:col-span-5 relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group">
            <Image
              src="/geo-marketing-perth_AEObility.webp"
              alt="AEObility GEO Marketing Services for Perth SMBs displaying geolocation-aware vector mesh nodes, local map pack coordinate signals, and AI spatial search optimisation for Perth Western Australia businesses."
              width={1200}
              height={675}
              priority
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 2-Column Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6 border-t border-white/5">
          {/* Left Side: Services Directory Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
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
                <Link href="/services/geo-marketing" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                  Local &amp; GEO Map Marketing
                </Link>
              </nav>
            </div>

            <div className="p-6 bg-gradient-to-br from-aeo-cyan/10 to-transparent border border-white/5 rounded-2xl space-y-4">
              <h4 className="text-sm font-bold text-white">Need immediate clarity?</h4>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Get a custom-crafted report and <Link href="/diagnostic" className="text-aeo-cyan underline hover:text-white transition-colors font-medium">Free Visibility Audit</Link> looking at how Perplexity, ChatGPT, and Google Maps currently see your business.
              </p>
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-neutral-100 transition-all duration-300 text-xs sm:text-sm"
              >
                <span>Free Visibility Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>

          {/* Right Side: Core Content */}
          <section className="lg:col-span-8 flex flex-col gap-10">
            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors">
                  <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                    {pillar.icon}
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">{pillar.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Deep Dive Section */}
            <div className="space-y-6 border-t border-white/5 pt-10">
              <h2 className="text-2xl font-bold">Connecting Local Users With Location-Aware Engines</h2>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                Location-aware systems determine which local brands to suggest by filtering regional intent nodes and mapping coordinate parameters. GEO works seamlessly alongside our broader <Link href="/services/ai-search-marketing" className="text-aeo-cyan underline hover:text-white transition-colors font-medium">AI Search Strategy</Link> to ensure generative search models interpret your local footprint with absolute precision.
              </p>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                At AEObility, we combine structural coordinate mapping rules with proximity signals to ensure your local service nodes match exactly where search models place geographic queries. For an in-depth technical breakdown, explore <Link href="/knowledge-hub/geo" className="text-aeo-cyan underline hover:text-white transition-colors font-medium">Understanding Local Intent Signals</Link> in our Knowledge Hub.
              </p>
            </div>

            {/* Strategic Mid-Page CTA Callout to Quote Form */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-aeo-cyan/10 via-white/[0.02] to-aeo-purple/10 border border-aeo-cyan/30 text-center space-y-4 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 text-aeo-cyan border border-aeo-cyan/20 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dominate Perth Maps &amp; Geolocation AI Search</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Need a Tailored GEO Marketing Strategy for Your Perth Business?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light leading-relaxed">
                Get a custom quote and local visibility roadmap for your brand across Google Maps, Apple Maps, ChatGPT, and Perplexity.
              </p>
              <div className="pt-2">
                <Link
                  href="#quote-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs sm:text-sm rounded-xl hover:scale-[1.03] transition-all shadow-lg shadow-aeo-cyan/20 cursor-pointer"
                >
                  <span>Request a Quote &bull; Get Custom Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Frequently Asked Questions: GEO Marketing */}
            <div className="space-y-6 border-t border-white/5 pt-10">
              <div className="flex items-center gap-2 text-aeo-cyan font-bold text-xs tracking-widest uppercase">
                <HelpCircle className="w-4 h-4" />
                <span>Knowledge &amp; Clarity</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Frequently Asked Questions: GEO Marketing</h2>
              
              <div className="space-y-4">
                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2 hover:border-white/10 transition-colors">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-aeo-cyan font-mono text-xs">[01]</span> What is GEO Marketing?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                    GEO Marketing improves how your business appears in location‑aware search, map applications and AI assistants. It strengthens your local signals so engines like Google Maps, Apple Maps and generative models can correctly interpret where you operate and who you serve.
                  </p>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2 hover:border-white/10 transition-colors">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-aeo-cyan font-mono text-xs">[02]</span> How does GEO support AEO?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                    GEO builds the location clarity that AEO relies on. When your coordinates, service areas and proximity signals are structured properly, answer engines can confidently match your business to nearby customers and include you in local recommendations.
                  </p>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2 hover:border-white/10 transition-colors">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-aeo-cyan font-mono text-xs">[03]</span> What does a GEO strategy involve?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                    A GEO strategy includes mapping your service areas, structuring location nodes, improving proximity signals and ensuring your business details are consistent across all platforms. This helps AI systems understand your footprint and present you accurately.
                  </p>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2 hover:border-white/10 transition-colors">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-aeo-cyan font-mono text-xs">[04]</span> Who benefits most from GEO Marketing?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                    Australian service businesses that rely on local enquiries benefit most. Clear location signals help plumbers, electricians, childcare centres and other SMBs appear more often in map results and AI‑generated local suggestions.
                  </p>
                </div>
              </div>

              {/* Explicit High-Intent Contact Conversion Link */}
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs mt-6">
                <span className="text-white/60">Have specific questions about your local search presence in Perth?</span>
                <Link href="/contact" className="text-aeo-cyan hover:underline font-bold inline-flex items-center gap-1 whitespace-nowrap">
                  <span>Book a Clarity Call</span> <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Checklist */}
            <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-white">GEO Map Pack Optimisation Checklist</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex gap-2 items-start text-xs font-light text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span>Synchronize business details to match proximity signal rules.</span>
                </li>
                <li className="flex gap-2 items-start text-xs font-light text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span>Verify location nodes are fully crawlable by search scrapers.</span>
                </li>
                <li className="flex gap-2 items-start text-xs font-light text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span>Optimise local maps category fields in location vector space.</span>
                </li>
                <li className="flex gap-2 items-start text-xs font-light text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span>Configure microdata elements using exact coordinate mapping rules.</span>
                </li>
              </ul>
            </div>

            {/* Radial Proof Evidence (Secondary Contextual Link) */}
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between text-xs">
              <span className="text-white/60">Real-world GEO &amp; AEO implementation proof:</span>
              <Link href="/knowledge-hub/case-studies/baby-bento" className="text-aeo-cyan hover:underline font-medium inline-flex items-center gap-1">
                Read Baby Bento Case Study <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Phase 3 Linear Conversion Corridor Banner */}
            <div className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/5 rounded-3xl text-center space-y-6">
              <h3 className="text-2xl font-bold text-white">Dominate Location-Aware Search &amp; Maps</h3>
              <p className="text-sm text-white/60 max-w-lg mx-auto font-light leading-relaxed">
                Start with our $995 AEObility <Link href="/solutions/aeo-blueprint" className="text-aeo-cyan underline hover:text-white font-medium">90-Day Blueprint</Link>. Get a full local intent audit and a 90-day execution roadmap, or explore full <Link href="/" className="text-aeo-cyan underline hover:text-white font-medium">AEO Services for Australian Businesses</Link> on our homepage.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/solutions/aeo-blueprint"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_15px_rgba(0,205,216,0.2)]"
                >
                  <span>Get 90-Day Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/10 transition-all cursor-pointer"
                >
                  <span>Book a Clarity Call</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Interactive Contact & Quote Request Form */}
      <div className="max-w-6xl mx-auto px-6 pb-16 w-full">
        <QuoteFormSection />
      </div>

      <Footer />
    </div>
  );
}
