import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "Local Business Visibility across Maps & AI Search",
  description: "Ensure your local service business surfaces instantly in local map packs, AI assistants, and proximity engines. Built for Aussie trades and clinics.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/local-business",
  },
};

export default function LocalBusinessAEOPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://aeobility.com.au/services/aeo/local-business#service",
    "name": "Local Business Visibility",
    "description": "Ensure your local service business surfaces instantly in local map packs, AI assistants, and proximity engines. Built for Aussie trades and clinics.",
    "provider": {
      "@type": "Organization",
      "name": "AEObility",
      "@id": "https://aeobility.com.au"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    }
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

      <Navbar />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Navigation Links & Entity Map */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">AEO Knowledge Hub</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/services/aeo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                Hub Overview
              </Link>
              <Link href="/services/aeo/definition" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                1. What is AEO and why does it matter?
              </Link>
              <Link href="/services/aeo/comparison" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                2. Is AEO just SEO with a new name?
              </Link>
              <Link href="/services/aeo/procedures" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                3. How do I make my business AI-readable?
              </Link>
              <Link href="/services/aeo/constraints" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                4. What stops my business from showing up?
              </Link>
              <Link href="/services/aeo/costs-timing" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                5. How much does AEO cost & what do I get?
              </Link>
              <Link href="/services/aeo/shopify" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                6. Shopify AEO Services
              </Link>
              <Link href="/services/aeo/local-business" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                7. Local Business Visibility
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Local Business Visibility: <span className="text-gradient-aeo">GEO & AI Search System</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              Ensure your local service business surfaces instantly in local map packs, AI assistants, and proximity engines. Built for Aussie trades and clinics.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01]">
              <div className="p-6">
                <h3 className="font-semibold text-sm sm:text-base text-white/95 mb-2">Dominating Local Map Packs</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4">
                  Appearing in the top 3 Map Pack results is critical for local businesses. We optimize your Google Business Profile, ensure NAP (Name, Address, Phone) consistency across the web, and build robust local entity profiles to cement your geographic authority.
                </p>
                <h3 className="font-semibold text-sm sm:text-base text-white/95 mb-2">Voice & Conversational Assistant Proximity</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4">
                  When a user asks Siri or Google Assistant for "a plumber near me," proximity algorithms kick in. We structure your digital footprint to target hyper-local coordinates and conversational queries, ensuring AI assistants readily recommend your services.
                </p>
                <h3 className="font-semibold text-sm sm:text-base text-white/95 mb-2">Clear Entity Signals for Local Trades</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  We deploy specific ServiceArea and LocalBusiness schemas to explicitly define your coverage zones and service offerings. By providing clean, structured data, we eliminate ambiguity for search engines and increase your likelihood of appearing for highly targeted, location-based searches.
                </p>
              </div>
            </div>
          </div>

          {/* Sibling/Lateral Corridor navigation (Semantic Lattice) */}
          <div className="border-t border-white/5 pt-6 mt-6 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan">Semantic Connections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <Link href="/services/aeo/shopify" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Shopify AEO Services & Structured Feeds
              </Link>
              <Link href="/services/geo-marketing" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Explore dedicated GEO Marketing Strategies
              </Link>
            </div>
          </div>

          {/* Bottom-Up Link to Root Hub */}
          <div className="pt-4 flex">
            <Link href="/services/aeo" className="text-xs font-medium text-white/40 hover:text-white transition-colors">
              ← Back to <strong className="text-white hover:underline">AEO Services</strong>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
