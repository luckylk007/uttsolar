import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  ClockIcon,
  LeafIcon,
} from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Contact UTTsolar | Book Free Solar Site Survey in Uttarakhand',
  description:
    'Contact UTTsolar for residential, commercial & industrial solar installation across Uttarakhand. Phone, WhatsApp & free site survey booking for all 13 districts.',
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      <Breadcrumbs items={[{ name: 'Contact Us', url: '/contact/' }]} />

      {/* Hero Header - Solor Dark Style */}
      <section className="bg-[#122417] text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A3321] border border-[#2F8E04]/40 text-xs font-bold text-[#71B402] uppercase tracking-wider">
          <LeafIcon className="w-4 h-4 text-[#2F8E04]" />
          <span>Helpline &amp; Local Engineering Centers</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
          Contact Uttarakhand <span className="text-[#2F8E04]">Solar Specialists</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Book your free on-site roof inspection, get an exact PM Surya Ghar subsidy estimate, or talk directly with a senior solar engineer serving your district.
        </p>
      </section>

      {/* Contact Grid: Direct Channels (Left) & Form (Right) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Direct Channels (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Phone Card */}
          <div className="bg-white p-6 rounded-3xl border border-[#E1E8DE] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#F4F9EC] text-[#2F8E04] flex items-center justify-center font-bold">
              <PhoneIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-heading font-bold text-[#122417]">Direct Phone Helplines</h2>
              <p className="text-xs text-[#687B6C] mt-0.5">
                Speak directly with our technical solar consultants in Uttarakhand.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 text-base sm:text-lg font-heading font-extrabold text-[#2F8E04] hover:text-[#257203] transition"
              >
                <span>{siteConfig.phoneDisplay}</span>
                <span className="text-[11px] font-semibold text-[#687B6C] bg-[#F4F7F2] px-2 py-0.5 rounded-full border border-[#E1E8DE]">Primary</span>
              </a>
              <a
                href={`tel:${siteConfig.phoneSecondary}`}
                className="inline-flex items-center gap-2 text-base sm:text-lg font-heading font-extrabold text-[#122417] hover:text-[#2F8E04] transition"
              >
                <span>{siteConfig.phoneSecondaryDisplay}</span>
                <span className="text-[11px] font-semibold text-[#687B6C] bg-[#F4F7F2] px-2 py-0.5 rounded-full border border-[#E1E8DE]">Helpline</span>
              </a>
            </div>
            <div className="text-[11px] text-[#687B6C] flex items-center gap-1.5 pt-1">
              <ClockIcon className="w-3.5 h-3.5 text-[#687B6C]" />
              <span>{siteConfig.businessHours}</span>
            </div>
          </div>

          {/* WhatsApp Direct Card */}
          <div className="bg-white p-6 rounded-3xl border border-[#E1E8DE] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold">
              <WhatsAppIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-heading font-bold text-[#122417]">WhatsApp Instant Chat</h2>
              <p className="text-xs text-[#687B6C] mt-0.5">
                Send your electricity bill photo on WhatsApp for instant solar sizing &amp; subsidy calculation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20solar%20installation%20in%20Uttarakhand`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappSecondary}?text=Hi%2C%20I%20am%20interested%20in%20solar%20installation%20in%20Uttarakhand`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-[#122417] bg-[#F4F7F2] hover:bg-[#EAF4E4] border border-[#E1E8DE] transition"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>{siteConfig.phoneSecondaryDisplay}</span>
              </a>
            </div>
          </div>

          {/* Regional Hubs Card */}
          <div className="bg-white p-6 rounded-3xl border border-[#E1E8DE] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#F4F9EC] text-[#2F8E04] flex items-center justify-center font-bold">
              <MapPinIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-heading font-bold text-[#122417]">District Service Hubs</h2>
              <p className="text-xs text-[#687B6C] mt-0.5">
                Permanent field engineering centers in Dehradun, Haldwani, Haridwar, Rudrapur &amp; Almora.
              </p>
            </div>
            <div className="text-xs text-[#687B6C] pt-1 leading-relaxed">
              <strong>Head Office:</strong> {siteConfig.address.street}, {siteConfig.address.city},{' '}
              {siteConfig.address.state} — {siteConfig.address.pincode}
            </div>
          </div>
        </div>

        {/* Right Form (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E1E8DE] shadow-xs">
          <ContactForm defaultDistrict="dehradun" />
        </div>
      </section>
    </div>
  );
}
