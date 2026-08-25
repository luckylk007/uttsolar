import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SolarCalculator } from '@/components/calculator/SolarCalculator';
import { ContactForm } from '@/components/forms/ContactForm';
import { LeafIcon } from '@/components/ui/Icons';

import { howToSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'UPCL Net Metering in Uttarakhand: Complete Process & Rules | UTTsolar',
  description:
    'Complete guide to UPCL net metering in Uttarakhand. Learn how bidirectional meters work, solar banking credits, load enhancement, and USRP portal application steps.',
  alternates: {
    canonical: `${siteConfig.url}/net-metering/`,
  },
};

export default function NetMeteringPage() {
  const netMeteringHowTo = howToSchema({
    name: 'How UPCL Net Metering Synchronization Works in Uttarakhand',
    description: 'The process of applying for and commissioning bidirectional UPCL net metering for rooftop solar power in Uttarakhand.',
    totalTime: 'P21D',
    steps: [
      {
        name: 'Sanctioned Load Verification',
        text: 'Verify your sanctioned load with UPCL to ensure your proposed solar plant capacity is within allowable limits.',
      },
      {
        name: 'Technical Feasibility NOC',
        text: 'Apply for grid connectivity NOC on the UPCL unified portal.',
      },
      {
        name: 'Smart Bidirectional Meter Installation',
        text: 'UPCL test lab tests and installs the bidirectional meter at your premises.',
      },
      {
        name: 'Commissioning & Solar Energy Banking',
        text: 'System is energized, and exported solar energy units begin offsetting your monthly electricity bills with annual banking.',
      },
    ],
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(netMeteringHowTo),
        }}
      />

      <Breadcrumbs items={[{ name: 'Net Metering', url: '/net-metering/' }]} />

      {/* Hero Header - Solor Style */}
      <section className="bg-[#122417] text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A3321] border border-[#2F8E04]/40 text-xs font-bold text-[#71B402] uppercase tracking-wider">
          <LeafIcon className="w-4 h-4 text-[#2F8E04]" />
          <span>UPCL Grid Synchronization</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
          UPCL Net Metering Assistance in <span className="text-[#2F8E04]">Uttarakhand</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Net metering is the key to zero electricity bills. We manage the entire application and inspection workflow with Uttarakhand Power Corporation Limited (UPCL).
        </p>
      </section>

      {/* How It Works Diagram */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1E8DE] shadow-xs space-y-8">
        <h2 className="text-2xl font-heading font-extrabold text-[#122417]">
          How UPCL Bidirectional Net Metering Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-6 rounded-2xl bg-[#F4F9EC] border border-[#C7E8A0] space-y-2">
            <span className="text-xs font-heading font-black uppercase text-[#467725] block">Daytime Solar Export</span>
            <p className="text-[#172B1D] leading-relaxed">
              When your solar panels generate more power than your home is using during sunny hours, the surplus electricity flows backward into the UPCL grid, spinning your net meter in reverse.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F4F7F2] border border-[#E1E8DE] space-y-2">
            <span className="text-xs font-heading font-black uppercase text-[#122417] block">Nighttime Grid Import</span>
            <p className="text-[#172B1D] leading-relaxed">
              At night or on dark rainy days, you draw power from UPCL seamlessly. The net meter tracks your imported units automatically.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F4F9EC] border border-[#C7E8A0] space-y-2">
            <span className="text-xs font-heading font-black uppercase text-[#467725] block">Net Monthly Settlement</span>
            <p className="text-[#172B1D] leading-relaxed">
              At the end of the month, your bill is computed strictly on the net difference (Import minus Export). Surplus units are banked and carried over to subsequent months!
            </p>
          </div>
        </div>
      </section>

      {/* Sizing Calculator */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading font-extrabold text-[#122417] text-center">
          Estimate Your Net Metering Return
        </h2>
        <SolarCalculator initialDistrict="dehradun" />
      </section>

      {/* Free Survey Form */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1E8DE] shadow-xs">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-[#122417] text-center mb-2">
            Book UPCL Net Metering Consultation
          </h2>
          <p className="text-xs text-[#687B6C] text-center mb-8">
            Our local engineer will check your sanctioned load and process the net meter paperwork.
          </p>
          <ContactForm defaultDistrict="dehradun" />
        </div>
      </section>
    </div>
  );
}
