import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: "How to Optimise Website Content for AI Ingestion — AEObility",
  description: "A technical step-by-step guide to structuring your digital content to be easily parsed, chunked, and retrieved by RAG pipelines and Large Language Models (LLMs).",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/procedures",
  },
};

export default function AEOHowToPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://aeobility.com.au/services/aeo/procedures#howto",
    "name": "How to Optimise Website Content for AI Ingestion and Citations",
    "description": "A technical step-by-step guide to structuring your digital content to be easily parsed, chunked, and retrieved by RAG pipelines and Large Language Models (LLMs).",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Establish Semantic Boundaries with Question-Based Headings",
        "text": "Structure your content using H3 headings phrased as natural-language questions (e.g., 'What are the benefits of X?'). This creates explicit, machine-readable conceptual maps that allow AI crawlers to easily identify topic shifts and prevent context dilution.",
        "url": "https://aeobility.com.au/services/aeo/procedures#step1"
      },
      {
        "@type": "HowToStep",
        "name": "Write Standalone, Atomic Answer Blocks",
        "text": "Keep your answer blocks within a tight sweet spot of 90 to 120 tokens (max 250). Lead with a concise, direct 1-2 sentence definition or answer immediately beneath your heading before elaborating with supporting technical details to prevent important qualifications from being lost in the middle of long contexts.",
        "url": "https://aeobility.com.au/services/aeo/procedures#step2"
      },
      {
        "@type": "HowToStep",
        "name": "Implement Relationship-Rich Internal Linking",
        "text": "Upgrade your internal links to use anchor text that explicitly declares semantic relationships (e.g., 'how adaptive chunking resolves context limitations') rather than generic phrases. This context provides a rich map of entity connections that LLMs can traverse to establish your domain authority.",
        "url": "https://aeobility.com.au/services/aeo/procedures#step3"
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
              <Link href="/services/aeo/procedures" className="text-sm font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg">
                3. Technical Optimisation Workflow
              </Link>
              <Link href="/services/aeo/constraints" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                4. Eligibility & Constraints
              </Link>
              <Link href="/services/aeo/costs-timing" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
                5. Costs & Timelines
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              How to Optimise Content for <span className="text-gradient-aeo">AI Ingestion</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              A technical step-by-step guide to structuring your digital content to be easily parsed, chunked, and retrieved by RAG pipelines and Large Language Models (LLMs).
            </p>
          </div>

          {/* Steps Timeline (Fidelity Rule verified) */}
          <div className="flex flex-col gap-6">
            <div id="step1" className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl relative flex gap-4 items-start">
              <div className="text-aeo-cyan font-bold text-xl leading-none">01</div>
              <div>
                <h3 className="text-white font-semibold text-base mb-2">Establish Semantic Boundaries with Question-Based Headings</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Structure your content using H3 headings phrased as natural-language questions (e.g., 'What are the benefits of X?'). This creates explicit, machine-readable conceptual maps that allow AI crawlers to easily identify topic shifts and prevent context dilution.
                </p>
              </div>
            </div>

            <div id="step2" className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl relative flex gap-4 items-start">
              <div className="text-aeo-purple font-bold text-xl leading-none">02</div>
              <div>
                <h3 className="text-white font-semibold text-base mb-2">Write Standalone, Atomic Answer Blocks</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Keep your answer blocks within a tight sweet spot of 90 to 120 tokens (max 250). Lead with a concise, direct 1-2 sentence definition or answer immediately beneath your heading before elaborating with supporting technical details to prevent important qualifications from being lost in the middle of long contexts.
                </p>
              </div>
            </div>

            <div id="step3" className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl relative flex gap-4 items-start">
              <div className="text-aeo-cyan font-bold text-xl leading-none">03</div>
              <div>
                <h3 className="text-white font-semibold text-base mb-2">Implement Relationship-Rich Internal Linking</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Upgrade your internal links to use anchor text that explicitly declares semantic relationships (e.g., 'how adaptive chunking resolves context limitations') rather than generic phrases. This context provides a rich map of entity connections that LLMs can traverse to establish your domain authority.
                </p>
              </div>
            </div>
          </div>

          {/* Sibling/Lateral Corridor navigation (Semantic Lattice) */}
          <div className="border-t border-white/5 pt-6 mt-6 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan">Semantic Connections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <Link href="/services/aeo/definition" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Core definitions and syntax rules for RAG Ingestion
              </Link>
              <Link href="/services/aeo/costs-timing" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Costs, pricing models, and implementation timelines
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
