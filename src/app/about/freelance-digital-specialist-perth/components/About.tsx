"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Briefcase, TrendingUp, ShoppingCart, Brain, Search, Target, LayoutGrid, DollarSign, Compass } from 'lucide-react';
import { scrollToSection } from '../navigation';
import clsx from 'clsx';

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
          {/* Left Column: Origin Story Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-6 text-left" // Left-aligned, spacing, and text color
          >
            <p>
              As an independent <strong className="text-aeo-cyan font-bold">digital systems architect</strong>, I bridge the gap between <strong className="text-aeo-purple font-bold">messy backend IT infrastructure</strong> and <strong className="text-aeo-cyan font-bold">client‑facing digital marketing</strong>.
            </p>
            <p>
              Across 15+ years in commercial digital roles, I’ve learned that most Perth businesses don’t fail because of strategy, they fail because their <strong className="font-bold">systems don’t talk to each other</strong>.
            </p>
            <p>
              I step in to <strong className="text-aeo-cyan font-bold">turn raw commercial web data into structured, machine-readable digital assets</strong>, ensuring your website, analytics, CRM, advertising, and AI-driven search surfaces all operate as a unified, profitable ecosystem.
            </p>
            <p>
              This lets local brands scale <strong className="text-aeo-purple font-bold">without agency overhead</strong>, without technical bottlenecks, and without the chaos of disconnected tools.
            </p>
          </motion.div>

          {/* Right Column: What I Actually Do */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.4 }}
            className="relative space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-left">What I Actually Do</h3>
            
            <div className="space-y-6">
              <div className="p-5 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-lg font-bold text-aeo-cyan mb-2">1. Digital Systems Architecture & Automation</h4>
                <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1 mb-3">
                  <li>n8n, Make, Airtable workflow engineering</li>
                  <li>API orchestration using Postman, GCF, webhooks</li>
                  <li>CRM implementation (HubSpot, Agile CRM, Zoho)</li>
                  <li>Cross-domain tracking, event mapping, GA4 + GTM</li>
                  <li>Automated reporting pipelines + Looker Studio dashboards</li>
                  <li>Voiceflow conversational agent design (voice + text)</li>
                </ul>
                <blockquote className="border-l-2 border-aeo-purple pl-3 text-xs italic text-neutral-500">“Designed and deployed internal automation workflows using n8n, Airtable, and various no-code platforms.”</blockquote>
              </div>

              <div className="p-5 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-lg font-bold text-aeo-cyan mb-2">2. Technical SEO, AEO & Semantic Optimisation</h4>
                <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1 mb-3">
                  <li>SEMrush, Ubersuggest, Ahrefs audits</li>
                  <li>Entity-based SEO + schema markup</li>
                  <li>AEO/GEO alignment for AI search engines</li>
                  <li>Reverse, one-shot, and graph prompting for AI agents</li>
                  <li>Structured content briefs + long-tail keyword mapping</li>
                  <li>UX/CRO analysis using Microsoft Clarity + GA4</li>
                </ul>
                <blockquote className="border-l-2 border-aeo-purple pl-3 text-xs italic text-neutral-500">“Developed SEO content briefs… identifying long-tail keyword opportunities, internal linking, and backlink outreach strategies.”</blockquote>
              </div>

              <div className="p-5 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-lg font-bold text-aeo-cyan mb-2">3. Digital Marketing Execution</h4>
                <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1 mb-3">
                  <li>Google Ads (Search, Shopping, Performance Max)</li>
                  <li>Meta, LinkedIn, TikTok campaign setup</li>
                  <li>Email automation (Campaign Monitor, Klaviyo, Mailchimp)</li>
                  <li>PPC forecasting, ROAS optimisation, A/B testing</li>
                  <li>Funnel design + lead nurturing pipelines</li>
                </ul>
                <blockquote className="border-l-2 border-aeo-purple pl-3 text-xs italic text-neutral-500">“Implemented and developed paid search campaigns using measurement and forecasting tools in Google Ads.”</blockquote>
              </div>

              <div className="p-5 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-lg font-bold text-aeo-cyan mb-2">4. AI & Data Engineering for Business Growth</h4>
                <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1 mb-3">
                  <li>Prompt engineering (reverse, one-shot, graph)</li>
                  <li>AI agent design for marketing + operations</li>
                  <li>Semantic schema mapping for AEO/GEO</li>
                  <li>Data cleaning + machine-readable asset creation</li>
                  <li>Google AI Studio + Firebase integrations</li>
                </ul>
                <blockquote className="border-l-2 border-aeo-purple pl-3 text-xs italic text-neutral-500">“Engineered advanced prompts for AI agents using reverse, one-shot, and graph prompting techniques.”</blockquote>
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
                What does a Digital Systems Architect actually do?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-neutral-700 dark:text-neutral-400 text-sm leading-relaxed">
                A digital systems architect connects your fragmented software, like your website, CRM, and advertising platforms, into a single, automated ecosystem. Instead of manual data entry or disjointed marketing campaigns, I ensure data flows automatically and is structured so that both your team and AI search engines can read it clearly.
              </p>
            </details>
            <details className="group bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-neutral-900 dark:text-neutral-100">
                How is this different from hiring a traditional digital marketing agency?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-neutral-700 dark:text-neutral-400 text-sm leading-relaxed">
                Traditional agencies focus on front-end campaigns (ads, content). I focus on the entire pipeline. Without a solid technical foundation, your campaigns will leak leads and waste budget. By working directly with me, you skip the account managers and get senior-level technical expertise that integrates both the marketing strategy and the backend systems.
              </p>
            </details>
            <details className="group bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-neutral-900 dark:text-neutral-100">
                What is AEO and why does my business need it?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-neutral-700 dark:text-neutral-400 text-sm leading-relaxed">
                AEO (Answer Engine Optimisation) ensures your business appears in AI-driven search results like ChatGPT, Perplexity, and Google AI Overviews. Traditional SEO relied on keywords; AEO relies on structured semantic data (like JSON-LD schemas) that AI engines can easily read and verify as facts. If your business isn't optimised for AEO, you will be invisible in the next generation of search.
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
            <a href="/about/freelance-seo-consultant-perth" className="px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm font-semibold hover:border-aeo-cyan hover:text-aeo-cyan transition-colors shadow-sm">Freelance SEO Consultant Perth</a>
            <a href="/about/freelance-google-ads-consultant-perth" className="px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm font-semibold hover:border-aeo-cyan hover:text-aeo-cyan transition-colors shadow-sm">Freelance Google Ads Consultant Perth</a>
            <a href="/about/freelance-digital-specialist-perth" className="px-5 py-2.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan text-aeo-cyan text-sm font-semibold shadow-sm">Freelance Digital Specialist Perth</a>
            <a href="/about/freelance-ai-consultant-perth" className="px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm font-semibold hover:border-aeo-cyan hover:text-aeo-cyan transition-colors shadow-sm">Freelance AI Consultant Perth</a>
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
