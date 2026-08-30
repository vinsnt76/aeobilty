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
  TrendingUp, 
  Check, 
  ChevronRight,
  Target,
  FileText,
  Boxes
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does AEO Cost and What Do I Get? | AEObility',
  description: 'Transparent pricing structures, Strategic Blueprint MVP details, Foundation Implementation ($3,195 AUD), credit-back terms, and delivery timelines for AEO services.',
  alternates: {
    canonical: 'https://aeobility.com.au/services/aeo/costs-timing',
  },
  openGraph: {
    title: 'How Much Does AEO Cost and What Do I Get? | AEObility',
    description: 'Transparent pricing structures, Strategic Blueprint MVP details, Foundation Implementation ($3,195 AUD), credit-back terms, and delivery timelines for AEO services.',
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
        'description': 'Four-stage commercial ladder for Answer Engine Optimisation (AEO) services, from free diagnostic assessment to enterprise implementation.',
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
              '@id': 'https://aeobility.com.au/solutions#custom-service',
              'name': 'Custom AEO Implementation Sprints',
              'description': 'Multi-entity and enterprise-scale AEO implementation sprints tailored to large catalogues and complex corporate footprints.',
              'provider': {
                '@type': 'ProfessionalService',
                '@id': 'https://aeobility.com.au/#organization',
                'name': 'AEObility'
              },
              'offers': {
                '@type': 'Offer',
                'priceSpecification': {
                  '@type': 'PriceSpecification',
                  'minPrice': '5000',
                  'maxPrice': '15000',
                  'priceCurrency': 'AUD'
                }
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
              'text': 'The Blueprint is a complete 90-day strategy document that you own outright. If you proceed with AEObility for implementation, the entire $995 AUD is credited back and deducted from the cost of your Foundation Implementation ($3,195 AUD) or custom sprint package.'
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
            'name': 'What are the costs for larger or bespoke enterprise implementation?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Full-scale implementation for large websites, multi-location networks, or extensive e-commerce catalogues typically ranges from $5,000 to $15,000 AUD. Your $995 Blueprint fee is deducted from this cost if you continue.'
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

  const keywords = [
    { term: 'ai search', volume: '1,900', MoM: '0%', YoY: '+85%', comp: 'Medium', cpcLow: 'A$0.43', cpcHigh: 'A$3.54' },
    { term: 'aeo', volume: '1,300', MoM: '+26%', YoY: '+140%', comp: 'Low', cpcLow: 'A$2.26', cpcHigh: 'A$16.43' },
    { term: 'geo marketing', volume: '90', MoM: '+27%', YoY: '+367%', comp: 'Low', cpcLow: 'A$5.75', cpcHigh: 'A$26.52' },
    { term: 'geo services', volume: '70', MoM: '-59%', YoY: '+40%', comp: 'Low', cpcLow: 'A$2.52', cpcHigh: 'A$10.92' },
    { term: 'ai search marketing', volume: '50', MoM: '-75%', YoY: '-91%', comp: 'Low', cpcLow: 'A$1.20', cpcHigh: 'A$8.50' },
    { term: 'aeo services', volume: '50', MoM: '-67%', YoY: '+50%', comp: 'Medium', cpcLow: 'A$13.97', cpcHigh: 'A$40.73' },
    { term: 'aeo marketing', volume: '50', MoM: '+25%', YoY: '+150%', comp: 'Medium', cpcLow: 'A$11.39', cpcHigh: 'A$39.26' },
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

      {/* Main Container */}
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-32 sm:pb-20 w-full space-y-10">
        
        {/* Header Block with Direct Commercial Answer */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/25 text-aeo-cyan text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing &amp; Service Framework</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-soehne-breit leading-tight">
            How Much Does AEO Cost and <span className="text-gradient-aeo">What Do I Get?</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/80 font-serif leading-relaxed max-w-3xl">
            Answer Engine Optimisation (AEO) starts with a free AI visibility check. Our Strategic Blueprint roadmap is $995 AUD (100% credited back if you proceed). Our fixed-scope <Link href="/solutions/aeo-sprint" className="text-aeo-cyan hover:underline font-semibold">Foundation Implementation is $3,195 AUD ex. GST</Link>, while custom multi-entity enterprise sprints range from $5,000 to $15,000 AUD.
          </p>
        </header>

        {/* The 4-Stage Commercial Offer Ladder (ItemList Visual Representation) */}
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
                <h3 className="text-base font-bold text-white font-soehne-breit">The AEObility Blueprint</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  A comprehensive technical audit and 90-day strategic roadmap identifying exact schema and content gaps.
                </p>
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

            {/* Stage 4: Custom Enterprise Implementation */}
            <div className="p-5 bg-zinc-950/80 border border-white/10 rounded-2xl flex flex-col justify-between space-y-5 shadow-xl hover:border-white/20 transition-all">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] text-emerald-400 font-mono font-semibold">
                  Stage 4: Scale
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Custom Enterprise Sprints</h3>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed">
                  Tailored implementation for multi-location brands, large product catalogues, and multi-entity networks.
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-white/5">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-zinc-400">Price:</span>
                  <span className="text-sm font-bold text-white font-mono">$5,000–$15,000</span>
                </div>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-zinc-400">Timing:</span>
                  <span className="text-zinc-200 font-mono">Custom Sprints</span>
                </div>
                <Link
                  href="/solutions"
                  className="group flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition-all text-center"
                >
                  <span>Compare Sprints</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Decision Guidance: Which Option Is Right for Me? */}
        <section className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="text-lg sm:text-xl font-bold text-white font-soehne-breit flex items-center gap-2">
            <Target className="w-5 h-5 text-aeo-cyan" />
            <span>Which Option Is Right for Your Business?</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 text-xs font-serif pt-1">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <strong className="text-white font-sans text-xs block">1. Need an Initial Snapshot?</strong>
              <p className="text-zinc-300 leading-relaxed">
                If you want to know whether AI search engines can currently understand your business, start with the <Link href="/diagnostic" className="text-aeo-cyan hover:underline">free AI Visibility Score</Link>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <strong className="text-white font-sans text-xs block">2. Need an Independent Roadmap?</strong>
              <p className="text-zinc-300 leading-relaxed">
                If you want a fixed-price 90-day technical plan that your team can evaluate or execute in-house, order <Link href="/solutions/aeo-blueprint" className="text-aeo-purple hover:underline">The AEObility Blueprint ($995 AUD)</Link>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <strong className="text-white font-sans text-xs block">3. Ready for Turnkey Implementation?</strong>
              <p className="text-zinc-300 leading-relaxed">
                If you need the schema, page copy, and link architecture deployed for you, proceed straight into <Link href="/solutions/aeo-sprint" className="text-emerald-400 hover:underline">Foundation Implementation ($3,195 AUD)</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Why the Blueprint Comes First (Customer-Oriented Framing) */}
        <section className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3 shadow-xl">
          <div className="flex items-center gap-2 text-aeo-cyan font-bold text-xs uppercase tracking-wider font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Why the Blueprint Comes First (Zero Lock-In Model)</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
            We anchor our engagements around a verified clarity document rather than locked-in monthly retainers or indefinite agency fees. The <Link href="/solutions/aeo-blueprint" className="text-aeo-cyan hover:underline">AEObility Blueprint ($995 AUD)</Link> delivers a standalone roadmap you own completely. If you choose to partner with AEObility to execute the work, the entire $995 investment is credited back against your <Link href="/solutions/aeo-sprint" className="text-aeo-cyan hover:underline">Foundation Implementation ($3,195 AUD)</Link> or larger custom project, reducing your net execution balance.
          </p>
        </section>

        {/* Market Indicators Reference Table (Collapsible / Non-Intrusive) */}
        <section className="bg-zinc-950/60 border border-white/5 rounded-2xl p-5 sm:p-6 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-aeo-cyan" />
              <span>Market Context: AI Search &amp; AEO Search Demand Indicators</span>
            </h3>
            <span className="text-[10px] text-zinc-500 font-mono">Australian Market Search Data</span>
          </div>
          <p className="text-xs text-zinc-400 font-serif leading-relaxed">
            Commercial search behaviour is shifting rapidly as users transition toward conversational search queries:
          </p>
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-zinc-400 font-semibold">
                  <th className="py-2.5 px-2">Keyword Term</th>
                  <th className="py-2.5 px-2">Monthly Vol</th>
                  <th className="py-2.5 px-2">MoM Growth</th>
                  <th className="py-2.5 px-2">YoY Growth</th>
                  <th className="py-2.5 px-2">Competition</th>
                  <th className="py-2.5 px-2">Low CPC (AUD)</th>
                  <th className="py-2.5 px-2">High CPC (AUD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {keywords.map((kw, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-2 px-2 font-medium text-white">{kw.term}</td>
                    <td className="py-2 px-2">{kw.volume}</td>
                    <td className={`py-2 px-2 ${kw.MoM.startsWith('+') ? 'text-emerald-400' : kw.MoM.startsWith('-') ? 'text-rose-400' : ''}`}>{kw.MoM}</td>
                    <td className={`py-2 px-2 ${kw.YoY.startsWith('+') ? 'text-emerald-400' : kw.YoY.startsWith('-') ? 'text-rose-400' : ''}`}>{kw.YoY}</td>
                    <td className="py-2 px-2">{kw.comp}</td>
                    <td className="py-2 px-2">{kw.cpcLow}</td>
                    <td className="py-2 px-2">{kw.cpcHigh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                The Blueprint is a complete 90-day strategy document that you own outright. If you proceed with AEObility for implementation, the entire $995 AUD is credited back and deducted from the cost of your <Link href="/solutions/aeo-sprint" className="text-aeo-cyan hover:underline">Foundation Implementation ($3,195 AUD)</Link> or custom sprint package.
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
                What are the costs for larger or bespoke enterprise implementation?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Full-scale implementation for large websites, multi-location networks, or extensive e-commerce catalogues typically ranges from $5,000 to $15,000 AUD. Your $995 Blueprint fee is deducted from this cost if you continue. You can <Link href="/contact" className="text-aeo-cyan hover:underline">talk through the right implementation scope with our team</Link>.
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
              href="/solutions" 
              className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl hover:border-emerald-400/40 hover:text-emerald-400 transition-all space-y-1 block"
            >
              <div className="font-bold text-white">AEO Packages &amp; Sprints</div>
              <p className="text-zinc-400 font-serif text-[11px]">Compare modular technical micro-sprints and ongoing scaling options.</p>
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
