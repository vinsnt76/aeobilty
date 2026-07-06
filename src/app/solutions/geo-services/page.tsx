import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, CheckCircle2, MapPin, Globe, Compass, Star } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "GEO Consultant Services & Local Visibility Sprints",
  description: "Deploy location-aware optimization rules. Clean coordinates, nested maps schema, and hyper-local citation structures to dominate regional search.",
  alternates: {
    canonical: "https://aeobility.com.au/solutions/geo-services",
  },
};

export default function GEOServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/solutions/geo-services#service",
        "name": "GEO Consultant & Local Visibility Sprints",
        "description": "Deploy location-aware optimization rules. Clean coordinates, nested maps schema, and hyper-local citation structures to dominate regional search.",
        "provider": {
          "@type": "Organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        }
      }
    ]
  };

  const pillars = [
    {
      title: "Mapping Hyper-Local Coordinate Nodes",
      desc: "We inject clean coordinate precision data into website metadata, ensuring maps scrapers map your services accurately."
    },
    {
      title: "Building Verified Map Pack Foundations",
      desc: "Synchronize coordinates, citation listings, and GBP authority indicators to secure top local pack placements."
    },
    {
      title: "Regional Intent Content Frameworks",
      desc: "Restructure service area layouts so AI search algorithms match geographic queries to your localized entity footprint."
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
              <Link href="/solutions/aeo-blueprint" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                The AEObility Blueprint
              </Link>
              <Link href="/solutions/aeo-sprint" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AEO Sprints
              </Link>
              <Link href="/solutions/geo-services" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
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
              <span>GEO Services: Hyper-Local Map & Proximity Sprints</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              GEO Consultant <span className="text-gradient-aeo">Services</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light">
              Deploy location-aware optimization rules. Clean coordinates, nested maps schema, and hyper-local citation structures to dominate regional search.
            </p>
          </div>

          {/* Minimal map vector graphic pinning multi-location business area cleanly */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 p-6 flex flex-col justify-between shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
            <div className="flex justify-between items-center relative z-10 border-b border-white/5 pb-3">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Local Footprint Pin Array</span>
              <span className="text-[9px] font-mono text-aeo-cyan bg-aeo-cyan/10 px-2 py-0.5 rounded border border-aeo-cyan/25">Coordinates: Perth WA</span>
            </div>
            <div className="grid grid-cols-3 gap-6 relative z-10 my-auto text-center">
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <MapPin className="w-5 h-5 text-aeo-cyan mx-auto" />
                <p className="text-xs font-bold text-white">Central Hub Node</p>
                <p className="text-[10px] text-white/40 font-mono">lat: -31.9505, lon: 115.8605</p>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <Globe className="w-5 h-5 text-aeo-purple mx-auto" />
                <p className="text-xs font-bold text-white">Salience Matching</p>
                <p className="text-[10px] text-white/40 font-mono">Radius: 25km (Dominant)</p>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <Star className="w-5 h-5 text-aeo-cyan mx-auto animate-pulse" />
                <p className="text-xs font-bold text-white">Authority Peak</p>
                <p className="text-[10px] text-white/40 font-mono">Status: Verified Map Sync</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 relative z-10 pt-3 border-t border-white/5">
              <span>Hyper-Local Coordination Mapping: Active</span>
              <span>Proximity Signal strength: 98%</span>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors">
                <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                  <Compass className="w-5 h-5 text-aeo-cyan" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{pillar.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Deep Dive Section */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-bold">Dominate Geolocation-Aware Discoveries</h2>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              Mobile and spatial AI models rely heavily on coordinate parameters, regional intent structures, and verified footprint arrays to recommend nearby services. Standard SEO directories no longer guarantee map pack placements.
            </p>
            <p className="text-sm text-white/70 leading-relaxed font-light">
              As your GEO consultant, we structure local footprint arrays, optimize map coordinates, and align proximity signals so that regional intent query pathways connect target users straight to your location nodes.
            </p>
          </div>

          {/* Action List */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">GEO Sprint Deliverables</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Inject precise coordinate mapping rules in local code markup.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Synchronize location coordinates across Google and Apple Maps profiles.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Deploy location salience matching patterns in area pages.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Align local citation tags to strengthen regional intent relevance.</span>
              </li>
            </ul>
          </div>

          {/* Pricing CTA */}
          <div className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/5 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Secure Your Hyper-Local Map Dominance</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto font-light leading-relaxed">
              Partner with our GEO consultant team for rapid location sprints in Perth and across Australia.
            </p>
            <div className="flex justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-neutral-100 transition-all"
              >
                <span>Book a GEO Consultation</span>
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
