"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const KutipanBesar: React.FC = () => {
  return (
    <section id="hikmah" className="py-20 sm:py-28 bg-forest-900 text-ivory relative overflow-hidden border-y border-gold/30">
      {/* Background paper texture effect for deep green */}
      <div className="absolute inset-0 paper-pattern-dark opacity-40 pointer-events-none" />

      {/* Decorative hairline borders */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Top subtle symbol / kicker */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-12 h-[1px] bg-gold/60" />
          <span className="font-sans text-[11px] uppercase tracking-ultraWide text-gold font-medium">
            Kutipan Utama
          </span>
          <span className="w-12 h-[1px] bg-gold/60" />
        </div>

        {/* Large Decorative Quote mark */}
        <div className="font-serif text-6xl sm:text-7xl text-gold/30 leading-none select-none -mb-6">
          &ldquo;
        </div>

        {/* Large Typographic Quote */}
        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.3] text-ivory tracking-wide max-w-4xl mx-auto">
          Hati yang senantiasa dibasahi dengan dzikir dan ketulusan niat tidak akan mudah goyah oleh pujian manusia, pun tidak akan runtuh oleh celaan.
        </blockquote>

        {/* Arabic Inscription */}
        <p
          dir="rtl"
          className="font-serif text-lg sm:text-2xl text-gold-light mt-6 tracking-wide"
        >
          الْقَلْبُ السَّلِيمُ لَا يُزَلْزِلُهُ مَدْحٌ وَلَا يَهُدُّهُ ذَمٌّ
        </p>

        {/* Attribution & Context */}
        <div className="mt-8 pt-6 border-t border-gold/25 inline-block">
          <p className="font-sans text-xs sm:text-sm uppercase tracking-wideEditorial text-gold font-medium">
            Abuya [Nama Beliau]
          </p>
          <p className="font-serif italic text-xs text-ivory/70 mt-1">
            Nasihat dalam Majlis Pembinaan Hati & Adab Ruhani
          </p>
        </div>

      </div>
    </section>
  );
};
