"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="beranda"
      className="relative bg-[#F7F6F2] pt-12 sm:pt-16 lg:pt-20 pb-0 border-b border-[#E5E2D9] overflow-x-clip z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          
          {/* Kolom Kiri: Teks & Narasi Keilmuan (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 pb-12 lg:pb-24 pt-2 lg:pt-6">
            
            {/* Label Kecil */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[#8D2929]" />
              <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#8D2929]">
                RUANG PEMIKIRAN &amp; HIKMAH
              </span>
            </div>

            {/* Headline & Tagline */}
            <div className="space-y-4">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-[#171717] font-normal tracking-tight leading-[1.02]">
                Kalam Abuya
              </h1>
              
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#171717]/90 leading-snug font-normal">
                Ilmu yang menerangi pikiran, hikmah yang menuntun kehidupan.
              </p>
            </div>

            {/* Deskripsi */}
            <p className="font-sans text-base sm:text-lg text-[#686868] leading-relaxed max-w-xl font-light">
              Ruang dokumentasi kaidah keilmuan, petuah, pemikiran keislaman, dan hikmah kehidupan dari Dr. KH. Abuya Busyro Karim, M.Si., Pengasuh PP. Al-Karimiyyah Braji, Sumenep.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#kalam-pilihan"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#171717] text-[#F7F6F2] text-xs sm:text-sm font-sans font-medium tracking-[0.06em] uppercase hover:bg-[#8D2929] transition-colors border border-[#171717] hover:border-[#8D2929]"
              >
                <span>Jelajahi Kalam</span>
                <ArrowDown className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#profil-abuya"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-[#171717] hover:text-[#8D2929] text-xs sm:text-sm font-sans font-medium tracking-[0.06em] uppercase border border-[#171717]/30 hover:border-[#8D2929] transition-colors"
              >
                <span>Mengenal Abuya</span>
              </a>
            </div>

          </div>

          {/* Kolom Kanan: Foto Abuya Berukuran Besar, Natural, Tanpa Bingkai Kartu (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end">
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[580px] -mb-6 sm:-mb-10 lg:-mb-14 xl:-mb-16 flex justify-center lg:justify-end">
              <Image
                src="/images/Hero-Kalam Abuya.png"
                alt="Dr. KH. Abuya Busyro Karim, M.Si. — Kalam Abuya"
                width={1271}
                height={1238}
                priority
                className="w-full h-auto object-contain object-bottom select-none pointer-events-none drop-shadow-[0_16px_30px_rgba(23,23,23,0.12)]"
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 480px, 580px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
