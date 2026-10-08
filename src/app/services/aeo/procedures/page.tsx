import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { getAeoProceduresSchemaGraph } from '@/lib/schema/aeoProcedures';
import FaqAccordion from '@/components/FaqAccordion';
import AeoDiagnosticSection from '@/components/services/AeoDiagnosticSection';
import AeoContactSection from '@/components/services/AeoContactSection';
import AeoStartingPointGrid from '@/components/services/AeoStartingPointGrid';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  FileCheck,
  Code
} from 'lucide-react';

export const metadata: Metadata = {
  title: "AEO Strategies & Execution Procedures | AEObility",
  description: "Actionable Answer Engine Optimisation procedures: atomic answer block structuring, nested JSON-LD schema, entity authority building, and RAG retrieval optimisation.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/procedures",
  },
  openGraph: {
    title: "AEO Strategies & Execution Procedures | AEObility",
    description: "Actionable Answer Engine Optimisation procedures: atomic answer block structuring, nested JSON-LD schema, entity authority building, and RAG retrieval optimisation.",
    url: "https://aeobility.com.au/services/aeo/procedures",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/services/aeo-procedures-and-strategies_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility step-by-step AEO procedure guide illustrating atomic answer block structuring, nested JSON-LD schema, and RAG retrieval optimisation.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AEO Strategies & Execution Procedures | AEObility",
    description: "Actionable Answer Engine Optimisation procedures: atomic answer block structuring, nested JSON-LD schema, entity authority building, and RAG retrieval optimisation.",
    images: ["https://aeobility.com.au/images/services/aeo-procedures-and-strategies_AEObility.webp"],
  },
  keywords: [
    "aeo strategies",
    "aeo procedures",
    "rag retrieval optimisation",
    "atomic answer block structuring",
    "json-ld schema graph deployment"
  ]
};

export const AEO_PROCEDURES_INTERNAL_LINKS = [
  {
    targetSlug: "/services/aeo",
    anchorText: "Canonical AEO Hub",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-sprint",
    anchorText: "focused micro-sprints",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-blueprint",
    anchorText: "The AEObility Blueprint",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions",
    anchorText: "View current service pricing and scope",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function AEOProceduresPage() {
  const faqs = [
    {
      question: "What are the most effective AEO procedures for Australian businesses?",
      answer: "The most effective procedures include structuring content with question-based H2/H3 headings, writing 40–60 word self-contained atomic answer summaries, deploying nested JSON-LD schema (Organisation, Service, Offer, LocalBusiness), and building contextual internal links."
    },
    {
      question: "How does RAG chunking affect website content?",
      answer: "Retrieval-Augmented Generation (RAG) models split long pages into text chunks for embedding matching. If a paragraph relies on vague context from three sections above, the RAG chunk loses meaning. Writing self-contained answer units prevents context dilution."
    },
    {
      question: "Can I deploy AEO procedures on any CMS platform?",
      answer: "Yes. AEObility AEO procedures can be deployed across custom Next.js/React codebases, WordPress, Shopify, Webflow, or Squarespace. We provide clear code snippets and technical handover notes."
    },
    {
      question: "What is included in a $495 AUD AEO Micro-Sprint?",
      answer: "A $495 AUD Micro-Sprint targets one agreed technical priority: Schema Markup Deployment, Single Page Atomic Rewrite, or Category Answer Unit. It includes validation checks, a summary of completed changes, and handover notes."
    },
    {
      question: "What is the difference between an AEO Micro-Sprint and the Blueprint?",
      answer: "A Micro-Sprint ($495 AUD ex. GST) executes one specific technical fix within 4–5 business days. The AEObility Blueprint ($995 AUD ex. GST) provides a comprehensive digital presence audit and prioritised 90-day execution roadmap, which is 100% credited if you proceed with Foundation Implementation."
    },
    {
      question: "How long do AEO procedures take to implement?",
      answer: "Targeted Micro-Sprints are delivered within 4–5 business days after scope and access confirmation. Foundation Implementation is delivered across a structured four-week schedule."
    }
  ];

  const formattedFaqs = faqs.map((f) => ({
    q: f.question,
    a: f.answer,
  }));

  const strategies = [
    {
      id: "strategy1",
      number: "01",
      title: "Question-Based Semantic Headings",
      description: "Structure content using H2 and H3 headings phrased as natural-language questions (e.g. 'What is included in an AEO sprint?'). This creates explicit conceptual boundaries that prevent context dilution during RAG scraper ingestion."
    },
    {
      id: "strategy2",
      number: "02",
      title: "Self-Contained Atomic Answer Blocks",
      description: "Place concise 40–60 word answer summaries directly beneath section headings. Provide direct facts, numbers, and scope criteria so search systems can extract clean passages."
    },
    {
      id: "strategy3",
      number: "03",
      title: "Nested JSON-LD Schema Graphs",
      description: "Inject explicit machine-readable context connecting Organisation, LocalBusiness, Service, and Offer nodes to establish entity authority."
    },
    {
      id: "strategy4",
      number: "04",
      title: "Contextual Internal Linking Lattice",
      description: "Link core service pages to specific technical sub-nodes using descriptive, keyword-rich anchor text to pass semantic authority downward."
    },
    {
      id: "strategy5",
      number: "05",
      title: "Corroborated External Citation Alignment",
      description: "Standardise business NAP data, directory citations, and brand facts to build machine trust across search engines and AI platforms."
    },
    {
      id: "strategy6",
      number: "06",
      title: "Passage-Level `@id` Anchor Mapping",
      description: "Assign explicit element IDs (`#ss1micro`, `#bpstrat`, `#faq`) matching JSON-LD schema `@id` parameters to facilitate direct passage extraction."
    }
  ];

  const jsonLdGraph = getAeoProceduresSchemaGraph(faqs);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Unified JSON-LD Connected Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar subnavItems={HUB_SUBNAV_MAPS.aeo} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. Hero Block with Clean Featured WebP Image Backdrop & Overlaid CTAs */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium font-mono">
              <Sparkles className="w-4 h-4 text-aeo-cyan" />
              <span>AEO Strategies &amp; Execution Procedures</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Best AEO Strategies: <span className="text-gradient-aeo">Make Your Business AI-Readable</span>
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Actionable procedures for structured data, atomic answer blocks, entity authority, and RAG retrieval optimisation. Clear scope. Flat rates.
              </h2>
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>Foundation Implementation from $3,195 AUD ex. GST</span>
              </div>
            </div>

            {/* Featured 1200x800 WebP Image Hero Banner with Overlaid CTAs */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/services/aeo-procedures-and-strategies_AEObility.webp"
                alt="AEObility step-by-step AEO procedure guide illustrating atomic answer block structuring, nested JSON-LD schema, and RAG retrieval optimisation."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-3.5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Deploy actionable AEO procedures on your website today.</span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 font-serif block">Typical delivery: 4–5 business days from confirmed scope and access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <a
                    href="#procedure-contact-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Discuss AEO Procedures</span>
                  </a>
                  <a
                    href="#procedure-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-white font-semibold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Run a free AEO scan</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Learn how AEO differs from legacy SEO on our <Link href="/services/aeo/comparison" className="text-cyan-400 hover:underline font-medium">AEO vs SEO Comparison page</Link> or review <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">focused micro-sprints</Link>.
            </p>
          </section>

          {/* 2. "Choose Your Starting Point" Engagement Grid */}
          <section id="engagement-paths" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Choose Your Starting Point</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Select a targeted micro-sprint, a comprehensive foundation implementation, or a diagnostic audit.</p>
            </div>

            <AeoStartingPointGrid 
              contactAnchor="#procedure-contact-form"
              diagnosticAnchor="#procedure-diagnostic-form"
            />

            {/* Clean 3-Tier Comparison Matrix Table */}
            <div id="procedure-comparison" className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-md scroll-mt-24">
              <table className="w-full text-left text-xs font-serif border-collapse min-w-[580px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    <th className="p-3.5 sm:p-4">Service / Tier</th>
                    <th className="p-3.5 sm:p-4">Target Scope</th>
                    <th className="p-3.5 sm:p-4">Best For</th>
                    <th className="p-3.5 sm:p-4 text-right">Price (ex. GST)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEO Technical Micro-Sprint</td>
                    <td className="p-3.5 sm:p-4">1 Defined Priority Page / Schema Fix</td>
                    <td className="p-3.5 sm:p-4">Quick fix for one specific issue</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $495 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEObility Blueprint</td>
                    <td className="p-3.5 sm:p-4">Full Digital Audit &amp; 90-Day Roadmap</td>
                    <td className="p-3.5 sm:p-4">Unclear what is limiting search visibility</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">$995 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Foundation Implementation</td>
                    <td className="p-3.5 sm:p-4">Connected Multi-Page &amp; Entity Fixes</td>
                    <td className="p-3.5 sm:p-4">Connected improvements across core services</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $3,195 AUD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Inclusions Box */}
            <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-5 text-xs text-zinc-300 font-serif leading-relaxed space-y-3 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span>Every AEObility Engagement includes:</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300 font-serif">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>One agreed business priority, specified schema deployment, or page rewrite work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Validation checks, summary of completed changes, and handover notes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Typical delivery: 4–5 business days for Micro-Sprints. View <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">current service pricing and scope</Link>.</span>
                </li>
              </ul>
            </div>

            {/* Deliverables Ownership Statement */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">You own the agreed deliverables</strong>
                  <span>Use completed code and handover notes with your internal developer, or ask AEObility to implement the agreed changes.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. 6 Core AEO Strategies */}
          <section id="procedure-strategies" className="border-t border-white/10 pt-16 space-y-10 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">6 Core AEO Strategies for Machine Understanding</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Actionable engineering procedures designed for modern search engines and AI platforms.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategies.map((strategy) => (
                <div id={strategy.id} key={strategy.id} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 text-left hover:border-cyan-500/40 transition scroll-mt-24">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                      STRATEGY {strategy.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">{strategy.title}</h3>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Diagnostic & Contact Forms */}
          <AeoDiagnosticSection id="procedure-diagnostic-form" />
          <AeoContactSection id="procedure-contact-form" defaultService="micro-sprint" />

          {/* 5. FAQ Accordion Section */}
          <section id="faq-procedures" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-zinc-300 font-serif">Everything you need to know about implementing AEO procedures.</p>
            </div>

            <FaqAccordion items={formattedFaqs} />
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
