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
  HelpCircle, 
  Sparkles, 
  Layers, 
  Cpu, 
  Search, 
  ShieldCheck, 
  FileText, 
  Database,
  Compass
} from 'lucide-react';

export const metadata = {
  title: "What Is SEO Optimisation? Guide for Modern Search | AEObility",
  description: "Learn what SEO optimisation means today, how it improves visibility, and where it fits alongside AEO and AI search engines.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation",
  },
  openGraph: {
    title: "What Is SEO Optimisation? Guide for Modern Search | AEObility",
    description: "Learn what SEO optimisation means today, how it improves visibility, and where it fits alongside AEO and AI search engines.",
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
        "description": "Learn what SEO optimisation means today, how it improves visibility, and where it fits alongside AEO and AI search engines.",
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
          "Lexical Retrieval — How Traditional SEO Works",
          "The Core Pillars of SEO Optimisation",
          "How SEO Feeds AI Knowledge Graphs",
          "SEO vs AEO — Page Ranking vs Passage Extraction",
          "When SEO Is Enough — And When You Need AEO",
          "Summary — SEO Is Still Foundational"
        ],
        "keywords": [
          "what is seo optimisation",
          "seo optimisation",
          "lexical retrieval",
          "seo vs aeo",
          "traditional seo pillars",
          "technical seo",
          "on page seo",
          "authority and architecture"
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
              "text": "SEO optimisation is the practice of improving how your content is crawled, indexed, and matched to human search queries. It forms the structural foundation that allows both traditional search engines and generative AI systems to understand what your content is about."
            }
          },
          {
            "@type": "Question",
            "name": "How does SEO differ from AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO optimises full web pages to rank in search engine result pages for human clicks, whereas Answer Engine Optimisation (AEO) refactors atomic content passages for AI LLM citations and generative answer synthesis."
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

              {/* Atomic Answer Block (90-120 Tokens) */}
              <div className="p-6 bg-slate-950/80 border border-teal-500/30 rounded-2xl relative shadow-inner">
                <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Atomic Definition Block (AEO / RAG Ready)
                </div>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                  <strong>SEO optimisation</strong> is the practice of improving how your content is <strong>crawled, indexed, and matched</strong> to human search queries. It is the structural foundation that allows both search engines and AI systems to understand what your content is about.
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
                  Traditional SEO focuses on making your content <strong>discoverable and understandable</strong> at the page level. This structural foundation forms the input layer that AI engines rely on before they can extract entities, passages, and meaning.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Clean HTML structure",
                    "Crawlable site architecture",
                    "Clear keyword signals",
                    "Fast, accessible pages"
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
                  Lexical Retrieval — How Traditional SEO Works
                </h2>
                <p className="leading-relaxed">
                  Search engines historically operated on <strong>lexical retrieval</strong>: matching the words in a query to the exact words on a page. This is often thought of as the &ldquo;giant library Ctrl+F&rdquo; model.
                </p>
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-6 space-y-3">
                  <div className="text-sm font-semibold text-slate-200 uppercase tracking-wider">SEO Optimisation Improves:</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2">• Keyword alignment</li>
                    <li className="flex items-center gap-2">• Metadata clarity</li>
                    <li className="flex items-center gap-2">• Heading structure</li>
                    <li className="flex items-center gap-2">• Internal linking</li>
                    <li className="flex items-center gap-2">• Page performance</li>
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

              {/* Section 4 */}
              <section className="bg-gradient-to-r from-slate-900/80 to-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Network className="w-6 h-6 text-teal-400" />
                  How SEO Feeds AI Knowledge Graphs
                </h2>
                <p className="leading-relaxed">
                  Modern AI search engines don&apos;t just read web pages — they build <strong>knowledge graphs</strong>. SEO provides the raw material that generative models ingest:
                </p>
                <div className="space-y-2.5 text-sm">
                  <div className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg"><strong className="text-teal-300">Clean structure:</strong> Enables unambiguous machine parsing.</div>
                  <div className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg"><strong className="text-cyan-300">Clear entities:</strong> Strengthens brand node confidence in vector space.</div>
                  <div className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg"><strong className="text-purple-300">Consistent terminology:</strong> Enhances semantic density and retrieval scores.</div>
                  <div className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg"><strong className="text-emerald-300">Internal linking:</strong> Maps relationship graphs between primary topics.</div>
                </div>
              </section>

              {/* Section 5: SEO vs AEO */}
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

              {/* Section 6 */}
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
                    <em>&ldquo;SEO builds the foundation. AEO earns the citation.&rdquo;</em>
                  </p>
                </div>
              </section>

              {/* Section 7: Summary */}
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
