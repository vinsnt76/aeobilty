import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "What is AEO in Digital Marketing? Meaning & Concepts — AEObility",
  description: "Discover the definition of Answer Engine Optimisation (AEO) and learn how machine learning models read, index, and cite business information.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/definition",
  },
};

export default function AEODefinitionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/services/aeo/definition"
    },
    "headline": "What is AEO in Digital Marketing? Meaning & Concepts",
    "description": "Discover the definition of Answer Engine Optimisation (AEO) and learn how machine learning models read, index, and cite business information.",
    "inLanguage": "en-AU",
    "author": {
      "@type": "Organization",
      "name": "AEObility"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AEObility",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aeobility.com.au/logo.png"
      }
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Answer Engine Optimisation",
        "description": "AEO is the practice of structuring business information so AI systems can read it, understand it, and cite it in generated answers."
      },
      {
        "@type": "Thing",
        "name": "Semantic Retrieval",
        "description": "AI systems use embeddings and vector similarity to match concepts rather than keywords."
      }
    ],
    "articleSection": [
      "What is AEO and why does it matter?",
      "AEO shifts search from pages to passages",
      "AEO aligns content with semantic retrieval",
      "AEO prepares content for query expansion",
      "AEO prevents context loss during retrieval",
      "AEO strengthens trust and citation signals",
      "AEO vs SEO comparison"
    ],
    "keywords": [
      "AEO",
      "AEO marketing",
      "semantic retrieval",
      "what is AEO in digital marketing",
      "AEO vs SEO meaning",
      "dense retrieval",
      "embeddings",
      "vector similarity",
      "passage-level extraction"
    ],
    "isPartOf": {
      "@type": "Service",
      "name": "AEO Services",
      "serviceType": "Answer Engine Optimisation",
      "provider": {
        "@type": "Organization",
        "name": "AEObility"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Services",
          "item": "https://aeobility.com.au/services"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AEO Services",
          "item": "https://aeobility.com.au/services/aeo"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What is AEO (Definition)",
          "item": "https://aeobility.com.au/services/aeo/definition"
        }
      ]
    },
    "mainEntity": {
      "@type": "FAQPage",
      "name": "AEO Definition FAQs",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does AEO mean in digital marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AEO means structuring business information so AI systems can read it, understand it, and cite it in generated answers."
          }
        },
        {
          "@type": "Question",
          "name": "How is AEO different from SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO ranks pages in search results. AEO structures content into semantic passages so AI systems can retrieve and cite it in generated answers."
          }
        },
        {
          "@type": "Question",
          "name": "How do modern AI systems read and index content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI systems convert text into embeddings, compare meaning using vector similarity, and extract small passages that match user intent."
          }
        },
        {
          "@type": "Question",
          "name": "What is semantic chunking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Semantic chunking organises content into small, meaningful blocks that AI systems can ingest, retrieve, and cite accurately."
          }
        },
        {
          "@type": "Question",
          "name": "Is AEO relevant for small Australian businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. AEO helps local businesses become discoverable, understandable, and recommended across maps, search, and generative AI platforms."
          }
        }
      ]
    }
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
              What is AEO in Digital Marketing? <span className="text-gradient-aeo">Meaning & Concepts</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light mb-8">
              AEO, or <strong className="text-white font-semibold">Answer Engine Optimisation</strong>, is the practice of organising your business information so AI systems can read it, understand it, and confidently cite it in generated answers.
            </p>

            {/* Why AEO matters for your business */}
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">Why AEO matters for your business</h2>
              <div className="space-y-4 text-sm text-white/70 leading-relaxed font-light">
                <p>
                  Modern search behaviour is shifting. People are asking AI tools questions instead of clicking through pages. AI chooses which businesses to use as data sources, not just which links to show.
                </p>
                <p>
                  Answer Engine Optimisation helps your business stay <strong className="text-white font-semibold">discoverable</strong>, <strong className="text-white font-semibold">understandable</strong>, and <strong className="text-white font-semibold">recommended</strong> across search, maps, and generative AI corridors.
                </p>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <h2 className="text-xl font-bold mb-2">The core principles of Answer Engine Optimisation</h2>
              <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                AEO focuses on how modern AI systems read, index, and cite business information. Four key concepts sit underneath: <strong className="text-white font-semibold">embeddings</strong>, <strong className="text-white font-semibold">vector similarity</strong>, <strong className="text-white font-semibold">dense retrieval</strong>, and <strong className="text-white font-semibold">passage-level extraction</strong>.
              </p>

              {/* Block 1 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-2">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider font-mono">1. Search has shifted from pages to passages</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p>Traditional SEO ranks whole pages and URLs. AI systems extract small, meaningful passages instead of reading an entire page.</p>
                  <p>To be included in AI-generated answers, your content needs clear, structured answer blocks that can be lifted and reused as part of a response.</p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-purple border-l-2">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider font-mono">2. How modern AI systems read content</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p>AI systems convert text into <strong className="text-white font-medium">embeddings</strong> — mathematical representations of meaning. They don’t just match keywords; they match concepts.</p>
                  <p>This allows AI to recognise related ideas even when the wording is different, as long as your content is organised into clear, meaningful sections.</p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-2">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider font-mono">3. Semantic retrieval explained</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p><strong className="text-white font-medium">Semantic retrieval</strong> is the process of AI comparing the meaning of a question to the meaning inside your content.</p>
                  <p>AEO uses <strong className="text-white font-medium">semantic chunking</strong> — organising content into small, meaningful blocks — so AI can easily ingest, understand, and select the right information when building an answer.</p>
                </div>
              </div>

              {/* Block 4 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-purple border-l-2">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider font-mono">4. Dense retrieval & query expansion</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p>When someone asks a question, AI expands it into multiple hidden sub-queries. It looks for definitions, comparisons, constraints, procedures, and local relevance.</p>
                  <p>Pages with modular, answer-ready sections satisfy more of these sub-queries, increasing your chance of being included in the final generated answer.</p>
                </div>
              </div>

              {/* Block 5 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-2">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider font-mono">5. Passage-level extraction & context protection</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p>AI struggles with long, unstructured text. Important qualifiers and exceptions can be missed or misinterpreted.</p>
                  <p>AEO uses adaptive chunking to keep related information together in tight, well-structured passages, protecting context and improving retrieval accuracy.</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">AEO vs SEO: meaning & differences</h2>
              <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">
                SEO helps pages rank in search results. AEO helps answers form — and helps your business be chosen as a trusted source for those answers.
              </p>
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
                      <td className="px-6 py-4">Keyword-based (lexical)</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">Meaning-based (semantic)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-white/80">Ranking</td>
                      <td className="px-6 py-4">Links & pages</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">Embeddings & semantic clarity</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-white/80">Output</td>
                      <td className="px-6 py-4">Search results (SERP)</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">AI-generated answers</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-white/80">Optimisation focus</td>
                      <td className="px-6 py-4">Whole page</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">Individual passages</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">A simple example</h2>
              <div className="p-5 bg-white/[0.01] border border-white/10 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-aeo-purple"></div>
                <div className="space-y-4 text-sm text-white/80 font-light leading-relaxed">
                  <p>
                    When someone asks, <strong className="text-white font-medium">“Who’s the best electrician in Perth?”</strong> AI compares the meaning of that question to the meaning inside your content.
                  </p>
                  <p>
                    If your information clearly explains who you are, what you do, where you operate, and why you’re relevant, your passage is more likely to be selected and cited in the generated answer.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">How classic search compares to AI system retrieval</h2>
              <p className="text-sm text-white/70 leading-relaxed font-light mb-4">
                The diagram for this page shows a clean technical layout comparing classic keyword search with modern AI retrieval:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-white/70 font-light mb-4 marker:text-aeo-cyan">
                <li><strong className="text-white font-medium">Classic search:</strong> keyword matching → page ranking → search results (SERP).</li>
                <li><strong className="text-white font-medium">AI retrieval:</strong> semantic chunking → embeddings → vector similarity → generated answer.</li>
              </ul>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                This visual reinforces how AEO shifts focus from whole pages to structured, semantic passages that AI can read and trust.
              </p>
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
