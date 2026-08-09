'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import SubNavPills from '@/components/navigation/SubNavPills';

export default function AEOLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const AEO_HUB_PILLS = [
    { label: 'AEO Hub', href: '/services/aeo', isActive: pathname === '/services/aeo' },
    { label: '1. What is AEO?', href: '/services/aeo/definition', isActive: pathname === '/services/aeo/definition' },
    { label: '2. AEO vs SEO', href: '/services/aeo/comparison', isActive: pathname === '/services/aeo/comparison' },
    { label: '3. Best Strategies', href: '/services/aeo/procedures', isActive: pathname === '/services/aeo/procedures' },
    { label: '4. Constraints', href: '/services/aeo/constraints', isActive: pathname === '/services/aeo/constraints' },
    { label: '5. Costs & Timing', href: '/services/aeo/costs-timing', isActive: pathname === '/services/aeo/costs-timing' },
    { label: '6. Shopify AEO', href: '/services/aeo/shopify', isActive: pathname === '/services/aeo/shopify' },
    { label: '7. Local Visibility', href: '/services/aeo/local-business', isActive: pathname === '/services/aeo/local-business' },
  ];

  return (
    <>
      <SubNavPills sectionTitle="AEO Hub" items={AEO_HUB_PILLS} />
      {children}
    </>
  );
}
