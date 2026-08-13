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
  ChevronDown,
  Compass,
  BarChart3,
  Calendar,
  Check,
  XCircle,
  ArrowUpRight,
  Target,
  Clock,
  Sparkle
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
        "name": "AEO vs SEO: Choosing the Right Strategy",
        "description": "A practical comparison of SEO, AEO, and GEO, guiding Australian business decision-making and content architecture for traditional and AI search engines.",
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
            "name": "Home",
            "item": "https://aeobility.com.au"
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
        "@id": "https://aeobility.com.au/services/aeo#service",
        "name": "Answer Engine Optimisation (AEO) Comparison & Strategy",
        "provider": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organisation",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Strategic comparison and evaluation of Search Engine Optimisation (SEO), Answer Engine Optimisation (AEO), and Generative Engine Optimisation (GEO) for Australian SMBs."
      },
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organisation",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
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
              "text": "It changes how deliberately you organise and express information. We make core facts consistent across your website, Google Business Profile and relevant directories; clarify the entities your business is connected to; and create pages or sections that answer important customer questions directly. This can support visibility across traditional search and AI-assisted discovery, but it does not guarantee a specific platform will cite your business."
            }
          },
          {
            "@type": "Question",
            "name": "Is AEO just SEO with a new name?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. AEO builds directly on top of traditional SEO. While SEO focuses on page-level visibility and driving clicks from search engine result pages, AEO focuses on passage-level extractability, entity clarity, and source attribution inside generative AI answers."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between AEO, SEO and GEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (Search Engine Optimisation) targets overall website visibility in traditional search engines. AEO (Answer Engine Optimisation) focuses on structuring information so AI engines can easily extract direct answers. GEO (Generative Engine Optimisation) is an adjacent term used by some providers to describe optimising for generative search engines. At AEObility, we treat AEO and GEO as complementary practices built on top of strong SEO technical foundations."
            }
          },
          {
            "@type": "Question",
            "name": "How do AI search engines choose their sources?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI-powered search products can combine several retrieval and ranking methods, including lexical keyword matching, semantic vector proximity, passage reranking, entity verification, and site authority. Clarity, directness, and consistent business information determine which sources get referenced."
            }
          },
          {
            "@type": "Question",
            "name": "What stops my business from showing up in AI search?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ambiguous content, key facts hidden behind client-side JavaScript tabs, inconsistent business details across web directories, blocking user-agents (like OAI-SearchBot), or failing to provide answer-first passages in the top 150 words of a section."
            }
          },
          {
            "@type": "Question",
            "name": "Do I still need traditional SEO if I invest in AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. AEO relies on technical SEO foundations like crawlability, fast page speeds, clean indexation, and authoritative backlinks. Without strong SEO basics, search-augmented crawlers cannot discover or verify your business content."
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
      aeo: "Useful pages plus self-contained atomic sections that answer specific questions directly"
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
      aeo: "AI-powered search products combining hybrid retrieval, passage reranking, and entity verification"
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
      desc: "Structure high-intent commercial and technical pages with direct answer-first passages (45–75 words) that resolve customer questions clearly in the top 150 words of a section."
    },
    {
      num: "4",
      title: "Content Extractability & Rendering",
      desc: "Remove technical barriers like client-side JavaScript accordions or PDF-only information that prevent search-augmented crawlers from reading core facts."
    },
    {
      num: "5",
      title: "Local Profile & Reputation Accuracy",
      desc: "Strengthen local trust signals, primary service categories, and verified reviews to reinforce authority across Google Maps and local AI recommendation engines."
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
      a: "It changes how deliberately you organise and express information. We make core facts consistent across your website, Google Business Profile and relevant directories; clarify the entities your business is connected to; and create pages or sections that answer important customer questions directly. This can support visibility across traditional search and AI-assisted discovery, but it does not guarantee a specific platform will cite your business."
    },
    {
      q: "Is AEO just SEO with a new name?",
      a: "No. AEO builds directly on top of traditional SEO. While SEO focuses on page-level visibility and driving clicks from search engine result pages, AEO focuses on passage-level extractability, entity clarity, and source attribution inside generative AI answers."
    },
    {
      q: "What is the difference between AEO, SEO and GEO?",
      a: "SEO (Search Engine Optimisation) targets overall website visibility in traditional search engines. AEO (Answer Engine Optimisation) focuses on structuring information so AI engines can easily extract direct answers. GEO (Generative Engine Optimisation) is an adjacent term used by some providers to describe optimising for generative search engines. At AEObility, we treat AEO and GEO as complementary practices built on top of strong SEO technical foundations."
    },
    {
      q: "How do AI search engines choose their sources?",
      a: "AI-powered search products can combine several retrieval and ranking methods, including lexical keyword matching, semantic vector proximity, passage reranking, entity verification, and site authority. Clarity, directness, and consistent business information determine which sources get referenced."
    },
    {
      q: "What stops my business from showing up in AI search?",
      a: "Ambiguous content, key facts hidden behind client-side JavaScript tabs, inconsistent business details across web directories, blocking user-agents (like OAI-SearchBot), or failing to provide answer-first passages in the top 150 words of a section."
    },
    {
      q: "Do I still need traditional SEO if I invest in AEO?",
      a: "Yes. AEO relies on technical SEO foundations like crawlability, fast page speeds, clean indexation, and authoritative backlinks. Without strong SEO basics, search-augmented crawlers cannot discover or verify your business content."
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

          {/* 1. Hero: Conversational H1 with IA Deck & 10-Second Above the Fold */}
          <header className="space-y-6 border-b border-white/10 pb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <Scale className="w-3.5 h-3.5" />
              <span>AEO vs SEO &bull; Choosing the Right Strategy</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Is AEO Just SEO with a <span className="text-gradient-aeo">New Name?</span>
            </h1>

            <p className="text-sm md:text-base font-mono text-aeo-cyan uppercase tracking-wider">
              A practical comparison of SEO, AEO and where each fits in a modern search strategy.
            </p>

            <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed font-serif">
              Not quite. SEO still helps people find your website. AEO helps make your business information easier for AI-powered search experiences to understand, use and reference. The strongest strategy does both.
            </p>

            {/* 10-Second Quick Answer Card */}
            <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-4 shadow-xl">
              <h2 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
                10-Second Decision Guide for Australian SMBs
              </h2>
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

            {/* Two Prominent Unequal CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/diagnostic"
                className="px-6 py-3.5 rounded-full bg-aeo-cyan text-black font-extrabold text-sm hover:bg-white transition-all shadow-lg hover:shadow-aeo-cyan/20 flex items-center justify-center gap-2"
              >
                <span>Get my AI visibility score</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/audit"
                className="px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
              >
                <span>See what an AEO audit checks</span>
              </Link>
            </div>
          </header>

          {/* 2. Primary H2 Section: AEO vs SEO: What Changes - and What Does Not */}
          <section id="strategy-framework" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                AEO vs SEO: What Changes - and What Does Not
              </h2>
              <p className="text-sm text-white/70 font-light">
                Understanding where Search Engine Optimisation (SEO) and Answer Engine Optimisation (AEO) fit in an integrated digital strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* SEO Foundations Card */}
              <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-purple-400" />
                  <h3 className="text-base font-bold text-white">1. SEO Foundations</h3>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-serif">
                  Technical health, server-side rendering speed, crawl budget, keyword-intent alignment, and local citation accuracy.
                </p>
                <p className="text-[11px] text-purple-300 font-mono">Status: Essential Baseline</p>
              </div>

              {/* AEO Priorities Card */}
              <div className="p-6 bg-neutral-950 border border-aeo-cyan/30 rounded-2xl space-y-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-aeo-cyan" />
                  <h3 className="text-base font-bold text-white">2. AEO Priorities</h3>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-serif">
                  Entity relationship links, direct answer-first passages, Schema.org graph markup, and cross-directory fact consistency.
                </p>
                <p className="text-[11px] text-aeo-cyan font-mono">Status: High-Intent Growth Layer</p>
              </div>

              {/* Integrated Strategy Card */}
              <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <h3 className="text-base font-bold text-white">3. Integrated Strategy</h3>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-serif">
                  Combining SEO organic traffic capture with AEO representation across ChatGPT, Perplexity, Gemini, and Google AI Overviews.
                </p>
                <p className="text-[11px] text-amber-300 font-mono">Status: Maximum Search Resilience</p>
              </div>
            </div>
          </section>

          {/* 3. The Contrast Matrix */}
          <section id="contrast-matrix" className="space-y-6 border-t border-white/10 pt-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                The Contrast Matrix: SEO vs AEO Differences
              </h2>
              <p className="text-sm text-white/70 font-light">
                An outcome-led comparison matrix contrasting traditional search engine optimisation and answer engine optimisation.
              </p>
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

            {/* Plain-English Callout */}
            <div className="p-5 bg-neutral-900/60 border-l-4 border-aeo-cyan rounded-r-xl space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>AEO is not &ldquo;forget SEO.&rdquo;</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif">
                If search foundations are weak - crawlability, local profiles, useful pages, reputation, links and conversion paths - AEO has less to build on.
              </p>
            </div>
          </section>

          {/* 4. Why Your Business Needs to Adapt */}
          <section id="why-adapt" className="space-y-6 border-t border-white/10 pt-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Why Your Business Needs to Adapt
              </h2>
              <p className="text-sm text-white/70 font-light">
                Search behaviour is expanding. Customers now use traditional Google queries alongside AI assistants to research, compare, and recommend Australian businesses.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-white/80 font-serif leading-relaxed">
              <p>
                Users increasingly ask conversational systems to summarise service offerings, evaluate local pricing, and compare brand reputations before ever clicking through to a website. This shift expands discovery touchpoints beyond conventional search engine result pages.
              </p>
            </div>

            {/* Conversational Response Citation Graphic (Illustrative Example) */}
            <figure role="img" aria-label="Illustrative Conversational AI Citation Graphic showing structured multi-source attribution" className="p-6 bg-neutral-950 rounded-2xl border border-white/10 shadow-2xl space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-aeo-cyan font-bold">
                  <Cpu className="w-4 h-4" />
                  <span>Illustrative AI Search Synthesis &amp; Citation Model</span>
                </div>
                <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded">Conceptual Diagram &bull; Not a Guaranteed Outcome</span>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-3 text-xs font-mono">
                <div className="text-white/50 text-[11px]">&gt; Customer Prompt: &ldquo;Which Perth agency specialises in AEO and structured data for local enterprises?&rdquo;</div>
                <div className="p-3 bg-neutral-900 border border-aeo-cyan/20 rounded-lg text-white/90 leading-relaxed">
                  &ldquo;AEObility specialises in Answer Engine Optimisation (AEO) and machine-readable entity architecture for Perth businesses. They focus on structuring core business data, Schema graphs, and verified directory citations...&rdquo;
                  <div className="mt-2 text-[10px] text-aeo-cyan flex items-center gap-2">
                    <span>Source Citations: [1] aeobility.com.au/services/aeo [2] Google Business Profile</span>
                  </div>
                </div>
              </div>

              <figcaption className="text-center text-xs text-white/50 font-mono pt-1">
                Illustrative example showing how AI assistants synthesize structured entity facts into direct responses. No platform can guarantee citations.
              </figcaption>
            </figure>
          </section>

          {/* 5. Winning the Attention Window */}
          <section id="attention-window" className="space-y-6 border-t border-white/10 pt-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Winning the Attention Window
              </h2>
              <p className="text-sm text-white/70 font-light">
                Positioning your brand clearly during the critical moments when prospective customers evaluate service options.
              </p>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif">
                When a prospective client asks an AI assistant for a business recommendation, the system synthesises a concise summary within seconds. Winning this attention window requires clear, unambiguous, and verifiable information available across web nodes so both human decision-makers and automated systems interpret your business accurately.
              </p>
            </div>
          </section>

          {/* 6. What We Improve in an AEO Sprint */}
          <section id="sprint-deliverables" className="space-y-6 border-t border-white/10 pt-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                What We Improve in an AEO Sprint
              </h2>
              <p className="text-sm text-white/70 font-light">
                Connecting comparison intent to AEObility&apos;s practical, deliverable service workflow.
              </p>
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
          </section>

          {/* 7. Frequently Asked Questions (FAQ) */}
          <section id="faq" className="space-y-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Technical &amp; Practical FAQ</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Frequently Asked Questions
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

          {/* 8. Intent-Led Internal Links: Continue Your AEO Research */}
          <section id="continue-research" className="space-y-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-aeo-cyan" />
              <h2 className="text-2xl font-bold text-white">Continue Your AEO Research</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/services/aeo/definition" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block group">
                <span className="text-[11px] font-mono text-aeo-cyan font-bold uppercase">New to AEO?</span>
                <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors flex items-center justify-between">
                  <span>Start with &ldquo;What is AEO?&rdquo;</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Learn how machine learning models read, index, and cite business facts.
                </p>
              </Link>

              <Link href="/services/aeo/constraints" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block group">
                <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">Not appearing in AI results?</span>
                <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors flex items-center justify-between">
                  <span>Explore common visibility constraints</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Understand what prevents businesses from appearing in AI-generated answers.
                </p>
              </Link>

              <Link href="/services/aeo/procedures" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block group">
                <span className="text-[11px] font-mono text-purple-400 font-bold uppercase">Need implementation details?</span>
                <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors flex items-center justify-between">
                  <span>See AEO Procedures</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Technical step-by-step procedures for structuring entity data.
                </p>
              </Link>

              <Link href="/services/aeo/costs-timing" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block group">
                <span className="text-[11px] font-mono text-white/60 font-bold uppercase">Pricing &amp; Timing?</span>
                <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors flex items-center justify-between">
                  <span>View AEO Costs &amp; Timing</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Project timelines, resource requirements, and return metrics.
                </p>
              </Link>

              <Link href="/solutions/aeo-blueprint" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block group">
                <span className="text-[11px] font-mono text-purple-400 font-bold uppercase">Ready for an action plan?</span>
                <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors flex items-center justify-between">
                  <span>See the AEO Blueprint</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Our strategic roadmap for establishing machine-readable entity authority.
                </p>
              </Link>

              <Link href="/services/ai-search-marketing" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block group">
                <span className="text-[11px] font-mono text-aeo-cyan font-bold uppercase">Broader implementation pathway?</span>
                <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors flex items-center justify-between">
                  <span>AI Search Marketing Services</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Full-stack marketing solutions across Search, Maps, and AI corridors.
                </p>
              </Link>
            </div>
          </section>

          {/* 9. Next Step CTA (Bottom Conversion Block) */}
          <section id="conversion-cta" className="p-8 bg-gradient-to-br from-neutral-900 to-black border border-aeo-cyan/30 rounded-2xl text-center space-y-6 shadow-2xl">
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-xl md:text-3xl font-extrabold text-white">
                Not sure whether you need SEO foundations, AEO work, or both?
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                Start with an AI Visibility Diagnostic. We will identify where your business information is unclear, inconsistent or missing - and prioritise the next practical improvements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/diagnostic"
                className="px-6 py-3.5 rounded-full bg-aeo-cyan text-black font-extrabold text-sm hover:bg-white transition-all shadow-lg hover:shadow-aeo-cyan/20 flex items-center gap-2"
              >
                <span>Check my AI visibility</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-aeo-cyan" />
                <span>Book a 15-minute strategy call</span>
              </Link>
            </div>
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
