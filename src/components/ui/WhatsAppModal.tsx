'use client';

import React, { useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { WhatsAppIcon, XIcon, ShieldCheckIcon, PhoneIcon } from '@/components/ui/Icons';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  customMessage?: string;
}

export function WhatsAppModal({ isOpen, onClose, customMessage }: WhatsAppModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const defaultText = customMessage || 'Hi, I am interested in solar panel installation in Uttarakhand.';
  const encodedText = encodeURIComponent(defaultText);

  const contactOptions = [
    {
      id: 'primary',
      title: 'Solar Consultation & Pricing',
      subtitle: 'System sizing, subsidy calculation & quotation',
      number: siteConfig.phoneDisplay, // +91 78300 60725
      badge: 'Primary Desk',
      badgeColor: 'bg-[#EAF4E4] text-[#2D5A27] border-[#70BA3F]/30',
      whatsappUrl: `https://wa.me/${siteConfig.whatsapp}?text=${encodedText}`,
      telUrl: `tel:${siteConfig.phone}`,
    },
    {
      id: 'secondary',
      title: 'Technical & Site Survey Desk',
      subtitle: 'Site inspection, UPCL net metering & AMC support',
      number: siteConfig.phoneSecondaryDisplay, // +91 84750 14008
      badge: 'Engineering Desk',
      badgeColor: 'bg-[#FEF3C7] text-[#92400E] border-[#F4B740]/40',
      whatsappUrl: `https://wa.me/${siteConfig.whatsappSecondary}?text=${encodedText}`,
      telUrl: `tel:${siteConfig.phoneSecondary}`,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-[#122417]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#E1E8DE] overflow-hidden z-10 my-auto transform transition-all">
        {/* Header Ribbon */}
        <div className="bg-[#128C7E] text-white px-5 py-4 sm:px-6 sm:py-5 relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white text-[#25D366] flex items-center justify-center shadow-md">
              <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                Connect on WhatsApp
              </h3>
              <p className="text-[11px] sm:text-xs text-emerald-100">
                Choose a solar specialist to chat with
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition focus:outline-none"
            aria-label="Close modal"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>

        {/* 2 WhatsApp Numbers List */}
        <div className="p-5 sm:p-6 space-y-3.5">
          {contactOptions.map((opt) => (
            <div
              key={opt.id}
              className="p-4 rounded-2xl bg-[#F8FAF6] border border-[#E1E8DE] hover:border-[#25D366] hover:bg-[#F0F8EC] transition group flex flex-col justify-between space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#122417] group-hover:text-[#128C7E] transition">
                      {opt.title}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${opt.badgeColor}`}>
                      {opt.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#687B6C] mt-0.5 leading-relaxed">
                    {opt.subtitle}
                  </p>
                  <div className="text-sm font-extrabold text-[#122417] mt-1 tracking-wide">
                    {opt.number}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1 border-t border-[#E1E8DE]/60">
                <a
                  href={opt.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex-1 py-2.5 px-4 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition flex items-center justify-center gap-2 shadow-xs active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={opt.telUrl}
                  onClick={onClose}
                  className="p-2.5 rounded-full bg-white text-[#122417] hover:bg-[#EAF4E4] hover:text-[#70BA3F] border border-[#E1E8DE] transition flex items-center justify-center"
                  title="Direct Phone Call"
                >
                  <PhoneIcon className="w-4 h-4 text-[#70BA3F]" />
                </a>
              </div>
            </div>
          ))}

          {/* Footer note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#687B6C] pt-2">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-[#70BA3F]" />
            <span>Fast reply within 10–15 mins • Mon–Sat 9am–7pm</span>
          </div>
        </div>
      </div>
    </div>
  );
}
