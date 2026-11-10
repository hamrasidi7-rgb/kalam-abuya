"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES_DATA } from "@/data/kalam-data";

interface TemaKehidupanProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const TemaKehidupan: React.FC<TemaKehidupanProps> = ({ onSelectCategory }) => {
  return (
    <section id="tema-kehidupan" className="py-14 sm:py-20 bg-[#F8F5EF] border-b border-[#E9E1D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <span className="w-6 h-[1px] bg-[#B99A62]" />
            <span className="font-sans text-[10.5px] uppercase tracking-[0.2em] text-[#B99A62] font-semibold">
              Klasifikasi Risalah
            </span>
            <span className="w-6 h-[1px] bg-[#B99A62]" />
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#701D2C] font-bold tracking-tight">
            Enam Pilar Tema Kehidupan
          </h2>
          <p className="font-reading text-sm sm:text-base text-[#5E574E] mt-2.5 font-normal leading-relaxed">
            Materi petuah dan bimbingan Abuya disusun dalam enam koridor tematik utama sebagai kompas akhlak dan pedoman hidup seorang mukmin.
          </p>
        </div>

        {/* 6 Categories Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {CATEGORIES_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white border border-[#E9E1D5] hover:border-[#701D2C] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden rounded-sm"
            >
              {/* Subtle numeral watermark */}
              <span className="absolute top-3.5 right-5 font-editorial text-3xl sm:text-4xl text-[#B99A62]/15 select-none group-hover:text-[#701D2C]/10 transition-colors">
                0{idx + 1}
              </span>

              <div>
                {/* Category Header */}
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-editorial text-xl sm:text-2xl text-[#292622] font-bold group-hover:text-[#701D2C] transition-colors">
                    {item.name}
                  </span>
                  {item.arabic && (
                    <span
                      dir="rtl"
                      className="font-editorial text-base sm:text-lg text-[#B99A62] font-medium"
                    >
                      {item.arabic}
                    </span>
                  )}
                </div>

                {/* Fine rule */}
                <div className="w-8 h-[1px] bg-[#B99A62]/60 mb-3.5 group-hover:w-14 transition-all duration-300" />

                {/* Description */}
                <p className="font-reading text-xs sm:text-sm text-[#5E574E] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-3.5 border-t border-[#E9E1D5]/70 flex items-center justify-between">
                <span className="text-[10.5px] font-sans uppercase tracking-editorial text-[#7C746A] font-medium">
                  {item.count} Risalah &amp; Petuah
                </span>
                
                <a
                  href="#kalam-terbaru"
                  onClick={() => onSelectCategory && onSelectCategory(item.name)}
                  className="inline-flex items-center gap-1 text-xs font-sans uppercase tracking-editorial text-[#701D2C] group-hover:text-[#551521] font-semibold transition-colors"
                >
                  <span>Buka Tema</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B99A62] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Index Guidance Footnote */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 border border-[#E9E1D5] bg-white/70 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-editorial text-base text-[#701D2C] font-bold">
              Struktur Tema Bersanad
            </p>
            <p className="font-sans text-xs text-[#7C746A] mt-0.5">
              Setiap tema merujuk pada integrasi fikih adab, tazkiyatun nafs, dan tuntunan amaliah keseharian.
            </p>
          </div>
          <a
            href="#kalam-terbaru"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wider text-[#701D2C] hover:text-[#551521] whitespace-nowrap"
          >
            <span>Telusuri Seluruh Arsip</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B99A62]" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default TemaKehidupan;
