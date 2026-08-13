import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  HelpCircle, 
  Search, 
  Cpu, 
  Sparkles, 
  Scale, 
  AlertCircle,
  FileText,
  Wrench,
  GitFork,
  ArrowUpRight,
  Target
} from 'lucide-react';

export const metadata = {
  title: "AEO vs SEO: A Clear, Accurate, Modern Comparison | AEObility",
  description: "Learn how Answer Engine Optimisation (AEO) compares with traditional SEO. Discover how AI answer systems select sources, map entities, and retrieve atomic answer blocks.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/comparison",
  },
};

export default function AEOVsSEOPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/services/aeo/comparison",
        "url": "https://aeobility.com.au/services/aeo/comparison",
        "name": "AEO vs SEO: A Clear, Accurate, Modern Comparison",
        "description": "A technical comparison of Answer Engine Optimisation (AEO) and Search Engine Optimisation (SEO), detailing shared fundamentals, passage extractability, and dual-engine frameworks.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/services/aeo"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/services/aeo/comparison#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/services/aeo/comparison#breadcrumb",
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
            "name": "AEO vs SEO Comparison",
            "item": "https://aeobility.com.au/services/aeo/comparison"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/aeo/comparison#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is AEO just SEO with a new name?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. AEO builds on top of traditional SEO. While SEO focuses on page-level rankings in search engine result pages, AEO focuses on passage-level extractability, entity clarity, and source attribution inside generative AI answers."
            }
          },
          {
            "@type": "Question",
            "name": "How do AI answer engines choose sources?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generative engines use hybrid retrieval systems that combine keyword matching, semantic vector search, passage reranking, entity verification, and authority scoring. No single formula guarantees selection."
            }
          },
          {
            "@type": "Question",
            "name": "Why is my business missing from ChatGPT or Perplexity answers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common causes include blocking user-agents (like OAI-SearchBot), hosting content inside client-side JavaScript accordions, ambiguous brand references, inconsistent directory data, or a lack of direct, answer-first content structure."
            }
          }
        ]
      }
    ]
  };

  const sharedOverlaps = [
    "Crawlable, indexable pages with clean server-side rendering",
    "Helpful, accurate content built around primary research or direct experience",
    "Clear site architecture and shallow URL depth",
    "Consistent entity information across public registers and data sources",
    "Authoritative primary sources and verifiable claims",
    "Schema markup and structured data",
    "Strong user intent alignment"
  ];

  const comparisonTable = [
    {
      feature: "Primary Goal",
      seo: "Rank pages in SERPs to drive site visits",
      aeo: "Supply clear, attributable passages for AI summaries"
    },
    {
      feature: "Unit of Retrieval",
      seo: "The entire web page or document",
      aeo: "Atomic answer blocks (45–75 word passages)"
    },
    {
      feature: "Retrieval Mechanics",
      seo: "Lexical matching (BM25) + link authority",
      aeo: "Reranking, semantic proximity, and entity graphs"
    },
    {
      feature: "Key Output",
      seo: "Featured snippets, top 10 blue links",
      aeo: "Inline citations, voice outputs, structured answers"
    },
    {
      feature: "Optimisation Focus",
      seo: "Domain authority, keywords, link building",
      aeo: "Passage extractability, entity clarity, evidence"
    }
  ];

  const selectionLayers = [
    {
      num: "1",
      title: "Query Expansion & Fan-Out",
      desc: "The system translates user prompts into multiple concurrent sub-queries covering specific angles like pricing, location, or features."
    },
    {
      num: "2",
      title: "Hybrid Retrieval",
      desc: "The system combines lexical keyword matching with semantic vector proximity to fetch candidate documents."
    },
    {
      num: "3",
      title: "Passage Reranking",
      desc: "Candidate web pages are broken down into chunks and scored for relevance, directness, and factual density."
    },
    {
      num: "4",
      title: "Entity Corroboration",
      desc: "The system verifies facts against external knowledge graphs, structured data, and trusted data nodes."
    },
    {
      num: "5",
      title: "Synthesis & Citation",
      desc: "The final response is generated using grounded web sources with inline citation links."
    }
  ];

  const microFaqs = [
    {
      q: "Is AEO just SEO with a new name?",
      a: "No. AEO builds on top of traditional SEO. While SEO focuses on page-level rankings in search engine result pages, AEO focuses on passage-level extractability, entity clarity, and source attribution inside generative AI answers."
    },
    {
      q: "How do AI answer engines choose sources?",
      a: "Generative engines use hybrid retrieval systems that combine keyword matching, semantic vector search, passage reranking, entity verification, and authority scoring. No single formula guarantees selection."
    },
    {
      q: "Why is my business missing from ChatGPT or Perplexity answers?",
      a: "Common causes include blocking user-agents (like OAI-SearchBot), hosting content inside client-side JavaScript accordions, ambiguous brand references, inconsistent directory data, or a lack of direct, answer-first content structure."
    }
  ];

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
      <SubNavPills items={HUB_SUBNAV_MAPS.aeoServices} />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        <article className="flex flex-col gap-10">

          {/* Header Block */}
          <header className="space-y-6 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <Scale className="w-3.5 h-3.5" />
              <span>AEO vs SEO &bull; Strategic Technical Comparison</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              AEO vs SEO: A Clear, Accurate, <span className="text-gradient-aeo">Modern Comparison</span>
            </h1>

            <p className="text-lg md:text-xl font-light text-white/80 font-serif leading-relaxed">
              Answer Engine Optimisation (AEO) is not a replacement for Search Engine Optimisation (SEO) - and it is not simply SEO with a new name.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50 border-t border-b border-white/10 py-4">
              <span>Published by <strong className="text-white">AEObility</strong></span>
              <span>&bull;</span>
              <span>Location: <strong className="text-white">Perth, Western Australia</strong></span>
              <span>&bull;</span>
              <span>Updated August 2026</span>
              <span>&bull;</span>
              <span>5 min read</span>
            </div>
          </header>

          {/* Short Answer Summary Box */}
          <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900/60 to-transparent border-l-4 border-aeo-cyan rounded-r-2xl space-y-3 shadow-xl">
            <h2 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
              The Short Answer
            </h2>
            <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
              AEO focuses on making information clear, extractable, and attributable for AI-powered answer systems. SEO focuses on improving visibility and driving qualified traffic from traditional search engine result pages (SERPs). Both matter, both overlap, and both support how people discover information today.
            </p>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed font-serif pt-1">
              Search behaviour is expanding, not collapsing. Users still click link lists, but they increasingly ask conversational systems to summarise, compare, and recommend information. Businesses need content that performs well in both environments.
            </p>
          </div>

          {/* Graphic Matrix: Search Behaviour Expansion */}
          <figure role="img" aria-label="Search Behaviour Expansion Diagram showing Traditional SEO vs Generative AEO Environment" className="p-6 bg-neutral-950 rounded-2xl border border-white/10 shadow-2xl space-y-4">
            <h3 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider text-center">
              Search Behaviour Expansion Framework
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
                  <Search className="w-4 h-4" />
                  <span>Traditional SEO Environment</span>
                </div>
                <ul className="space-y-2 text-xs text-white/80 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Query matching &amp; keywords</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Blue link search result lists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Page-level domain authority</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Direct website user clicks</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-white/[0.02] border border-aeo-cyan/30 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>Generative AEO Environment</span>
                </div>
                <ul className="space-y-2 text-xs text-white/80 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan" />
                    <span>Intent synthesis &amp; query fan-out</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan" />
                    <span>45–75 word atomic answer blocks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan" />
                    <span>Multi-source citation links</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan" />
                    <span>Entity graph corroboration</span>
                  </li>
                </ul>
              </div>
            </div>

            <figcaption className="text-center text-xs text-white/50 font-mono pt-2">
              Expansion model showing how search behaviour evolves from traditional SERP clicks to generative answer synthesis.
            </figcaption>
          </figure>

          {/* Section 1: How SEO and AEO Overlap */}
          <section id="overlaps" className="space-y-6 scroll-mt-24 pt-4 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              1. How SEO and AEO Overlap
            </h2>
            <p className="text-white/80 text-base leading-relaxed font-serif">
              SEO and AEO share the same foundational requirements:
            </p>

            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/90">
                {sharedOverlaps.map((item, idx) => (
                  <li key={idx} className="p-3 bg-white/5 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed font-serif">
              These fundamentals remain essential whether a user is searching via traditional Google queries or triggering a search-augmented LLM.
            </p>
          </section>

          {/* Section 2: How SEO and AEO Differ */}
          <section id="differences" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              2. How SEO and AEO Differ
            </h2>

            {/* Comparison Table */}
            <div className="overflow-x-auto border border-white/10 rounded-2xl bg-neutral-950 shadow-2xl">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 font-mono text-xs uppercase text-aeo-cyan">
                    <th className="p-4 font-bold">Feature</th>
                    <th className="p-4 font-bold">Traditional SEO</th>
                    <th className="p-4 font-bold">Answer Engine Optimisation (AEO)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-sans">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-white whitespace-nowrap">{row.feature}</td>
                      <td className="p-4 text-white/70">{row.seo}</td>
                      <td className="p-4 text-white/90 font-medium text-aeo-cyan/90">{row.aeo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Sub-Section: Traditional SEO */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-purple-400" />
                <span>Traditional SEO</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif">
                Traditional SEO aims to improve visibility in search engine result pages to encourage qualified visits. It uses a mix of lexical retrieval (including BM25 algorithms), semantic understanding, link graphs, freshness, structured data, and user experience signals.
              </p>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-serif">
                Modern SEO is far broader and more sophisticated than mere keyword density or page-level domain authority.
              </p>
            </div>

            {/* Sub-Section: Answer Engine Optimisation (AEO) */}
            <div className="p-6 bg-white/[0.02] border border-aeo-cyan/20 rounded-2xl space-y-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-aeo-cyan" />
                <span>Answer Engine Optimisation (AEO)</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif">
                AEO focuses on how information is selected, synthesised, and cited inside AI-generated answers, including summaries, comparisons, recommendations, and conversational responses.
              </p>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif">
                Rather than trying to trick hidden model mechanics or guessing universal vector weights, AEO emphasises <strong className="text-white">passage-level extractability</strong>. This means structuring core facts into short, self-contained sections—specifically <strong>45–75 word Atomic Answer Blocks</strong>—that state the answer early, define the entity clearly, and supply verifiable evidence.
              </p>
            </div>
          </section>

          {/* Section 3: How AI Answer Systems Select Sources */}
          <section id="source-selection" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              3. How AI Answer Systems Select Sources
            </h2>
            <p className="text-white/80 text-base leading-relaxed font-serif">
              It is a mistake to assume AI engines rely exclusively on dense vector retrieval or a single cosine similarity formula. In practice, search-augmented systems (like Perplexity, ChatGPT Search, and Google AI Overviews) combine multiple layers:
            </p>

            <div className="space-y-4">
              {selectionLayers.map((layer, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-4 hover:border-aeo-cyan/30 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan font-bold text-xs shrink-0">
                    {layer.num}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white leading-snug">{layer.title}</h3>
                    <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl space-y-1">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase">No Magic Similarity Formula</span>
              <p className="text-xs text-white/90 leading-relaxed font-serif">
                No publisher can optimise for one known similarity formula or guarantee inclusion in an AI answer. Focus on improving retrieval conditions rather than chasing fixed model mechanics.
              </p>
            </div>
          </section>

          {/* Section 4: What Businesses Should Do */}
          <section id="action-plan" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              4. What Businesses Should Do
            </h2>

            {/* Framework Graphic Banner */}
            <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-4 shadow-xl">
              <h3 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider text-center">
                AEObility Dual-Engine Framework
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <span className="text-purple-400 font-bold font-mono">STEP 1: MAINTAIN SEO BASELINE</span>
                  <ul className="space-y-1 text-white/70">
                    <li>&bull; Fast server-side rendering</li>
                    <li>&bull; Clear site architecture</li>
                    <li>&bull; Consistent schema markup</li>
                  </ul>
                </div>

                <div className="p-4 bg-white/[0.02] border border-aeo-cyan/30 rounded-xl space-y-2">
                  <span className="text-aeo-cyan font-bold font-mono">STEP 2: ADD AEO PRACTICES</span>
                  <ul className="space-y-1 text-white/90 font-medium">
                    <li>&bull; 45–75 word answer blocks</li>
                    <li>&bull; Entity relationship links</li>
                    <li>&bull; Verifiable evidence &amp; data</li>
                  </ul>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <span className="text-white/60 font-bold font-mono">STEP 3: AVOID MYTHS</span>
                  <ul className="space-y-1 text-white/70">
                    <li>&bull; No fixed tokens</li>
                    <li>&bull; No guaranteed citations</li>
                    <li>&bull; No magic schemas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-3">
                <h3 className="text-base font-bold text-white">Maintain Strong SEO Fundamentals</h3>
                <ul className="space-y-2 text-xs text-white/75 font-serif">
                  <li>Ensure fast, crawlable pages with clean HTML structure.</li>
                  <li>Build clear internal linking structures between topic clusters.</li>
                  <li>Keep business Name, Address, and Phone (NAP) data uniform across web directories.</li>
                </ul>
              </div>

              <div className="p-5 bg-white/[0.02] border border-aeo-cyan/30 rounded-xl space-y-3">
                <h3 className="text-base font-bold text-white">Add AEO-Aligned Practices</h3>
                <ul className="space-y-2 text-xs text-white/90 font-serif">
                  <li>Answer specific questions directly within the first 45–75 words of a section.</li>
                  <li>Use self-contained passages that make sense when extracted out of context.</li>
                  <li>Reduce ambiguity by naming specific entities rather than relying on pronouns.</li>
                  <li>Provide clear, attributable evidence for every commercial or technical claim.</li>
                </ul>
                <div className="pt-2 text-xs border-t border-white/5">
                  <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="text-aeo-cyan hover:underline font-semibold flex items-center gap-1">
                    <span>Read Positional Bias Guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-3">
                <h3 className="text-base font-bold text-white">Avoid Unverified Assumptions</h3>
                <ul className="space-y-2 text-xs text-white/75 font-serif">
                  <li>Reject claims about fixed, universal token limits (e.g. &ldquo;must be 90 tokens&rdquo;).</li>
                  <li>Ignore claims that schema alone acts as a magic visibility switch.</li>
                  <li>Do not rely on agencies promising guaranteed placements in AI answers.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Why AEO Matters for Business Growth */}
          <section id="business-growth" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              5. Why AEO Matters for Business Growth
            </h2>

            <p className="text-white/80 text-base leading-relaxed font-serif">
              Search behaviour is expanding. Users are shifting from browsing long lists of links to expecting immediate, synthesised answers for complex questions. If your business content is buried in complex jargon, client-side JavaScript tabs, or rambling introductory filler, retrieval bots will skip your pages in favour of clear, direct competitors.
            </p>

            <div className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-aeo-cyan/30 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-white">AEO helps ensure your business information is:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-white/90">
                <li className="p-3 bg-white/5 rounded-xl space-y-1">
                  <strong className="text-aeo-cyan font-mono uppercase text-xs">Discoverable:</strong>
                  <p className="text-white/70">Easily fetched by search-augmented crawlers.</p>
                </li>
                <li className="p-3 bg-white/5 rounded-xl space-y-1">
                  <strong className="text-aeo-cyan font-mono uppercase text-xs">Understandable:</strong>
                  <p className="text-white/70">Structured for passage-level reranking.</p>
                </li>
                <li className="p-3 bg-white/5 rounded-xl space-y-1">
                  <strong className="text-aeo-cyan font-mono uppercase text-xs">Verifiable:</strong>
                  <p className="text-white/70">Corroborated by entity authority and clear citations.</p>
                </li>
                <li className="p-3 bg-white/5 rounded-xl space-y-1">
                  <strong className="text-aeo-cyan font-mono uppercase text-xs">Actionable:</strong>
                  <p className="text-white/70">Linked directly to your commercial offerings, such as <Link href="/services/ai-search-marketing" className="text-aeo-cyan hover:underline font-semibold">AI search marketing services</Link>.</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6: Frequently Asked Questions */}
          <section id="faq" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Technical &amp; Strategic FAQ</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              6. Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {microFaqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2 hover:border-aeo-cyan/30 transition-all">
                  <h3 className="text-sm font-bold text-white leading-snug">{faq.q}</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Final Positioning Statement & Lead Gen CTA */}
          <section id="final-positioning" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <div className="p-6 bg-gradient-to-r from-aeo-purple/10 via-neutral-900 to-transparent border-l-4 border-aeo-purple rounded-r-2xl space-y-3">
              <div className="text-xs uppercase tracking-widest font-bold text-aeo-purple flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>7. Final Positioning Statement</span>
              </div>
              <p className="text-sm md:text-base text-white/90 font-light leading-relaxed font-serif italic">
                AEO is a practical extension of search visibility, not a replacement for SEO, not a fixed technical specification, and not a guaranteed citation mechanism. It is a modern approach to structuring information so both traditional search engines and AI systems can interpret, verify, and cite your brand clearly: ensuring you <strong className="text-aeo-cyan not-italic">Get Found. Get Chosen.</strong>
              </p>
            </div>

            {/* Bottom Audit CTA */}
            <div className="p-8 bg-gradient-to-br from-neutral-900 to-black border border-aeo-cyan/30 rounded-2xl text-center space-y-4 shadow-xl">
              <h3 className="text-xl md:text-3xl font-extrabold text-white">
                Is your business built for AI search? <span className="text-gradient-aeo">Get Found. Get Chosen.</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light">
                To measure how generative systems currently perceive and cite your business across ChatGPT, Perplexity, and Google AI Overviews, request your free AI Visibility Telemetry Audit.
              </p>
              <div className="pt-2">
                <Link
                  href="/audit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-aeo-cyan text-black font-extrabold text-sm hover:bg-white transition-all shadow-lg hover:shadow-aeo-cyan/20"
                >
                  <span>Request AI Visibility Telemetry Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Bottom-Up Link to Root Hub */}
            <div className="pt-4 flex">
              <Link href="/services/aeo" className="text-xs font-medium text-white/40 hover:text-white transition-colors">
                &larr; Back to <strong className="text-white hover:underline">AEO Services Hub</strong>
              </Link>
            </div>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
