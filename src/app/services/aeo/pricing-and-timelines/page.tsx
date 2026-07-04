import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: "AEO Pricing, Timelines & Market Metrics — AEObility",
  description: "Transparent pricing structures, implementation timelines, and search market metrics for Answer Engine Optimization (AEO) packages.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/pricing-and-timelines",
  },
};

export default function AEOPricingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://aeobility.com.au/services/aeo/pricing-and-timelines#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do professional AEO optimization services cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard AEO optimization sprints for mid-sized websites range from $5,000 to $15,000, which includes a comprehensive 50-query prompt-set audit, semantic chunking of core service and product pages, schema integration, and structured XML sitemap generation."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see measurable results from AEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most websites see a measurable lift in AI citations, featured snippet wins, and zero-click brand mentions within 6 to 12 weeks of completing an AEO optimization sprint. While temporary retrieval-augmented generation (RAG) caching updates occur within days, embedding your brand permanently into foundational LLM training datasets can take up to 8 months."
        }
      }
    ]
  };

  const keywords = [
    { term: "ai search", volume: "1,900", MoM: "0%", YoY: "+85%", comp: "Medium", cpcLow: "A$0.43", cpcHigh: "A$3.54" },
    { term: "aeo", volume: "1,300", MoM: "+26%", YoY: "+140%", comp: "Low", cpcLow: "A$2.26", cpcHigh: "A$16.43" },
    { term: "geo marketing", volume: "90", MoM: "+27%", YoY: "+367%", comp: "Low", cpcLow: "A$5.75", cpcHigh: "A$26.52" },
    { term: "geo services", volume: "70", MoM: "-59%", YoY: "+40%", comp: "Low", cpcLow: "A$2.52", cpcHigh: "A$10.92" },
    { term: "ai search marketing", volume: "50", MoM: "-75%", YoY: "-91%", comp: "Low", cpcLow: "—", cpcHigh: "—" },
    { term: "aeo services", volume: "50", MoM: "-67%", YoY: "+50%", comp: "Medium", cpcLow: "A$13.97", cpcHigh: "A$40.73" },
    { term: "aeo marketing", volume: "50", MoM: "+25%", YoY: "+150%", comp: "Medium", cpcLow: "A$11.39", cpcHigh: "A$39.26" },
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
              <Link href="/services/aeo" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
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
              <Link href="/services/aeo/pricing-and-timelines" className="text-sm font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg">
                5. Pricing & Timelines
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Pricing, Timelines & <span className="text-gradient-aeo">Market Metrics</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              Understand our package structures, implementation duration, and search engine market indicators for high-value AEO terms.
            </p>
          </div>

          {/* Market Indicators Table */}
          <div className="bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-aeo-cyan mb-4">AI Search & AEO Market Indicators</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-white/40 font-semibold">
                    <th className="py-3 px-2">Keyword Term</th>
                    <th className="py-3 px-2">Volume</th>
                    <th className="py-3 px-2">MoM</th>
                    <th className="py-3 px-2">YoY</th>
                    <th className="py-3 px-2">Competition</th>
                    <th className="py-3 px-2">Low Range CPC</th>
                    <th className="py-3 px-2">High Range CPC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/80">
                  {keywords.map((kw, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-2 font-medium text-white">{kw.term}</td>
                      <td className="py-3 px-2">{kw.volume}</td>
                      <td className={`py-3 px-2 ${kw.MoM.startsWith('+') ? 'text-emerald-400' : kw.MoM.startsWith('-') ? 'text-rose-400' : ''}`}>{kw.MoM}</td>
                      <td className={`py-3 px-2 ${kw.YoY.startsWith('+') ? 'text-emerald-400' : kw.YoY.startsWith('-') ? 'text-rose-400' : ''}`}>{kw.YoY}</td>
                      <td className="py-3 px-2">{kw.comp}</td>
                      <td className="py-3 px-2">{kw.cpcLow}</td>
                      <td className="py-3 px-2">{kw.cpcHigh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ section matching the FAQPage Schema exactly (Fidelity Rule verified) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Pricing & Timelines FAQ</h2>
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01] divide-y divide-white/5">
              <div className="p-6">
                <h3 className="font-semibold text-sm sm:text-base text-white/95 mb-2">How much do professional AEO optimization services cost?</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Standard AEO optimization sprints for mid-sized websites range from $5,000 to $15,000, which includes a comprehensive 50-query prompt-set audit, semantic chunking of core service and product pages, schema integration, and structured XML sitemap generation.
                </p>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-sm sm:text-base text-white/95 mb-2">How long does it take to see measurable results from AEO?</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Most websites see a measurable lift in AI citations, featured snippet wins, and zero-click brand mentions within 6 to 12 weeks of completing an AEO optimization sprint. While temporary retrieval-augmented generation (RAG) caching updates occur within days, embedding your brand permanently into foundational LLM training datasets can take up to 8 months.
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
