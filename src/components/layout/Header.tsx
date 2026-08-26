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
          ? 'bg-white shadow-md border-b border-[#E2E7DE]'
          : 'bg-white/95 backdrop-blur-md border-b border-[#E2E7DE]/70'
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
          {/* Brand Logo - Horizontal Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <img
              src="/images/logo-horizontal.png"
              alt="UTTsolar - Uttarakhand Solar Solutions"
              className="header-logo h-10 sm:h-[5rem] sm:-my-[10px] w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links - Compact Collapsed 6-Item Hierarchy */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 flex-nowrap flex-shrink-0">
            {/* 1. Home */}
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-full text-[15px] font-medium leading-[1.2] whitespace-nowrap transition ${
                pathname === '/'
                  ? 'text-[#17220F] font-semibold bg-[#F7F9F5]'
                  : 'text-[#17220F] hover:text-[#46A304] hover:bg-[#F7F9F5]'
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
                    ? 'text-[#17220F] font-semibold bg-[#F7F9F5]'
                    : 'text-[#17220F] hover:text-[#46A304] hover:bg-[#F7F9F5]'
                }`}
              >
                <span>Services &amp; Solutions</span>
                <ChevronDownIcon className="w-3.5 h-3.5 text-[#66705F] flex-shrink-0" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-[#E2E7DE] rounded-2xl shadow-2xl p-2 z-50">
                  <div className="grid grid-cols-1 gap-1">
                    <Link
                      href="/services/residential-solar/"
                      className="p-2.5 rounded-xl hover:bg-[#F7F9F5] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <HomeIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#17220F] group-hover:text-[#46A304]">
                          Residential Solar
                        </div>
                        <div className="text-[11px] text-[#66705F]">1 kW to 10 kW with PM Surya Ghar subsidy</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/commercial-solar/"
                      className="p-2.5 rounded-xl hover:bg-[#F7F9F5] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BuildingIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#17220F] group-hover:text-[#46A304]">
                          Commercial Solar
                        </div>
                        <div className="text-[11px] text-[#66705F]">Hotels, schools, resorts &amp; hospitals</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/industrial-solar/"
                      className="p-2.5 rounded-xl hover:bg-[#F7F9F5] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FactoryIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#17220F] group-hover:text-[#46A304]">
                          Industrial Solar Plants
                        </div>
                        <div className="text-[11px] text-[#66705F]">SIDCUL Haridwar, Rudrapur &amp; Kashipur</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/on-grid-solar-system/"
                      className="p-2.5 rounded-xl hover:bg-[#F7F9F5] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ZapIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#17220F] group-hover:text-[#46A304]">
                          On-Grid Net Metering
                        </div>
                        <div className="text-[11px] text-[#66705F]">UPCL grid-synchronized solar</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/hybrid-solar-system/"
                      className="p-2.5 rounded-xl hover:bg-[#F7F9F5] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ShieldCheckIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#17220F] group-hover:text-[#46A304]">
                          Hybrid &amp; Off-Grid Systems
                        </div>
                        <div className="text-[11px] text-[#66705F]">Battery storage for hill areas</div>
                      </div>
                    </Link>

                    <div className="pt-2 border-t border-[#E2E7DE] px-2 flex justify-between items-center text-xs">
                      <Link href="/services/" className="font-bold text-[#46A304] hover:underline">
                        View All 17 Services →
                      </Link>
                      <Link href="/solar-solutions/" className="text-[#66705F] hover:text-[#17220F]">
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
                    ? 'text-[#17220F] font-semibold bg-[#F7F9F5]'
                    : 'text-[#17220F] hover:text-[#46A304] hover:bg-[#F7F9F5]'
                }`}
              >
                <span>Subsidy &amp; Calculator</span>
                <ChevronDownIcon className="w-3.5 h-3.5 text-[#66705F] flex-shrink-0" />
              </button>

              {subsidyDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-[#E2E7DE] rounded-2xl shadow-2xl p-2 z-50">
                  <div className="grid grid-cols-1 gap-1">
                    <Link
                      href="/calculator/"
                      className="p-2.5 rounded-xl hover:bg-[#F7F9F5] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CalculatorIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#17220F] group-hover:text-[#46A304]">
                          Solar Savings Calculator
                        </div>
                        <div className="text-[13px] text-[#66705F] leading-normal">Instant system size &amp; ROI estimator</div>
                      </div>
                    </Link>

                    <Link
                      href="/pm-surya-ghar/"
                      className="p-2.5 rounded-xl hover:bg-[#F7F9F5] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ZapIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#17220F] group-hover:text-[#46A304]">
                          PM Surya Ghar Yojana
                        </div>
                        <div className="text-[13px] text-[#66705F] leading-normal">Up to ₹85,800 Central Subsidy (CFA)</div>
                      </div>
                    </Link>

                    <Link
                      href="/solar-subsidy/"
                      className="p-2.5 rounded-xl hover:bg-[#F7F9F5] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ShieldCheckIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#17220F] group-hover:text-[#46A304]">
                          Uttarakhand Subsidy Rates
                        </div>
                        <div className="text-[13px] text-[#66705F] leading-normal">Special Category Himalayan allocation</div>
                      </div>
                    </Link>

                    <Link
                      href="/net-metering/"
                      className="p-2.5 rounded-xl hover:bg-[#F7F9F5] transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowUpRightIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#17220F] group-hover:text-[#46A304]">
                          UPCL Net Metering Guide
                        </div>
                        <div className="text-[13px] text-[#66705F] leading-normal">Bidirectional billing &amp; DISCOM rules</div>
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
                    ? 'text-[#17220F] font-semibold bg-[#F7F9F5]'
                    : 'text-[#17220F] hover:text-[#46A304] hover:bg-[#F7F9F5]'
                }`}
              >
                <span>13 Districts</span>
                <ChevronDownIcon className="w-3.5 h-3.5 text-[#66705F] flex-shrink-0" />
              </button>

              {locationsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-[#E2E7DE] rounded-2xl shadow-2xl p-2 z-50 max-h-[80vh] overflow-y-auto">
                  <div className="grid grid-cols-1 gap-0.5">
                    {districts.map((d) => (
                      <Link
                        key={d.slug}
                        href={`/locations/${d.slug}/`}
                        className="px-3 py-2 text-[14px] font-medium text-[#17220F] hover:text-[#46A304] hover:bg-[#F7F9F5] rounded-xl transition flex items-center justify-between"
                      >
                        <span>Solar in {d.name}</span>
                        <MapPinIcon className="w-3.5 h-3.5 text-[#46A304]" />
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-[#E2E7DE] px-3 mt-1">
                      <Link href="/locations/" className="text-[14px] font-semibold text-[#46A304] hover:underline block">
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
                    ? 'text-[#17220F] font-semibold bg-[#F7F9F5]'
                    : 'text-[#17220F] hover:text-[#46A304] hover:bg-[#F7F9F5]'
                }`}
              >
                <span>Company</span>
                <ChevronDownIcon className="w-3.5 h-3.5 text-[#66705F] flex-shrink-0" />
              </button>

              {companyDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-[#E2E7DE] rounded-2xl shadow-2xl p-2 z-50">
                  <div className="grid grid-cols-1 gap-1">
                    <Link
                      href="/about/"
                      className="p-2.5 rounded-xl hover:bg-[#F7F9F5] transition flex items-start gap-2.5 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <UsersIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#17220F] group-hover:text-[#46A304]">
                          About UTTsolar
                        </div>
                        <div className="text-[13px] text-[#66705F] leading-normal">Our EPC engineering team</div>
                      </div>
                    </Link>

                    <Link
                      href="/projects/"
                      className="p-2.5 rounded-xl hover:bg-[#F7F9F5] transition flex items-start gap-2.5 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BuildingIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#17220F] group-hover:text-[#46A304]">
                          Completed Projects
                        </div>
                        <div className="text-[13px] text-[#66705F] leading-normal">Case studies &amp; portfolio</div>
                      </div>
                    </Link>

                    <Link
                      href="/blog/"
                      className="p-2.5 rounded-xl hover:bg-[#F7F9F5] transition flex items-start gap-2.5 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <LeafIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#17220F] group-hover:text-[#46A304]">
                          Solar Blog &amp; Insights
                        </div>
                        <div className="text-[13px] text-[#66705F] leading-normal">Latest rooftop guides</div>
                      </div>
                    </Link>

                    <Link
                      href="/faq/"
                      className="p-2.5 rounded-xl hover:bg-[#F7F9F5] transition flex items-start gap-2.5 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ZapIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#17220F] group-hover:text-[#46A304]">
                          Solar FAQs
                        </div>
                        <div className="text-[13px] text-[#66705F] leading-normal">Frequently asked questions</div>
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
                  ? 'text-[#17220F] font-semibold bg-[#F7F9F5]'
                  : 'text-[#17220F] hover:text-[#46A304] hover:bg-[#F7F9F5]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTAs - Solor Style Pill Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0 flex-nowrap">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[15px] font-semibold leading-[1.2] text-[#17220F] bg-[#F7F9F5] hover:bg-[#EBF5E1] border border-[#E2E7DE] transition whitespace-nowrap"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-[#46A304]" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => openQuoteModal({ title: 'Get Instant Solar Quotation' })}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[15px] font-semibold leading-[1.2] text-white bg-[#46A304] hover:bg-[#FFDE21] hover:text-[#17220F] shadow-sm hover:shadow-md transition whitespace-nowrap active:scale-[0.98]"
            >
              <span>Get Free Quote</span>
              <span className="w-5 h-5 rounded-full bg-[#17220F] text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRightIcon className="w-3 h-3" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-2.5 rounded-full bg-[#F7F9F5] text-[#46A304] border border-[#D2ECC0]"
              aria-label="Call UTTsolar"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-[#F7F9F5] text-[#17220F] border border-[#E2E7DE]"
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
        <div className="lg:hidden bg-white border-b border-[#E2E7DE] shadow-2xl px-4 py-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#17220F] hover:bg-[#F7F9F5] hover:text-[#46A304]"
            >
              Home
            </Link>

            {/* Mobile Services & Solutions */}
            <div className="border-t border-b border-[#E2E7DE] py-3 my-1">
              <span className="px-3 text-xs font-bold uppercase tracking-wider text-[#66705F]">
                Services &amp; Solutions
              </span>
              <div className="grid grid-cols-1 gap-1 mt-2 pl-2">
                <Link href="/services/residential-solar/" className="px-3 py-1.5 text-xs text-[#17220F] hover:text-[#46A304]">
                  Residential Solar (1 kW – 10 kW)
                </Link>
                <Link href="/services/commercial-solar/" className="px-3 py-1.5 text-xs text-[#17220F] hover:text-[#46A304]">
                  Commercial Solar (Hotels &amp; Schools)
                </Link>
                <Link href="/services/industrial-solar/" className="px-3 py-1.5 text-xs text-[#17220F] hover:text-[#46A304]">
                  Industrial Solar Plants (SIDCUL)
                </Link>
                <Link href="/services/on-grid-solar-system/" className="px-3 py-1.5 text-xs text-[#17220F] hover:text-[#46A304]">
                  On-Grid Net Metering Systems
                </Link>
                <Link href="/services/hybrid-solar-system/" className="px-3 py-1.5 text-xs text-[#17220F] hover:text-[#46A304]">
                  Hybrid Battery Systems
                </Link>
                <Link href="/services/" className="px-3 py-1.5 text-xs font-bold text-[#46A304]">
                  View All 17 Services →
                </Link>
              </div>
            </div>

            {/* Mobile Subsidy & Calculator */}
            <div className="border-b border-[#E2E7DE] pb-3 mb-1">
              <span className="px-3 text-xs font-bold uppercase tracking-wider text-[#66705F]">
                Subsidy &amp; Calculator
              </span>
              <div className="grid grid-cols-1 gap-1 mt-2 pl-2">
                <Link href="/calculator/" className="px-3 py-1.5 text-xs text-[#17220F] hover:text-[#46A304] font-bold text-[#46A304]">
                  ⚡ Solar Savings Calculator
                </Link>
                <Link href="/pm-surya-ghar/" className="px-3 py-1.5 text-xs text-[#17220F] hover:text-[#46A304]">
                  PM Surya Ghar Scheme (Up to ₹85,800)
                </Link>
                <Link href="/solar-subsidy/" className="px-3 py-1.5 text-xs text-[#17220F] hover:text-[#46A304]">
                  Uttarakhand Subsidy Rates
                </Link>
                <Link href="/net-metering/" className="px-3 py-1.5 text-xs text-[#17220F] hover:text-[#46A304]">
                  UPCL Net Metering Process
                </Link>
              </div>
            </div>

            {/* Mobile Districts */}
            <Link
              href="/locations/"
              className="px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#17220F] hover:bg-[#F7F9F5] hover:text-[#46A304]"
            >
              13 Districts Coverage
            </Link>

            {/* Mobile Company */}
            <Link
              href="/about/"
              className="px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#17220F] hover:bg-[#F7F9F5] hover:text-[#46A304]"
            >
              About UTTsolar
            </Link>

            <Link
              href="/projects/"
              className="px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#17220F] hover:bg-[#F7F9F5] hover:text-[#46A304]"
            >
              Completed Projects
            </Link>

            <Link
              href="/blog/"
              className="px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#17220F] hover:bg-[#F7F9F5] hover:text-[#46A304]"
            >
              Solar Knowledge Hub
            </Link>

            <Link
              href="/contact/"
              className="px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#17220F] hover:bg-[#F7F9F5] hover:text-[#46A304]"
            >
              Contact Us
            </Link>

            <div className="pt-4 mt-2 border-t border-[#E2E7DE] flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal({ title: 'Get Instant Solar Quotation' });
                }}
                className="w-full text-center py-3.5 px-5 rounded-full font-bold text-sm text-white bg-[#46A304] hover:bg-[#FFDE21] hover:text-[#17220F] shadow-md transition"
              >
                Get Free Quote ↗
              </button>
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full text-center py-3 px-4 rounded-full font-semibold text-xs text-[#17220F] bg-[#F7F9F5] border border-[#E2E7DE]"
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
