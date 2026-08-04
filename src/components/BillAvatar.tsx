"use client";

import React from 'react';
import Image from 'next/image';

interface BillAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'analyzing' | 'offline';
  pulse?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function BillAvatar({
  size = 'md',
  status = 'online',
  pulse = true,
  className = '',
  onClick
}: BillAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const statusColors = {
    online: 'bg-emerald-500',
    analyzing: 'bg-amber-400 animate-ping',
    offline: 'bg-zinc-600'
  };

  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden border border-white/15 bg-neutral-900 shadow-lg shrink-0 ${sizeClasses[size]} ${
        onClick ? 'cursor-pointer hover:scale-105 transition-transform' : ''
      } ${className}`}
    >
      <Image
        src="/char-mouth-closed.png"
        alt="AI Bill Avatar"
        fill
        sizes="(max-width: 768px) 32px, 56px"
        className={`object-cover ${pulse ? 'animate-pulse' : ''}`}
      />
      {status && (
        <span
          className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-black z-10 ${statusColors[status]}`}
          title={`Status: ${status}`}
        />
      )}
    </div>
  );
}
