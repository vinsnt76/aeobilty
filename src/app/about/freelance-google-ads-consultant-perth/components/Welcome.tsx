"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart, Target, Zap, ShieldCheck } from 'lucide-react';

const Welcome: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      
      {/* Background Motifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-aeo-cyan/5 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-aeo-purple/5 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container relative mx-auto px-6 max-w-5xl flex flex-col items-center text-center z-10">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20 text-aeo-cyan text-xs font-semibold tracking-wide uppercase mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-aeo-cyan animate-pulse"></span>
          Perth, Western Australia
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6"
        >
          Google Ads Consultant for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aeo-cyan to-aeo-purple">
            WA E-Commerce & Service Brands
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-12 leading-relaxed"
        >
          I fix tracking, optimise margins, engineer profitable Smart Bidding, and scale accounts safely.
        </motion.p>

        {/* Proof Points Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 w-full max-w-4xl"
        >
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center text-center">
            <Target className="w-6 h-6 text-aeo-cyan mb-2" />
            <span className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-1">6.37</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">ROAS Achieved (59% above target)</span>
          </div>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center text-center">
            <ShieldCheck className="w-6 h-6 text-aeo-cyan mb-2" />
            <span className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-1">99.4%</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">Merchant Center Feed Approval</span>
          </div>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center text-center">
            <BarChart className="w-6 h-6 text-aeo-cyan mb-2" />
            <span className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-1">+106%</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">Conversion Value Growth</span>
          </div>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center text-center">
            <Zap className="w-6 h-6 text-aeo-cyan mb-2" />
            <span className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-1">51.4%</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">Net Margin Maintained</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <a 
            href="/contact" 
            className="group relative inline-flex items-center justify-center gap-3 bg-neutral-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105 shadow-xl shadow-neutral-900/10 dark:shadow-white/10 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10">Get a Google Ads Audit</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-aeo-cyan to-aeo-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Welcome;
