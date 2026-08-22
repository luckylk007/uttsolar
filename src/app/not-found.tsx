import React from 'react';
import Link from 'next/link';
import { SunIcon, ArrowRightIcon, PhoneIcon } from '@/components/ui/Icons';
import { siteConfig } from '@/config/site';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 bg-amber-50 rounded-3xl flex items-center justify-center text-amber-600 mx-auto border border-amber-200 shadow-lg shadow-amber-500/10">
          <SunIcon className="w-10 h-10 animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-solar-600 bg-solar-50 px-3 py-1 rounded-full border border-solar-200">
            Error 404
          </span>
          <h1 className="text-3xl font-black text-slate-900 mt-3 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        {/* Helpful Navigation Links */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-left space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Popular Solar Resources:
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <Link href="/calculator/" className="p-2 rounded-lg bg-slate-50 hover:bg-solar-50 text-slate-700 hover:text-solar-700 transition">
              Solar Calculator →
            </Link>
            <Link href="/pm-surya-ghar/" className="p-2 rounded-lg bg-slate-50 hover:bg-solar-50 text-slate-700 hover:text-solar-700 transition">
              PM Surya Ghar →
            </Link>
            <Link href="/services/" className="p-2 rounded-lg bg-slate-50 hover:bg-solar-50 text-slate-700 hover:text-solar-700 transition">
              Solar Services →
            </Link>
            <Link href="/locations/" className="p-2 rounded-lg bg-slate-50 hover:bg-solar-50 text-slate-700 hover:text-solar-700 transition">
              Districts & Cities →
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-solar-600 hover:bg-solar-700 shadow-md transition"
          >
            <span>Back to Home</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition"
          >
            <PhoneIcon className="w-4 h-4 text-solar-600" />
            <span>Call Helpline</span>
          </a>
        </div>
      </div>
    </div>
  );
}
