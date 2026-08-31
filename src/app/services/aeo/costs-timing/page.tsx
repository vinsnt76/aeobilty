import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { 
  Info, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  HelpCircle, 
  Layers, 
  Calendar, 
  Check, 
  ChevronRight,
  Target,
  FileText,
  Boxes,
  FileCheck,
  Code,
  Activity,
  Search,
  ExternalLink
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AEO Costs & Project Timing | AI Search Optimisation Pricing | AEObility',
  description: "Explore AEObility's fixed-scope AEO service costs. Review milestones for the $995 MVP Strategic Blueprint and $3,195 Foundation Package. Custom scope by application.",
  alternates: {
    canonical: 'https://aeobility.com.au/services/aeo/costs-timing',
  },
  openGraph: {
    title: 'AEO Costs & Project Timing | AI Search Optimisation Pricing | AEObility',
    description: "Explore AEObility's fixed-scope AEO service costs. Review milestones for the $995 MVP Strategic Blueprint and $3,195 Foundation Package. Custom scope by application.",
    url: 'https://aeobility.com.au/services/aeo/costs-timing',
    type: 'website',
  },
};

export default function AEOPricingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        '@id': 'https://aeobility.com.au/services/aeo/costs-timing#itemlist',
        'name': 'AEObility AEO Pricing and Implementation Pathway',
        'description': 'Four-stage commercial ladder for Answer Engine Optimisation (AEO) services, from free diagnostic assessment to custom application-based implementation.',
        'itemListOrder': 'https://schema.org/ItemListOrderAscending',
        'numberOfItems': 4,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'item': {
              '@type': 'Service',
              '@id': 'https://aeobility.com.au/diagnostic#service',
              'name': 'AI Visibility Score',
              'description': 'Automated 6-stage telemetry diagnostic checking entity clarity, structured schema coverage, and machine readability within 24 hours.',
              'provider': {
                '@type': 'ProfessionalService',
                '@id': 'https://aeobility.com.au/#organization',
                'name': 'AEObility'
              },
              'offers': {
                '@type': 'Offer',
                'price': '0',
                'priceCurrency': 'AUD',
                'availability': 'https://schema.org/InStock'
              }
            }
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'item': {
              '@type': 'Service',
              '@id': 'https://aeobility.com.au/solutions/aeo-blueprint#service',
              'name': 'The AEObility Strategic Blueprint',
              'description': 'Standalone 90-day operational roadmap and technical gap analysis. 100% credited back into implementation if booked within 60 days.',
              'provider': {
                '@type': 'ProfessionalService',
                '@id': 'https://aeobility.com.au/#organization',
                'name': 'AEObility'
              },
              'offers': {
                '@type': 'Offer',
                'price': '995',
                'priceCurrency': 'AUD',
                'priceValidUntil': '2027-06-30',
                'availability': 'https://schema.org/InStock'
              }
            }
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'item': {
              '@type': 'Service',
              '@id': 'https://aeobility.com.au/solutions/aeo-sprint#service',
              'name': 'Foundation Implementation',
              'description': 'A 4-week structured deployment executing connected schema graphs, atomic page rewrites, and internal link architecture.',
              'provider': {
                '@type': 'ProfessionalService',
                '@id': 'https://aeobility.com.au/#organization',
                'name': 'AEObility'
              },
              'offers': {
                '@type': 'Offer',
                'price': '3195',
                'priceCurrency': 'AUD',
                'priceValidUntil': '2027-06-30',
                'availability': 'https://schema.org/InStock'
              }
            }
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'item': {
              '@type': 'Service',
              '@id': 'https://aeobility.com.au/contact#custom-implementation',
              'name': 'Custom AEO Implementation',
              'description': 'Custom multi-entity and complex network implementation available by application following Blueprint review.',
              'provider': {
                '@type': 'ProfessionalService',
                '@id': 'https://aeobility.com.au/#organization',
                'name': 'AEObility'
              },
              'offers': {
                '@type': 'Offer',
                'description': 'Available by application following Blueprint review',
                'availability': 'https://schema.org/LimitedAvailability'
              }
            }
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://aeobility.com.au/services/aeo/costs-timing#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How does the $995 Blueprint credit work?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The Blueprint is a complete 90-day strategy document that you own outright. If you proceed with Foundation Implementation ($3,195 AUD), or are accepted for a custom implementation engagement, the entire $995 AUD Blueprint investment is credited back against the approved implementation scope.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is included in the $3,195 Foundation Implementation package?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The Foundation Implementation is a fixed-scope 4-week engagement. It deploys verified JSON-LD schema graphs, rewrites priority content into machine-extractable atomic answer blocks, strengthens internal link paths, and standardises citation evidence across core commercial pages.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can AEObility support larger or more complex implementations?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. For multi-location brands, extensive ecommerce catalogues, or multi-entity networks, custom implementation may be available by application. Every engagement is assessed after Blueprint review to confirm strategic fit, technical readiness, delivery scope, and capacity.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How long does it take to see measurable results from AEO?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Initial visibility diagnostic scans are delivered within 24 hours. The Blueprint establishes a 90-day roadmap, and measurable improvements in AI retrieval and citation footprints typically become observable within 6 to 12 weeks of initial schema and content deployment, though timing varies by site condition and platform indexing cycles.'
            }
          }
        ]
      }
    ]
  };

  const timelineSteps = [
    {
      weekNumber: 'Week 1',
      title: 'Structured Data Refactoring',
      tag: 'Organisational Code Restructuring',
      description: "Structuring your site's code so AI engines can parse and verify your exact organisational details and service locations without guesswork.",
      deliverables: ['DOM Schema Graph Nesting', 'Wikidata Node Reference Connections']
    },
    {
      weekNumber: 'Week 2',
      title: 'Atomic Answer Engineering',
      tag: 'Atomic Answer Copywriting',
      description: 'Rewriting your core website sections into clear, high-density answers positioned exactly where AI models look first when pulling direct citations.',
      deliverables: ['High-Salience Answer Blocks', 'Primacy Attention Window Optimisation']
    },
    {
      weekNumber: 'Week 3',
      title: 'Semantic Internal Linking',
      tag: 'Internal Relationship Mapping',
      description: 'Connecting the links between your primary services and educational guides so search engines clearly map how your expertise relates to your offers.',
      deliverables: ['Bidirectional Lattice Anchoring', 'Authority Routing Equity Dispersal']
    },
    {
      weekNumber: 'Week 4',
      title: 'Technical Verification & Audit',
      tag: 'Verification & Handover Audit',
      description: 'Linking your published evidence sources to your core facts and executing a final diagnostic crawl to verify that your data is machine-readable.',
      deliverables: ['Source Verification Link Logging', 'Telemetric Verification Run & Handover']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10 pointer-events-none" />

      <Navbar />
      <Breadcrumbs />

      {/* Main Container with Defensive Bottom Spacing for Floating Widgets */}
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-32 sm:pb-24 w-full space-y-10">
        
        {/* Header Block with Scannable Hero Chunking */}
        <header className="space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/25 text-aeo-cyan text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing &amp; Service Framework</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-soehne-breit leading-tight">
            How Much Does AEO Cost and <span className="text-gradient-aeo">What Do I Get?</span>
          </h1>

          <div className="space-y-3 max-w-3xl">
            <p className="text-sm sm:text-base text-white/90 font-serif leading-relaxed">
              Our service structure provides clear, fixed-scope milestones designed to fit single-operator deployment pipelines. Review our four operational tiers:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-serif">
              <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2">
                <span className="text-aeo-cyan font-mono font-bold shrink-0">1. Discover:</span>
                <span className="text-zinc-300">
                  Run our free <Link href="/diagnostic" className="text-aeo-cyan font-semibold hover:underline">AI Visibility Score</Link> to instantly isolate your site&apos;s machine-readability gaps.
                </span>
              </li>
              <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2">
                <span className="text-aeo-purple font-mono font-bold shrink-0">2. Define:</span>
                <span className="text-zinc-300">
                  Receive a 90-day technical roadmap via the <Link href="/solutions/aeo-blueprint" className="text-aeo-purple font-semibold hover:underline">$995 AUD ex. GST Strategic Blueprint</Link>.
                </span>
              </li>
              <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2">
                <span className="text-emerald-400 font-mono font-bold shrink-0">3. Build:</span>
                <span className="text-zinc-300">
                  Establish your entire data layout with our <Link href="/solutions/aeo-sprint" className="text-emerald-400 font-semibold hover:underline">$3,195 AUD ex. GST Foundation Implementation</Link>.
                </span>
              </li>
              <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2">
                <span className="text-amber-400 font-mono font-bold shrink-0">4. Scale:</span>
                <span className="text-zinc-300">
                  Bespoke multi-location or extensive e-commerce catalogue integrations are available exclusively <Link href="/contact?inquiry=custom-application" className="text-amber-400 font-semibold hover:underline">By Application</Link>.
                </span>
              </li>
            </ul>
          </div>

          {/* 100% Risk-Reversal Implementation Credit Box */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-aeo-cyan/10 via-zinc-900 to-aeo-purple/10 border border-aeo-cyan/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs sm:text-sm font-serif">
              <strong className="text-white font-sans block">100% Risk-Reversal Implementation Credit</strong>
              <p className="text-zinc-300 leading-relaxed">
                If you proceed with our core Foundation Implementation, or are accepted for a custom implementation engagement, the full $995 AUD Blueprint investment is credited directly against your approved project scope.
              </p>
            </div>
          </div>
        </header>

        {/* The 4-Stage Commercial Offer Ladder (ItemList Visual Cards) */}
        <section aria-label="AEO Commercial Product Ladder" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-wider text-aeo-cyan font-bold flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>The 4-Stage AEObility Commercial Ladder</span>
            </h2>
            <span className="text-[11px] font-mono text-zinc-400">All prices in AUD (ex. GST)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Stage 1: Free Visibility Check */}
            <div className="p-5 bg-zinc-950/80 border border-white/10 rounded-2xl flex flex-col justify-between space-y-5 shadow-xl hover:border-white/20 transition-all">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-300 font-mono font-semibold">
                  Stage 1: Discover
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit">AI Visibility Score</h3>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  Automated scan of entity clarity, schema coverage, and machine-extractable content chunks.
                </p>
                <div className="text-[11px] text-zinc-500 font-serif">
                  <strong className="text-zinc-400 font-sans block">Best for:</strong>
                  <span>Fast baseline check before committing to roadmap work.</span>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-white/5">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-zinc-400">Price:</span>
                  <span className="text-lg font-bold text-white font-mono">FREE</span>
                </div>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-zinc-400">Timing:</span>
                  <span className="text-zinc-200 font-mono">Within 24 Hours</span>
                </div>
                <Link
                  href="/diagnostic"
                  className="group flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all text-center"
                >
                  <span>Generate Score</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Stage 2: Strategic Blueprint */}
            <div className="p-5 bg-zinc-950/80 border border-aeo-purple/30 rounded-2xl flex flex-col justify-between space-y-5 shadow-xl hover:border-aeo-purple/50 transition-all relative">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-aeo-purple/15 border border-aeo-purple/30 text-[10px] text-aeo-purple font-mono font-semibold">
                  Stage 2: Define
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit">The Strategic Blueprint</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  A comprehensive technical audit and 90-day strategic roadmap identifying exact schema and content gaps.
                </p>
                <div className="text-[11px] text-zinc-400 font-serif">
                  <strong className="text-zinc-300 font-sans block">Best for:</strong>
                  <span>Businesses requiring an actionable 90-day roadmap before booking developer hours.</span>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-white/5">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-zinc-400">Price:</span>
                  <span className="text-lg font-bold text-white font-mono">$995 <span className="text-[10px] font-normal text-zinc-400">AUD</span></span>
                </div>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-zinc-400">Timing:</span>
                  <span className="text-zinc-200 font-mono">10 Business Days</span>
                </div>
                <div className="p-2 rounded-lg bg-aeo-purple/10 border border-aeo-purple/20 text-[10px] text-purple-200 font-mono text-center">
                  100% credited into implementation
                </div>
                <Link
                  href="/solutions/aeo-blueprint"
                  className="group flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-aeo-purple text-white font-semibold text-xs hover:bg-aeo-purple/90 transition-all text-center"
                >
                  <span>View Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Stage 3: Foundation Implementation */}
            <div className="p-5 bg-gradient-to-br from-cyan-950/40 via-zinc-950 to-zinc-950 border-2 border-aeo-cyan/40 rounded-2xl flex flex-col justify-between space-y-5 shadow-2xl hover:border-aeo-cyan transition-all relative">
              <div className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-aeo-cyan text-black text-[9px] font-mono font-extrabold uppercase tracking-wider shadow">
                Core Execution
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-aeo-cyan/15 border border-aeo-cyan/30 text-[10px] text-aeo-cyan font-mono font-semibold">
                  Stage 3: Build
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Foundation Implementation</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Fixed-scope 4-week deployment: schema graphs, atomic page rewrites, and internal link architecture.
                </p>
                <div className="text-[11px] text-cyan-200/80 font-serif">
                  <strong className="text-cyan-200 font-sans block">Best for:</strong>
                  <span>Australian SMBs and clinics ready for turnkey machine-readable deployment in 4 weeks.</span>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-white/5">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-zinc-400">Price:</span>
                  <span className="text-lg font-bold text-white font-mono">$3,195 <span className="text-[10px] font-normal text-zinc-400">AUD</span></span>
                </div>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-zinc-400">Timing:</span>
                  <span className="text-zinc-200 font-mono">4-Week Sprint</span>
                </div>
                <div className="p-2 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/20 text-[10px] text-cyan-200 font-mono text-center">
                  $995 Blueprint fee deducted
                </div>
                <Link
                  href="/solutions/aeo-sprint"
                  className="group flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-aeo-cyan text-black font-semibold text-xs hover:bg-aeo-cyan/90 transition-all text-center shadow-lg shadow-aeo-cyan/20"
                >
                  <span>Explore Foundation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Stage 4: Custom Implementation (Application Only) */}
            <div className="p-5 bg-zinc-950/80 border border-white/10 rounded-2xl flex flex-col justify-between space-y-5 shadow-xl hover:border-white/20 transition-all">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[10px] text-amber-400 font-mono font-semibold">
                  Stage 4: Scale
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Custom Implementation</h3>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  For multi-location brands, large ecommerce catalogues, and multi-entity networks exceeding Foundation scope.
                </p>
                <div className="text-[11px] text-zinc-400 font-serif">
                  <strong className="text-zinc-300 font-sans block">Best for:</strong>
                  <span>Multi-location brands and complex ecommerce sites requiring bespoke architecture.</span>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-white/5">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-zinc-400">Price:</span>
                  <span className="text-xs font-bold text-amber-400 font-mono uppercase">By Application</span>
                </div>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-zinc-400">Delivery:</span>
                  <span className="text-zinc-300 font-mono text-[11px]">Confirmed Post-Blueprint</span>
                </div>
                <div className="p-1.5 rounded-lg bg-amber-950/20 border border-amber-500/20 text-[9px] text-amber-300 font-mono text-center">
                  Limited capacity • Selected projects
                </div>
                <Link
                  href="/contact?inquiry=custom-application"
                  className="group flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition-all text-center"
                >
                  <span>Apply for Custom Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Target Audience Guidance Section */}
        <section className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
          <h2 className="text-lg sm:text-xl font-bold text-white font-soehne-breit flex items-center gap-2">
            <Target className="w-5 h-5 text-aeo-cyan" />
            <span>Which Option Is Right for Your Business?</span>
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-4 text-xs font-serif pt-1">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-aeo-purple uppercase font-bold">Stage 2: The Strategic Blueprint</span>
                <strong className="text-white font-sans text-xs block">$995 AUD ex. GST</strong>
                <p className="text-zinc-300 leading-relaxed">
                  <strong className="text-zinc-200">Best for:</strong> Businesses requiring an actionable, jargon-free 90-day technical roadmap before committing to developer implementation hours.
                </p>
              </div>
              <Link href="/solutions/aeo-blueprint" className="text-aeo-purple hover:underline font-mono text-[11px] pt-2 block">
                View Blueprint inclusions →
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/20 border border-aeo-cyan/30 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-aeo-cyan uppercase font-bold">Stage 3: Foundation Implementation</span>
                <strong className="text-white font-sans text-xs block">$3,195 AUD ex. GST</strong>
                <p className="text-zinc-300 leading-relaxed">
                  <strong className="text-cyan-200">Best for:</strong> Australian SMBs, local service trades, and single-domain clinics ready to establish an authoritative, machine-readable digital footprint within four weeks.
                </p>
              </div>
              <Link href="/solutions/aeo-sprint" className="text-aeo-cyan hover:underline font-mono text-[11px] pt-2 block">
                Explore Foundation package →
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">Stage 4: Custom Implementation</span>
                <strong className="text-white font-sans text-xs block">By Application</strong>
                <p className="text-zinc-300 leading-relaxed">
                  <strong className="text-zinc-200">Best for:</strong> Multi-location brands, complex e-commerce platforms, and multi-entity networks requiring custom interface engineering.
                </p>
              </div>
              <Link href="/contact?inquiry=custom-application" className="text-amber-400 hover:underline font-mono text-[11px] pt-2 block">
                Apply for custom scope →
              </Link>
            </div>
          </div>
        </section>

        {/* Why the Blueprint Comes First (Zero Lock-In Model) */}
        <section className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3 shadow-xl">
          <div className="flex items-center gap-2 text-aeo-cyan font-bold text-xs uppercase tracking-wider font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Why the Blueprint Comes First (Zero Lock-In Model)</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
            We anchor our engagements around a verified clarity document rather than locked-in monthly retainers or indefinite agency fees. The <Link href="/solutions/aeo-blueprint" className="text-aeo-cyan hover:underline">AEObility Blueprint ($995 AUD)</Link> delivers a standalone roadmap you own completely. If you choose to proceed with <Link href="/solutions/aeo-sprint" className="text-aeo-cyan hover:underline">Foundation Implementation ($3,195 AUD)</Link>, or are accepted for a custom implementation engagement, the entire $995 investment is credited back against your approved implementation scope, reducing your net execution balance.
          </p>
        </section>

        {/* Fully Responsive 4-Week Foundation Implementation Timeline (Mobile-First CSS Layout) */}
        <section aria-label="Foundation Implementation Timeline" className="bg-zinc-950 border border-white/10 rounded-2xl p-5 sm:p-7 space-y-6 shadow-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20 text-[10px] text-aeo-cyan font-mono font-semibold">
                <Calendar className="w-3 h-3" />
                <span>Structured Delivery Schedule</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white font-soehne-breit">
                Comprehensive 4-Week Foundation Implementation Timeline
              </h2>
            </div>
            <span className="text-[11px] font-mono text-zinc-400">Fixed-Scope • 4-Week Structured Sprints</span>
          </div>

          {/* Responsive CSS Vertical Timeline (Mobile Stack -> Desktop 4-Column Grid) */}
          <div className="relative border-l-2 border-aeo-cyan/30 ml-3.5 my-4 md:border-l-0 md:ml-0 md:my-0 md:grid md:grid-cols-4 md:gap-4">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="mb-8 pl-6 relative md:mb-0 md:pl-0 flex flex-col justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aeo-cyan/30 transition-all">
                
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] top-4 w-3.5 h-3.5 rounded-full bg-aeo-cyan border-2 border-black md:static md:mb-3 md:left-auto md:top-auto shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-aeo-cyan uppercase font-bold tracking-wider">
                      {step.weekNumber}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                      Active
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white font-soehne-breit">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase font-semibold">Key Deliverables:</span>
                  <ul className="text-[11px] text-zinc-400 font-serif space-y-1">
                    {step.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-aeo-cyan font-mono text-[9px] mt-0.5">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-zinc-400 font-serif">
            <span>Every milestone concludes with completed validation checks, schema testing, and handover notes.</span>
            <Link href="/services/aeo/procedures" className="text-aeo-cyan hover:underline font-mono text-[11px] shrink-0 ml-2">
              Review procedures →
            </Link>
          </div>
        </section>

        {/* Pricing & Timelines FAQ Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>Pricing &amp; Timelines Frequently Asked Questions</span>
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950/80 divide-y divide-white/5 shadow-xl">
            <div className="p-5 sm:p-6 space-y-2">
              <h3 id="what-is-the-aeobility-blueprint-price" className="font-semibold text-sm sm:text-base text-white">
                How does the $995 Blueprint credit work?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                The Blueprint is a complete 90-day strategy document that you own outright. If you proceed with <Link href="/solutions/aeo-sprint" className="text-aeo-cyan hover:underline">Foundation Implementation ($3,195 AUD)</Link>, or are accepted for a custom implementation engagement, the entire $995 AUD Blueprint investment is credited back and deducted from your approved implementation scope.
              </p>
            </div>

            <div className="p-5 sm:p-6 space-y-2">
              <h3 id="what-is-included-in-foundation-implementation" className="font-semibold text-sm sm:text-base text-white">
                What is included in the $3,195 Foundation Implementation package?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                The Foundation Implementation is a fixed-scope 4-week engagement. It deploys verified JSON-LD schema graphs, rewrites priority content into machine-extractable atomic answer blocks, strengthens internal link paths, and standardises citation evidence across core commercial pages. Learn more on our <Link href="/solutions/aeo-sprint" className="text-aeo-cyan hover:underline">Foundation Implementation page</Link>.
              </p>
            </div>

            <div className="p-5 sm:p-6 space-y-2">
              <h3 id="how-much-do-professional-aeo-optimisation-services-cost" className="font-semibold text-sm sm:text-base text-white">
                Can AEObility support larger or more complex implementations?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Yes. For multi-location brands, extensive ecommerce catalogues, or multi-entity networks, custom implementation may be available by application. Every engagement is assessed after Blueprint review to confirm strategic fit, technical readiness, delivery scope, and capacity. You can <Link href="/contact?inquiry=custom-application" className="text-aeo-cyan hover:underline">apply for custom implementation with our team</Link>.
              </p>
            </div>

            <div className="p-5 sm:p-6 space-y-2">
              <h3 id="how-long-does-it-take-to-see-measurable-results" className="font-semibold text-sm sm:text-base text-white">
                How long does it take to see measurable results from AEO?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Initial visibility diagnostic scans are delivered within 24 hours. The Blueprint establishes a 90-day roadmap, and measurable improvements in AI retrieval and citation footprints typically become observable within 6 to 12 weeks of initial schema and content deployment. Learn <Link href="/services/aeo/procedures" className="text-aeo-cyan hover:underline">how AEObility implements AEO strategy</Link>. Note that timing varies by initial site condition, implementation scope, and platform re-indexing cycles.
              </p>
            </div>
          </div>
        </section>

        {/* Semantic Connections Grid (L3 Commercial Lattice Links) */}
        <section className="border-t border-white/10 pt-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan font-mono">
            Commercial &amp; Strategic Semantic Connections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono">
            <Link 
              href="/solutions/aeo-blueprint" 
              className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl hover:border-aeo-purple/40 hover:text-aeo-purple transition-all space-y-1 block"
            >
              <div className="font-bold text-white">The AEObility Blueprint</div>
              <p className="text-zinc-400 font-serif text-[11px]">View Blueprint inclusions, deliverables, and $995 pricing details.</p>
            </Link>

            <Link 
              href="/solutions/aeo-sprint" 
              className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl hover:border-aeo-cyan/40 hover:text-aeo-cyan transition-all space-y-1 block"
            >
              <div className="font-bold text-white">Foundation Implementation</div>
              <p className="text-zinc-400 font-serif text-[11px]">4-week turnkey execution sprint for $3,195 AUD ex. GST.</p>
            </Link>

            <Link 
              href="/contact?inquiry=custom-application" 
              className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl hover:border-amber-400/40 hover:text-amber-400 transition-all space-y-1 block"
            >
              <div className="font-bold text-white">Custom Implementation Application</div>
              <p className="text-zinc-400 font-serif text-[11px]">Apply for custom scope for multi-entity or large ecommerce sites.</p>
            </Link>

            <Link 
              href="/services/aeo/procedures" 
              className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl hover:border-white/20 hover:text-white transition-all space-y-1 block"
            >
              <div className="font-bold text-white">AEO Execution Procedures</div>
              <p className="text-zinc-400 font-serif text-[11px]">How AEObility executes technical AEO and schema refactoring.</p>
            </Link>

            <Link 
              href="/services/aeo/constraints" 
              className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl hover:border-white/20 hover:text-white transition-all space-y-1 block"
            >
              <div className="font-bold text-white">AEO System Constraints</div>
              <p className="text-zinc-400 font-serif text-[11px]">What prevents businesses from showing up in conversational search.</p>
            </Link>

            <Link 
              href="/diagnostic" 
              className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl hover:border-aeo-cyan/40 hover:text-aeo-cyan transition-all space-y-1 block"
            >
              <div className="font-bold text-white">Free AI Visibility Check</div>
              <p className="text-zinc-400 font-serif text-[11px]">Launch an instant 6-stage telemetry diagnostic for your domain.</p>
            </Link>
          </div>
        </section>

        {/* Bottom-Up Link to Parent AEO Hub */}
        <div className="pt-2 flex">
          <Link href="/services/aeo" className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
            <span>← Back to</span>
            <strong className="text-aeo-cyan hover:underline">AEO Services Hub</strong>
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
