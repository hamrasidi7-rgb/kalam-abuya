"use client";

import React from "react";
import { ArrowUp, Heart, Sparkles } from "lucide-react";
import { NAV_LINKS, CATEGORIES_DATA, SITE_METADATA } from "@/data/kalam-data";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-950 text-ivory border-t border-forest-800">
      {/* Top Editorial Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-forest-800/80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Identity Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold" />
              <span className="font-serif text-2xl tracking-[0.16em] text-ivory font-medium">
                KALAM ABUYA
              </span>
            </div>
            
            <p className="font-sans text-xs tracking-wideEditorial uppercase text-gold">
              Dokumentasi & Arsip Hikmah Islam
            </p>

            <p className="font-sans text-xs sm:text-sm text-ivory/70 font-light leading-relaxed max-w-sm">
              {SITE_METADATA.editorialStatement}
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-forest-900 border border-gold/30 text-gold-light text-[11px] font-sans">
                {SITE_METADATA.currentIssue}
              </span>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-ultraWide text-gold font-medium">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-ivory/75 hover:text-gold transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories / Tema Kehidupan (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-ultraWide text-gold font-medium">
              Tema Kehidupan
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-sans">
              {CATEGORIES_DATA.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#tema-kehidupan"
                    className="text-ivory/75 hover:text-gold transition-colors block"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Khidmah & Back to top (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="font-sans text-xs uppercase tracking-ultraWide text-gold font-medium">
                Khidmah
              </h4>
              <p className="text-xs text-ivory/65 font-light leading-relaxed">
                Dipersembahkan untuk umat dengan niat tulus menyebarkan teladan kebaikan.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="w-full flex items-center justify-between px-3.5 py-2.5 border border-gold/40 hover:border-gold bg-forest-900/60 hover:bg-forest-900 text-xs font-sans text-gold-light transition-all"
                aria-label="Kembali ke atas halaman"
              >
                <span>Kembali ke Atas</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-ivory/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
        <p className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} KALAM ABUYA. Seluruh hak cipta dilindungi undang-undang dan adab syiar keilmuan.
        </p>
        <p className="text-gold-light/80 text-center sm:text-right text-[11px]">
          Dikelola oleh Tim Khidmah & Dokumentasi Kalam Abuya
        </p>
      </div>
    </footer>
  );
};
