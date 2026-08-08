import React from 'react';
import Link from 'next/link';
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
  Cpu
} from 'lucide-react';

export const metadata = {
  title: "Shopify AEO Services & Liquid Schema Refactoring | AEObility",
  description: "Optimise your Shopify store for ChatGPT, Perplexity, and Google AI Overviews. Refactor Liquid templates, server-side rendering, and product feeds for RAG indexation.",
  keywords: [
    "shopify aeo services",
    "ecommerce ai search",
    "shopify structured data perth",
    "shopify liquid schema refactoring",
    "google merchant center feed optimisation",
    "ai search e-commerce australia"
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
        "url": "https://aeobility.com.au/services/aeo/shopify",
        "name": "Shopify AEO Services & Liquid Schema Refactoring | AEObility",
        "description": "Optimise your Shopify store for AI search, ChatGPT recommendations, and Google Merchant Center through structured Liquid refactoring and server-side rules.",
        "publisher": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organisation",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        }
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/aeo/shopify#service",
        "name": "Shopify AEO Services & E-commerce Ingestion Architecture",
        "serviceType": "E-commerce Answer Engine Optimisation",
        "description": "Refactoring Shopify Liquid templates, JSON-LD microdata, server-side rendering (SSR), and feed rules to ensure product catalogs are indexed, parsed, and cited by AI search engines.",
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
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Shopify AEO Deliverables",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Liquid Template Schema Refactoring"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Merchant Center Feed Optimisation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Server-Side Conversion & Indexing Rules"
              }
            }
          ]
        }
      }
    ]
  };

  const pillars = [
    {
      title: "1. Liquid Template Refactoring",
      subtitle: "Server-Side Rendered (SSR) Schemas",
      description: "Standard Shopify themes rely heavily on client-side JavaScript hydration. We refactor Liquid snippets to output explicit JSON-LD Product and Offer microdata directly into server HTML on first pass.",
      icon: <Code2 className="w-5 h-5 text-aeo-cyan" />,
      features: [
        "Explicit Product, Offer, and AggregateRating schemas",
        "Variant array mapping with GTIN & MPN attributes",
        "Bypasses client-side rendering delays for Googlebot and LLM scrapers",
        "Server-rendered specifications and feature lists"
      ]
    },
    {
      title: "2. Google Merchant Center Feeds",
      subtitle: "Vector & Attribute Alignment",
      description: "AI shopping engines parse feed vectors to match conversational queries. We structure feed attributes to ensure high relevance across Google Shopping and generative search results.",
      icon: <Database className="w-5 h-5 text-aeo-cyan" />,
      features: [
        "Semantic product title and description enhancement",
        "Clean condition, availability, and brand parameters",
        "Structured category hierarchy matching Schema.org standards",
        "Automated feed validation to eliminate parsing errors"
      ]
    },
    {
      title: "3. RAG Retrieval & Passage Chunking",
      subtitle: "Atomic Product Answer Blocks",
      description: "Retrieval-Augmented Generation (RAG) models extract content in passage chunks. We structure product FAQs, materials, and usage guides into high-density atomic blocks for instant citation.",
      icon: <Cpu className="w-5 h-5 text-aeo-cyan" />,
      features: [
        "High-density Q&A sections using FAQPage microdata",
        "Clear table-based technical specifications",
        "Elimination of boilerplate fluff that dilutes vector similarity",
        "Topical entity grounding linking products to brand nodes"
      ]
    },
    {
      title: "4. Indexing & Crawl Priority Rules",
      subtitle: "Resolving GSC Discovery Delays",
      description: "Deep e-commerce subpages often stall in GSC's 'Discovered – currently not indexed' queue. We reinforce internal link depth and sitemap feeds to ensure fast indexation.",
      icon: <Server className="w-5 h-5 text-aeo-cyan" />,
      features: [
        "Contextual internal linking from high-authority hub pages",
        "Sitemap lastmod synchronization and canonical alignment",
        "Bypassing client-side JavaScript crawling bottlenecks",
        "Server-side conversion integrity and attribution protection"
      ]
    }
  ];

  const frameworkSteps = [
    {
      step: "01",
      title: "Live Inspection & Re-queueing",
      desc: "Perform live GSC URL inspections to confirm 200 OK headers, verify absence of noindex tags, and submit targeted re-crawl requests to Google's URL frontier."
    },
    {
      step: "02",
      title: "Contextual Internal Link Depth",
      desc: "Embed contextual do-follow links from high-authority parent hubs to move deep product and category pages within two clicks of the root domain."
    },
    {
      step: "03",
      title: "Sitemap & Feed Synchronization",
      desc: "Validate XML sitemaps and merchant feeds, matching canonical tags and timestamps across all discovery channels."
    },
    {
      step: "04",
      title: "Server-Side Liquid Refactoring",
      desc: "Inject SSR JSON-LD microdata directly into Shopify Liquid templates (`product.liquid`, `main-product.liquid`) so scrapers ingest complete entity facts on first pass."
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
        <section className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>E-commerce Answer Engine Architecture</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Shopify AEO &amp; <br />
              <span className="text-gradient-aeo">E-commerce Ingestion Architecture</span>
            </h1>
            <p className="text-white/80 text-base leading-relaxed font-light font-serif">
              Optimise your Shopify store for AI search, ChatGPT recommendations, and Google Merchant Center through structured Liquid refactoring, server-side microdata rendering, and RAG chunking rules.
            </p>
          </div>

          {/* Quick Summary Callout */}
          <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900/60 to-transparent border-l-4 border-aeo-cyan rounded-r-2xl space-y-2">
            <span className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">The E-commerce AEO Advantage</span>
            <p className="text-white text-sm font-medium leading-relaxed">
              Traditional Shopify themes focus purely on visual rendering for human browsers. AEO refactors underlying Liquid code so AI bots and RAG crawlers parse clean product facts, pricing, availability, and attributes on their very first request pass.
            </p>
          </div>

          {/* The Four Foundational Pillars of Shopify AEO */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Four Pillars of Shopify AEO Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 hover:border-aeo-cyan/30 transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                        <span className="text-xs text-aeo-cyan font-mono">{pillar.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-xs text-white/80 pt-3 border-t border-white/5">
                    {pillar.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-1" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Liquid Code Refactoring Example */}
          <div className="space-y-4 border-t border-white/10 pt-8">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-aeo-cyan" />
              <h2 className="text-2xl font-bold text-white">Liquid Template Refactoring: SSR vs Client-Side</h2>
            </div>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              Standard theme apps inject microdata using client-side JavaScript after page load. AI crawlers often fetch raw HTML before JavaScript execution finishes. We inject complete, server-rendered JSON-LD schema into your Liquid templates (`snippets/schema-product.liquid`):
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
  "brand": {
    "@type": "Brand",
    "name": {{ product.vendor | json }}
  },
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
            <p className="text-xs text-white/60 font-light italic">
              This guarantees that search engine bots, ChatGPT scrapers, and RAG indexers extract explicit product data immediately on first HTTP request.
            </p>
          </div>

          {/* Indexing Framework Checklist */}
          <div className="space-y-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-aeo-cyan" />
              <h2 className="text-2xl font-bold text-white">Resolving "Discovered – Currently Not Indexed" for Products</h2>
            </div>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              Deep product and collection pages often stall in Google Search Console's discovery queue. Our four-step operational framework accelerates URL frontier processing:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {frameworkSteps.map((step, sIdx) => (
                <div key={sIdx} className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-aeo-cyan font-bold">{step.step}</span>
                    <CheckCircle2 className="w-4 h-4 text-aeo-cyan" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Insights Block */}
          <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 border-t border-white/10">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-aeo-cyan" />
              <span>Why This Matters for Australian E-commerce Stores</span>
            </h3>
            <p className="text-xs text-white/80 font-light leading-relaxed">
              Australian e-commerce businesses in Perth, Sydney, and Melbourne face competitive vector spaces across Google Shopping and AI answer engines. When customers ask AI assistants to &ldquo;recommend the best Australian eco-friendly skin care brand,&rdquo; engines retrieve stores that offer clear, machine-verifiable product facts, fast SSR response times, and authoritative internal link pathways.
            </p>
            <div className="pt-2 text-xs">
              <Link href="/knowledge-hub/articles/entity-authority-building" className="text-aeo-cyan hover:underline font-semibold flex items-center gap-1">
                <span>Read our guide on Entity Authority Building</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
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
                <span>Run Free AI Visibility Scan</span>
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
