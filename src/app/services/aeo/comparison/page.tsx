import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { getAeoComparisonSchemaGraph } from '@/lib/schema/aeoComparison';
import FaqAccordion from '@/components/FaqAccordion';
import AeoDiagnosticSection from '@/components/services/AeoDiagnosticSection';
import AeoContactSection from '@/components/services/AeoContactSection';
import AeoStartingPointGrid from '@/components/services/AeoStartingPointGrid';
import { 
  ArrowRight, 
  Search, 
  Scale, 
  Calendar,
  Briefcase,
  ShoppingBag,
  MapPin,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "AEO vs SEO Comparison: Modern AI Search vs Legacy SEO | AEObility",
  description: "Compare traditional SEO with Answer Engine Optimisation (AEO). Learn how search foundation and machine clarity work together to cite your business in AI search.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/comparison",
  },
  openGraph: {
    title: "AEO vs SEO Comparison: Modern AI Search vs Legacy SEO | AEObility",
    description: "Compare traditional SEO with Answer Engine Optimisation (AEO). Learn how search foundation and machine clarity work together to cite your business in AI search.",
    url: "https://aeobility.com.au/services/aeo/comparison",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/services/aeo-vs-seo-comparison_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility AEO vs SEO comparison matrix chart contrasting legacy keyword search ranking against dense vector RAG retrieval systems.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AEO vs SEO Comparison: Modern AI Search vs Legacy SEO | AEObility",
    description: "Compare traditional SEO with Answer Engine Optimisation (AEO). Learn how search foundation and machine clarity work together to cite your business in AI search.",
    images: ["https://aeobility.com.au/images/services/aeo-vs-seo-comparison_AEObility.webp"],
  },
  keywords: [
    "aeo vs seo comparison",
    "answer engine optimisation vs seo",
    "ai search vs traditional search",
    "aeo micro-sprints",
    "aeobility blueprint"
  ]
};

export const AEO_COMPARISON_INTERNAL_LINKS = [
  {
    targetSlug: "/services/aeo",
    anchorText: "Canonical AEO Hub",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/aeo/procedures",
    anchorText: "AEO Strategies & Procedures",
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

export default function AEOVsSEOPage() {
  const faqs = [
    {
      question: "Is AEO a replacement for traditional SEO?",
      answer: "No. AEO complements traditional SEO. SEO ensures your website is crawlable, fast, and discoverable in organic search engines. AEO restructures your content and schema so digital assistants and AI search engines can parse, understand, and reference your business accurately."
    },
    {
      question: "What is the key difference between SEO, AEO, and GEO?",
      answer: "SEO focuses on keyword search ranking and organic traffic; AEO focuses on structured answer units and machine extraction for digital assistants; GEO (Generative Engine Optimisation) focuses on location vector nodes and proximity signals for maps and local AI search packs."
    },
    {
      question: "How do I know whether my business needs SEO or AEO first?",
      answer: "If your website has technical errors, broken pages, or indexing issues, fix SEO foundations first. If your website is indexed but customers are asking AI assistants (like ChatGPT or Perplexity) for business recommendations, AEO micro-sprints will help format your data."
    },
    {
      question: "What is included in a $495 AUD AEO Micro-Sprint?",
      answer: "A $495 AUD Micro-Sprint targets one agreed technical priority: Schema Markup Deployment, Single Page Atomic Rewrite, or Category Answer Unit. It includes validation checks, a summary of completed changes, and handover notes."
    },
    {
      question: "Can I credit my Blueprint fee towards Foundation Implementation?",
      answer: "Yes. If you complete the AEObility Blueprint and book Foundation Implementation within 60 days of handover, the full $995 AUD Blueprint fee is applied to the Foundation work. The credit applies to Foundation Implementation only, is applied to the agreed implementation fee and cannot be exchanged for cash."
    },
    {
      question: "Do you require ongoing monthly retainers or contracts?",
      answer: "No. AEObility AEO sprints are fixed-scope, flat-rate engagements. No ongoing monthly retainer or locked-in contract is required."
    }
  ];

  const formattedFaqs = faqs.map((f) => ({
    q: f.question,
    a: f.answer,
  }));

  const jsonLdGraph = getAeoComparisonSchemaGraph(faqs);

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

          {/* 1. Hero Block: SEO Foundation + AEO Layer */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium font-mono">
              <Scale className="w-4 h-4 text-aeo-cyan" />
              <span>Search Foundation + Answer Engine Layer</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              SEO Gets You Indexed. <span className="text-gradient-aeo">AEO Gets You Cited in AI Answers.</span>
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Traditional SEO builds your crawlability and organic ranking. Answer Engine Optimisation (AEO) layers machine clarity on top so AI search engines can extract, verify, and cite your business. <strong className="text-cyan-300 font-semibold">Get found in organic search. Get chosen in AI answers.</strong> Clear scope. Flat rates. No lock-in contracts.
              </h2>
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>The AEObility Blueprint $995 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>Foundation Implementation from $3,195 AUD ex. GST</span>
              </div>
            </div>

            {/* Featured 1200x800 WebP Image Hero Banner with Overlaid CTAs */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/services/aeo-vs-seo-comparison_AEObility.webp"
                alt="AEObility AEO vs SEO comparison matrix chart contrasting legacy keyword search ranking against dense vector RAG retrieval systems."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-3.5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix one technical gap or build a comprehensive AEO foundation.</span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 font-serif block">Typical delivery: 4–5 business days from confirmed scope and access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <a
                    href="#comparison-contact-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Discuss AEO vs SEO Strategy</span>
                  </a>
                  <a
                    href="#comparison-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-white font-semibold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Run a free strategy scan</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Explore step-by-step technical procedures on our <Link href="/services/aeo/procedures" className="text-cyan-400 hover:underline font-medium">AEO Procedures page</Link> or review <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">focused micro-sprints</Link>.
            </p>
          </section>

          {/* 2. Intro Narrative: Why SEO and AEO Work Best Together */}
          <section id="complementary-narrative" className="border-t border-white/10 pt-16 space-y-6 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">The Two Layers of Modern Search</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif">
                You do not have to choose between traditional SEO and Answer Engine Optimisation. They solve two different parts of the same customer journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm font-sans">
                  <Search className="w-4 h-4" />
                  <span>Layer 1: The SEO Foundation (Discoverability)</span>
                </div>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Ensures your website is fast, technically sound, crawlable, and authoritative in organic search results. Without solid SEO foundations, search crawlers and AI models cannot reliably find or index your pages.
                </p>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-cyan-500/30 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-purple-300 font-bold text-sm font-sans">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Layer 2: The AEO Extension (Comprehension &amp; Citation)</span>
                </div>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Restructures your visible content and schema markup into self-contained answer blocks and explicit entity relationships. This makes it effortless for generative search models to quote your pricing, verify your credentials, and recommend your services.
                </p>
              </div>
            </div>
          </section>

          {/* 3. "What This Means for Your Website" (Applied Page Changes) */}
          <section id="what-it-means" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">What This Means for Your Website</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif">Here is how layering AEO on top of strong SEO transforms your actual pages.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">Service Pages</h3>
                  <div className="space-y-2 text-xs text-zinc-300 font-serif">
                    <p><strong className="text-zinc-200 block">SEO Foundation:</strong> Targets high-intent keywords, meta tags, and backlinks.</p>
                    <p><strong className="text-cyan-300 block">What AEO Adds:</strong> Atomic Q&amp;A units, explicit deliverables, and connected Service schema.</p>
                    <p><strong className="text-zinc-200 block">Visible Live Change:</strong> Clear pricing tables, exact inclusions, and self-contained answer summaries that AI engines quote directly.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit">
                    <ShoppingBag className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">Product &amp; E-Commerce</h3>
                  <div className="space-y-2 text-xs text-zinc-300 font-serif">
                    <p><strong className="text-zinc-200 block">SEO Foundation:</strong> Optimises product titles, taxonomies, descriptions, and crawl depth.</p>
                    <p><strong className="text-purple-300 block">What AEO Adds:</strong> Verified specifications, use-case matching, and nested Offer schema.</p>
                    <p><strong className="text-zinc-200 block">Visible Live Change:</strong> Answers for comparative queries (e.g. &quot;Which model fits my space?&quot;), eliminating AI hallucination.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">Local &amp; Location Pages</h3>
                  <div className="space-y-2 text-xs text-zinc-300 font-serif">
                    <p><strong className="text-zinc-200 block">SEO Foundation:</strong> Manages Google Business Profile, NAP consistency, and local directory listings.</p>
                    <p><strong className="text-cyan-300 block">What AEO Adds:</strong> Verifiable local proximity nodes, regional service radius, and local proof signals.</p>
                    <p><strong className="text-zinc-200 block">Visible Live Change:</strong> AI assistants accurately cite your exact suburbs and service areas in multi-turn conversational searches.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Applied Contrast Matrix Table: SEO vs AEO vs GEO */}
          <section id="comparison-matrix" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">The Applied Contrast Matrix</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif">A practical breakdown of responsibilities across your search architecture.</p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-950/80 shadow-2xl">
              <table className="w-full text-left text-xs font-serif border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    <th className="p-4">Practical Dimension</th>
                    <th className="p-4 text-zinc-300">The SEO Foundation</th>
                    <th className="p-4 text-cyan-300">The AEO Layer</th>
                    <th className="p-4 text-purple-300">The Local GEO Extension</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Primary Job</td>
                    <td className="p-4">Earn rankings and clicks in organic search engines.</td>
                    <td className="p-4">Get extracted, summarised, and cited in AI answer engines.</td>
                    <td className="p-4">Dominate local map packs and voice/proximity queries.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">How It Works</td>
                    <td className="p-4">Search crawlers index page content and evaluate link authority.</td>
                    <td className="p-4">Retrieval systems match user questions to atomic, factual answer blocks on your site.</td>
                    <td className="p-4">AI assistants match customer location with verified geographic service areas.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Visible Site Changes</td>
                    <td className="p-4">Keyword-optimised page copy, clean URL structure, and fast load times.</td>
                    <td className="p-4">Standalone answer boxes, bulleted scope lists, and explicit pricing tables.</td>
                    <td className="p-4">Verified suburb service lists, local review highlights, and operating details.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Code &amp; Schema Work</td>
                    <td className="p-4">Canonical tags, XML sitemaps, and robots.txt rules.</td>
                    <td className="p-4 font-mono font-bold text-cyan-300">Nested JSON-LD graphs linking services, credentials, and evidence.</td>
                    <td className="p-4 font-mono font-bold text-purple-300">LocalBusiness schema with precise geolocation and verified address nodes.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Target Platforms</td>
                    <td className="p-4">Google Search, Bing Organic</td>
                    <td className="p-4">ChatGPT, Perplexity, Google AI Overviews, Copilot</td>
                    <td className="p-4">Google Maps, Apple Maps, Local Search Packs</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-white font-sans">Commercial Model</td>
                    <td className="p-4">Often sold as ongoing monthly retainers</td>
                    <td className="p-4 font-mono font-bold text-cyan-300">Fixed-Scope Micro-Sprints ($495 AUD)</td>
                    <td className="p-4 font-mono font-bold text-purple-300">Fixed-Scope Local Sprints ($495 to $695 AUD)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Pricing & Engagement Tiers */}
          <section id="engagement-paths" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Choose Your Starting Point</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif">Select a targeted micro-sprint, a comprehensive foundation implementation, or a diagnostic audit.</p>
            </div>

            <AeoStartingPointGrid 
              contactAnchor="#comparison-contact-form"
              diagnosticAnchor="#comparison-diagnostic-form"
            />
          </section>

          {/* 6. Diagnostic & Contact Forms */}
          <AeoDiagnosticSection id="comparison-diagnostic-form" />
          <AeoContactSection id="comparison-contact-form" defaultService="micro-sprint" />

          {/* 7. FAQ Accordion Section */}
          <section id="faq-comparison" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-zinc-300 font-serif">Everything you need to know about comparing AEO and traditional SEO.</p>
            </div>

            <FaqAccordion items={formattedFaqs} />
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
