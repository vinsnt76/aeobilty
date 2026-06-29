import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-aeo-cyan hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-white/50">Last updated: {new Date().toLocaleDateString('en-AU')}</p>

        <div className="space-y-6 text-sm text-white/80 font-light leading-relaxed">
          <p>
            At AEObility, we are committed to protecting your privacy in accordance with the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth). This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or request a visibility audit.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">1. Personal Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when requesting a free visibility audit. This information may include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Website URL</li>
            <li>Email address</li>
            <li>Any other communication details provided via our enquiry paths</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">2. How We Use Your Information</h2>
          <p>
            We use the collected information primarily to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Perform a manual review and generate your free visibility audit.</li>
            <li>Send the completed audit report directly to your inbox.</li>
            <li>Follow up with you regarding our 90-Day AI Success Blueprint and book consultation calls.</li>
            <li>Provide marketing updates and professional advice (you can opt out at any time).</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">3. Disclosure of Personal Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may disclose your information to trusted third-party service providers (such as hosting and email delivery services) solely to help us operate our business and deliver our services to you, subject to strict confidentiality agreements.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">4. Security of Your Information</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, loss, misuse, alteration, or disclosure. However, please be aware that no transmission of data over the internet is completely secure.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">5. Your Access and Correction Rights</h2>
          <p>
            You have the right to request access to the personal information we hold about you and to ask for updates or corrections. Please contact us directly if you would like to review or update your details.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">6. Contact Us</h2>
          <p>
            If you have any questions or complaints about this Privacy Policy, please contact us:
          </p>
          <p className="font-semibold text-aeo-cyan">
            Email: compliance@aeobility.com.au
          </p>
        </div>
      </div>
    </div>
  );
}
