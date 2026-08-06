import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Sparkles, ArrowRight, ShieldCheck, Layers, Cpu } from 'lucide-react';

export const metadata = {
  title: "Best AEO Strategies: How to Make Your Business AI-Readable — AEObility",
  description: "Discover the best AEO strategies to make your business AI-readable. Actionable procedures for structured data, atomic answer blocks, entity authority, and RAG retrieval optimisation.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/procedures",
  },
};

export default function AEOProceduresPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "@id": "https://aeobility.com.au/services/aeo/procedures#howto",
        "name": "Best AEO Strategies: How to Make Your Business AI-Readable",
        "description": "A technical step-by-step guide detailing the best Answer Engine Optimisation (AEO) strategies for structuring content to be easily parsed, chunked, and cited by RAG pipelines and Large Language Models (LLMs).",
        "totalTime": "PT30M",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Establish Semantic Boundaries with Question-Based Headings",
            "text": "Structure content using H2 and H3 headings phrased as natural-language questions (e.g., 'What are the best AEO strategies?'). This creates explicit, machine-readable conceptual boundaries that prevent context dilution when RAG scrapers chunk documents.",
            "url": "https://aeobility.com.au/services/aeo/procedures#strategy1"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Write Standalone, Atomic Answer Blocks",
            "text": "Keep core answer blocks within a tight sweet spot of 90 to 120 tokens. Lead with a direct 1-2 sentence definition immediately beneath the heading before providing supporting technical details.",
            "url": "https://aeobility.com.au/services/aeo/procedures#strategy2"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Implement Relationship-Rich Internal Linking",
            "text": "Upgrade internal link anchor text to explicitly declare semantic entity relationships (e.g., 'how adaptive semantic chunking resolves LLM context limitations') rather than generic phrases like 'click here'.",
            "url": "https://aeobility.com.au/services/aeo/procedures#strategy3"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Deploy Structured Schema & Entity Markup (JSON-LD)",
            "text": "Implement nested JSON-LD schema (FAQPage, HowTo, Organization, LocalBusiness) to provide deterministic entity graphs that AI scrapers parse without guessing context.",
            "url": "https://aeobility.com.au/services/aeo/procedures#strategy4"
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Build Off-Page Entity Authority & Co-Citations",
            "text": "Strengthen off-page AEO signals by aligning brand entity profiles across Wikidata, Google Knowledge Graph, industry registries, and authoritative media publications.",
            "url": "https://aeobility.com.au/services/aeo/procedures#strategy5"
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Optimise for Multimodal & Conversational Search",
            "text": "Format content for conversational assistants and vision models (GPT-4o, Gemini) by using conversational phrasing, voice search patterns, and descriptive media metadata.",
            "url": "https://aeobility.com.au/services/aeo/procedures#strategy6"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/aeo/procedures#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the best AEO strategies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best AEO strategies include structuring content around question-based headings, writing standalone 90-120 token atomic answer blocks, embedding relationship-rich internal links, implementing nested JSON-LD schema, building off-page entity authority, and tuning content for multimodal voice and vision search."
            }
          },
          {
            "@type": "Question",
            "name": "How do atomic answer blocks improve AI search citations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Atomic answer blocks provide direct, self-contained definitions of 90 to 120 tokens immediately beneath headings. This ensures RAG retrieval vector engines can extract precise answers without truncating key qualifiers or mixing unrelated context."
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

      <Navbar />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Navigation Links & Entity Map */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl sticky top-28">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">AEO Service Architecture</h3>
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
                3. Best AEO Strategies & Procedures
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

            <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/40 block">Free Technical Audit</span>
              <p className="text-xs text-white/60 leading-relaxed">Want us to audit your website against these 6 AEO strategies?</p>
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-aeo-cyan hover:underline pt-1"
              >
                <span>Run Free AI Visibility Scan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          {/* Hero Banner Image */}
          <div className="relative w-full h-48 sm:h-64 md:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,205,216,0.12)] group">
            <Image
              src="/best-seo-strategies-for-ai-search-marketing_AEObility.webp"
              alt="Best AEO Strategies for AI Search Marketing — AEObility"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>

          {/* Header Section */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20 text-aeo-cyan text-xs font-mono font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROVEN AEO PLAYBOOK</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Best AEO Strategies: <span className="text-gradient-aeo">How to Make Your Business AI-Readable</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              Answer Engine Optimisation (AEO) requires refactoring digital content so Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) engines can parse, chunk, and cite your business with high confidence. Explore the 6 essential AEO strategies below.
            </p>
          </div>

          {/* 2. Actionable Summary / TL;DR Strategy Block (90-120 Tokens Atomic Block) */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-aeo-cyan/10 via-black to-aeo-purple/10 border border-aeo-cyan/30 shadow-[0_0_30px_rgba(0,205,216,0.08)] space-y-3 font-sans">
            <div className="flex items-center gap-2 text-aeo-cyan font-mono text-xs uppercase font-bold tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Atomic Summary: What Are the Best AEO Strategies?</span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
              The best AEO strategies transform legacy promotional copy into machine-readable entity networks. Key tactics include: <strong>(1) Question-Based Headings</strong> for topic boundaries, <strong>(2) 90–120 Token Atomic Answer Blocks</strong> for direct RAG snippet extractions, <strong>(3) Relationship-Rich Internal Linking</strong> to declare entity connections, <strong>(4) Nested JSON-LD Schema Markup</strong> for structured data indexing, <strong>(5) Off-Page Entity Co-Citations</strong> on authoritative registries, and <strong>(6) Multimodal Conversational Tuning</strong> for voice and vision search systems.
            </p>
          </div>

          {/* 3. Detailed Strategy Playbook Grid */}
          <div className="flex flex-col gap-10">
            <h2 className="text-xl font-bold text-white tracking-tight border-b border-white/10 pb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-aeo-cyan" />
              <span>The 6 Core AEO Optimisation Strategies</span>
            </h2>

            {/* Strategy 1 */}
            <div id="strategy1" className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-aeo-cyan font-bold font-mono text-lg px-2.5 py-1 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-lg">01</span>
                <h3 className="text-white font-bold text-lg">Strategy 1: Establish Semantic Boundaries with Question-Based Headings</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Structure content using H2 and H3 headings phrased as natural-language questions (e.g., <em>&quot;What is AEO in digital marketing?&quot;</em>). Modern RAG chunking algorithms rely on structural headers to split documents into discrete vectors. Question-based headings define explicit topic boundaries, preventing context leakage between adjacent paragraphs.
              </p>

              {/* Code / Real-world Example */}
              <div className="bg-black/80 border border-white/10 rounded-xl p-4 space-y-2 text-xs font-mono">
                <div className="text-[10px] text-rose-400 font-bold uppercase tracking-wider">❌ Legacy Vague Heading</div>
                <div className="text-zinc-400 bg-zinc-950 p-2 rounded border border-white/5">
                  &lt;h3&gt;Section 2: Benefits&lt;/h3&gt;
                </div>
                <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider pt-2">✅ Machine-Readable Question Heading</div>
                <div className="text-emerald-300 bg-zinc-950 p-2 rounded border border-emerald-500/20">
                  &lt;h3&gt;What are the benefits of Answer Engine Optimisation for local businesses?&lt;/h3&gt;
                </div>
              </div>
            </div>

            {/* Strategy 2 */}
            <div id="strategy2" className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-aeo-purple font-bold font-mono text-lg px-2.5 py-1 bg-aeo-purple/10 border border-aeo-purple/20 rounded-lg">02</span>
                <h3 className="text-white font-bold text-lg">Strategy 2: Write Standalone, Atomic Answer Blocks</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Keep primary answer blocks within a tight sweet spot of <strong>90 to 120 tokens</strong> (max 250 words). Lead with a concise, direct 1–2 sentence definition immediately beneath the heading before expanding into supporting technical points. This ensures generative LLMs extract your precise answer without losing critical qualifications.
              </p>

              {/* Real-World Example */}
              <div className="bg-black/80 border border-white/10 rounded-xl p-4 space-y-2 text-xs font-mono">
                <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Atomic Answer Block Structure (105 Tokens)</div>
                <div className="text-zinc-200 bg-zinc-950 p-3 rounded border border-white/10 leading-relaxed font-sans text-xs">
                  &quot;Answer Engine Optimisation (AEO) is the technical discipline of refactoring web content so AI systems like ChatGPT, Perplexity, and Google Search AI Overviews can parse, understand, and cite a business directly. Unlike legacy SEO, AEO focuses on entity salience, vector proximity, and structured JSON-LD schema.&quot;
                </div>
              </div>
            </div>

            {/* Strategy 3 */}
            <div id="strategy3" className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-aeo-cyan font-bold font-mono text-lg px-2.5 py-1 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-lg">03</span>
                <h3 className="text-white font-bold text-lg">Strategy 3: Implement Relationship-Rich Internal Linking</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Replace generic internal link anchors (like <em>&quot;click here&quot;</em> or <em>&quot;read more&quot;</em>) with descriptive phrases that explicitly declare entity relationships. LLM crawlers follow internal links to construct knowledge graphs; relationship-rich anchor text provides semantic context that elevates your domain authority.
              </p>

              <div className="bg-black/80 border border-white/10 rounded-xl p-4 space-y-2 text-xs font-mono">
                <div className="text-[10px] text-rose-400 font-bold uppercase tracking-wider">❌ Generic Anchor Text</div>
                <div className="text-zinc-400 bg-zinc-950 p-2 rounded border border-white/5">
                  To learn about chunking, &lt;a href=&quot;/semantic-seo&quot;&gt;click here&lt;/a&gt;.
                </div>
                <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider pt-2">✅ Relationship-Rich Anchor Text</div>
                <div className="text-emerald-300 bg-zinc-950 p-2 rounded border border-emerald-500/20">
                  Read how &lt;a href=&quot;/semantic-seo&quot;&gt;adaptive semantic chunking resolves LLM context limitations&lt;/a&gt;.
                </div>
              </div>
            </div>

            {/* Strategy 4 */}
            <div id="strategy4" className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-aeo-purple font-bold font-mono text-lg px-2.5 py-1 bg-aeo-purple/10 border border-aeo-purple/20 rounded-lg">04</span>
                <h3 className="text-white font-bold text-lg">Strategy 4: Deploy Structured Schema & Entity Markup (JSON-LD)</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Implement rich, nested JSON-LD schema markup (`Organization`, `LocalBusiness`, `FAQPage`, `HowTo`, `Service`). Schema acts as an explicit data dictionary for scrapers, eliminating ambiguity around business entities, geographic service areas, and product offerings.
              </p>

              <div className="bg-black/80 border border-white/10 rounded-xl p-4 space-y-2 text-xs font-mono overflow-x-auto">
                <div className="text-[10px] text-aeo-cyan font-bold uppercase tracking-wider">Nested JSON-LD Schema Snippet</div>
                <pre className="text-zinc-300 bg-zinc-950 p-3 rounded border border-white/10 text-[11px] leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Best AEO Strategies & Implementation",
  "provider": {
    "@type": "Organisation",
    "name": "AEObility",
    "url": "https://aeobility.com.au"
  },
  "areaServed": "AU"
}`}
                </pre>
              </div>
            </div>

            {/* Strategy 5 */}
            <div id="strategy5" className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-aeo-cyan font-bold font-mono text-lg px-2.5 py-1 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-lg">05</span>
                <h3 className="text-white font-bold text-lg">Strategy 5: Build Off-Page Entity Authority & Co-Citations</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                AI engines evaluate external consensus to verify entity legitimacy. Strengthen off-page AEO by ensuring your brand Name, Address, Phone (NAP), and primary service credentials are consistently cited across Wikidata, Google Knowledge Graph nodes, industry registries, and authoritative Australian media publications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center">
                  <div className="font-bold text-white mb-1">Wikidata & Graphs</div>
                  <div className="text-white/50 text-[11px]">Structured entity nodes</div>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center">
                  <div className="font-bold text-white mb-1">Consistent NAP</div>
                  <div className="text-white/50 text-[11px]">Verified registry signals</div>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center">
                  <div className="font-bold text-white mb-1">Co-Citation Media</div>
                  <div className="text-white/50 text-[11px]">Unlinked brand mentions</div>
                </div>
              </div>
            </div>

            {/* Strategy 6 */}
            <div id="strategy6" className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-aeo-purple font-bold font-mono text-lg px-2.5 py-1 bg-aeo-purple/10 border border-aeo-purple/20 rounded-lg">06</span>
                <h3 className="text-white font-bold text-lg">Strategy 6: Optimise for Multimodal & Conversational Search</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Modern models (GPT-4o, Gemini 1.5) process text, audio, and visual inputs simultaneously. Optimise for conversational queries by using natural speech phrasing, optimizing image `alt` attributes with descriptive entity context, and providing structured video metadata for voice search assistants.
              </p>
            </div>
          </div>

          {/* Sibling/Lateral Corridor navigation (Semantic Lattice) */}
          <div className="border-t border-white/10 pt-8 mt-4 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              <span>Explore Related AEO Framework Nodes</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <Link href="/services/aeo/definition" className="p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:border-aeo-cyan/40 hover:text-aeo-cyan transition-colors flex items-center justify-between group">
                <span>1. What is AEO & how does it work?</span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-aeo-cyan transition-colors" />
              </Link>
              <Link href="/services/aeo/comparison" className="p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:border-aeo-cyan/40 hover:text-aeo-cyan transition-colors flex items-center justify-between group">
                <span>2. AEO vs SEO: The Generative Shift</span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-aeo-cyan transition-colors" />
              </Link>
              <Link href="/services/aeo/constraints" className="p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:border-aeo-cyan/40 hover:text-aeo-cyan transition-colors flex items-center justify-between group">
                <span>4. What stops your business from showing up?</span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-aeo-cyan transition-colors" />
              </Link>
              <Link href="/services/aeo/costs-timing" className="p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:border-aeo-cyan/40 hover:text-aeo-cyan transition-colors flex items-center justify-between group">
                <span>5. AEO Pricing & Sprint Deliverables</span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-aeo-cyan transition-colors" />
              </Link>
            </div>
          </div>

          {/* Bottom-Up Link to Root Hub */}
          <div className="pt-4 flex items-center justify-between border-t border-white/5">
            <Link href="/services/aeo" className="text-xs font-medium text-white/60 hover:text-white transition-colors">
              ← Back to <strong className="text-white hover:underline">AEO Services Hub</strong>
            </Link>
            <Link
              href="/diagnostic"
              className="px-4 py-2 text-xs font-bold bg-aeo-cyan text-black rounded-lg hover:bg-white transition-all flex items-center gap-1.5 shadow-md"
            >
              <span>Get Free Visibility Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
