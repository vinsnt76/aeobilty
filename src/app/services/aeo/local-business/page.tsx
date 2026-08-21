import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Compass,
  PhoneCall,
  Check,
  Code2,
  MessageSquare,
  BarChart3,
  ArrowUpRight,
  Layers,
  FileText,
  Award,
  HelpCircle,
  BookOpen,
  Activity,
  UserCheck
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "Local Business AEO & AI Search Services in Perth | AEObility",
  description: "Improve how clearly your Perth business is represented across your website, Google Business Profile, local directories, Maps, and answer-led search experiences.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/local-business",
  },
};

export default function LocalBusinessAEOPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://aeobility.com.au/#localbusiness",
        "name": "AEObility",
        "legalName": "Trekaboutoz trading as AEObility",
        "url": "https://aeobility.com.au",
        "telephone": "+61-8-9000-0000",
        "email": "contact@aeobility.com.au",
        "priceRange": "$$",
        "description": "Local Business AEO and local search services for Perth and Western Australian small businesses.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Perth Business Hub",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "postalCode": "6000",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -31.9523,
          "longitude": 115.8613
        },
        "hasMap": "https://maps.google.com/?q=-31.9523,115.8613",
        "areaServed": [
          { "@type": "City", "name": "Perth" },
          { "@type": "AdministrativeArea", "name": "Western Australia" },
          { "@type": "City", "name": "West Perth" },
          { "@type": "City", "name": "Subiaco" },
          { "@type": "City", "name": "Fremantle" },
          { "@type": "City", "name": "Joondalup" },
          { "@type": "City", "name": "Stirling" },
          { "@type": "City", "name": "Victoria Park" },
          { "@type": "City", "name": "Midland" },
          { "@type": "City", "name": "Rockingham" }
        ],
        "knowsAbout": [
          "Answer Engine Optimisation",
          "Local Search Strategy",
          "MedicalBusiness",
          "PhysicalTherapyClinic",
          "Electrician",
          "Plumber",
          "HVACBusiness"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:30",
            "closes": "17:00"
          }
        ],
        "sameAs": [
          "https://www.truelocal.com.au/business/aeobility",
          "https://www.yellowpages.com.au/wa/perth/aeobility",
          "https://www.linkedin.com/in/vincebaker"
        ],
        "potentialAction": [
          {
            "@type": "Action",
            "name": "Check AI Search Readiness",
            "target": "https://aeobility.com.au/diagnostic"
          },
          {
            "@type": "Action",
            "name": "Get AEObility Blueprint",
            "target": "https://aeobility.com.au/solutions/aeo-blueprint"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services/aeo/local-business#service",
        "name": "Local Business AEO Services",
        "description": "Improve how clearly your Perth business is represented across your website, Google Business Profile, local directories, Maps, and answer-led search experiences.",
        "provider": {
          "@id": "https://aeobility.com.au/#localbusiness"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Perth, Western Australia"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/aeo/local-business#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between Local SEO and Local AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local SEO focuses on improving discoverability, technical quality, Google Business Profile details, and organic rankings in local search engine results. Local AEO builds on those foundations by organizing your business facts, service scope, and decision-stage answers so AI assistants and answer engines can present clear information when customers ask targeted questions."
            }
          },
          {
            "@type": "Question",
            "name": "Can any agency guarantee a top 3 placement in Google Map Packs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. No agency can guarantee placement in the Google Map Pack. Local Map Pack visibility is influenced by relevance, distance, prominence, competition, category selection, review velocity, business legitimacy, and real-time query context."
            }
          },
          {
            "@type": "Question",
            "name": "How does structured JSON-LD data help local search engines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Structured JSON-LD data provides search engines with clear, standardized code declaring business attributes like legal name, address, opening hours, and operating areas. It helps clarify business facts when it matches visible page content, though it does not guarantee specific rankings or inclusion in AI answers."
            }
          },
          {
            "@type": "Question",
            "name": "What sectors do you serve in Perth and Western Australia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide local search and AEO strategy for Perth service businesses across trades (plumbing, electrical, HVAC), allied health clinics (physiotherapy, dental, medical), professional services (accounting, legal, consulting), local retailers, and regional e-commerce brands."
            }
          }
        ]
      }
    ]
  };

  const localSeoVsAeoTable = [
    {
      aspect: "Primary Purpose",
      seo: "Improve discoverability and organic performance in local search & Maps",
      aeo: "Make business facts, services, and FAQs clearer for answer-led search experiences"
    },
    {
      aspect: "Core Foundations",
      seo: "Google Business Profile, NAP consistency, local citations, site usability, technical SEO",
      aeo: "Direct answers, consistent business details, structured JSON-LD data, decision-stage content"
    },
    {
      aspect: "Typical Outputs",
      seo: "Local service pages, directory listings, category landing pages, map profile updates",
      aeo: "Service FAQs, clear pricing factors, decision guides, structured schema graphs"
    },
    {
      aspect: "Relationship",
      seo: "The essential search foundation",
      aeo: "A complementary layer built on strong local SEO"
    }
  ];

  const conversationalPrompts = [
    {
      prompt: '"Who provides AEO and local-search strategy for Perth small businesses?"',
      analysis: "Search systems evaluate website service clarity, location indicators, and provider experience to answer local inquiries."
    },
    {
      prompt: '"Find an emergency electrician serving Subiaco"',
      analysis: "Search engines cross-reference Google Business Profile service areas, operating hours, and location pages to identify active regional providers."
    },
    {
      prompt: '"What is included in a Perth local search audit?"',
      analysis: "Decision-stage questions benefit from explicit pricing factors, service inclusions, and clear execution timelines."
    }
  ];

  const serviceDeliverables = [
    {
      badge: "01. Data Audit",
      label: "Local Data & Directory Consistency Audit",
      desc: "Comprehensive review of Name, Address, and Phone (NAP) details across your website, Google Business Profile, True Local, and Yellow Pages AU.",
      bullets: [
        "Canonical NAP alignment check",
        "Directory inaccuracy report",
        "Core contact & location detail review"
      ]
    },
    {
      badge: "02. Map Profile",
      label: "Google Business Profile Optimization",
      desc: "Align your Google Business Profile primary category, business description, operating hours, and product/service catalogs with on-site pages.",
      bullets: [
        "Primary & secondary category audit",
        "Service & product catalog setup",
        "Review request & update process review"
      ]
    },
    {
      badge: "03. Content",
      label: "Service & Suburb Page Refactoring",
      desc: "Develop clear, plain-language service briefs and location explanations for target Perth regions without keyword stuffing.",
      bullets: [
        "Suburb-level service scope briefs",
        "Clear pricing factor explanations",
        "Customer decision FAQ frameworks"
      ]
    },
    {
      badge: "04. Schema",
      label: "JSON-LD Structured Data Implementation",
      desc: "Deploy valid Schema.org LocalBusiness, PostalAddress, and areaServed JSON-LD code matching visible on-page text.",
      bullets: [
        "Nested LocalBusiness JSON-LD markup",
        "Explicit GeoCoordinates & areaServed setup",
        "Schema Validator verification"
      ]
    },
    {
      badge: "05. Review",
      label: "Measurement & Progress Reviews",
      desc: "Ongoing monitoring of local search impressions, lead quality feedback, and quarterly content refinement priorities.",
      bullets: [
        "Quarterly local search performance reviews",
        "Lead quality & customer query feedback",
        "Content iteration backlog updates"
      ]
    }
  ];

  const PerthSuburbs = [
    "Perth CBD", "West Perth", "East Perth", "Subiaco", "Leederville",
    "Victoria Park", "South Perth", "Joondalup", "Stirling", "Scarborough",
    "Fremantle", "Booragoon", "Cannington", "Rockingham", "Midland"
  ];

  const plainGlossary = [
    { term: "Entity", definition: "A distinct thing, such as a business, person, service, product, or location." },
    { term: "Structured data", definition: "Code (such as JSON-LD) that helps search engines understand key page details." },
    { term: "Answer engine", definition: "A search or conversational platform that provides direct answers alongside or instead of traditional search results." },
    { term: "Local SEO", definition: "Improving visibility in local organic search results, Google Business Profile, and Map listings." },
    { term: "Local AEO", definition: "Applying answer-focused content and accurate business facts to the questions local customers ask." },
    { term: "Comparison content", definition: "Content that fairly evaluates options against consistent criteria." }
  ];

  const faqs = [
    {
      q: "What is the difference between Local SEO and Local AEO?",
      a: "Local SEO focuses on improving discoverability, technical quality, Google Business Profile details, and organic rankings in local search engine results. Local AEO builds on those foundations by organizing your business facts, service scope, and decision-stage answers so AI assistants and answer engines can present clear information when customers ask targeted questions."
    },
    {
      q: "Can any agency guarantee a top 3 placement in Google Map Packs?",
      a: "No. No agency can guarantee placement in the Google Map Pack. Local Map Pack visibility is influenced by relevance, distance, prominence, competition, category selection, review velocity, business legitimacy, and real-time query context."
    },
    {
      q: "How does structured JSON-LD data help local search engines?",
      a: "Structured JSON-LD data provides search engines with clear, standardized code declaring business attributes like legal name, address, opening hours, and operating areas. It helps clarify business facts when it matches visible page content, though it does not guarantee specific rankings or inclusion in AI answers."
    },
    {
      q: "What sectors do you serve in Perth and Western Australia?",
      a: "We provide local search and AEO strategy for Perth service businesses across trades (plumbing, electrical, HVAC), allied health clinics (physiotherapy, dental, medical), professional services (accounting, legal, consulting), local retailers, and regional e-commerce brands."
    }
  ];

  const blueprintInclusions = [
    { item: "Local presence & directory review", desc: "A practical assessment of NAP consistency, Google Business Profile setup, and directory accuracy" },
    { item: "Service page & FAQ assessment", desc: "Recommendations for key local service pages, customer decision FAQs, and comparison opportunities" },
    { item: "Technical & structured-data review", desc: "A prioritised implementation checklist for JSON-LD schema where applicable" },
    { item: "90-day action roadmap", desc: "Clear work priorities, dependencies, suggested sequence, and next steps" },
    { item: "Strategy walkthrough", desc: "A 45-minute session to explain findings and answer questions" }
  ];

  const jsonLdSnippet = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://aeobility.com.au/#localbusiness",
      "name": "AEObility",
      "legalName": "Trekaboutoz trading as AEObility",
      "url": "https://aeobility.com.au",
      "telephone": "+61-8-9000-0000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Perth Business Hub",
        "addressLocality": "Perth",
        "addressRegion": "WA",
        "postalCode": "6000",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -31.9523,
        "longitude": 115.8613
      },
      "hasMap": "https://maps.google.com/?q=-31.9523,115.8613",
      "areaServed": [
        { "@type": "City", "name": "Perth" },
        { "@type": "City", "name": "West Perth" },
        { "@type": "City", "name": "Subiaco" },
        { "@type": "City", "name": "Fremantle" }
      ],
      "knowsAbout": [
        "Answer Engine Optimisation",
        "MedicalBusiness",
        "Electrician",
        "Plumber"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "17:00"
        }
      ]
    }
  ]
}`;

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
        <article className="flex flex-col gap-12">
          
          {/* SECTION 1 — Hero */}
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Grounded Local Search &amp; AEO for WA Businesses</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Local Business <span className="text-gradient-aeo">AEO Services in Perth</span>
            </h1>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              Improve how clearly your Perth business is represented across your website, Google Business Profile, local directories, Maps, and answer-led search experiences. AEObility combines local SEO foundations with clear service content, accurate business information, and structured data where appropriate.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/solutions/aeo-blueprint"
                className="btn-primary flex items-center gap-2 text-xs"
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
          </header>

          {/* SECTION 2 — Question Header 1: Direct Answer Block */}
          <section className="atomic-answer-block p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-2xl border-l-aeo-cyan border-l-4 space-y-4">
            <div className="flex items-center gap-2 text-xs text-aeo-cyan font-mono font-semibold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Machine-Extractable Passage</span>
            </div>
            
            <h2 className="text-xl font-bold text-white">What is Local Business AEO and How Does It Work in Perth?</h2>
            
            <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">
              Local business AEO applies answer-focused content, accurate business information, and local SEO fundamentals to the questions customers ask before they call, visit, or buy. It helps clarify what your business does, where you operate, who you serve, and which services are right for different needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-white/5">
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-aeo-cyan" />
                  Local Data &amp; NAP Consistency
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Review business name, address, phone details, and local directory listings for accuracy and consistency.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-aeo-cyan" />
                  Clear Service &amp; Location Pages
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Create explicit service scope descriptions, suburb coverage maps, and operating hour details.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-aeo-cyan" />
                  Decision-Support &amp; Answers
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Build FAQs, direct answers, and fair comparison guides for pre-purchase customer questions.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3 — Local SEO & AEO: How They Work Together */}
          <section className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Search Strategy</span>
              <h2 className="text-2xl font-bold">Local SEO &amp; AEO: How They Work Together</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Compare how traditional local search engine optimisation complements modern answer-focused content engineering.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.01]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="p-4 font-bold text-white/90 w-1/4">Area</th>
                    <th className="p-4 font-bold text-blue-400 w-3/8">Local SEO</th>
                    <th className="p-4 font-bold text-aeo-cyan w-3/8">Local AEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {localSeoVsAeoTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-semibold text-white/80 font-mono">{row.aspect}</td>
                      <td className="p-4 text-white/60 font-light leading-relaxed">{row.seo}</td>
                      <td className="p-4 text-white/90 font-light leading-relaxed bg-aeo-cyan/[0.02]">{row.aeo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-white/70 font-light leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
              <strong className="text-white font-semibold">Supporting note:</strong> Local AEO is not a replacement for Local SEO. Strong Local SEO remains essential; Local AEO builds on those foundations by making key business information more explicit, consistent, and useful for answer-led discovery.
            </p>
          </section>

          {/* SECTION 4 — Question Header 2: Conversational Search Queries */}
          <section className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-purple uppercase tracking-wider">Conversational Intent</span>
              <h2 className="text-2xl font-bold">How Do Conversational Search Engines Match Perth Local Queries?</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Prospective clients often use conversational or voice search queries when seeking local solutions. AEObility helps clarify your business information so search systems can present accurate facts when users ask pre-purchase questions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {conversationalPrompts.map((item, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-aeo-cyan text-xs font-mono font-bold">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Customer Search #{idx + 1}</span>
                    </div>
                    <p className="text-xs font-bold text-white italic bg-white/5 p-3 rounded-xl border border-white/5">
                      {item.prompt}
                    </p>
                  </div>
                  <div className="space-y-1 border-t border-white/5 pt-3">
                    <span className="text-[10px] font-mono text-white/50 uppercase block">Search Matching Logic:</span>
                    <p className="text-xs text-white/70 font-light leading-relaxed">{item.analysis}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5 — Tangible Scope & Deliverables */}
          <section className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Tangible Scope</span>
              <h2 className="text-2xl font-bold">Our Local AEO Deliverables &amp; Scope</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Practical, buyer-friendly deliverables designed to strengthen search quality and business information clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceDeliverables.map((module, idx) => (
                <div key={idx} className={`p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-between space-y-4 hover:border-white/20 transition-all ${idx === 4 ? 'md:col-span-2' : ''}`}>
                  <div className="space-y-4">
                    <span className="text-xs font-mono font-bold text-aeo-cyan bg-aeo-cyan/10 px-2.5 py-1 rounded-full border border-aeo-cyan/20 inline-block">
                      {module.badge}
                    </span>

                    <h3 className="text-lg font-bold text-white">{module.label}</h3>
                    <p className="text-xs text-white/70 leading-relaxed font-light">{module.desc}</p>

                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider block">Deliverables include:</span>
                      <ul className="space-y-2">
                        {module.bullets.map((del, dIdx) => (
                          <li key={dIdx} className="flex gap-2 items-start text-xs font-light text-white/80 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6 — Dedicated Provider Proof: Perth AEO Specialist Section */}
          <section className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-purple uppercase tracking-wider">Provider Credibility</span>
              <h2 className="text-2xl font-bold">Perth AEO Specialist for Local Businesses</h2>
              <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed max-w-3xl">
                AEObility helps Perth and WA businesses improve the clarity, consistency, and usefulness of their local service information across websites, Google Business Profiles, local directories, and answer-led search experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-aeo-cyan text-sm font-bold">
                  <MapPin className="w-4 h-4" />
                  <span>Local WA Experience</span>
                </div>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Based in Perth, engineering technical search, local SEO foundations, and structured data solutions for Australian SMBs.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-aeo-purple text-sm font-bold">
                  <Building2 className="w-4 h-4" />
                  <span>Sectors Served</span>
                </div>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Local trades (plumbing, electrical, HVAC), allied health clinics, professional services (accounting, legal, consulting), retailers, and e-commerce.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-aeo-cyan text-sm font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Transparent Methodology</span>
                </div>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Grounded in verifiable technical search standards, explicit deliverables, and realistic measurement expectations without overpromised guarantees.
                </p>
              </div>
            </div>

            {/* Case Study Spotlight with Attribution Caveats */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl space-y-4 border-l-aeo-purple border-l-4 mt-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-aeo-purple">
                    <BarChart3 className="w-4 h-4" />
                    <span>LOCAL EVIDENCE &amp; CASE STUDY PROOF</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Baby Bento Case Study</h3>
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
                  <span className="font-mono text-[10px] text-white/50 uppercase block">Starting Context</span>
                  <p className="text-white/80 font-light leading-relaxed">
                    Perth-based retail brand required clear product specifications, structured JSON-LD schema, and category decision content.
                  </p>
                </div>

                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1">
                  <span className="font-mono text-[10px] text-white/50 uppercase block">Work Completed</span>
                  <p className="text-white/80 font-light leading-relaxed">
                    Refactored product data feeds, deployed rich product schema markup, and built customer decision FAQ frameworks.
                  </p>
                </div>

                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1">
                  <span className="font-mono text-[10px] text-white/50 uppercase block">Results Over 90 Days</span>
                  <p className="text-white/90 font-medium leading-relaxed">
                    Achieved a <strong className="text-aeo-cyan font-bold">+17% sales uplift</strong> and a <strong className="text-aeo-cyan font-bold">+95% CTR increase</strong> in organic answer placements.
                  </p>
                </div>

                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1 lg:col-span-3">
                  <span className="font-mono text-[10px] text-white/50 uppercase block">Measurement Attribution Caveat</span>
                  <p className="text-white/70 font-light leading-relaxed italic">
                    *Results reflect combined site improvements across content, JSON-LD schema, and search fundamentals over 90 days. Individual results vary depending on industry competition, location, and baseline authority.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7 — Question Header 3: JSON-LD Schema & Plain Glossary */}
          <section className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Technical &amp; Terminology Clarity</span>
              <h2 className="text-2xl font-bold">What Structured Data Signals Are Required for WA Trades &amp; Clinics?</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Structured JSON-LD data provides search engines with clear, standardized code declaring business attributes like legal name, address, opening hours, trade capabilities, and operating areas.
              </p>
            </div>

            <div className="p-6 bg-black/80 border border-white/10 rounded-2xl space-y-3 font-mono text-xs overflow-x-auto relative">
              <div className="flex justify-between items-center pb-2 border-b border-white/10 text-white/50">
                <span className="flex items-center gap-1.5 text-aeo-cyan font-bold">
                  <Code2 className="w-4 h-4" />
                  LocalBusiness_Schema.jsonld
                </span>
                <span>JSON-LD Format</span>
              </div>
              <pre className="text-white/80 leading-relaxed overflow-x-auto">
                <code>{jsonLdSnippet}</code>
              </pre>
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="text-sm font-bold text-white font-mono">Plain-Language Glossary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plainGlossary.map((g, idx) => (
                  <div key={idx} className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl space-y-1">
                    <h4 className="text-xs font-bold text-aeo-cyan font-mono">{g.term}</h4>
                    <p className="text-xs text-white/60 leading-relaxed font-light">{g.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 8 — Perth Suburban Operating Regions */}
          <section className="p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider">Geographic Service Footprint</span>
              <h2 className="text-xl font-bold text-white">Targeted Perth &amp; WA Operating Regions</h2>
              <p className="text-xs text-white/60 font-light max-w-xl">
                Explicitly declared in structured JSON-LD schema markup to match visible operating regions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {PerthSuburbs.map((suburb, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/80 font-mono inline-flex items-center gap-1.5"
                >
                  <MapPin className="w-3 h-3 text-aeo-cyan" />
                  {suburb}
                </span>
              ))}
            </div>
          </section>

          {/* SECTION 9 — Mandatory Target Link Corridors (Lattice Connectivity) */}
          <section className="p-6 bg-white/[0.01] border border-white/10 rounded-2xl space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-aeo-cyan">Required Link Corridors &amp; Knowledge Mesh</span>
              <h3 className="text-base font-bold text-white">Explore Related Local Search &amp; GEO Strategies</h3>
              <p className="text-xs text-white/60 font-light">
                Contextual dual-directional links connecting local business signals with dedicated technical guides and local expert profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-semibold pt-1">
              <Link href="/services/geo-marketing" className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-aeo-cyan/30 hover:text-aeo-cyan transition-all space-y-1">
                <span className="text-aeo-cyan font-mono block text-[10px] uppercase">Proximity Signals</span>
                <span className="text-white group-hover:text-aeo-cyan">GEO Marketing Services &rarr;</span>
                <p className="text-[11px] text-white/50 font-light leading-relaxed">Optimize geographic engine performance and location vectors.</p>
              </Link>

              <Link href="/knowledge-hub/geo" className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-aeo-cyan/30 hover:text-aeo-cyan transition-all space-y-1">
                <span className="text-aeo-purple font-mono block text-[10px] uppercase">Topical Authority</span>
                <span className="text-white group-hover:text-aeo-cyan">GEO vs Local SEO Guide &rarr;</span>
                <p className="text-[11px] text-white/50 font-light leading-relaxed">Technical guide on local search vs generative map discovery.</p>
              </Link>

              <Link href="/about/freelance-seo-consultant-perth" className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-aeo-cyan/30 hover:text-aeo-cyan transition-all space-y-1">
                <span className="text-aeo-cyan font-mono block text-[10px] uppercase">Local Practitioner</span>
                <span className="text-white group-hover:text-aeo-cyan">Freelance SEO Consultant Perth &rarr;</span>
                <p className="text-[11px] text-white/50 font-light leading-relaxed">Verified Perth digital strategy &amp; local optimization credentials.</p>
              </Link>
            </div>
          </section>

          {/* SECTION 10 — Complete FAQs (100% Visible & Schema Mapped) */}
          <section className="space-y-6 border-t border-white/5 pt-10">
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
          </section>

          {/* SECTION 11 — Expanded $995 AEObility Blueprint CTA */}
          <section className="p-8 md:p-10 bg-gradient-to-br from-aeo-purple/15 via-black to-aeo-cyan/15 border border-white/10 rounded-3xl text-center space-y-6 mt-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-aeo-cyan/10 rounded-full filter blur-3xl -z-10" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prioritised Search Visibility Roadmap</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Start with the <span className="text-gradient-aeo">AEObility Blueprint</span>
            </h2>
            
            <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto font-light leading-relaxed">
              For Perth businesses that want a prioritised local AEO and search-visibility roadmap before committing to implementation.
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
                <span>Get the AEObility Blueprint ($995)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/10 transition-all"
              >
                <Activity className="w-3.5 h-3.5 text-aeo-cyan" />
                <span>Check AI Search Readiness</span>
              </Link>
            </div>
          </section>

          <footer className="pt-2 flex">
            <Link href="/services/aeo" className="text-xs font-medium text-white/40 hover:text-white transition-colors">
              &larr; Back to <strong className="text-white hover:underline">AEO Services</strong>
            </Link>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}
