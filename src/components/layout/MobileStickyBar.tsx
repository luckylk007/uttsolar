import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { PhoneIcon, WhatsAppIcon, ZapIcon, CalculatorIcon } from '@/components/ui/Icons';

export function MobileStickyBar() {
  return (
    <aside aria-label="Mobile quick actions" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto items-center">
        {/* 1. Call Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-700 hover:text-solar-700 hover:bg-solar-50 transition"
          title="Call Solar Expert"
        >
          <PhoneIcon className="w-5 h-5 text-solar-600 mb-0.5" />
          <span className="text-[10px] font-bold">Call</span>
        </a>

        {/* 2. WhatsApp Button */}
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20solar%20installation%20in%20Uttarakhand`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-700 hover:text-green-700 hover:bg-green-50 transition"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5 text-green-600 mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* 3. Calculator */}
        <Link
          href="/calculator/"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-700 hover:text-amber-700 hover:bg-amber-50 transition"
        >
          <CalculatorIcon className="w-5 h-5 text-amber-500 mb-0.5" />
          <span className="text-[10px] font-bold">Calculator</span>
        </Link>

        {/* 4. Primary CTA: Get Quote */}
        <Link
          href="/contact/?intent=quote"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-gradient-to-r from-solar-600 to-emerald-600 text-white font-bold shadow-sm"
        >
          <ZapIcon className="w-5 h-5 text-amber-300 mb-0.5" />
          <span className="text-[10px] font-extrabold">Get Quote</span>
        </Link>
      </div>
    </aside>
  );
}
