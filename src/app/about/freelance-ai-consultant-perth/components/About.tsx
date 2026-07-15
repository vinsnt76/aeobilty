"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="py-20 md:py-32 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-6 max-w-6xl bg-white dark:bg-[#111] text-neutral-900 dark:text-neutral-100 rounded-xl p-8 md:p-10 shadow-lg"
      >
        
        {/* The Commercial Bridge */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-500 leading-relaxed italic mb-8">
            "Most AI consultants want to sell you a generic ChatGPT subscription or a slide deck full of futuristic promises. I build actual software infrastructure that runs quietly in the background, saving hundreds of manual hours every single month."
          </p>
          <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-400 leading-relaxed">
            I bridge the gap between messy, disconnected APIs, Airtable databases, and LLM orchestration tools. This allows me to turn your disconnected team operations into a seamless, automated delivery engine.
          </p>
        </div>

        {/* What I Actually Do */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">What I Actually Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-lg font-bold text-aeo-cyan mb-3">1. Enterprise Workflow Automation</h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Building resilient, multi-step automation pipelines using <strong>n8n</strong> and Airtable. Connecting your legacy CRMs, email platforms, and internal operational databases so data flows seamlessly without human data entry.
              </p>
              <p className="text-xs font-semibold text-aeo-purple uppercase tracking-wider">Outcome: Zero manual data transfers, zero admin lag, and 100% data consistency.</p>
            </div>

            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-lg font-bold text-aeo-cyan mb-3">2. API Orchestration & Webhooks</h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Moving beyond standard pre-built integrations. I design, test, and deploy custom API connections utilizing <strong>Postman, Cloud Functions, and webhooks</strong>. If a platform has an API, I can securely programmatically link it to your core systems.
              </p>
              <p className="text-xs font-semibold text-aeo-purple uppercase tracking-wider">Outcome: Custom-engineered software connections that standard off-the-shelf tools can't support.</p>
            </div>

            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-lg font-bold text-aeo-cyan mb-3">3. Advanced Prompt Engineering & Agent Design</h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Standard prompts hallucinate and fail in production. I engineer deterministic agent frameworks using <strong>reverse, one-shot, and graph prompting</strong>. This guarantees consistent tone, structured JSON outputs, and strict rule enforcement for corporate use cases.
              </p>
              <p className="text-xs font-semibold text-aeo-purple uppercase tracking-wider">Outcome: Predictable, reliable, and production-grade LLM interactions.</p>
            </div>

            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-lg font-bold text-aeo-cyan mb-3">4. Conversational Chatbots & Voice Agents</h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Designing, training, and deploying custom voice and text interfaces using <strong>Voiceflow</strong>. These bots don't just answer FAQs; they connect directly to your backend APIs to lookup orders, qualify leads, and update database records in real-time.
              </p>
              <p className="text-xs font-semibold text-aeo-purple uppercase tracking-wider">Outcome: 24/7 client-facing automation that actually resolves queries.</p>
            </div>

          </div>
        </div>

        {/* Why Businesses Hire Me */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Why Businesses Hire Me
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">1. I actually write code & build pipelines.</h4>
              <p className="text-sm text-neutral-400">
                I am a technical architect, not a prompt hobbyist. I understand API payloads, webhook headers, cloud functions, and database structures.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">2. Data-security-first approach.</h4>
              <p className="text-sm text-neutral-400">
                I ensure your company data is protected, utilizing local, private, or enterprise-grade LLM integrations that don't train public models on your proprietary information.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">3. Highly integrated skill set.</h4>
              <p className="text-sm text-neutral-400">
                Because I also deeply understand SEO, GA4 tracking arrays, and CRM logic, your automation pipelines are built to support your broader business growth goals, not run in an isolated silo.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">Services Menu</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Internal Workflow Audit</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Custom API & Webhook Integration</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Voiceflow Agent Deployment</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Automated Reporting & AI Dashboards</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">n8n Automation Engineering</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Structured Prompt Engineering</span>
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
            <a href="/about/freelance-digital-specialist-perth" className="px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm font-semibold hover:border-aeo-cyan hover:text-aeo-cyan transition-colors shadow-sm">Freelance Digital Specialist Perth</a>
            <a href="/about/freelance-ai-consultant-perth" className="px-5 py-2.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan text-aeo-cyan text-sm font-semibold shadow-sm">Freelance AI Consultant Perth</a>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-24 text-center pb-10"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Stop wasting hours on manual process bottlenecking.</h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
            Let's map out a technical workflow audit. I will review your current systems and show you exactly where n8n pipelines, secure APIs, and custom AI agents can buy back your team's time.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-aeo-cyan/20 hover:scale-[1.02] transition-all duration-300"
          >
            Book a Technical Workflow Audit
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;
