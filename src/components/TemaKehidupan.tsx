"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES_DATA } from "@/data/kalam-data";

interface TemaKehidupanProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const TemaKehidupan: React.FC<TemaKehidupanProps> = ({ onSelectCategory }) => {
  return (
    <section id="tema-kehidupan" className="py-16 sm:py-24 bg-ivory border-b border-gold/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="font-sans text-[11px] uppercase tracking-ultraWide text-gold-dark font-medium">
              Klasifikasi Risalah
            </span>
            <span className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest font-normal">
            Enam Pilar Tema Kehidupan
          </h2>
          <p className="font-sans text-sm sm:text-base text-charcoal/80 mt-3 font-light leading-relaxed">
            Materi petuah dan bimbingan Abuya disusun dalam enam koridor tematik utama sebagai kompas akhlak dan pedoman hidup seorang mukmin.
          </p>
        </div>

        {/* 6 Categories Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="bg-ivory border border-gold/30 hover:border-forest hover:shadow-card transition-all duration-300 p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle numeral watermark */}
              <span className="absolute top-4 right-6 font-serif text-4xl text-gold/15 font-light select-none group-hover:text-forest/10 transition-colors">
                0{idx + 1}
              </span>

              <div>
                {/* Category Header */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-serif text-2xl text-forest-800 font-medium group-hover:text-forest transition-colors">
                    {item.name}
                  </span>
                  {item.arabic && (
                    <span
                      dir="rtl"
                      className="font-serif text-lg text-gold font-normal"
                    >
                      {item.arabic}
                    </span>
                  )}
                </div>

                {/* Fine rule */}
                <div className="w-10 h-[1.5px] bg-gold/50 mb-4 group-hover:w-16 transition-all duration-300" />

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-8 pt-4 border-t border-gold/20 flex items-center justify-between">
                <span className="text-[11px] font-sans uppercase tracking-editorial text-gold-dark font-medium">
                  {item.count} Risalah & Petuah
                </span>
                
                <a
                  href="#kalam-terbaru"
                  onClick={() => onSelectCategory && onSelectCategory(item.name)}
                  className="inline-flex items-center gap-1 text-xs font-sans uppercase tracking-editorial text-forest group-hover:text-gold-dark font-medium transition-colors"
                >
                  <span>Buka Tema</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Index Guidance Footnote */}
        <div className="mt-14 p-6 border border-dashed border-gold/40 bg-ivory-light flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-serif text-sm text-forest font-medium">
              Struktur Tema Bersanad
            </p>
            <p className="font-sans text-xs text-charcoal-muted mt-0.5">
              Setiap tema merujuk pada integrasi fiqih adab, tazkiyatun nafs, dan tuntunan amaliyyah keseharian.
            </p>
          </div>
          <a
            href="#kalam-terbaru"
            className="text-xs uppercase tracking-editorial font-sans text-forest hover:text-gold font-medium flex items-center gap-1 border-b border-forest/30 pb-0.5"
          >
            <span>Telusuri Arsip Terkini</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
