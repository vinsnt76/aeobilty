import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GlobalConsentBanner from "@/components/GlobalConsentBanner";
import CompanionWidget from "@/components/CompanionWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aeobility.com.au"),
  title: "AEObility | Get Found. Get Chosen.",
  description: "AEObility helps Australian small businesses get found across Search, Maps, and AI. Get a free visibility audit, a complimentary 15-minute call, and a 90-Day AI Success Blueprint.",
  keywords: ["visibility audit", "local SEO", "AI search", "Perth SEO", "small business marketing", "get more leads", "map rankings", "Google Business Profile optimisation"],
  authors: [{ name: "AEObility" }],
  robots: "index, follow",
  openGraph: {
    title: "AEObility | Get Found. Get Chosen.",
    description: "Show up across Search, Maps, and AI. Free audit + 15-minute call.",
    url: "https://aeobility.com.au",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AEObility | Get Found. Get Chosen.",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico"
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Global Entity Schema */}
        <script
          id="global-brand-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://aeobility.com.au",
                  "name": "AEObility",
                  "legalName": "Trekaboutoz trading as AEObility",
                  "url": "https://aeobility.com.au",
                  "logo": "https://aeobility.com.au/Profile-Picture-Vinnie.png",
                  "telephone": "0480286282",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "AU"
                  },
                  "taxID": "61029803255",
                  "sameAs": [
                    "https://maps.app.goo.gl/zWC3RxsLV9JMBoGRA",
                    "https://www.linkedin.com/company/133445734/",
                    "https://www.instagram.com/aeo.bility/",
                    "https://www.facebook.com/profile.php?id=61591781069830",
                    "https://www.youtube.com/channel/UCcQMe3h157C2MDt70lohXpg"
                  ]
                },
                {
                  "@type": "Person",
                  "@id": "https://aeobility.com.au/#person",
                  "name": "Vinnie Baker",
                  "jobTitle": "Founder & AEO Specialist",
                  "url": "https://aeobility.com.au/vince-baker",
                  "sameAs": [
                    "https://www.linkedin.com/in/vince-baker/"
                  ],
                  "worksFor": {
                    "@id": "https://aeobility.com.au"
                  }
                },
                {
                  "@type": "VideoObject",
                  "@id": "https://aeobility.com.au/#video",
                  "name": "Our Approach to Answer Engine Search",
                  "description": "Learn how AEObility refactors digital content to rank and get cited inside conversational AI systems and map interfaces.",
                  "thumbnailUrl": "https://aeobility.com.au/aeobility-video-explainer.webp", 
                  "uploadDate": "2026-01-01T08:00:00Z",
                  "contentUrl": "https://aeobility.com.au/videos/explainer.mp4", 
                  "embedUrl": "https://drive.google.com/file/d/18D0_A6T5Xikp7wvAg0AGcDDXRtdQKlG1/preview",
                  "publisher": {
                    "@type": "Organization",
                    "name": "AEObility",
                    "@id": "https://aeobility.com.au"
                  }
                }
              ]
            })
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M9F4DT3Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <GlobalConsentBanner />
        <CompanionWidget />

        {/* Initialize Consent Mode Defaults */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
              });
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M9F4DT3Q');
          `}
        </Script>

        {/* Google Analytics Global Site Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3WVLWVG6VH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3WVLWVG6VH');
          `}
        </Script>
      </body>
    </html>
  );
}
