"use client";

import React, { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/kalam-data";

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mencegah scroll body saat drawer mobile terbuka
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 h-[78px] bg-[#F7F6F2]/95 backdrop-blur-sm border-b transition-colors duration-200 ${
        isScrolled
          ? "border-[#E5E2D9] shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          : "border-[#E5E2D9]"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Sisi Kiri: Logo Kalam Abuya & Wordmark */}
        <a
          href="#beranda"
          className="flex items-center gap-3.5 group focus:outline-none"
          aria-label="Kalam Abuya — Kembali ke Beranda"
        >
          {/* Logo Monogram Minimalis */}
          <div className="w-10 h-10 border border-[#8D2929]/30 bg-white/60 flex items-center justify-center transition-colors duration-300 group-hover:border-[#8D2929]">
            <span className="font-serif text-[#8D2929] text-base font-semibold tracking-tighter">
              KA
            </span>
          </div>

          {/* Wordmark Editorial */}
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.12em] font-normal text-[#171717] group-hover:text-[#8D2929] transition-colors leading-tight">
              KALAM ABUYA
            </span>
            <span className="text-[10px] font-sans tracking-[0.18em] uppercase text-[#686868] mt-0.5 font-normal">
              Ruang Pemikiran &amp; Hikmah
            </span>
          </div>
        </a>

        {/* Tengah: Navigasi Desktop (5 menu editorial) */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-[13px] tracking-[0.05em] text-[#171717]/85 hover:text-[#8D2929] transition-colors relative py-1 font-medium group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8D2929] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Sisi Kanan: Ikon Pencarian & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3">
          {/* Tombol Pencarian */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 text-[#171717] hover:text-[#8D2929] hover:bg-[#8D2929]/5 border border-[#E5E2D9] transition-colors"
            aria-label="Buka pencarian"
          >
            <Search className="w-4 h-4 text-[#171717]" />
            <span className="hidden sm:inline font-sans text-xs tracking-wider uppercase text-[#686868]">
              Cari
            </span>
            <kbd className="hidden md:inline text-[10px] bg-black/5 text-[#686868] px-1.5 py-0.5 rounded font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#171717] hover:text-[#8D2929] hover:bg-[#8D2929]/5 border border-[#E5E2D9] transition-colors"
            aria-label="Buka menu navigasi mobile"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-[#F7F6F2] shadow-xl flex flex-col justify-between border-l border-[#E5E2D9] z-10">
            {/* Drawer Header */}
            <div>
              <div className="h-[78px] px-6 flex items-center justify-between border-b border-[#E5E2D9]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 border border-[#8D2929]/30 flex items-center justify-center">
                    <span className="font-serif text-[#8D2929] text-xs font-semibold">KA</span>
                  </div>
                  <span className="font-serif text-lg tracking-[0.1em] font-normal text-[#171717]">
                    KALAM ABUYA
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#171717] hover:text-[#8D2929] transition-colors"
                  aria-label="Tutup menu navigasi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="p-6 space-y-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3.5 text-sm font-sans tracking-[0.04em] text-[#171717] hover:text-[#8D2929] transition-colors border-b border-[#E5E2D9]/60 font-medium"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#8D2929] text-xs font-serif">→</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Footer Info */}
            <div className="p-6 border-t border-[#E5E2D9] text-center">
              <p className="font-serif italic text-xs text-[#686868] leading-relaxed">
                &ldquo;Ilmu yang menerangi pikiran, hikmah yang menuntun kehidupan.&rdquo;
              </p>
              <p className="text-[10px] font-sans tracking-widest uppercase text-[#8D2929] mt-2 font-medium">
                Ruang Pemikiran &amp; Hikmah
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
