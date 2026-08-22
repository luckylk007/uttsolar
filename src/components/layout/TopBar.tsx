import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { PhoneIcon, WhatsAppIcon, ZapIcon, MapPinIcon } from '@/components/ui/Icons';
import { LanguageSwitcher } from './LanguageSwitcher';

export function TopBar() {
  return (
    <div className="bg-[#122417] text-slate-300 text-xs sm:text-[13px] border-b border-white/10 py-2.5 transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-[30px] flex items-center justify-between gap-3">
        {/* Left: Scheme Banner Announcement */}
        <div className="flex items-center gap-2.5 font-medium truncate">
          <span className="inline-flex items-center gap-1.5 bg-[#70BA3F] text-[#122417] px-2.5 py-0.5 rounded-full text-[11px] font-extrabold">
            <ZapIcon className="w-3 h-3 text-[#122417]" />
            PM Surya Ghar
          </span>
          <Link
            href="/pm-surya-ghar/"
            className="hover:text-[#70BA3F] transition truncate hidden sm:inline text-xs"
          >
            Special Category CFA: Claim up to ₹85,800 Subsidy for Uttarakhand Homes →
          </Link>
          <Link
            href="/pm-surya-ghar/"
            className="hover:text-[#70BA3F] transition sm:hidden truncate text-xs"
          >
            Subsidy up to ₹85,800 →
          </Link>
        </div>

        {/* Right: Location, Phone, WhatsApp, Language Switcher */}
        <div className="flex items-center gap-3 sm:gap-5 font-semibold text-xs sm:text-[13px] flex-shrink-0">
          <div className="hidden xl:flex items-center gap-1.5 text-slate-400 font-normal">
            <MapPinIcon className="w-3.5 h-3.5 text-[#70BA3F]" />
            <span>Dehradun • Haldwani • Haridwar</span>
          </div>

          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-white transition text-xs"
            title="Call UTTsolar Helpline"
          >
            <PhoneIcon className="w-3.5 h-3.5 text-[#70BA3F]" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20solar%20installation%20in%20Uttarakhand`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-green-400 hover:text-white transition text-xs"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-green-400" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>

          <div className="pl-2 border-l border-white/15">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
