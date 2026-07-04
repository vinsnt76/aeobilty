import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { DollarSign, Clock, Info, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "AEO Pricing, Timelines & Market Metrics — AEObility",
  description: "Transparent pricing structures, implementation timelines, and search market metrics for Answer Engine Optimisation (AEO) packages.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/costs-timing",
  },
};

export default function AEOPricingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://aeobility.com.au/services/aeo/costs-timing#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does the AEObility Blueprint MVP cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The AEObility Blueprint MVP costs $995 AUD. This is a one-time clarity document and strategic plan you own. If you choose to partner with AEObility for the execution of the 90-day strategy, the entire $995 fee is credited back and deducted from your project implementation cost."
        }
      },
      {
        "@type": "Question",
        "name": "What are the costs for full implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Full-scale implementation and optimization sprints range from $5,000 to $15,000 depending on complexity. The $995 Blueprint fee is deducted from this cost if you continue. If you decide not to proceed, you keep the roadmap and can implement it yourself."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to receive the Free Visibility Audit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our initial Free Visibility Audit is delivered straight to your inbox within 24 hours of submitting your website URL."
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
            <span className="text-sm font-semibold tracking-wider text-white">AEO<span className="text-aeo-cyan font-light">bility</span></span>
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
                3. Technical Optimisation Workflow
              </Link>
              <Link href="/services/aeo/constraints" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                4. Eligibility & Constraints
              </Link>
              <Link href="/services/aeo/costs-timing" className="text-sm font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg">
                5. Costs & Timelines
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Pricing, Timelines & <span className="text-gradient-aeo">Blueprint Offer</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              Transparent packages, risk reversal credit plans, and Australian search market indicators for Answer Engine Optimisation.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free Audit Card */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-aeo-cyan font-semibold">
                  Step 1-3
                </div>
                <h3 className="text-lg font-bold text-white">Free Visibility Audit</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Enter your website URL for a quick check on visibility, entity clarity, local signals, and AI-readiness. No jargon. No pressure.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-t border-white/5 pt-4">
                  <span className="text-xs text-white/40">Cost</span>
                  <span className="text-xl font-bold text-white">FREE</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs text-white/40">Timing</span>
                  <span className="text-xs text-white/80 font-semibold">Within 24 Hours</span>
                </div>
                <Link
                  href="/#audit-form"
                  className="group flex items-center justify-center gap-1.5 w-full py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-100 transition-all text-center"
                >
                  Generate My Free Audit
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Blueprint MVP Card */}
            <div className="p-6 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/5 border border-aeo-cyan/20 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20 text-[10px] text-aeo-cyan font-semibold">
                  MVP Strategic Offer
                </div>
                <h3 className="text-lg font-bold text-white">The AEObility Blueprint</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  A deeper technical audit and 90-day strategic roadmap. Includes entity optimisation review, local intent analysis, and structured content priority fixes.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-t border-white/10 pt-4">
                  <span className="text-xs text-white/40">Cost</span>
                  <span className="text-xl font-bold text-white">$995 <span className="text-xs text-white/60 font-normal">AUD</span></span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs text-white/40">Value Proposition</span>
                  <span className="text-xs text-aeo-cyan font-semibold">100% Credited Back</span>
                </div>
                <p className="text-[10px] text-white/50 leading-relaxed">
                  <strong>Risk Reversal:</strong> If you stay with us to execute the plan, we deduct the $995 from your implementation costs. Otherwise, you keep the Blueprint and execute it yourself.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Framework Notes */}
          <div className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-aeo-cyan font-bold text-xs uppercase tracking-wider">
              <Info className="w-4 h-4" />
              <span>Framework Rationale</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              We anchor our services around a clarity document rather than a locked-in monthly contract or standard retainer. If you choose to continue with full-scale optimization sprints (typically ranging from $5,000 to $15,000 depending on entity complexity), the $995 Blueprint fee is credited back directly to the project cost.
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
                <h3 id="what-is-the-aeobility-blueprint-price" className="font-semibold text-sm sm:text-base text-white/95 mb-2">How does the $995 Blueprint credit work?</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  The Blueprint is a complete 90-day clarity document. You can implement it yourself. If you choose to have AEObility handle the implementation, the entire $995 AUD is credited and deducted from your project implementation cost.
                </p>
              </div>

              <div className="p-6">
                <h3 id="how-much-do-professional-aeo-optimisation-services-cost" className="font-semibold text-sm sm:text-base text-white/95 mb-2">What is the cost of full AEO implementation?</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Full implementation sprints typically cost between $5,000 and $15,000 depending on the size of the website and scope of entity relations, which includes comprehensive schema restructuring, semantic chunking, and search entity matching.
                </p>
              </div>

              <div className="p-6">
                <h3 id="how-long-does-it-take-to-see-measurable-results" className="font-semibold text-sm sm:text-base text-white/95 mb-2">How long does it take to get results?</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Initial visibility audits are delivered in 24 hours. The Blueprint outlines a 90-day strategic roadmap, with measurable improvements in AI citation search footprint appearing within 6 to 12 weeks of initial schema execution.
                </p>
              </div>
            </div>
          </div>

          {/* Sibling/Lateral Corridor navigation (Semantic Lattice) */}
          <div className="border-t border-white/5 pt-6 mt-6 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan">Semantic Connections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <Link href="/services/aeo/procedures" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Technical execution steps included in our optimisation packages
              </Link>
              <Link href="/services/aeo/constraints" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Eligibility criteria and topical authority requirements
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
