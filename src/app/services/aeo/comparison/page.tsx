import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: "AEO vs. Traditional SEO — AEObility",
  description: "Learn how Answer Engine Optimisation (AEO) compares with traditional Search Engine Optimisation (SEO). Lexical retrieval vs dense semantic vector matching.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/comparison",
  },
};

export default function AEOVsSEOPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://aeobility.com.au/services/aeo/comparison#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does AEO differ from traditional SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While traditional SEO optimises entire URLs for keyword relevance and search engine result pages (SERPs) to win human clicks, AEO optimises at the atomic passage level (90–120 token chunks) to win selection and synthesis in dense vector indexes using semantic similarity, ensuring your content is quoted and cited directly in zero-click conversational AI summaries."
        }
      },
      {
        "@type": "Question",
        "name": "How do AI answer engines choose their sources compared to traditional algorithms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional search engines rely on sparse retrieval models like BM25 that prioritize exact keyword frequency and link equity. AI answer engines use dense retrieval models powered by vector embeddings and cosine similarity to map the conceptual meaning of content, selecting passages that directly fit the model's internal reasoning chains and Knowledge Graphs."
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
              <Link href="/services/aeo/comparison" className="text-sm font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg">
                2. AEO vs. Traditional SEO
              </Link>
              <Link href="/services/aeo/procedures" className="text-sm font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg">
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
              AEO vs. Traditional <span className="text-gradient-aeo">SEO</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              Understanding the mechanical shift from lexical retrieval (keywords) to semantic retrieval (conceptual vectors).
            </p>
          </div>

          {/* Comparison Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl">
              <h3 className="text-aeo-purple text-sm font-semibold uppercase tracking-wider mb-2">Traditional SEO</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Focuses on search engine result page optimisation, exact keyword match frequency, and page rank domain authority to secure clicks from users.
              </p>
            </div>
            <div className="p-6 bg-white/[0.01] border border-aeo-cyan/20 rounded-2xl relative">
              <div className="absolute top-3 right-3 text-[10px] bg-aeo-cyan/15 text-aeo-cyan px-2 py-0.5 rounded-full font-semibold">AI Era</div>
              <h3 className="text-aeo-cyan text-sm font-semibold uppercase tracking-wider mb-2">Answer Engine Optimisation</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Focuses on modular, high-density passages optimised for semantic vector similarity to win quotes inside synthesis models like Gemini and ChatGPT.
              </p>
            </div>
          </div>

          {/* FAQ section matching the FAQPage Schema exactly (Fidelity Rule verified) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Structural Differences FAQ</h2>
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01] divide-y divide-white/5">
              <div className="p-6">
                <h3 id="how-does-aeo-differ-from-traditional-seo" className="font-semibold text-sm sm:text-base text-white/95 mb-2">How does AEO differ from traditional SEO?</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  While traditional SEO optimises entire URLs for keyword relevance and search engine result pages (SERPs) to win human clicks, AEO optimises at the atomic passage level (90–120 token chunks) to win selection and synthesis in dense vector indexes using semantic similarity, ensuring your content is quoted and cited directly in zero-click conversational AI summaries.
                </p>
              </div>

              <div className="p-6">
                <h3 id="how-do-ai-answer-engines-choose-their-sources" className="font-semibold text-sm sm:text-base text-white/95 mb-2">How do AI answer engines choose their sources compared to traditional algorithms?</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Traditional search engines rely on sparse retrieval models like BM25 that prioritize exact keyword frequency and link equity. AI answer engines use dense retrieval models powered by vector embeddings and cosine similarity to map the conceptual meaning of content, selecting passages that directly fit the model's internal reasoning chains and Knowledge Graphs.
                </p>
              </div>
            </div>
          </div>

          {/* Sibling/Lateral Corridor navigation (Semantic Lattice) */}
          <div className="border-t border-white/5 pt-6 mt-6 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan">Semantic Connections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <Link href="/services/aeo/definition" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Core concepts and definitions of Answer Engine Optimisation
              </Link>
              <Link href="/services/aeo/constraints" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Topical authority constraints and optimisation thresholds
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
