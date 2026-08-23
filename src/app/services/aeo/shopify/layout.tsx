import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopify AEO & AI Search Optimisation | AEObility",
  description: "Improve how Search, Maps, and AI platforms discover, read and recommend your Shopify store. Product schema, collection structure, and AEO sprints from $495 ex. GST.",
  alternates: {
    canonical: "https://www.aeobility.com.au/services/aeo/shopify",
  },
  openGraph: {
    title: "Shopify AEO & AI Search Optimisation | AEObility",
    description: "Improve how Search, Maps, and AI platforms discover, read and recommend your Shopify store. Product schema, collection structure, and AEO sprints from $495 ex. GST.",
    url: "https://www.aeobility.com.au/services/aeo/shopify",
    type: "website",
    siteName: "AEObility",
  },
  keywords: [
    "Shopify AEO Australia",
    "Shopify AI Search Marketing",
    "Product Schema Optimisation",
    "Shopify Collection Page Structure",
    "E-commerce AI Search Strategy",
    "Shopify Micro-Sprints Perth"
  ]
};

export default function ShopifyAeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
