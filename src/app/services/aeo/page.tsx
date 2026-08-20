import React from 'react';
import Link from 'next/link';
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
  Check,
  Zap,
  ArrowUpRight,
  HelpCircle,
  BookOpen,
  BarChart3,
  Layers
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "Answer Engine Optimisation (AEO) Services — AEObility",
  description: "Improve how clearly your business, services, and expertise are explained across your website, local presence, and answer-led search experiences.",
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
              "text": "Traditional SEO focuses on improving discoverability, technical quality, and organic rankings in search engines. Answer Engine Optimisation (AEO) builds on SEO by making key business facts, services, and decision-stage answers clearer and more structured for answer-led search experiences."
            }
          },
          {
            "@type": "Question",
            "name": "Does comparison content help AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Comparison content can help when it answers a real customer decision clearly and fairly. It should explain the options, comparison criteria, trade-offs, and situations each option suits. It does not promise rankings, citations, or recommendations."
            }
          },
          {
            "@type": "Question",
            "name": "Should my business publish \"X vs Y\" pages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Publish comparison pages when customers genuinely compare those options and you can provide a balanced, evidence-led answer. Use consistent criteria, acknowledge limitations, and give readers practical selection guidance."
            }
          },
          {
            "@type": "Question",
            "name": "Is AEO a replacement for SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. AEO complements SEO. Technical SEO, helpful content, site usability, local visibility, and authority remain important foundations of search performance."
            }
          },
          {
            "@type": "Question",
            "name": "Does AEO help with local search and Google Maps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. AEO strengthens local business detail consistency (name, address, phone number, services, and operating regions), improving local search visibility and voice assistant accuracy."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in the $995 AEObility Blueprint?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The $995 AEObility Blueprint includes a digital presence review, service and content assessment, technical and structured-data review, a 90-day action roadmap, a 45-minute strategy walkthrough, and 100% credit-back terms towards subsequent implementation sprints."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/services/aeo#webpage",
        "url": "https://aeobility.com.au/services/aeo",
        "name": "Answer Engine Optimisation (AEO) Services — AEObility",
        "description": "Improve how clearly your business, services, and expertise are explained across your website, local presence, and answer-led search experiences.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "about": [
          { "@id": "https://aeobility.com.au/services/aeo#service" },
          { "@id": "https://aeobility.com.au/services/aeo#benefits" },
          { "@id": "https://aeobility.com.au/services/aeo#glossary" }
        ],
        "mentions": [
          { "@type": "Thing", "name": "Search Engine Optimisation" },
          { "@type": "Thing", "name": "Answer Engine Optimisation" },
          { "@type": "Thing", "name": "Structured Data" }
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
        "name": "Answer Engine Optimisation (AEO) Services",
        "description": "Improve how clearly your business, services, and expertise are explained across your website, local presence, and answer-led search experiences.",
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "mainEntityOfPage": {
          "@id": "https://aeobility.com.au/services/aeo#webpage"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AEO Service Deliverables",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AEO Readiness Audit"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AEO Strategy and Content Roadmap"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Answer and Comparison Content Blueprint"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical and Structured-Data Implementation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Measurement and Improvement Sprints"
              }
            }
          ]
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://aeobility.com.au/services/aeo#benefits",
        "name": "Why Clear, Structured Information Matters",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Improve Information Clarity" },
          { "@type": "ListItem", "position": 2, "name": "Reduce Ambiguity" },
          { "@type": "ListItem", "position": 3, "name": "Support Confident Decisions" },
          { "@type": "ListItem", "position": 4, "name": "Strengthen Local Consistency" },
          { "@type": "ListItem", "position": 5, "name": "Build Durable Search Foundations" }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://aeobility.com.au/services/aeo#howto",
        "name": "Our AEO Delivery Process",
        "step": [
          {
            "@type": "HowToStep",
            "name": "01 Assess",
            "text": "Review current content clarity, technical search fundamentals, and business information consistency."
          },
          {
            "@type": "HowToStep",
            "name": "02 Prioritise",
            "text": "Identify high-value service pages, customer decision questions, and structured data priorities."
          },
          {
            "@type": "HowToStep",
            "name": "03 Implement",
            "text": "Deploy content updates, FAQ frameworks, comparison guides, and eligible schema markup."
          },
          {
            "@type": "HowToStep",
            "name": "04 Review",
            "text": "Monitor performance metrics, lead quality, and user search feedback to refine content."
          }
        ]
      },
      {
        "@type": "DefinedTermSet",
        "@id": "https://aeobility.com.au/services/aeo#glossary",
        "name": "Plain-Language Glossary of Terms",
        "hasDefinedTerm": [
          {
            "@type": "DefinedTerm",
            "name": "Entity",
            "description": "A distinct thing, such as a business, person, service, product, or location."
          },
          {
            "@type": "DefinedTerm",
            "name": "Structured data",
            "description": "Code that helps search engines understand key page details."
          },
          {
            "@type": "DefinedTerm",
            "name": "Answer engine",
            "description": "A search or conversational platform that provides direct answers alongside or instead of traditional search results."
          },
          {
            "@type": "DefinedTerm",
            "name": "RAG",
            "description": "A technique some AI systems use to retrieve relevant information before generating an answer."
          },
          {
            "@type": "DefinedTerm",
            "name": "Comparison content",
            "description": "Content that fairly evaluates options against consistent criteria."
          },
          {
            "@type": "DefinedTerm",
            "name": "Decision guide",
            "description": "Content that helps a prospective customer choose an appropriate product, service, or approach."
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

  const aeoVsSeoTable = [
    {
      area: "Primary purpose",
      seo: "Improve discoverability and organic performance in search",
      aeo: "Make important information clearer and more useful in answer-led search experiences"
    },
    {
      area: "Core foundations",
      seo: "Technical quality, helpful content, relevance, authority, internal linking, local signals, and user experience",
      aeo: "Direct answers, consistent business facts, entity clarity, structured information, and decision-support content"
    },
    {
      area: "Typical outputs",
      seo: "Service pages, local pages, guides, product or category pages, and technical improvements",
      aeo: "FAQs, definitions, comparison pages, service explainers, and structured data where appropriate"
    },
    {
      area: "Relationship",
      seo: "The essential search foundation",
      aeo: "A complementary layer built on strong SEO"
    }
  ];

  const decisionFramework = [
    {
      title: "Choose SEO first when",
      badge: "Search Foundations",
      borderColor: "border-blue-500/30 text-blue-400",
      points: [
        "Your site has technical, content, local visibility, or authority fundamentals to improve",
        "You rely on organic traffic from category, service, product, or informational searches",
        "Your priority is increasing qualified website visits and traditional search visibility"
      ]
    },
    {
      title: "Add AEO when",
      badge: "Answer Clarity",
      borderColor: "border-aeo-cyan/40 text-aeo-cyan",
      points: [
        "Customers regularly ask detailed questions before they enquire or purchase",
        "Your service pages need clearer explanations of scope, suitability, locations, and outcomes",
        "You want to improve the consistency and answer-readiness of key business information"
      ]
    },
    {
      title: "Use both when",
      badge: "Full-Funnel Strategy",
      borderColor: "border-aeo-purple/40 text-aeo-purple",
      points: [
        "You need strong organic visibility and clear decision-stage content",
        "You are a local or regional business with service, location, and trust information to clarify",
        "You want a durable search strategy that supports users across conventional and AI-led search experiences"
      ]
    }
  ];

  const comparisonFormats = [
    {
      question: "Is AEO different from SEO?",
      format: "AEO vs SEO guide",
      decision: "Differences, overlap, and priority order"
    },
    {
      question: "Do I need local SEO, AEO, or both?",
      format: "Local SEO and AEO guide",
      decision: "Which foundation a local business needs first"
    },
    {
      question: "Which engagement suits me?",
      format: "Blueprint vs sprint vs implementation",
      decision: "Scope, inclusions, timing, and next step"
    }
  ];

  const serviceModules = [
    {
      badge: "01. Audit",
      label: "AEO Readiness Audit",
      desc: "A practical assessment of current content clarity, technical search fundamentals, and business information consistency.",
      deliverables: [
        "Crawlability and indexation review",
        "Business-data consistency check",
        "Core-page content review",
        "Prioritised audit findings & recommendations"
      ],
      linkHref: "/services/ai-search-marketing",
      linkText: "Learn About Audits"
    },
    {
      badge: "02. Strategy",
      label: "AEO Strategy and Content Roadmap",
      desc: "Define service and topic priorities, customer question research, internal linking structures, and execution timelines.",
      deliverables: [
        "Service and topic priority map",
        "Customer-question intent research",
        "Internal-linking architecture plan",
        "Step-by-step implementation roadmap"
      ],
      linkHref: "/services/aeo/definition",
      linkText: "View Strategy Framework"
    },
    {
      badge: "03. Content",
      label: "Answer and Comparison Content Blueprint",
      desc: "Develop clear FAQ frameworks, service-page briefs, comparison templates, and customer decision paths.",
      deliverables: [
        "FAQ content framework & answer briefs",
        "Service-page structural briefs",
        "Comparison-page content templates",
        "Conversion path & next-step design"
      ],
      specialCallout: {
        title: "Comparison Content Blueprint",
        text: "We identify decision-stage questions that matter to your customers and plan useful comparison pages, selection guides, service tables, and supporting FAQs. Each blueprint defines the user question, comparison criteria, evidence requirements, information structure, internal links, and conversion path."
      },
      linkHref: "/services/aeo/procedures",
      linkText: "Explore Blueprint Setup"
    },
    {
      badge: "04. Implementation",
      label: "Technical and Structured-Data Implementation",
      desc: "Deploy on-page content updates, eligible Schema.org microdata, internal linking fixes, and site-template improvements.",
      deliverables: [
        "On-page content & heading structural updates",
        "Structured data implementation (Service, Org, FAQ)",
        "Internal link integration & URL hierarchy fixes",
        "Site-template improvements & schema validation"
      ],
      linkHref: "/services/aeo/shopify",
      linkText: "View Implementation Scope"
    },
    {
      badge: "05. Measurement",
      label: "Measurement and Improvement Sprints",
      desc: "Ongoing performance reviews, content iteration backlogs, lead-quality feedback tracking, and quarterly priorities.",
      deliverables: [
        "Quarterly performance review & reporting",
        "Content iteration & refinement backlog",
        "Lead-quality & conversion feedback review",
        "Technical health checks & quarterly priorities"
      ],
      linkHref: "/solutions",
      linkText: "Explore Sprint Options"
    }
  ];

  const whyClearInfoMatters = [
    {
      icon: <Eye className="w-5 h-5 text-aeo-cyan" />,
      title: "Improve Information Clarity",
      desc: "Make it easier for customers to understand your services, locations, operating details, expertise, and next steps."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-aeo-purple" />,
      title: "Reduce Ambiguity",
      desc: "Use explicit, current business facts and plain-language explanations so key information is less open to misinterpretation."
    },
    {
      icon: <Award className="w-5 h-5 text-aeo-cyan" />,
      title: "Support Confident Decisions",
      desc: "Give prospective customers clear service details, FAQs, comparisons, proof points, and suitable next actions."
    },
    {
      icon: <MapPin className="w-5 h-5 text-aeo-purple" />,
      title: "Strengthen Local Consistency",
      desc: "Review important business details—name, contact details, location, service area, and local profiles—for accuracy and consistency."
    },
    {
      icon: <Brain className="w-5 h-5 text-aeo-cyan" />,
      title: "Build Durable Search Foundations",
      desc: "Create useful, accessible, well-structured pages that support people first and remain valuable as search experiences evolve."
    }
  ];

  const deliveryProcess = [
    { step: "01", name: "Assess", desc: "Review current content clarity, technical search fundamentals, and business information consistency." },
    { step: "02", name: "Prioritise", desc: "Identify high-value service pages, customer decision questions, and structured data priorities." },
    { step: "03", name: "Implement", desc: "Deploy content updates, FAQ frameworks, comparison guides, and eligible schema markup." },
    { step: "04", name: "Review", desc: "Monitor performance metrics, lead quality, and user search feedback to refine content." }
  ];

  const plainGlossary = [
    { term: "Entity", definition: "A distinct thing, such as a business, person, service, product, or location." },
    { term: "Structured data", definition: "Code that helps search engines understand key page details." },
    { term: "Answer engine", definition: "A search or conversational platform that provides direct answers alongside or instead of traditional search results." },
    { term: "RAG", definition: "A technique some AI systems use to retrieve relevant information before generating an answer." },
    { term: "Comparison content", definition: "Content that fairly evaluates options against consistent criteria." },
    { term: "Decision guide", definition: "Content that helps a prospective customer choose an appropriate product, service, or approach." }
  ];

  const faqs = [
    {
      q: "What is the difference between AEO and traditional SEO?",
      a: "Traditional SEO focuses on improving discoverability, technical quality, and organic rankings in search engines. Answer Engine Optimisation (AEO) builds on SEO by making key business facts, services, and decision-stage answers clearer and more structured for answer-led search experiences."
    },
    {
      q: "Does comparison content help AEO?",
      a: "Comparison content can help when it answers a real customer decision clearly and fairly. It should explain the options, comparison criteria, trade-offs, and situations each option suits. It does not promise rankings, citations, or recommendations."
    },
    {
      q: "Should my business publish \"X vs Y\" pages?",
      a: "Publish comparison pages when customers genuinely compare those options and you can provide a balanced, evidence-led answer. Use consistent criteria, acknowledge limitations, and give readers practical selection guidance."
    },
    {
      q: "Is AEO a replacement for SEO?",
      a: "No. AEO complements SEO. Technical SEO, helpful content, site usability, local visibility, and authority remain important foundations of search performance."
    },
    {
      q: "Does AEO help with local search and Google Maps?",
      a: "Yes. AEO strengthens local business detail consistency (name, address, phone number, services, and operating regions), improving local search visibility and voice assistant accuracy."
    },
    {
      q: "What is included in the $995 AEObility Blueprint?",
      a: "The $995 AEObility Blueprint includes a digital presence review, service and content assessment, technical and structured-data review, a 90-day action roadmap, a 45-minute strategy walkthrough, and 100% credit-back terms towards subsequent implementation sprints."
    }
  ];

  const blueprintInclusions = [
    { item: "Digital presence review", desc: "A practical assessment of current content, technical, and business-information priorities" },
    { item: "Service and content assessment", desc: "Recommendations for key service pages, FAQs, decision guides, and comparison opportunities" },
    { item: "Technical and structured-data review", desc: "A prioritised implementation checklist where applicable" },
    { item: "90-day action roadmap", desc: "Clear work priorities, dependencies, suggested sequence, and next steps" },
    { item: "Strategy walkthrough", desc: "A 45-minute session to explain findings and answer questions" }
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
          
          {/* SECTION 1 — Refined Hero */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Plain-Language AEO Services for Australian SMBs</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Answer Engine <span className="text-gradient-aeo">Optimisation (AEO)</span> Services
            </h1>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              Improve how clearly your business, services, and expertise are explained across your website, local presence, and answer-led search experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/solutions/aeo-blueprint"
                className="btn-primary flex items-center gap-2"
              >
                <span>Explore the $995 Blueprint</span>
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

          {/* SECTION 2 — Direct Answer Block ("What is AEO?") */}
          <section className="atomic-answer-block p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-2xl border-l-aeo-cyan border-l-4 space-y-4">
            <div className="flex items-center gap-2 text-xs text-aeo-cyan font-mono font-semibold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <h2>What is AEO?</h2>
            </div>
            <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">
              Answer Engine Optimisation (AEO) is the practice of making important business information clear, accurate, well structured, and easy to verify across your website and supporting digital presence. It works alongside SEO to help search engines and answer-led platforms interpret relevant services, locations, expertise, and customer answers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-white/5">
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-aeo-cyan" />
                  Clarify your offer
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Explain services, locations, expertise, pricing factors, and proof points consistently.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-aeo-cyan" />
                  Strengthen search foundations
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Improve helpful content, internal linking, local business information, technical quality, and eligible structured data.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-aeo-cyan" />
                  Support customer decisions
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Create direct answers, FAQs, service explainers, and fair comparison content for common pre-purchase questions.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3 — AEO vs SEO: How They Work Together */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Search Strategy</span>
              <h2 className="text-2xl font-bold">AEO vs SEO: How They Work Together</h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.01]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="p-4 font-bold text-white/90 w-1/4">Area</th>
                    <th className="p-4 font-bold text-blue-400 w-3/8">SEO</th>
                    <th className="p-4 font-bold text-aeo-cyan w-3/8">AEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {aeoVsSeoTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-semibold text-white/80 font-mono">{row.area}</td>
                      <td className="p-4 text-white/60 font-light leading-relaxed">{row.seo}</td>
                      <td className="p-4 text-white/90 font-light leading-relaxed bg-aeo-cyan/[0.02]">{row.aeo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-white/70 font-light leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
              <strong className="text-white font-semibold">Supporting note:</strong> AEO is not a replacement for SEO. Strong SEO remains essential; AEO builds on those foundations by making key business information more explicit, consistent, and useful for answer-led discovery.
            </p>
          </div>

          {/* SECTION 4 — When to Use SEO, AEO, or Both */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-purple uppercase tracking-wider">Decision Framework</span>
              <h2 className="text-2xl font-bold">When to Use SEO, AEO, or Both</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {decisionFramework.map((card, idx) => (
                <div key={idx} className={`p-6 bg-white/[0.02] border ${card.borderColor} rounded-2xl space-y-4 flex flex-col justify-between`}>
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 inline-block">
                      {card.badge}
                    </span>
                    <h3 className="text-base font-bold text-white">{card.title}</h3>
                    <ul className="space-y-2.5 pt-2">
                      {card.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex gap-2 items-start text-xs font-light text-white/75 leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5 — Comparison Content for Decision-Stage Search */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Buyer Intent</span>
              <h2 className="text-2xl font-bold">Comparison Content for Decision-Stage Search</h2>
            </div>

            <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed max-w-3xl">
              Comparison content helps people decide between real options, including AEO vs SEO, local SEO vs AEO, a Blueprint vs an implementation sprint, or different service approaches. It can support answer-led visibility because it gives readers a clear, evidence-based answer to questions such as &ldquo;What is the difference?&rdquo; and &ldquo;Which option is right for me?&rdquo; It does not guarantee rankings, AI citations, recommendations, or visibility on a particular platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-sm font-bold text-white font-mono">Content Standards We Follow:</h3>
                <ul className="space-y-2 text-xs font-light text-white/70 leading-relaxed">
                  <li className="flex gap-2 items-start">
                    <Check className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                    <span>Base pages on genuine questions customers ask.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                    <span>Compare options using consistent criteria: suitability, scope, cost factors, timeframe, limitations, and expected outcomes.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                    <span>Explain trade-offs fairly, including when an alternative approach may be better.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                    <span>Support claims with experience, methodology, first-party evidence, and credible sources.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                    <span>End with practical guidance: &ldquo;Choose this when...&rdquo;</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-white font-mono">Example Comparison Formats:</h3>
                  <div className="space-y-2.5">
                    {comparisonFormats.map((cf, idx) => (
                      <div key={idx} className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-xs space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-white">{cf.question}</span>
                          <span className="font-mono text-[10px] text-aeo-cyan">{cf.format}</span>
                        </div>
                        <p className="text-white/60 font-light text-[11px]">{cf.decision}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 6 — Simplified Service Names & Deliverables */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Practical Deliverables</span>
              <h2 className="text-2xl font-bold">Services &amp; Scope of Work</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Tangible deliverables and clear scope descriptions tailored for Australian businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceModules.map((module, idx) => (
                <div key={idx} className={`p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-between space-y-4 hover:border-white/20 transition-all ${idx === 2 ? 'md:col-span-2' : ''}`}>
                  <div className="space-y-4">
                    <span className="text-xs font-mono font-bold text-aeo-cyan bg-aeo-cyan/10 px-2.5 py-1 rounded-full border border-aeo-cyan/20 inline-block">
                      {module.badge}
                    </span>

                    <h3 className="text-lg font-bold text-white">{module.label}</h3>
                    <p className="text-xs text-white/70 leading-relaxed font-light">{module.desc}</p>

                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider block">Deliverables include:</span>
                      <ul className="space-y-2">
                        {module.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex gap-2 items-start text-xs font-light text-white/80 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {module.specialCallout && (
                      <div className="p-4 bg-aeo-cyan/[0.03] border border-aeo-cyan/20 rounded-xl space-y-1.5 mt-2">
                        <h4 className="text-xs font-bold text-aeo-cyan font-mono flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          {module.specialCallout.title} (Named Deliverable)
                        </h4>
                        <p className="text-xs text-white/70 font-light leading-relaxed">
                          {module.specialCallout.text}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/5 flex justify-end">
                    <Link
                      href={module.linkHref}
                      className="text-xs font-bold text-aeo-cyan hover:underline inline-flex items-center gap-1"
                    >
                      {module.linkText}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 7 — Why Clear, Structured Information Matters */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-purple uppercase tracking-wider">Business Impact</span>
              <h2 className="text-2xl font-bold">Why Clear, Structured Information Matters</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyClearInfoMatters.map((card, idx) => (
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

          {/* SECTION 8 — Process: Assess, Prioritise, Implement, Review */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Methodology</span>
              <h2 className="text-2xl font-bold">Our Delivery Process</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {deliveryProcess.map((step, idx) => (
                <div key={idx} className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl relative space-y-2">
                  <span className="text-xs font-mono font-bold text-aeo-purple/60">{step.step}</span>
                  <h3 className="text-sm font-bold text-white">{step.name}</h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 9 — Evidence from Implementation (Case Study) */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl space-y-4 border-l-aeo-purple border-l-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-aeo-purple">
                  <BarChart3 className="w-4 h-4" />
                  <span>EVIDENCE FROM IMPLEMENTATION</span>
                </div>
                <h3 className="text-xl font-bold text-white">Baby Bento eCommerce Case Study</h3>
              </div>
              
              <Link
                href="/knowledge-hub/case-studies/baby-bento"
                className="px-4 py-2.5 rounded-xl bg-aeo-purple/20 border border-aeo-purple/40 text-white font-bold text-xs hover:bg-aeo-purple/30 transition-all inline-flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 text-aeo-cyan" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1">
                <span className="font-mono text-[10px] text-white/50 uppercase block">Starting position</span>
                <p className="text-white/80 font-light leading-relaxed">
                  E-commerce retailer needed clearer product data structures, category decision content, and rich microdata.
                </p>
              </div>

              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1">
                <span className="font-mono text-[10px] text-white/50 uppercase block">Work completed</span>
                <p className="text-white/80 font-light leading-relaxed">
                  Restructured Liquid product data feeds, deployed rich product schema microdata, and created direct answer FAQs.
                </p>
              </div>

              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1">
                <span className="font-mono text-[10px] text-white/50 uppercase block">Evidence &amp; Results</span>
                <p className="text-white/90 font-medium leading-relaxed">
                  Achieved a <strong className="text-aeo-cyan font-bold">+17% sales uplift</strong> and a <strong className="text-aeo-cyan font-bold">+95% CTR increase</strong> in search answer placements over 90 days.
                </p>
              </div>

              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1">
                <span className="font-mono text-[10px] text-white/50 uppercase block">Limitations</span>
                <p className="text-white/80 font-light leading-relaxed">
                  Results reflect combined site improvements; individual performance varies by catalog size and market conditions.
                </p>
              </div>

              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1 md:col-span-2 lg:col-span-2">
                <span className="font-mono text-[10px] text-white/50 uppercase block">Key lesson for SMBs</span>
                <p className="text-white/80 font-light leading-relaxed">
                  Structured entity clarity and explicit product specifications directly improve search understanding and pre-purchase conversion readiness.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 10 — Plain-Language Glossary */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Plain Language</span>
              <h2 className="text-2xl font-bold">Glossary of Key Terms</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Simple definitions for terms used in Answer Engine Optimisation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plainGlossary.map((g, idx) => (
                <div key={idx} className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl space-y-1">
                  <h3 className="text-xs font-bold text-aeo-cyan font-mono">{g.term}</h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{g.definition}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-xs flex items-center justify-between">
              <span className="text-white/60 font-light">Looking for deep technical guides?</span>
              <Link href="/knowledge-hub/guides" className="text-aeo-cyan hover:underline font-bold inline-flex items-center gap-1">
                Explore Knowledge Hub Guides <BookOpen className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* SECTION 11 — Complete FAQs (100% Visible & Schema Mapped) */}
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

          {/* SECTION 12 — Expanded $995 AEObility Blueprint Section */}
          <div className="p-8 md:p-10 bg-gradient-to-br from-aeo-purple/15 via-black to-aeo-cyan/15 border border-white/10 rounded-3xl text-center space-y-6 mt-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-aeo-cyan/10 rounded-full filter blur-3xl -z-10" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-semibold">
              <Zap className="w-3.5 h-3.5" />
              <span>Prioritised Search Visibility Roadmap</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Start with the <span className="text-gradient-aeo">AEObility Blueprint</span>
            </h2>
            
            <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto font-light leading-relaxed">
              For businesses that want a prioritised AEO and search-visibility roadmap before committing to implementation.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/50 text-left max-w-3xl mx-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-3.5 font-bold text-aeo-cyan font-mono">Included</th>
                    <th className="p-3.5 font-bold text-white">What the client receives</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {blueprintInclusions.map((inc, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="p-3.5 font-semibold text-white/90">{inc.item}</td>
                      <td className="p-3.5 text-white/70 font-light leading-relaxed">{inc.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto pt-2">
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-white/50 block">TIMEFRAME</span>
                <p className="text-xs font-bold text-white">5–7 Business Days</p>
              </div>
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-white/50 block">PRICE</span>
                <p className="text-xs font-bold text-white">$995 AUD</p>
              </div>
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-white/50 block">WALKTHROUGH</span>
                <p className="text-xs font-bold text-white">45-Minute Session</p>
              </div>
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1">
                <span className="text-[10px] font-mono font-semibold text-aeo-cyan block">CREDIT-BACK</span>
                <p className="text-xs font-bold text-white">100% Credited</p>
              </div>
            </div>

            <p className="text-[11px] text-white/60 font-light max-w-lg mx-auto">
              *100% credited toward a qualifying subsequent AEO implementation sprint.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/solutions/aeo-blueprint"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)]"
              >
                <span>Get the AEObility Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/10 transition-all"
              >
                <span>Book a Strategy Call</span>
              </Link>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
