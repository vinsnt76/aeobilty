import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowRight, Eye, Target, TrendingUp, BarChart2, Shield } from 'lucide-react';

export const metadata = {
  title: "Baby Bento Case Study: Reversing Organic Momentum | AEObility",
  description: "Learn how AEObility reversed Baby Bento's declining organic momentum, recording +17-18% sales uplift and +95% CTR improvement through structural search alignment.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",
  },
};

export default function BabyBentoCaseStudyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": "Baby Bento Structural Search Optimization Case Study",
    "description": "A structural search optimization case study showing how Baby Bento achieved significant improvements in organic visibility, engagement, and sales velocity after implementing AEObility’s architectural framework.",
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan mb-4">Knowledge Nodes</h3>
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
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>Case Study: E-Commerce Growth</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Shifting Trends: How Structural Search Alignment Reversed Organic Momentum for <span className="text-gradient-aeo">Baby Bento</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed font-light font-serif">
              An architectural optimization analysis demonstrating how Baby Bento achieved significant improvements in organic visibility, engagement, and sales velocity.
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
            <h2 className="text-xl sm:text-2xl font-bold text-white">🌱 Executive Summary</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Baby Bento entered the fiscal period with stable baseline activity but declining organic momentum. Promotions were doing the heavy lifting, margins were tightening, and product returns were rising. In the second half of the year, everything changed.
            </p>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              After implementing AEObility’s structural optimisation framework, Baby Bento recorded a **17–18% uplift** across core sales metrics and a **95% CTR improvement**, all while **reducing discount dependency**. This case study shows how structural clarity — not keyword volume — created the commercial inflection point.
            </p>
          </div>

          {/* Baseline Challenge */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">🔍 The Baseline Challenge: Momentum Loss & Promotional Pressure</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Baby Bento’s full-year data showed organic momentum slipping while promotional dependency was rising. Discount volume had expanded by **+46% YoY** and returns had increased by **+39% YoY**.
            </p>
            <blockquote className="border-l-2 border-aeo-cyan pl-4 my-6 text-sm text-white/50 font-serif italic">
              &ldquo;When search engines lose clarity, your high‑intent traffic disappears. Promotions become the only lever left to hit targets.&rdquo;
            </blockquote>
          </div>

          {/* Chart 1: Baseline Pressure */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Full-Year Baseline Pressure (YoY Growth %)</h4>
              <BarChart2 className="w-4 h-4 text-white/30" />
            </div>
            <div className="h-48 flex items-end gap-6 pt-6 px-4">
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-red-500/20 border border-red-500/30 rounded-t-lg h-[46%]" />
                <span className="text-[10px] text-white/60 font-semibold">+46%</span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest text-center">Discount Growth</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-orange-500/20 border border-orange-500/30 rounded-t-lg h-[39%]" />
                <span className="text-[10px] text-white/60 font-semibold">+39%</span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest text-center">Return Growth</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-white/5 border border-white/10 rounded-t-lg h-[15%]" />
                <span className="text-[10px] text-white/60 font-semibold">Declining</span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest text-center">Organic Trend</span>
              </div>
            </div>
          </div>

          {/* The Pivot */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">🧭 The Pivot: Structural Alignment Over Keyword Volume</h2>
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
            <h2 className="text-xl sm:text-2xl font-bold text-white">📈 Technical Performance Signals: Refinement Over Reach</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Google Search Console telemetry revealed a clear refinement pattern. Although total impressions dropped, targeted engagement increased dramatically:
            </p>
            <blockquote className="border-l-2 border-aeo-purple pl-4 my-6 text-sm text-white/50 font-serif italic">
              &ldquo;Fewer impressions. Better impressions. Search engines stopped serving low-intent queries, maximizing conversion intent.&rdquo;
            </blockquote>
          </div>

          {/* Chart 2: Search Quality Shift */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Search Quality Shift (Impressions vs CTR)</h4>
              <TrendingUp className="w-4 h-4 text-white/30" />
            </div>
            <div className="h-48 flex items-end gap-6 pt-6 px-4">
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-red-500/20 border border-red-500/30 rounded-t-lg h-[20%]" />
                <span className="text-[10px] text-white/60 font-semibold">-20.2%</span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest text-center">Impressions</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-emerald-500/20 border border-emerald-500/30 rounded-t-lg h-[94%]" />
                <span className="text-[10px] text-white/60 font-semibold">+94.1%</span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest text-center">Click-Through Rate</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-aeo-cyan/20 border border-aeo-cyan/30 rounded-t-lg h-[54%]" />
                <span className="text-[10px] text-white/60 font-semibold">+54.8%</span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest text-center">Clicks</span>
              </div>
            </div>
          </div>

          {/* On-Site Behaviour */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">🧠 On‑Site Behaviour: Deeper Engagement</h2>
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

          {/* Commercial Inflection */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">🔄 Commercial Inflection: H2 Recovery</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              The second half of the year showed a clear commercial recovery: sales volume stabilized with an upward scaling trend, and promotional markdown growth moderated from **+46% to +28%**.
            </p>
            <blockquote className="border-l-2 border-pink-500 pl-4 my-6 text-sm text-white/50 font-serif italic">
              &ldquo;When search engines understand your business value, your customers find you without needing a constant discount.&rdquo;
            </blockquote>
          </div>

          {/* Balanced Parameters */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">🧩 Balanced Parameters & Operational Context</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Returns rose in H2, but only in proportion to increased sales volume. This is normal scaling behavior—not a strategic regression. While promotional pressure eased, structural optimization does not eliminate promotions entirely; it reduces reliance on them.
            </p>
          </div>

          {/* Conclusion */}
          <div className="p-8 bg-gradient-to-r from-aeo-cyan/5 to-aeo-purple/5 border border-white/10 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold text-white">🌟 Conclusion</h3>
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
