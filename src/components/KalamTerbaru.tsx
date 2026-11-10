"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, Calendar, ArrowRight, Tag, X, Share2, BookOpen } from "lucide-react";
import { ARTICLES_DATA, ArticleItem } from "@/data/kalam-data";

export const KalamTerbaru: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  // Lead article is the first article; remainder are in the grid
  const leadArticle = ARTICLES_DATA[0];
  const secondaryArticles = ARTICLES_DATA.slice(1);

  return (
    <>
      <section id="kalam-terbaru" className="py-16 sm:py-24 bg-ivory-light border-b border-gold/25 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Masthead */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-gold/30 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-gold" />
                <span className="font-sans text-[11px] uppercase tracking-ultraWide text-gold-dark font-medium">
                  Publikasi & Risalah
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest font-normal">
                Kalam Terbaru & Nasihat Terkini
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="font-sans text-xs tracking-editorial uppercase text-charcoal-muted">
                Edisi Dokumentasi {leadArticle.publishedAt}
              </span>
            </div>
          </div>

          {/* Lead Article (Feature Layout) */}
          <div className="mb-12 bg-ivory border border-gold/35 overflow-hidden hover:border-gold transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Image Column */}
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
                <Image
                  src={leadArticle.coverImage}
                  alt={leadArticle.title}
                  fill
                  className="object-cover filter contrast-[1.02] hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute top-4 left-4 bg-forest text-ivory text-[10px] tracking-wideEditorial uppercase px-3 py-1 font-medium font-sans border border-gold/40">
                  Risalah Utama
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-charcoal-muted font-sans mb-3">
                    <span className="text-forest font-medium uppercase tracking-editorial">
                      {leadArticle.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-dark" />
                      {leadArticle.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-forest font-medium leading-snug hover:text-forest-700 transition-colors">
                    <button
                      onClick={() => setSelectedArticle(leadArticle)}
                      className="text-left focus:outline-none"
                    >
                      {leadArticle.title}
                    </button>
                  </h3>

                  <p className="font-sans text-sm text-charcoal/80 font-light leading-relaxed mt-4">
                    {leadArticle.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {leadArticle.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-sans px-2.5 py-1 bg-forest/5 text-forest border border-forest/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gold/20 flex items-center justify-between">
                  <span className="text-xs font-sans text-charcoal-muted">
                    {leadArticle.publishedAt}
                  </span>
                  
                  <button
                    onClick={() => setSelectedArticle(leadArticle)}
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-editorial text-forest hover:text-gold-dark font-medium transition-colors"
                  >
                    <span>Baca Risalah</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Secondary Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryArticles.map((article) => (
              <article
                key={article.id}
                className="bg-ivory border border-gold/30 flex flex-col justify-between hover:border-gold hover:shadow-card transition-all duration-300 group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-900">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-ivory/95 text-forest text-[10px] tracking-editorial uppercase px-2.5 py-1 font-medium font-sans border border-gold/30">
                      {article.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] text-charcoal-muted font-sans mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gold-dark" />
                        {article.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gold-dark" />
                        {article.readTime}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl text-forest font-medium leading-snug group-hover:text-forest-700 transition-colors">
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="text-left focus:outline-none"
                      >
                        {article.title}
                      </button>
                    </h4>

                    <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed mt-3 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="p-6 pt-0 border-t border-gold/15 mt-4 flex items-center justify-between">
                  <div className="flex gap-1.5 overflow-hidden">
                    {article.tags.slice(0, 1).map((t) => (
                      <span key={t} className="text-[10px] text-charcoal-muted font-sans">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-1 text-xs font-sans uppercase tracking-editorial text-forest group-hover:text-gold-dark font-medium transition-colors"
                  >
                    <span>Baca</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/70 backdrop-blur-sm animate-fadeIn">
          <div
            className="fixed inset-0"
            onClick={() => setSelectedArticle(null)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-3xl bg-ivory border border-gold max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-10 flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gold/30">
              <span className="text-[11px] font-sans uppercase tracking-ultraWide text-gold-dark font-medium">
                Risalah Kalam Abuya • {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-charcoal hover:text-forest border border-forest/20 hover:border-gold transition-colors"
                aria-label="Tutup risalah"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-6">
              <div className="flex items-center gap-3 text-xs text-charcoal-muted font-sans mb-3">
                <span>{selectedArticle.publishedAt}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest font-medium leading-tight mb-6">
                {selectedArticle.title}
              </h2>

              <div className="relative aspect-[16/9] w-full mb-8 bg-forest-900 border border-gold/30 overflow-hidden">
                <Image
                  src={selectedArticle.coverImage}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Editorial Excerpt Box */}
              <div className="p-5 bg-ivory-light border-l-2 border-gold mb-6 font-serif italic text-base text-charcoal leading-relaxed">
                &ldquo;{selectedArticle.excerpt}&rdquo;
              </div>

              {/* Full Article Content / Mock Structured Passage */}
              <div className="space-y-4 font-sans text-sm sm:text-base text-charcoal/90 font-light leading-relaxed">
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
              <div className="mt-8 pt-6 border-t border-gold/25 flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-forest/5 text-forest border border-forest/15 font-sans"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-gold/25 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-charcoal-muted font-serif italic">
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
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial font-sans text-forest hover:text-gold border border-forest/30 px-4 py-2 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
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
