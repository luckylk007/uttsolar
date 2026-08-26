'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-expect-error vanta does not provide full ts types
import CLOUDS from 'vanta/dist/vanta.clouds.min';

interface VantaCloudsBgProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'green' | 'blue';
}

export function VantaCloudsBg({
  children,
  className = '',
  variant = 'green',
}: VantaCloudsBgProps) {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: { destroy: () => void } | null = null;

    if (vantaRef.current) {
      try {
        const isGreen = variant === 'green';
        effect = CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: isGreen ? 0x17220f : 0x34baf6,
          cloudColor: isGreen ? 0x46a304 : 0xd6ecfa,
          cloudShadowColor: isGreen ? 0x0f180a : 0x165b80,
          sunColor: isGreen ? 0xffde21 : 0xffaa22,
          sunGlareColor: isGreen ? 0xf59e0b : 0xff7700,
          sunlightColor: isGreen ? 0xffde21 : 0xffcc44,
          speed: 0.75,
        });
      } catch (e) {
        console.error('Vanta init error:', e);
      }
    }

    return () => {
      if (effect) {
        try {
          effect.destroy();
        } catch {
          // ignore cleanup errors
        }
      }
    };
  }, [variant]);

  return (
    <div
      ref={vantaRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* 15% Transparency Theme Green Overlay & Subtle Gradients */}
      <div className="absolute inset-0 bg-[#46A304]/15 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#17220F]/90 via-[#17220F]/75 to-[#17220F]/45 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#17220F] via-transparent to-[#17220F]/40 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

