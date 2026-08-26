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
    <div
      ref={vantaRef}
      className={`relative overflow-hidden bg-[#17220F] ${className}`}
    >
      {/* Theme Green Contrast Overlays for Perfect Text Visibility */}
      {/* 1. Theme Deep Green Gradient from Left (Heading side) to Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#17220F]/95 via-[#17220F]/85 to-[#17220F]/60 pointer-events-none z-0" />
      
      {/* 2. 15% Theme Solar Green (#46A304) Tint Layer */}
      <div className="absolute inset-0 bg-[#46A304]/15 pointer-events-none z-0" />
      
      {/* 3. Subtle Vertical Vignette to Blend Seamlessly */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#17220F] via-transparent to-[#17220F]/40 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

