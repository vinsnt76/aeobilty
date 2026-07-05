import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Contact an Expert AEO Consultant in Perth | AEObility",
  description: "Get in touch to review your visibility performance. Submit questions about our technical sprints or book a review call for your $995 audit.",
  keywords: [
    "aeo consultant perth",
    "aeo consultant",
    "aeo marketers near me",
    "book a digital marketing consultation",
    "small business optimization support",
    "aeobility contact information"
  ]
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AEObility",
    "image": "https://aeobility.com.au/Profile-Picture-Vinnie.png",
    "url": "https://aeobility.com.au/contact",
    "telephone": "0480 286 282",
    "email": "support@aeobility.com.au",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Perth St",
      "addressLocality": "Perth",
      "addressRegion": "Western Australia",
      "postalCode": "6000",
      "addressCountry": "Australia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -31.9505,
      "longitude": 115.8605
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <Breadcrumbs />
      <ContactForm />
      <Footer />
    </div>
  );
}
