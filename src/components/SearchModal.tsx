"use client";

import React, { useState, useEffect } from "react";
import { Search, X, BookOpen, Quote, Video, ArrowRight } from "lucide-react";
import { ARTICLES_DATA, QUOTES_DATA, VIDEOS_DATA, CATEGORIES_DATA } from "@/data/kalam-data";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // Toggle or open
        if (isOpen) onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredQuotes = QUOTES_DATA.filter(
    (q) =>
      q.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.context.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredArticles = ARTICLES_DATA.filter(
    (a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredVideos = VIDEOS_DATA.filter(
    (v) =>
      v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalResults =
    filteredQuotes.length + filteredArticles.length + filteredVideos.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-forest-900/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl bg-ivory rounded-none border border-gold/40 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Header Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-gold/25 bg-ivory-light">
          <Search className="w-5 h-5 text-forest/70 mr-3 flex-shrink-0" />
          <input
            type="text"
            placeholder="Cari petuah, artikel, tema, atau rekaman video..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none outline-none text-charcoal font-serif text-lg placeholder:text-charcoal-muted placeholder:font-sans placeholder:text-sm"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="p-1 text-charcoal-muted hover:text-charcoal mr-2"
              title="Hapus pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider font-medium text-forest hover:text-gold border border-forest/30 px-2 py-1 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Quick Category Suggestions */}
        {!searchTerm && (
          <div className="p-5 border-b border-gold/20 bg-ivory/60">
            <p className="text-xs uppercase tracking-wideEditorial text-gold-dark font-medium mb-3">
              Jelajahi Berdasarkan Tema
            </p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES_DATA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSearchTerm(cat.name)}
                  className="text-xs px-3 py-1.5 border border-forest/15 hover:border-gold hover:bg-forest hover:text-ivory text-charcoal transition-all font-sans"
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        <div className="overflow-y-auto p-4 space-y-6 flex-1">
          {searchTerm && totalResults === 0 && (
            <div className="text-center py-12 text-charcoal-muted">
              <p className="font-serif text-lg italic text-forest mb-1">
                Kalam tidak ditemukan
              </p>
              <p className="text-xs">
                Tidak ada hasil untuk kata kunci &ldquo;{searchTerm}&rdquo;. Coba kata kunci lain seperti &lsquo;akhlak&rsquo;, &lsquo;ilmu&rsquo;, atau &lsquo;keluarga&rsquo;.
              </p>
            </div>
          )}

          {/* Quotes Section */}
          {filteredQuotes.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-editorial text-gold-dark font-semibold">
                <Quote className="w-3.5 h-3.5" />
                <span>Kalam & Petuah ({filteredQuotes.length})</span>
              </div>
              <div className="space-y-2.5">
                {filteredQuotes.slice(0, 3).map((q) => (
                  <a
                    key={q.id}
                    href="#kalam-terbaru"
                    onClick={onClose}
                    className="block p-3 border border-forest/10 hover:border-gold/50 bg-white/50 hover:bg-white transition-all group"
                  >
                    <p className="font-serif text-charcoal text-sm italic group-hover:text-forest line-clamp-2">
                      &ldquo;{q.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between mt-2 text-xs text-charcoal-muted">
                      <span className="text-forest font-medium">{q.category}</span>
                      <span>{q.source}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Articles Section */}
          {filteredArticles.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-editorial text-gold-dark font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Artikel & Risalah ({filteredArticles.length})</span>
              </div>
              <div className="space-y-2.5">
                {filteredArticles.slice(0, 3).map((art) => (
                  <a
                    key={art.id}
                    href="#kalam-terbaru"
                    onClick={onClose}
                    className="flex items-center justify-between p-3 border border-forest/10 hover:border-gold/50 bg-white/50 hover:bg-white transition-all group"
                  >
                    <div>
                      <p className="font-serif text-charcoal text-sm font-medium group-hover:text-forest">
                        {art.title}
                      </p>
                      <p className="text-xs text-charcoal-muted mt-0.5 line-clamp-1">
                        {art.excerpt}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-forest/40 group-hover:text-gold group-hover:translate-x-1 transition-all ml-3 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Videos Section */}
          {filteredVideos.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-editorial text-gold-dark font-semibold">
                <Video className="w-3.5 h-3.5" />
                <span>Rekaman Video Kalam ({filteredVideos.length})</span>
              </div>
              <div className="space-y-2.5">
                {filteredVideos.slice(0, 2).map((vid) => (
                  <a
                    key={vid.id}
                    href="#video-kalam"
                    onClick={onClose}
                    className="flex items-center justify-between p-3 border border-forest/10 hover:border-gold/50 bg-white/50 hover:bg-white transition-all group"
                  >
                    <div>
                      <p className="font-serif text-charcoal text-sm font-medium group-hover:text-forest">
                        {vid.title}
                      </p>
                      <p className="text-xs text-gold-dark mt-0.5">
                        Durasi: {vid.duration} • {vid.category}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-forest/40 group-hover:text-gold group-hover:translate-x-1 transition-all ml-3 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-gold/20 bg-ivory-light flex items-center justify-between text-xs text-charcoal-muted">
          <span>Gunakan kata kunci untuk menelusuri arsip hikmah</span>
          <span className="text-forest font-serif italic">Kalam Abuya Portal</span>
        </div>
      </div>
    </div>
  );
};
