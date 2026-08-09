'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import SubNavPills from '@/components/navigation/SubNavPills';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // /services/aeo/* has its own dedicated 8-item AEO Hub layout
  if (pathname.startsWith('/services/aeo')) {
    return <>{children}</>;
  }

  const SERVICES_PILLS = [
    { label: 'Services Overview', href: '/services', isActive: pathname === '/services' },
    { label: 'Answer Engine Optimisation (AEO)', href: '/services/aeo', isActive: pathname === '/services/aeo' },
    { label: 'AI Search Marketing', href: '/services/ai-search-marketing', isActive: pathname === '/services/ai-search-marketing' },
    { label: 'Local & GEO Map Marketing', href: '/services/geo-marketing', isActive: pathname === '/services/geo-marketing' },
  ];

  return (
    <>
      <SubNavPills sectionTitle="Our Services" items={SERVICES_PILLS} />
      {children}
    </>
  );
}
