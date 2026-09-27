import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { getLocalBusinessAeoSchemaGraph } from '@/lib/schema/localBusinessAeo';
import FaqAccordion from '@/components/FaqAccordion';
import AeoDiagnosticSection from '@/components/services/AeoDiagnosticSection';
import AeoContactSection from '@/components/services/AeoContactSection';
import AeoStartingPointGrid from '@/components/services/AeoStartingPointGrid';
import LocalAudienceTabs from '@/components/services/LocalAudienceTabs';
import {
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Building2,
  Calendar,
  Search,
  FileCheck,
  Code,
  Users,
  ShieldCheck,
  Stethoscope,
  Wrench,
  AlertTriangle,
  FileText,
  Activity,
  Check,
  Home,
  ShieldAlert,
  HelpCircle,
  CheckSquare
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Local Business AEO & Local Search Optimisation | AEObility",
  description: "Fix inconsistent business details, missing suburb schema, and location mapping gaps across Search, Maps, and AI answers. Flat-rate sprints from $495 AUD ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/local-business",
  },
  openGraph: {
    title: "Local Business AEO & Local Search Optimisation | AEObility",
    description: "Fix inconsistent business details, missing suburb schema, and location mapping gaps across Search, Maps, and AI answers.",
    url: "https://aeobility.com.au/services/aeo/local-business",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/services/aeo-local-business_perth_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "Clean smartphone UI display emphasising an optimised map pin interaction state for local business AEO.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Business AEO & Local Search Optimisation | AEObility",
    description: "Fix inconsistent business details, missing suburb schema, and location mapping gaps across Search, Maps, and AI answers.",
    images: ["https://aeobility.com.au/images/services/aeo-local-business_perth_AEObility.webp"],
  },
  keywords: [
    "local business aeo",
    "local search optimisation perth",
    "local business schema markup",
    "google maps business profile optimisation",
    "nap directory standardisation",
    "suburb service area schema",
    "multi location clinic aeo"
  ]
};

export const LOCAL_BUSINESS_AEO_INTERNAL_LINKS = [
  {
    targetSlug: "/brand-facts",
    anchorText: "canonical product database and uniform pricing framework",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/geo-marketing",
    anchorText: "GEO Services Sprints",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-blueprint",
    anchorText: "AEObility Strategic Blueprint",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function LocalBusinessAEOPage() {
  const symptoms = [
    {
      title: "Your business appears for the wrong suburb: or not at all",
      symptom: "Customers search for local trades, clinics or services in nearby suburbs, but your business is invisible or mapped to an old location.",
      solution: "We inject exact location schema and restructure suburb service area pages so search engines verify your true coverage radius."
    },
    {
      title: "Maps and directories show conflicting business details (NAP)",
      symptom: "Google Maps, Apple Maps, Yellow Pages and TrueLocal display different phone numbers, addresses or operating hours.",
      solution: "We standardise your Name, Address and Phone (NAP) details across priority directories and align your Google Business Profile."
    },
    {
      title: "You have a good website, but calls and bookings remain inconsistent",
      symptom: "Visitors land on generic service pages that lack clear suburb details, operating hours or immediate contact actions.",
      solution: "We rewrite key service pages into self-contained atomic answer blocks that make calling or booking straightforward for AI search systems and answer engines."
    },
    {
      title: "Your multi-location business sends authority to the wrong page",
      symptom: "Search engines direct local patients or clients to your main head-office page instead of their nearest branch or clinic.",
      solution: "We build a multi-location schema graph and internal linking lattice to pass authority directly to individual clinic/branch pages."
    },
    {
      title: "Duplicate profiles or outdated former location listings",
      symptom: "Former trading addresses or legacy duplicate Google Business profiles remain online, confusing both maps algorithms and local clients.",
      solution: "We submit verified profile consolidation requests and inject canonical source schema on your domain to establish primary source authority."
    }
  ];

  const technicalBuildingBlocks = [
    {
      icon: <MapPin className="w-6 h-6 text-cyan-400" />,
      title: "Make your business details machine-readable (LocalBusiness Schema)",
      code: "S1 Series",
      description: "Deploy nested JSON-LD schema (LocalBusiness, MedicalClinic, Electrician, Air Conditioning Business) defining exact geographic coordinates, operating hours, and service radiuses so search engines and AI assistants parse your true location."
    },
    {
      icon: <Building2 className="w-6 h-6 text-purple-400" />,
      title: "Fix conflicting business listings (Directory Citation Clean-Up)",
      code: "S4 Series",
      description: "Standardise business name, address, and phone number (NAP) details across major Australian business directories (Yellow Pages, TrueLocal), Google Business Profile, and Apple Maps to eliminate machine confusion."
    },
    {
      icon: <Wrench className="w-6 h-6 text-cyan-400" />,
      title: "Restructure service-area pages into clear answers (Service Area Restructuring)",
      code: "S2 Series",
      description: "Structure suburb pages that answer a local customer's question clearly, so search and AI search systems can identify the right service and location. Technical implementation: atomic answer blocks, structured service-area entities and internal location linking."
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-purple-400" />,
      title: "Connect multi-location authority (Internal Location Lattice)",
      code: "S3 Series",
      description: "Link core service pages to regional clinic or suburb location pages using structured anchor text to pass local search authority directly to individual branch locations."
    }
  ];

  const evidenceCards = [
    {
      badge: "CITATION ALIGNMENT ARTEFACT",
      title: "Directory NAP & Hours Standardisation Register",
      problem: "Different phone numbers and operating hours across Yellow Pages, TrueLocal, and Google Business Profile caused machine confusion.",
      solution: "Deployed canonical NAP schema and submitted profile alignment notices across priority Australian business directories.",
      deliverable: "Directory Update Register + Verified Schema Validation Result"
    },
    {
      badge: "MULTI-LOCATION ARTEFACT",
      title: "Branch Location & Internal Lattice Architecture",
      problem: "Satellite clinic queries were directed to the head-office CBD domain, causing patient booking friction for Joondalup searches.",
      solution: "Constructed multi-location MedicalClinic schema graph and connected branch specialty pages directly to location booking nodes.",
      deliverable: "Location Schema Graph + Changed-Page Code Handover Notes"
    },
    {
      badge: "SERVICE AREA ARTEFACT",
      title: "Suburb Answer Unit Restructuring",
      problem: "Generic service pages lacked suburb-specific details, preventing AI search assistants from recognising true service radiuses.",
      solution: "Reorganised core service pages into structured suburb answer units answering specific local queries.",
      deliverable: "Atomic Answer Unit Files + Implementation Change Log"
    }
  ];

  const faqs = [
    {
      question: "Can a mobile trade or service business rank across multiple suburbs without a physical storefront?",
      answer: "Yes. Mobile trades (plumbers, electricians, builders, air conditioning specialists) operate as Service Area Businesses (SABs). We configure your LocalBusiness schema with explicit GeoCircle and areaServed properties, standardise directory listings, and structure suburb service pages without disclosing private home addresses."
    },
    {
      question: "Do you handle healthcare clinic advertising and compliance guidelines in Australia?",
      answer: "Yes. For medical practices, dental clinics, and allied health providers, all content, schema markup, and patient trust messaging adhere strictly to Australian Health Practitioner Regulation Agency (AHPRA) advertising guidelines. We focus on verifiable facts, operating hours, practitioner details, and direct booking paths without making false clinical or patient acquisition guarantees."
    },
    {
      question: "Can AEObility work with our existing web developer or internal team?",
      answer: "Absolutely. Every AEObility sprint includes complete handover notes, copy files, and validated JSON-LD schema snippets. Your existing web developer can easily copy-paste the updates, or our strategy team can implement them directly on your CMS."
    },
    {
      question: "What happens if certain local citations or directory listings cannot be claimed?",
      answer: "Where third-party directory listings cannot be claimed directly, we submit verified update notices, align your website footer and Google Business Profile NAP strings, and inject authoritative JSON-LD schema on your canonical domain to establish primary source authority."
    },
    {
      question: "What is the difference between the Free Local Scan and the $995 Blueprint?",
      answer: "The Free Local Scan provides a quick local signal scorecard highlighting your top 3 verified technical gaps and recommended next step. The AEObility Blueprint ($995 AUD ex. GST) is a full diagnostic inventory, prioritised 90-day roadmap, implementation sequence, scope assumptions and investment plan: which is 100% credited if you book Foundation Implementation within 60 days."
    },
    {
      question: "Are there any ongoing monthly contracts or agency retainers?",
      answer: "No. All AEObility local business sprints are fixed-scope, flat-rate engagements delivered in 4–5 business days (Micro-Sprints) or 4 weeks (Foundation). No ongoing monthly retainer or locked-in contract is required."
    }
  ];

  const formattedFaqs = faqs.map((f) => ({
    q: f.question,
    a: f.answer,
  }));

  const jsonLdGraph = getLocalBusinessAeoSchemaGraph(faqs);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Unified JSON-LD Connected Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. Outcome-Led Hero Block */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <MapPin className="w-4 h-4 text-aeo-cyan" />
              <span>Local Search &amp; Proximity Optimisation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Local Search &amp; AEO for <span className="text-gradient-aeo">Local Businesses</span>
            </h1>

            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Fix inconsistent business details, missing suburb schema, and location mapping gaps across Search, Maps, and AI answers.
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
                src="/images/services/aeo-local-business_perth_AEObility.webp"
                alt="Clean smartphone UI display emphasising an optimised map pin interaction state for local business AEO."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs with Elevated Free Scan Highlight */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-3.5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix one local signal gap or build a complete local foundation.</span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 font-serif block">Typical delivery: 4–5 business days from confirmed scope and access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <a
                    href="#local-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Search className="w-4 h-4 text-black shrink-0" />
                    <span>Run Free Local Scan</span>
                  </a>
                  <a
                    href="#local-contact-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/20 hover:border-cyan-400 text-white font-semibold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Request a Scoped Quote</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Looking for our broader service catalogue? Explore <Link href="/services/geo-marketing" className="text-cyan-400 hover:underline font-medium">GEO Services Sprints</Link>, review our <Link href="/brand-facts" className="text-cyan-400 hover:underline font-medium">canonical product database and uniform pricing framework</Link>, or check <Link href="/solutions/aeo-blueprint" className="text-cyan-400 hover:underline font-medium">AEObility Strategic Blueprint</Link>.
            </p>
          </section>

          {/* 2. Dominating Local Map Packs (Symptom Checklist) */}
          <section id="symptoms" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Dominating Local Map Packs</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Signs Your Local Search Signals Are Broken</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Ensure your local business gets found on maps and surfaces in local search optimisation Perth &amp; national proximity engines.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {symptoms.map((item, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 hover:border-cyan-500/40 transition">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    <strong className="text-white block mb-0.5">What happens:</strong>
                    {item.symptom}
                  </p>
                  <div className="bg-cyan-950/30 border border-cyan-500/20 p-3 rounded-xl text-xs text-cyan-300 font-serif leading-relaxed">
                    <strong className="text-white block mb-0.5">What AEObility fixes:</strong>
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Optimising for Voice and Conversational Assistant Proximity */}
          <section id="audience-pathways" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Optimising for Voice and Conversational Assistant Proximity</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Built for Service Areas &amp; Local Locations</h2>
              <p className="text-xs text-white/60 font-serif">Proximity algorithm targeting and local entity profiles for businesses seeking AEO marketers near me and AEO services near me.</p>
            </div>

            <LocalAudienceTabs />
          </section>

          {/* 4. Technical Building Blocks Section */}
          <section id="technical-blocks" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Core Technical Capabilities</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Engineered Local Visibility Building Blocks</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">How we fix broken map signals, incorrect operating details, and disconnected suburb pages.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalBuildingBlocks.map((block, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4 hover:border-cyan-500/40 transition">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                      {block.icon}
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                      {block.code}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">{block.title}</h3>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">{block.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Evidence & Implementation Artefacts Section */}
          <section id="evidence-artefacts" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Verifiable Evidence</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Local Implementation Deliverables</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Every local sprint delivers machine-readable code, verified directory logs, and handover documentation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {evidenceCards.map((card, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-purple-500/30 p-6 rounded-2xl space-y-4 flex flex-col justify-between hover:border-purple-400/50 transition">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-wider block">{card.badge}</span>
                    <h3 className="text-sm font-bold text-white font-soehne-breit">{card.title}</h3>
                    <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                      <strong className="text-white block mb-0.5">Problem:</strong>
                      {card.problem}
                    </p>
                    <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                      <strong className="text-white block mb-0.5">Solution:</strong>
                      {card.solution}
                    </p>
                  </div>
                  <div className="bg-purple-950/30 border border-purple-500/20 p-3 rounded-xl text-[11px] font-mono text-purple-300">
                    <strong className="text-white block mb-0.5 font-sans">Deliverable:</strong>
                    {card.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Engagement Paths Grid */}
          <AeoStartingPointGrid
            id="engagement-paths"
            contactAnchor="#local-contact-form"
            diagnosticAnchor="#local-diagnostic-form"
          />

          {/* 7. Diagnostic Section */}
          <AeoDiagnosticSection
            id="local-diagnostic-form"
            badgeTitle="Instant Local Visibility Scan"
            heading="Run a Free Local Visibility Scan"
            subheading="Enter your website URL to check local schema markup, Google Maps alignment, and proximity signals."
            formId="local_business_aeo_diagnostic_form"
            leadType="local_aeo_scan"
          />

          {/* 8. Contact Form Section */}
          <AeoContactSection
            id="local-contact-form"
            badgeTitle="Local Business Sprint"
            heading="Request a Scoped Local Quote"
            subheading="Tell us about your business locations and priority service areas. We will confirm scope and pricing before you commit."
            formId="local_business_aeo_contact_form"
            leadType="local_business_enquiry"
            buttonText="Request Scoped Local Quote"
            receivedHeading="Local Enquiry Received"
          />

          {/* 9. FAQ Accordion Section */}
          <section id="faq-local" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about AEObility local business AEO services.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FaqAccordion faqs={formattedFaqs} />
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
