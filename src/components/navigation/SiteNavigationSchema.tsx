import React from 'react';
import { NAVIGATION_DATA } from './NavData';

export function SiteNavigationSchema() {
  const navItems = NAVIGATION_DATA.flatMap((l1) =>
    l1.children
      ? l1.children.map((l2) => ({
          "@type": "WebPage",
          "name": l2.entityName,
          "url": `https://aeobility.com.au${l2.href}`
        }))
      : l1.href
      ? [
          {
            "@type": "WebPage",
            "name": l1.title,
            "url": `https://aeobility.com.au${l1.href}`
          }
        ]
      : []
  );

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SiteNavigationElement",
        "@id": "https://aeobility.com.au/#sitenav",
        "name": "AEObility Primary Navigation",
        "isPartOf": { "@id": "https://aeobility.com.au/#website" },
        "hasPart": navItems
      }
    ]
  };

  return (
    <script
      id="site-navigation-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default SiteNavigationSchema;
