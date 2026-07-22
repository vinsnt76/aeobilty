"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Briefcase, TrendingUp, ShoppingCart, Brain, Search, Target, LayoutGrid, DollarSign, Compass } from 'lucide-react';
import Link from 'next/link';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const timelineItems = [
    {
      icon: Globe,
      title: "The Explorer",
      period: "Early Years",
      description: "My story began far from the digital realm, backpacking across continents, fueling a deep curiosity for diverse cultures and problem-solving.",
    },
    {
      icon: Briefcase,
      title: "Business Development",
      period: "2010s",
      description: "Landing in the dynamic world of business development, I honed my skills in strategy, negotiation, and understanding market needs.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Builder",
      period: "Post-Pandemic",
      description: "Applying my newfound expertise, I even built a thriving e-commerce venture with my partner, experiencing the challenges and triumphs of online business firsthand.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Pivot",
      period: "COVID-19 Era",
      description: "When the world shifted during COVID-19, I saw an opportunity, diving deep into digital marketing, mastering SEO and campaign strategies at an award-winning agency.",
    },
    {
      icon: Brain,
      title: "AI & Automation Era",
      period: "Today",
      description: "Today, my focus is sharper: harnessing the power of AI and automation to build high-performance campaigns and AEO strategies.",
    },
  ];

  const superpowers = [
    { icon: Search, name: "SEO Mastery" },
    { icon: Target, name: "Campaign Management" },
    { icon: Brain, name: "AI & Automation" },
    { icon: LayoutGrid, name: "CRO Strategy" },
    { icon: ShoppingCart, name: "E-commerce Strategy" },
    { icon: DollarSign, name: "Lead Generation" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-6 max-w-6xl bg-white dark:bg-[#111] text-neutral-900 dark:text-neutral-100 rounded-xl p-8 md:p-10 shadow-lg"
      >
        {/* Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center md:justify-start mb-16"
        >
          <Compass className="w-8 h-8 text-aeo-cyan mr-3" />
          <h3 className="text-3xl md:text-4xl font-bold leading-tight text-left">
            From Traveller to Digital Architect
          </h3>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Refactored Story & Pivot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4 text-left font-serif"
          >
            <p>
              I began my career in the travel industry, spending more than a decade across Qantas Holidays, Viva Holidays, Sunlover Holidays, and Seven Oceans. Those years built the foundation for everything I do today: relationship-driven communication, commercial accountability, operational precision, and the ability to diagnose problems quickly across complex systems.
            </p>
            <p>
              When COVID hit and the travel sector collapsed overnight, I pivoted into digital marketing — first through SEO, then PPC, then deeper into UX, CRO, analytics, and CRM integrations. What started as a survival pivot became a full technical reinvention.
            </p>
            <div className="p-4 bg-neutral-900 text-white rounded-xl border border-neutral-800 font-sans text-sm space-y-1">
              <p className="text-aeo-cyan font-semibold">From Travel to Digital Systems Architecture:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-neutral-300">
                <li>Moved from optimising itineraries to optimising websites.</li>
                <li>From resolving booking bottlenecks to resolving crawl bottlenecks.</li>
                <li>From managing travel agents to managing data pipelines, automations, and AI agents.</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Digital Career Progression */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.4 }}
            className="relative space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-left font-soehne-breit">Digital Career Progression</h3>
            
            <div className="space-y-4 text-left">
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-base font-bold text-aeo-cyan mb-1">1. SEO (Technical + Content Architecture)</h4>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  Began with SEO fundamentals — audits, keyword research, content briefs — before gravitating toward the technical layer. SEMrush, Google Search Console, Bing Webmaster Tools, and structured data became my daily toolkit to diagnose exact code blocks, crawl bottlenecks, and semantic gaps holding sites back.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-base font-bold text-aeo-cyan mb-1">2. PPC (Google Ads Search + Shopping)</h4>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  Built search and shopping campaigns, implemented conversion tracking, and optimised ROAS through structured measurement and forecasting.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-base font-bold text-aeo-cyan mb-1">3. UX & CRO (Behavioural Analysis + Funnel Optimisation)</h4>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  Used Microsoft Clarity, GA4 exploration reports, and Looker Studio dashboards to turn user friction points into measurable conversion opportunities.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-base font-bold text-aeo-cyan mb-1">4. CRM Integrations (HubSpot, Agile CRM, Zoho, Airtable)</h4>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  Implemented CRMs end-to-end including requirements gathering, data migration, automation flows, and onboarding, merging systems thinking with marketing.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-base font-bold text-aeo-cyan mb-1">5. Automation, AI & Agentic Development</h4>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  Engineered n8n workflows, API orchestration, Google Cloud Functions, Voiceflow agents, prompt engineering (reverse, one-shot, graph prompting), structured output pipelines, and AEO content systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Perth Businesses Hire Me Instead of an Agency */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Why Perth Businesses Hire Me Instead of an Agency
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">Direct Senior Expertise</h4>
              <p className="text-sm text-neutral-400">You work directly with the person doing the technical work, not an account manager.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">No Lock-In Contracts</h4>
              <p className="text-sm text-neutral-400">I operate transparently, project-by-project or month-to-month.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">Systems + Marketing Hybrid Skillset</h4>
              <p className="text-sm text-neutral-400">Most freelancers do marketing or tech. I do both, and integrate them.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">AI-Ready Digital Architecture</h4>
              <p className="text-sm text-neutral-400 mb-2">Your digital footprint becomes fully structured for:</p>
              <ul className="list-disc pl-5 text-sm text-neutral-400">
                <li>ChatGPT & Perplexity</li>
                <li>Google AI Overviews & Gemini</li>
                <li>Local WA search surfaces</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800 lg:col-span-2">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">15+ Years of Commercial Experience</h4>
              <p className="text-sm text-neutral-400 mb-2">Rare hybrid background across:</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-white/10 rounded-full">Travel industry enterprise systems</span>
                <span className="px-2 py-1 bg-white/10 rounded-full">Digital marketing agencies</span>
                <span className="px-2 py-1 bg-white/10 rounded-full">Automation consulting</span>
                <span className="px-2 py-1 bg-white/10 rounded-full">AI prompting</span>
                <span className="px-2 py-1 bg-white/10 rounded-full">CRM + analytics</span>
                <span className="px-2 py-1 bg-white/10 rounded-full">SEO + PPC</span>
                <span className="px-2 py-1 bg-white/10 rounded-full">UX/CRO</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4 max-w-3xl mx-auto text-left">
            <details className="group bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-neutral-900 dark:text-neutral-100">
                What is the difference between a traditional SEO agency and a Freelance Technical SEO Specialist?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-neutral-700 dark:text-neutral-400 text-sm leading-relaxed">
                Agencies frequently lean on high-volume content production. A technical specialist rewrites the structural foundation, resolves code bloat, ensures proper schema node logic, and builds clean tracking frameworks.
              </p>
            </details>
            <details className="group bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-neutral-900 dark:text-neutral-100">
                Do you implement GA4 and cross-domain tracking as part of SEO?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-neutral-700 dark:text-neutral-400 text-sm leading-relaxed">
                Yes. Search visibility means nothing if data attribution is broken. Every project maps traffic milestones directly to financial conversions via Google Tag Manager and Looker Studio dashboards.
              </p>
            </details>
          </div>
        </motion.div>

        {/* Semantic Lattice / Internal Linking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-6 text-neutral-500 dark:text-neutral-400 uppercase tracking-widest text-sm">Browse my other digital specialities</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about/freelance-seo-consultant-perth" className="px-5 py-2.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan text-aeo-cyan text-sm font-semibold shadow-sm">Freelance SEO Consultant Perth</Link>
            <Link href="/about/freelance-google-ads-consultant-perth" className="px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm font-semibold hover:border-aeo-cyan hover:text-aeo-cyan transition-colors shadow-sm">Freelance Google Ads Consultant Perth</Link>
            <Link href="/about/freelance-digital-specialist-perth" className="px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm font-semibold hover:border-aeo-cyan hover:text-aeo-cyan transition-colors shadow-sm">Freelance Digital Specialist Perth</Link>
            <Link href="/about/freelance-ai-consultant-perth" className="px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm font-semibold hover:border-aeo-cyan hover:text-aeo-cyan transition-colors shadow-sm">Freelance AI Consultant Perth</Link>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-24 text-center pb-10"
        >
          <a
            href="/book"
            className="inline-block bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-aeo-cyan/20 hover:scale-[1.02] transition-all duration-300"
          >
            Book a Strategy Call
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
