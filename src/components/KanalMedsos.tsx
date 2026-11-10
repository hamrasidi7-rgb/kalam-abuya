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
}

/**
 * Data default kanal media sosial resmi Kalam Abuya
 */
export const DEFAULT_MEDSOS_CHANNELS: SocialMediaChannel[] = [
  {
    id: "yt",
    platform: "youtube",
    name: "YouTube",
    handle: "@ponpesalkarimiyyah",
    url: "https://www.youtube.com/@ponpesalkarimiyyah",
    cta: "Tonton Kajian",
    is_active: true,
  },
  {
    id: "ig",
    platform: "instagram",
    name: "Instagram",
    handle: "@a.busyrokarim",
    url: "https://www.instagram.com/a.busyrokarim/",
    cta: "Mutiara Hikmah",
    is_active: true,
  },
  {
    id: "tt",
    platform: "tiktok",
    name: "TikTok",
    handle: "@ponpes.alkarimiyyah",
    url: "https://www.tiktok.com/@ponpes.alkarimiyyah/",
    cta: "Video Pendek",
    is_active: true,
  },
  {
    id: "fb",
    platform: "facebook",
    name: "Facebook",
    handle: "Busyro Karim",
    url: "https://web.facebook.com/BusyroKariman/",
    cta: "Kalam & Catatan",
    is_active: true,
  },
];

export interface KanalMedsosProps {
  channels?: SocialMediaChannel[];
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * Ikon SVG Minimalis Bersih untuk Masing-masing Platform Media Sosial
 */
const renderPlatformIcon = (platform: string) => {
  const p = platform.toLowerCase();

  switch (p) {
    case "youtube":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
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
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
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
          className="w-4 h-4"
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
          className="w-4 h-4"
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
          strokeWidth="1.8"
          className="w-4 h-4"
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
  title = "JEJAK DAKWAH DIGITAL",
  subtitle = "Mengikuti petuah, kajian, dan mutiara hikmah Abuya.",
  className = "",
}) => {
  // Filter ketat: hanya render card yang URL-nya terisi & is_active bernilai true
  const activeChannels = channels.filter(
    (ch) => ch.is_active && Boolean(ch.url && ch.url.trim().length > 0)
  );

  if (activeChannels.length === 0) {
    return null;
  }

  return (
    <section
      id="kanal-medsos"
      aria-label="Jejak Dakwah Digital Kalam Abuya"
      className={`py-8 sm:py-12 md:py-14 bg-[#F8F5EF] border-b border-[#E9E1D5] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section: Refined Editorial Masthead */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#701D2C] tracking-[0.06em] uppercase leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="font-reading italic text-xs sm:text-sm text-[#7C746A] mt-1.5 leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Garis Aksen Emas Halus */}
          <div className="flex items-center justify-center gap-2 mt-3" aria-hidden="true">
            <span className="w-6 h-[1px] bg-[#E9E1D5]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#B99A62] bg-[#B99A62]/30" />
            <span className="w-6 h-[1px] bg-[#E9E1D5]" />
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
              className="group flex flex-col justify-between bg-white border border-[#E9E1D5] rounded-sm p-3.5 sm:p-4 md:p-5 hover:border-[#701D2C] transition-all duration-200 relative"
              aria-label={`Buka akun ${channel.name} Kalam Abuya (${channel.handle})`}
            >
              <div>
                {/* Ikon Minimalis */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm bg-[#F8F5EF] border border-[#E9E1D5] flex items-center justify-center text-[#701D2C] group-hover:bg-[#701D2C] group-hover:text-white group-hover:border-[#701D2C] transition-all duration-200 mb-2.5 sm:mb-3">
                  {renderPlatformIcon(channel.platform)}
                </div>

                {/* Nama Platform (Serif) */}
                <h3 className="font-editorial text-[15px] sm:text-lg font-bold text-[#292622] group-hover:text-[#701D2C] transition-colors leading-tight">
                  {channel.name}
                </h3>

                {/* Username (Sans-Serif, Truncate) */}
                <p className="font-sans text-[11px] sm:text-xs text-[#7C746A] mt-0.5 truncate block max-w-full group-hover:text-[#292622] transition-colors">
                  {channel.handle}
                </p>
              </div>

              {/* Tautan Aksi Bawah dengan Aksen Burgundy & Panah Kecil */}
              <div className="mt-3 sm:mt-4 pt-2.5 border-t border-[#E9E1D5]/70 flex items-center justify-between text-[#701D2C] group-hover:text-[#551521] transition-colors">
                <span className="font-sans text-[10.5px] sm:text-[11.5px] font-semibold tracking-wide">
                  {channel.cta || "Kunjungi"}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B99A62] group-hover:text-[#701D2C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KanalMedsos;
