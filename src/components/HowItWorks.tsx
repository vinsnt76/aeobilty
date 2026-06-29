'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Globe, Mail } from 'lucide-react';

export default function HowItWorks() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url && email) {
      setSubmitted(true);
    }
  };

  const steps = [
    {
      num: '01',
      title: 'Enter Your Website URL',
      description: 'Provide your primary business domain name so our engine can analyze your existing online presence and AI index status.',
    },
    {
      num: '02',
      title: 'Get Your Free Audit',
      description: 'Receive an instant report identifying visibility gaps across Google, ChatGPT citations, and social discovery engines.',
    },
    {
      num: '03',
      title: 'Receive Your 90‑Day AI Success Blueprint',
      description: 'Get an actionable, step-by-step blueprint detailing how to secure more leads and make your brand AI-discoverable.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-neutral-50 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-widest text-aeo-purple uppercase">
            Simple 3‑Step Process
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
            How It Works
          </h3>
          <p className="text-base text-neutral-600 font-light">
            No technical skills or complex setups required. We analyze your site and deliver the strategy directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Steps */}
          <div className="lg:col-span-7 space-y-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 text-3xl font-extrabold text-neutral-300 tracking-tight leading-none pt-1">
                  {step.num}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-neutral-950">{step.title}</h4>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div id="audit-form" className="lg:col-span-5 bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-xl relative overflow-hidden">
            {/* Top decorative stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-aeo-cyan to-aeo-purple"></div>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900">Audit Requested!</h4>
                <p className="text-sm text-neutral-500 font-light max-w-xs mx-auto">
                  We are analyzing <span className="font-semibold text-neutral-800">{url}</span>. Your visibility report will be sent to <span className="font-semibold text-neutral-800">{email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setUrl('');
                    setEmail('');
                  }}
                  className="mt-4 text-xs font-semibold text-aeo-purple hover:underline"
                >
                  Request another audit
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-neutral-950">Claim Your Free Audit</h4>
                  <p className="text-xs text-neutral-500 font-light mt-1">
                    See how your business performs across AI search and discovery platforms today.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                      Website URL
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input
                        type="url"
                        required
                        placeholder="https://example.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-aeo-cyan/50 focus:border-aeo-cyan transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-aeo-cyan/50 focus:border-aeo-cyan transition-all"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 py-4 rounded-xl bg-black hover:bg-neutral-900 text-white font-semibold text-sm transition-all"
                >
                  Generate My Free Audit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-[10px] text-center text-neutral-400 font-light">
                  By clicking, you agree to our terms. Your privacy is guaranteed.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
