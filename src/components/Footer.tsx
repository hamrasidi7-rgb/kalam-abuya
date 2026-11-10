"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { NAV_LINKS, CATEGORIES_DATA, SITE_METADATA } from "@/data/kalam-data";
import { KalamAbuyaLogo } from "./Header";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#211E1B] text-[#F8F5EF] border-t border-[#38332E]">
      {/* Top Editorial Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10 border-b border-[#38332E]/80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Identity Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <KalamAbuyaLogo className="w-8 h-8" />
              <div className="flex flex-col text-left">
                <span className="font-editorial text-xl sm:text-2xl font-bold tracking-[0.16em] text-[#F8F5EF]">
                  KALAM ABUYA
                </span>
                <span className="font-sans text-[8.5px] uppercase tracking-[0.22em] text-[#B99A62] font-semibold">
                  Ruang Pemikiran &amp; Hikmah
                </span>
              </div>
            </div>

            <p className="font-reading text-xs sm:text-sm text-[#F8F5EF]/70 leading-relaxed max-w-sm">
              {SITE_METADATA.editorialStatement}
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-[#2C2723] border border-[#B99A62]/30 text-[#D8C496] text-[11px] font-sans rounded-xs">
                {SITE_METADATA.currentIssue}
              </span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#B99A62] font-semibold">
              Navigasi Risalah
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#F8F5EF]/75 hover:text-[#B99A62] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Topic Pillars (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#B99A62] font-semibold">
              Tema Pokok
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans">
              {CATEGORIES_DATA.map((cat) => (
                <a
                  key={cat.id}
                  href="#risalah"
                  className="text-[#F8F5EF]/75 hover:text-[#B99A62] transition-colors truncate"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Colophon Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#F8F5EF]/55">
        <div>
          <span>&copy; {new Date().getFullYear()} Kalam Abuya</span>
          <span className="mx-2">&bull;</span>
          <span>Dikelola dengan khidmah &amp; amanah dakwah.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs text-[#D8C496] hover:text-[#F8F5EF] transition-colors uppercase tracking-wider"
          aria-label="Kembali ke atas halaman"
        >
          <span>Kembali ke Atas</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
