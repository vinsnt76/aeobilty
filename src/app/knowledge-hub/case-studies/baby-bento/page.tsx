import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "Case Study: Structural Search Alignment | AEObility",
  description: "See how structural search alignment reversed declining organic momentum and delivered a +17% sales uplift for a prominent ecommerce store.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",
  },
};

export default function BabyBentoCaseStudyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": "Baby Bento Structural Search Optimisation Case Study",
    "description": "A structural search optimisation case study showing how Baby Bento achieved significant improvements in organic visibility, engagement, and sales velocity after implementing AEObility’s architectural framework.",
    "datePublished": "2026-07-08",
    "author": {
      "@type": "Organization",
      "name": "AEObility",
      "url": "https://aeobility.com.au"
    },
    "about": {
      "@type": "Organization",
      "name": "Baby Bento",
      "url": "https://babybento.com.au"
    },
    "mainEntity": {
      "@type": "WebPage",
      "name": "Baby Bento Case Study",
      "url": "https://aeobility.com.au/case-studies/baby-bento"
    },
    "performanceMetrics": {
      "search": {
        "clicksIncreasePercent": 54.8,
        "ctrIncreasePercent": 94.15,
        "rankingImprovementPercent": 28.62,
        "impressionsChangePercent": -20.26
      },
      "engagement": {
        "engagementTimeIncreasePercent": 28,
        "eventCountIncreasePercent": 24.86
      },
      "commercial": {
        "h2SalesIncreasePercent": 17,
        "discountGrowthModerationPercent": 28,
        "returnsScalingPercent": 40
      }
    }
  };

  const keyStats = [
    { value: "+17–18%", label: "Core Sales Uplift" },
    { value: "+95%", label: "CTR Improvement" },
    { value: "+55%", label: "Qualified Clicks" },
    { value: "+29%", label: "Ranking Position" },
    { value: "+28%", label: "On‑Site Engagement" }
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
        
        {/* Left Side: Sidebar Navigation */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl sticky top-24">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Knowledge Hub</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm">
              <Link href="/knowledge-hub" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                Hub Overview
              </Link>
              <Link href="/knowledge-hub/aeo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AEO Core Principles
              </Link>
              <Link href="/knowledge-hub/semantic-seo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                AI Semantic SEO
              </Link>
              <Link href="/knowledge-hub/geo" className="font-semibold text-white/60 hover:text-white hover:bg-white/[0.02] transition-all py-2 px-3 rounded-lg leading-snug">
                GEO & SEO Local Matrix
              </Link>
              <div className="h-px bg-white/5 my-2" />
              <div className="font-semibold text-aeo-cyan transition-colors bg-white/5 py-2 px-3 rounded-lg leading-snug">
                Case Study: Baby Bento
              </div>
            </nav>
          </div>
        </aside>

        {/* Right Side: Case Study Content */}
        <section className="lg:col-span-8 flex flex-col gap-12">
          
          {/* Header Block */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <span>Case Study: E-Commerce Growth</span>
            </div>
            
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950">
              <Image
                src="/case-study-aeo-lifts-traffic.webp"
                alt="Graph illustrating improved CTR, ranking position, and qualified organic traffic following AEObility’s structural optimisation."
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              How Structural Search Alignment Drove a +17% Sales Uplift
            </h1>
            <p className="text-white/80 text-lg leading-relaxed font-light font-serif">
              A real‑world case study showing how AEObility rebuilt clarity, intent alignment, and organic momentum for a prominent ecommerce store.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            {keyStats.map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-aeo-cyan font-soehne-breit">{stat.value}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider font-semibold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Executive Summary */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Executive Summary</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Baby Bento entered the fiscal period with stable baseline activity but declining organic momentum. Promotions were doing the heavy lifting, margins were tightening, and product returns were rising. In the second half of the year, everything changed.
            </p>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              After implementing AEObility’s structural optimisation framework, Baby Bento recorded a **17–18% uplift** across core sales metrics and a **95% CTR improvement**, all while **reducing discount dependency**. This case study shows how structural clarity — not keyword volume — created the commercial inflection point.
            </p>
          </div>

          {/* Baseline Challenge */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">The Baseline Challenge: Momentum Loss & Promotional Pressure</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Baby Bento’s full-year data showed organic momentum slipping while promotional dependency was rising. Discount volume had expanded by **+46% YoY** and returns had increased by **+39% YoY**.
            </p>
            <blockquote className="border-l-2 border-aeo-cyan pl-4 my-6 text-sm text-white/50 font-serif italic">
              &ldquo;When search engines lose clarity, your high‑intent traffic disappears. Promotions become the only lever left to hit targets.&rdquo;
            </blockquote>
          </div>

          {/* Chart 1: Baseline Pressure (Bar Chart) */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Full-Year Baseline Pressure (YoY Growth %)</h4>
            <div className="space-y-4 pt-4">
              {/* Discount Growth Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-white/60">
                  <span>Discount Volume Growth</span>
                  <span className="text-red-400">+46% YoY</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-red-500/30 border-r border-red-400 h-full rounded-full" style={{ width: '46%' }} />
                </div>
              </div>
              {/* Return Growth Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-white/60">
                  <span>Product Return Growth</span>
                  <span className="text-orange-400">+39% YoY</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-orange-500/30 border-r border-orange-400 h-full rounded-full" style={{ width: '39%' }} />
                </div>
              </div>
              {/* Organic Momentum Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-white/60">
                  <span>Organic Search Momentum</span>
                  <span className="text-neutral-400">Declining</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-white/10 border-r border-white/20 h-full rounded-full" style={{ width: '15%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* The Pivot */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">The Pivot: Structural Alignment Over Keyword Volume</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Baby Bento replaced legacy SEO tactics with AEObility’s structural optimisation pillars to build clear entity authority:
            </p>
            <ul className="space-y-4 pl-4 pt-2">
              <li className="flex gap-3 text-sm text-white/70 font-serif font-light">
                <span className="text-aeo-cyan font-bold">1.</span>
                <div>
                  <strong className="text-white">Product Schema Injector:</strong> Mapped detailed schema.org attributes to make product specifications highly readable to modern AI query systems.
                </div>
              </li>
              <li className="flex gap-3 text-sm text-white/70 font-serif font-light">
                <span className="text-aeo-cyan font-bold">2.</span>
                <div>
                  <strong className="text-white">Collection Architecture Re-engineering:</strong> Re-structured website routing and navigational hierarchies around high-intent clusters rather than keywords.
                </div>
              </li>
              <li className="flex gap-3 text-sm text-white/70 font-serif font-light">
                <span className="text-aeo-cyan font-bold">3.</span>
                <div>
                  <strong className="text-white">Guide Engine JS Deployment:</strong> Integrated interactive decision assistants that created clear, structured crawl signals while aiding users.
                </div>
              </li>
              <li className="flex gap-3 text-sm text-white/70 font-serif font-light">
                <span className="text-aeo-cyan font-bold">4.</span>
                <div>
                  <strong className="text-white">Intent-Driven Content Alignment:</strong> Pruned unhelpful content nodes and aligned product copy to answer conversational search engine criteria.
                </div>
              </li>
            </ul>
          </div>

          {/* Technical Performance */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Technical Performance Signals: Refinement Over Reach</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Google Search Console telemetry revealed a clear refinement pattern. Although total impressions dropped, targeted engagement increased dramatically:
            </p>
            <blockquote className="border-l-2 border-aeo-purple pl-4 my-6 text-sm text-white/50 font-serif italic">
              &ldquo;Fewer impressions. Better impressions. Search engines stopped serving low-intent queries, maximizing conversion intent.&rdquo;
            </blockquote>
          </div>

          {/* Chart 2: Search Quality Shift (Line Chart) */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Search Quality Shift (Impressions vs CTR)</h4>
            <div className="relative h-48 w-full pt-4">
              <svg className="w-full h-full" viewBox="0 0 400 150">
                {/* Horizontal gridlines */}
                <line x1="0" y1="30" x2="400" y2="30" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                <line x1="0" y1="75" x2="400" y2="75" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="white" strokeOpacity="0.05" strokeWidth="1" />

                {/* Line 1: Impressions (Declining) - Red */}
                <path
                  d="M 20 40 L 100 60 L 180 80 L 260 110 L 340 125"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                />
                {/* Dots for Line 1 */}
                <circle cx="20" cy="40" r="4" fill="#ef4444" />
                <circle cx="340" cy="125" r="4" fill="#ef4444" />

                {/* Line 2: Click-Through Rate (Rising) - Green */}
                <path
                  d="M 20 130 L 100 100 L 180 65 L 260 45 L 340 20"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                />
                {/* Dots for Line 2 */}
                <circle cx="20" cy="130" r="4" fill="#10b981" />
                <circle cx="340" cy="20" r="4" fill="#10b981" />

                {/* Text Labels */}
                <text x="350" y="25" fill="#10b981" fontSize="10" fontWeight="bold">CTR +94%</text>
                <text x="350" y="130" fill="#ef4444" fontSize="10" fontWeight="bold">Imp -20%</text>
              </svg>
            </div>
            <div className="flex justify-center gap-6 text-[10px] text-white/50 uppercase tracking-widest font-semibold pt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                <span>Impressions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                <span>Click-Through Rate</span>
              </div>
            </div>
          </div>

          {/* On-Site Behaviour */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">On‑Site Behaviour: Deeper Engagement</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              GA4 metrics verified that qualified traffic stayed longer and took more key conversion actions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <div className="text-sm font-semibold text-white">Average Engagement Time</div>
                <div className="text-lg font-bold text-aeo-cyan mt-1">+28.0%</div>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <div className="text-sm font-semibold text-white">Total Event Count</div>
                <div className="text-lg font-bold text-aeo-cyan mt-1">+24.8%</div>
              </div>
            </div>
          </div>

          {/* Chart 3: Engagement Depth (Bar Chart) */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">On-Site User Engagement Depth (Growth %)</h4>
            <div className="space-y-4 pt-4">
              {/* Engagement Time Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-white/60">
                  <span>Engagement Time</span>
                  <span className="text-aeo-cyan">+28%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-aeo-cyan/30 border-r border-aeo-cyan h-full rounded-full" style={{ width: '28%' }} />
                </div>
              </div>
              {/* Event Count Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-white/60">
                  <span>Event Count (Actions taken)</span>
                  <span className="text-aeo-cyan">+24.8%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-aeo-cyan/30 border-r border-aeo-cyan h-full rounded-full" style={{ width: '24.8%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Commercial Inflection */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Commercial Inflection: H2 Recovery</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              The second half of the year showed a clear commercial recovery: sales volume stabilised with an upward scaling trend, and promotional markdown growth moderated from **+46% to +28%**.
            </p>
            <blockquote className="border-l-2 border-pink-500 pl-4 my-6 text-sm text-white/50 font-serif italic">
              &ldquo;When search engines understand your business value, your customers find you without needing a constant discount.&rdquo;
            </blockquote>
          </div>

          {/* Chart 4: H2 Inflection Point (Line Chart) */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">H2 Commercial Reversal Trend</h4>
            <div className="relative h-48 w-full pt-4">
              <svg className="w-full h-full" viewBox="0 0 400 150">
                {/* Horizontal gridlines */}
                <line x1="0" y1="30" x2="400" y2="30" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                <line x1="0" y1="75" x2="400" y2="75" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="white" strokeOpacity="0.05" strokeWidth="1" />

                {/* Line 1: Sales Growth (Upward) - Cyan */}
                <path
                  d="M 20 120 L 100 100 L 180 75 L 260 50 L 340 30"
                  fill="none"
                  stroke="#00f0ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                />
                <circle cx="20" cy="120" r="4" fill="#00f0ff" />
                <circle cx="340" cy="30" r="4" fill="#00f0ff" />

                {/* Line 2: Discount Moderation (Downward) - Purple */}
                <path
                  d="M 20 35 L 100 45 L 180 65 L 260 85 L 340 95"
                  fill="none"
                  stroke="#bd00ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                />
                <circle cx="20" cy="35" r="4" fill="#bd00ff" />
                <circle cx="340" cy="95" r="4" fill="#bd00ff" />

                {/* Text Labels */}
                <text x="350" y="35" fill="#00f0ff" fontSize="10" fontWeight="bold">Sales +17%</text>
                <text x="350" y="100" fill="#bd00ff" fontSize="10" fontWeight="bold">Discounts +28%</text>
              </svg>
            </div>
            <div className="flex justify-center gap-6 text-[10px] text-white/50 uppercase tracking-widest font-semibold pt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-aeo-cyan rounded-full" />
                <span>Sales Volume</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-aeo-purple rounded-full" />
                <span>Discount Growth</span>
              </div>
            </div>
          </div>

          {/* Balanced Parameters */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Balanced Parameters & Operational Context</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Returns rose in H2, but only in proportion to increased sales volume. This is normal scaling behaviour—not a strategic regression. While promotional pressure eased, structural optimisation does not eliminate promotions entirely; it reduces reliance on them.
            </p>
          </div>

          {/* Conclusion */}
          <div className="p-8 bg-gradient-to-r from-aeo-cyan/5 to-aeo-purple/5 border border-white/10 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold text-white">Conclusion</h3>
            <p className="text-sm text-white/80 leading-relaxed font-serif font-light">
              Baby Bento’s turnaround was not driven by publishing more content, targeting more generic keywords, or increasing ad spend. It was driven by structural clarity, intent alignment, and answer-engine readability.
            </p>
            <p className="text-base text-aeo-cyan font-bold font-soehne-breit mt-2">
              &ldquo;When AI understands your business, your customers finally can.&rdquo;
            </p>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
