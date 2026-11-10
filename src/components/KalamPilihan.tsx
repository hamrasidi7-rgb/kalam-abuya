"use client";

import React, { useState } from "react";
import { Quote, Copy, Check, Share2, Sparkles } from "lucide-react";
import { QUOTES_DATA, QuoteItem } from "@/data/kalam-data";

export const KalamPilihan: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["Semua", "Akhlak", "Ilmu", "Keluarga", "Kepemimpinan", "Kemasyarakatan", "Ibadah"];

  const filteredQuotes =
    activeCategory === "Semua"
      ? QUOTES_DATA
      : QUOTES_DATA.filter((q) => q.category.toLowerCase() === activeCategory.toLowerCase());

  const handleCopyQuote = (quote: QuoteItem) => {
    const textToCopy = `"${quote.text}" — Kalam Abuya (${quote.source})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(quote.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2200);
  };

  return (
    <section id="kalam-pilihan" className="py-16 sm:py-24 bg-ivory-light border-b border-gold/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-gold/30 pb-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="font-sans text-[11px] uppercase tracking-ultraWide text-gold-dark font-medium">
                Pilihan Redaksi
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-normal">
              Kalam Pilihan & Petuah Ruhani
            </h2>
            <p className="font-sans text-sm text-charcoal/80 mt-2 font-light leading-relaxed">
              Kumpulan mutiara petuah terpilih yang disampaikan dalam berbagai majlis keilmuan, sarat dengan kejernihan batin dan keteladanan budi pekerti.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3.5 py-1.5 transition-all font-sans tracking-wide uppercase ${
                  activeCategory === cat
                    ? "bg-forest text-ivory border border-forest font-medium shadow-sm"
                    : "bg-transparent text-charcoal/70 border border-forest/15 hover:border-gold hover:text-forest"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Quote Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredQuotes.map((quote, idx) => (
            <article
              key={quote.id}
              className="bg-ivory border border-gold/30 p-7 sm:p-8 flex flex-col justify-between hover:border-gold hover:shadow-card transition-all duration-300 relative group"
            >
              {/* Subtle Corner Line */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-[1px] bg-gold/40 transform rotate-45 origin-top-right" />
              </div>

              {/* Card Top: Category & Edition */}
              <div>
                <div className="flex items-center justify-between text-xs mb-5">
                  <span className="inline-block px-2.5 py-1 bg-forest/5 text-forest border border-forest/15 font-sans uppercase tracking-editorial text-[10px] font-medium">
                    {quote.category}
                  </span>
                  <span className="text-[11px] font-sans text-charcoal-muted">
                    {quote.date}
                  </span>
                </div>

                {/* Arabic Text if available */}
                {quote.arabicText && (
                  <p
                    dir="rtl"
                    className="font-serif text-right text-base sm:text-lg text-forest-700 leading-relaxed mb-4 pb-3 border-b border-gold/15"
                  >
                    {quote.arabicText}
                  </p>
                )}

                {/* Indonesian Quote Text */}
                <blockquote className="font-serif text-lg sm:text-xl text-forest leading-relaxed font-normal">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
              </div>

              {/* Card Bottom: Context & Action Buttons */}
              <div className="mt-8 pt-5 border-t border-gold/20 flex items-center justify-between">
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-wideEditorial text-gold-dark font-medium">
                    {quote.context}
                  </p>
                  <p className="font-sans text-xs text-charcoal/70 mt-0.5 font-light">
                    {quote.source}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCopyQuote(quote)}
                    className="p-2 text-charcoal-muted hover:text-forest hover:bg-forest/5 transition-colors relative"
                    title="Salin kutipan ini"
                    aria-label="Salin kutipan ini"
                  >
                    {copiedId === quote.id ? (
                      <span className="flex items-center gap-1 text-[11px] text-forest font-medium">
                        <Check className="w-4 h-4 text-forest" />
                        <span className="hidden sm:inline">Tersalin</span>
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Subnote */}
        <div className="mt-12 text-center">
          <p className="font-serif text-xs sm:text-sm italic text-charcoal-muted">
            Setiap kutipan disalin dari transkrip resmi majlis bimbingan dan khutbah dengan verifikasi lafadz.
          </p>
        </div>

      </div>
    </section>
  );
};
