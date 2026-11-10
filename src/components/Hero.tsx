"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="beranda"
      className="relative bg-[#FAF8F5] pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-10 border-b border-[#EADBCE] overflow-hidden"
    >
      {/* Semantic H1 for SEO & Screen Readers */}
      <h1 className="sr-only">
        Kalam Abuya — Dr. KH. Abuya Busyro Karim, M.Si.
      </h1>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Foto Portrait Utama Abuya (Transparan Penuh, Tanpa Background Catur) */}
        <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] flex justify-center items-center mb-1 sm:mb-2 bg-transparent">
          <Image
            src="/images/kiai Busyro-Kitab.png"
            alt="Dr. KH. Abuya Busyro Karim, M.Si. — Kalam Abuya"
            width={1086}
            height={1448}
            priority
            className="w-full h-auto object-contain object-bottom select-none pointer-events-none drop-shadow-[0_14px_32px_rgba(107,23,36,0.08)] bg-transparent"
            sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, (max-width: 1024px) 420px, 520px"
          />
        </div>

        {/* CTA di Bawah Foto (1 Baris Sejajar Mobile & Desktop, Mepet di Bawah Foto) */}
        <div className="mt-1 sm:mt-2 flex flex-row justify-center items-center gap-2 sm:gap-3.5 px-3 sm:px-4 w-full max-w-lg mx-auto">
          {/* Tombol 1: JELAJAHI KALAM ABUYA (Solid Burgundy) */}
          <a
            href="#kalam-terbaru"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center text-center whitespace-nowrap px-3 sm:px-6 py-2.5 sm:py-3 bg-[#6B1724] text-white text-[11px] sm:text-xs md:text-sm font-sans font-semibold tracking-wider uppercase hover:bg-[#821D2D] transition-all duration-200 border border-[#6B1724] shadow-sm rounded-sm group active:scale-[0.98]"
          >
            <span>Jelajahi Kalam Abuya</span>
            <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 text-[#C5A059] group-hover:translate-y-0.5 transition-transform shrink-0" />
          </a>

          {/* Tombol 2: MENGENAL ABUYA (Outline Border Emas / Burgundy) */}
          <a
            href="#profil-abuya"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center text-center whitespace-nowrap px-3 sm:px-6 py-2.5 sm:py-3 bg-white/70 backdrop-blur-xs text-[#2B2B2B] hover:text-[#6B1724] text-[11px] sm:text-xs md:text-sm font-sans font-semibold tracking-wider uppercase border border-[#EADBCE] hover:border-[#C5A059] hover:bg-[#FAF8F5] transition-all duration-200 shadow-xs rounded-sm active:scale-[0.98]"
          >
            <span>Mengenal Abuya</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
