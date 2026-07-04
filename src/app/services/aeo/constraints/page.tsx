import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: "AEO Eligibility & Constraints — AEObility",
  description: "FAQ on eligibility criteria for Answer Engine Optimization (AEO) and the technical risks of remaining unoptimized in conversational AI environments.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/constraints",
  },
};

export default function AEOConstraintsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://aeobility.com.au/services/aeo/constraints#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can a small website benefit from AEO services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, smaller sites can benefit disproportionately because every high-density page carries massive weight in how models understand your domain. By building a clean, highly structured topic graph of core entities and explicit relationships, small sites can establish tight, authoritative semantic nodes that get cited for niche, long-tail queries even without a massive backlink profile."
        }
      },
      {
        "@type": "Question",
        "name": "What are the primary risks of not optimizing for AEO in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Failing to optimize content structure results in 'attention dilution' and the 'lost in the middle' effect, where LLMs fail to retrieve critical caveats and safety qualifiers. Furthermore, unoptimized pages produce noisy, averaged vector embeddings, causing generative engines to misinterpret your brand's facts or completely ignore your products in personalized conversational summaries."
        }
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
            <Link href="/services/aeo" className="text-xs font-semibold text-aeo-cyan py-2 px-3">
              AEO Services
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
              <Link href="/services/aeo" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                Hub Overview
              </Link>
              <Link href="/services/aeo/definition" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                1. Definition
              </Link>
              <Link href="/services/aeo/comparison" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                2. AEO vs. Traditional SEO
              </Link>
              <Link href="/services/aeo/procedures" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                3. Technical Execution
              </Link>
              <Link href="/services/aeo/constraints" className="text-sm font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg">
                4. Eligibility & Constraints
              </Link>
              <Link href="/services/aeo/costs-timing" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                5. Pricing & Timelines
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Eligibility & <span className="text-gradient-aeo">Constraints</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              Who benefits most from Answer Engine Optimization, and what are the immediate technical risks of remaining unoptimized?
            </p>
          </div>

          {/* FAQ section matching the FAQPage Schema exactly (Fidelity Rule verified) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Eligibility & Trust FAQ</h2>
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01] divide-y divide-white/5">
              <div className="p-6">
                <h3 id="can-a-small-website-benefit-from-aeo" className="font-semibold text-sm sm:text-base text-white/95 mb-2">Can a small website benefit from AEO services?</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Yes, smaller sites can benefit disproportionately because every high-density page carries massive weight in how models understand your domain. By building a clean, highly structured topic graph of core entities and explicit relationships, small sites can establish tight, authoritative semantic nodes that get cited for niche, long-tail queries even without a massive backlink profile.
                </p>
              </div>

              <div className="p-6">
                <h3 id="what-are-the-primary-risks-of-not-optimizing" className="font-semibold text-sm sm:text-base text-white/95 mb-2">What are the primary risks of not optimizing for AEO in 2026?</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Failing to optimize content structure results in 'attention dilution' and the 'lost in the middle' effect, where LLMs fail to retrieve critical caveats and safety qualifiers. Furthermore, unoptimized pages produce noisy, averaged vector embeddings, causing generative engines to misinterpret your brand's facts or completely ignore your products in personalized conversational summaries.
                </p>
              </div>
            </div>
          </div>

          {/* Sibling/Lateral Corridor navigation (Semantic Lattice) */}
          <div className="border-t border-white/5 pt-6 mt-6 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan">Semantic Connections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <Link href="/services/aeo/comparison" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                How constraints differ between AI search and traditional SERPs
              </Link>
              <Link href="/services/aeo/procedures" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Technical execution steps to bypass semantic ingestion constraints
              </Link>
            </div>
          </div>

          {/* Bottom-Up Link to Root Hub */}
          <div className="pt-4 flex">
            <Link href="/services/aeo" className="text-xs font-medium text-white/40 hover:text-white transition-colors">
              ← Back to <strong className="text-white hover:underline">AEO Services</strong> (Root Node)
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
