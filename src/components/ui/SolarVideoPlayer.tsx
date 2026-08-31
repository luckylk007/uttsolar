'use client';

import React, { useState } from 'react';
import { PlayIcon, XIcon } from '@/components/ui/Icons';

interface SolarVideoPlayerProps {
  videoId?: string;
  thumbnailUrl?: string;
  title?: string;
  className?: string;
}

export function SolarVideoPlayer({
  videoId = '1kUE0BZtTRc',
  thumbnailUrl = '/images/solar-engineer-inspection.jpg',
  title = 'Certified Solar EPC Engineering & Clean Power',
  className = '',
}: SolarVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video bg-[#17220F] group ${className}`}
    >
      {!isPlaying ? (
        <>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17220F]/80 via-[#17220F]/30 to-transparent flex flex-col justify-between p-6">
            <div className="flex justify-between items-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17220F]/80 backdrop-blur-md text-[11px] font-bold text-[#70C92F] border border-[#46A304]/30">
                <span className="w-2 h-2 rounded-full bg-[#46A304] animate-pulse" />
                <span>Solar Video Overview</span>
              </span>
            </div>

            <div className="flex items-center justify-center my-auto">
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label="Play Solar Video"
                className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#46A304] hover:bg-[#3B8B03] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group-hover:ring-8 group-hover:ring-[#46A304]/30 cursor-pointer focus:outline-none"
              >
                <PlayIcon className="w-8 h-8 sm:w-9 sm:h-9 ml-1 text-white fill-white" />
              </button>
            </div>

            <div className="text-left">
              <p className="text-white font-bold text-sm sm:text-base drop-shadow-md line-clamp-1">
                {title}
              </p>
              <p className="text-slate-300 text-xs mt-0.5">
                Click to watch clean solar energy in action
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="relative w-full h-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <button
            type="button"
            onClick={() => setIsPlaying(false)}
            aria-label="Close Video"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition focus:outline-none z-20"
          >
            <XIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
