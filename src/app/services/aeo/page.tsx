import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Answer Engine Optimization (AEO) Services — AEObility",
  description: "Professional content engineering solutions that restructure, format, and optimize digital assets for conversational AI engines and RAG systems.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo",
  },
};

export default function AEORootPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/aeo#service",
        "name": "Answer Engine Optimization (AEO) Services",
        "description": "Professional content engineering solutions that restructure, format, and optimize digital assets to be accurately ingested, synthesized, and cited by conversational AI engines and retrieval-augmented generation (RAG) systems.",
        "provider": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q1102555",
            "https://www.crunchbase.com/organization/aeobility"
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/aeo#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are AEO services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AEO services are professional digital marketing solutions that restructure, format, and optimize website content to be accurately ingested, synthesized, and cited by AI answer engines like ChatGPT, Gemini, and Perplexity. By refactoring information into modular, high-density chunks, these services reduce the Delphic Cost of search and secure brand citations inside conversational AI summaries."
            }
          }
        ]
      }
    ]
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

      {/* Navigation Header */}
      <header className="py-6 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <svg
              className="w-6 h-6 text-aeo-cyan group-hover:scale-105 transition-transform"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2L2 10L16 18L30 10L16 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 22L16 30L30 22"
                stroke="#bd00ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-semibold tracking-wider text-white">
              AEO<span className="text-aeo-cyan font-light">bility</span>
            </span>
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="text-xs font-semibold text-white/60 hover:text-white transition-colors py-2 px-3">
              Home
            </Link>
            <Link href="/support" className="text-xs font-semibold text-white/60 hover:text-white transition-colors py-2 px-3">
              Support
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Navigation Links & Entity Map */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">AEO Knowledge Hub</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/services/aeo" className="text-sm font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg">
                1. Canonical Hub (Overview)
              </Link>
              <Link href="/services/aeo/vs-traditional-seo" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                2. AEO vs. Traditional SEO
              </Link>
              <Link href="/services/aeo/how-to-optimize" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                3. Technical Execution
              </Link>
              <Link href="/services/aeo/eligibility-and-constraints" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                4. Eligibility & Constraints
              </Link>
              <Link href="/services/aeo/pricing-and-timelines" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                5. Pricing & Timelines
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Answer Engine <span className="text-gradient-aeo">Optimization</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              Restructure and engineering solutions designed to secure brand citations, drive semantic relevance, and ensure conversational AI systems surface your business.
            </p>
          </div>

          {/* Core Service definition block (Fidelity Rule verified) */}
          <div className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-aeo-cyan to-aeo-purple" />
            <h2 className="text-xl font-bold mb-4 text-white">Answer Engine Optimization (AEO) Services</h2>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Professional content engineering solutions that restructure, format, and optimize digital assets to be accurately ingested, synthesized, and cited by conversational AI engines and retrieval-augmented generation (RAG) systems.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/50 border-t border-white/5 pt-4">
              <span>Provider: <strong className="text-white">AEObility</strong></span>
              <span>•</span>
              <span>Entity Ref: <strong className="text-white">https://aeobility.com.au</strong></span>
            </div>
          </div>

          {/* FAQ section matching the FAQPage Schema exactly (Fidelity Rule verified) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01] divide-y divide-white/5">
              <div className="p-6">
                <h3 className="font-semibold text-sm sm:text-base text-white/95 mb-2">What are AEO services?</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  AEO services are professional digital marketing solutions that restructure, format, and optimize website content to be accurately ingested, synthesized, and cited by AI answer engines like ChatGPT, Gemini, and Perplexity. By refactoring information into modular, high-density chunks, these services reduce the Delphic Cost of search and secure brand citations inside conversational AI summaries.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
