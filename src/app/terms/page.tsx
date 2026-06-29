import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
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

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms & Conditions</h1>
        <p className="text-sm text-white/50">Last updated: {new Date().toLocaleDateString('en-AU')}</p>

        <div className="space-y-6 text-sm text-white/80 font-light leading-relaxed">
          <p>
            Welcome to AEObility. By accessing our website, requesting a visibility audit, or engaging our services, you agree to comply with and be bound by the following Terms & Conditions. If you disagree with any part of these terms, please do not use our website.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">1. Services Provided</h2>
          <p>
            AEObility provides online visibility reviews, digital consultancy, and strategic advice via the 90-Day AI Success Blueprint. 
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Visibility Audits:</strong> All free visibility audits are provided manually within 24 hours of submission. These reports are for informational purposes only.</li>
            <li><strong>Blueprint Fee Credit:</strong> The $995 blueprint fee is credited back into your plan if you choose to partner with us for the execution of the 90-Day Strategy.</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">2. Intellectual Property</h2>
          <p>
            Unless otherwise stated, AEObility owns the intellectual property rights for all material, layouts, graphics, and text on this website. You may view and print pages for your personal or internal business use, but you must not republish, sell, or duplicate our content without written consent.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">3. Accuracy of Strategy and Information</h2>
          <p>
            While we strive to ensure that all recommendations, blueprints, and audits are highly accurate and effective, we make no guarantees regarding specific ranking positions, citation frequencies, or financial outcomes due to the constantly changing nature of search engines, AI platforms, and local directory algorithms.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">4. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, AEObility will not be liable for any direct, indirect, incidental, or consequential damages arising out of your use or inability to use this website, audits, or strategic blueprints.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">5. Governing Law</h2>
          <p>
            These Terms & Conditions are governed by and construed in accordance with the laws of Western Australia, and you submit to the non-exclusive jurisdiction of the courts of Western Australia for the resolution of any disputes.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">6. Contact Information</h2>
          <p>
            If you have any questions regarding these terms, please contact us:
          </p>
          <p className="font-semibold text-aeo-cyan">
            Email: legal@aeobility.com.au
          </p>
        </div>
      </div>
    </div>
  );
}
