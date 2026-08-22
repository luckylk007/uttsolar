'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-expect-error vanta does not provide full ts types
import CLOUDS from 'vanta/dist/vanta.clouds.min';

interface VantaCloudsBgProps {
  children?: React.ReactNode;
  className?: string;
}

export function VantaCloudsBg({ children, className = '' }: VantaCloudsBgProps) {
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
          skyColor: 0x34baf6,       // Bright Solar Sky Blue (#34BAF6)
          cloudColor: 0xd6ecfa,     // Crisp Light Clouds
          cloudShadowColor: 0x165b80, // Cloud Ridge Shadow
          sunColor: 0xffaa22,       // Warm Radiant Solar Sun
          sunGlareColor: 0xff7700,  // Sun Flare
          sunlightColor: 0xffcc44,  // Sunlight
          speed: 0.8,
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
      className={`relative overflow-hidden ${className}`}
    >
      {/* Exact 35% Opacity Overlay */}
      <div className="absolute inset-0 bg-[#102A43]/35 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
