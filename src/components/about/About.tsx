"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Briefcase, TrendingUp, ShoppingCart, Brain, Search, Target, LayoutGrid, DollarSign, Compass, Award, ShieldCheck, CheckCircle2, BarChart } from 'lucide-react';
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

        {/* Certifications & Industry Badges (Animated on Scroll) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 border-t border-neutral-200 dark:border-neutral-800 pt-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-aeo-cyan font-bold">Verified Credentials</span>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                Certifications & Industry Standards
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-aeo-cyan/10 border border-aeo-cyan/30 rounded-full text-xs font-mono text-aeo-cyan">
              <Award className="w-3.5 h-3.5" />
              <span>Certified Professional</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                title: "Google Ads Certified",
                category: "Search & Shopping",
                issuer: "Google",
                icon: Target,
                badgeColor: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400"
              },
              {
                title: "Google Analytics & GTM",
                category: "GA4 Measurement",
                issuer: "Google",
                icon: BarChart,
                badgeColor: "from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-400"
              },
              {
                title: "HubSpot Certified",
                category: "Inbound & CRM",
                issuer: "HubSpot Academy",
                icon: CheckCircle2,
                badgeColor: "from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-400"
              },
              {
                title: "LinkedIn SEO & Sales",
                category: "Digital Foundations",
                issuer: "LinkedIn Learning",
                icon: Award,
                badgeColor: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400"
              },
              {
                title: "Cert IV & Diploma",
                category: "Public Relations & Sales",
                issuer: "Central TAFE / Angliss",
                icon: ShieldCheck,
                badgeColor: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400"
              }
            ].map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className={`p-4 rounded-xl bg-gradient-to-br ${cert.badgeColor} border backdrop-blur-md flex flex-col justify-between space-y-3 group transition-all`}
              >
                <div className="flex items-center justify-between">
                  <cert.icon className="w-6 h-6 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/40 text-white/70 border border-white/10">
                    Verified
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-white transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">{cert.category}</p>
                </div>
                <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 border-t border-white/5 pt-2 flex items-center justify-between">
                  <span>{cert.issuer}</span>
                  <span className="text-aeo-cyan opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
