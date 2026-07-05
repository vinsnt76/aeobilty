"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'AEO Consultant Perth',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', category: 'AEO Consultant Perth', message: '' });
    }, 5000);
  };

  const faqs = [
    {
      question: "How do I book a digital marketing consultation?",
      answer: "Use our direct routing inquiry form on the right to select your preferred category, submit details of your website, and we will open a consultation window within 24 hours."
    },
    {
      question: "What is your typical support response time?",
      answer: "We offer responsive implementation support for all Australian businesses. Direct support messages are normally replied to within 24 business hours."
    },
    {
      question: "Can I use the $995 audit credit towards monthly retention packages?",
      answer: "Yes, 100% of the strategic blueprint method cost is credited back if you choose to transition to our full AEO implementation plan."
    }
  ];

  return (
    <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Side: Contact Info, Location Profile & FAQ */}
      <section className="lg:col-span-7 flex flex-col gap-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
            <span>AEO Consultant Perth</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Let&apos;s Talk Strategy. <br />
            <span className="text-gradient-aeo">No Jargon. No Pressure.</span>
          </h1>
          <p className="text-white/60 text-base max-w-lg font-light leading-relaxed">
            Get in touch to review your visibility performance. Submit questions about our technical sprints or book a review call for your $995 audit.
          </p>
        </div>

        {/* What Happens on Your Discovery Strategy Call */}
        <div className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl space-y-6">
          <h2 className="text-xl font-bold text-white">What Happens on Your Discovery Strategy Call</h2>
          <p className="text-sm text-white/60 font-light leading-relaxed">
            We will walk through your free visibility audit results and review how conversational search engines see your brand. You will get a clear overview of our strategic sprints with zero hard sales tactics.
          </p>
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950">
            <Image
              src="/contact-hero.png"
              alt="Clean clean communications station mock-up displaying real-time responsive client calendar tools"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </div>
        </div>

        {/* Submit Your Operational Questions */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold tracking-tight">Submit Your Operational Questions</h2>
          <div className="flex flex-col border border-white/5 rounded-2xl divide-y divide-white/5 overflow-hidden bg-white/[0.01]">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base pr-4 text-white/90">{faq.question}</span>
                    <svg
                      className={`w-4 h-4 text-aeo-cyan shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 border-t border-white/5 bg-white/[0.01]' : 'max-h-0'}`}
                  >
                    <p className="p-6 text-sm text-white/60 leading-relaxed font-light">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Location Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-8 bg-white/[0.01] border border-white/5 rounded-3xl">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Our Location Profile</h2>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              We coordinate office data for businesses across Perth, Western Australia, ensuring maps coordinates align exactly with machine-readable metadata.
            </p>
            <div className="text-xs space-y-1 font-mono text-white/40">
              <div>Coordinate Office Data: Perth WA 6000</div>
              <div>Consultation Window: Mon-Fri 9AM-5PM AWST</div>
              <div>Aeobility Contact Information: support@aeobility.com.au</div>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-neutral-950">
            <Image
              src="/contact-map-coordinates.png"
              alt="Map pinpoint layout highlighting office coordinates and operational business hours windows"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
        </div>
      </section>

      {/* Right Side: Direct Routing Inquiry Form */}
      <section className="lg:col-span-5 bg-white/[0.01] border border-white/5 p-8 rounded-3xl relative overflow-hidden backdrop-blur-sm self-start">
        <div className="absolute top-0 right-0 w-32 h-32 bg-aeo-cyan/5 rounded-full filter blur-2xl -z-10" />
        <h2 className="text-2xl font-bold mb-6">Send an Enquiry</h2>

        {formSubmitted ? (
          <div className="p-6 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-2xl flex flex-col items-center text-center gap-4 animate-fade-in">
            <svg className="w-12 h-12 text-aeo-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-bold text-lg">Message Sent</h3>
            <p className="text-xs text-white/60">
              Thank you for reaching out. We have received your direct routing inquiry form and our team will get in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-aeo-cyan focus:ring-1 focus:ring-aeo-cyan transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-aeo-cyan focus:ring-1 focus:ring-aeo-cyan transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2" htmlFor="category">
                Enquiry Category
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-aeo-cyan focus:ring-1 focus:ring-aeo-cyan transition-all appearance-none"
              >
                <option value="AEO Consultant Perth">AEO Consultant Perth</option>
                <option value="Small Business Optimization Support">Small Business Optimization Support</option>
                <option value="Consultation Window Request">Consultation Window Request</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2" htmlFor="message">
                How can we help?
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-aeo-cyan focus:ring-1 focus:ring-aeo-cyan transition-all resize-none"
                placeholder="Describe your enquiry here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm py-4 px-6 rounded-xl hover:opacity-90 transition-opacity cursor-pointer text-center mt-2"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
