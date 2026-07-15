"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Search, 
  Target, 
  Brain, 
  BarChart, 
  MousePointerClick, 
  ShoppingCart, 
  Users, 
  Zap,
  TrendingUp,
  LineChart
} from 'lucide-react';

const Experience: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const skillItems = [
    { name: "PPC Campaign Management", icon: Target },
    { name: "GA4 & Tag Manager", icon: BarChart },
    { name: "CRO & UX Diagnostics", icon: MousePointerClick },
    { name: "Data Visualisation", icon: LineChart },
    { name: "CRM & Automation", icon: Zap },
    { name: "API Orchestration", icon: ShoppingCart },
    { name: "SEMrush Keyword Research", icon: Search },
    { name: "AI Prompting & Voiceflow", icon: Brain },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 scroll-mt-24">
      <motion.div 
        {...fadeInUp}
        className="container mx-auto px-6 max-w-6xl bg-black text-white rounded-xl p-8 md:p-10 shadow-2xl border border-neutral-800"
      >
        
        {/* Case Study Section */}
        <motion.div 
          {...fadeInUp}
          className="mb-24"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
            <TrendingUp className="w-8 h-8 text-aeo-cyan" />
            <h3 className="text-3xl md:text-4xl font-bold">
              Case Study: Baby Bento
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-purple mb-4">1. The Problem</h4>
              <ul className="list-disc pl-5 text-sm text-neutral-400 space-y-2">
                <li>Duplicate conversion signals</li>
                <li>Poor attribution</li>
                <li>Low-margin SKUs draining spend</li>
                <li>Feed gaps</li>
                <li>Budget throttling</li>
                <li>Underutilised Smart Bidding</li>
              </ul>
            </div>

            <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-4">2. What I Did</h4>
              <ul className="list-disc pl-5 text-sm text-neutral-400 space-y-2">
                <li>Rebuilt tracking architecture</li>
                <li>Audited margins & set CPA guardrails</li>
                <li>Optimised Merchant Center feed</li>
                <li>Cleaned product catalogue</li>
                <li>Diagnosed Smart Bidding constraints</li>
                <li>Built scaling model</li>
              </ul>
            </div>

            <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 md:col-span-2">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-4">3. The Results</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-black rounded-lg border border-neutral-800 text-center">
                  <span className="block text-2xl font-bold text-white mb-1">6.37</span>
                  <span className="text-xs text-neutral-500">ROAS (59% above target)</span>
                </div>
                <div className="p-4 bg-black rounded-lg border border-neutral-800 text-center">
                  <span className="block text-2xl font-bold text-white mb-1">+106.1%</span>
                  <span className="text-xs text-neutral-500">Conversion Value</span>
                </div>
                <div className="p-4 bg-black rounded-lg border border-neutral-800 text-center">
                  <span className="block text-2xl font-bold text-white mb-1">99.4%</span>
                  <span className="text-xs text-neutral-500">Feed Approval</span>
                </div>
                <div className="p-4 bg-black rounded-lg border border-neutral-800 text-center">
                  <span className="block text-2xl font-bold text-white mb-1">51.4%</span>
                  <span className="text-xs text-neutral-500">Net Margin</span>
                </div>
                <div className="p-4 bg-black rounded-lg border border-neutral-800 text-center">
                  <span className="block text-2xl font-bold text-white mb-1">$2,660</span>
                  <span className="text-xs text-neutral-500">Value on $411 Spend</span>
                </div>
                <div className="p-4 bg-black rounded-lg border border-neutral-800 text-center">
                  <span className="block text-2xl font-bold text-white mb-1">+20</span>
                  <span className="text-xs text-neutral-500">Purchases/Week Projected</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 md:col-span-2 text-center">
              <h4 className="text-xl font-semibold text-aeo-purple mb-4">4. What This Means</h4>
              <p className="text-sm text-neutral-400">
                Your Google Ads account can scale safely when tracking is clean, margins are protected, your feed is healthy, bidding is stable, and the budget is unlocked.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div 
          {...fadeInUp}
          className="flex items-center gap-3 mb-10 pt-10 border-t border-neutral-800"
        >
          <Briefcase className="w-7 h-7 text-aeo-cyan" />
          <h3 className="text-3xl md:text-4xl font-bold">
            About Vince
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Column 1: Narrative Summary */}
          <motion.div {...fadeInUp} className="space-y-6">
            <p className="text-sm text-neutral-400 leading-relaxed">
              I bring 15+ years of commercial experience to the table, combining a strong background in travel industry negotiation and business development with deep technical execution in digital marketing.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              My approach isn't just about setting up campaigns; it's about building the entire data architecture. From configuring GA4 and Google Tag Manager to creating visual data reports in Looker Studio, I ensure every metric ties back to profitability.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              I also leverage advanced AI techniques like reverse, one-shot, and graph prompting, alongside Voiceflow chatbots, to automate and enhance digital ecosystems.
            </p>
          </motion.div>

          {/* Column 2: Skills Grid */}
          <motion.div {...fadeInUp}>
            <div className="grid grid-cols-2 gap-4">
              {skillItems.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-neutral-900 hover:bg-[#171717] border border-neutral-800 p-4 rounded-lg flex flex-col items-center justify-center text-center gap-3 transition-colors group"
                >
                  <skill.icon className="w-6 h-6 text-aeo-cyan group-hover:text-aeo-purple transition-colors" />
                  <span className="text-xs font-medium leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
