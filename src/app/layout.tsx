import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GlobalConsentBanner from "@/components/GlobalConsentBanner";
import BillWidget from "@/components/BillWidget";
import AIModalAssistant from "@/components/AIModalAssistant";
import SSRFallbackNav from "@/components/navigation/SSRFallbackNav";
import SiteNavigationSchema from "@/components/navigation/SiteNavigationSchema";
import { SpeedInsights } from "@vercel/speed-insights/next";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-3WVLWVG6VH';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aeobility.com.au"),
  title: "AEObility | Get Found. Get Chosen.",
  description: "AEObility helps Australian small businesses get found across Search, Maps, and AI platforms. Get a free visibility audit, a complimentary 15-minute call, and a 90-Day AI Success Blueprint.",
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
  verification: {
    google: "TlRAYGi_c4DdLtiNq7_LpYCCS7XE-OInAQaOxQJ66QY",
  },
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
      <head>
        <meta name="google-site-verification" content="TlRAYGi_c4DdLtiNq7_LpYCCS7XE-OInAQaOxQJ66QY" />
        <link rel="nlweb-ask" href="https://aeobility.com.au/api/search/answer" />
        <link rel="nlweb-mcp" href="https://aeobility.com.au/api/mcp" />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteNavigationSchema />
        <SSRFallbackNav />
        {/* Direct GA4 Script Loading via next/script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        {/* Initialize Consent Mode & Direct GA4 Config */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'granted',
              'ad_user_data': 'granted',
              'ad_personalization': 'granted',
              'analytics_storage': 'granted'
            });
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: true
            });
          `}
        </Script>
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
                  "@id": "https://aeobility.com.au/#organisation",
                  "name": "AEObility",
                  "alternateName": [
                    "AEO Bility",
                    "AEObilty",
                    "AEO bility Perth",
                    "AEObility Perth"
                  ],
                  "legalName": "Trekaboutoz trading as AEObility",
                  "url": "https://aeobility.com.au",
                  "logo": "https://aeobility.com.au/Profile-Picture-Vinnie.png",
                  "telephone": "0480286282",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Perth",
                    "addressRegion": "WA",
                    "addressCountry": "AU"
                  },
                  "founder": {
                    "@type": "Person",
                    "@id": "https://aeobility.com.au/#person"
                  },
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Perth",
                      "sameAs": "https://en.wikipedia.org/wiki/Perth"
                    },
                    {
                      "@type": "AdministrativeArea",
                      "name": "Western Australia",
                      "sameAs": "https://en.wikipedia.org/wiki/Western_Australia"
                    },
                    {
                      "@type": "Country",
                      "name": "Australia"
                    }
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "AEO & AI Search Marketing Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Answer Engine Optimisation (AEO)",
                          "url": "https://aeobility.com.au/services/aeo"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "GEO Marketing Services",
                          "url": "https://aeobility.com.au/services/geo-marketing"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Search Marketing",
                          "url": "https://aeobility.com.au/services/ai-search-marketing"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "The AEObility MVP Strategic Blueprint",
                          "url": "https://aeobility.com.au/solutions/aeo-blueprint"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AEO Technical Sprints",
                          "url": "https://aeobility.com.au/solutions/aeo-sprint"
                        }
                      }
                    ]
                  },
                  "taxID": "61029803255",
                  "sameAs": [
                    "https://maps.app.goo.gl/zWC3RxsLV9JMBoGRA",
                    "https://www.linkedin.com/company/133445734/",
                    "https://www.instagram.com/aeo.bility/",
                    "https://www.facebook.com/profile.php?id=61591781069830",
                    "https://www.youtube.com/channel/UCcQMe3h157C2MDt70lohXpg"
                  ],
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://aeobility.com.au/api/search/answer?query={search_term_string}",
                      "actionPlatform": [
                        "http://schema.org/DesktopWebPlatform",
                        "http://schema.org/MobileWebPlatform"
                      ],
                      "contentType": "application/json"
                    },
                    "query-input": "required name=search_term_string"
                  },
                  "publishingPrinciples": [
                    {
                      "@type": "DigitalDocument",
                      "name": "Model Context Protocol Endpoint",
                      "url": "https://aeobility.com.au/api/mcp"
                    }
                  ]
                },
                {
                  "@type": "Person",
                  "@id": "https://aeobility.com.au/#person",
                  "name": "Vinnie Baker",
                  "alternateName": ["Vince Baker"],
                  "jobTitle": "Founder & AEO Specialist",
                  "url": "https://aeobility.com.au/vince-baker",
                  "sameAs": [
                    "https://www.linkedin.com/in/vince-baker/",
                    "https://github.com/vinsnt76"
                  ],
                  "worksFor": {
                    "@id": "https://aeobility.com.au/#organisation"
                  },
                  "knowsAbout": [
                    "Answer Engine Optimisation",
                    "Generative Engine Optimisation",
                    "Model Context Protocol",
                    {
                      "@type": "Thing",
                      "name": "Information Retrieval",
                      "sameAs": "https://en.wikipedia.org/wiki/Information_retrieval"
                    },
                    {
                      "@type": "Thing",
                      "name": "Natural Language Processing",
                      "sameAs": "https://en.wikipedia.org/wiki/Natural_language_processing"
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://aeobility.com.au/#website",
                  "url": "https://aeobility.com.au",
                  "name": "AEObility",
                  "publisher": {
                    "@id": "https://aeobility.com.au"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://aeobility.com.au/api/search/answer?query={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
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
                    "@id": "https://aeobility.com.au"
                  }
                }
              ]
            })
          }}
        />


        {children}
        <GlobalConsentBanner />
        <BillWidget />
        <AIModalAssistant />
        <SpeedInsights />
      </body>
    </html>
  );
}
