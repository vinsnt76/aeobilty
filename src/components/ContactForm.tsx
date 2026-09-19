"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { trackGaEvent } from '@/lib/gtag';
import { 
  Calendar, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  ExternalLink,
  MessageSquare,
  Globe,
  Briefcase,
  Bot
} from 'lucide-react';

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    businessName: '',
    category: 'New AEO or SEO Enquiry',
    message: '',
    website_hp: '' // Honeypot field for invisible bot protection
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ignore bot submissions if honeypot field is filled
    if (formData.website_hp) {
      setFormSubmitted(true);
      return;
    }

    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'contact_page_form',
      lead_type: formData.category,
      value: 1,
    });

    setFormSubmitted(true);
  };

  const faqs = [
    {
      question: "Do you work with businesses outside Perth?",
      answer: "Yes. While AEObility is founded and based in Perth, Western Australia, we deliver AEO consulting, structured schema engineering, and entity mapping for clients right across Australia (Sydney, Melbourne, Brisbane, Adelaide, Hobart, and regional WA)."
    },
    {
      question: "Do you work alongside existing SEO agencies or web developers?",
      answer: "Yes. AEObility frequently collaborates with internal marketing leads, web developers, and SEO agencies to handle technical schema graphs and AI retrieval readiness."
    },
    {
      question: "What is included in the Free AI Visibility Scan vs the $995 Blueprint?",
      answer: "The free scan evaluates key schema markers and search signals. The $995 Strategic Blueprint provides a complete technical audit, nested JSON-LD schema files, atomic answer block rewrites, an entity relationship map, and step-by-step implementation documentation with 100% client ownership."
    },
    {
      question: "Is the $995 Blueprint price inclusive of GST and how is the credit applied?",
      answer: "Yes, the $995 price is GST-inclusive for Australian clients. If you choose to transition to a full AEO implementation sprint within 60 days of receiving your Blueprint, the full $995 is credited directly against your sprint fee."
    },
    {
      question: "What should I prepare for a 15-minute clarity call?",
      answer: "Zero formal preparation is required. Having your current website URL and primary commercial goals in mind is helpful. We will review live search signals together on Google Meet or phone."
    },
    {
      question: "Can you work with Shopify, WordPress, Webflow, or custom websites?",
      answer: "Yes. AEObility works with all major Content Management Systems (WordPress, Shopify, Webflow, Next.js, custom HTML/React) by inserting clean, validated schema code and refining page content structure."
    },
    {
      question: "Do you offer phone support or walk-in office appointments?",
      answer: "We operate remotely from Perth, WA to maintain focused, founder-led execution. Consultations and support are delivered via booked video call (Google Meet) and direct email (support@aeobility.com.au). Dedicated telephone callbacks are scheduled during consultation windows."
    },
    {
      question: "How does existing-client support work?",
      answer: "Existing clients receive priority technical support via support@aeobility.com.au with response SLAs specified in their sprint agreement."
    },
    {
      question: "Can you guarantee 100% inclusion in ChatGPT, Gemini, or Google AI Overviews?",
      answer: "No consultant can guarantee rankings or citations in third-party AI platforms. AEObility optimizes entity clarity, structured data, and evidence so search engines have maximum confidence to cite your business accurately."
    },
    {
      question: "How long does a typical AEO sprint take?",
      answer: "A standard AEO sprint is completed over 14 to 30 days depending on your site size and technical requirements."
    }
  ];

  return (
    <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-16">
      
      {/* Page Header */}
      <header className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-medium">
          <MessageSquare className="w-4 h-4 text-aeo-cyan" />
          <span>Contact &amp; Technical Support</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-soehne-breit tracking-tight leading-tight">
          Get in touch with <br />
          <span className="text-gradient-aeo">the AEObility team.</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 font-serif leading-relaxed">
          Whether you want to audit your AI visibility, book a 15-minute clarity call, or request technical support for an active sprint, we are here to help. No jargon. No pressure. Just clarity.
        </p>

        {/* Dual CTA Jump Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="https://cal.com/vince-baker-aeo-call/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00E5FF] text-[#050811] font-bold text-xs transition-all hover:-translate-y-0.5 shadow-[0_0_18px_rgba(0,229,255,0.35)] hover:shadow-[0_0_28px_rgba(0,229,255,0.55)]"
          >
            <Calendar className="w-4 h-4 text-[#050811]" />
            <span>Book 15-Min Clarity Call</span>
          </a>
          <a
            href="#enquiry-form"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white font-medium text-xs transition-colors hover:bg-white/10"
          >
            <Mail className="w-4 h-4 text-aeo-cyan" />
            <span>Send an Enquiry</span>
          </a>
        </div>
      </header>

      {/* Main Grid: Direct Booking + Form Routing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: Direct Booking & Target Audience */}
        <section className="lg:col-span-6 flex flex-col gap-8">
          
          {/* Direct Booking Pathway Card */}
          <div className="p-8 bg-zinc-950/90 border border-cyan-500/30 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-2xl pointer-events-none" />
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Direct Booking Pathway</span>
              <h2 className="text-2xl font-bold text-white font-soehne-breit">Book a 15-Minute Clarity Call</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Speak directly with Vinnie Baker (Founder &amp; Principal Consultant). Review how search engines and AI models perceive your business with zero sales pressure.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs font-mono text-zinc-300 border-t border-white/10">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>Format: 1-on-1 Video Call (Google Meet) or Phone</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>Host: Vinnie Baker (Founder &amp; Lead AEO Specialist)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>Timezone: AWST (Perth, WA) with automatic conversion</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>Preparation: Zero prep required (have website URL ready)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://cal.com/vince-baker-aeo-call/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00E5FF] text-[#050811] font-bold text-sm transition-all hover:-translate-y-0.5 shadow-[0_0_24px_rgba(0,229,255,0.35)] hover:shadow-[0_0_32px_rgba(0,229,255,0.55)]"
              >
                <Calendar className="w-4 h-4 text-[#050811]" />
                <span>Open Live Booking Calendar</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#050811]" />
              </a>
            </div>
          </div>

          {/* Who This Is For (Client Fit) */}
          <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3">
            <h3 className="text-lg font-bold text-white font-soehne-breit">Who we work with</h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              AEObility is best suited to Australian service businesses, local operators, trade firms, and growth-focused SMEs that want stronger, clearer visibility across Google Search, Maps, and AI answer engines like ChatGPT and Gemini.
            </p>
            <p className="text-xs text-zinc-400 font-serif leading-relaxed">
              We specialize in structured schema engineering, atomic answer blocks, and entity relationship mapping. We do not offer generic low-cost SEO packages, link-spam schemes, or unverified ranking guarantees.
            </p>
          </div>

          {/* Location & Remote Service Area Clarification */}
          <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3">
            <h3 className="text-lg font-bold text-white font-soehne-breit">Headquarters &amp; Service Area</h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              Based in Perth, Western Australia, AEObility operates remotely to service clients across Australia. Consultations and technical support are delivered via 1-on-1 video call and direct email.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-400 pt-2 border-t border-white/10">
              <div>Legal Entity: Trekaboutoz (AEObility)</div>
              <div>ABN: 61 029 803 255</div>
              <div>Location: Perth, WA 6000</div>
              <div>Hours: Mon–Fri 9:00 AM – 5:00 PM AWST</div>
            </div>
          </div>
        </section>

        {/* Right Column: Categorised Enquiry Form */}
        <section id="enquiry-form" className="lg:col-span-6 bg-zinc-950/90 border border-white/10 p-6 sm:p-8 rounded-3xl relative overflow-hidden backdrop-blur-sm self-start shadow-xl scroll-mt-24">
          <div className="space-y-2 mb-6">
            <h2 className="text-2xl font-bold text-white font-soehne-breit">Send an Enquiry or Support Request</h2>
            <p className="text-xs text-zinc-400 font-serif">
              Select your category below to ensure your message is routed to the right pathway.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-cyan-950/60 border border-cyan-500/40 rounded-2xl flex flex-col items-center text-center gap-4 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-aeo-cyan" />
              <h3 className="font-bold text-lg text-white font-soehne-breit">Enquiry Received</h3>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Thank you for reaching out! Vinnie Baker normally responds within 1 business day (Monday to Friday, 9:00 AM – 5:00 PM AWST) from <strong className="text-white">support@aeobility.com.au</strong>.
              </p>
              <p className="text-xs text-zinc-400 font-serif">
                Need immediate assistance? You can also <a href="https://cal.com/vince-baker-aeo-call/15min" target="_blank" rel="noopener noreferrer" className="text-aeo-cyan underline">book a 15-minute clarity call directly</a>.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-2 text-xs font-mono text-cyan-400 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Invisible Honeypot Field */}
              <input
                type="text"
                name="website_hp"
                value={formData.website_hp}
                onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2" htmlFor="name">
                  Full Name <span className="text-aeo-cyan">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-aeo-cyan focus:ring-1 focus:ring-aeo-cyan transition-all"
                  placeholder="Vince Baker"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2" htmlFor="email">
                  Email Address <span className="text-aeo-cyan">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-aeo-cyan focus:ring-1 focus:ring-aeo-cyan transition-all"
                  placeholder="vince@example.com.au"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2" htmlFor="website">
                    Website URL <span className="text-zinc-500 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="url"
                    id="website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-aeo-cyan focus:ring-1 focus:ring-aeo-cyan transition-all"
                    placeholder="https://yourbusiness.com.au"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2" htmlFor="businessName">
                    Business Name <span className="text-zinc-500 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-aeo-cyan focus:ring-1 focus:ring-aeo-cyan transition-all"
                    placeholder="Your Business Pty Ltd"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2" htmlFor="category">
                  Enquiry Category <span className="text-aeo-cyan">*</span>
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-aeo-cyan focus:ring-1 focus:ring-aeo-cyan transition-all"
                >
                  <option value="New AEO or SEO Enquiry">New AEO or SEO Enquiry</option>
                  <option value="Book / Review $995 AEO Blueprint">Book / Review $995 AEO Blueprint</option>
                  <option value="Existing Client Technical Support">Existing Client Technical Support</option>
                  <option value="Local Business or E-Commerce Visibility">Local Business or E-Commerce Visibility</option>
                  <option value="Agency Partnership / White-Label Sprint">Agency Partnership / White-Label Sprint</option>
                  <option value="General Question / Administrative Enquiry">General Question / Administrative Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2" htmlFor="message">
                  How can we help? <span className="text-aeo-cyan">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-aeo-cyan focus:ring-1 focus:ring-aeo-cyan transition-all resize-none"
                  placeholder="Briefly describe your enquiry, current website challenge, or support requirement..."
                />
              </div>

              {/* Privacy & Consent Statement */}
              <p className="text-[11px] text-zinc-400 font-serif leading-normal pt-1">
                By submitting this form, you agree that AEObility may use your details to respond to your enquiry in accordance with our <Link href="/privacy-policy" className="text-aeo-cyan underline">Privacy Policy</Link>. Zero marketing spam.
              </p>

              <button
                type="submit"
                className="w-full bg-[#00E5FF] text-[#050811] font-bold text-sm py-3.5 px-6 rounded-xl hover:shadow-[0_0_24px_rgba(0,229,255,0.4)] transition-all cursor-pointer text-center mt-2 shadow-md"
              >
                Submit Enquiry
              </button>
            </form>
          )}

          {/* Compact Trust Proof Box */}
          <div className="mt-8 pt-6 border-t border-white/10 space-y-2 text-xs font-serif text-zinc-300">
            <div className="font-bold text-white font-soehne-breit flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-aeo-cyan" />
              <span>Founder-Led Quality &amp; Blueprint Guarantee</span>
            </div>
            <p className="text-zinc-400 leading-relaxed text-[12px]">
              You work 100% directly with founder Vinnie Baker. The $995 Strategic Blueprint is GST-inclusive and 100% credited toward your full AEO implementation sprint if booked within 60 days of delivery.
            </p>
          </div>
        </section>
      </div>

      {/* Expanded FAQ Accordion Section */}
      <section className="border-t border-white/10 pt-12 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Contact &amp; Support Questions</h2>
        </div>

        <div className="space-y-3 max-w-4xl">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="bg-zinc-950/80 border border-white/10 rounded-xl overflow-hidden transition-all">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-white font-soehne-breit pr-4">{faq.question}</span>
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
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 border-t border-white/10 bg-black/40' : 'max-h-0'}`}
                >
                  <p className="p-5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
}

