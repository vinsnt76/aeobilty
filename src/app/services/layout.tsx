'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // /services/aeo/* has its own dedicated AEO Hub layout
  if (pathname.startsWith('/services/aeo')) {
    return <>{children}</>;
  }

  return (
    <>
      <SubNavPills items={HUB_SUBNAV_MAPS.services} />
      {children}
    </>
  );
}
