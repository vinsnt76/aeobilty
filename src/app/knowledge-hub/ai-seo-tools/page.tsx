'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  Wrench, 
  Search, 
  ArrowRight, 
  BarChart3,
  HelpCircle,
  Sparkles,
  Globe,
  CheckCircle2,
  X,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function AiSeoToolsPage() {
  const router = useRouter();
  const [heroUrl, setHeroUrl] = useState('');
  const [showStickyBanner, setShowStickyBanner] = useState(false);
  const [dismissSticky, setDismissSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrollPercentage = window.scrollY / scrollHeight;
      if (scrollPercentage > 0.4 && !dismissSticky) {
        setShowStickyBanner(true);
      } else if (scrollPercentage <= 0.4) {
        setShowStickyBanner(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissSticky]);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroUrl.trim()) return;

    let formatted = heroUrl.trim();
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = `https://${formatted}`;
    }
    router.push(`/diagnostic?url=${encodeURIComponent(formatted)}&auto=true`);
  };

  const tools = [
    {
      name: "AEObility Telemetry Engine",
      category: "AEO Vector & RAG Audit Engine",
      pricing: "Free Scan / $995 Blueprint",
      badge: "Native Standard",
      description: "Automated vector proximity assessment, prompt fan-out simulation, and passage-level extraction audit engine built specifically for Australian local entities.",
      bestFor: "Measuring real brand citations across ChatGPT Search, Google AI Overviews, and Perplexity.",
      ctaText: "Run Telemetry Scan",
      ctaLink: "/diagnostic"
    },
    {
      name: "Schema.org Generator & Validator",
      category: "JSON-LD Graph Architecture",
      pricing: "Open Access / Freemium",
      badge: "Industry Standard",
      description: "Structured data generation tool producing clean JSON-LD microdata for LocalBusiness, Person, Service, and DefinedTerm schemas without syntax drift.",
      bestFor: "Building machine-readable entity triples that search scrapers can digest deterministically.",
      ctaText: "View Schema Templates",
      ctaLink: "/knowledge-hub/semantic-seo"
    },
    {
      name: "Dense Retrieval Vector Simulators",
      category: "LLM Context Window Parsers",
      pricing: "Technical Framework",
      badge: "Developer Tool",
      description: "Embeddings calculation frameworks evaluating text-embedding-004 cosine similarity and Lost in the Middle context dilution risks.",
      bestFor: "Mitigating positional bias in long-form technical articles and documentation.",
      ctaText: "Read Positional Guide",
      ctaLink: "/knowledge-hub/articles/positional-bias-in-retrieval"
    },
    {
      name: "AEO Prompt Fan-Out Simulators",
      category: "Conversational Query Expansion",
      pricing: "Diagnostic Integration",
      badge: "Analysis Tool",
      description: "Deconstructs single user searches into multi-stage sub-queries to evaluate how generative engines fan out prompt requests to vector indices.",
      bestFor: "Understanding multi-engine query processing across Perplexity, ChatGPT, and Copilot.",
      ctaText: "Explore Query Fan-Out",
      ctaLink: "/knowledge-hub/articles/structured-data-query-fan-out"
    }
  ];

  const faqs = [
    {
      question: "What are AI SEO tools?",
      answer: "AI SEO tools are specialized software applications and technical frameworks designed to analyse, generate, or optimise web content for Large Language Models (LLMs) and generative search engines (Google AI Overviews, ChatGPT Search, Perplexity). Unlike legacy SEO keyword tools, AI SEO tools focus on entity salience, vector similarity, and structured JSON-LD schemas."
    },
    {
      question: "How does the AEObility Telemetry Engine differ from third-party AI SEO software?",
      answer: "Third-party AI SEO tools often rely on static keyword approximations or basic scraper estimations. The AEObility Telemetry Engine executes real-time vector analysis and prompt fan-out tests directly against generative AI retrieval systems, providing exact citation readiness scores."
    },
    {
      question: "Do automated schema generators guarantee AI search inclusion?",
      answer: "No. Automated schema generators output code templates, but earning consistent citations requires nesting entity graphs, validating proof triples, and eliminating context dilution across page content."
    }
  ];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://aeobility.com.au/knowledge-hub/ai-seo-tools#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/ai-seo-tools",
        "name": "AI SEO Tools & Technology Comparison Hub | AEObility",
        "description": "Compare AI SEO tools, automated schema generators, and vector retrieval software built for Answer Engine Optimisation (AEO) and AI search marketing.",
        "inLanguage": "en-AU",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
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
              "name": "AI SEO Tools",
              "item": "https://aeobility.com.au/knowledge-hub/ai-seo-tools"
            }
          ]
        },
        "about": [
          {
            "@type": "SoftwareApplication",
            "@id": "https://aeobility.com.au/diagnostic#webapp",
            "name": "AEObility Telemetry Diagnostic Engine",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "url": "https://aeobility.com.au/diagnostic"
          }
        ],
        "subjectOf": {
          "@type": "ItemPage",
          "@id": "https://aeobility.com.au/knowledge-hub/ai-seo-tools#itempage",
          "name": "AI SEO Tools & Scraper Vector Parsers Benchmarking Matrix"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://aeobility.com.au/diagnostic#webapp",
        "name": "AEObility Telemetry Diagnostic Engine",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://aeobility.com.au/diagnostic",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "AUD"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/ai-seo-tools#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      
      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledge} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[80px] space-y-16">
          
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-medium">
              <Wrench className="w-4 h-4 text-aeo-cyan" />
              <span>AI Search Tooling &amp; RAG Architecture Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              AI SEO Tools &amp; <span className="text-gradient-aeo">Technology Comparison</span>
            </h1>

            <p className="text-lg sm:text-xl text-cyan-300 font-semibold max-w-3xl mx-auto font-soehne-breit">
              Compare AI search software, automated JSON-LD generators, and vector retrieval engines engineered for LLM ingestion.
            </p>

            <p className="text-base text-zinc-300 font-serif leading-relaxed max-w-3xl mx-auto">
              As high-intent search demand shifts toward conversational AI platforms, marketing teams require specialized software evaluation. This hub benchmark tools across AI search queries while integrating the <Link href="/diagnostic" className="text-aeo-cyan underline hover:text-cyan-300 font-semibold">AEObility Telemetry Diagnostic Engine</Link> for live vector evaluation.
            </p>

            {/* Interactive Telemetry Engine Bridge Banner (Hero Section) */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#0A0F1C] border border-[#00E5FF] shadow-[0_0_30px_rgba(0,229,255,0.15)] text-left max-w-3xl mx-auto space-y-4">
              <div className="flex items-center gap-2 text-aeo-cyan text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-aeo-cyan animate-pulse" />
                <span>Live AI Search Vector Audit</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-white font-soehne-breit">
                Skip third-party approximations. Test your website directly against live AI search vector parsers and LLM retrieval engines.
              </p>
              <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="relative flex-grow">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter domain (e.g. example.com.au)"
                    value={heroUrl}
                    onChange={(e) => setHeroUrl(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-zinc-900/90 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-[#00E5FF] hover:bg-cyan-300 text-black font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Run Telemetry Audit →</span>
                </button>
              </form>
            </div>
          </section>

          {/* Core Tools Grid */}
          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">AI SEO Tools &amp; Technical Frameworks</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">Comparing third-party software against native telemetry engines.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                        {tool.badge}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">{tool.pricing}</span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white font-soehne-breit">{tool.name}</h3>
                      <span className="text-xs text-aeo-purple font-mono font-semibold block">{tool.category}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                      {tool.description}
                    </p>

                    <div className="bg-black/50 border border-white/5 p-3 rounded-xl text-xs text-zinc-300 font-serif">
                      <strong className="text-cyan-300 block mb-0.5 font-mono font-bold">Best For:</strong>
                      <span>{tool.bestFor}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <Link
                      href={tool.ctaLink}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 border border-white/15 hover:border-cyan-400 text-white font-bold text-xs transition-all hover:bg-zinc-800"
                    >
                      <span>{tool.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Matrix Table */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Software Evaluation</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">AI Search Tools &amp; Vector Parsers Comparison</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">Benchmarking software capabilities for AI search optimization.</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-zinc-300 font-mono">
                    <th className="p-4 font-bold">Feature / Metric</th>
                    <th className="p-4 font-bold text-cyan-400">AEObility Telemetry Engine</th>
                    <th className="p-4 font-bold">Automated Schema Generators</th>
                    <th className="p-4 font-bold text-zinc-400">Legacy Keyword Crawlers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-serif text-zinc-300">
                  <tr>
                    <td className="p-4 font-bold text-white">Live AI Citation Tracking</td>
                    <td className="p-4 text-cyan-300 font-semibold">Real-Time Vector Multi-Engine Scan</td>
                    <td className="p-4 text-zinc-400">Syntax Check Only</td>
                    <td className="p-4 text-zinc-500">Not Supported (Links Only)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Prompt Fan-Out Simulation</td>
                    <td className="p-4 text-cyan-300 font-semibold">Supported (Gemini / ChatGPT)</td>
                    <td className="p-4 text-zinc-400">Not Supported</td>
                    <td className="p-4 text-zinc-500">Not Supported</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Entity Relationship Triples</td>
                    <td className="p-4 text-cyan-300 font-semibold">Full Graph Validation</td>
                    <td className="p-4 text-zinc-400">Single Class Templates</td>
                    <td className="p-4 text-zinc-500">Lexical Keyword Matching</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Australian Regional Calibration</td>
                    <td className="p-4 text-cyan-300 font-semibold">AU-English Local Salience Model</td>
                    <td className="p-4 text-zinc-400">Generic Global Standard</td>
                    <td className="p-4 text-zinc-400">US-Default Database</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Mid-Page Comparison Matrix CTA Card */}
          <section className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 border border-aeo-cyan/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl text-left">
              <span className="text-xs font-mono font-bold text-aeo-cyan uppercase tracking-wider block">Enterprise Agency Integration</span>
              <p className="text-base sm:text-lg font-bold text-white font-soehne-breit leading-snug">
                Need automated schema graph refactoring or custom LLM citation engineering for your platform?
              </p>
            </div>
            <Link
              href="/services/ai-search-agency"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,205,216,0.3)] whitespace-nowrap flex items-center gap-2"
            >
              <span>Explore AI Search Agency Sprint Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* Methodology & Core AEO Definition Link */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Foundational Methodology</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Understanding AEO Methodology</h2>
              <p className="text-sm text-zinc-300 font-serif leading-relaxed max-w-3xl">
                Before selecting software tools, review our <Link href="/knowledge-hub/what-is-aeo" className="text-aeo-cyan underline hover:text-cyan-300 font-semibold">comprehensive Answer Engine Optimisation definition guide</Link> to understand how atomic answer blocks and proof triples operate during RAG context extraction.
              </p>
            </div>
          </section>

          {/* Enterprise Agency Node Link */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Custom Software Engineering</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Custom AI Search Agency Engineering</h2>
              <p className="text-sm text-zinc-300 font-serif leading-relaxed max-w-3xl">
                For complex e-commerce platforms or multi-location brands, off-the-shelf software generators fall short. Partnering with a <Link href="/services/ai-search-agency" className="text-aeo-cyan underline hover:text-cyan-300 font-semibold">dedicated AI search agency and AEO consultancy</Link> ensures bespoke vector schema alignment and multi-engine tracking.
              </p>
            </div>
          </section>

          {/* Regional Specialist Hub Link */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Local Strategy</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Local AEO Implementation in Australia</h2>
              <p className="text-sm text-zinc-300 font-serif leading-relaxed max-w-3xl">
                Aligning software tools with regional business signals requires local expertise. Working alongside a <Link href="/services/perth/seo-specialist" className="text-aeo-cyan underline hover:text-cyan-300 font-semibold">Perth SEO specialist and local AEO consultant</Link> guarantees your NAP signals match across map packs and conversational search nodes.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="border-t border-white/10 pt-12 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">AI SEO Tools FAQ</h2>
            </div>

            <div className="space-y-4 max-w-3xl">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/80 border border-white/10 rounded-xl space-y-2">
                  <h3 className="text-base font-bold text-white font-soehne-breit">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* Sticky Rail / Bottom Sticky Banner */}
      {showStickyBanner && !dismissSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0F1C]/95 backdrop-blur-md border-t border-[#00E5FF]/40 p-4 shadow-[0_-5px_25px_rgba(0,229,255,0.2)] transition-all duration-300 animate-in slide-in-from-bottom-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-aeo-cyan hidden sm:block">
                <Cpu className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-white font-soehne-breit">
                Evaluate your brand visibility across ChatGPT, Perplexity, &amp; Gemini.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#00E5FF] hover:bg-cyan-300 text-black font-bold text-xs transition-all shadow-[0_0_15px_rgba(0,229,255,0.4)] text-center cursor-pointer"
              >
                Launch Free Diagnostic
              </Link>
              <button
                onClick={() => setDismissSticky(true)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

