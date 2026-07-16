import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "What is AEO and why does it matter for my business? — AEObility",
  description: "AEO services restructure website content to be ingested, synthesized, and cited by AI answer engines. Learn what AEO actually is and why it matters.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/definition",
  },
};

export default function AEODefinitionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://aeobility.com.au/services/aeo/definition#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does AEO mean in digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AEO (Answer Engine Optimisation) is the process of structuring your content so AI systems, LLMs, and modern search engines can accurately read, index, and cite your business information. It focuses on machine understanding rather than traditional keyword ranking."
        }
      },
      {
        "@type": "Question",
        "name": "How is AEO different from SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO optimises for link-based search results. AEO optimises for answer generation, semantic retrieval, and citation inclusion inside AI-driven platforms like ChatGPT, Claude, Gemini, and Perplexity. It prioritises entities, embeddings, and structured content."
        }
      },
      {
        "@type": "Question",
        "name": "Why does AEO matter now?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-first search engines increasingly bypass classic search results and generate direct answers. If your content isn’t machine-readable, you won’t be included or cited. AEO ensures your business is visible inside these new answer environments."
        }
      },
      {
        "@type": "Question",
        "name": "How do modern AI systems read and index content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI systems break your content into semantic chunks, convert them into embeddings, and store them in vector databases. Retrieval engines then match user queries to your content using dense similarity scoring and passage-level extraction."
        }
      },
      {
        "@type": "Question",
        "name": "What is semantic chunking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Semantic chunking is the process of dividing your content into small, meaningful units that AI systems can ingest and retrieve. Clean chunking improves accuracy, reduces hallucination, and increases your likelihood of being cited."
        }
      },
      {
        "@type": "Question",
        "name": "What are embeddings and why are they important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Embeddings are numerical representations of meaning. They allow AI systems to compare your content to user queries using vector similarity. Strong embeddings improve your visibility in AI-driven search and recommendation engines."
        }
      },
      {
        "@type": "Question",
        "name": "How does AEO help my business get cited by AI platforms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AEO clarifies your entities, restructures your content into machine-readable formats, and aligns your information with the retrieval patterns used by LLMs. This increases your chances of being selected as a trusted citation source."
        }
      },
      {
        "@type": "Question",
        "name": "Is AEO relevant for small Australian businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. AEO is especially valuable for local service providers who rely on visibility across maps, search engines, and AI platforms. Clear entity signals help AI systems understand your location, services, and relevance."
        }
      },
      {
        "@type": "Question",
        "name": "Where should I start with AEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Begin by understanding how AI systems interpret your content. Then apply structured schema, semantic chunking, and entity optimisation. AEObility’s AEO services provide a complete framework for this process."
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
              <Link href="/services/aeo/definition" className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
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
              <Link href="/services/aeo/local-business" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                7. Local Business Visibility
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              What is AEO and <span className="text-gradient-aeo">Why Does It Matter?</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              Let’s make this easy to understand. Here is why search visibility is changing, why AI assistants recommend businesses, and how machines interpret information.
            </p>
          </div>

          {/* FAQ section matching the FAQPage Schema exactly (Fidelity Rule verified) */}
          <div className="space-y-4">
            <details className="group bg-white/[0.01] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.03] transition-colors">
              <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm">
                What does AEO mean in digital marketing?
                <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="mt-4 text-xs text-white/60 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                AEO (Answer Engine Optimisation) is the process of structuring your content so AI systems, LLMs, and modern search engines can accurately read, index, and cite your business information. It focuses on machine understanding rather than traditional keyword ranking.
              </p>
            </details>
            <details className="group bg-white/[0.01] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.03] transition-colors">
              <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm">
                How is AEO different from SEO?
                <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="mt-4 text-xs text-white/60 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                SEO optimises for link-based search results. AEO optimises for answer generation, semantic retrieval, and citation inclusion inside AI-driven platforms like ChatGPT, Claude, Gemini, and Perplexity. It prioritises entities, embeddings, and structured content.
              </p>
            </details>
            <details className="group bg-white/[0.01] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.03] transition-colors">
              <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm">
                Why does AEO matter now?
                <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="mt-4 text-xs text-white/60 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                AI-first search engines increasingly bypass classic search results and generate direct answers. If your content isn’t machine-readable, you won’t be included or cited. AEO ensures your business is visible inside these new answer environments.
              </p>
            </details>
            <details className="group bg-white/[0.01] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.03] transition-colors">
              <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm">
                How do modern AI systems read and index content?
                <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="mt-4 text-xs text-white/60 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                AI systems break your content into semantic chunks, convert them into embeddings, and store them in vector databases. Retrieval engines then match user queries to your content using dense similarity scoring and passage-level extraction.
              </p>
            </details>
            <details className="group bg-white/[0.01] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.03] transition-colors">
              <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm">
                What is semantic chunking?
                <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="mt-4 text-xs text-white/60 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                Semantic chunking is the process of dividing your content into small, meaningful units that AI systems can ingest and retrieve. Clean chunking improves accuracy, reduces hallucination, and increases your likelihood of being cited.
              </p>
            </details>
            <details className="group bg-white/[0.01] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.03] transition-colors">
              <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm">
                What are embeddings and why are they important?
                <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="mt-4 text-xs text-white/60 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                Embeddings are numerical representations of meaning. They allow AI systems to compare your content to user queries using vector similarity. Strong embeddings improve your visibility in AI-driven search and recommendation engines.
              </p>
            </details>
            <details className="group bg-white/[0.01] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.03] transition-colors">
              <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm">
                How does AEO help my business get cited by AI platforms?
                <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="mt-4 text-xs text-white/60 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                AEO clarifies your entities, restructures your content into machine-readable formats, and aligns your information with the retrieval patterns used by LLMs. This increases your chances of being selected as a trusted citation source.
              </p>
            </details>
            <details className="group bg-white/[0.01] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.03] transition-colors">
              <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm">
                Is AEO relevant for small Australian businesses?
                <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="mt-4 text-xs text-white/60 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                Yes. AEO is especially valuable for local service providers who rely on visibility across maps, search engines, and AI platforms. Clear entity signals help AI systems understand your location, services, and relevance.
              </p>
            </details>
            <details className="group bg-white/[0.01] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.03] transition-colors">
              <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm">
                Where should I start with AEO?
                <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="mt-4 text-xs text-white/60 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                Begin by understanding how AI systems interpret your content. Then apply structured schema, semantic chunking, and entity optimisation. AEObility’s AEO services provide a complete framework for this process.
              </p>
            </details>
          </div>

          {/* Sibling/Lateral Corridor navigation (Semantic Lattice) */}
          <div className="border-t border-white/5 pt-6 mt-6 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan">Semantic Connections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <Link href="/services/aeo/comparison" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Is AEO just SEO with a new name?
              </Link>
              <Link href="/services/aeo/procedures" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                How do I make my business easier for AI to understand?
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
