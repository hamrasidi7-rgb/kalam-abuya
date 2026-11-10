"use client";

import React, { useState, useEffect } from "react";
import { Search, Menu, X, ArrowUpRight, Compass } from "lucide-react";
import { NAV_LINKS, SITE_METADATA } from "@/data/kalam-data";

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
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
    <>
      {/* Top Editorial Masthead Bar */}
      <div className="bg-forest-900 text-ivory-200 border-b border-forest-700/50 py-1.5 px-4 sm:px-8 text-[11px] tracking-editorial font-sans uppercase">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-gold font-medium">Dokumentasi Resmi</span>
            <span className="hidden sm:inline text-forest-400">•</span>
            <span className="hidden sm:inline text-ivory/80">Arsip Hikmah & Bimbingan Akhlak</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-ivory/70 hidden md:inline">Tahun 1446 H / 2026 M</span>
            <span className="text-forest-400 hidden md:inline">•</span>
            <a
              href="#kanal-resmi"
              className="text-gold-light hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              <span>Kanal Resmi</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Editorial Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-gold/30 py-3"
            : "bg-ivory border-b border-gold/20 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Wordmark */}
            <a
              href="#beranda"
              className="group flex flex-col focus:outline-none"
              aria-label="Kalam Abuya - Kembali ke Beranda"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold transition-transform duration-300 group-hover:scale-125" />
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] font-medium text-forest group-hover:text-forest-700 transition-colors">
                  KALAM ABUYA
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-sans tracking-wideEditorial uppercase text-gold-dark mt-0.5 ml-4">
                Dokumentasi Hikmah & Petuah
              </span>
            </a>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[13px] tracking-editorial uppercase text-charcoal hover:text-forest transition-colors relative py-1 group font-medium"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right: Actions (Search + CTA + Mobile Toggle) */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3 py-2 text-charcoal hover:text-forest hover:bg-forest/5 border border-forest/15 transition-all text-xs uppercase tracking-editorial"
                aria-label="Cari kalam atau artikel"
              >
                <Search className="w-4 h-4 text-forest" />
                <span className="hidden sm:inline font-sans font-medium">Cari</span>
                <kbd className="hidden md:inline text-[10px] bg-forest/10 text-forest px-1.5 py-0.5 rounded font-mono">
                  ⌘K
                </kbd>
              </button>

              {/* Desktop CTA */}
              <a
                href="#kalam-pilihan"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-forest text-ivory text-xs uppercase tracking-editorial font-medium hover:bg-forest-900 transition-all border border-forest shadow-sm"
              >
                Jelajahi Kalam
              </a>

              {/* Mobile Drawer Trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-forest hover:text-forest-900 hover:bg-forest/5 border border-forest/20 transition-colors"
                aria-label="Buka menu navigasi"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Clean Mobile Drawer (No duplicate elements) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-forest-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-ivory shadow-2xl flex flex-col justify-between border-l border-gold/40 z-10 animate-slideInRight">
            {/* Drawer Header */}
            <div>
              <div className="p-5 flex items-center justify-between border-b border-gold/25 bg-ivory-light">
                <div>
                  <span className="font-serif text-xl tracking-[0.15em] font-medium text-forest block">
                    KALAM ABUYA
                  </span>
                  <span className="text-[10px] tracking-wideEditorial uppercase text-gold-dark">
                    Menu & Navigasi
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-charcoal hover:text-forest border border-forest/20 transition-colors"
                  aria-label="Tutup menu navigasi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Shortcut in Drawer */}
              <div className="p-4 border-b border-gold/15 bg-white/40">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 bg-ivory border border-forest/20 text-charcoal text-xs uppercase tracking-editorial hover:border-gold transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-forest" />
                    <span>Cari Kalam & Artikel</span>
                  </span>
                  <span className="text-[10px] text-gold-dark font-sans font-medium">Buka</span>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 space-y-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-sm font-sans tracking-editorial uppercase text-charcoal hover:text-forest hover:bg-forest/5 transition-colors border-b border-gold/10 group"
                  >
                    <span>{link.label}</span>
                    <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="p-5 border-t border-gold/25 bg-ivory-light space-y-4">
              <a
                href="#kanal-resmi"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-forest text-ivory text-xs uppercase tracking-editorial font-medium hover:bg-forest-900 transition-colors"
              >
                Ikuti Kanal Resmi Abuya
              </a>
              <div className="text-center">
                <p className="text-[11px] text-charcoal-muted font-serif italic">
                  &ldquo;{SITE_METADATA.tagline}&rdquo;
                </p>
                <p className="text-[10px] text-gold-dark font-sans tracking-wide mt-1">
                  Arsip & Dokumentasi Keilmuan
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
