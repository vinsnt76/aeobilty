import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, MapPin, Map, Navigation, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "GEO Marketing Specialist & Services | AEObility",
  description: "Target geographic engine optimization (GEO) to dominate location-aware search spaces, map applications, and local discovery engines.",
  keywords: [
    "geo marketing",
    "geo consultant",
    "geo marketing company",
    "geo specialist",
    "geo marketing strategy",
    "geo marketing tools"
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
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/geo-marketing#service",
        "name": "GEO Marketing",
        "description": "Target geographic engine optimization (GEO) to dominate location-aware search spaces, map applications, and local discovery engines.",
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "provider": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        }
      }
    ]
  };

  const pillars = [
    {
      icon: <MapPin className="w-5 h-5 text-aeo-cyan" />,
      title: "Understanding Generative Engine Optimization (GEO)",
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
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
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
                Local & GEO Map Marketing
              </Link>
            </nav>
          </div>

          <div className="p-6 bg-gradient-to-br from-aeo-cyan/10 to-transparent border border-white/5 rounded-2xl space-y-4">
            <h4 className="text-sm font-bold text-white">Need immediate clarity?</h4>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Get a custom-crafted report looking at how Perplexity, ChatGPT, and Google Maps currently see your business.
            </p>
            <Link
              href="/#audit-form"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-aeo-cyan hover:underline"
            >
              <span>Get your Free Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>GEO Marketing Services: Geolocation-Aware Visibility</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              GEO <span className="text-gradient-aeo">Marketing Specialist</span> & Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light">
              Target geographic engine optimization (GEO) to dominate location-aware search spaces, map applications, and local discovery engines.
            </p>
          </div>

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
              Location-aware systems determine which local brands to suggest by filtering regional intent nodes and mapping coordinate parameters. Traditional local listings are parsed into broader spatial graphs used by LLMs to fulfill local prompts.
            </p>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              At AEObility, we combine structural coordinate mapping rules with proximity signals to ensure your local service nodes match exactly where search models place geographic queries.
            </p>
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
                <span>Optimize local maps category fields in location vector space.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Configure microdata elements using exact coordinate mapping rules.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
