import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  ShoppingBag, 
  Code2, 
  Database, 
  Server, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Search, 
  Zap, 
  AlertTriangle, 
  Sparkles,
  FileText,
  HelpCircle,
  TrendingUp,
  Cpu,
  BarChart3,
  CheckSquare,
  XCircle
} from 'lucide-react';

export const metadata = {
  title: "Shopify AEO Services & Liquid Schema Refactoring | AEObility",
  description: "Ranked #1 on Google but invisible in ChatGPT? Technical AEO services for Shopify stores including SSR Liquid refactoring, structured feeds, GTIN enrichment, and AI ingestion architecture.",
  keywords: [
    "shopify aeo services",
    "ecommerce ai search",
    "shopify structured data perth",
    "shopify liquid schema refactoring",
    "google merchant center feed optimisation",
    "ai search e-commerce australia",
    "why isnt my shopify store showing in chatgpt"
  ],
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/shopify",
  },
};

export default function ShopifyAEOPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/services/aeo/shopify#webpage",
        "name": "Shopify AEO Services & Liquid Schema Refactoring",
        "description": "Technical AEO services for Shopify stores including SSR Liquid refactoring, structured feeds, GTIN enrichment, and AI ingestion architecture.",
        "url": "https://aeobility.com.au/services/aeo/shopify",
        "isPartOf": { "@id": "https://aeobility.com.au/#website" },
        "primaryImageOfPage": { "@id": "https://aeobility.com.au/services/aeo/shopify#banner" },
        "about": { "@id": "https://aeobility.com.au/services/aeo/shopify#service" },
        "breadcrumb": { "@id": "https://aeobility.com.au/services/aeo/shopify#breadcrumb" }
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/aeo/shopify#service",
        "name": "Shopify AEO Services",
        "serviceType": "Answer Engine Optimisation (AEO)",
        "provider": { "@id": "https://aeobility.com.au/#organisation" },
        "description": "Refactoring Shopify Liquid architecture for server-side JSON-LD, structured feeds, GTIN enrichment, and AI ingestion readiness.",
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "hasPart": [
          { "@id": "https://aeobility.com.au/services/aeo/shopify#moduleA" },
          { "@id": "https://aeobility.com.au/services/aeo/shopify#moduleB" },
          { "@id": "https://aeobility.com.au/services/aeo/shopify#moduleC" }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://aeobility.com.au/services/aeo/shopify#moduleA",
        "name": "Module A: Liquid Architecture & Server-Side RAG",
        "description": "Refactor Liquid snippets to output SSR Product, Offer, and FAQPage JSON-LD schemas.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Inject SSR JSON-LD Product schema",
            "text": "Inject static server-side Product microdata into snippet templates."
          },
          {
            "@type": "HowToStep",
            "name": "Inject SSR Offer schema",
            "text": "Ensure currency, pricing, and stock availability render directly into server HTML."
          },
          {
            "@type": "HowToStep",
            "name": "Inject SSR FAQPage schema",
            "text": "Structure product Q&A accordions as static JSON-LD blocks."
          },
          {
            "@type": "HowToStep",
            "name": "Remove JS-dependent microdata delays",
            "text": "Bypass client-side AJAX hydration loops for first-pass crawler execution."
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://aeobility.com.au/services/aeo/shopify#moduleB",
        "name": "Module B: Feed Engineering & Catalog Enrichment",
        "description": "Enhance Google Merchant Center feeds with GTINs, situational use-case tags, and enriched product attributes."
      },
      {
        "@type": "HowTo",
        "@id": "https://aeobility.com.au/services/aeo/shopify#moduleC",
        "name": "Module C: AI Referral Measurement & Conversion Tracking",
        "description": "Implement server-side conversion rules, UTM arrays, and prompt referral tracking."
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/aeo/shopify#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why isn't my Shopify store showing up in ChatGPT or Perplexity?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Crawl failures, thin data, missing GTINs, and off-page corroboration gaps prevent AI engines from citing your store."
            }
          },
          {
            "@type": "Question",
            "name": "How does Shopify AEO differ from traditional e-commerce SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional e-commerce SEO targets keyword rankings for human browsers. Shopify AEO refactors Liquid templates and feeds for server-side RAG ingestion, ensuring AI assistants understand and cite exact product entity attributes."
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://aeobility.com.au/services/aeo/shopify#checklist",
        "name": "Shopify AI Readiness Checklist",
        "itemListElement": [
          "Server-side product specifications",
          "GPTBot allowed in robots.txt.liquid",
          "Valid Product & Offer JSON-LD schema",
          "Situational use-case attributes"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/services/aeo/shopify#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "AEO Services",
            "item": "https://aeobility.com.au/services/aeo"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Shopify AEO Services",
            "item": "https://aeobility.com.au/services/aeo/shopify"
          }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/services/aeo/shopify#banner",
        "name": "Shopify AEO Services Banner",
        "description": "Shopify AEO Services & AI Search Optimisation architecture diagram depicting Liquid schema refactoring, RAG vector indexing, and Google Merchant Center feed rules for e-commerce stores by AEObility in Perth Western Australia",
        "url": "https://aeobility.com.au/shopify-seo-for-ai-search_AEObility.webp"
      },
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organisation",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "logo": "https://aeobility.com.au/Profile-Picture-Vinnie.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Perth St",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "postalCode": "6000",
          "addressCountry": "AU"
        }
      }
    ]
  };

  const tradeOffs = [
    {
      implementation: "Liquid Refactoring (SSR)",
      fix: "Ensures AI crawlers extract product specifications and FAQs directly from static HTML without executing JavaScript.",
      limit: "Does not force an LLM to recommend your product over a competitor with higher external domain authority."
    },
    {
      implementation: "Enriched JSON-LD Schema",
      fix: "Provides unambiguous price, availability, variant, and GTIN data directly to search engine bots.",
      limit: "Cannot fix inaccurate inventory feeds or poor customer review sentiment on third-party sites."
    },
    {
      implementation: "Merchant Center Feed Rules",
      fix: "Standardises product attributes for AI shopping assistants and Google AI Overviews.",
      limit: "Does not guarantee zero-click answer placement if off-page entity corroboration is low."
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
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Navigation Links & Entity Map */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl sticky top-24">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">AEO Knowledge Hub</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/services/aeo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Hub Overview
              </Link>
              <Link href="/services/aeo/definition" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                1. What is AEO and why does it matter?
              </Link>
              <Link href="/services/aeo/comparison" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                2. Is AEO just SEO with a new name?
              </Link>
              <Link href="/services/aeo/procedures" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                3. Best AEO Strategies &amp; Procedures
              </Link>
              <Link href="/services/aeo/constraints" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                4. What stops my business from showing up?
              </Link>
              <Link href="/services/aeo/costs-timing" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                5. How much does AEO cost &amp; what do I get?
              </Link>
              <div className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                6. Shopify AEO Services
              </div>
              <Link href="/services/aeo/local-business" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                7. Local Business Visibility
              </Link>
            </nav>
          </div>
        </aside>

        {/* Right Side: Core Content */}
        <section className="lg:col-span-8 flex flex-col gap-12">
          
          {/* SECTION 1: Hero & Opening Answer Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>E-commerce Answer Engine Architecture</span>
            </div>

            {/* Hero Web Banner */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/60 shadow-2xl my-4">
              <Image
                src="/shopify-seo-for-ai-search_AEObility.webp"
                alt="Shopify AEO Services & AI Search Optimisation architecture diagram depicting Liquid schema refactoring, RAG vector indexing, and Google Merchant Center feed rules for e-commerce stores by AEObility in Perth Western Australia"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Shopify AEO &amp; <br />
              <span className="text-gradient-aeo">E-commerce Ingestion Architecture</span>
            </h1>

            {/* Sceptic-Aware Subheading */}
            <p className="text-lg text-amber-300/90 font-medium leading-relaxed border-l-2 border-amber-400 pl-4 py-1 bg-amber-950/10">
              Ranked #1 on Google but invisible in ChatGPT? Traditional rankings no longer guarantee AI recommendations. Here is how we fix your store&apos;s underlying ingestion mechanics.
            </p>

            {/* 100-Word Opening Answer Block */}
            <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900/60 to-transparent border-l-4 border-aeo-cyan rounded-r-2xl space-y-3">
              <span className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">The E-commerce Ingestion Gap Explained</span>
              <p className="text-white/90 text-sm font-medium leading-relaxed">
                Most Shopify stores fail in AI search because Large Language Model (LLM) scrapers skip client-side JavaScript accordions, missing GTIN barcodes, and unlinked product context. Traditional Shopify themes render data for human eyes, leaving AI bots with empty passages. Answer Engine Optimisation (AEO) refactors your theme&apos;s Liquid architecture, injecting server-side JSON-LD microdata, structuring product specifications into atomic RAG answer blocks, and aligning Google Merchant Center feeds so conversational search engines can parse, verify, and cite your store on first pass.
              </p>

              {/* Immediate Hero CTA */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/diagnostic"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.3)]"
                >
                  <span>Run Free Store Scan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs text-white/50 font-mono font-light">Takes 60 seconds • No lock-in</span>
              </div>
            </div>
          </div>

          {/* SECTION 2: The Invisibility Diagnosis (Why Am I Not Appearing?) */}
          <div className="space-y-6 border-t border-white/10 pt-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs text-amber-400 font-mono font-semibold uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>The Invisibility Diagnosis</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Why isn&apos;t my Shopify store showing up in ChatGPT or Perplexity?
              </h2>
              <p className="text-white/70 text-sm font-light">
                If your Shopify store generates organic search clicks but receives zero mentions in AI assistants, your catalog is suffering from three core operational blockers:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span>1. Crawl &amp; Rendering Failures</span>
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  AI scrapers like <code className="text-aeo-cyan font-mono">GPTBot</code> or <code className="text-aeo-cyan font-mono">PerplexityBot</code> are frequently blocked inside default <code className="text-aeo-cyan font-mono">robots.txt.liquid</code> files, or they bounce when key product specifications are hidden behind client-side AJAX tab accordions.
                </p>
                <div className="pt-1">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-aeo-cyan bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    <span>Atomic Block: Server-side rendering ensures 100% crawler passage capture</span>
                  </span>
                </div>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span>2. Thin Data &amp; Missing Entity Signals</span>
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Missing GTIN barcodes, vague product titles, or copied manufacturer descriptions force RAG models to discard your pages. AI models require explicit structured facts to cite a brand with high confidence score.
                </p>
                <div className="pt-1">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-aeo-cyan bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    <span>Atomic Block: GTIN + Product entity schema anchors product confidence</span>
                  </span>
                </div>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span>3. Off-Page Corroboration Gaps</span>
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  LLM search engines check multi-source corroboration before recommending products. If your store lacks third-party mentions, verified directory schema links, or Reddit discussions, models default to better-known marketplace entities.
                </p>
                <div className="pt-1">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-aeo-cyan bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    <span>Atomic Block: Multi-node identity corroboration unlocks AI recommendations</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: Practitioner Action Framework (Modules A, B, C) */}
          <div className="space-y-8 border-t border-white/10 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Practitioner Action Framework
              </h2>
              <p className="text-white/70 text-sm font-light">
                Our step-by-step engineering roadmap for transforming Shopify catalogs into machine-readable e-commerce assets.
              </p>
            </div>

            {/* Module A */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <Code2 className="w-5 h-5 text-aeo-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Module A: Liquid Architecture &amp; Server-Side RAG</h3>
                  <span className="text-xs text-aeo-cyan font-mono font-semibold">Technical Implementation &amp; SSR Schemas</span>
                </div>
              </div>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                Standard themes load microdata after DOM hydration. We refactor Liquid snippets to output explicit JSON-LD Product, Offer, and FAQPage schemas directly into static server HTML on first HTTP pass:
              </p>
              <div className="p-4 bg-neutral-950 rounded-xl border border-white/10 font-mono text-xs text-emerald-400 overflow-x-auto">
                <pre>{`{% comment %} AEObility SSR Product JSON-LD Schema Snippet {% endcomment %}
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": {{ product.title | json }},
  "description": {{ product.description | strip_html | truncatewords: 50 | json }},
  "sku": {{ product.selected_or_first_available_variant.sku | json }},
  "gtin": {{ product.selected_or_first_available_variant.barcode | json }},
  "brand": { "@type": "Brand", "name": {{ product.vendor | json }} },
  "offers": {
    "@type": "Offer",
    "priceCurrency": {{ cart.currency.iso_code | json }},
    "price": "{{ product.price | money_without_currency | remove: ',' }}",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "{% if product.available %}https://schema.org/InStock{% else %}https://schema.org/OutOfStock{% endif %}",
    "url": "{{ shop.url }}{{ product.url }}"
  }
}
</script>`}</pre>
              </div>
              <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-white/60">
                <span>Schema Entity: HowTo #moduleA</span>
                <span className="text-aeo-cyan">Passage Density: High</span>
              </div>
            </div>

            {/* Module B */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <Database className="w-5 h-5 text-aeo-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Module B: Feed Engineering &amp; Catalog Enrichment</h3>
                  <span className="text-xs text-aeo-cyan font-mono font-semibold">Agentic Storefronts &amp; Situational Use Cases</span>
                </div>
              </div>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                Move beyond standard Google Merchant Center rules. We enrich feed vectors with situational use-case tags (&ldquo;best for sensitive skin&rdquo;, &ldquo;ideal for Perth summer climate&rdquo;), precise sizing, material compositions, and GTIN parameters to capture long-tail conversational shopping queries.
              </p>
              <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-white/60">
                <span>Schema Entity: HowTo #moduleB</span>
                <span className="text-aeo-cyan">Feed Alignment: 100%</span>
              </div>
            </div>

            {/* Module C */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <BarChart3 className="w-5 h-5 text-aeo-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Module C: AI Referral Measurement &amp; Conversion Tracking</h3>
                  <span className="text-xs text-aeo-cyan font-mono font-semibold">Attribution Integrity &amp; Prompt Analytics</span>
                </div>
              </div>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                Solve the &ldquo;black box analytics&rdquo; problem. We set up server-side conversion rules, custom UTM parameter arrays, and prompt referral tracking in Shopify Analytics to measure direct conversational traffic, prompt-assisted conversions, and buyer intent.
              </p>
              <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-white/60">
                <span>Schema Entity: HowTo #moduleC</span>
                <span className="text-aeo-cyan font-semibold">Attribution Status: Active</span>
              </div>
            </div>
          </div>

          {/* SECTION 4: Interactive "AI Visibility Diagnostic" Callout */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-aeo-cyan/10 via-neutral-950 to-aeo-purple/10 border border-white/15 rounded-3xl space-y-6 shadow-2xl border-t border-white/10 pt-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-aeo-cyan uppercase font-bold">
                <CheckSquare className="w-4 h-4" />
                <span>Shopify AI Readiness Checklist (ItemList Entity)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                How Machine-Readable Is Your Shopify Store Today?
              </h2>
              <p className="text-xs text-white/70 font-light">
                Check your store against these four critical ingestion requirements:
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs text-white/90">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                <span className="w-4 h-4 rounded border border-aeo-cyan flex items-center justify-center text-aeo-cyan font-bold">✓</span>
                <span>Are key product specifications rendered server-side in static HTML?</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                <span className="w-4 h-4 rounded border border-aeo-cyan flex items-center justify-center text-aeo-cyan font-bold">✓</span>
                <span>Is <code className="text-aeo-cyan font-mono">GPTBot</code> permitted in your <code className="text-aeo-cyan font-mono">robots.txt.liquid</code> template?</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                <span className="w-4 h-4 rounded border border-aeo-cyan flex items-center justify-center text-aeo-cyan font-bold">✓</span>
                <span>Do your product pages output valid <code className="text-aeo-cyan font-mono">Product</code> &amp; <code className="text-aeo-cyan font-mono">Offer</code> JSON-LD schema?</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                <span className="w-4 h-4 rounded border border-aeo-cyan flex items-center justify-center text-aeo-cyan font-bold">✓</span>
                <span>Are product attributes enriched with situational use cases (&ldquo;best for...&rdquo;)?</span>
              </div>
            </div>

            <div className="pt-2 text-center">
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-xs sm:text-sm transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.3)]"
              >
                <span>Run Store Diagnostic Scan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* SECTION 5: Claim Discipline & Trade-Offs Table */}
          <div className="space-y-6 border-t border-white/10 pt-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-aeo-cyan uppercase font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Practitioner Candour</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Claim Discipline &amp; Technical Trade-Offs</h2>
              <p className="text-xs text-white/70 font-light">
                We believe in full transparency. Here is exactly what technical AEO fixes achieve, and what they cannot control:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse border border-white/10">
                <thead>
                  <tr className="bg-white/5 text-aeo-cyan font-mono uppercase border-b border-white/10">
                    <th className="p-3 border-r border-white/10 font-bold">Implementation</th>
                    <th className="p-3 border-r border-white/10 font-bold">What It Fixes</th>
                    <th className="p-3 font-bold">What It Cannot Control</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80 font-light">
                  {tradeOffs.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="p-3 font-bold text-white border-r border-white/10 font-mono">{row.implementation}</td>
                      <td className="p-3 border-r border-white/10 leading-relaxed">{row.fix}</td>
                      <td className="p-3 text-white/60 leading-relaxed">{row.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 6: Zero-Click Search & ROI Caveat */}
          <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 border-t border-white/10">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-aeo-cyan" />
              <span>Addressing Zero-Click Search &amp; E-commerce ROI</span>
            </h3>
            <p className="text-xs text-white/80 font-light leading-relaxed">
              AI search engines frequently synthesise answers directly on the search page without sending raw impression traffic. However, when an AI recommendation <em>does</em> generate a referral click to your Shopify store, the buyer intent is significantly higher than traditional keyword search.
            </p>
            <p className="text-xs text-white/80 font-light leading-relaxed">
              Our strategy focuses on <strong>citation and recommendation dominance</strong>. By positioning your brand as the definitive factual source, we ensure your store captures high-converting customers at the exact moment of decision.
            </p>
          </div>

          {/* Sibling/Lateral Corridor navigation (Semantic Lattice) */}
          <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan">Semantic Connections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <Link href="/services/aeo/costs-timing" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors flex items-center justify-between">
                <span>How much does AEO cost &amp; what do I get?</span>
                <ArrowRight className="w-3.5 h-3.5 text-aeo-cyan" />
              </Link>
              <Link href="/services/aeo/local-business" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors flex items-center justify-between">
                <span>Local Business Visibility across Maps &amp; AI Search</span>
                <ArrowRight className="w-3.5 h-3.5 text-aeo-cyan" />
              </Link>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-8 bg-gradient-to-br from-aeo-cyan/10 via-neutral-950 to-aeo-purple/10 border border-white/15 rounded-3xl text-center space-y-4 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">Ready to Optimise Your Shopify Store for AI Search?</h3>
            <p className="text-xs text-white/70 max-w-lg mx-auto font-light leading-relaxed">
              Get a manual AI visibility scan for your Shopify store. Learn how ChatGPT, Google AI Overviews, and Perplexity parse your product catalog today.
            </p>
            <div className="pt-2">
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-xs sm:text-sm transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.3)]"
              >
                <span>Run Free Store Scan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bottom-Up Link to Root Hub */}
          <div className="pt-2 flex">
            <Link href="/services/aeo" className="text-xs font-medium text-white/40 hover:text-white transition-colors flex items-center gap-1">
              <span>&larr; Back to</span>
              <strong className="text-white hover:underline">AEO Services Overview</strong>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
