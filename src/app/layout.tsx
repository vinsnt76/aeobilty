import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aeobility.com.au"),
  title: "AEObility — Get Found. Get Chosen.",
  description: "AEObility helps Australian small businesses get found across Search, Maps, and AI. Get a free visibility audit, a complimentary 15-minute call, and a 90-Day AI Success Blueprint.",
  keywords: ["visibility audit", "local SEO", "AI search", "Perth SEO", "small business marketing", "get more leads", "map rankings", "Google Business Profile optimisation"],
  authors: [{ name: "AEObility" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://aeobility.com.au",
  },
  openGraph: {
    title: "AEObility — Get Found. Get Chosen.",
    description: "Show up across Search, Maps, and AI. Free audit + 15-minute call.",
    url: "https://aeobility.com.au",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AEObility — Get Found. Get Chosen.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
