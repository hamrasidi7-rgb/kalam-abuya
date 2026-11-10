"use client";

import React from "react";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section
      id="beranda"
      className="relative bg-[#F8F5EF] pt-4 sm:pt-6 md:pt-8 pb-0 overflow-hidden flex flex-col items-center"
    >
      {/* Semantic H1 for SEO & Screen Readers */}
      <h1 className="sr-only">
        Kalam Abuya — Dr. KH. Abuya Busyro Karim, M.Si. | Ruang Pemikiran &amp; Hikmah
      </h1>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Foto Portrait Utama Abuya sebagai Elemen Visual Utama Hero */}
        <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[370px] lg:max-w-[410px] flex justify-center items-center">
          <Image
            src="/images/kiai Busyro-Kitab.png"
            alt="Dr. KH. Abuya Busyro Karim, M.Si. — Kalam Abuya"
            width={1086}
            height={1448}
            priority
            className="w-full h-auto object-contain object-bottom select-none pointer-events-none drop-shadow-[0_10px_20px_rgba(112,29,44,0.05)] bg-transparent block"
            sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, (max-width: 1024px) 370px, 410px"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
