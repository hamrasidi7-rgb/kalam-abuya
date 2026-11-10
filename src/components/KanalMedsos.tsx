"use client";

import React from "react";

/**
 * Interface data kanal media sosial (dapat dipasok langsung dari backend/API/database)
 */
export interface SocialMediaChannel {
  id?: string;
  platform: "youtube" | "instagram" | "tiktok" | "facebook" | string;
  name: string;
  handle: string;
  url: string;
  cta?: string;
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
    is_active: true,
  },
  {
    id: "ig",
    platform: "instagram",
    name: "Instagram",
    handle: "@a.busyrokarim",
    url: "https://www.instagram.com/a.busyrokarim/",
    is_active: true,
  },
  {
    id: "tt",
    platform: "tiktok",
    name: "TikTok",
    handle: "@ponpes.alkarimiyyah",
    url: "https://www.tiktok.com/@ponpes.alkarimiyyah/",
    is_active: true,
  },
  {
    id: "fb",
    platform: "facebook",
    name: "Facebook",
    handle: "Busyro Karim",
    url: "https://web.facebook.com/BusyroKariman/",
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
 * Ikon SVG Minimalis Bersih untuk Masing-masing Platform Media Sosial (Warna Putih)
 */
const renderPlatformIcon = (platform: string) => {
  const p = platform.toLowerCase();

  switch (p) {
    case "youtube":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-white shrink-0"
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
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-white shrink-0"
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
          className="w-4 h-4 text-white shrink-0"
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
          className="w-4 h-4 text-white shrink-0"
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
          strokeWidth="1.9"
          className="w-4 h-4 text-white shrink-0"
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
  subtitle = "Ikuti kajian, petuah, dan mutiara hikmah Abuya melalui kanal resmi.",
  className = "",
}) => {
  // Filter ketat: hanya render platform yang URL-nya aktif
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
      className={`py-7 sm:py-9 md:py-10 bg-[#F8F5EF] border-b border-[#E9E1D5] ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Section: Minimalis & Elegan */}
        <div className="max-w-xl mx-auto mb-5 sm:mb-6">
          <h2 className="font-editorial text-xl sm:text-2xl font-bold text-[#701D2C] tracking-[0.06em] uppercase leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="font-reading italic text-xs sm:text-[13.5px] text-[#7C746A] mt-1.5 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Desain Tombol Pill Minimalis (Mufti Menk Style) */}
        {/* Mobile: 2 tombol per baris | Desktop: susun horizontal rata tengah */}
        <div className="grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-center gap-2 sm:gap-2.5 max-w-[310px] sm:max-w-[340px] md:max-w-none mx-auto">
          {activeChannels.map((channel) => (
            <a
              key={channel.id || channel.platform}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 h-[38px] sm:h-[40px] md:h-[42px] px-4 sm:px-5 bg-[#701D2C] hover:bg-[#551521] text-white text-xs sm:text-[13px] font-sans font-medium tracking-wide rounded-full shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B99A62]/40"
              aria-label={`Buka akun resmi ${channel.name} Kalam Abuya`}
            >
              {renderPlatformIcon(channel.platform)}
              <span className="whitespace-nowrap">{channel.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KanalMedsos;
