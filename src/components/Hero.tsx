"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="beranda"
      className="relative bg-[#FAF8F5] pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8 border-b border-[#EADBCE] overflow-hidden"
    >
      {/* Semantic H1 for SEO & Screen Readers */}
      <h1 className="sr-only">
        Kalam Abuya — Dr. KH. Abuya Busyro Karim, M.Si.
      </h1>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Kontainer Terpadu: Foto Abuya & Dua Kotak Tombol Menyatu Tanpa Space */}
        <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] flex flex-col items-center">
          
          {/* Foto Portrait Utama Abuya */}
          <div className="relative w-full flex justify-center items-center">
            <Image
              src="/images/kiai Busyro-Kitab.png"
              alt="Dr. KH. Abuya Busyro Karim, M.Si. — Kalam Abuya"
              width={1086}
              height={1448}
              priority
              className="w-full h-auto object-contain object-bottom select-none pointer-events-none drop-shadow-[0_12px_28px_rgba(107,23,36,0.08)] bg-transparent block"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, (max-width: 1024px) 420px, 520px"
            />
          </div>

          {/* Dua Kotak Tombol Menyatu Langsung Menempel di Bawah Foto (Zero Space) */}
          <div className="relative z-10 -mt-2.5 sm:-mt-4 md:-mt-5 w-full flex flex-row justify-center items-center gap-2 sm:gap-3 px-2 sm:px-3">
            {/* Tombol 1: JELAJAHI KALAM ABUYA (Solid Burgundy) */}
            <a
              href="#kalam-terbaru"
              className="flex-1 inline-flex items-center justify-center text-center whitespace-nowrap px-3 sm:px-5 py-2.5 sm:py-3 bg-[#6B1724] text-white text-[11px] sm:text-xs md:text-sm font-sans font-semibold tracking-wider uppercase hover:bg-[#821D2D] transition-all duration-200 border border-[#6B1724] shadow-md rounded-sm group active:scale-[0.98]"
            >
              <span>Jelajahi Kalam Abuya</span>
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 text-[#C5A059] group-hover:translate-y-0.5 transition-transform shrink-0" />
            </a>

            {/* Tombol 2: MENGENAL ABUYA (Warna Orange sesuai permintaan) */}
            <a
              href="#profil-abuya"
              className="flex-1 inline-flex items-center justify-center text-center whitespace-nowrap px-3 sm:px-5 py-2.5 sm:py-3 bg-[#EA580C] text-white hover:bg-[#C2410C] text-[11px] sm:text-xs md:text-sm font-sans font-semibold tracking-wider uppercase border border-[#EA580C] transition-all duration-200 shadow-md rounded-sm active:scale-[0.98]"
            >
              <span>Mengenal Abuya</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
