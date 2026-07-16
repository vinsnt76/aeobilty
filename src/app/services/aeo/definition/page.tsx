import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
            <div className="w-full relative rounded-2xl overflow-hidden mb-8 border border-white/10 bg-white/[0.02]">
              <Image 
                src="/what-is-definiton-of-aeo_AEObility.webp" 
                alt="Definition of Answer Engine Optimisation (AEO)" 
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              What is AEO and <span className="text-gradient-aeo">Why Does It Matter?</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light mb-8">
              Answer Engine Optimisation is the practice of structuring business information so AI systems can read it, understand it, and cite it in generated answers. It matters because modern search behaviour is shifting to AI‑first discovery, where brands are selected as data sources rather than clicked as web pages.
            </p>

            <div className="space-y-6 mb-10">
              {/* Block 1 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-2">
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider font-mono">1. AEO shifts search from pages to passages</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  AEO optimises content at the passage level so AI engines can extract specific fragments. Traditional SEO ranks full URLs. AI systems retrieve small chunks, convert them into embeddings, and match them to user intent. Businesses need concise, structured answer blocks to appear in these generated responses.
                </p>
              </div>

              {/* Block 2 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-purple border-l-2">
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider font-mono">2. AEO aligns content with semantic retrieval</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  AI systems use embeddings and vector similarity to understand meaning. They match concepts rather than keywords. This allows related ideas to be retrieved even when phrasing differs. Brands that structure content into clear semantic units are more likely to be selected and cited by AI engines.
                </p>
              </div>

              {/* Block 3 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-2">
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider font-mono">3. AEO prepares content for query expansion</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  AI engines expand each user query into multiple hidden subqueries. They search for definitions, comparisons, constraints, and procedures. Pages that contain modular, answer‑ready sections satisfy this expanded intent tree. This increases the chance of being included in the final generated answer.
                </p>
              </div>

              {/* Block 4 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-purple border-l-2">
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider font-mono">4. AEO prevents context loss during retrieval</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  AI systems struggle with long, unstructured text. They often miss qualifiers or exceptions buried in the middle of paragraphs. Adaptive chunking keeps directives and conditions together. This improves retrieval accuracy and reduces the risk of misinterpretation in generated answers.
                </p>
              </div>

              {/* Block 5 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-2">
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider font-mono">5. AEO strengthens trust and citation signals</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  AI engines prefer sources with clear provenance and consistent facts. Structured schema, visible updates, and aligned terminology help models verify information. Brands that maintain clean, unambiguous data across their domain earn higher confidence scores and more frequent citations.
                </p>
              </div>
            </div>

            <div className="p-6 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-2xl text-center mb-10">
              <p className="text-base text-white/90 font-semibold leading-relaxed">
                AEO formats business information into short, structured, semantically aligned chunks that AI systems can ingest as embeddings, retrieve through vector similarity, and cite confidently in generated answers.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">AEO vs SEO</h2>
              <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
                <table className="w-full text-left text-sm text-white/70">
                  <thead className="bg-white/5 text-white/90">
                    <tr>
                      <th className="px-6 py-4 font-bold border-b border-white/10">Concept</th>
                      <th className="px-6 py-4 font-bold border-b border-white/10">SEO</th>
                      <th className="px-6 py-4 font-bold border-b border-white/10 text-aeo-cyan">AEO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-light">
                    <tr>
                      <td className="px-6 py-4 font-medium text-white/80">Retrieval</td>
                      <td className="px-6 py-4">lexical</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">semantic</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-white/80">Ranking</td>
                      <td className="px-6 py-4">links</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">embeddings</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-white/80">Output</td>
                      <td className="px-6 py-4">SERP</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">generated answers</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-white/80">Optimisation</td>
                      <td className="px-6 py-4">whole page</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">passage level</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">Why AEO Matters</h2>
              <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">
                AI systems generate answers instead of listing links. If your content is not machine readable, you will not be included or cited. AEO ensures visibility, understanding, and selection across AI platforms.
              </p>
              <div className="p-5 bg-white/[0.01] border border-white/10 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-aeo-purple"></div>
                <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2 font-mono">Example</h4>
                <p className="text-sm text-white/80 italic font-light leading-relaxed">
                  "When a user asks for the best electrician in Perth, the AI converts the query into a vector and compares it to your content using cosine similarity. If your content has strong entity clarity and adaptive chunking, your passage scores higher and is selected for the generated answer."
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact" className="btn-primary">
                Let's Talk AEO
              </Link>
              <Link href="/book" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all">
                Jump on a Quick Call
              </Link>
            </div>
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
