import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { SolarCalculator } from '@/components/calculator/SolarCalculator';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  ZapIcon,
  ShieldCheckIcon,
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  BuildingIcon,
  HomeIcon,
  FactoryIcon,
  CalculatorIcon,
  ArrowUpRightIcon,
  CheckIcon,
  LeafIcon,
} from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'उत्तराखंड में रूफटॉप सोलर इंस्टॉलेशन और पीएम सूर्य घर सब्सिडी | UTTsolar',
  description:
    'उत्तराखंड की विश्वसनीय सोलर ईपीसी कंपनी। पीएम सूर्य घर योजना के तहत ₹85,800 तक की सरकारी सब्सिडी, यूपीसीएल (UPCL) नेट मीटरिंग और शून्य बिजली बिल। सभी 13 जिलों में सेवा उपलब्ध।',
  alternates: {
    canonical: `${siteConfig.url}/hi/`,
  },
};

export default function HindiHomePage() {
  const hindiDistricts = [
    { name: 'देहरादून', slug: 'dehradun', area: 'ऋषिकेश, विकासनगर, डोईवाला' },
    { name: 'हरिद्वार', slug: 'haridwar', area: 'रुड़की, भगवानपुर, सिडकुल' },
    { name: 'नैनीताल', slug: 'nainital', area: 'हल्द्वानी, रामनगर, लालकुआं' },
    { name: 'उधम सिंह नगर', slug: 'udham-singh-nagar', area: 'रुद्रपुर, काशीपुर, किच्छा' },
    { name: 'अल्मोड़ा', slug: 'almora', area: 'रानीखेत, द्वाराहाट, सोमेश्वर' },
    { name: 'पौड़ी गढ़वाल', slug: 'pauri-garhwal', area: 'कोटद्वार, श्रीनगर, पौड़ी' },
    { name: 'टिहरी गढ़वाल', slug: 'tehri-garhwal', area: 'चंबा, नई टिहरी, नरेंद्रनगर' },
    { name: 'पिथौरागढ़', slug: 'pithoragarh', area: 'धारचूला, डीडीहाट, बेरीनाग' },
    { name: 'उत्तरकाशी', slug: 'uttarkashi', area: 'बड़कोट, चिन्यालीसौड़, पुरोला' },
    { name: 'चमोली', slug: 'chamoli', area: 'गोपेश्वर, कर्णप्रयाग, जोशीमठ' },
    { name: 'बागेश्वर', slug: 'bageshwar', area: 'गरुड़, कपकोट, कांडा' },
    { name: 'रुद्रप्रयाग', slug: 'rudraprayag', area: 'अगस्त्यमुनि, ऊखीमठ, तिलवाड़ा' },
    { name: 'चंपावत', slug: 'champawat', area: 'टनकपुर, बनबसा, लोहाघाट' },
  ];

  return (
    <div className="flex flex-col bg-white text-[#172B1D]">
      {/* =========================================================================
          SECTION 1: HERO SECTION (HINDI SOLOR THEME)
         ========================================================================= */}
      <section className="relative overflow-hidden bg-[#122417] text-white">
        {/* Background Solar Engineering Photo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=2000&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#122417] via-[#122417]/85 to-[#122417]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#122417] via-transparent to-[#122417]/50 pointer-events-none" />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#2F8E04]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading & CTAs (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Hindi Small Pill Subtitle */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A3321] border border-[#2F8E04]/40 text-xs font-bold text-[#71B402] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#2F8E04] animate-pulse" />
                <span>उत्तराखंड का विश्वसनीय सोलर पार्टनर</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-heading font-extrabold tracking-tight text-white leading-[1.18]">
                स्वच्छ सोलर ऊर्जा से <br className="hidden sm:inline" />
                <span className="text-[#2F8E04]">बिजली बिल शून्य करें।</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                उत्तराखंड के सभी 13 जिलों में रूफटॉप सोलर प्लांट इंस्टॉलेशन। पीएम सूर्य घर योजना के तहत ₹85,800 तक की केंद्रीय सब्सिडी और यूपीसीएल (UPCL) नेट मीटरिंग की पूरी प्रक्रिया हम संभालते हैं।
              </p>

              {/* Quick Sizing Indicator - Solor Dark Card */}
              <div className="bg-[#1A3321]/90 border border-white/10 rounded-2xl p-4 max-w-xl mx-auto lg:mx-0 shadow-lg">
                <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
                  <div className="px-2">
                    <span className="text-[11px] font-bold text-slate-400 block">मासिक बिल</span>
                    <span className="text-base sm:text-lg font-heading font-bold text-white">₹3,000</span>
                  </div>
                  <div className="px-2">
                    <span className="text-[11px] font-bold text-[#2F8E04] block">सुझाया गया प्लांट</span>
                    <span className="text-base sm:text-lg font-heading font-bold text-[#2F8E04]">3 kW सिस्टम</span>
                  </div>
                  <div className="px-2">
                    <span className="text-[11px] font-bold text-green-300 block">मासिक बचत</span>
                    <span className="text-base sm:text-lg font-heading font-bold text-green-300">~₹3,000</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact/?intent=quote"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-extrabold text-white bg-[#2F8E04] hover:bg-[#012258] shadow-md hover:shadow-xl transition"
                >
                  <span>मुफ्त कोटेशन प्राप्त करें</span>
                  <span className="w-6 h-6 rounded-full bg-[#122417] text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </span>
                </Link>

                <Link
                  href="#calculator"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition"
                >
                  <CalculatorIcon className="w-4 h-4 text-[#2F8E04]" />
                  <span>बचत की गणना करें</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Quick Booking Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#E1E8DE] text-[#172B1D]">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#2F8E04] bg-[#F4F9EC]">
                    <LeafIcon className="w-3.5 h-3.5" />
                    30 सेकंड में बुकिंग
                  </span>
                  <span className="text-xs text-[#687B6C] font-semibold">100% मुफ्त सर्वे</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#122417] leading-tight">
                  मुफ्त रूफटॉप साइट सर्वे बुक करें
                </h3>
                <p className="text-xs text-[#687B6C] mt-1 mb-4">
                  हमारे प्रमाणित सोलर इंजीनियर आपकी छत का मुआयना करके सटीक सब्सिडी प्रस्ताव तैयार करेंगे।
                </p>
                <ContactForm defaultDistrict="dehradun" compact={true} className="p-0 shadow-none border-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: IMPACT METRICS (HINDI)
         ========================================================================= */}
      <section className="bg-white border-b border-[#E1E8DE] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#122417]">
              उत्कृष्ट सोलर इंजीनियरिंग और विश्वसनीय सेवा — उत्तराखंड को ऊर्जा आत्मनिर्भर बनाने की दिशा में
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-4">
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#122417]">10K+</div>
              <div className="text-xs font-bold text-[#2F8E04] uppercase tracking-wider mt-1">kW क्षमता</div>
              <div className="text-[11px] text-[#687B6C]">स्थापित व चालू</div>
            </div>
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#122417]">15K+</div>
              <div className="text-xs font-bold text-[#2F8E04] uppercase tracking-wider mt-1">संतुष्ट परिवार</div>
              <div className="text-[11px] text-[#687B6C]">शून्य मासिक बिजली बिल</div>
            </div>
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#122417]">340+</div>
              <div className="text-xs font-bold text-[#2F8E04] uppercase tracking-wider mt-1">व्यावसायिक प्रोजेक्ट</div>
              <div className="text-[11px] text-[#687B6C]">होटल, स्कूल व फैक्ट्रीज</div>
            </div>
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#122417]">100%</div>
              <div className="text-xs font-bold text-[#2F8E04] uppercase tracking-wider mt-1">UPCL स्वीकृति</div>
              <div className="text-[11px] text-[#687B6C]">नेट मीटरिंग प्रक्रिया</div>
            </div>
            <div className="text-center p-3 col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#122417]">25+</div>
              <div className="text-xs font-bold text-[#2F8E04] uppercase tracking-wider mt-1">वर्ष वारंटी</div>
              <div className="text-[11px] text-[#687B6C]">Tier-1 ALMM पैनल्स</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ABOUT GREEN ENERGY SOLAR (HINDI)
         ========================================================================= */}
      <section className="bg-[#F4F7F2] py-16 sm:py-24 border-b border-[#E1E8DE]" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Creative Double-Image Layout */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/about-solar-uttarakhand.jpg"
                  alt="उत्तराखंड में सोलर रूफटॉप"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-48 sm:w-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#2F8E04]">
                <img
                  src="/images/solar-engineer-inspection.jpg"
                  alt="सोलर पैनल निरीक्षण करते इंजीनियर"
                  className="w-full h-36 sm:h-44 object-cover"
                />
              </div>

              <div className="absolute top-6 -left-4 bg-[#122417] text-white p-3.5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2F8E04] flex items-center justify-center text-[#122417]">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-heading font-extrabold text-white leading-none">25 वर्ष</div>
                  <div className="text-[10px] text-[#71B402] uppercase font-bold mt-0.5">लीनियर परफॉर्मेंस वारंटी</div>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5 lg:pl-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5F4D3] text-xs font-extrabold text-[#467725] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#2F8E04]" />
                <span>हमारे बारे में</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#122417] leading-tight">
                उत्तराखंड के हर घर और संस्थान को स्वच्छ सोलर ऊर्जा से सशक्त बनाना
              </h2>

              <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed">
                UTTsolar उत्तराखंड की अग्रणी सोलर ईपीसी (EPC) कंपनी है। हम देहरादून, हरिद्वार, हल्द्वानी, नैनीताल और पर्वतीय जिलों के भौगोलिक मौसम के अनुकूल विशेष सोलर पावर प्लांट डिजाइन करते हैं।
              </p>

              {/* 4-Item Hindi Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#2F8E04] text-white flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold text-[#172B1D]">MNRE और UPCL स्वीकृत पैनल्स</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#2F8E04] text-white flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold text-[#172B1D]">₹85,800 तक केंद्रीय सब्सिडी</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#2F8E04] text-white flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold text-[#172B1D]">3 वर्ष में लागत वसूली (ROI)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#2F8E04] text-white flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold text-[#172B1D]">24/7 स्थानीय इंजीनियर सहायता</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about/"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#2F8E04] hover:bg-[#012258] transition shadow-sm"
                >
                  <span>कंपनी के बारे में और जानें</span>
                  <span className="w-5 h-5 rounded-full bg-[#122417] text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRightIcon className="w-3 h-3" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR SERVICES (HINDI)
         ========================================================================= */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E8DE]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5F4D3] text-xs font-extrabold text-[#467725] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#2F8E04]" />
              <span>हमारी सेवाएं</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#122417]">
              प्रत्येक छत के लिए अनुकूलित सोलर समाधान
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group rounded-2xl bg-white border border-[#E1E8DE] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                    alt="आवासीय सोलर"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#2F8E04] text-white hover:bg-[#012258] flex items-center justify-center shadow-lg">
                    <HomeIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold text-[#2F8E04] uppercase tracking-wider">1 kW से 10 kW</span>
                  <h3 className="text-xl font-heading font-bold text-[#122417] mt-1 mb-2">
                    आवासीय रूफटॉप सोलर
                  </h3>
                  <p className="text-xs text-[#687B6C] leading-relaxed mb-4">
                    घरों के लिए रूफटॉप सोलर सिस्टम। पीएम सूर्य घर योजना के तहत ₹85,800 तक की केंद्रीय सब्सिडी और यूपीसीएल नेट मीटरिंग।
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/services/residential-solar/"
                  className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-full text-xs font-bold text-[#122417] bg-[#F4F7F2] group-hover:bg-[#2F8E04] group-hover:text-white transition"
                >
                  <span>विस्तार से देखें</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl bg-white border border-[#E1E8DE] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80"
                    alt="व्यावसायिक सोलर"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#2F8E04] text-white hover:bg-[#012258] flex items-center justify-center shadow-lg">
                    <BuildingIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold text-[#2F8E04] uppercase tracking-wider">10 kW से 100 kW+</span>
                  <h3 className="text-xl font-heading font-bold text-[#122417] mt-1 mb-2">
                    व्यावसायिक सोलर
                  </h3>
                  <p className="text-xs text-[#687B6C] leading-relaxed mb-4">
                    होटल, रिसॉर्ट, स्कूल और अस्पतालों के लिए 3-फेज सोलर प्लांट। 40% टैक्स डेप्रिसिएशन लाभ के साथ।
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/services/commercial-solar/"
                  className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-full text-xs font-bold text-[#122417] bg-[#F4F7F2] group-hover:bg-[#2F8E04] group-hover:text-white transition"
                >
                  <span>विस्तार से देखें</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl bg-white border border-[#E1E8DE] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80"
                    alt="औद्योगिक सोलर"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#2F8E04] text-white hover:bg-[#012258] flex items-center justify-center shadow-lg">
                    <FactoryIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold text-[#2F8E04] uppercase tracking-wider">100 kW से मेगावाट</span>
                  <h3 className="text-xl font-heading font-bold text-[#122417] mt-1 mb-2">
                    औद्योगिक सोलर प्लांट्स
                  </h3>
                  <p className="text-xs text-[#687B6C] leading-relaxed mb-4">
                    सिडकुल हरिद्वार, रुद्रपुर, पंतनगर और काशीपुर की औद्योगिक इकाइयों के लिए मेगावाट स्तर के टर्नकी प्लांट।
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/services/industrial-solar/"
                  className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-full text-xs font-bold text-[#122417] bg-[#F4F7F2] group-hover:bg-[#2F8E04] group-hover:text-white transition"
                >
                  <span>विस्तार से देखें</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: 4-STEP PROCESS (HINDI)
         ========================================================================= */}
      <section className="bg-[#F4F7F2] py-16 sm:py-24 border-b border-[#E1E8DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5F4D3] text-xs font-extrabold text-[#467725] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#2F8E04]" />
              <span>प्रक्रिया</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#122417]">
              शून्य बिजली बिल तक की 4 आसान प्रक्रिया
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E1E8DE] shadow-xs text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#2F8E04] text-white flex items-center justify-center font-heading font-black text-xl mb-4 shadow-md">
                01
              </div>
              <h3 className="text-base font-heading font-bold text-[#122417] mb-2">मुफ्त साइट सर्वे</h3>
              <p className="text-xs text-[#687B6C] leading-relaxed">
                इंजीनियर आपकी छत पर आकर धूप व छाया का अध्ययन करते हैं और लोड की गणना करते हैं।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E1E8DE] shadow-xs text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#122417] text-[#2F8E04] flex items-center justify-center font-heading font-black text-xl mb-4 shadow-md border-2 border-[#2F8E04]">
                02
              </div>
              <h3 className="text-base font-heading font-bold text-[#122417] mb-2">सब्सिडी व पोर्टल आवेदन</h3>
              <p className="text-xs text-[#687B6C] leading-relaxed">
                पीएम सूर्य घर राष्ट्रीय पोर्टल और यूपीसीएल में आवेदन की सारी औपचारिकताएं हम पूरी करते हैं।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E1E8DE] shadow-xs text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#2F8E04] text-white flex items-center justify-center font-heading font-black text-xl mb-4 shadow-md">
                03
              </div>
              <h3 className="text-base font-heading font-bold text-[#122417] mb-2">1 दिन में इंस्टॉलेशन</h3>
              <p className="text-xs text-[#687B6C] leading-relaxed">
                प्रमाणित तकनीशियन गुणवत्तापूर्ण पैनल्स, इन्वर्टर और मजबूत अर्थिंग का सुरक्षित इंस्टॉलेशन करते हैं।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E1E8DE] shadow-xs text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#122417] text-[#2F8E04] flex items-center justify-center font-heading font-black text-xl mb-4 shadow-md border-2 border-[#2F8E04]">
                04
              </div>
              <h3 className="text-base font-heading font-bold text-[#122417] mb-2">नेट मीटर व बैंक सब्सिडी</h3>
              <p className="text-xs text-[#687B6C] leading-relaxed">
                यूपीसीएल का स्मार्ट बाई-डायरेक्शनल मीटर लगता है और सब्सिडी सीधे आपके बैंक खाते में जमा होती है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CALCULATOR (HINDI)
         ========================================================================= */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E1E8DE]" id="calculator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5F4D3] text-xs font-extrabold text-[#467725] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#2F8E04]" />
              <span>सोलर कैलकुलेटर</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#122417]">
              अपनी सोलर बचत व सरकारी सब्सिडी की गणना करें
            </h2>
          </div>

          <SolarCalculator initialDistrict="dehradun" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: 13 DISTRICTS IN HINDI
         ========================================================================= */}
      <section className="bg-[#F4F7F2] py-16 sm:py-24 border-b border-[#E1E8DE]" id="locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5F4D3] text-xs font-extrabold text-[#467725] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#2F8E04]" />
              <span>सेवा क्षेत्र</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#122417]">
              उत्तराखंड के सभी 13 जिलों में हमारी सेवाएं उपलब्ध
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {hindiDistricts.map((d) => (
              <Link
                key={d.slug}
                href={`/locations/${d.slug}/`}
                className="p-4 rounded-2xl bg-white hover:border-[#2F8E04] border border-[#E1E8DE] transition flex flex-col justify-between shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-sm text-[#122417] group-hover:text-[#2F8E04] transition">
                      {d.name}
                    </h3>
                    <MapPinIcon className="w-4 h-4 text-[#2F8E04]" />
                  </div>
                  <p className="text-[11px] text-[#687B6C] mt-1 line-clamp-1">
                    {d.area}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-[#2F8E04] mt-3 flex items-center gap-1">
                  <span>जानकारी देखें</span>
                  <ArrowUpRightIcon className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: BOTTOM CONTACT CTA (HINDI)
         ========================================================================= */}
      <section className="bg-[#122417] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A3321] border border-[#2F8E04]/40 text-xs font-bold text-[#71B402] uppercase tracking-wider">
            <ZapIcon className="w-3.5 h-3.5 text-[#2F8E04]" />
            <span>उत्तराखंड विशेष राज्य सब्सिडी चालू है</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white max-w-2xl mx-auto leading-tight">
            क्या आप भी अपनी छत पर सोलर लगवाना चाहते हैं?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            आज ही अपना मुफ्त साइट सर्वे बुक करें। हमारे स्थानीय सोलर इंजीनियर आपकी पात्रता जांचकर विस्तृत प्रस्ताव साझा करेंगे।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact/?intent=quote"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-extrabold text-white bg-[#2F8E04] hover:bg-[#012258] shadow-xl transition"
            >
              <span>मुफ्त सर्वे बुक करें</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </Link>

            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
            >
              <PhoneIcon className="w-4 h-4 text-[#2F8E04]" />
              <span>कॉल करें: {siteConfig.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=नमस्ते%2C%20मैं%20उत्तराखंड%20में%20सोलर%20लगवाने%20का%20इच्छुक%20हूँ`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#25D366]/90 hover:bg-[#25D366] transition"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>व्हाट्सएप करें</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
