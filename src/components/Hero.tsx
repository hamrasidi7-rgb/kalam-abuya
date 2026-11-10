"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ABUYA_PROFILE } from "@/data/kalam-data";

export const Hero: React.FC = () => {
  return (
    <section
      id="beranda"
      className="relative bg-ivory pt-10 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-0 border-b border-gold/30 overflow-x-clip z-10"
    >
      {/* Background subtle editorial paper texture accent */}
      <div className="absolute inset-0 paper-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          
          {/* Sisi Kiri: Headline, Tagline, dan Deskripsi Kalam Abuya (7 cols) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 pb-4 lg:pb-16">
            
            {/* Editorial Kicker & Status */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="font-sans text-[11px] sm:text-xs tracking-ultraWide uppercase text-gold-dark font-medium">
                Dokumentasi &amp; Arsip Resmi
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="font-sans text-[11px] tracking-wideEditorial text-forest-700 uppercase font-semibold">
                Kalam Abuya
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-forest font-normal tracking-tight leading-[1.08]">
                Merawat Hikmah, <br />
                <span className="italic font-serif text-forest-700">
                  Menyampaikan Kebaikan
                </span>
              </h1>
              
              {/* Tagline */}
              <p className="font-sans text-xs sm:text-sm font-semibold tracking-editorial uppercase text-gold-dark/95">
                Mutiara Petuah, Risalah Akhlak &amp; Panduan Batin Umat
              </p>
            </div>

            {/* Deskripsi Kalam Abuya */}
            <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed max-w-xl font-light">
              Portal dokumentasi resmi petuah, risalah akhlak, nasihat kehidupan, dan mutiara keilmuan Abuya. Merekam kelembutan tutur kata dan keteladanan seorang guru mulia sebagai penyejuk batin dan pedoman akhlak di tengah dinamika zaman.
            </p>

            {/* CTA Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <a
                href="#kalam-pilihan"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-forest text-ivory text-xs sm:text-sm uppercase tracking-editorial font-medium hover:bg-forest-900 transition-all border border-forest shadow-sm group"
              >
                <span>Jelajahi Kalam</span>
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#profil-abuya"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent text-charcoal hover:text-forest text-xs sm:text-sm uppercase tracking-editorial font-medium border border-forest/25 hover:border-gold hover:bg-ivory-light transition-all"
              >
                <span>Tentang Abuya</span>
              </a>
            </div>

            {/* Editorial Micro-quote Pill */}
            <div className="pt-4 border-t border-gold/25 flex items-start gap-3 max-w-xl">
              <span className="text-gold font-serif text-2xl leading-none mt-1">&ldquo;</span>
              <div>
                <p className="font-serif italic text-sm sm:text-base text-charcoal-light leading-snug">
                  Ilmu itu cahaya yang hanya akan bersemayam pada bejana yang bersih.
                </p>
                <p className="font-sans text-[11px] uppercase tracking-wideEditorial text-forest-600 mt-1 font-medium">
                  — Petuah Pembuka Majlis Keilmuan
                </p>
              </div>
            </div>

            {/* Ruang Lingkup 6 Tema Kehidupan */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[10px] font-sans tracking-wideEditorial uppercase text-charcoal-muted font-medium">
                  Ruang Lingkup Kalam:
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs text-charcoal font-sans">
                {["Akhlak", "Keluarga", "Ilmu", "Ibadah", "Kepemimpinan", "Kemasyarakatan"].map((theme) => (
                  <a
                    key={theme}
                    href="#tema-kehidupan"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-ivory-light border border-gold/30 hover:border-forest hover:text-forest transition-colors text-[11px] font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    <span>{theme}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Sisi Kanan: Foto Abuya Ukuran Besar & Sedikit Keluar Batas Bawah Hero (5 cols) */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col justify-end items-center lg:items-end pt-4 lg:pt-0">
            
            {/* Ambient Lighting / Glow di Belakang Abuya */}
            <div className="absolute bottom-6 right-1/2 lg:right-10 translate-x-1/2 lg:translate-x-0 w-[300px] sm:w-[420px] lg:w-[480px] aspect-square rounded-full bg-gradient-to-t from-gold/25 via-gold/10 to-transparent filter blur-3xl pointer-events-none -z-10" />

            {/* Bingkai Lengkung Editorial Klasik di Belakang Foto */}
            <div className="absolute bottom-6 right-1/2 lg:right-8 translate-x-1/2 lg:translate-x-0 w-[280px] sm:w-[380px] lg:w-[440px] h-[340px] sm:h-[430px] lg:h-[490px] rounded-t-full border border-gold/30 pointer-events-none -z-10 opacity-75" />

            {/* Wadah Foto Abuya — Sedikit keluar dari batas bawah hero (-mb-8 sm:-mb-12 lg:-mb-14 xl:-mb-16) */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] xl:max-w-[560px] flex justify-center lg:justify-end -mb-8 sm:-mb-12 lg:-mb-14 xl:-mb-16">
              <div className="relative w-full">
                <Image
                  src="/images/Hero-Kalam Abuya.png"
                  alt="Potret Mulia Abuya — Kalam Abuya"
                  width={1271}
                  height={1238}
                  priority
                  className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(23,53,43,0.22)] select-none pointer-events-none transform transition-transform duration-700 hover:scale-[1.01]"
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 560px"
                />

                {/* Floating Editorial Badge */}
                <div className="absolute bottom-16 sm:bottom-20 left-0 sm:-left-4 bg-ivory/95 backdrop-blur-md border border-gold/60 py-2.5 px-4 shadow-editorial hidden sm:flex items-center gap-3 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                  <div>
                    <span className="font-sans text-[10px] tracking-wideEditorial uppercase text-forest font-semibold block leading-tight">
                      Guru Mulia &amp; Pendidik Ruhani
                    </span>
                    <span className="font-serif text-xs text-charcoal/80 italic">
                      Dokumentasi &amp; Arsip Terbuka
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
