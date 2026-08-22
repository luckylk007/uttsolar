'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { districts } from '@/data/locations/districts';
import { TopBar } from './TopBar';
import {
  PhoneIcon,
  ChevronDownIcon,
  MenuIcon,
  XIcon,
  ArrowUpRightIcon,
  LeafIcon,
  CalculatorIcon,
  ZapIcon,
  MapPinIcon,
  BuildingIcon,
  HomeIcon,
  FactoryIcon,
  ShieldCheckIcon,
  UsersIcon,
} from '@/components/ui/Icons';
import { useQuoteModal } from '@/context/QuoteModalContext';

export function Header() {
  const { openQuoteModal } = useQuoteModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [subsidyDropdownOpen, setSubsidyDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns on page route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setSubsidyDropdownOpen(false);
    setLocationsDropdownOpen(false);
    setCompanyDropdownOpen(false);
  }, [pathname]);

  const closeAllDropdowns = () => {
    setServicesDropdownOpen(false);
    setSubsidyDropdownOpen(false);
    setLocationsDropdownOpen(false);
    setCompanyDropdownOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md border-b border-[#E1E8DE]'
          : 'bg-white/95 backdrop-blur-md border-b border-[#E1E8DE]/70'
      }`}
    >
      {/* Top Utility Bar */}
      <TopBar />

      {/* Main Navigation Bar */}
      <div
        className={`w-full px-4 sm:px-6 lg:px-[30px] transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-3.5'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo - Solor Style */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0 whitespace-nowrap">
            <div className="w-10 h-10 rounded-full bg-[#70BA3F] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition">
              <LeafIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-extrabold tracking-tight text-[#122417] leading-none">
                UTT<span className="text-[#70BA3F]">solar</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#687B6C] mt-0.5">
                Uttarakhand Solar Partner
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Compact Collapsed 6-Item Hierarchy */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 flex-nowrap flex-shrink-0">
            {/* 1. Home */}
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-full text-[15px] font-medium leading-[1.2] whitespace-nowrap transition ${
                pathname === '/'
                  ? 'text-[#122417] font-semibold bg-[#F0F8EC]'
                  : 'text-[#172B1D] hover:text-[#70BA3F] hover:bg-[#F4F7F2]'
              }`}
            >
              Home
            </Link>

            {/* 2. Services & Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeAllDropdowns();
                setServicesDropdownOpen(true);
              }}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[15px] font-medium leading-[1.2] whitespace-nowrap transition ${
                  pathname.startsWith('/services') || pathname.startsWith('/solar-solutions')
                    ? 'text-[#122417] font-semibold bg-[#F0F8EC]'
                    : 'text-[#172B1D] hover:text-[#70BA3F] hover:bg-[#F4F7F2]'
                }`}
              >
                <span>Services &amp; Solutions</span>
                <ChevronDownIcon className="w-3.5 h-3.5 text-[#687B6C] flex-shrink-0" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-[#E1E8DE] rounded-2xl shadow-2xl p-2 z-50">
                  <div className="grid grid-cols-1 gap-1">
                    <Link
                      href="/services/residential-solar/"
                      className="p-2.5 rounded-xl hover:bg-[#F0F8EC] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#E6F4DE] text-[#70BA3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <HomeIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#122417] group-hover:text-[#70BA3F]">
                          Residential Solar
                        </div>
                        <div className="text-[11px] text-[#687B6C]">1 kW to 10 kW with PM Surya Ghar subsidy</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/commercial-solar/"
                      className="p-2.5 rounded-xl hover:bg-[#F0F8EC] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#E6F4DE] text-[#70BA3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BuildingIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#122417] group-hover:text-[#70BA3F]">
                          Commercial Solar
                        </div>
                        <div className="text-[11px] text-[#687B6C]">Hotels, schools, resorts &amp; hospitals</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/industrial-solar/"
                      className="p-2.5 rounded-xl hover:bg-[#F0F8EC] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#E6F4DE] text-[#70BA3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FactoryIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#122417] group-hover:text-[#70BA3F]">
                          Industrial Solar Plants
                        </div>
                        <div className="text-[11px] text-[#687B6C]">SIDCUL Haridwar, Rudrapur &amp; Kashipur</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/on-grid-solar-system/"
                      className="p-2.5 rounded-xl hover:bg-[#F0F8EC] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#E6F4DE] text-[#70BA3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ZapIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#122417] group-hover:text-[#70BA3F]">
                          On-Grid Net Metering
                        </div>
                        <div className="text-[11px] text-[#687B6C]">UPCL grid-synchronized solar</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/hybrid-solar-system/"
                      className="p-2.5 rounded-xl hover:bg-[#F0F8EC] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#E6F4DE] text-[#70BA3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ShieldCheckIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#122417] group-hover:text-[#70BA3F]">
                          Hybrid &amp; Off-Grid Systems
                        </div>
                        <div className="text-[11px] text-[#687B6C]">Battery storage for hill areas</div>
                      </div>
                    </Link>

                    <div className="pt-2 border-t border-[#E1E8DE] px-2 flex justify-between items-center text-xs">
                      <Link href="/services/" className="font-bold text-[#70BA3F] hover:underline">
                        View All 17 Services →
                      </Link>
                      <Link href="/solar-solutions/" className="text-[#687B6C] hover:text-[#122417]">
                        Solutions Overview
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>            {/* 3. Subsidy & Calculator Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeAllDropdowns();
                setSubsidyDropdownOpen(true);
              }}
              onMouseLeave={() => setSubsidyDropdownOpen(false)}
            >
              <button
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[15px] font-medium leading-[1.2] whitespace-nowrap transition ${
                  pathname.startsWith('/calculator') || pathname.startsWith('/pm-surya-ghar') || pathname.startsWith('/solar-subsidy') || pathname.startsWith('/net-metering')
                    ? 'text-[#122417] font-semibold bg-[#F0F8EC]'
                    : 'text-[#172B1D] hover:text-[#70BA3F] hover:bg-[#F4F7F2]'
                }`}
              >
                <span>Subsidy &amp; Calculator</span>
                <ChevronDownIcon className="w-3.5 h-3.5 text-[#687B6C] flex-shrink-0" />
              </button>

              {subsidyDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-[#E1E8DE] rounded-2xl shadow-2xl p-2 z-50">
                  <div className="grid grid-cols-1 gap-1">
                    <Link
                      href="/calculator/"
                      className="p-2.5 rounded-xl hover:bg-[#F0F8EC] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#E6F4DE] text-[#70BA3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CalculatorIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#122417] group-hover:text-[#70BA3F]">
                          Solar Savings Calculator
                        </div>
                        <div className="text-[13px] text-[#687B6C] leading-normal">Instant system size &amp; ROI estimator</div>
                      </div>
                    </Link>

                    <Link
                      href="/pm-surya-ghar/"
                      className="p-2.5 rounded-xl hover:bg-[#F0F8EC] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#E6F4DE] text-[#70BA3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ZapIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#122417] group-hover:text-[#70BA3F]">
                          PM Surya Ghar Yojana
                        </div>
                        <div className="text-[13px] text-[#687B6C] leading-normal">Up to ₹85,800 Central Subsidy (CFA)</div>
                      </div>
                    </Link>

                    <Link
                      href="/solar-subsidy/"
                      className="p-2.5 rounded-xl hover:bg-[#F0F8EC] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#E6F4DE] text-[#70BA3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ShieldCheckIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#122417] group-hover:text-[#70BA3F]">
                          Uttarakhand Subsidy Rates
                        </div>
                        <div className="text-[13px] text-[#687B6C] leading-normal">Special Category Himalayan allocation</div>
                      </div>
                    </Link>

                    <Link
                      href="/net-metering/"
                      className="p-2.5 rounded-xl hover:bg-[#F0F8EC] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#E6F4DE] text-[#70BA3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowUpRightIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#122417] group-hover:text-[#70BA3F]">
                          UPCL Net Metering Guide
                        </div>
                        <div className="text-[13px] text-[#687B6C] leading-normal">Bidirectional billing &amp; DISCOM rules</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. 13 Districts Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeAllDropdowns();
                setLocationsDropdownOpen(true);
              }}
              onMouseLeave={() => setLocationsDropdownOpen(false)}
            >
              <button
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[15px] font-medium leading-[1.2] whitespace-nowrap transition ${
                  pathname.startsWith('/locations')
                    ? 'text-[#122417] font-semibold bg-[#F0F8EC]'
                    : 'text-[#172B1D] hover:text-[#70BA3F] hover:bg-[#F4F7F2]'
                }`}
              >
                <span>13 Districts</span>
                <ChevronDownIcon className="w-3.5 h-3.5 text-[#687B6C] flex-shrink-0" />
              </button>

              {locationsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-[#E1E8DE] rounded-2xl shadow-2xl p-2 z-50 max-h-[80vh] overflow-y-auto">
                  <div className="grid grid-cols-1 gap-0.5">
                    {districts.map((d) => (
                      <Link
                        key={d.slug}
                        href={`/locations/${d.slug}/`}
                        className="px-3 py-2 text-[14px] font-medium text-[#172B1D] hover:text-[#70BA3F] hover:bg-[#F0F8EC] rounded-xl transition flex items-center justify-between"
                      >
                        <span>Solar in {d.name}</span>
                        <MapPinIcon className="w-3.5 h-3.5 text-[#70BA3F]" />
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-[#E1E8DE] px-3 mt-1">
                      <Link href="/locations/" className="text-[14px] font-semibold text-[#70BA3F] hover:underline block">
                        All Uttarakhand Locations →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Company Dropdown (About, Projects, Blog, FAQ) */}
            <div
              className="relative"
              onMouseEnter={() => {
                closeAllDropdowns();
                setCompanyDropdownOpen(true);
              }}
              onMouseLeave={() => setCompanyDropdownOpen(false)}
            >
              <button
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[15px] font-medium leading-[1.2] whitespace-nowrap transition ${
                  pathname.startsWith('/about') || pathname.startsWith('/projects') || pathname.startsWith('/blog') || pathname.startsWith('/faq')
                    ? 'text-[#122417] font-semibold bg-[#F0F8EC]'
                    : 'text-[#172B1D] hover:text-[#70BA3F] hover:bg-[#F4F7F2]'
                }`}
              >
                <span>Company</span>
                <ChevronDownIcon className="w-3.5 h-3.5 text-[#687B6C] flex-shrink-0" />
              </button>

              {companyDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-[#E1E8DE] rounded-2xl shadow-2xl p-2 z-50">
                  <div className="grid grid-cols-1 gap-1">
                    <Link
                      href="/about/"
                      className="p-2.5 rounded-xl hover:bg-[#F0F8EC] transition flex items-start gap-2.5 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#E6F4DE] text-[#70BA3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <UsersIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#122417] group-hover:text-[#70BA3F]">
                          About UTTsolar
                        </div>
                        <div className="text-[13px] text-[#687B6C] leading-normal">Our EPC engineering team</div>
                      </div>
                    </Link>

                    <Link
                      href="/projects/"
                      className="p-2.5 rounded-xl hover:bg-[#F0F8EC] transition flex items-start gap-2.5 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#E6F4DE] text-[#70BA3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BuildingIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#122417] group-hover:text-[#70BA3F]">
                          Completed Projects
                        </div>
                        <div className="text-[13px] text-[#687B6C] leading-normal">Case studies &amp; portfolio</div>
                      </div>
                    </Link>

                    <Link
                      href="/blog/"
                      className="p-2.5 rounded-xl hover:bg-[#F0F8EC] transition flex items-start gap-2.5 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#E6F4DE] text-[#70BA3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <LeafIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#122417] group-hover:text-[#70BA3F]">
                          Solar Blog &amp; Insights
                        </div>
                        <div className="text-[13px] text-[#687B6C] leading-normal">Latest rooftop guides</div>
                      </div>
                    </Link>

                    <Link
                      href="/faq/"
                      className="p-2.5 rounded-xl hover:bg-[#F0F8EC] transition flex items-start gap-2.5 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#E6F4DE] text-[#70BA3F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ZapIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#122417] group-hover:text-[#70BA3F]">
                          Solar FAQs
                        </div>
                        <div className="text-[13px] text-[#687B6C] leading-normal">Frequently asked questions</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 6. Contact */}
            <Link
              href="/contact/"
              className={`px-3.5 py-2 rounded-full text-[15px] font-medium leading-[1.2] whitespace-nowrap transition ${
                pathname.startsWith('/contact')
                  ? 'text-[#122417] font-semibold bg-[#F0F8EC]'
                  : 'text-[#172B1D] hover:text-[#70BA3F] hover:bg-[#F4F7F2]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTAs - Solor Style Pill Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0 flex-nowrap">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[15px] font-semibold leading-[1.2] text-[#122417] bg-[#F4F7F2] hover:bg-[#E6F4DE] border border-[#E1E8DE] transition whitespace-nowrap"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-[#70BA3F]" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => openQuoteModal({ title: 'Get Instant Solar Quotation' })}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[15px] font-semibold leading-[1.2] text-[#122417] bg-[#70BA3F] hover:bg-[#61A334] shadow-sm hover:shadow-md transition whitespace-nowrap active:scale-[0.98]"
            >
              <span>Get Free Quote</span>
              <span className="w-5 h-5 rounded-full bg-[#122417] text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRightIcon className="w-3 h-3" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-2.5 rounded-full bg-[#F0F8EC] text-[#70BA3F] border border-[#CDE9BE]"
              aria-label="Call UTTsolar"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-[#F4F7F2] text-[#122417] border border-[#E1E8DE]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E1E8DE] shadow-2xl px-4 py-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#172B1D] hover:bg-[#F0F8EC] hover:text-[#70BA3F]"
            >
              Home
            </Link>

            {/* Mobile Services & Solutions */}
            <div className="border-t border-b border-[#E1E8DE] py-3 my-1">
              <span className="px-3 text-xs font-bold uppercase tracking-wider text-[#687B6C]">
                Services &amp; Solutions
              </span>
              <div className="grid grid-cols-1 gap-1 mt-2 pl-2">
                <Link href="/services/residential-solar/" className="px-3 py-1.5 text-xs text-[#172B1D] hover:text-[#70BA3F]">
                  Residential Solar (1 kW – 10 kW)
                </Link>
                <Link href="/services/commercial-solar/" className="px-3 py-1.5 text-xs text-[#172B1D] hover:text-[#70BA3F]">
                  Commercial Solar (Hotels &amp; Schools)
                </Link>
                <Link href="/services/industrial-solar/" className="px-3 py-1.5 text-xs text-[#172B1D] hover:text-[#70BA3F]">
                  Industrial Solar Plants (SIDCUL)
                </Link>
                <Link href="/services/on-grid-solar-system/" className="px-3 py-1.5 text-xs text-[#172B1D] hover:text-[#70BA3F]">
                  On-Grid Net Metering Systems
                </Link>
                <Link href="/services/hybrid-solar-system/" className="px-3 py-1.5 text-xs text-[#172B1D] hover:text-[#70BA3F]">
                  Hybrid Battery Systems
                </Link>
                <Link href="/services/" className="px-3 py-1.5 text-xs font-bold text-[#70BA3F]">
                  View All 17 Services →
                </Link>
              </div>
            </div>

            {/* Mobile Subsidy & Calculator */}
            <div className="border-b border-[#E1E8DE] pb-3 mb-1">
              <span className="px-3 text-xs font-bold uppercase tracking-wider text-[#687B6C]">
                Subsidy &amp; Calculator
              </span>
              <div className="grid grid-cols-1 gap-1 mt-2 pl-2">
                <Link href="/calculator/" className="px-3 py-1.5 text-xs text-[#172B1D] hover:text-[#70BA3F] font-bold text-[#70BA3F]">
                  ⚡ Solar Savings Calculator
                </Link>
                <Link href="/pm-surya-ghar/" className="px-3 py-1.5 text-xs text-[#172B1D] hover:text-[#70BA3F]">
                  PM Surya Ghar Scheme (Up to ₹85,800)
                </Link>
                <Link href="/solar-subsidy/" className="px-3 py-1.5 text-xs text-[#172B1D] hover:text-[#70BA3F]">
                  Uttarakhand Subsidy Rates
                </Link>
                <Link href="/net-metering/" className="px-3 py-1.5 text-xs text-[#172B1D] hover:text-[#70BA3F]">
                  UPCL Net Metering Process
                </Link>
              </div>
            </div>

            {/* Mobile Districts */}
            <Link
              href="/locations/"
              className="px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#172B1D] hover:bg-[#F0F8EC] hover:text-[#70BA3F]"
            >
              13 Districts Coverage
            </Link>

            {/* Mobile Company */}
            <Link
              href="/about/"
              className="px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#172B1D] hover:bg-[#F0F8EC] hover:text-[#70BA3F]"
            >
              About UTTsolar
            </Link>

            <Link
              href="/projects/"
              className="px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#172B1D] hover:bg-[#F0F8EC] hover:text-[#70BA3F]"
            >
              Completed Projects
            </Link>

            <Link
              href="/blog/"
              className="px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#172B1D] hover:bg-[#F0F8EC] hover:text-[#70BA3F]"
            >
              Solar Knowledge Hub
            </Link>

            <Link
              href="/contact/"
              className="px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#172B1D] hover:bg-[#F0F8EC] hover:text-[#70BA3F]"
            >
              Contact Us
            </Link>

            <div className="pt-4 mt-2 border-t border-[#E1E8DE] flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal({ title: 'Get Instant Solar Quotation' });
                }}
                className="w-full text-center py-3.5 px-5 rounded-full font-bold text-sm text-[#122417] bg-[#70BA3F] hover:bg-[#61A334] shadow-md transition"
              >
                Get Free Quote ↗
              </button>
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full text-center py-3 px-4 rounded-full font-semibold text-xs text-[#122417] bg-[#F4F7F2] border border-[#E1E8DE]"
              >
                Call Helpline: {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
