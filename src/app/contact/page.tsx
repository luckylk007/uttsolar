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
      <section className="bg-[#17220F] text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F2E14] border border-[#46A304]/40 text-xs font-bold text-[#70C92F] uppercase tracking-wider">
          <LeafIcon className="w-4 h-4 text-[#46A304]" />
          <span>Helpline &amp; Local Engineering Centers</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
          Contact Uttarakhand <span className="text-[#46A304]">Solar Specialists</span>
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
          <div className="bg-white p-6 rounded-3xl border border-[#E2E7DE] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#F7F9F5] text-[#46A304] flex items-center justify-center font-bold">
              <PhoneIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-heading font-bold text-[#17220F]">Direct Phone Helplines</h2>
              <p className="text-xs text-[#66705F] mt-0.5">
                Speak directly with our technical solar consultants in Uttarakhand.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 text-base sm:text-lg font-heading font-extrabold text-[#46A304] hover:text-[#257203] transition"
              >
                <span>{siteConfig.phoneDisplay}</span>
                <span className="text-[11px] font-semibold text-[#66705F] bg-[#F7F9F5] px-2 py-0.5 rounded-full border border-[#E2E7DE]">Primary</span>
              </a>
              <a
                href={`tel:${siteConfig.phoneSecondary}`}
                className="inline-flex items-center gap-2 text-base sm:text-lg font-heading font-extrabold text-[#17220F] hover:text-[#46A304] transition"
              >
                <span>{siteConfig.phoneSecondaryDisplay}</span>
                <span className="text-[11px] font-semibold text-[#66705F] bg-[#F7F9F5] px-2 py-0.5 rounded-full border border-[#E2E7DE]">Helpline</span>
              </a>
            </div>
            <div className="text-[11px] text-[#66705F] flex items-center gap-1.5 pt-1">
              <ClockIcon className="w-3.5 h-3.5 text-[#66705F]" />
              <span>{siteConfig.businessHours}</span>
            </div>
          </div>

          {/* WhatsApp Direct Card */}
          <div className="bg-white p-6 rounded-3xl border border-[#E2E7DE] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold">
              <WhatsAppIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-heading font-bold text-[#17220F]">WhatsApp Instant Chat</h2>
              <p className="text-xs text-[#66705F] mt-0.5">
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
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-[#17220F] bg-[#F7F9F5] hover:bg-[#EBF5E1] border border-[#E2E7DE] transition"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>{siteConfig.phoneSecondaryDisplay}</span>
              </a>
            </div>
          </div>

          {/* Regional Hubs & Offices Card */}
          <div className="bg-white p-6 rounded-3xl border border-[#E2E7DE] shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#F7F9F5] text-[#46A304] flex items-center justify-center font-bold">
              <MapPinIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-heading font-bold text-[#17220F]">Registered Offices &amp; Centers</h2>
              <p className="text-xs text-[#66705F] mt-0.5">
                Visit our offices or request our engineering team to visit your site anywhere in Uttarakhand.
              </p>
            </div>
            <div className="space-y-3 pt-1 text-xs text-[#66705F] leading-relaxed">
              <div className="p-3.5 rounded-2xl bg-[#F7F9F5] border border-[#E2E7DE]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#46A304] block mb-0.5">
                  🏢 Head Office (Haldwani)
                </span>
                <p className="text-xs text-[#17220F] font-semibold">
                  {siteConfig.headOffice.fullAddress}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F7F9F5] border border-[#E2E7DE]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#92400E] block mb-0.5">
                  🏛️ Corporate Office (Lalkuwan)
                </span>
                <p className="text-xs text-[#17220F] font-semibold">
                  {siteConfig.corporateOffice.fullAddress}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-[#17220F] bg-[#FFDE21] hover:bg-[#46A304] hover:text-white transition flex items-center justify-center gap-2 shadow-xs"
              >
                <span>📍 View on Google Maps / Business Profile ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Form (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E7DE] shadow-xs">
          <ContactForm defaultDistrict="nainital" />
        </div>
      </section>
    </div>
  );
}
