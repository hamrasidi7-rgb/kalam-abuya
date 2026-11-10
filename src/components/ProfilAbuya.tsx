"use client";

import React from "react";
import Image from "next/image";
import { BookMarked, ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import { ABUYA_PROFILE } from "@/data/kalam-data";

export const ProfilAbuya: React.FC = () => {
  return (
    <section id="profil-abuya" className="py-16 sm:py-24 bg-ivory-light border-b border-gold/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Masthead */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-gold" />
            <span className="font-sans text-[11px] uppercase tracking-ultraWide text-gold-dark font-medium">
              Biografi & Keteladanan
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest font-normal">
            Tentang Abuya
          </h2>
          <p className="font-sans text-sm text-charcoal/80 mt-2 font-light leading-relaxed">
            Menelusuri jejak khidmah, kesederhanaan, dan dedikasi seorang guru mulia dalam mendidik jiwa dan membimbing umat menuju ridha Allah Ta&apos;ala.
          </p>
        </div>

        {/* Editorial Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-6">
              
              {/* Frame Container */}
              <div className="relative border border-gold/45 p-3 sm:p-4 bg-ivory shadow-card">
                
                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-forest-900">
                  <Image
                    src={ABUYA_PROFILE.portraitImage}
                    alt="Potret Abuya"
                    fill
                    className="object-cover object-[65%_20%] contrast-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-ivory">
                    <p className="font-serif text-lg font-medium text-ivory">
                      {ABUYA_PROFILE.name}
                    </p>
                    <p className="font-sans text-xs text-gold-light mt-0.5 font-light">
                      {ABUYA_PROFILE.role}
                    </p>
                  </div>
                </div>

                {/* Caption beneath portrait */}
                <div className="mt-3 text-center">
                  <p className="font-serif text-xs italic text-charcoal-muted">
                    Potret dokumentasi resmi dalam halaqah keilmuan dan pembinaan santri.
                  </p>
                </div>

              </div>

              {/* Data Status Notice Card */}
              <div className="p-4 bg-white/70 border border-dashed border-gold/50 text-xs font-sans text-charcoal-muted">
                <div className="flex items-center gap-2 text-forest font-medium mb-1">
                  <ShieldCheck className="w-4 h-4 text-gold-dark" />
                  <span>Struktur Data Terbuka</span>
                </div>
                <p className="font-light leading-relaxed">
                  Informasi profil, riwayat, dan gelar Abuya disiapkan secara terstruktur melalui berkas <code className="text-forest bg-forest/5 px-1 py-0.5 rounded font-mono text-[11px]">kalam-data.ts</code> sehingga tim dokumentasi dapat memperbaruinya sewaktu-waktu dengan mudah.
                </p>
              </div>

            </div>
          </div>

          {/* Narrative & Pillars Column (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Identity Header */}
            <div>
              <span className="font-sans text-xs uppercase tracking-editorial text-gold-dark font-medium block mb-1">
                {ABUYA_PROFILE.honorificTitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-forest font-medium leading-tight">
                {ABUYA_PROFILE.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-forest-700 font-medium mt-1">
                {ABUYA_PROFILE.institution}
              </p>
            </div>

            {/* Editorial Biography Paragraphs */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-charcoal/85 font-light leading-relaxed">
              {ABUYA_PROFILE.fullBio.map((paragraph, i) => (
                <p key={i}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Three Pillars of Dakwah */}
            <div className="pt-4 border-t border-gold/30">
              <h4 className="font-serif text-xl text-forest font-medium mb-6">
                Nilai Utama Bimbingan Abuya
              </h4>

              <div className="space-y-6">
                {ABUYA_PROFILE.dakwahPillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="p-5 bg-ivory border-l-2 border-gold hover:border-forest transition-colors shadow-subtle flex flex-col sm:flex-row sm:items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-forest text-gold flex items-center justify-center font-serif text-sm font-semibold flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h5 className="font-serif text-lg text-forest font-medium">
                        {pillar.title}
                      </h5>
                      <p className="font-sans text-xs sm:text-sm text-charcoal/80 font-light mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Summary Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gold/20">
              {ABUYA_PROFILE.credentials.map((cred) => (
                <div key={cred.label} className="p-3 bg-white/50 border border-forest/10">
                  <span className="block text-[10px] font-sans uppercase tracking-editorial text-gold-dark font-medium">
                    {cred.label}
                  </span>
                  <span className="block text-xs font-serif text-forest font-medium mt-1">
                    {cred.value}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
