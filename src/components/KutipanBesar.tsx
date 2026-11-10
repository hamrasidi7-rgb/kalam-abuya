"use client";

import React from "react";

export const KutipanBesar: React.FC = () => {
  return (
    <section id="hikmah" className="py-16 sm:py-24 bg-[#701D2C] text-[#F8F5EF] relative overflow-hidden border-y border-[#B99A62]/30">
      {/* Background paper texture effect */}
      <div className="absolute inset-0 paper-pattern-dark opacity-30 pointer-events-none" />

      {/* Decorative hairline borders */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Top subtle symbol / kicker */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-10 h-[1px] bg-[#B99A62]/60" />
          <span className="font-sans text-[10.5px] uppercase tracking-[0.22em] text-[#B99A62] font-semibold">
            Mutiara Hikmah
          </span>
          <span className="w-10 h-[1px] bg-[#B99A62]/60" />
        </div>

        {/* Large Decorative Quote mark */}
        <div className="font-editorial text-5xl sm:text-6xl text-[#B99A62]/30 leading-none select-none -mb-4">
          &ldquo;
        </div>

        {/* Large Typographic Quote */}
        <blockquote className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium leading-[1.3] text-[#F8F5EF] tracking-wide max-w-3xl mx-auto">
          Hati yang senantiasa dibasahi dengan dzikir dan ketulusan niat tidak akan mudah goyah oleh pujian manusia, pun tidak akan runtuh oleh celaan.
        </blockquote>

        {/* Arabic Inscription */}
        <p
          dir="rtl"
          className="font-editorial text-xl sm:text-2xl text-[#D8C496] mt-5 tracking-wide"
        >
          الْقَلْبُ السَّلِيمُ لَا يُزَلْزِلُهُ مَدْحٌ وَلَا يَهُدُّهُ ذَمٌّ
        </p>

        {/* Attribution & Context */}
        <div className="mt-7 pt-5 border-t border-[#B99A62]/30 inline-block">
          <p className="font-sans text-xs sm:text-sm uppercase tracking-wider text-[#B99A62] font-semibold">
            Dr. KH. Abuya Busyro Karim, M.Si.
          </p>
          <p className="font-reading italic text-xs text-[#F8F5EF]/75 mt-1">
            Nasihat dalam Majlis Pembinaan Hati &amp; Adab Ruhani
          </p>
        </div>

      </div>
    </section>
  );
};

export default KutipanBesar;
