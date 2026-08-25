'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { PhoneIcon, WhatsAppIcon, ZapIcon, CalculatorIcon } from '@/components/ui/Icons';
import { useQuoteModal } from '@/context/QuoteModalContext';
import { useWhatsAppModal } from '@/context/WhatsAppModalContext';

export function MobileStickyBar() {
  const { openQuoteModal } = useQuoteModal();
  const { openWhatsAppModal } = useWhatsAppModal();

  return (
    <aside aria-label="Mobile quick actions" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E1E8DE] px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto items-center">
        {/* 1. Call Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#172B1D] hover:text-[#2F8E04] hover:bg-[#F4F7F2] transition"
          title="Call Solar Expert"
        >
          <PhoneIcon className="w-5 h-5 text-[#2F8E04] mb-0.5" />
          <span className="text-[11px] font-semibold">Call</span>
        </a>

        {/* 2. WhatsApp Button (Opens 2-Number Selection Popup) */}
        <button
          type="button"
          onClick={() => openWhatsAppModal()}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#172B1D] hover:text-[#25D366] hover:bg-[#F4F9EC] transition"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5 text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </button>

        {/* 3. Calculator */}
        <Link
          href="/calculator/"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#172B1D] hover:text-[#2F8E04] hover:bg-[#F4F7F2] transition"
        >
          <CalculatorIcon className="w-5 h-5 text-[#2F8E04] mb-0.5" />
          <span className="text-[11px] font-semibold">Calculator</span>
        </Link>

        {/* 4. Primary CTA: Get Quote (Opens Quote Modal) */}
        <button
          type="button"
          onClick={() => openQuoteModal({ title: 'Get Instant Solar Quote' })}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#2F8E04] hover:bg-[#012258] text-white font-bold shadow-sm active:scale-95 transition"
        >
          <ZapIcon className="w-5 h-5 text-amber-300 mb-0.5" />
          <span className="text-[11px] font-extrabold text-white">Get Quote</span>
        </button>
      </div>
    </aside>
  );
}

