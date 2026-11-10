"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Sparkles, BookOpen, Volume2 } from "lucide-react";
import { SITE_METADATA, ABUYA_PROFILE } from "@/data/kalam-data";

export const Hero: React.FC = () => {
  return (
    <section
      id="beranda"
      className="relative bg-ivory pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-gold/25 overflow-hidden"
    >
      {/* Background subtle editorial paper texture accent */}
      <div className="absolute inset-0 paper-pattern opacity-60 pointer-events-none" />

      {/* Subtle fine editorial lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* Editorial Kicker */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="font-sans text-[11px] sm:text-xs tracking-ultraWide uppercase text-gold-dark font-medium">
                Dokumentasi & Arsip Resmi
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-normal tracking-tight leading-[1.12]">
              Merawat Hikmah, <br />
              <span className="italic font-serif text-forest-700">
                Menyampaikan Kebaikan
              </span>
            </h1>

            {/* Editorial Description */}
            <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed max-w-2xl font-light">
              Merekam setiap tutur kata santun, risalah akhlak, dan petuah kehidupan seorang guru mulia. Panduan penyejuk batin untuk merawat adab, memperkokoh ukhuwah, dan meniti jalan kebaikan di tengah riuh duniawi.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#kalam-pilihan"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-forest text-ivory text-xs sm:text-sm uppercase tracking-editorial font-medium hover:bg-forest-900 transition-all border border-forest shadow-sm group"
              >
                <span>Jelajahi Kalam</span>
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#profil-abuya"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent text-charcoal hover:text-forest text-xs sm:text-sm uppercase tracking-editorial font-medium border border-forest/25 hover:border-gold hover:bg-ivory-light transition-all"
              >
                <span>Tentang Abuya</span>
              </a>
            </div>

            {/* Editorial Micro-quote Pill */}
            <div className="pt-4 border-t border-gold/25 mt-4 flex items-start gap-3">
              <span className="text-gold font-serif text-2xl leading-none mt-1">&ldquo;</span>
              <div>
                <p className="font-serif italic text-sm sm:text-base text-charcoal-light leading-snug">
                  Ilmu itu cahaya yang hanya akan bersemayam pada bejana yang bersih.
                </p>
                <p className="font-sans text-[11px] uppercase tracking-wideEditorial text-forest-600 mt-1">
                  — Petuah Pembuka Majlis Keilmuan
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Dignified Portrait Focal Point (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Editorial Framing Border */}
              <div className="absolute -inset-3 sm:-inset-4 border border-gold/40 pointer-events-none" />
              
              {/* Decorative Corner Marks */}
              <div className="absolute -top-3 -left-3 w-3 h-3 border-t-2 border-l-2 border-gold" />
              <div className="absolute -top-3 -right-3 w-3 h-3 border-t-2 border-r-2 border-gold" />
              <div className="absolute -bottom-3 -left-3 w-3 h-3 border-b-2 border-l-2 border-gold" />
              <div className="absolute -bottom-3 -right-3 w-3 h-3 border-b-2 border-r-2 border-gold" />

              {/* Portrait Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-forest-900 shadow-editorial">
                {/* Image */}
                <Image
                  src={ABUYA_PROFILE.portraitImage}
                  alt="Potret Abuya dalam Majlis"
                  fill
                  priority
                  className="object-cover object-center filter grayscale contrast-[1.05] brightness-95 hover:filter-none transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                {/* Subtle Gradient Shade at bottom for caption legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent" />

                {/* Overlaid Caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-ivory">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="font-sans text-[10px] tracking-wideEditorial uppercase text-gold-light">
                      Potret Dokumentasi
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium tracking-wide text-ivory">
                    {ABUYA_PROFILE.name}
                  </h3>
                  <p className="font-sans text-xs text-ivory/75 mt-0.5 font-light">
                    {ABUYA_PROFILE.honorificTitle}
                  </p>
                </div>
              </div>

              {/* Floating Badge / Edition Pill */}
              <div className="absolute -bottom-5 right-4 sm:-right-4 bg-ivory border border-gold/60 py-2 px-3 sm:px-4 shadow-lg hidden sm:flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="font-sans text-[11px] tracking-editorial uppercase text-forest font-semibold">
                  Arsip Bimbingan Terbuka
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Editorial Bar: The 6 Life Themes Indicator */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-gold/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-[11px] font-sans tracking-wideEditorial uppercase text-charcoal-muted font-medium">
              Ruang Lingkup Kalam:
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-charcoal font-sans">
              <a href="#tema-kehidupan" className="hover:text-forest transition-colors flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" />
                <span>Akhlak</span>
              </a>
              <a href="#tema-kehidupan" className="hover:text-forest transition-colors flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" />
                <span>Keluarga</span>
              </a>
              <a href="#tema-kehidupan" className="hover:text-forest transition-colors flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" />
                <span>Ilmu</span>
              </a>
              <a href="#tema-kehidupan" className="hover:text-forest transition-colors flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" />
                <span>Ibadah</span>
              </a>
              <a href="#tema-kehidupan" className="hover:text-forest transition-colors flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" />
                <span>Kepemimpinan</span>
              </a>
              <a href="#tema-kehidupan" className="hover:text-forest transition-colors flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" />
                <span>Kemasyarakatan</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
