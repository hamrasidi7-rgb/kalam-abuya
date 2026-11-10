"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Clock, Youtube, X, ExternalLink } from "lucide-react";
import { VIDEOS_DATA, VideoItem } from "@/data/kalam-data";

export const VideoKalam: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <>
      <section id="video-kalam" className="py-14 sm:py-20 bg-[#F8F5EF] border-b border-[#E9E1D5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 border-b border-[#E9E1D5] pb-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-[#B99A62]" />
                <span className="font-sans text-[10.5px] uppercase tracking-[0.2em] text-[#B99A62] font-semibold">
                  Dokumentasi Audiovisual
                </span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#701D2C] font-bold tracking-tight">
                Video Kalam &amp; Rekaman Majlis
              </h2>
              <p className="font-reading text-sm text-[#5E574E] mt-2 max-w-xl leading-relaxed">
                Arsip rekaman ta&apos;lim, bimbingan ruhani, dan petuah Abuya yang didokumentasikan dalam format audiovisual.
              </p>
            </div>

            <div className="mt-5 md:mt-0">
              <a
                href="https://www.youtube.com/@ponpesalkarimiyyah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#701D2C] text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold hover:bg-[#551521] border border-[#701D2C] rounded-sm transition-colors shadow-sm"
              >
                <Youtube className="w-4 h-4 text-[#B99A62]" />
                <span>Kanal YouTube Resmi</span>
              </a>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {VIDEOS_DATA.map((video) => (
              <div
                key={video.id}
                className="bg-white border border-[#E9E1D5] rounded-sm overflow-hidden hover:border-[#701D2C] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Container with Play Trigger */}
                  <div
                    onClick={() => setActiveVideo(video)}
                    className="relative aspect-video w-full overflow-hidden bg-[#292622] cursor-pointer"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Play Button Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#701D2C] text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-5 h-5 ml-0.5 fill-current text-[#F8F5EF]" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white font-mono text-[11px] px-2 py-0.5 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B99A62]" />
                      <span>{video.duration}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-[#F8F5EF]/95 text-[#701D2C] text-[10px] tracking-wider uppercase px-2.5 py-0.5 font-semibold font-sans border border-[#E9E1D5]">
                      {video.category}
                    </div>
                  </div>

                  {/* Video Meta Info */}
                  <div className="p-5">
                    <h3
                      onClick={() => setActiveVideo(video)}
                      className="font-editorial text-lg text-[#292622] font-bold leading-snug group-hover:text-[#701D2C] transition-colors cursor-pointer"
                    >
                      {video.title}
                    </h3>
                    <p className="font-reading text-xs text-[#5E574E] mt-2 line-clamp-2 leading-relaxed">
                      {video.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Video Card */}
                <div className="px-5 pb-5 pt-3 border-t border-[#E9E1D5]/70 flex items-center justify-between text-xs font-sans text-[#7C746A]">
                  <span>{video.publishedAt}</span>
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="inline-flex items-center gap-1 text-[#701D2C] hover:text-[#551521] font-semibold uppercase tracking-wider"
                  >
                    <span>Tonton</span>
                    <ExternalLink className="w-3 h-3 text-[#B99A62]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292622]/70 backdrop-blur-xs animate-fadeIn">
          <div
            className="fixed inset-0"
            onClick={() => setActiveVideo(null)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-4xl bg-[#F8F5EF] border border-[#E9E1D5] rounded-sm overflow-hidden shadow-2xl z-10 flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E9E1D5] bg-[#F8F5EF]">
              <span className="text-xs font-sans uppercase tracking-wider text-[#B99A62] font-semibold">
                Kajian Audiovisual &bull; {activeVideo.category}
              </span>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 text-[#292622] hover:text-[#701D2C] border border-[#E9E1D5] rounded-xs hover:border-[#701D2C] transition-colors"
                aria-label="Tutup video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Embed / Mock Iframe */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Video Details */}
            <div className="p-5 sm:p-6 bg-[#F8F5EF]">
              <h3 className="font-editorial text-xl sm:text-2xl text-[#701D2C] font-bold">
                {activeVideo.title}
              </h3>
              <p className="font-reading text-sm text-[#5E574E] mt-2 leading-relaxed">
                {activeVideo.summary}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs font-sans text-[#7C746A]">
                <span>Durasi: {activeVideo.duration}</span>
                <span>&bull;</span>
                <span>Diterbitkan: {activeVideo.publishedAt}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoKalam;
