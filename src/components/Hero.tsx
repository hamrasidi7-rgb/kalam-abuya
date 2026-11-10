"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="beranda"
      className="relative bg-[#FAF8F5] pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 border-b border-[#EADBCE] overflow-hidden"
    >
      {/* Semantic H1 for SEO & Screen Readers */}
      <h1 className="sr-only">
        Kalam Abuya — Dr. KH. Abuya Busyro Karim, M.Si.
      </h1>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Foto Portrait Utama Abuya (Portrait First, Dominan, Tanpa Bingkai) */}
        <div className="relative w-full max-w-[290px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px] xl:max-w-[540px] flex justify-center items-center">
          <Image
            src="/images/kiai Busyro-Kitab.png"
            alt="Dr. KH. Abuya Busyro Karim, M.Si. — Kalam Abuya"
            width={1086}
            height={1448}
            priority
            className="w-full h-auto object-contain object-bottom select-none pointer-events-none drop-shadow-[0_16px_35px_rgba(23,23,23,0.10)]"
            sizes="(max-width: 640px) 290px, (max-width: 768px) 380px, (max-width: 1024px) 440px, 540px"
          />
        </div>

        {/* CTA di Bawah Foto */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <a
            href="#kalam-terbaru"
            className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 bg-[#6B1724] text-[#FAF8F5] text-xs sm:text-sm font-sans font-medium tracking-[0.06em] uppercase hover:bg-[#821D2D] transition-colors border border-[#6B1724] shadow-sm group"
          >
            <span>Jelajahi Kalam Abuya</span>
            <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform text-[#C5A059]" />
          </a>

          <a
            href="#profil-abuya"
            className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 bg-transparent text-[#2C2723] hover:text-[#6B1724] text-xs sm:text-sm font-sans font-medium tracking-[0.06em] uppercase border border-[#EADBCE] hover:border-[#C5A059] transition-colors"
          >
            <span>Mengenal Abuya</span>
          </a>
        </div>

      </div>
    </section>
  );
};

