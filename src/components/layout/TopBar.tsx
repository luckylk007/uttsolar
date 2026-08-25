'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { PhoneIcon, WhatsAppIcon, ZapIcon, MapPinIcon } from '@/components/ui/Icons';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useWhatsAppModal } from '@/context/WhatsAppModalContext';

export function TopBar() {
  const { openWhatsAppModal } = useWhatsAppModal();

  return (
    <div className="bg-[#17220F] text-slate-300 text-xs sm:text-[13px] border-b border-white/10 py-2.5 transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-[30px] flex items-center justify-between gap-3">
        {/* Left: Scheme Banner Announcement */}
        <div className="flex items-center gap-2.5 font-medium truncate">
          <span className="inline-flex items-center gap-1.5 bg-[#FFF4CC] text-[#17220F] border border-[#FFB000]/40 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold">
            <ZapIcon className="w-3 h-3 text-[#FFB000]" />
            PM Surya Ghar
          </span>
          <Link
            href="/pm-surya-ghar/"
            className="hover:text-[#46A304] transition truncate hidden sm:inline text-xs"
          >
            Special Category CFA: Claim up to ₹85,800 Subsidy for Uttarakhand Homes →
          </Link>
          <Link
            href="/pm-surya-ghar/"
            className="hover:text-[#46A304] transition sm:hidden truncate text-xs"
          >
            Subsidy up to ₹85,800 →
          </Link>
        </div>

        {/* Right: Location, Phone, WhatsApp, Language Switcher */}
        <div className="flex items-center gap-3 sm:gap-5 font-semibold text-xs sm:text-[13px] flex-shrink-0">
          <div className="hidden xl:flex items-center gap-1.5 text-slate-400 font-normal">
            <MapPinIcon className="w-3.5 h-3.5 text-[#46A304]" />
            <span>Dehradun • Haldwani • Haridwar</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs">
            <PhoneIcon className="w-3.5 h-3.5 text-[#46A304]" />
            <a
              href={`tel:${siteConfig.phone}`}
              className="hover:text-white transition"
              title="Call Primary Helpline"
            >
              {siteConfig.phoneDisplay}
            </a>
            <span className="text-slate-500 hidden md:inline">|</span>
            <a
              href={`tel:${siteConfig.phoneSecondary}`}
              className="hover:text-white transition hidden md:inline"
              title="Call Alternate Helpline"
            >
              {siteConfig.phoneSecondaryDisplay}
            </a>
          </div>

          <button
            type="button"
            onClick={() => openWhatsAppModal()}
            className="inline-flex items-center gap-1.5 text-green-400 hover:text-white transition text-xs"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-green-400" />
            <span className="hidden md:inline">WhatsApp</span>
          </button>

          <div className="pl-2 border-l border-white/15">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
