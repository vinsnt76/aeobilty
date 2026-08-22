import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BRAND_PRICING_SCHEMA } from '@/lib/brandFacts';
import { CheckCircle2, ShieldCheck, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: "Canonical Brand Facts & Service Pricing | AEObility",
  description: "Machine-readable reference catalog for AEObility service offerings, SKUs, deliverables, and AUD pricing excluding GST.",
  alternates: {
    canonical: "https://www.aeobility.com.au/brand-facts",
  },
  openGraph: {
    title: "Canonical Brand Facts & Service Pricing | AEObility",
    description: "Machine-readable source of truth for AEObility service offerings and JSON-LD schema.",
    url: "https://www.aeobility.com.au/brand-facts",
    type: "website",
  },
};

export default function BrandFactsPage() {
  const products = BRAND_PRICING_SCHEMA['@graph'];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Raw JSON-LD Schema Injection for LLM / AI Crawler Discovery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BRAND_PRICING_SCHEMA) }}
      />

      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/25 text-aeo-cyan text-xs font-mono mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Canonical Single Source of Truth</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Brand Facts & <span className="text-transparent bg-clip-text bg-gradient-to-r from-aeo-cyan to-aeo-purple">Service Catalog</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Machine-readable reference for AEObility service offerings, SKUs, structured deliverables, and pricing. Guaranteed consistent across all search, map, and conversational AI endpoints.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.sku}
              className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-aeo-cyan/40 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* SKU Badge & Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-aeo-cyan bg-aeo-cyan/10 border border-aeo-cyan/20 px-2.5 py-1 rounded-md">
                    <Tag className="w-3 h-3" />
                    {product.sku}
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-white">${parseFloat(product.price).toLocaleString('en-AU', { minimumFractionDigits: 2 })}</span>
                    <span className="text-[10px] text-zinc-500 font-mono block uppercase">AUD (Ex. GST)</span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-aeo-cyan transition-colors">
                  {product.name}
                </h3>

                {/* Duration / Scope */}
                <div className="text-xs font-mono text-zinc-400 mb-4 pb-3 border-b border-white/5">
                  Scope: <span className="text-zinc-200">{product.offers.eligibleDuration}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block mb-2">
                  Included Deliverables
                </span>
                {product.offers.itemOffered.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-aeo-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
