"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, Menu, X, ArrowUpRight } from "lucide-react";

/**
 * Interface untuk item menu Risalah (Dropdown)
 */
export interface RisalahMenuItem {
  title: string;
  arabic: string;
  href: string;
  description: string;
}

/**
 * Data Sub-menu Risalah
 */
export const RISALAH_ITEMS: RisalahMenuItem[] = [
  {
    title: "Fikih & Fatwa",
    arabic: "الفقه والفتوى",
    href: "#tema-kehidupan",
    description: "Kaidah hukum amaliah, muamalah, & fatwa kontemporer",
  },
  {
    title: "Akhlak & Tasawuf",
    arabic: "الأخلاق والتصوف",
    href: "#kalam-terbaru",
    description: "Pembersihan jiwa, adab mulia, & tazkiyatun nafs",
  },
  {
    title: "Kajian Kitab",
    arabic: "دراسة الكتب",
    href: "#video-kalam",
    description: "Syarah turats ulama salaf & ta'lim bersanad",
  },
];

/**
 * Komponen Monogram KA dalam bingkai segi delapan Islami (Rub el Hizb)
 * berpadu lengkungan mihrab tipis dan aksen emas.
 */
export const KalamAbuyaLogo: React.FC<{ className?: string }> = ({
  className = "w-10 h-10 sm:w-11 sm:h-11",
}) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} shrink-0`}
      aria-hidden="true"
    >
      {/* Latar Belakang Lembut */}
      <rect x="2" y="2" width="44" height="44" rx="6" fill="#FAF8F5" />

      {/* Bingkai Segi Delapan Islami (Rub el Hizb) - Persegi 1 */}
      <rect
        x="9.5"
        y="9.5"
        width="29"
        height="29"
        rx="2"
        stroke="#C5A059"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300 group-hover:stroke-[#6B1724]"
      />

      {/* Bingkai Segi Delapan Islami (Rub el Hizb) - Persegi 2 (Rotasi 45 Derajat) */}
      <rect
        x="9.5"
        y="9.5"
        width="29"
        height="29"
        rx="2"
        transform="rotate(45 24 24)"
        stroke="#C5A059"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300 group-hover:stroke-[#6B1724]"
      />

      {/* Lingkaran Konsentris Geometri Dalam */}
      <circle
        cx="24"
        cy="24"
        r="13.5"
        stroke="#EADBCE"
        strokeWidth="0.85"
        strokeDasharray="2 2"
        fill="#6B1724"
        fillOpacity="0.03"
      />

      {/* Kontur Lengkungan Mihrab Halus */}
      <path
        d="M 16 34.5 V 24.5 C 16 20.2 24 17.5 24 13.5 C 24 17.5 32 20.2 32 24.5 V 34.5"
        stroke="#C5A059"
        strokeWidth="0.85"
        strokeLinecap="round"
        fill="none"
      />

      {/* Aksen Titik Emas pada Sumbu Mata Angin */}
      <circle cx="24" cy="5" r="1.2" fill="#C5A059" />
      <circle cx="24" cy="43" r="1.2" fill="#C5A059" />
      <circle cx="5" cy="24" r="1.2" fill="#C5A059" />
      <circle cx="43" cy="24" r="1.2" fill="#C5A059" />

      {/* Inisial Monogram "KA" di Tengah */}
      <text
        x="24"
        y="27.8"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#6B1724"
        fontFamily="'Cormorant Garamond', 'Cinzel', Georgia, serif"
        fontWeight="700"
        fontSize="13.5"
        letterSpacing="-0.03em"
        className="select-none font-serif"
      >
        KA
      </text>
    </svg>
  );
};

export interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileRisalahOpen, setMobileRisalahOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("beranda");

  const dropdownRef = useRef<HTMLLIElement>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Deteksi status scroll untuk backdrop-blur & bayangan tipis
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kunci scroll halaman saat mobile drawer aktif
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Tutup dropdown saat klik di luar area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Helper hover dropdown dengan debounce halus agar tidak flickering
  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 h-[76px] sm:h-[82px] bg-[#FAF8F5] border-b border-[#EADBCE] transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(107,23,36,0.04)]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* ========================================================= */}
        {/* SISI KIRI: Brand Logo & Tagline                           */}
        {/* ========================================================= */}
        <a
          href="#beranda"
          onClick={() => setActiveItem("beranda")}
          className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none select-none"
          aria-label="Kalam Abuya — Ruang Pemikiran & Hikmah"
        >
          {/* Monogram KA Rub el Hizb */}
          <div className="relative p-0.5 transition-transform duration-300 group-hover:scale-105">
            <KalamAbuyaLogo />
          </div>

          {/* Tipografi Editorial Brand */}
          <div className="flex flex-col text-left">
            <span className="font-serif text-[19px] sm:text-[22px] font-bold tracking-[0.16em] uppercase text-[#6B1724] group-hover:text-[#821D2D] transition-colors leading-tight">
              KALAM ABUYA
            </span>
            <span className="font-sans text-[9px] sm:text-[9.5px] uppercase tracking-[0.22em] text-[#7C746A] font-medium leading-none mt-1">
              RUANG PEMIKIRAN &amp; HIKMAH
            </span>
          </div>
        </a>

        {/* ========================================================= */}
        {/* SISI KANAN (DESKTOP): Menu Navigasi & Search Icon         */}
        {/* ========================================================= */}
        <div className="hidden md:flex items-center space-x-7 lg:space-x-9">
          <nav aria-label="Navigasi Utama">
            <ul className="flex items-center space-x-6 lg:space-x-8">
              {/* 1. Beranda */}
              <li>
                <a
                  href="#beranda"
                  onClick={() => setActiveItem("beranda")}
                  className={`group relative inline-flex items-center py-2 font-sans text-[13px] tracking-[0.06em] font-medium uppercase transition-colors ${
                    activeItem === "beranda"
                      ? "text-[#6B1724]"
                      : "text-[#2C2723] hover:text-[#6B1724]"
                  }`}
                >
                  <span>Beranda</span>
                  {/* Underline emas aktif / hover */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#C5A059] rounded-full transition-all duration-300 ${
                      activeItem === "beranda"
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>

              {/* 2. Risalah (Dropdown) */}
              <li
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  className={`group inline-flex items-center gap-1.5 py-2 font-sans text-[13px] tracking-[0.06em] font-medium uppercase transition-colors ${
                    dropdownOpen || activeItem === "risalah"
                      ? "text-[#6B1724]"
                      : "text-[#2C2723] hover:text-[#6B1724]"
                  }`}
                >
                  <span>Risalah</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#C5A059] transition-transform duration-300 ease-out ${
                      dropdownOpen
                        ? "rotate-180 text-[#6B1724]"
                        : "group-hover:rotate-180"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#C5A059] rounded-full transition-all duration-300 ${
                      activeItem === "risalah"
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>

                {/* Dropdown Menu Box */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-80 z-50 transition-all duration-200 ease-out ${
                    dropdownOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-[#FAF8F5] border border-[#EADBCE] rounded-sm shadow-[0_14px_35px_-8px_rgba(107,23,36,0.1),0_4px_16px_rgba(0,0,0,0.03)] overflow-hidden">
                    {/* Garis Aksen Emas & Burgundy di Pucuk Dropdown */}
                    <div className="h-[2.5px] bg-gradient-to-r from-[#6B1724] via-[#C5A059] to-[#6B1724]" />

                    <ul className="py-2 divide-y divide-[#EADBCE]/60">
                      {RISALAH_ITEMS.map((item) => (
                        <li key={item.title}>
                          <a
                            href={item.href}
                            onClick={() => {
                              setActiveItem("risalah");
                              setDropdownOpen(false);
                            }}
                            className="group/item flex flex-col px-4 py-3 hover:bg-[#6B1724]/[0.035] transition-colors relative"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-sans text-[13px] font-semibold text-[#2C2723] group-hover/item:text-[#6B1724] transition-colors tracking-wide flex items-center gap-1.5">
                                {item.title}
                                <ArrowUpRight className="w-3 h-3 text-[#C5A059] opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200" />
                              </span>
                              <span className="font-serif text-[11.5px] text-[#C5A059] group-hover/item:text-[#6B1724] opacity-85 group-hover/item:opacity-100 transition-colors">
                                {item.arabic}
                              </span>
                            </div>
                            <span className="font-sans text-[11px] text-[#7C746A] mt-1 line-clamp-1 leading-relaxed">
                              {item.description}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              {/* 3. Hikmah */}
              <li>
                <a
                  href="#hikmah"
                  onClick={() => setActiveItem("hikmah")}
                  className={`group relative inline-flex items-center py-2 font-sans text-[13px] tracking-[0.06em] font-medium uppercase transition-colors ${
                    activeItem === "hikmah"
                      ? "text-[#6B1724]"
                      : "text-[#2C2723] hover:text-[#6B1724]"
                  }`}
                >
                  <span>Hikmah</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#C5A059] rounded-full transition-all duration-300 ${
                      activeItem === "hikmah"
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>

              {/* 4. Profil Abuya */}
              <li>
                <a
                  href="#profil-abuya"
                  onClick={() => setActiveItem("profil-abuya")}
                  className={`group relative inline-flex items-center py-2 font-sans text-[13px] tracking-[0.06em] font-medium uppercase transition-colors ${
                    activeItem === "profil-abuya"
                      ? "text-[#6B1724]"
                      : "text-[#2C2723] hover:text-[#6B1724]"
                  }`}
                >
                  <span>Profil Abuya</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#C5A059] rounded-full transition-all duration-300 ${
                      activeItem === "profil-abuya"
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            </ul>
          </nav>

          {/* Garis Pemisah Vertikal Halus */}
          <div className="h-5 w-[1px] bg-[#EADBCE]" aria-hidden="true" />

          {/* Search Icon Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#EADBCE] bg-[#FAF8F5] hover:bg-[#6B1724]/[0.04] hover:border-[#C5A059] text-[#2C2723] hover:text-[#6B1724] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
            aria-label="Cari artikel, petuah, dan fatwa"
          >
            <Search className="w-4 h-4 text-[#6B1724] transition-transform duration-200 group-hover:scale-110" />
            <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#7C746A] group-hover:text-[#6B1724] transition-colors font-medium">
              Cari
            </span>
            <kbd className="hidden lg:inline text-[10px] font-mono text-[#7C746A] bg-white/70 border border-[#EADBCE] px-1.5 py-0.5 rounded shadow-[0_1px_1px_rgba(0,0,0,0.03)]">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* ========================================================= */}
        {/* SISI KANAN (MOBILE): Search & Hamburger Button            */}
        {/* ========================================================= */}
        <div className="flex md:hidden items-center gap-2">
          {/* Tombol Pencarian Mobile Cepat */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="p-2 rounded-sm border border-[#EADBCE] text-[#6B1724] hover:bg-[#6B1724]/[0.05] transition-colors"
            aria-label="Buka pencarian"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Tombol Hamburger Drawer */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-sm border border-[#EADBCE] text-[#2C2723] hover:text-[#6B1724] hover:bg-[#6B1724]/[0.05] transition-colors"
            aria-label="Buka menu navigasi"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE DRAWER / OVERLAY PANEL                             */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop Blur Gelap Transparan */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu Vertikal */}
          <aside
            aria-label="Menu Mobile Kalam Abuya"
            className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-[#FAF8F5] border-l border-[#EADBCE] shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300"
          >
            {/* Header Drawer */}
            <div>
              <div className="h-[76px] sm:h-[82px] px-5 flex items-center justify-between border-b border-[#EADBCE]">
                <div className="flex items-center gap-3">
                  <KalamAbuyaLogo className="w-9 h-9" />
                  <div className="flex flex-col text-left">
                    <span className="font-serif text-[17px] font-bold tracking-[0.14em] uppercase text-[#6B1724]">
                      KALAM ABUYA
                    </span>
                    <span className="font-sans text-[8.5px] uppercase tracking-[0.2em] text-[#7C746A]">
                      Ruang Pemikiran &amp; Hikmah
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#7C746A] hover:text-[#6B1724] transition-colors rounded-sm hover:bg-[#6B1724]/5"
                  aria-label="Tutup menu navigasi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Search Bar di Mobile Drawer */}
              <div className="p-5 pb-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch?.();
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 bg-white/80 border border-[#EADBCE] rounded-sm text-left group hover:border-[#C5A059] transition-colors"
                >
                  <span className="flex items-center gap-2.5 font-sans text-xs text-[#7C746A] group-hover:text-[#6B1724] transition-colors">
                    <Search className="w-4 h-4 text-[#6B1724]" />
                    <span>Cari fatwa, nasihat, kitab...</span>
                  </span>
                  <kbd className="text-[10px] font-mono text-[#7C746A] bg-[#FAF8F5] border border-[#EADBCE] px-1.5 py-0.5 rounded">
                    ⌘K
                  </kbd>
                </button>
              </div>

              {/* List Menu Vertikal */}
              <nav className="px-5 py-2">
                <ul className="divide-y divide-[#EADBCE]/70">
                  {/* Beranda */}
                  <li>
                    <a
                      href="#beranda"
                      onClick={() => {
                        setActiveItem("beranda");
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between py-3.5 font-sans text-sm tracking-[0.05em] font-medium transition-colors ${
                        activeItem === "beranda"
                          ? "text-[#6B1724] font-semibold"
                          : "text-[#2C2723] hover:text-[#6B1724]"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            activeItem === "beranda"
                              ? "bg-[#C5A059]"
                              : "bg-transparent"
                          }`}
                        />
                        Beranda
                      </span>
                      <span className="text-[#C5A059] text-xs font-serif">→</span>
                    </a>
                  </li>

                  {/* Risalah (Accordion Dropdown) */}
                  <li>
                    <div>
                      <button
                        type="button"
                        onClick={() => setMobileRisalahOpen((prev) => !prev)}
                        className="w-full flex items-center justify-between py-3.5 font-sans text-sm tracking-[0.05em] font-medium text-[#2C2723] hover:text-[#6B1724] transition-colors"
                        aria-expanded={mobileRisalahOpen}
                      >
                        <span className="flex items-center gap-2.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              activeItem === "risalah"
                                ? "bg-[#C5A059]"
                                : "bg-transparent"
                            }`}
                          />
                          Risalah
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#C5A059] transition-transform duration-300 ${
                            mobileRisalahOpen
                              ? "rotate-180 text-[#6B1724]"
                              : ""
                          }`}
                        />
                      </button>

                      {/* Submenu Accordion */}
                      {mobileRisalahOpen && (
                        <div className="pl-4 pr-1 pb-2 space-y-1 animate-in fade-in duration-200">
                          {RISALAH_ITEMS.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.href}
                              onClick={() => {
                                setActiveItem("risalah");
                                setMobileMenuOpen(false);
                              }}
                              className="flex flex-col p-2.5 rounded-sm bg-white/50 border border-[#EADBCE]/50 hover:bg-[#6B1724]/[0.04] transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-sans text-[13px] font-semibold text-[#2C2723] hover:text-[#6B1724]">
                                  {subItem.title}
                                </span>
                                <span className="font-serif text-[11px] text-[#C5A059]">
                                  {subItem.arabic}
                                </span>
                              </div>
                              <span className="font-sans text-[11px] text-[#7C746A] mt-0.5 line-clamp-1">
                                {subItem.description}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>

                  {/* Hikmah */}
                  <li>
                    <a
                      href="#hikmah"
                      onClick={() => {
                        setActiveItem("hikmah");
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between py-3.5 font-sans text-sm tracking-[0.05em] font-medium transition-colors ${
                        activeItem === "hikmah"
                          ? "text-[#6B1724] font-semibold"
                          : "text-[#2C2723] hover:text-[#6B1724]"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            activeItem === "hikmah"
                              ? "bg-[#C5A059]"
                              : "bg-transparent"
                          }`}
                        />
                        Hikmah
                      </span>
                      <span className="text-[#C5A059] text-xs font-serif">→</span>
                    </a>
                  </li>

                  {/* Profil Abuya */}
                  <li>
                    <a
                      href="#profil-abuya"
                      onClick={() => {
                        setActiveItem("profil-abuya");
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between py-3.5 font-sans text-sm tracking-[0.05em] font-medium transition-colors ${
                        activeItem === "profil-abuya"
                          ? "text-[#6B1724] font-semibold"
                          : "text-[#2C2723] hover:text-[#6B1724]"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            activeItem === "profil-abuya"
                              ? "bg-[#C5A059]"
                              : "bg-transparent"
                          }`}
                        />
                        Profil Abuya
                      </span>
                      <span className="text-[#C5A059] text-xs font-serif">→</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Footer Drawer: Kutipan Hikmah & Brand Identity */}
            <div className="p-5 border-t border-[#EADBCE] bg-[#FAF8F5]/80 text-center">
              {/* Garis Aksen Emas Mini */}
              <div className="flex items-center justify-center gap-2 mb-2.5">
                <span className="w-6 h-[1px] bg-[#C5A059]/40" />
                <span className="w-1.5 h-1.5 rotate-45 border border-[#C5A059] bg-[#C5A059]/20" />
                <span className="w-6 h-[1px] bg-[#C5A059]/40" />
              </div>
              <p className="font-serif italic text-xs text-[#7C746A] leading-relaxed">
                &ldquo;Ilmu yang menerangi pikiran, hikmah yang menuntun kehidupan.&rdquo;
              </p>
              <p className="text-[9px] font-sans tracking-[0.2em] uppercase text-[#6B1724] mt-2 font-semibold">
                Kalam Abuya &bull; Ruang Pemikiran &amp; Hikmah
              </p>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Header;
