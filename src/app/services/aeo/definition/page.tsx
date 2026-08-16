import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowRight, AlertTriangle, CheckCircle2, Cpu, ShieldCheck, FileText } from 'lucide-react';

export const metadata = {
  title: "What is AEO in Digital Marketing? Meaning & Concepts — AEObility",
  description: "Discover the definition of Answer Engine Optimisation (AEO) and learn how machine learning models read, index, and cite business information.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/definition",
  },
};

export default function AEODefinitionPage() {
  const faqData = [
    {
      question: "What does AEO mean in digital marketing?",
      answer: "AEO (Answer Engine Optimisation) is the practice of structuring your content so AI systems, Large Language Models (LLMs), and RAG retrieval pipelines can accurately parse, understand, and cite your business information. It focuses on semantic clarity rather than keyword density."
    },
    {
      question: "How is AEO different from SEO?",
      answer: "Traditional SEO optimises full web pages to rank in search engine results pages (SERPs). AEO refactors web content into atomic context chunks and structured schema so AI engines (like ChatGPT, Claude, Gemini, and Perplexity) can retrieve specific passages and cite your business in direct answers."
    },
    {
      question: "Why does AEO matter now?",
      answer: "Conversational search and AI overviews are increasingly answering user queries directly, bypassing traditional link results. If your business information is not structured into machine-readable answer blocks, AI systems will skip your site and cite competing entities."
    },
    {
      question: "How do modern AI systems read and index content?",
      answer: "AI engines process text using vector embeddings, breaking content into semantic chunks and storing them in vector spaces. When a user asks a question, dense retrieval algorithms match query vectors against content vectors to identify the most relevant passage for answer generation."
    },
    {
      question: "What is semantic chunking?",
      answer: "Semantic chunking is the technique of breaking web content into concise, self-contained units of meaning that convey complete facts without losing context. Clean chunking reduces model hallucination and maximizes retrieval confidence during RAG processing."
    },
    {
      question: "What are embeddings and why are they important?",
      answer: "Embeddings are mathematical vector representations of language meaning. They allow search and AI models to evaluate semantic similarity rather than exact keyword matches, ensuring your content surfaces even when user phrasing varies."
    },
    {
      question: "How does AEO help my business get cited by AI platforms?",
      answer: "AEO reinforces entity salience, deploys granular JSON-LD schema, and structures business facts into high-density passages. This gives AI models high confidence in your content's accuracy, making your business a primary citation source."
    },
    {
      question: "Is AEO relevant for small Australian businesses?",
      answer: "Yes. AEO is especially critical for Australian local service providers. Clear entity metadata and structured local context allow AI assistants and map engines to recommend your business for geo-targeted conversational queries in Perth and across Australia."
    },
    {
      question: "Where should I start with AEO?",
      answer: "Start by conducting an AI visibility scan to assess how AI search engines interpret your current web footprint. Then refactor key service content into atomic answer blocks, deploy structured Schema.org markup, and build semantic internal links across your site."
    }
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Audit & Entity Mapping",
      desc: "Scan site assets to verify how LLMs evaluate your core brand entity and service parameters. Map existing entity salience scores to uncover retrieval gaps across AI engine vectors."
    },
    {
      step: "02",
      title: "Semantic Chunking",
      desc: "Break long prose into focused 40–60 word answer blocks with explicit subheadings. Clean passage boundaries protect context from model distortion and increase direct citation rates."
    },
    {
      step: "03",
      title: "JSON-LD Schema Deployment",
      desc: "Implement nested FAQPage, DefinedTerm, Service, and LocalBusiness schema nodes. Rich structured data feeds deterministic metadata straight to search crawlers and AI bots."
    },
    {
      step: "04",
      title: "Internal Entity Linking",
      desc: "Connect definition nodes directly to conversion pages like the AEObility Blueprint or AEO Packages. Interlinked semantic corridors guide crawlers through high-priority authority paths."
    },
    {
      step: "05",
      title: "Citation & Referral Tracking",
      desc: "Monitor citation frequency across Perplexity, ChatGPT, Claude, and Google AI Overviews. Measure brand recommendation rates and adjust context chunks to expand query coverage."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/services/aeo/definition#article",
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
          },
          {
            "@type": "Service",
            "name": "AEO Services",
            "serviceType": "Answer Engine Optimisation",
            "provider": {
              "@type": "Organization",
              "name": "AEObility"
            }
          }
        ],
        "articleSection": [
          "What is AEO and why does it matter?",
          "Why AEO matters for your business",
          "The core principles of Answer Engine Optimisation",
          "AEO vs SEO comparison",
          "How to Implement AEO: 5-Step Technical Framework",
          "A practical retrieval example",
          "Real-World Proof: The Baby Bento Case Study",
          "How classic search compares to AI system retrieval",
          "Common AEO Implementation Mistakes"
        ],
        "keywords": [
          "AEO",
          "Answer Engine Optimisation",
          "AEO marketing",
          "semantic retrieval",
          "what is AEO in digital marketing",
          "AEO vs SEO meaning",
          "dense retrieval",
          "embeddings",
          "vector similarity",
          "passage-level extraction"
        ],
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
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/aeo/definition#faq",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      },
      {
        "@type": "VideoObject",
        "@id": "https://aeobility.com.au/services/aeo/definition#video",
        "name": "What is AEO in Digital Marketing? Meaning & Concepts",
        "description": "An overview of Answer Engine Optimisation (AEO), vector similarity, semantic chunking, and how AI systems retrieve business data.",
        "thumbnailUrl": [
          "https://img.youtube.com/vi/ghX_txnK7WU/hqdefault.jpg"
        ],
        "uploadDate": "2026-08-16",
        "duration": "PT1M1S",
        "contentUrl": "https://www.youtube.com/watch?v=ghX_txnK7WU",
        "embedUrl": "https://www.youtube.com/embed/ghX_txnK7WU",
        "url": "https://aeobility.com.au/services/aeo/definition"
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
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full flex flex-col gap-8">
        <section className="flex flex-col gap-8">
          <div>
            {/* Main Header Illustration */}
            <div className="w-full relative rounded-2xl overflow-hidden mb-8 border border-white/10 bg-white/[0.02]">
              <Image 
                src="/what-is-definiton-of-aeo_AEObility.webp" 
                alt="Answer Engine Optimisation (AEO) defined by AEObility. Illustration showing how AI systems and LLMs use semantic chunking, embeddings, and vector similarity to retrieve and cite business data." 
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              What is AEO in Digital Marketing? <span className="text-gradient-aeo">Meaning & Concepts</span>
            </h1>

            {/* STEP 2: Executive Summary Answer Block */}
            <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-white/[0.02] to-aeo-purple/10 border-l-4 border-aeo-cyan rounded-r-2xl mb-8 shadow-lg">
              <p className="text-xs font-mono font-bold uppercase text-aeo-cyan tracking-wider mb-2 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-aeo-cyan" />
                <span>Executive Summary &bull; AEO Definition</span>
              </p>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                Answer Engine Optimisation (AEO) is the technical discipline of engineering and structuring web content into machine-readable context chunks, verified entities, and JSON-LD schema so conversational AI engines and RAG retrieval pipelines can accurately digest, index, and cite your business in generated answers.
              </p>
            </div>

            <p className="text-white/80 text-lg leading-relaxed max-w-xl font-light mb-8">
              AEO, or <strong className="text-white font-semibold">Answer Engine Optimisation</strong>, is the practice of organising your business information so AI systems can read it, understand it, and confidently cite it in generated answers.
            </p>

            {/* Why AEO matters for your business */}
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">Why AEO matters for your business</h2>
              <div className="space-y-4 text-sm text-white/70 leading-relaxed font-light">
                <p>
                  Modern search behaviour is shifting rapidly. Consumers ask AI assistants direct questions rather than sifting through pages of blue links. AI engines evaluate which businesses to cite as authority sources based on semantic clarity.
                </p>
                <p>
                  Answer Engine Optimisation helps your business stay <strong className="text-white font-semibold">discoverable</strong>, <strong className="text-white font-semibold">understandable</strong>, and <strong className="text-white font-semibold">recommended</strong> across AI overviews, maps, and conversational search corridors.
                </p>
              </div>
            </div>

            {/* Core Principles */}
            <div className="space-y-6 mb-10">
              <h2 className="text-xl font-bold mb-2">The core principles of Answer Engine Optimisation</h2>
              <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                AEO focuses on how modern machine learning models read, index, and cite business information. Four technical concepts underpin the discipline: <strong className="text-white font-semibold">embeddings</strong>, <strong className="text-white font-semibold">vector similarity</strong>, <strong className="text-white font-semibold">dense retrieval</strong>, and <strong className="text-white font-semibold">passage-level extraction</strong>.
              </p>

              {/* Block 1 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-2">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider font-mono">1. Search has shifted from pages to passages</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p>Traditional SEO ranks whole pages and URLs. AI systems extract small, self-contained passages instead of digesting an entire document.</p>
                  <p>To be included in AI-generated answers, your content requires modular answer blocks that can be easily parsed and synthesized into conversational responses.</p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-purple border-l-2">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider font-mono">2. How modern AI systems read content</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p>AI models map text into <strong className="text-white font-medium">embeddings</strong> — high-dimensional mathematical representations of meaning. They match conceptual intent rather than simple string keywords.</p>
                  <p>This enables search engines to recognise related entity concepts even when exact phrasing differs, provided content is structured cleanly.</p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-2">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider font-mono">3. Semantic retrieval explained</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p><strong className="text-white font-medium">Semantic retrieval</strong> compares the mathematical representation of a user question against the vector space of your content.</p>
                  <p>AEO applies <strong className="text-white font-medium">semantic chunking</strong> to partition content into standalone information blocks, allowing RAG systems to retrieve relevant facts with minimal noise.</p>
                </div>
              </div>

              {/* Block 4 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-purple border-l-2">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider font-mono">4. Dense retrieval & query expansion</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p>When a user asks a complex question, AI tools expand it into multiple sub-queries seeking definitions, entity relations, location constraints, and procedural steps.</p>
                  <p>Pages engineered with structured passage responses satisfy a broader range of sub-queries, increasing total citation frequency.</p>
                </div>
              </div>

              {/* Block 5 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-2">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider font-mono">5. Passage-level extraction & context protection</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p>Unstructured copy causes context fragmentation, leading to misinterpretation or hallucination during AI synthesis.</p>
                  <p>AEO protects context boundaries, ensuring critical business facts, location relevance, and service parameters remain intact during retrieval.</p>
                </div>
              </div>
            </div>

            {/* AEO vs SEO Comparison Table */}
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">AEO vs SEO: meaning & differences</h2>
              <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">
                SEO focuses on ranking URLs in traditional search indices. AEO focuses on engineering information so AI systems choose your business as an authoritative answer source.
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
                      <td className="px-6 py-4 font-medium text-white/80">Retrieval Mechanism</td>
                      <td className="px-6 py-4">Keyword-based (lexical index)</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">Meaning-based (semantic embeddings)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-white/80">Ranking Target</td>
                      <td className="px-6 py-4">Backlinks & page authority</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">Entity salience & passage confidence</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-white/80">Output Interface</td>
                      <td className="px-6 py-4">Search engine result pages (SERPs)</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">AI overviews & conversational citations</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-white/80">Optimisation Focus</td>
                      <td className="px-6 py-4">Whole URL / Page layout</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">Atomic answer passages & JSON-LD schema</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* STEP 3: 5-Step How to Implement AEO Framework */}
            <div className="mb-10 space-y-6">
              <h2 className="text-xl font-bold">How to Implement AEO: 5-Step Technical Framework</h2>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                To transform traditional web copy into an AI-retrievable asset, follow this 5-step engineering framework:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {implementationSteps.map((s, idx) => (
                  <div key={idx} className={`p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2 ${idx === 4 ? 'md:col-span-2' : ''}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-aeo-cyan uppercase tracking-wider">{s.step} &bull; {s.title}</span>
                      {idx === 3 && (
                        <Link href="/solutions/aeo-blueprint" className="text-[10px] text-aeo-purple hover:underline font-mono">
                          Explore Blueprint &rarr;
                        </Link>
                      )}
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-light">{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-white/[0.01] border border-white/10 rounded-xl text-xs text-white/70 flex items-center justify-between flex-wrap gap-3">
                <span>Ready to deploy structured AEO across your business site?</span>
                <div className="flex gap-3 font-semibold">
                  <Link href="/solutions/aeo-blueprint" className="text-aeo-cyan hover:underline">
                    AEObility Blueprint &rarr;
                  </Link>
                  <Link href="/solutions" className="text-aeo-purple hover:underline">
                    View AEO Packages &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Practical Example */}
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">A practical retrieval example</h2>
              <div className="p-5 bg-white/[0.01] border border-white/10 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-aeo-purple"></div>
                <div className="space-y-4 text-sm text-white/80 font-light leading-relaxed">
                  <p>
                    When a user asks an AI assistant, <strong className="text-white font-medium">“Who is the best commercial electrician in Perth?”</strong> the model transforms the query into semantic vectors and searches indexed business passages.
                  </p>
                  <p>
                    If your website content explicitly structures who you are, your verified credentials, geographic coverage, and service capabilities into machine-readable chunks, the retrieval engine scores your passage with high vector similarity and presents your business as a cited recommendation.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 4: Baby Bento Case Study (Real Proof Point) */}
            <div className="mb-10 p-6 bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-aeo-cyan/5 border border-white/10 rounded-2xl space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-aeo-cyan uppercase px-2.5 py-1 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-full inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Real-World Proof &bull; Case Study
                </span>
                <Link 
                  href="/knowledge-hub/case-studies/baby-bento" 
                  className="text-xs font-semibold text-aeo-cyan hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <h2 className="text-xl font-bold text-white">Case Study: How Baby Bento Dominates AI Answer Citation</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light text-white/70 pt-2">
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1.5">
                  <span className="font-semibold text-white uppercase tracking-wider text-[10px] text-aeo-purple font-mono block">Background</span>
                  <p>Baby Bento, an Australian e-commerce retail brand, struggled to capture conversational, direct-answer queries for bento boxes, food jars, and lunch accessories in AI-driven search environments.</p>
                </div>
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1.5">
                  <span className="font-semibold text-white uppercase tracking-wider text-[10px] text-aeo-cyan font-mono block">AEO Strategy</span>
                  <p>Refactored product descriptions into semantic passages, built direct answer blocks for material safety and sizing queries, and deployed nested product and FAQ microdata.</p>
                </div>
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1.5">
                  <span className="font-semibold text-white uppercase tracking-wider text-[10px] text-emerald-400 font-mono block">Outcome</span>
                  <p>Achieved a significant increase in AI platform citations and featured answer placement, driving a direct lift in qualified organic referral traffic within 60 days.</p>
                </div>
              </div>
            </div>

            {/* STEP 1: Visual Breakdown & YouTube Embedded Video */}
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">How classic search compares to AI system retrieval</h2>
              
              {/* STEP 1: YouTube Video Embedded Directly Above Technical Comparison */}
              <div className="w-full relative rounded-2xl overflow-hidden mb-6 border border-white/10 bg-neutral-950 aspect-video shadow-[0_0_30px_rgba(0,205,216,0.15)]">
                <iframe
                  src="https://www.youtube.com/embed/ghX_txnK7WU?rel=0"
                  title="What is AEO in Digital Marketing? Meaning & Concepts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              <p className="text-sm text-white/70 leading-relaxed font-light mb-4">
                Watch the video above or review the technical architecture comparison illustrating the structural shift between traditional web indexing and generative retrieval:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-white/70 font-light mb-4 marker:text-aeo-cyan">
                <li><strong className="text-white font-medium">Classic search workflow:</strong> Lexical matching &rarr; Page rank evaluation &rarr; Search result listings (SERP).</li>
                <li><strong className="text-white font-medium">AI retrieval workflow:</strong> Context chunking &rarr; Embedding transformation &rarr; Vector similarity scoring &rarr; Synthesised answer citation.</li>
              </ul>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                This fundamental shift requires digital marketing strategies to move beyond surface keyword targeting toward deep entity and passage engineering.
              </p>
            </div>

            {/* STEP 5: Common AEO Implementation Mistakes */}
            <div className="mb-10 space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>Common AEO Implementation Mistakes</span>
              </h2>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Avoid these frequent technical pitfalls when restructuring content for machine indexing:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-1">
                  <h3 className="text-xs font-bold text-amber-300 font-mono">Mistake 1: Relying on Keyword Repetition Over Vector Context</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    Spatially repeating keywords without building high-dimensional semantic relationships fails to satisfy vector similarity metrics in dense retrieval models.
                  </p>
                </div>
                <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-1">
                  <h3 className="text-xs font-bold text-amber-300 font-mono">Mistake 2: Hiding Critical Business Data in Client-Side Code</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    Hiding key product specifications, hours, or pricing inside deep JavaScript accordions or image text blocks prevents LLM crawlers from extracting clean context.
                  </p>
                </div>
                <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-1">
                  <h3 className="text-xs font-bold text-amber-300 font-mono">Mistake 3: Neglecting Local & Entity Boundaries</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    Omitting explicit geographic coordinates, verified credentials, and local service boundaries weakens GEO retrieval confidence for regional intent queries.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 6: Shifted Conversion CTA Flow */}
            <div className="p-8 bg-gradient-to-br from-aeo-purple/15 to-aeo-cyan/15 border border-white/10 rounded-3xl text-center space-y-6 mb-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white font-soehne-breit">Ready to Optimise Your Business for AI Search?</h3>
              <p className="text-sm text-white/70 max-w-lg mx-auto font-light leading-relaxed">
                Transform your digital content into high-confidence AI answer blocks. Get our $995 AUD Strategic Blueprint or book an AEO Sprint.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Let&apos;s Talk AEO
                </Link>
                <Link href="/book" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all">
                  Jump on a Quick Call
                </Link>
                <Link href="/solutions/aeo-blueprint" className="px-5 py-3 rounded-xl bg-gradient-to-r from-aeo-cyan/20 to-aeo-purple/20 border border-aeo-cyan/40 text-aeo-cyan font-bold text-xs hover:scale-[1.02] transition-all">
                  Get Strategic Blueprint &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Synchronised FAQ Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            {faqData.map((faq, idx) => (
              <details key={idx} className="group bg-white/[0.01] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.03] transition-colors">
                <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm">
                  {faq.question}
                  <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="mt-4 text-xs text-white/60 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          {/* Semantic Connections (Corridor Links) */}
          <div className="border-t border-white/5 pt-6 mt-6 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan">Semantic Connections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <Link href="/services/aeo/comparison" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Is AEO just SEO with a new name? (SEO vs AEO vs GEO)
              </Link>
              <Link href="/services/aeo/procedures" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Best AEO Strategies: Making Your Business AI-Readable
              </Link>
            </div>
          </div>

          {/* Bottom-Up Link to Root Hub */}
          <div className="pt-4 flex">
            <Link href="/services/aeo" className="text-xs font-medium text-white/40 hover:text-white transition-colors">
              ← Back to <strong className="text-white hover:underline">AEO Services Hub</strong>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
