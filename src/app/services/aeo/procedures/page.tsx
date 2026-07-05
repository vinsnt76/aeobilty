import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: "How do I make my business easier for AI to understand? — AEObility",
  description: "A technical step-by-step guide to structuring content to be easily parsed, chunked, and retrieved by RAG pipelines and Large Language Models (LLMs).",
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

      <Navbar />

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
              <Link href="/services/aeo/procedures" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                3. How do I make my business AI-readable?
              </Link>
              <Link href="/services/aeo/constraints" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                4. What stops my business from showing up?
              </Link>
              <Link href="/services/aeo/costs-timing" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                5. How much does AEO cost & what do I get?
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              How do I make my business easier for <span className="text-gradient-aeo">AI to understand?</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              Here’s how machines actually read your business. Follow these steps to optimize content structure for Large Language Model (LLM) ingestion and citation.
            </p>
          </div>

          {/* Steps Timeline (Fidelity Rule verified) */}
          <div className="flex flex-col gap-6">
            <div id="step1" className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl relative flex gap-4 items-start">
              <div className="text-aeo-cyan font-bold text-xl leading-none">01</div>
              <div>
                <h3 className="text-white font-semibold text-base mb-2">Establish Semantic Boundaries with Question-Based Headings</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Structure your content using H3 headings phrased as natural-language questions (e.g., &apos;What are the benefits of X?&apos;). This creates explicit, machine-readable conceptual maps that allow AI crawlers to easily identify topic shifts and prevent context dilution.
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
                  Upgrade your internal links to use anchor text that explicitly declares semantic relationships (e.g., &apos;how adaptive chunking resolves context limitations&apos;) rather than generic phrases. This context provides a rich map of entity connections that LLMs can traverse to establish your domain authority.
                </p>
              </div>
            </div>
          </div>

          {/* Sibling/Lateral Corridor navigation (Semantic Lattice) */}
          <div className="border-t border-white/5 pt-6 mt-6 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan">Semantic Connections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <Link href="/services/aeo/definition" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                What is AEO and why does it matter?
              </Link>
              <Link href="/services/aeo/costs-timing" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                How much does AEO cost and what do I get?
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
