"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function SupportPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Support',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate support submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: 'General Support', message: '' });
    }, 5000);
  };

  const faqs = [
    {
      question: "How do I save my Vince Baker Business Card to Google Wallet?",
      answer: "Navigate to the Vince Baker business card link on your mobile device, click the 'Add to Google Wallet' button, and follow the Google prompt to save the pass. Once saved, you can access the card anytime from your Google Wallet application even when offline."
    },
    {
      question: "What is AI Search Optimisation (AEO)?",
      answer: "AEO is the practice of optimising your business's online presence so AI engines (like ChatGPT, Claude, Gemini, Google Search Generative Experience, and Perplexity) can find, trust, and recommend your services when users ask conversational questions."
    },
    {
      question: "How do I request a Free Visibility Audit?",
      answer: "Go to our homepage and fill out the Audit request form, or contact us directly using the support form below. We will analyze your digital footprint across Search, Maps, and AI platforms and provide actionable recommendations."
    },
    {
      question: "What is your typical support response time?",
      answer: "We aim to respond to all general support enquiries and partnership requests within 24 to 48 business hours."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Contact Information & FAQ */}
        <section className="lg:col-span-7 flex flex-col gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Support <span className="text-gradient-aeo">Centre</span>
            </h1>
            <p className="text-white/60 text-base max-w-lg">
              We help Australian businesses get found on AI platforms, Search Engines, and Maps. Have questions or need assistance? Reach out to us.
            </p>
          </div>

          {/* Quick Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-aeo-cyan/20 transition-all duration-300 flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl">
                <img src="/email.png" alt="Email" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <div className="text-aeo-cyan text-sm font-semibold uppercase tracking-wider mb-2">Email Support</div>
                <a href="mailto:support@aeobility.com.au" className="text-white hover:text-aeo-cyan transition-colors font-medium">
                  support@aeobility.com.au
                </a>
                <div className="text-xs text-white/40 mt-1">Typical response under 24 hours</div>
              </div>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-aeo-purple/20 transition-all duration-300 flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl">
                <img src="/telephone.png" alt="Phone" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <div className="text-aeo-purple text-sm font-semibold uppercase tracking-wider mb-2">Direct Phone</div>
                <a href="tel:0480286282" className="text-white hover:text-aeo-purple transition-colors font-medium">
                  0480 286 282
                </a>
                <div className="text-xs text-white/40 mt-1">Mon-Fri 9:00 AM - 5:00 PM AEST</div>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
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
                      <p className="p-6 text-sm text-white/60 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Right Side: Contact Support Form */}
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
                Thank you for reaching out. We have received your enquiry and Vince will contact you shortly.
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
                <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2" htmlFor="subject">
                  Enquiry Category
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-aeo-cyan focus:ring-1 focus:ring-aeo-cyan transition-all appearance-none"
                >
                  <option value="General Support">General Support</option>
                  <option value="Wallet Pass Help">Google Wallet Pass Help</option>
                  <option value="Visibility Audit">Free Visibility Audit</option>
                  <option value="Business Enquiries">Business Enquiries</option>
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
