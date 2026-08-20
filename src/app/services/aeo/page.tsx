import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
  ArrowRight,
  Eye,
  Brain,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Award,
  FileText,
  Sparkles,
  Layers,
  Search,
  BarChart3,
  HelpCircle,
  Check,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "Answer Engine Optimisation (AEO) Services — AEObility",
  description: "Grounded content engineering and structured data solutions that clarify, format, and optimise business digital assets for RAG systems and conversational AI search engines.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo",
  },
};

export default function AEORootPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/android-chrome-512x512.png"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://aeobility.com.au/#website",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/aeo#faq",
        "isPartOf": {
          "@id": "https://aeobility.com.au/services/aeo#webpage"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between AEO and traditional SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional SEO focuses on earning clicks to web pages via keyword rankings and backlinks. Answer Engine Optimisation (AEO) focuses on structuring entity data, context chunks, and atomic answers so conversational AI systems (like Perplexity, ChatGPT, and Google AI Overviews) can accurately synthesize and cite your business in direct responses."
            }
          },
          {
            "@type": "Question",
            "name": "How long does AEO take to show results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial crawlability and entity clarity improvements are typically processed by AI engine bots within 30 to 60 days. Full optimisation and citation reinforcement across all service categories usually materialise over 90 days as model index passes refresh."
            }
          },
          {
            "@type": "Question",
            "name": "Does AEO help with local search and Google Maps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. AEO strengthens entity clarity and NAP (Name, Address, Phone) consistency across machine-readable schemas, directly improving local proximity signals, Google Map pack eligibility, and voice assistant search responses."
            }
          },
          {
            "@type": "Question",
            "name": "What deliverables are included in AEO consulting and implementation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Deliverables include a comprehensive AI search readiness audit, entity salience mapping, structured JSON-LD schema deployment, atomic answer block rewrites, crawler access configuration, and quarterly citation tracking reports."
            }
          },
          {
            "@type": "Question",
            "name": "Is AEO suitable for small Australian service businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. AEO is especially effective for service-based businesses in Perth and across Australia. It ensures conversational search engines accurately present your specific trade, service area, and value proposition when potential clients ask targeted questions."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in the $995 Strategic Blueprint?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The $995 Strategic Blueprint includes a full technical RAG audit, entity gap analysis, competitor overlap review, a customized 90-day action plan, a 45-minute strategy call with our specialists, and 100% credit-back terms towards implementation sprints."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/services/aeo#webpage",
        "url": "https://aeobility.com.au/services/aeo",
        "name": "Answer Engine Optimisation (AEO) Services — AEObility",
        "description": "Grounded content engineering and structured data solutions that clarify, format, and optimise business digital assets for RAG systems and conversational AI search engines.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "about": [
          {
            "@id": "https://aeobility.com.au/services/aeo#service"
          },
          {
            "@id": "https://aeobility.com.au/services/aeo#benefits"
          },
          {
            "@id": "https://aeobility.com.au/services/aeo#glossary"
          }
        ],
        "mentions": [
          { "@type": "Thing", "name": "Artificial Intelligence" },
          { "@type": "Thing", "name": "Search Engine Optimisation" },
          { "@type": "Thing", "name": "Retrieval-Augmented Generation" }
        ],
        "breadcrumb": {
          "@id": "https://aeobility.com.au/services/aeo#breadcrumb"
        },
        "mainEntity": {
          "@id": "https://aeobility.com.au/services/aeo#service"
        },
        "hasPart": [
          { "@id": "https://aeobility.com.au/services/aeo#howto" },
          { "@id": "https://aeobility.com.au/services/aeo#faq" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/aeo#service",
        "name": "Answer Engine Optimisation (AEO)",
        "description": "Grounded content engineering solutions that restructure, format, and optimise business assets to be accurately parsed, synthesised, and cited by AI engines and RAG systems.",
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "mainEntityOfPage": {
          "@id": "https://aeobility.com.au/services/aeo#webpage"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AEO Service Categories",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Assessment & Readiness Audit"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Semantic Entity Strategy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Content Blueprint & Answer Engineering"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical Implementation & Schema"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Measurement & Citation Sprints"
              }
            }
          ]
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://aeobility.com.au/services/aeo#benefits",
        "name": "Core Advantages of AEO",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Information Clarity & Machine Extraction"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Structured Entity Validation"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Passage & Context Window Accessibility"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Local Proximity & Map Signal Strength"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Reduced AI Hallucination Risk"
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://aeobility.com.au/services/aeo#howto",
        "name": "The AEObility Implementation Process",
        "step": [
          {
            "@type": "HowToStep",
            "name": "01 Discovery & Audit",
            "text": "Assess bot crawl accessibility, entity clarity, and baseline citation placement."
          },
          {
            "@type": "HowToStep",
            "name": "02 Content & Schema Strategy",
            "text": "Map business entity relationships, construct atomic answer blocks, and design schema graphs."
          },
          {
            "@type": "HowToStep",
            "name": "03 Technical Deployment",
            "text": "Implement JSON-LD schema microdata, refactor website copy into structured context chunks, and verify indexing rules."
          }
        ]
      },
      {
        "@type": "DefinedTermSet",
        "@id": "https://aeobility.com.au/services/aeo#glossary",
        "name": "AEO & RAG Glossary of Terms",
        "hasDefinedTerm": [
          {
            "@type": "DefinedTerm",
            "name": "Entity",
            "description": "A distinct, well-defined real-world object (such as a business, person, product, or location) recognised by search systems."
          },
          {
            "@type": "DefinedTerm",
            "name": "Structured Data",
            "description": "Standardised code (such as Schema.org JSON-LD) added to web pages to explicitly state entity attributes to machines."
          },
          {
            "@type": "DefinedTerm",
            "name": "RAG (Retrieval-Augmented Generation)",
            "description": "The technical process where AI engines query external web data to generate factual, up-to-date conversational answers."
          },
          {
            "@type": "DefinedTerm",
            "name": "Answer Engine",
            "description": "A search or conversational platform (e.g. Perplexity, ChatGPT, Google Gemini) that delivers direct answers rather than a page of blue links."
          },
          {
            "@type": "DefinedTerm",
            "name": "Atomic Answer Block",
            "description": "A direct, 90-120 word section of text specifically formatted to provide a complete answer for automated machine extraction."
          },
          {
            "@type": "DefinedTerm",
            "name": "Context Chunk",
            "description": "A coherent section of text containing full semantic context that AI systems ingest to accurately answer user questions."
          },
          {
            "@type": "DefinedTerm",
            "name": "Positional Bias",
            "description": "The tendency of AI processing models to pay greater attention to information placed at the top or bottom of a document."
          },
          {
            "@type": "DefinedTerm",
            "name": "Semantic Density",
            "description": "The concentration of verified facts, structured attributes, and entity links within a piece of content relative to overall word count."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/services/aeo#breadcrumb",
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
          }
        ]
      }
    ]
  };

  const serviceCategories = [
    {
      badge: "01. Assessment",
      title: "Readiness Audit & Audit Diagnostics",
      desc: "Evaluate how effectively AI engines crawl, index, and interpret your business assets across primary digital channels.",
      bullets: [
        "Crawl compatibility and bot access audit",
        "Entity validation & NAP consistency review",
        "Baseline citation visibility check"
      ],
      output: "Comprehensive Diagnostic Audit Report",
      linkHref: "/services/ai-search-marketing",
      linkText: "Explore Audit Framework"
    },
    {
      badge: "02. Strategy",
      title: "Semantic Entity Architecture",
      desc: "Design a clear roadmap connecting your services, locations, and expertise into machine-readable knowledge graphs.",
      bullets: [
        "Entity salience and context map creation",
        "Competitor citation overlap comparison",
        "Passage chunking strategy for key pages"
      ],
      output: "90-Day Strategic Architecture Blueprint",
      linkHref: "/services/aeo/definition",
      linkText: "View Strategy Blueprint"
    },
    {
      badge: "03. Content Blueprint",
      title: "Structural Answer Engineering",
      desc: "Refactor existing page content into atomic answer blocks optimized for direct passage extraction by RAG systems.",
      bullets: [
        "90–120 token atomic answer block creation",
        "Clear headings and factual summary boxes",
        "Reduction of ambiguous marketing jargon"
      ],
      output: "Production-Ready Content Wireframe Set",
      linkHref: "/services/aeo/procedures",
      linkText: "See Content Framework"
    },
    {
      badge: "04. Implementation",
      title: "Technical & Schema Deployment",
      desc: "Deploy rich Schema.org JSON-LD microdata and server-side rules to guide machine crawlers directly to critical business data.",
      bullets: [
        "Custom Schema.org microdata (Service, Org, FAQ)",
        "Server header and crawler access validation",
        "Liquid/HTML structural code updates"
      ],
      output: "Validated Schema & Technical Code Package",
      linkHref: "/services/aeo/shopify",
      linkText: "Explore Technical Setup"
    },
    {
      badge: "05. Measurement",
      title: "Continuous Refinement Sprints",
      desc: "Track model indexing passes, citation occurrences, and brand recommendations to continuously refine content authority.",
      bullets: [
        "Quarterly citation frequency reporting",
        "Secondary entity node reinforcement",
        "Continuous schema & RAG alignment tuning"
      ],
      output: "Quarterly Performance & Growth Report",
      linkHref: "/solutions",
      linkText: "View Sprint Packages"
    }
  ];

  const benefitCards = [
    {
      icon: <Eye className="w-5 h-5 text-aeo-cyan" />,
      title: "Information Clarity",
      desc: "Ensure your core services, operating hours, and location details are parsed accurately without confusion by AI engines."
    },
    {
      icon: <Brain className="w-5 h-5 text-aeo-purple" />,
      title: "Structured Entity Validation",
      desc: "Build strong entity connections across your website so search systems recognize your brand as a trusted regional authority."
    },
    {
      icon: <Award className="w-5 h-5 text-aeo-cyan" />,
      title: "Passage Accessibility",
      desc: "Format web content into direct atomic answers that RAG search platforms can easily extract for user queries."
    },
    {
      icon: <MapPin className="w-5 h-5 text-aeo-purple" />,
      title: "Local Intent Signal Proximity",
      desc: "Sync business coordinates and local service schema so nearby customers find you via map packs and voice search."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-aeo-cyan" />,
      title: "Reduced Hallucination Risk",
      desc: "Provide explicit, machine-readable facts that eliminate guesswork and prevent AI systems from distorting your offerings."
    }
  ];

  const decisionCriteria = [
    {
      type: "Choose Traditional SEO when:",
      badge: "Search Engine Focus",
      color: "border-blue-500/30 text-blue-400",
      items: [
        "Your primary goal is driving high-volume organic website traffic.",
        "Your business targets competitive keyword search terms.",
        "You rely heavily on backlink authority building and blogging."
      ]
    },
    {
      type: "Choose Answer Engine Optimisation when:",
      badge: "AI & RAG Focus",
      color: "border-aeo-cyan/40 text-aeo-cyan",
      items: [
        "Potential clients ask complex, conversational questions about your service.",
        "You want your business recommended directly in ChatGPT, Perplexity, or Gemini.",
        "You need machine-readable entity clarity across digital maps and voice assistants."
      ]
    },
    {
      type: "Combine SEO + AEO when:",
      badge: "Unified Growth",
      color: "border-aeo-purple/40 text-aeo-purple",
      items: [
        "You require both high web traffic and direct AI answer recommendations.",
        "You operate a regional service business in Perth or across Australia.",
        "You want to future-proof your digital presence as search platforms evolve."
      ]
    }
  ];

  const comparisonMatrix = [
    {
      aspect: "Primary Goal",
      seo: "Rank web pages on page 1 of search engine results",
      aeo: "Deliver precise entity facts for AI direct answers & citations"
    },
    {
      aspect: "Target Discovery System",
      seo: "Traditional search engines (Google, Bing web search)",
      aeo: "Conversational AI & RAG engines (Perplexity, ChatGPT, Gemini)"
    },
    {
      aspect: "Core Content Unit",
      seo: "Long-form articles optimized for target keywords",
      aeo: "Atomic answer blocks & structured context chunks"
    },
    {
      aspect: "Technical Engine Focus",
      seo: "PageRank, backlink profiles & keyword density",
      aeo: "Schema.org graph, entity salience & passage chunking"
    },
    {
      aspect: "User Experience Flow",
      seo: "User clicks link, lands on website, reads page",
      aeo: "User receives direct recommendation or cited answer"
    },
    {
      aspect: "Primary Success Metric",
      seo: "Organic traffic, keyword rankings & impressions",
      aeo: "Citation frequency, entity accuracy & conversion intent"
    }
  ];

  const glossaryTerms = [
    { term: "Entity", definition: "A distinct, well-defined real-world object (such as a business, person, product, or location) recognised by search systems." },
    { term: "Structured Data", definition: "Standardised code (such as Schema.org JSON-LD) added to web pages to explicitly state entity attributes to machines." },
    { term: "RAG (Retrieval-Augmented Generation)", definition: "The technical process where AI engines query external web data to generate factual, up-to-date conversational answers." },
    { term: "Answer Engine", definition: "A search or conversational platform (e.g. Perplexity, ChatGPT, Google Gemini) that delivers direct answers rather than a page of blue links." },
    { term: "Atomic Answer Block", definition: "A direct, 90–120 word section of text specifically formatted to provide a complete answer for automated machine extraction." },
    { term: "Context Chunk", definition: "A coherent section of text containing full semantic context that AI systems ingest to accurately answer user questions." },
    { term: "Positional Bias", definition: "The tendency of AI processing models to pay greater attention to information placed at the top or bottom of a document." },
    { term: "Semantic Density", definition: "The concentration of verified facts, structured attributes, and entity links within a piece of content relative to overall word count." }
  ];

  const faqs = [
    {
      q: "What is the difference between AEO and traditional SEO?",
      a: "Traditional SEO focuses on earning clicks to web pages via keyword rankings and backlinks. Answer Engine Optimisation (AEO) focuses on structuring entity data, context chunks, and atomic answers so conversational AI systems (like Perplexity, ChatGPT, and Google AI Overviews) can accurately synthesize and cite your business in direct responses."
    },
    {
      q: "How long does AEO take to show results?",
      a: "Initial crawlability and entity clarity improvements are typically processed by AI engine bots within 30 to 60 days. Full optimisation and citation reinforcement across all service categories usually materialise over 90 days as model index passes refresh."
    },
    {
      q: "Does AEO help with local search and Google Maps?",
      a: "Yes. AEO strengthens entity clarity and NAP (Name, Address, Phone) consistency across machine-readable schemas, directly improving local proximity signals, Google Map pack eligibility, and voice assistant search responses."
    },
    {
      q: "What deliverables are included in AEO consulting and implementation?",
      a: "Deliverables include a comprehensive AI search readiness audit, entity salience mapping, structured JSON-LD schema deployment, atomic answer block rewrites, crawler access configuration, and quarterly citation tracking reports."
    },
    {
      q: "Is AEO suitable for small Australian service businesses?",
      a: "Yes. AEO is especially effective for service-based businesses in Perth and across Australia. It ensures conversational search engines accurately present your specific trade, service area, and value proposition when potential clients ask targeted questions."
    },
    {
      q: "What is included in the $995 Strategic Blueprint?",
      a: "The $995 Strategic Blueprint includes a full technical RAG audit, entity gap analysis, competitor overlap review, a customized 90-day action plan, a 45-minute strategy call with our specialists, and 100% credit-back terms towards implementation sprints."
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
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full flex flex-col gap-14">
        <section className="flex flex-col gap-12">
          
          {/* SECTION 1 — Refactored Hero Block */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Evidence-Led AEO &amp; Grounded RAG Solutions</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Answer Engine <span className="text-gradient-aeo">Optimisation (AEO)</span> Services
            </h1>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              Structure, format, and align your business content so conversational AI engines and modern search systems accurately index, understand, and cite your services.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/solutions/aeo-blueprint"
                className="btn-primary flex items-center gap-2"
              >
                <span>Explore $995 Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/book"
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <span>Book a Strategy Call</span>
              </Link>
            </div>
          </div>

          {/* SECTION 2 — Grounded Definition Block ("What is AEO?") */}
          <section className="atomic-answer-block p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-2xl border-l-aeo-cyan border-l-4 space-y-3">
            <div className="flex items-center gap-2 text-xs text-aeo-cyan font-mono font-semibold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <h2>What is Answer Engine Optimisation (AEO)?</h2>
            </div>
            <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">
              Answer Engine Optimisation (AEO) is the discipline of structuring web content so AI search platforms (such as Perplexity, ChatGPT, and Google AI Overviews) can easily parse, validate, and extract factual answers. Grounded in actual <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-aeo-cyan underline hover:text-white transition-colors">Retrieval-Augmented Generation (RAG) mechanics</Link>, AEO replaces generic marketing fluff with clear entity definitions, structured JSON-LD schema, and atomic answer blocks. Working alongside <Link href="/services/geo-marketing" className="text-aeo-cyan underline hover:text-white transition-colors font-medium">GEO (Geographic Engine Optimisation)</Link>, AEO ensures machines accurately present your business in regional search queries.
            </p>
          </section>

          {/* SECTION 3 — Upfront AEO vs SEO Comparison Matrix */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">At-a-Glance Comparison</span>
              <h2 className="text-2xl font-bold">AEO vs SEO: Key Structural Differences</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Compare how traditional search engine optimisation differs from modern answer engine content engineering.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.01]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="p-4 font-bold text-white/90 w-1/4">Comparison Aspect</th>
                    <th className="p-4 font-bold text-blue-400 w-3/8">Traditional SEO</th>
                    <th className="p-4 font-bold text-aeo-cyan w-3/8">Answer Engine Optimisation (AEO)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-semibold text-white/80 font-mono">{row.aspect}</td>
                      <td className="p-4 text-white/60 font-light leading-relaxed">{row.seo}</td>
                      <td className="p-4 text-white/90 font-light leading-relaxed bg-aeo-cyan/[0.02]">{row.aeo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 4 — Decision-Stage Strategy Guidance */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-purple uppercase tracking-wider">Decision Criteria</span>
              <h2 className="text-2xl font-bold">Choosing the Right Strategy for Your Business</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Evaluate whether your business needs traditional SEO, focused AEO, or a combined hybrid approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {decisionCriteria.map((card, idx) => (
                <div key={idx} className={`p-6 bg-white/[0.02] border ${card.color} rounded-2xl flex flex-col justify-between space-y-4`}>
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 inline-block">
                      {card.badge}
                    </span>
                    <h3 className="text-base font-bold text-white">{card.type}</h3>
                    <ul className="space-y-2.5 pt-2">
                      {card.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex gap-2 items-start text-xs font-light text-white/70 leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5 — Practical 5-Part Service Architecture */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Structured Offerings</span>
              <h2 className="text-2xl font-bold">Our Practical AEO Service Categories</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Clear, practical service modules designed to make your digital footprint machine-readable and highly authoritative.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceCategories.map((cat, idx) => (
                <div key={idx} className={`p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all ${idx === 4 ? 'md:col-span-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono font-bold text-aeo-cyan bg-aeo-cyan/10 px-2.5 py-1 rounded-full border border-aeo-cyan/20">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-white/70 leading-relaxed font-light">{cat.desc}</p>

                    <ul className="space-y-2 pt-1">
                      {cat.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex gap-2 items-start text-xs font-light text-white/80 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-3">
                    <span className="text-[11px] font-mono text-white/50">
                      Output: <strong className="text-white/80 font-medium">{cat.output}</strong>
                    </span>
                    <Link
                      href={cat.linkHref}
                      className="text-xs font-bold text-aeo-cyan hover:underline inline-flex items-center gap-1"
                    >
                      {cat.linkText}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 6 — Core Advantages & Why AEO Matters */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-purple uppercase tracking-wider">Business Impact</span>
              <h2 className="text-2xl font-bold">Why Structured AEO Matters</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefitCards.map((card, idx) => (
                <div key={idx} className={`p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2 ${idx === 4 ? 'md:col-span-2' : ''}`}>
                  <div className="flex items-center gap-2">
                    {card.icon}
                    <h3 className="font-bold text-sm text-white">{card.title}</h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 7 — Real-World Case Study Evidence */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-l-aeo-purple border-l-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-aeo-purple">
                <BarChart3 className="w-4 h-4" />
                <span>REAL-WORLD EVIDENCE &amp; CASE PROOF</span>
              </div>
              <h3 className="text-lg font-bold text-white">Baby Bento E-Commerce Case Study</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                By restructuring liquid product feeds, implementing rich product schema, and deploying atomic answer blocks, Baby Bento achieved a <strong>+17% sales uplift</strong> and a <strong>+95% CTR increase</strong> in AI search answer placements.
              </p>
            </div>
            
            <Link
              href="/knowledge-hub/case-studies/baby-bento"
              className="px-5 py-3 rounded-xl bg-aeo-purple/20 border border-aeo-purple/40 text-white font-bold text-xs hover:bg-aeo-purple/30 transition-all inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0"
            >
              <span>Read Case Study</span>
              <ArrowUpRight className="w-4 h-4 text-aeo-cyan" />
            </Link>
          </div>

          {/* SECTION 8 — Simplified Glossary of Terms */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Plain Language</span>
              <h2 className="text-2xl font-bold">Glossary of Core Concepts</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Clear definitions of essential terms used in Answer Engine Optimisation and machine retrieval.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {glossaryTerms.map((g, idx) => (
                <div key={idx} className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl space-y-1">
                  <h3 className="text-xs font-bold text-aeo-cyan font-mono">{g.term}</h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{g.definition}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 9 — Accessible FAQs (Mapped to Schema) */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-purple uppercase tracking-wider">Questions &amp; Answers</span>
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white/[0.01] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.03] transition-colors"
                >
                  <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm">
                    <span>{faq.q}</span>
                    <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300 font-mono text-lg">+</span>
                  </summary>
                  <p className="mt-4 text-xs text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/40 font-light">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* SECTION 10 — Detailed $995 Strategic Blueprint CTA (Pre-Footer) */}
          <div className="p-8 md:p-10 bg-gradient-to-br from-aeo-purple/15 via-black to-aeo-cyan/15 border border-white/10 rounded-3xl text-center space-y-6 mt-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-aeo-cyan/10 rounded-full filter blur-3xl -z-10" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-semibold">
              <Zap className="w-3.5 h-3.5" />
              <span>Low-Friction Standalone Entry Point</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              The AEObility <span className="text-gradient-aeo">Strategic Blueprint</span> — $995 AUD
            </h2>
            
            <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto font-light leading-relaxed">
              Get an explicit diagnostic audit of your digital presence and a customized 90-day execution roadmap before committing to full implementation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto pt-2">
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-white/50 block">TURNAROUND</span>
                <p className="text-xs font-bold text-white">5–7 Business Days</p>
              </div>
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-white/50 block">STRATEGY SESSION</span>
                <p className="text-xs font-bold text-white">45-Min Walkthrough</p>
              </div>
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-white/50 block">DELIVERABLE</span>
                <p className="text-xs font-bold text-white">90-Day Action Plan</p>
              </div>
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1">
                <span className="text-[10px] font-mono font-semibold text-aeo-cyan block">GUARANTEE</span>
                <p className="text-xs font-bold text-white">100% Credit-Back</p>
              </div>
            </div>

            <p className="text-[11px] text-white/60 font-light max-w-lg mx-auto">
              *100% of your $995 investment is credited directly towards any subsequent AEO implementation sprint.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/solutions/aeo-blueprint"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)]"
              >
                <span>Get AEObility Blueprint ($995)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/10 transition-all"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
