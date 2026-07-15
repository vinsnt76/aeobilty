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
        
        {/* What I Actually Do */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">What I Actually Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-lg font-bold text-aeo-cyan mb-3">1. Fix Your Tracking & Data</h4>
              <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1 mb-4">
                <li>Fix broken or duplicated conversion tracking</li>
                <li>Clean up GA4, Tag Manager and Shopify tracking</li>
                <li>Make sure every sale is counted once, accurately</li>
                <li>Check how long customers take to buy</li>
                <li>Remove bad data that confuses Google&apos;s bidding</li>
              </ul>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic leading-relaxed">When your tracking is clean, Google Ads finally knows what&apos;s working, and your campaigns start performing properly.</p>
              <p className="text-xs font-semibold text-aeo-purple uppercase tracking-wider">Outcome: Reliable data → smarter bidding → better results.</p>
            </div>

            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-lg font-bold text-aeo-cyan mb-3">2. Protect Your Profit</h4>
              <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1 mb-4">
                <li>Review your products and margins</li>
                <li>Identify which items are actually profitable to advertise</li>
                <li>Set safe cost-per-sale limits</li>
                <li>Remove low-margin products that drain your budget</li>
                <li>Focus spend on products that grow your bottom line</li>
              </ul>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic leading-relaxed">Google Ads shouldn&apos;t promote products that lose money. I make sure your budget only goes toward profitable items.</p>
              <p className="text-xs font-semibold text-aeo-purple uppercase tracking-wider">Outcome: Your ads only promote products that make you money.</p>
            </div>

            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-lg font-bold text-aeo-cyan mb-3">3. Improve Your Shopping Feed</h4>
              <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1 mb-4">
                <li>Fix product feed errors</li>
                <li>Improve product titles, descriptions and categories</li>
                <li>Make sure your products are approved and visible</li>
                <li>Benchmark your store against competitors</li>
                <li>Improve trust signals like returns, payment options and load speed</li>
              </ul>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic leading-relaxed">A healthy feed means your products show up more often, and look better than your competitors&apos;.</p>
              <p className="text-xs font-semibold text-aeo-purple uppercase tracking-wider">Outcome: Better visibility + stronger trust = more sales.</p>
            </div>

            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-lg font-bold text-aeo-cyan mb-3">4. Scale Your Account Safely</h4>
              <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1 mb-4">
                <li>Improve your ROAS and cost efficiency</li>
                <li>Identify when your account is being held back by low budgets</li>
                <li>Build a safe plan to scale your spend</li>
                <li>Prepare your account for Performance Max</li>
                <li>Increase sales without blowing your margins</li>
              </ul>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic leading-relaxed">Scaling Google Ads is risky if you don&apos;t understand your numbers. I make sure you grow safely.</p>
              <p className="text-xs font-semibold text-aeo-purple uppercase tracking-wider">Outcome: More sales, stable margins, predictable growth.</p>
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
            Why Businesses Hire Me Instead of an Agency
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">Senior Technical Capability</h4>
              <p className="text-sm text-neutral-400">You understand APIs, GA4, attribution, feed architecture, and automation. Most Google Ads freelancers don’t.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">Hybrid Skillset</h4>
              <p className="text-sm text-neutral-400">Technical SEO, PPC, Automation, Data engineering, CRO, and UX diagnostics.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">Margin-First Strategy</h4>
              <p className="text-sm text-neutral-400">I don’t chase ROAS vanity metrics. I engineer profitability.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">Proven E-Commerce Results</h4>
              <p className="text-sm text-neutral-400 mb-2">Baby Bento case study shows:</p>
              <ul className="list-disc pl-5 text-sm text-neutral-400">
                <li>+106.1% conversion value</li>
                <li>6.37 ROAS (51.4% margin)</li>
                <li>99.4% feed approval</li>
                <li>"Top Quality Store" badge</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-neutral-900 text-white rounded-xl shadow-lg border border-neutral-800 lg:col-span-2">
              <h4 className="text-xl font-semibold text-aeo-cyan mb-3">No Lock-In Contracts</h4>
              <p className="text-sm text-neutral-400">I operate clean, transparent, and accountable. Fixed-fee audits, monthly consulting, or project-based optimisation.</p>
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
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">Google Ads Services</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Google Ads Account Audit</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Conversion Tracking Cleanup</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Merchant Center Feed Optimisation</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Smart Bidding Setup (Max Value / tROAS)</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Performance Max Architecture</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">SKU Margin Analysis</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Budget Scaling Strategy</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Competitor Benchmarking</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Landing Page Diagnostics</span>
            <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-sm font-medium">Reporting & Dashboards (Looker Studio)</span>
          </div>
        </motion.div>

        {/* Pricing & Engagement Model FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Pricing & Engagement Model</h3>
          <div className="space-y-4 max-w-3xl mx-auto text-left">
            <details className="group bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-neutral-900 dark:text-neutral-100">
                Do you require lock-in contracts?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-neutral-700 dark:text-neutral-400 text-sm leading-relaxed">
                No. I operate transparently, project-by-project or month-to-month. There are no lock-in contracts, giving you the flexibility to scale up or pause services as needed.
              </p>
            </details>
            <details className="group bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-neutral-900 dark:text-neutral-100">
                How do you charge for your services?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-neutral-700 dark:text-neutral-400 text-sm leading-relaxed">
                I offer fixed-fee technical audits, project-based optimisation for major account overhauls, and monthly consulting for ongoing scaling and management. Everything is transparent and accountable.
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
            <a href="/about/freelance-google-ads-consultant-perth" className="px-5 py-2.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan text-aeo-cyan text-sm font-semibold shadow-sm">Freelance Google Ads Consultant Perth</a>
            <a href="/about/freelance-digital-specialist-perth" className="px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm font-semibold hover:border-aeo-cyan hover:text-aeo-cyan transition-colors shadow-sm">Freelance Digital Specialist Perth</a>
            <a href="/about/freelance-ai-consultant-perth" className="px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm font-semibold hover:border-aeo-cyan hover:text-aeo-cyan transition-colors shadow-sm">Freelance AI Consultant Perth</a>
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
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Want your Google Ads account to scale safely?</h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
            Get a technical audit that shows exactly where your margins leak, where your feed is weak, and how your bidding can improve.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-aeo-cyan/20 hover:scale-[1.02] transition-all duration-300"
          >
            Book a Google Ads Audit
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;
