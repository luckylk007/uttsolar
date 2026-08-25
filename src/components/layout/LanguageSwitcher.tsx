'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function LanguageSwitcher() {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const isHindi = pathname.startsWith('/hi') || (typeof window !== 'undefined' && window.location.pathname.startsWith('/hi'));

  const toggleLanguage = (targetLang: 'en' | 'hi') => {
    setIsOpen(false);
    if (targetLang === 'hi' && !pathname.startsWith('/hi')) {
      router.push(`/hi/`);
    } else if (targetLang === 'en' && pathname.startsWith('/hi')) {
      router.push('/');
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-white bg-[#1A3321] hover:bg-[#24452E] rounded-full border border-white/15 transition"
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        <span className="text-[#2F8E04]">🌐</span>
        <span>{isHindi ? 'हिन्दी' : 'English'}</span>
        <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-32 bg-[#122417] border border-white/15 rounded-2xl shadow-2xl z-50 py-1.5 overflow-hidden">
          <button
            type="button"
            onClick={() => toggleLanguage('en')}
            className={`w-full text-left px-3.5 py-2 text-xs font-medium transition flex items-center justify-between ${
              !isHindi ? 'text-[#2F8E04] bg-[#1A3321] font-bold' : 'text-slate-200 hover:bg-[#1A3321]'
            }`}
          >
            <span>English</span>
            {!isHindi && <span className="text-[#2F8E04]">✓</span>}
          </button>
          <button
            type="button"
            onClick={() => toggleLanguage('hi')}
            className={`w-full text-left px-3.5 py-2 text-xs font-medium transition flex items-center justify-between ${
              isHindi ? 'text-[#2F8E04] bg-[#1A3321] font-bold' : 'text-slate-200 hover:bg-[#1A3321]'
            }`}
          >
            <span>हिन्दी</span>
            {isHindi && <span className="text-[#2F8E04]">✓</span>}
          </button>
        </div>
      )}
    </div>
  );
}
