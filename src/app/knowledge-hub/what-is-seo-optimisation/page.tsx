import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Network, 
  Sparkles, 
  Layers, 
  Cpu, 
  Search, 
  ShieldCheck, 
  FileText, 
  Compass,
  GitBranch,
  Table,
  Zap,
  BookOpen
} from 'lucide-react';

export const metadata = {
  title: "What Is SEO Optimisation? Guide for Modern Search | AEObility",
  description: "Learn what SEO optimisation means today, how lexical retrieval feeds RAG hybrid search, and how Entity SEO bridges traditional search to AEO.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation",
  },
  openGraph: {
    title: "What Is SEO Optimisation? Guide for Modern Search | AEObility",
    description: "Learn what SEO optimisation means today, how lexical retrieval feeds RAG hybrid search, and how Entity SEO bridges traditional search to AEO.",
    url: "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "What Is SEO Optimisation? AEObility Knowledge Hub",
      },
    ],
  },
};

export default function WhatIsSEOOptimisationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation",
        "url": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation",
        "name": "What Is SEO Optimisation? Guide for Modern Search",
        "description": "Learn what SEO optimisation means today, how lexical retrieval feeds RAG hybrid search, and how Entity SEO bridges traditional search to AEO.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#breadcrumb"
        }
      },
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#article",
        "headline": "What Is SEO Optimisation? Guide for Modern Search",
        "articleSection": [
          "SEO as the Input Layer for Modern Search",
          "Lexical Retrieval — How Sparse Indexing Works",
          "The Core Pillars of SEO Optimisation",
          "The 4-Layer Search Model: SEO -> Entity -> AEO -> RAG",
          "The Missing Bridge: Entity SEO",
          "How SEO Feeds AI Knowledge Graphs & Hybrid RAG",
          "When SEO Is Enough — And When You Need AEO",
          "Summary — SEO Is Still Foundational"
        ],
        "keywords": [
          "what is seo optimisation",
          "seo optimisation",
          "lexical retrieval",
          "bm25 sparse retrieval",
          "entity seo",
          "seo vs aeo",
          "hybrid search RAG",
          "technical seo pillars"
        ],
        "author": {
          "@type": "Organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        },
        "publisher": {
          "@type": "Organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aeobility.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Knowledge Hub",
            "item": "https://aeobility.com.au/knowledge-hub"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "What Is SEO Optimisation?",
            "item": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is SEO optimisation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (Search Engine Optimisation) is the technical and structural practice of making web content crawlable, indexable, and lexically relevant. It serves as the foundational input layer that enables search engines to rank full web pages and provides AI search and answer engines with clean, structured source material for entity parsing and RAG retrieval."
            }
          },
          {
            "@type": "Question",
            "name": "What is Entity SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional SEO teaches search bots what words are on a page; Entity SEO teaches them what real-world concepts, organisations, and relationships those words represent using JSON-LD structured data, entity references, and explicit contextual relationships."
            }
          },
          {
            "@type": "Question",
            "name": "How does SEO feed RAG retrieval pipelines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Modern AI search and answer engines rely on hybrid search, combining dense vector embeddings with sparse BM25 lexical signals. Clean HTML tags, metadata, and lexical clarity provided by traditional SEO give hybrid retrievers early candidate matches before dense vector reranking."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#07070a] text-slate-100 min-h-screen selection:bg-teal-500/30 selection:text-teal-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />

      <main className="relative pt-28 pb-20 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-teal-500/10 via-cyan-500/5 to-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Breadcrumbs />

          <div className="mt-8">
            <SubNavPills items={HUB_SUBNAV_MAPS.knowledge} />
          </div>

          {/* Header Banner */}
          <div className="mt-8 mb-12 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-950/90 border border-slate-800/80 rounded-3xl p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal-500/10 blur-3xl rounded-full" />
            
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium mb-6">
                <Search className="w-3.5 h-3.5" />
                FOUNDATIONAL SEARCH INFRASTRUCTURE
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                What Is SEO Optimisation?
              </h1>

              {/* Atomic Definition Block */}
              <div className="p-6 bg-slate-950/80 border border-teal-500/30 rounded-2xl relative shadow-inner">
                <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  ATOMIC DEFINITION
                </div>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                  <strong>SEO (Search Engine Optimisation)</strong> is the technical and structural practice of making web content <strong>crawlable, indexable, and lexically relevant</strong>. It serves as the foundational input layer that enables search engines to rank full web pages and provides AI search and answer engines with clean, structured source material for entity parsing and RAG retrieval.
                </p>
              </div>
            </div>
          </div>

          {/* Main Article Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-12 text-slate-300">
              
              {/* Section 1 */}
              <section className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Layers className="w-6 h-6 text-teal-400" />
                  SEO as the Input Layer for Modern Search
                </h2>
                <p className="leading-relaxed">
                  Traditional SEO focuses on making your content <strong>discoverable and understandable</strong> at the page level. Clean SEO gives search engines and AI retrieval systems more reliable material to crawl, interpret, retrieve, and cite across human and machine interfaces.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Clean HTML heading hierarchy (H1, H2, H3)",
                    "Crawlable XML sitemaps & site architecture",
                    "Clear lexical keyword & entity signals",
                    "Fast, accessible, machine-parsable pages"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-950/50 border border-slate-800/40 text-slate-200 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Search className="w-6 h-6 text-cyan-400" />
                  Lexical Retrieval — How Sparse Indexing Works
                </h2>
                <p className="leading-relaxed">
                  Lexical retrieval focuses on matching explicit search terms, stemmed variants, and anchor text across a site&apos;s document index. Rather than reading for abstract context alone, lexical systems calculate relevance using algorithms like <strong>BM25</strong> to score term frequency, page structure, and link authority.
                </p>
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-6 space-y-3">
                  <div className="text-sm font-semibold text-slate-200 uppercase tracking-wider">What lexical SEO improves:</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2">• Sparse BM25 term frequency matching</li>
                    <li className="flex items-center gap-2">• Metadata & H1 title tag clarity</li>
                    <li className="flex items-center gap-2">• Document heading hierarchy</li>
                    <li className="flex items-center gap-2">• Anchor text link authority graphs</li>
                    <li className="flex items-center gap-2">• Page speed & DOM accessibility</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Compass className="w-6 h-6 text-purple-400" />
                  The Core Pillars of SEO Optimisation
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <h3 className="font-bold text-teal-300 text-lg">Technical SEO</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Crawlability, indexability, site speed, XML sitemaps, structured HTML.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <h3 className="font-bold text-cyan-300 text-lg">On‑Page SEO</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Keyword targeting, natural headings, metadata, content clarity.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <h3 className="font-bold text-purple-300 text-lg">Authority & Architecture</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Internal link graphs, external citations, domain reputation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: The 4-Layer Search Model */}
              <section className="space-y-6 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Table className="w-6 h-6 text-teal-400" />
                  <h2 className="text-2xl font-bold text-white">The 4-Layer Search Model</h2>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  Modern search systems operate across four distinct functional layers — moving from full-page discovery to entity disambiguation, atomic passage extraction, and hybrid AI answer synthesis:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-800 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-slate-950/80 text-teal-300 border-b border-slate-800 font-mono">
                        <th className="p-3.5 border-r border-slate-800">Layer</th>
                        <th className="p-3.5 border-r border-slate-800">Core Focus</th>
                        <th className="p-3.5 border-r border-slate-800">Dominant Mechanism</th>
                        <th className="p-3.5">Primary Target</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                      <tr>
                        <td className="p-3.5 font-bold text-white border-r border-slate-800">1. Traditional SEO</td>
                        <td className="p-3.5 border-r border-slate-800 text-slate-300">Crawlability, indexability, site speed, and page relevance</td>
                        <td className="p-3.5 border-r border-slate-800 font-mono text-cyan-300">Sparse Lexical Matching (BM25) & Links</td>
                        <td className="p-3.5 font-semibold text-slate-200">Full URL / Page</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white border-r border-slate-800">2. Entity SEO</td>
                        <td className="p-3.5 border-r border-slate-800 text-slate-300">Entity disambiguation, schema markup, & Knowledge Graph alignment</td>
                        <td className="p-3.5 border-r border-slate-800 font-mono text-teal-300">Semantic Mapping & Linked Open Data</td>
                        <td className="p-3.5 font-semibold text-slate-200">Entity & Relationship Nodes</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white border-r border-slate-800">3. AEO</td>
                        <td className="p-3.5 border-r border-slate-800 text-slate-300">Direct-answer formatting, passage clarity, & claim support</td>
                        <td className="p-3.5 border-r border-slate-800 font-mono text-emerald-300">Passage Extraction & Vector Similarity</td>
                        <td className="p-3.5 font-semibold text-slate-200">Atomic Passage / Answer Block</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white border-r border-slate-800">4. Generative RAG</td>
                        <td className="p-3.5 border-r border-slate-800 text-slate-300">Synthesising retrieved source evidence into answers</td>
                        <td className="p-3.5 border-r border-slate-800 font-mono text-purple-300">Hybrid Retrieval (Sparse + Dense vectors)</td>
                        <td className="p-3.5 font-semibold text-slate-200">Synthesised AI Response</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: The Missing Bridge - Entity SEO */}
              <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-teal-500/30 rounded-2xl p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <GitBranch className="w-6 h-6 text-teal-400" />
                  <h2 className="text-2xl font-bold text-white">The Missing Bridge: Entity SEO</h2>
                </div>
                
                <p className="leading-relaxed text-slate-200">
                  Traditional SEO makes a page discoverable and relevant to the words people search. <Link href="/knowledge-hub/articles/entity-authority-building" className="text-teal-400 font-semibold hover:underline">Entity SEO</Link> clarifies the real-world concepts, organisations, products, and relationships those words represent. An <Link href="/knowledge-hub/aeo" className="text-cyan-400 font-semibold hover:underline">Answer Engine (AEO)</Link> then shapes important claims into clear, self-contained passages that AI search and answer engines can more easily retrieve, interpret, and potentially cite.
                </p>

                <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2 text-sm text-slate-300">
                  <div className="font-mono text-teal-300 font-bold">SEO → Entity SEO → AEO → RAG Progression:</div>
                  <p>
                    First, build crawlable pages with clear lexical signals. Next, establish entity clarity and relationships through JSON-LD structured data, entity references, and explicit contextual relationships. Then make high-value answers extractable at the passage level so AI retrieval systems can use those signals alongside other sources when selecting evidence for generated answers.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="text-xs font-mono text-teal-400 font-bold">1. Lexical Input</div>
                    <p className="text-xs text-slate-400">Clean HTML tags, BM25 term signals, H1-H3 headings.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="text-xs font-mono text-cyan-400 font-bold">2. Entity Mapping</div>
                    <p className="text-xs text-slate-400">JSON-LD structured data, entity references, contextual links.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="text-xs font-mono text-purple-400 font-bold">3. Passage & Citation</div>
                    <p className="text-xs text-slate-400">Passage retrieval & citation potential in hybrid search.</p>
                  </div>
                </div>

                {/* Next Node Inset Router Card */}
                <div className="mt-4 p-4 rounded-xl bg-teal-950/30 border border-teal-500/20 text-xs sm:text-sm text-slate-200 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-teal-300 font-mono">Next Node in the Learning Lattice:</strong> Learn how to map real-world concepts with our guide to <Link href="/knowledge-hub/articles/entity-authority-building" className="text-teal-400 font-semibold hover:underline">Entity SEO & Authority Building</Link>, or explore how <Link href="/knowledge-hub/aeo" className="text-cyan-400 font-semibold hover:underline">Answer Engine Optimisation (AEO)</Link> refactors passages for generative search.
                  </div>
                </div>
              </section>

              {/* Section 6: How SEO Feeds AI Knowledge Graphs & Hybrid RAG */}
              <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Network className="w-6 h-6 text-teal-400" />
                  How SEO Feeds AI Knowledge Graphs & Hybrid RAG
                </h2>
                <p className="leading-relaxed">
                  Modern AI search engines don&apos;t just read web pages — they build <strong>knowledge graphs</strong> and run <strong>hybrid search</strong>. Clear heading hierarchy helps both people and automated systems identify coherent passages, providing the sparse candidate pool that generative models ingest into <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-cyan-400 font-medium hover:underline">RAG (Retrieval-Augmented Generation)</Link> pipelines:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1">
                    <div className="text-sm font-bold text-teal-300 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Clean Heading Hierarchy
                    </div>
                    <p className="text-xs text-slate-400">Enables unambiguous natural language passage chunking for automated systems.</p>
                  </div>

                  <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1">
                    <div className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Clear Entity Anchors
                    </div>
                    <p className="text-xs text-slate-400">Strengthens brand node confidence scores in vector space and Knowledge Graphs.</p>
                  </div>

                  <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1">
                    <div className="text-sm font-bold text-purple-300 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Consistent Terminology
                    </div>
                    <p className="text-xs text-slate-400">Enhances semantic density, BM25 term scores, and hybrid retrieval ranking.</p>
                  </div>

                  <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1">
                    <div className="text-sm font-bold text-emerald-300 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Internal Link Graphs
                    </div>
                    <p className="text-xs text-slate-400">Maps relationship graphs back to the main <Link href="/knowledge-hub" className="text-emerald-400 hover:underline font-semibold">AEObility Knowledge Hub</Link>.</p>
                  </div>
                </div>
              </section>

              {/* Section 7: SEO vs AEO Comparison */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                  SEO vs AEO — Page Ranking vs Passage Extraction
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                    <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono rounded-full font-bold">
                      SEO Focus: Page Ranking
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Optimises full URLs for human clicks, matching target keywords and improving SERP click-through rates.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-teal-500/30 space-y-3">
                    <div className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-mono rounded-full font-bold">
                      AEO Focus: Passage Extraction
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Refactors atomic passages for AI citations, clarifying entity relationships and making content liftable for RAG answers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: When SEO Is Enough */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-purple-400" />
                  When SEO Is Enough — And When You Need AEO
                </h2>
                <p className="leading-relaxed">
                  SEO is enough when your primary goal is traditional SERP visibility and human search clicks. However, when your goal is to appear inside AI-generated answers and zero-click environments, AEO becomes essential.
                </p>
                <div className="p-6 bg-slate-950/80 border border-purple-500/30 rounded-2xl text-center space-y-2">
                  <div className="text-lg font-bold text-white">The Operational Formula</div>
                  <p className="text-slate-300 text-base">
                    <em>&ldquo;SEO builds the foundation. AEO earns the citation — where answer engines choose to attribute sources.&rdquo;</em>
                  </p>
                </div>
              </section>

              {/* Section 9: Summary */}
              <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FileText className="w-6 h-6 text-teal-400" />
                  Summary — SEO Is Still Foundational
                </h2>
                <p className="leading-relaxed">
                  SEO optimisation remains essential because it creates the structured, crawlable, indexable content that both search engines and AI systems rely on. In an AI-driven search landscape, SEO alone is no longer enough — but it remains the critical layer that makes AEO possible.
                </p>
              </section>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Strategic Blueprint CTA */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-teal-500/30 rounded-2xl p-6 space-y-4 sticky top-28 shadow-xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono">
                  <Sparkles className="w-3 h-3" />
                  AI READINESS AUDIT
                </div>

                <h3 className="text-xl font-bold text-white">
                  The AEObility Blueprint
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Get a deep technical audit of your SEO foundation and a 90-day strategic roadmap to capture AI search citations.
                </p>

                <div className="pt-2">
                  <Link 
                    href="/solutions/aeo-blueprint"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-teal-500/20"
                  >
                    <span>View $995 Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="border-t border-slate-800 pt-4 mt-4 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>100% credited back into implementation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Lexical & Vector readiness score</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
