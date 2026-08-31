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
}: VantaCloudsBgProps) {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: { destroy: () => void } | null = null;

    if (vantaRef.current) {
      try {
        effect = CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x226b9c,         // Natural Sky Blue
          cloudColor: 0xe8f4fc,       // Natural White / Light Clouds
          cloudShadowColor: 0x144160, // Natural Cloud Depth Shadow
          sunColor: 0xffaa22,         // Radiant Golden Solar Sun
          sunGlareColor: 0xff7700,    // Warm Solar Flare
          sunlightColor: 0xffde21,    // Bright Solar Yellow Light
          speed: 0.7,
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
  }, []);

  return (
    <div className={`relative overflow-hidden bg-[#17220F] ${className}`}>
      {/* 1. Vanta 3D Canvas Background Host */}
      <div ref={vantaRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* 2. Theme Solar Green Tint Overlay */}
      <div className="absolute inset-0 bg-[#46A304]/25 pointer-events-none z-10" />

      {/* 3. Deep Green Directional Contrast Gradient for Sharp Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#17220F]/92 via-[#17220F]/80 to-[#17220F]/45 pointer-events-none z-10" />

      {/* 4. Top and Bottom Ambient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#17220F]/50 via-transparent to-[#17220F] pointer-events-none z-10" />

      {/* 5. Foreground Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}

