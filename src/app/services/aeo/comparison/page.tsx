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
  ArrowUpRight
} from 'lucide-react';

export const metadata = {
  title: "Is AEO Just SEO with a New Name? Practical Comparison | AEObility",
  description: "Understand the practical differences between SEO and AEO. Learn when to prioritise AEO, how AI engines select source facts, and how to assess your business visibility.",
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
        "name": "Is AEO Just SEO with a New Name? Practical Comparison",
        "description": "A practical comparison of Answer Engine Optimisation (AEO) and Search Engine Optimisation (SEO), guiding business decision-making and content architecture.",
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
            "name": "How does AEO differ from traditional SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO improves overall page visibility in search engines. AEO structures content into clear, self-contained sections (atomic answer blocks) that make it easy for AI engines to parse, rerank, and cite specific facts in conversational summaries."
            }
          },
          {
            "@type": "Question",
            "name": "How do AI answer engines choose their sources?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI engines do not rely on a single formula. They use hybrid retrieval systems combining keyword matching, vector proximity, passage reranking, entity verification, and site authority. Clarity, directness, and factual evidence determine which sources get cited."
            }
          },
          {
            "@type": "Question",
            "name": "What stops my business from showing up in AI search?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ambiguous content, key facts hidden behind client-side JavaScript tabs, inconsistent business data across directories, blocking user-agents (like OAI-SearchBot), or failing to provide answer-first passages in the top 150 words of a section."
            }
          }
        ]
      }
    ]
  };

  const comparisonTable = [
    {
      area: "Primary aim",
      seo: "Help relevant people find and visit your site",
      aeo: "Make business information clear and reusable in AI-mediated discovery"
    },
    {
      area: "Main focus",
      seo: "Search demand, technical health, content quality, authority and local visibility",
      aeo: "Entity clarity, concise answers, source consistency, structured information and coverage of likely questions"
    },
    {
      area: "Content approach",
      seo: "Useful pages built around search intent",
      aeo: "Useful pages plus self-contained sections that answer a specific question clearly"
    },
    {
      area: "Success signals",
      seo: "Rankings, impressions, traffic, leads and revenue",
      aeo: "Brand mentions, accurate representation, referral visibility and assisted conversions"
    },
    {
      area: "Still needed?",
      seo: "Yes",
      aeo: "Yes, where AI search matters to the audience"
    }
  ];

  const beforeAfterExamples = [
    {
      question: "“Who offers emergency plumbing in Perth?”",
      weak: "A service page with generic sales copy, hidden emergency pricing, and vague service areas.",
      better: "A clear service definition, service area list, 24/7 availability details, contact pathway, customer reviews, and consistent business NAP details."
    },
    {
      question: "“Is AEO different from SEO?”",
      questionSub: "Commercial search intent",
      weak: "A jargon-heavy technical explanation referencing unverified token limits or hidden algorithm formulas.",
      better: "A direct answer first, comparison context next, then evidence, practical business impact, and next steps."
    }
  ];

  const prioritizingAeoCriteria = [
    "Customers ask detailed technical or commercial questions before contacting you.",
    "Your business relies on local relevance, trust, and clear service information.",
    "Important business information is scattered across pages, profiles, PDFs, or directories.",
    "You are appearing inconsistently - or incorrectly - across AI search tools.",
    "You already invest in SEO and want to improve how accurately your business is represented in emerging search experiences."
  ];

  const prioritizingSeoCriteria = [
    "Your site has crawlability, speed, indexation, or major technical problems.",
    "You lack useful service, product, location, or FAQ content.",
    "Your Google Business Profile, citations, and on-page business details are inconsistent.",
    "You have little evidence of customer trust, local relevance, or industry expertise."
  ];

  const methodologySteps = [
    {
      num: "1",
      title: "Audit visibility and source consistency",
      desc: "Identify conflicting, missing, or unclear information across website content, structured data, Google Business Profile, and third-party web directories."
    },
    {
      num: "2",
      title: "Map high-value customer questions",
      desc: "Prioritise commercial and technical questions that directly influence customer discovery, evaluation, and purchasing decisions."
    },
    {
      num: "3",
      title: "Strengthen content and entity clarity",
      desc: "Improve page structure, service details, location signals, atomic answer passages, and Schema.org markup where appropriate."
    },
    {
      num: "4",
      title: "Validate and iterate",
      desc: "Monitor brand representation, AI referral patterns, search visibility metrics, and lead quality over time."
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
      q: "How does AEO differ from traditional SEO?",
      a: "SEO improves overall page visibility in search engines. AEO structures content into clear, self-contained sections (atomic answer blocks) that make it easy for AI engines to parse, rerank, and cite specific facts in conversational summaries."
    },
    {
      q: "How do AI answer engines choose their sources?",
      a: "AI engines do not rely on a single formula. They use hybrid retrieval systems combining keyword matching, vector proximity, passage reranking, entity verification, and site authority. Clarity, directness, and factual evidence determine which sources get cited."
    },
    {
      q: "What stops my business from showing up in AI search?",
      a: "Ambiguous content, key facts hidden behind client-side JavaScript tabs, inconsistent business data across directories, blocking user-agents (like OAI-SearchBot), or failing to provide answer-first passages in the top 150 words of a section."
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
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full flex flex-col gap-12">
        <article className="flex flex-col gap-12">

          {/* 1. Hero: Reframed Core Message & 10-Second Above the Fold */}
          <header className="space-y-6 border-b border-white/10 pb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <Scale className="w-3.5 h-3.5" />
              <span>AEO vs SEO &bull; Decision Framework</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Is AEO Just SEO with a <span className="text-gradient-aeo">New Name?</span>
            </h1>

            <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed font-serif">
              Not quite. SEO still helps people find your website. AEO helps make your business information easier for AI-powered search experiences to understand, use and reference. The strongest strategy does both.
            </p>

            {/* 10-Second Quick Answer Card */}
            <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-4 shadow-xl">
              <h2 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
                10-Second Decision Guide
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                  <span className="text-purple-400 font-bold font-mono">Is SEO still worth doing?</span>
                  <p className="text-white/90 font-semibold">Yes.</p>
                  <p className="text-white/60 text-[11px]">It remains the primary engine for organic traffic and site discovery.</p>
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

          {/* 2. SEO vs AEO Comparison Table */}
          <section id="comparison-table" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Comparing SEO and AEO in Practice
              </h2>
              <p className="text-sm text-white/70 font-light">
                A scannable breakdown of how traditional search engine optimisation and answer engine optimisation focus on different aspects of customer discovery.
              </p>
            </div>

            <div className="overflow-x-auto border border-white/10 rounded-2xl bg-neutral-950 shadow-2xl">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 font-mono text-xs uppercase text-aeo-cyan">
                    <th className="p-4 font-bold w-1/5">Area</th>
                    <th className="p-4 font-bold w-2/5">SEO</th>
                    <th className="p-4 font-bold w-2/5">AEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-sans">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
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

          {/* 3. What This Means for Your Business & Before-and-After Example */}
          <section id="practical-example" className="space-y-6 border-t border-white/10 pt-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                What This Means for Your Business
              </h2>
              <p className="text-sm text-white/70 font-light">
                AEO changes how deliberately you organise and express information across digital touchpoints.
              </p>
            </div>

            {/* Practical FAQ Explanation */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <h3 className="text-lg font-bold text-white">What does AEO change on my website?</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif">
                It changes how deliberately you organise and express information. We make core facts consistent across your website, Google Business Profile and relevant directories; clarify the entities your business is connected to; and create pages or sections that answer important customer questions directly. This can support visibility across traditional search and AI-assisted discovery, but it does not guarantee a specific platform will cite your business.
              </p>
            </div>

            {/* Before-and-After Comparison Table */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white">Before-and-After Content Example</h3>
              <div className="overflow-x-auto border border-white/10 rounded-2xl bg-neutral-950 shadow-2xl">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5 font-mono text-xs uppercase text-white/60">
                      <th className="p-4 font-bold w-1/4">Customer Question</th>
                      <th className="p-4 font-bold w-3/8 text-red-400">Weak Page Response</th>
                      <th className="p-4 font-bold w-3/8 text-aeo-cyan">Better Answer-Ready Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-sans">
                    {beforeAfterExamples.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-white">
                          <p>{row.question}</p>
                          {row.questionSub && <span className="text-[10px] text-white/40 font-mono font-normal block mt-1">{row.questionSub}</span>}
                        </td>
                        <td className="p-4 text-white/60 leading-relaxed font-light">{row.weak}</td>
                        <td className="p-4 text-white/90 leading-relaxed font-normal bg-aeo-cyan/[0.02]">{row.better}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 4. "When You Need It" Decision Section */}
          <section id="decision-section" className="space-y-6 border-t border-white/10 pt-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                When to Prioritise AEO
              </h2>
              <p className="text-sm text-white/70 font-light">
                Self-qualify your business needs to determine whether to invest in AEO practices or focus on core SEO foundations first.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Prioritise AEO Box */}
              <div className="p-6 bg-neutral-950 border border-aeo-cyan/30 rounded-2xl space-y-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-aeo-cyan" />
                  <h3 className="text-lg font-bold text-white">AEO is likely worth prioritising if:</h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-white/80 font-serif">
                  {prioritizingAeoCriteria.map((criterion, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                      <span className="leading-relaxed">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Focus on SEO Foundations Box */}
              <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">Start with SEO foundations if:</h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-white/70 font-serif">
                  {prioritizingSeoCriteria.map((criterion, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-2" />
                      <span className="leading-relaxed">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Honest Methodology Block: How AEObility Approaches the Work */}
          <section id="methodology" className="space-y-6 border-t border-white/10 pt-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                How AEObility Approaches the Work
              </h2>
              <p className="text-sm text-white/70 font-light">
                Our practical methodology turns AEO from a conceptual claim into clear, actionable technical improvements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {methodologySteps.map((step, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2.5 hover:border-aeo-cyan/30 transition-all">
                  <div className="w-7 h-7 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan font-mono font-bold text-xs">
                    {step.num}
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">{step.title}</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Optional Technical Explainer Accordion (Progressive Disclosure) */}
          <section id="technical-explainer" className="space-y-4 border-t border-white/10 pt-8">
            <details className="group border border-white/10 bg-neutral-950 rounded-2xl overflow-hidden shadow-xl transition-all">
              <summary className="p-6 cursor-pointer flex items-center justify-between font-bold text-base text-white hover:text-aeo-cyan transition-colors list-none select-none">
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-aeo-cyan" />
                  <span>Technical Explainer: How AI Systems Process Information (Optional Detail)</span>
                </div>
                <ChevronDown className="w-5 h-5 text-white/50 group-open:rotate-180 transition-transform" />
              </summary>
              
              <div className="p-6 pt-2 border-t border-white/5 space-y-4 text-xs sm:text-sm text-white/75 font-serif leading-relaxed">
                <p>
                  AI-powered search products can combine several retrieval and ranking methods, so clarity, source quality and consistent business information matter.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                    <strong className="text-white font-sans font-bold text-xs block text-aeo-cyan">Hybrid Retrieval:</strong>
                    <p className="text-xs text-white/70 font-sans">
                      Search systems fetch web pages by combining lexical keyword matching (such as BM25) with semantic vector proximity.
                    </p>
                  </div>
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                    <strong className="text-white font-sans font-bold text-xs block text-aeo-cyan">Passage Reranking:</strong>
                    <p className="text-xs text-white/70 font-sans">
                      Short, self-contained sections can make a page easier for people and systems to interpret, especially when each section answers one question clearly.
                    </p>
                  </div>
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                    <strong className="text-white font-sans font-bold text-xs block text-aeo-cyan">Entity Corroboration:</strong>
                    <p className="text-xs text-white/70 font-sans">
                      Systems verify business facts across public registries, Knowledge Graphs, and third-party directories to corroborate accuracy before synthesis.
                    </p>
                  </div>
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                    <strong className="text-white font-sans font-bold text-xs block text-aeo-cyan">Citation Realities:</strong>
                    <p className="text-xs text-white/70 font-sans">
                      Improving the chances that your information can be understood and represented accurately is the core goal; no platform can guarantee citations.
                    </p>
                  </div>
                </div>
              </div>
            </details>
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

              <Link href="/solutions/aeo-blueprint" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block group">
                <span className="text-[11px] font-mono text-purple-400 font-bold uppercase">Ready for an action plan?</span>
                <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors flex items-center justify-between">
                  <span>See the AEO Blueprint</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Our comprehensive strategic roadmap for establishing machine-readable entity authority.
                </p>
              </Link>

              <Link href="/diagnostic" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block group">
                <span className="text-[11px] font-mono text-aeo-cyan font-bold uppercase">Need to assess your business first?</span>
                <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors flex items-center justify-between">
                  <span>Run a visibility diagnostic</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Measure how generative search engines currently perceive and reference your brand.
                </p>
              </Link>
            </div>
          </section>

          {/* 9. Stronger Conversion CTA Block (Bottom) */}
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

          {/* Bottom-Up Link to Root Hub */}
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
