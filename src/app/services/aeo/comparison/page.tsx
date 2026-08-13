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
  GitFork
} from 'lucide-react';

export const metadata = {
  title: "AEO vs SEO: Key Differences, Overlaps & AI Search | AEObility",
  description: "Learn how Answer Engine Optimisation (AEO) compares with traditional SEO. Explore shared fundamentals, surface differences, and how AI systems retrieve source facts.",
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
        "name": "AEO vs SEO: Key Differences, Overlaps & AI Search",
        "description": "A technical comparison of Answer Engine Optimisation (AEO) and Search Engine Optimisation (SEO), detailing shared fundamentals and AI retrieval realities.",
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
              "text": "AEO, or Answer Engine Optimisation, focuses on making information clear, extractable, and useful for AI-powered answer experiences. It overlaps with technical SEO, structured data, entity clarity, and content quality, but it emphasises how information may be selected and presented in direct answers, summaries, comparisons, and recommendations. AEO complements SEO rather than replaces it. Search engines and AI systems still rely on crawlable pages, helpful content, clear architecture, credible sources, and accurate structured data."
            }
          },
          {
            "@type": "Question",
            "name": "How does AEO differ from traditional SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional SEO improves visibility in search results and encourages qualified visits. AEO places additional emphasis on answering specific questions clearly, structuring information into self-contained sections, clarifying entities and relationships, and making important claims easy for retrieval systems to interpret. There is no universal passage length, markup type, or ranking formula that guarantees inclusion in an AI-generated answer."
            }
          },
          {
            "@type": "Question",
            "name": "How do AI answer systems choose sources?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI answer systems may use keyword matching, semantic retrieval, page quality, source authority, freshness, entity relationships, structured information, and platform-specific ranking systems. Their selection processes differ between products and can change over time. Businesses should avoid optimising for one assumed algorithm; instead, make important information easy to find, understand, verify, and associate with the correct organisation, product, service, or person."
            }
          },
          {
            "@type": "Question",
            "name": "Has search behaviour fundamentally changed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Search behaviour is expanding beyond traditional result pages. Users increasingly ask conversational systems to summarise, compare, and recommend information, so businesses need content that works for both conventional search and AI-generated answers."
            }
          },
          {
            "@type": "Question",
            "name": "Can AEO guarantee citations in AI answers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No content structure can guarantee that ChatGPT, Gemini, Perplexity, Google, or any other system will quote or cite a page. AEO improves the likelihood that useful passages are retrieved, understood, and referenced in AI-generated answers."
            }
          }
        ]
      }
    ]
  };

  const sharedOverlaps = [
    "Crawlable, accessible web pages and clean site architecture",
    "High-quality, helpful content written for human intent",
    "Clear, unambiguous entity definitions and brand identity",
    "Authoritative sourcing, reputation, and domain trust",
    "Accurate, compliant Schema.org structured data",
    "User intent alignment across informational and transactional queries"
  ];

  const businessActions = [
    {
      title: "1. Maintain Strong Technical SEO",
      desc: "Ensure fast page loading, mobile responsiveness, clean indexation, and robust crawl budget management."
    },
    {
      title: "2. Publish Question-Led Sections",
      desc: "Structure content into self-contained, atomic sections that answer explicit user questions concisely."
    },
    {
      title: "3. Clarify Entities and Relationships",
      desc: "Use precise Schema types (@id URIs, Organization, LocalBusiness, Service) to link your brand assets unambiguously."
    },
    {
      title: "4. Provide Verifiable Evidence",
      desc: "Support key claims with clear data, visible prices, location indicators, and authoritative references."
    },
    {
      title: "5. Monitor Multi-Surface Visibility",
      desc: "Track traditional organic rankings alongside AI-generated summaries, brand mentions, and local map pack inclusion."
    }
  ];

  const microFaqs = [
    {
      q: "Is AEO just SEO with a new name?",
      a: "AEO, or Answer Engine Optimisation, focuses on making information clear, extractable, and useful for AI-powered answer experiences. It overlaps with technical SEO, structured data, entity clarity, and content quality, but it emphasises how information may be selected and presented in direct answers, summaries, comparisons, and recommendations. AEO complements SEO rather than replaces it. Search engines and AI systems still rely on crawlable pages, helpful content, clear architecture, credible sources, and accurate structured data."
    },
    {
      q: "How does AEO differ from traditional SEO?",
      a: "Traditional SEO improves visibility in search results and encourages qualified visits. AEO places additional emphasis on answering specific questions clearly, structuring information into self-contained sections, clarifying entities and relationships, and making important claims easy for retrieval systems to interpret. There is no universal passage length, markup type, or ranking formula that guarantees inclusion in an AI-generated answer."
    },
    {
      q: "How do AI answer systems choose sources?",
      a: "AI answer systems may use keyword matching, semantic retrieval, page quality, source authority, freshness, entity relationships, structured information, and platform-specific ranking systems. Their selection processes differ between products and can change over time. Businesses should avoid optimising for one assumed algorithm; instead, make important information easy to find, understand, verify, and associate with the correct organisation, product, service, or person."
    },
    {
      q: "Has search behaviour fundamentally changed?",
      a: "Search behaviour is expanding beyond traditional result pages. Users increasingly ask conversational systems to summarise, compare, and recommend information, so businesses need content that works for both conventional search and AI-generated answers."
    },
    {
      q: "Can AEO guarantee citations in AI answers?",
      a: "No content structure can guarantee that ChatGPT, Gemini, Perplexity, Google, or any other system will quote or cite a page. AEO improves the likelihood that useful passages are retrieved, understood, and referenced in AI-generated answers."
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
              Is AEO Just SEO with a <span className="text-gradient-aeo">New Name?</span>
            </h1>

            <p className="text-lg md:text-xl font-light text-white/80 font-serif leading-relaxed">
              AEO is not a replacement for SEO. It is a complementary discipline focused on making information clearer, more extractable, and more useful to AI-powered answer systems. Search behaviour is expanding: businesses now need content that performs across traditional search results and AI-generated summaries, comparisons, and recommendations.
            </p>
          </header>

          {/* Core Takeaway Box */}
          <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900/60 to-transparent border-l-4 border-aeo-cyan rounded-r-2xl space-y-3 shadow-xl">
            <h2 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
              Concise Takeaway
            </h2>
            <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
              Search behaviour is expanding rather than replacing itself. Traditional SEO secures visibility and clicks on search engine result pages, while AEO ensures information is structured cleanly for direct answer surfaces, summaries, and conversational recommendations.
            </p>
          </div>

          {/* Comparison Matrix Section */}
          <section id="comparison-matrix" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Comparing SEO and AEO Focus Areas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traditional SEO Box */}
              <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Search className="w-5 h-5 text-purple-400" />
                    <span>Traditional SEO</span>
                  </h3>
                  <span className="text-[10px] font-mono uppercase bg-white/5 px-2 py-0.5 rounded border border-white/10 text-white/60">Search Results &amp; Clicks</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Optimises pages for visibility in traditional search engine result pages (SERPs) to attract qualified human visits.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <strong className="text-xs text-purple-300 font-mono uppercase">Key Optimisation Signals:</strong>
                  <ul className="space-y-1.5 text-xs text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                      <span>Lexical retrieval (including BM25 in some systems)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                      <span>Semantic understanding &amp; intent matching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                      <span>Link equity &amp; domain authority signals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                      <span>Content freshness &amp; user experience indicators</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* AEO Box */}
              <div className="p-6 bg-neutral-950 border border-aeo-cyan/30 rounded-2xl space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-aeo-cyan" />
                    <span>Answer Engine Optimisation (AEO)</span>
                  </h3>
                  <span className="text-[10px] font-mono uppercase bg-aeo-cyan/10 px-2 py-0.5 rounded border border-aeo-cyan/30 text-aeo-cyan font-bold">Answer Surfaces</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Optimises information for answer surfaces where users receive direct responses, summaries, and recommendations.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <strong className="text-xs text-aeo-cyan font-mono uppercase">Key Optimisation Signals:</strong>
                  <ul className="space-y-1.5 text-xs text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-1.5" />
                      <span>Clear, self-contained sections answering specific questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-1.5" />
                      <span>Strong machine-readable entity definitions and relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-1.5" />
                      <span>Structured, verifiable claims matching visible page content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-1.5" />
                      <span>Layouts designed to reduce ambiguity for retrieval systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Shared Fundamentals */}
          <section id="overlaps" className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Where SEO and AEO Overlap
            </h2>
            <p className="text-white/80 text-base leading-relaxed font-serif">
              AEO extends SEO rather than replacing it. Both traditional search engines and AI answer systems rely on shared technical and structural foundations:
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
          </section>

          {/* Section: How AI Systems Retrieve Sources */}
          <section id="retrieval-realities" className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              How AI Answer Systems Choose Sources
            </h2>
            
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-3 font-sans text-sm">
              <p className="text-white/90 font-medium leading-relaxed">
                AI search systems may combine semantic retrieval, lexical keyword matching, reranking, entity relationships, source quality, and model-specific selection processes. Publishers cannot reliably optimise for one known similarity formula or hidden reasoning process.
              </p>
            </div>

            <div className="space-y-4 text-white/85 text-base sm:text-lg font-light leading-relaxed font-serif">
              <p>
                Different answer engine platforms (such as Google AI Overviews, ChatGPT, Gemini, and Perplexity) use distinct retrieval pipelines that evolve over time. Instead of attempting to reverse-engineer proprietary algorithms, businesses should ensure key information is easy to find, understand, verify, and associate with the correct organisation.
              </p>
            </div>

            <div className="p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl space-y-1">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase">No Single Formula Exists</span>
              <p className="text-xs text-white/90 leading-relaxed font-serif">
                There is no universal passage length, token limit, or markup pattern that guarantees inclusion in an AI answer. Clarity, entity consistency, and factual accuracy matter far more than any fixed numbers.
              </p>
            </div>
          </section>

          {/* Section: Recommended Business Action Plan */}
          <section id="action-plan" className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              What Businesses Should Do
            </h2>

            <div className="space-y-4">
              {businessActions.map((action, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2 hover:border-aeo-cyan/30 transition-all">
                  <h3 className="text-base font-bold text-white leading-snug">{action.title}</h3>
                  <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">{action.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: AEObility's View */}
          <div className="p-6 bg-gradient-to-r from-aeo-purple/10 via-neutral-900 to-transparent border-l-4 border-aeo-purple rounded-r-2xl space-y-3">
            <div className="text-xs uppercase tracking-widest font-bold text-aeo-purple flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>AEObility’s View</span>
            </div>
            <p className="text-sm md:text-base text-white/90 font-light leading-relaxed font-serif italic">
              AEO improves the likelihood that useful passages are retrieved, understood, and referenced in AI-generated answers. By making information transparent and machine-readable, you ensure your business doesn&apos;t just get indexed: you <strong className="text-aeo-cyan not-italic">Get Found. Get Chosen.</strong>
            </p>
          </div>

          {/* FAQ Section */}
          <section id="faq" className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Technical &amp; Strategic FAQ</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              AEO vs SEO Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {microFaqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2 hover:border-aeo-cyan/30 transition-all">
                  <h3 className="text-sm font-bold text-white leading-snug">{faq.q}</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Lateral Semantic Connections */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-aeo-cyan" />
              <h2 className="text-2xl font-bold text-white">Explore Related AEO Guides</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/services/aeo/definition" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>What is AEO?</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Discover how machine learning models read, index, and cite business facts.
                </p>
              </Link>

              <Link href="/services/aeo/constraints" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>AEO Constraints &amp; Errors</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Learn what prevents businesses from appearing in AI-generated answers.
                </p>
              </Link>

              <Link href="/services/aeo/procedures" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>AEO Implementation Procedures</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Step-by-step technical procedures for structuring entity data.
                </p>
              </Link>

              <Link href="/services/aeo/costs-timing" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>AEO Costs &amp; Timing</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Understand project timelines, resource requirements, and return metrics.
                </p>
              </Link>
            </div>
          </section>

          {/* Bottom Audit CTA */}
          <div className="p-8 bg-gradient-to-br from-neutral-900 to-black border border-aeo-cyan/30 rounded-2xl text-center space-y-4 shadow-xl">
            <h3 className="text-xl md:text-3xl font-extrabold text-white">
              Is your business built for AI search? <span className="text-gradient-aeo">Get Found. Get Chosen.</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light">
              Claim your free AI Search Visibility Audit with AEObility today and see how answer engines read your brand across Search, Maps, and AI corridors.
            </p>
            <div className="pt-2">
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-aeo-cyan text-black font-extrabold text-sm hover:bg-white transition-all shadow-lg hover:shadow-aeo-cyan/20"
              >
                <span>Claim Your Free AI Search Visibility Audit</span>
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

        </article>
      </main>

      <Footer />
    </div>
  );
}
