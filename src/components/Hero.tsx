"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="beranda"
      className="relative bg-gradient-to-b from-[#F8F5EF] via-[#FAF7F1] to-[#F8F5EF] pt-6 sm:pt-10 md:pt-12 pb-8 sm:pb-12 md:pb-14 border-b border-[#E9E1D5] overflow-hidden"
    >
      {/* Semantic H1 for SEO & Screen Readers */}
      <h1 className="sr-only">
        Kalam Abuya — Dr. KH. Abuya Busyro Karim, M.Si. | Ruang Pemikiran &amp; Hikmah
      </h1>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Kontainer Foto Abuya sebagai Focal Point */}
        <div className="relative w-full max-w-[270px] sm:max-w-[340px] md:max-w-[390px] lg:max-w-[430px] flex flex-col items-center">
          
          {/* Foto Portrait Utama Abuya */}
          <div className="relative w-full flex justify-center items-center">
            <Image
              src="/images/kiai Busyro-Kitab.png"
              alt="Dr. KH. Abuya Busyro Karim, M.Si. — Kalam Abuya"
              width={1086}
              height={1448}
              priority
              className="w-full h-auto object-contain object-bottom select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(112,29,44,0.06)] bg-transparent block"
              sizes="(max-width: 640px) 270px, (max-width: 768px) 340px, (max-width: 1024px) 390px, 430px"
            />
          </div>

        </div>

        {/* Action Call-to-Action: Satu Tombol Utama Solid Burgundy + Satu Text Link Elegan */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 sm:mt-6 w-full max-w-md mx-auto">
          {/* CTA Utama (Solid Burgundy): JELAJAHI PEMIKIRAN ABUYA */}
          <a
            href="#kalam-terbaru"
            className="w-full sm:w-auto inline-flex items-center justify-center text-center whitespace-nowrap px-6 sm:px-7 py-3 bg-[#701D2C] hover:bg-[#551521] text-white text-xs sm:text-[13px] font-sans font-semibold tracking-[0.08em] uppercase rounded-sm shadow-sm transition-all duration-200 active:scale-[0.98] group"
          >
            <span>Jelajahi Pemikiran Abuya</span>
            <ArrowDown className="w-3.5 h-3.5 ml-2 text-[#B99A62] group-hover:translate-y-0.5 transition-transform shrink-0" />
          </a>

          {/* CTA Kedua (Text Link): Mengenal Abuya */}
          <a
            href="#profil-abuya"
            className="inline-flex items-center justify-center text-center px-3 py-2 text-xs sm:text-[13px] font-sans font-medium text-[#292622] hover:text-[#701D2C] transition-colors group"
          >
            <span>Mengenal Abuya</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#B99A62] group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
