"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Clock, Youtube, X, ExternalLink } from "lucide-react";
import { VIDEOS_DATA, VideoItem } from "@/data/kalam-data";

export const VideoKalam: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <>
      <section id="video-kalam" className="py-16 sm:py-24 bg-ivory border-b border-gold/25 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-gold/30 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-gold" />
                <span className="font-sans text-[11px] uppercase tracking-ultraWide text-gold-dark font-medium">
                  Dokumentasi Audiovisual
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest font-normal">
                Video Kalam & Rekaman Majlis
              </h2>
              <p className="font-sans text-sm text-charcoal/80 mt-2 font-light max-w-xl">
                Arsip rekaman ceramah, bimbingan ruhani, dan kutipan audio-visual petuah Abuya yang didokumentasikan dalam kualitas prima.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-forest text-ivory text-xs uppercase tracking-editorial font-medium hover:bg-forest-900 border border-forest transition-colors shadow-sm"
              >
                <Youtube className="w-4 h-4 text-gold-light" />
                <span>Kanal YouTube Resmi</span>
              </a>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEOS_DATA.map((video) => (
              <div
                key={video.id}
                className="bg-ivory border border-gold/30 overflow-hidden hover:border-gold hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Container */}
                  <div
                    onClick={() => setActiveVideo(video)}
                    className="relative aspect-video w-full overflow-hidden bg-forest-950 cursor-pointer"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover filter contrast-[1.05] brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-forest-950/30 group-hover:bg-forest-950/15 transition-colors" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-13 h-13 rounded-full bg-ivory/90 text-forest flex items-center justify-center shadow-lg border border-gold group-hover:scale-110 group-hover:bg-forest group-hover:text-ivory transition-all duration-300">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 bg-forest-950/90 text-ivory text-[10px] tracking-wide font-sans px-2 py-0.5 border border-gold/30">
                      {video.duration}
                    </div>

                    {/* Category pill */}
                    <div className="absolute top-3 left-3 bg-ivory/95 text-forest text-[10px] tracking-editorial uppercase px-2.5 py-0.5 font-medium font-sans border border-gold/30">
                      {video.category}
                    </div>
                  </div>

                  {/* Video Metadata & Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] text-charcoal-muted font-sans mb-2">
                      <span>{video.publishedAt}</span>
                      <span>•</span>
                      <span className="text-gold-dark font-medium">{video.speaker}</span>
                    </div>

                    <h3
                      onClick={() => setActiveVideo(video)}
                      className="font-serif text-lg text-forest font-medium leading-snug group-hover:text-forest-700 transition-colors cursor-pointer"
                    >
                      {video.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed mt-2.5 line-clamp-2">
                      {video.summary}
                    </p>
                  </div>
                </div>

                {/* Video Card Footer */}
                <div className="p-6 pt-0 border-t border-gold/15 mt-3 flex items-center justify-between">
                  <span className="text-xs font-sans text-charcoal-muted flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-dark" />
                    <span>{video.duration}</span>
                  </span>

                  <button
                    onClick={() => setActiveVideo(video)}
                    className="text-xs font-sans uppercase tracking-editorial text-forest hover:text-gold-dark font-medium transition-colors"
                  >
                    Putar Rekaman &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Subnote */}
          <div className="mt-12 text-center">
            <p className="font-serif text-xs sm:text-sm italic text-charcoal-muted">
              Seluruh rekaman video diproduksi dengan izin resmi tim dokumentasi untuk kepentingan syiar kebaikan.
            </p>
          </div>

        </div>
      </section>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="fixed inset-0"
            onClick={() => setActiveVideo(null)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-4xl bg-ivory border border-gold overflow-hidden shadow-2xl z-10 flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-gold/30 bg-ivory-light flex items-center justify-between">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-ultraWide text-gold-dark font-medium">
                  Pemutar Rekaman Majlis
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-forest font-medium line-clamp-1">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 text-charcoal hover:text-forest border border-forest/20 hover:border-gold transition-colors ml-4"
                aria-label="Tutup pemutar video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Viewport / Clean Mock Player Container */}
            <div className="relative aspect-video w-full bg-forest-950 flex items-center justify-center">
              <Image
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                fill
                className="object-cover opacity-40"
              />
              <div className="relative z-10 text-center p-6 max-w-md">
                <div className="w-16 h-16 rounded-full bg-gold/90 text-forest mx-auto flex items-center justify-center shadow-xl mb-4">
                  <Play className="w-7 h-7 ml-1 fill-current" />
                </div>
                <p className="font-serif text-lg text-ivory mb-2">
                  Tayangan Tersedia di Kanal Resmi
                </p>
                <p className="font-sans text-xs text-ivory/80 font-light mb-5">
                  Untuk kualitas audio dan video tanpa kompresi, Anda dapat menyimak langsung melalui YouTube resmi Kalam Abuya.
                </p>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-ivory text-xs uppercase tracking-editorial font-medium border border-gold hover:bg-forest-900 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-gold" />
                  <span>Buka di YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Modal Body / Notes */}
            <div className="p-6 bg-ivory space-y-3">
              <div className="flex items-center justify-between text-xs text-charcoal-muted font-sans border-b border-gold/20 pb-3">
                <span>Durasi: {activeVideo.duration} • {activeVideo.category}</span>
                <span className="text-forest font-medium">{activeVideo.speaker}</span>
              </div>
              <p className="font-sans text-sm text-charcoal/85 leading-relaxed font-light">
                {activeVideo.summary}
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
