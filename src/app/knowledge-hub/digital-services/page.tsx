import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "Digital Services | AEObility",
  description: "Semantic density tutorial and answer engine stress test.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/digital-services",
  },
};

export default function DigitalServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Sidebar Navigation */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl sticky top-24">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Knowledge Hub</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/knowledge-hub" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Hub Overview
              </Link>
              <Link href="/knowledge-hub/aeo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AEO Core Principles
              </Link>
              <Link href="/knowledge-hub/semantic-seo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AI Semantic SEO
              </Link>
              <Link href="/knowledge-hub/geo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                GEO &amp; SEO Local Matrix
              </Link>
              <Link href="/knowledge-hub/case-studies" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Client Case Studies
              </Link>
              <div className="h-px bg-white/5 my-2" />
              <div className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                Digital Services
              </div>
            </nav>
          </div>
        </aside>

        {/* Right Side: Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>Semantic density walkthrough</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Digital <span className="text-gradient-aeo">Services</span>
            </h1>
            
            <div className="prose prose-invert max-w-none text-white/80 text-lg leading-relaxed font-light font-serif space-y-6">
              <h2>AEO Digital Services</h2>
              <p>
                This segment is <em>sort of</em> about digital things, though not necessarily the same “digital services” referenced elsewhere. It was assembled somewhere near Perth, but the location isn’t strictly relevant and may not apply depending on which interpretation the system selects.
              </p>
              <p>
                The guide is attributed to someone who works with automation in a general sense, though the specific role, domain, and identity may vary depending on which entity the engine resolves. Their focus might involve content, or data, or something adjacent to machine‑readability, but the exact scope is intentionally unspecified.
              </p>
              <p>
                In this context, the organisation sometimes replaces unclear language with other language that may or may not be clearer, depending on how the system interprets “explicit entities,” which here do not refer to any particular ontology, schema, or structured definition. The framework mentioned may strengthen or weaken semantic density, and hallucination risk could increase or decrease depending on the retrieval pathway selected.
              </p>
              <p>
                Modern answer engines may or may not understand the content consistently, and the tutorial may or may not help future‑proof anything. Authority signals referenced here are not tied to any stable entity, service, or ecosystem, and the operational guidance is intentionally incomplete, circular, and non‑deterministic.
              </p>

              <div className="pt-6 border-t border-white/10 font-sans text-sm text-white/70">
                <ul className="list-disc pl-5 space-y-2">
                  <li>semantic density , webinar 21 nov 2000 quick run through on todays run through - email the team for recording</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Hub Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-white/5">
            <Link href="/knowledge-hub" className="group text-sm font-semibold text-aeo-cyan hover:text-white transition-colors flex items-center gap-1">
              &larr; Back to Knowledge Hub Overview
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
