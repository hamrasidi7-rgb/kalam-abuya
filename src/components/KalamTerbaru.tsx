"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, Calendar, ArrowRight, X, Share2 } from "lucide-react";
import { ARTICLES_DATA, ArticleItem } from "@/data/kalam-data";

export const KalamTerbaru: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  // Lead article is the first article; remainder are in the grid
  const leadArticle = ARTICLES_DATA[0];
  const secondaryArticles = ARTICLES_DATA.slice(1);

  return (
    <>
      <section id="kalam-terbaru" className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#E9E1D5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Masthead */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 border-b border-[#E9E1D5] pb-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-[#B99A62]" />
                <span className="font-sans text-[10.5px] uppercase tracking-[0.2em] text-[#B99A62] font-semibold">
                  Publikasi &amp; Risalah
                </span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#701D2C] font-bold tracking-tight">
                Kalam Terbaru &amp; Nasihat Terkini
              </h2>
            </div>
            <div className="mt-3 md:mt-0">
              <span className="font-sans text-xs tracking-wider uppercase text-[#7C746A]">
                Edisi Dokumentasi {leadArticle.publishedAt}
              </span>
            </div>
          </div>

          {/* Lead Article (Feature Layout) */}
          <div className="mb-10 sm:mb-12 bg-white border border-[#E9E1D5] rounded-sm overflow-hidden hover:border-[#701D2C] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Image Column */}
              <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] lg:min-h-[420px]">
                <Image
                  src={leadArticle.coverImage}
                  alt={leadArticle.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute top-4 left-4 bg-[#701D2C] text-[#F8F5EF] text-[10px] tracking-wider uppercase px-3 py-1 font-semibold font-sans rounded-xs">
                  Risalah Utama
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#7C746A] font-sans mb-3">
                    <span className="text-[#701D2C] font-semibold uppercase tracking-wider">
                      {leadArticle.category}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#B99A62]" />
                      {leadArticle.readTime}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#292622] font-bold leading-snug hover:text-[#701D2C] transition-colors">
                    <button
                      onClick={() => setSelectedArticle(leadArticle)}
                      className="text-left focus:outline-none"
                    >
                      {leadArticle.title}
                    </button>
                  </h3>

                  <p className="font-reading text-sm sm:text-base text-[#5E574E] leading-relaxed mt-4">
                    {leadArticle.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {leadArticle.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-sans px-2.5 py-0.5 bg-[#FAF7F2] text-[#701D2C] border border-[#E9E1D5] rounded-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#E9E1D5] flex items-center justify-between">
                  <span className="text-xs font-sans text-[#7C746A]">
                    {leadArticle.publishedAt}
                  </span>
                  
                  <button
                    onClick={() => setSelectedArticle(leadArticle)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#701D2C] hover:text-[#551521] font-semibold transition-colors"
                  >
                    <span>Baca Risalah</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B99A62]" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Secondary Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {secondaryArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-[#E9E1D5] rounded-sm flex flex-col justify-between hover:border-[#701D2C] transition-all duration-300 group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E9E1D5]">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#F8F5EF]/95 text-[#701D2C] text-[10px] tracking-wider uppercase px-2.5 py-0.5 font-semibold font-sans border border-[#E9E1D5]">
                      {article.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2.5 text-[11px] text-[#7C746A] font-sans mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#B99A62]" />
                        {article.publishedAt}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#B99A62]" />
                        {article.readTime}
                      </span>
                    </div>

                    <h4 className="font-editorial text-lg sm:text-xl text-[#292622] font-bold leading-snug group-hover:text-[#701D2C] transition-colors">
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="text-left focus:outline-none"
                      >
                        {article.title}
                      </button>
                    </h4>

                    <p className="font-reading text-xs sm:text-sm text-[#5E574E] leading-relaxed mt-2.5 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="p-5 sm:p-6 pt-0 border-t border-[#E9E1D5]/70 mt-3 flex items-center justify-between">
                  <div className="flex gap-1.5 overflow-hidden">
                    {article.tags.slice(0, 1).map((t) => (
                      <span key={t} className="text-[10px] text-[#7C746A] font-sans">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-1 text-xs font-sans uppercase tracking-wider text-[#701D2C] group-hover:text-[#551521] font-semibold transition-colors"
                  >
                    <span>Baca</span>
                    <ArrowRight className="w-3 h-3 text-[#B99A62] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292622]/60 backdrop-blur-xs animate-fadeIn">
          <div
            className="fixed inset-0"
            onClick={() => setSelectedArticle(null)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-3xl bg-[#F8F5EF] border border-[#E9E1D5] rounded-sm max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-5 sm:p-8 md:p-10 flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-[#E9E1D5]">
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#B99A62] font-semibold">
                Risalah Kalam Abuya &bull; {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-[#292622] hover:text-[#701D2C] border border-[#E9E1D5] rounded-xs hover:border-[#701D2C] transition-colors"
                aria-label="Tutup risalah"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-5 sm:mt-6">
              <div className="flex items-center gap-3 text-xs text-[#7C746A] font-sans mb-3">
                <span>{selectedArticle.publishedAt}</span>
                <span>&bull;</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#701D2C] font-bold leading-tight mb-5">
                {selectedArticle.title}
              </h2>

              <div className="relative aspect-[16/9] w-full mb-6 bg-[#E9E1D5] border border-[#E9E1D5] rounded-sm overflow-hidden">
                <Image
                  src={selectedArticle.coverImage}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Editorial Excerpt Box */}
              <div className="p-4 sm:p-5 bg-white border-l-2 border-[#B99A62] rounded-xs mb-6 font-reading italic text-sm sm:text-base text-[#292622] leading-relaxed">
                &ldquo;{selectedArticle.excerpt}&rdquo;
              </div>

              {/* Full Article Content */}
              <div className="space-y-4 font-reading text-sm sm:text-base text-[#292622] leading-relaxed">
                <p>
                  {selectedArticle.contentSnippet}
                </p>
                <p>
                  Dalam tradisi para shalihin, petuah dan nasihat tidak semata ditujukan untuk menambah pengetahuan akal, melainkan untuk melembutkan hati yang mengeras dan menenangkan jiwa yang gelisah. Abuya senantiasa menegaskan bahwa adab adalah bejana tempat ilmu yang berkah dituangkan.
                </p>
                <p>
                  Ketika seorang penuntut hikmah memprioritaskan kesucian niat, maka setiap langkah kecil dalam beramal akan mendatangkan ketenangan batin yang sejati. Mari kita amalkan bimbingan ini dalam lingkaran keluarga, majlis, dan pergaulan bermasyarakat.
                </p>
              </div>

              {/* Tags */}
              <div className="mt-7 pt-5 border-t border-[#E9E1D5] flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-white text-[#701D2C] border border-[#E9E1D5] rounded-xs font-sans"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="mt-7 pt-5 border-t border-[#E9E1D5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#7C746A] font-reading italic">
                  Diterbitkan oleh Redaksi Khidmah Kalam Abuya
                </div>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: selectedArticle.title,
                        text: selectedArticle.excerpt,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Tautan risalah telah disalin ke papan klip.");
                    }
                  }}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-sans text-[#701D2C] hover:text-[#551521] border border-[#E9E1D5] bg-white px-3.5 py-2 rounded-xs transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#B99A62]" />
                  <span>Bagikan Risalah</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KalamTerbaru;
