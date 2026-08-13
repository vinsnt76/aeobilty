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
  ChevronDown,
  Compass,
  BarChart3,
  Calendar,
  Check,
  XCircle,
  ArrowUpRight,
  Target,
  Clock,
  Users,
  Network,
  ArrowRightCircle
} from 'lucide-react';

export const metadata = {
  title: "AEO vs SEO: Choosing the Right Strategy | AEObility",
  description: "A practical comparison of SEO, AEO, and GEO. Learn how Answer Engine Optimisation complements search foundations and how to choose the right strategy for your business.",
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
        "@id": "https://aeobility.com.au/services/aeo/comparison#webpage",
        "url": "https://aeobility.com.au/services/aeo/comparison",
        "name": "AEO vs SEO: Choosing the Right Strategy | AEObility",
        "description": "A practical comparison of SEO, AEO, and GEO, guiding Australian business decision-making and content architecture for traditional and AI search engines.",
        "inLanguage": "en-AU",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://aeobility.com.au/#website",
          "name": "AEObility",
          "url": "https://aeobility.com.au/"
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
            "name": "Home",
            "item": "https://aeobility.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://aeobility.com.au/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AEO Services",
            "item": "https://aeobility.com.au/services/aeo"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "AEO vs SEO",
            "item": "https://aeobility.com.au/services/aeo/comparison"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/aeo/comparison#service",
        "name": "AEO & SEO Comparison & Sprints",
        "provider": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organisation",
          "name": "AEObility",
          "legalName": "Trekaboutoz",
          "vatID": "61 029 803 255",
          "url": "https://aeobility.com.au/"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Optimising Australian small business data to be discoverable, understandable, and recommended across search, maps, and generative AI corridors."
      },
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organisation",
        "name": "AEObility",
        "legalName": "Trekaboutoz",
        "vatID": "61 029 803 255",
        "url": "https://aeobility.com.au/",
        "logo": "https://aeobility.com.au/android-chrome-512x512.png"
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/aeo/comparison#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does AEO change on my website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It changes how deliberately you organise and express information. We make core facts consistent across your website, Google Business Profile and relevant directories; clarify the entities your business is connected to; and create pages or sections that answer important customer questions directly. Your core brand identity, domain trust, and traditional search funnel remain completely intact. This supports visibility across traditional search and AI-assisted discovery, but does not guarantee a specific platform will cite your business."
            }
          },
          {
            "@type": "Question",
            "name": "Is AEO just SEO with a new name?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. AEO builds directly on top of traditional SEO. While SEO focuses on page-level visibility and driving clicks from search engine result pages, AEO focuses on clearer, more consistent information that can be used in AI-assisted discovery."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between AEO, SEO and GEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (Search Engine Optimisation) targets overall website visibility in traditional search engines. AEO (Answer Engine Optimisation) focuses on structuring information so AI-powered search products can easily interpret direct answers. GEO (Generative Engine Optimisation) is an adjacent term used by some providers to describe optimising for generative search engines. At AEObility, we treat AEO and GEO as complementary practices built on top of strong SEO technical foundations."
            }
          },
          {
            "@type": "Question",
            "name": "How do AI search engines choose their sources?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI-powered search products can combine several retrieval and ranking methods, including lexical keyword matching, semantic vector proximity, passage reranking, entity verification, and site authority. Clarity, directness and consistent business information can help systems and customers interpret a source more confidently."
            }
          },
          {
            "@type": "Question",
            "name": "What stops my business from showing up in AI search?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ambiguous content, key facts hidden behind client-side JavaScript tabs, inconsistent business details across web directories, lack of entity reconciliation across public registries, blocking user-agents (like OAI-SearchBot), or failing to provide clear, answer-first section structure."
            }
          },
          {
            "@type": "Question",
            "name": "Do I still need traditional SEO if I invest in AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. AEO relies on technical SEO foundations like crawlability, fast page speeds, clean indexation, and authoritative backlinks. Weak SEO foundations can make your business information harder to discover, interpret and validate."
            }
          }
        ]
      }
    ]
  };

  const contrastMatrixData = [
    {
      area: "Primary aim",
      seo: "Help relevant people find and visit your website via search engine result pages",
      aeo: "Make business information clear, extractable, and reusable in AI-mediated discovery"
    },
    {
      area: "Main focus",
      seo: "Search demand, technical health, content quality, link authority, and local visibility",
      aeo: "Entity clarity, concise answers, source consistency, structured data, and coverage of customer questions"
    },
    {
      area: "Content approach",
      seo: "Useful web pages built around explicit search intent and topic clusters",
      aeo: "Useful pages plus clear, self-contained sections that answer a specific customer question directly"
    },
    {
      area: "Success signals",
      seo: "Rankings, impressions, organic traffic, inbound leads, and revenue",
      aeo: "Brand mentions, accurate representation, referral visibility, and assisted conversions"
    },
    {
      area: "Still needed?",
      seo: "Yes - essential baseline for web discovery",
      aeo: "Yes - where AI search matters to your target audience"
    },
    {
      area: "Technical context",
      seo: "Established search optimisation foundations (crawlability, lexical matching, domain trust)",
      aeo: "AI-powered search products may combine keyword, semantic, page-level and other relevance signals"
    }
  ];

  const sprintDeliverables = [
    {
      num: "1",
      title: "Source & Listing Consistency",
      desc: "Audit and reconcile conflicting or outdated business Name, Address, Phone (NAP), and service data across your website, Google Business Profile, and third-party web directories."
    },
    {
      num: "2",
      title: "Entity Clarity & Schema Linking",
      desc: "Deploy explicit Schema.org graph markup (@id URIs, Organization, LocalBusiness, Service) to define clear machine-readable relationships between your brand, services, and locations."
    },
    {
      num: "3",
      title: "Customer Question Coverage",
      desc: "Structure important sections so the direct answer appears early, followed by the context, evidence and next step a customer needs."
    },
    {
      num: "4",
      title: "Content Extractability & Rendering",
      desc: "Remove technical barriers like client-side JavaScript accordions or PDF-only information that prevent search-augmented crawlers from reading core facts."
    },
    {
      num: "5",
      title: "Local Profile & Reputation Accuracy",
      desc: "Strengthen local trust signals, primary service categories, and verified reviews to reinforce authority across Google Maps and AI-assisted discovery platforms."
    },
    {
      num: "6",
      title: "Visibility Measurement & Iteration",
      desc: "Track brand representation, AI assistant referral patterns, and organic search performance over time using GA4 telemetry and custom diagnostic scoring."
    }
  ];

  const microFaqs = [
    {
      q: "What does AEO change on my website?",
      a: "It changes how deliberately you organise and express information. We make core facts consistent across your website, Google Business Profile and relevant directories; clarify the entities your business is connected to; and create pages or sections that answer important customer questions directly. Your core brand identity, domain trust, and traditional search funnel remain completely intact. This supports visibility across traditional search and AI-assisted discovery, but does not guarantee a specific platform will cite your business."
    },
    {
      q: "Is AEO just SEO with a new name?",
      a: "No. AEO builds directly on top of traditional SEO. While SEO focuses on page-level visibility and driving clicks from search engine result pages, AEO focuses on clearer, more consistent information that can be used in AI-assisted discovery."
    },
    {
      q: "What is the difference between AEO, SEO and GEO?",
      a: "SEO (Search Engine Optimisation) targets overall website visibility in traditional search engines. AEO (Answer Engine Optimisation) focuses on structuring information so AI-powered search products can easily interpret direct answers. GEO (Generative Engine Optimisation) is an adjacent term used by some providers to describe optimising for generative search engines. At AEObility, we treat AEO and GEO as complementary practices built on top of strong SEO technical foundations."
    },
    {
      q: "How do AI search engines choose their sources?",
      a: "AI-powered search products can combine several retrieval and ranking methods, including lexical keyword matching, semantic vector proximity, passage reranking, entity verification, and site authority. Clarity, directness and consistent business information can help systems and customers interpret a source more confidently."
    },
    {
      q: "What stops my business from showing up in AI search?",
      a: "Ambiguous content, key facts hidden behind client-side JavaScript tabs, inconsistent business details across web directories, lack of entity reconciliation across public registries, blocking user-agents (like OAI-SearchBot), or failing to provide clear, answer-first section structure."
    },
    {
      q: "Do I still need traditional SEO if I invest in AEO?",
      a: "Yes. AEO relies on technical SEO foundations like crawlability, fast page speeds, clean indexation, and authoritative backlinks. Weak SEO foundations can make your business information harder to discover, interpret and validate."
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
      <SubNavPills items={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full flex flex-col gap-12">
        <article className="flex flex-col gap-12">

          {/* 1. Hero: Conversational H1 */}
          <header className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <Scale className="w-3.5 h-3.5" />
              <span>AEO vs SEO &bull; Choosing the Right Strategy</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Is AEO Just SEO with a <span className="text-gradient-aeo">New Name?</span>
            </h1>

            <p className="text-xs sm:text-sm font-mono text-aeo-cyan uppercase tracking-wider">
              A practical comparison of SEO, AEO and where each fits in a modern search strategy.
            </p>

            <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed font-serif">
              Not quite. SEO still helps people find your website. AEO operates as a specialized optimization layer built on top of robust technical SEO foundations, making your business information easier for AI-powered search experiences to understand, use and reference. The strongest strategy does both.
            </p>

            {/* 2. Layered Search Model Banner Image */}
            <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl my-4">
              <Image
                src="/layered_search_model_banner.png"
                alt="Layered Search Model visual showing hypergradient data layers connecting SEO baseline to AEO clarity"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-6">
                <div className="max-w-md space-y-1.5 font-mono text-xs">
                  <span className="text-purple-400 font-bold">SEO foundations</span>
                  <p className="text-white/70 text-[11px]">Crawlable site &bull; useful pages &bull; local trust &bull; rankings</p>
                  <div className="text-aeo-cyan font-bold text-sm py-0.5">+ AEO clarity layer</div>
                  <p className="text-white/70 text-[11px]">Clear entities &bull; consistent facts &bull; answer-ready content</p>
                  <div className="text-amber-400 font-bold text-[11px] pt-1">
                    = Stronger discovery across Search, Maps &amp; AI-assisted journeys
                  </div>
                </div>
              </div>
            </div>

            {/* 3. 10-Second Decision Guide for Australian SMBs & Hero CTAs */}
            <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <h2 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
                  10-Second Decision Guide for Australian SMBs
                </h2>
                <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded">Layered Search Model</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                  <span className="text-purple-400 font-bold font-mono">Is SEO still worth doing?</span>
                  <p className="text-white/90 font-semibold">Yes.</p>
                  <p className="text-white/60 text-[11px]">It remains the primary engine for organic traffic, local discovery, and site visits.</p>
                </div>
                <div className="p-3.5 bg-white/[0.02] border border-aeo-cyan/30 rounded-xl space-y-1">
                  <span className="text-aeo-cyan font-bold font-mono">Is AEO separate?</span>
                  <p className="text-white/90 font-semibold">It builds on SEO.</p>
                  <p className="text-white/60 text-[11px]">With added emphasis on entity clarity, source consistency and answer-ready passages.</p>
                </div>
                <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                  <span className="text-white/80 font-bold font-mono">What should I do next?</span>
                  <p className="text-white/90 font-semibold">Identify your gaps.</p>
                  <p className="text-white/60 text-[11px]">Find out whether traditional or AI visibility barriers matter most for your business.</p>
                </div>
              </div>
            </div>

            {/* Two Prominent Unequal CTAs with Microcopy */}
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <Link
                  href="/diagnostic"
                  className="px-6 py-3.5 rounded-full bg-aeo-cyan text-black font-extrabold text-sm hover:bg-white transition-all shadow-lg hover:shadow-aeo-cyan/20 flex items-center justify-center gap-2"
                >
                  <span>Check my AI search visibility</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/audit"
                  className="px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>See what the diagnostic assesses</span>
                </Link>
              </div>
              <p className="text-[11px] text-white/50 font-mono italic text-left pl-1">
                Free, no-obligation starting point for Australian businesses.
              </p>
            </div>
          </header>

          {/* 4. Primary H2 Section: AEO vs SEO: What Changes - and What Does Not */}
          <section id="strategy-framework" className="space-y-6 border-t border-white/10 pt-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                AEO vs SEO: What Changes - and What Does Not
              </h2>
              <p className="text-sm text-white/70 font-light">
                Understanding how traditional Search Engine Optimisation (SEO) and Answer Engine Optimisation (AEO) connect in a layered digital strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* SEO Foundations Card */}
              <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-purple-400" />
                    <h3 className="text-base font-bold text-white">1. SEO Foundations</h3>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-serif">
                    Technical health, server-side rendering speed, crawl budget, keyword-intent alignment, and local citation accuracy.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-block px-2.5 py-1 rounded font-mono text-[11px] font-bold bg-purple-950/80 text-purple-300 border border-purple-500/30">
                    Status: Essential Baseline
                  </span>
                </div>
              </div>

              {/* AEO Priorities Card */}
              <div className="p-6 bg-neutral-950 border border-aeo-cyan/30 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-aeo-cyan" />
                    <h3 className="text-base font-bold text-white">2. AEO Priorities</h3>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed font-serif">
                    Entity relationship links, direct answer-first passages, Schema.org graph markup, and cross-directory fact consistency.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-block px-2.5 py-1 rounded font-mono text-[11px] font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                    Status: High-Intent Growth Layer
                  </span>
                </div>
              </div>

              {/* Integrated Strategy Card */}
              <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-4 shadow-xl flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <h3 className="text-base font-bold text-white">3. Integrated Strategy</h3>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-serif">
                    Combining SEO organic traffic capture with AEO representation across ChatGPT, Perplexity, Gemini, and Google AI Overviews.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-block px-2.5 py-1 rounded font-mono text-[11px] font-bold bg-amber-950/80 text-amber-300 border border-amber-500/30">
                    Status: Maximum Search Resilience
                  </span>
                </div>
              </div>
            </div>

            {/* Flow Diagram: From Search Foundation to AI-Assisted Discovery */}
            <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-4 shadow-xl my-4">
              <h3 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider text-center">
                Search Foundation to AI-Assisted Discovery Flow
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch font-mono text-xs">
                <div className="p-4 bg-white/[0.02] border border-purple-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-bold">
                    <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px]">1</span>
                    <span>SEO Foundations</span>
                  </div>
                  <p className="text-[11px] text-white/70 font-sans leading-relaxed">
                    Crawlability, useful pages, local trust, and technical health.
                  </p>
                </div>

                <div className="p-4 bg-white/[0.02] border border-cyan-500/30 rounded-xl space-y-2 relative">
                  <div className="flex items-center gap-2 text-aeo-cyan font-bold">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-[10px]">2</span>
                    <span>AEO Clarity Layer</span>
                  </div>
                  <p className="text-[11px] text-white/70 font-sans leading-relaxed">
                    Clear entities, consistent facts, direct answers, and structured data.
                  </p>
                </div>

                <div className="p-4 bg-white/[0.02] border border-amber-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-[10px]">3</span>
                    <span>Discovery Outcomes</span>
                  </div>
                  <p className="text-[11px] text-white/70 font-sans leading-relaxed">
                    Search visibility, accurate business representation, and qualified enquiries.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. The Contrast Matrix */}
          <section id="contrast-matrix" className="space-y-6 border-t border-white/10 pt-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                SEO vs AEO Differences
              </h2>
            </div>

            <div className="overflow-x-auto border border-white/10 rounded-2xl bg-neutral-950 shadow-2xl">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 font-mono text-xs uppercase text-aeo-cyan">
                    <th className="p-4 font-bold w-1/6">Area</th>
                    <th className="p-4 font-bold w-5/12">Search Engine Optimisation (SEO)</th>
                    <th className="p-4 font-bold w-5/12">Answer Engine Optimisation (AEO)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-sans">
                  {contrastMatrixData.map((row, idx) => (
                    <tr key={idx} className={idx === contrastMatrixData.length - 1 ? "bg-white/[0.03] font-mono text-xs" : "hover:bg-white/[0.02] transition-colors"}>
                      <td className="p-4 font-bold text-white whitespace-nowrap">{row.area}</td>
                      <td className="p-4 text-white/70 leading-relaxed">{row.seo}</td>
                      <td className="p-4 text-white/90 font-medium text-aeo-cyan/90 leading-relaxed">{row.aeo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Plain-English Callout with Defensible Weak-SEO Example */}
            <div className="p-5 bg-neutral-900/60 border-l-4 border-aeo-cyan rounded-r-xl space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>AEO is not &ldquo;forget SEO.&rdquo;</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif">
                If search foundations are weak - crawlability, local profiles, useful pages, reputation, links and conversion paths - AEO has less to build on.
              </p>

              {/* Defensible Weak SEO Scenario Callout */}
              <div className="p-3.5 bg-black/40 border border-white/10 rounded-lg space-y-1.5 text-xs">
                <span className="text-amber-400 font-mono font-bold uppercase text-[11px] block">Practical Example: Why SEO Baseline Matters</span>
                <p className="text-white/70 leading-relaxed font-serif">
                  Poor performance and crawl errors can reduce the reliability of discovery and indexing. Weak SEO foundations can make your business information harder to discover, interpret and validate across traditional and AI-powered search engines.
                </p>
              </div>
            </div>

            {/* Mid-Page Diagnostic CTA (After Matrix & Example) */}
            <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-neutral-950 to-neutral-900 border border-aeo-cyan/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-base font-bold text-white">Unsure if your search foundations are clear?</h3>
                <p className="text-xs text-white/70">Run our free 2-minute diagnostic to evaluate where your business data stands.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/diagnostic"
                  className="px-5 py-2.5 rounded-full bg-aeo-cyan text-black font-extrabold text-xs hover:bg-white transition-all shadow-md"
                >
                  Run a 2-minute visibility check
                </Link>
                <Link
                  href="/audit"
                  className="text-xs text-white/70 hover:text-aeo-cyan underline transition-colors"
                >
                  See what we assess
                </Link>
              </div>
            </div>
          </section>

          {/* 6. Why Your Business Needs to Adapt & Source-Consistency Graphic */}
          <section id="why-adapt" className="space-y-6 border-t border-white/10 pt-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Why Your Business Needs to Adapt
              </h2>
              <p className="text-sm text-white/80 font-serif leading-relaxed">
                Search behaviour is expanding beyond traditional result pages. Customers now ask conversational systems to summarise services, evaluate pricing, and compare brand reputations before contacting an Australian business.
              </p>
            </div>

            {/* Source Consistency Illustration Graphic */}
            <figure role="img" aria-label="Source-Consistency Illustration Diagram showing website service page, Google Business Profile, and trusted directories connecting to consistent facts" className="p-6 bg-neutral-950 rounded-2xl border border-white/10 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-aeo-cyan font-bold">
                  <Network className="w-4 h-4" />
                  <span>Source-Consistency Cross-Directory Model</span>
                </div>
                <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded">Multi-Source Verification</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-xs font-mono">
                <div className="space-y-2">
                  <div className="p-2.5 bg-white/[0.02] border border-white/10 rounded-lg text-white/80 text-center">Website Service Page</div>
                  <div className="p-2.5 bg-white/[0.02] border border-white/10 rounded-lg text-white/80 text-center">Google Business Profile</div>
                  <div className="p-2.5 bg-white/[0.02] border border-white/10 rounded-lg text-white/80 text-center">Trusted Directories</div>
                </div>

                <div className="p-4 bg-cyan-950/40 border border-aeo-cyan/40 rounded-xl text-center space-y-1">
                  <span className="text-aeo-cyan font-bold text-[11px] block">&bull; CONSISTENT BUSINESS FACTS &bull;</span>
                  <p className="text-[10px] text-white/60 font-sans">Name, Address, Phone, Services &amp; Credentials</p>
                </div>

                <div className="p-4 bg-amber-950/40 border border-amber-500/40 rounded-xl text-center space-y-1">
                  <span className="text-amber-400 font-bold text-[11px] block">EASIER CUSTOMER EVALUATION</span>
                  <p className="text-[10px] text-white/60 font-sans">Clear, verifiable information across discovery paths</p>
                </div>
              </div>

              <figcaption className="text-center text-xs text-white/60 font-mono pt-1">
                Illustration: consistent information helps customers assess a business across different discovery paths.
              </figcaption>
            </figure>
          </section>

          {/* 7. Be Clear When Customers Compare Options */}
          <section id="attention-window" className="space-y-6 border-t border-white/10 pt-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Make It Easier to Compare Your Business
              </h2>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif">
                When a customer asks an AI assistant for help comparing businesses, the response may be brief. Make your core services, locations, credentials and proof points easy to find and consistent across the web so people can evaluate your business accurately.
              </p>
            </div>
          </section>

          {/* 8. What an AEO Sprint Improves & Strategy-Call CTA */}
          <section id="sprint-deliverables" className="space-y-6 border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                  What an AEO Sprint Improves
                </h2>
              </div>

              {/* Sprint Metadata Badges */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-aeo-cyan font-mono text-xs font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Typical sprint: 2–4 weeks</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 font-mono text-xs">
                  <Users className="w-3.5 h-3.5 text-purple-400" />
                  <span>For Aussie SMBs &amp; Services</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sprintDeliverables.map((item, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2.5 hover:border-aeo-cyan/30 transition-all">
                  <div className="w-7 h-7 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan font-mono font-bold text-xs">
                    {item.num}
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">{item.title}</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Post-Sprint Strategy-Call CTA */}
            <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-base font-bold text-white">Ready to streamline your business facts?</h3>
                <p className="text-xs text-white/70">Discuss your SEO and AEO priorities with our Australian team.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full bg-aeo-cyan text-black font-extrabold text-xs hover:bg-white transition-all shadow-md flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Discuss my SEO and AEO priorities</span>
                </Link>
                <Link
                  href="/solutions/aeo-blueprint"
                  className="text-xs text-white/70 hover:text-aeo-cyan underline transition-colors"
                >
                  View AEO blueprint
                </Link>
              </div>
            </div>
          </section>

          {/* 9. Common Questions (FAQ) */}
          <section id="faq" className="space-y-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Common Questions
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

          {/* 10. Compact "Choose your next question" 3-Card Grid */}
          <section id="continue-research" className="space-y-6 border-t border-white/10 pt-8">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white">Choose Your Next Question</h2>
              <p className="text-xs text-white/60 font-serif">Recommended next steps for your discovery journey.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link href="/services/aeo/definition" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block group">
                <span className="text-[11px] font-mono text-aeo-cyan font-bold uppercase">New to AEO?</span>
                <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors flex items-center justify-between">
                  <span>What is AEO?</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Learn how machine learning models read, index, and cite business facts.
                </p>
              </Link>

              <Link href="/services/aeo/procedures" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block group">
                <span className="text-[11px] font-mono text-purple-400 font-bold uppercase">Need a practical plan?</span>
                <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors flex items-center justify-between">
                  <span>Best strategies &amp; procedures</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Technical step-by-step procedures for structuring entity data.
                </p>
              </Link>

              <Link href="/solutions/aeo-blueprint" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block group">
                <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">Considering investment?</span>
                <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors flex items-center justify-between">
                  <span>Costs, timing &amp; Blueprint</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Project timelines, resource requirements, and return metrics.
                </p>
              </Link>
            </div>

            {/* Inline Related Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs font-mono text-white/60 border-t border-white/5">
              <span>Related:</span>
              <Link href="/services/aeo/constraints" className="hover:text-aeo-cyan transition-colors">
                &bull; Constraints &amp; Blocker Checklist
              </Link>
              <Link href="/services/aeo/shopify" className="hover:text-aeo-cyan transition-colors">
                &bull; Shopify Ecommerce AEO
              </Link>
              <Link href="/services/ai-search-marketing" className="hover:text-aeo-cyan transition-colors">
                &bull; Full AI Search Marketing Services
              </Link>
            </div>
          </section>

          {/* 11. Final Conversion CTA Block (Bottom) */}
          <section id="conversion-cta" className="p-8 bg-gradient-to-br from-neutral-900 to-black border border-aeo-cyan/30 rounded-2xl text-center space-y-6 shadow-2xl">
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-xl md:text-3xl font-extrabold text-white">
                Ready to improve how your business is represented across Search, Maps and AI?
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                Start with an AI Visibility Diagnostic. We will identify where your business information is unclear, inconsistent or missing - and prioritize your next practical steps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/diagnostic"
                className="px-6 py-3.5 rounded-full bg-aeo-cyan text-black font-extrabold text-sm hover:bg-white transition-all shadow-lg hover:shadow-aeo-cyan/20 flex items-center gap-2"
              >
                <span>Start my visibility diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-aeo-cyan" />
                <span>Discuss my SEO and AEO priorities</span>
              </Link>
            </div>
            <p className="text-[11px] text-white/50 font-mono italic">
              Free, no-obligation starting point for Australian businesses.
            </p>
          </section>

          {/* Bottom-Up Link to Parent AEO Hub */}
          <div className="pt-2 flex">
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
