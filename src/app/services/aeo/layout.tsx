import React from 'react';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';

export default function AEOLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubNavPills items={HUB_SUBNAV_MAPS.aeo} />
      {children}
    </>
  );
}
