"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Interface data kanal media sosial (dapat dipasok langsung dari backend/API/database)
 */
export interface SocialMediaChannel {
  id?: string;
  platform: "youtube" | "instagram" | "tiktok" | "facebook" | string;
  name: string;
  handle: string;
  url: string;
  cta: string;
  is_active: boolean;
  description?: string;
  followers?: string;
}

/**
 * Data default kanal media sosial resmi Kalam Abuya
 */
export const DEFAULT_MEDSOS_CHANNELS: SocialMediaChannel[] = [
  {
    id: "yt",
    platform: "youtube",
    name: "YouTube",
    handle: "@kalamabuya",
    url: "https://youtube.com/@kalamabuya",
    cta: "Tonton Kajian",
    is_active: true,
    description: "Kajian Rutin & Siaran Majlis",
    followers: "Kajian Lengkap",
  },
  {
    id: "ig",
    platform: "instagram",
    name: "Instagram",
    handle: "@kalamabuya",
    url: "https://instagram.com/kalamabuya",
    cta: "Ikuti Nasihat",
    is_active: true,
    description: "Petuah Harian & Infografis",
    followers: "Kutipan Visual",
  },
  {
    id: "tt",
    platform: "tiktok",
    name: "TikTok",
    handle: "@kalamabuya",
    url: "https://tiktok.com/@kalamabuya",
    cta: "Simak Petuah",
    is_active: true,
    description: "Kutipan Singkat & Hikmah",
    followers: "Video Mutiara",
  },
  {
    id: "fb",
    platform: "facebook",
    name: "Facebook",
    handle: "@kalamabuya",
    url: "https://facebook.com/kalamabuya",
    cta: "Kunjungi Laman",
    is_active: true,
    description: "Arsip Risalah & Artikel",
    followers: "Komunitas Dakwah",
  },
];

export interface KanalMedsosProps {
  channels?: SocialMediaChannel[];
  title?: string;
  subtitle?: string;
  kicker?: string;
  className?: string;
}

/**
 * Helper untuk merender ikon SVG platform media sosial secara bersih dan scalable
 */
const renderPlatformIcon = (platform: string) => {
  const p = platform.toLowerCase();

  switch (p) {
    case "youtube":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.42a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.33 6.33 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.77 1.52V6.78a4.85 4.85 0 0 1-1-.09z" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m10 15 5-3-5-3v6Z" />
        </svg>
      );
  }
};

export const KanalMedsos: React.FC<KanalMedsosProps> = ({
  channels = DEFAULT_MEDSOS_CHANNELS,
  title = "Kanal Medsos Kalam Abuya",
  subtitle = "Ikuti siaran dakwah, petuah harian, dan mutiara hikmah Abuya di berbagai platform resmi",
  kicker = "Silaturahmi & Dakwah Digital",
  className = "",
}) => {
  // Filter ketat sesuai instruksi: hanya render card yang URL-nya terisi & is_active bernilai true
  const activeChannels = channels.filter(
    (ch) => ch.is_active && Boolean(ch.url && ch.url.trim().length > 0)
  );

  // Jika tidak ada data yang aktif, tidak merender section kosong
  if (activeChannels.length === 0) {
    return null;
  }

  return (
    <section
      id="kanal-medsos"
      aria-label="Kanal Media Sosial Resmi Kalam Abuya"
      className={`py-10 sm:py-14 md:py-16 bg-[#FAF8F5] border-b border-[#EADBCE] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-semibold block mb-1">
            {kicker}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#6B1724] tracking-wide leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="font-sans text-xs sm:text-sm text-[#7C746A] mt-2 leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Garis Aksen Emas Halus */}
          <div className="flex items-center justify-center gap-2 mt-3.5" aria-hidden="true">
            <span className="w-8 h-[1px] bg-[#EADBCE]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#C5A059] bg-[#C5A059]/30" />
            <span className="w-8 h-[1px] bg-[#EADBCE]" />
          </div>
        </div>

        {/* Grid Card Responsif (2 Kolom di Mobile, 4 Kolom di Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {activeChannels.map((channel) => (
            <a
              key={channel.id || channel.platform}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between bg-white border border-[#EADBCE] rounded-sm p-4 sm:p-5 hover:border-[#6B1724] hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative overflow-hidden"
              aria-label={`Buka akun ${channel.name} Kalam Abuya (${channel.handle})`}
            >
              {/* Garis Aksen Tipis Saat Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6B1724] via-[#C5A059] to-[#6B1724] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Baris Atas: Ikon Platform & Label */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#FAF8F5] border border-[#EADBCE] flex items-center justify-center text-[#6B1724] group-hover:bg-[#6B1724] group-hover:text-white group-hover:border-[#6B1724] transition-all duration-300">
                    {renderPlatformIcon(channel.platform)}
                  </div>

                  {channel.followers && (
                    <span className="font-sans text-[9px] sm:text-[10px] tracking-wider uppercase text-[#C5A059] font-medium hidden sm:inline-block">
                      {channel.followers}
                    </span>
                  )}
                </div>

                {/* Judul Platform & Handle */}
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#2C2723] group-hover:text-[#6B1724] transition-colors leading-tight">
                  {channel.name}
                </h3>
                <p className="font-sans text-xs text-[#7C746A] mt-0.5 tracking-tight group-hover:text-[#2C2723] transition-colors">
                  {channel.handle}
                </p>

                {channel.description && (
                  <p className="font-sans text-[11px] text-[#7C746A]/80 mt-1.5 line-clamp-1 hidden sm:block">
                    {channel.description}
                  </p>
                )}
              </div>

              {/* Tautan Aksi Bawah */}
              <div className="mt-4 pt-3 border-t border-[#EADBCE]/60 flex items-center justify-between text-[#6B1724] group-hover:text-[#821D2D] transition-colors">
                <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-wide">
                  {channel.cta || "Kunjungi"}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-[#6B1724] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KanalMedsos;
