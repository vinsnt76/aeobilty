"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === '/' || pathname === '') return null;

  // Split paths and build breadcrumb trail
  const pathParts = pathname.split('/').filter(Boolean);
  
  // Format labels to match the literal lowercase path segments as requested
  const formatLabel = (part: string) => {
    return part.toLowerCase();
  };

  const breadcrumbs = pathParts.map((part, index) => {
    const href = '/' + pathParts.slice(0, index + 1).join('/');
    const isLast = index === pathParts.length - 1;
    return {
      label: formatLabel(part),
      href,
      isLast
    };
  });

  // Generate BreadcrumbList JSON-LD Schema
  const schemaListItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aeobility.com.au"
    },
    ...breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 2,
      "name": crumb.label,
      "item": `https://aeobility.com.au${crumb.href}`
    }))
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaListItems
  };

  const schemaId = `breadcrumb-schema-${pathParts.join('-')}`;

  return (
    <div className="max-w-6xl mx-auto w-full px-6 pt-24 -mb-8">
      {/* JSON-LD Schema */}
      <script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] font-mono text-white/40">
        <Link href="/" className="hover:text-aeo-cyan transition-colors flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        
        {breadcrumbs.map((crumb) => (
          <React.Fragment key={crumb.href}>
            <ChevronRight className="w-3 h-3 text-white/20" />
            {crumb.isLast ? (
              <span className="text-aeo-cyan font-medium">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-aeo-cyan transition-colors">
                {crumb.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}
