"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { ABUYA_PROFILE } from "@/data/kalam-data";

export const ProfilAbuya: React.FC = () => {
  return (
    <section id="profil-abuya" className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#E9E1D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Masthead */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#B99A62]" />
            <span className="font-sans text-[10.5px] uppercase tracking-[0.2em] text-[#B99A62] font-semibold">
              Biografi &amp; Keteladanan
            </span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#701D2C] font-bold tracking-tight">
            Tentang Abuya
          </h2>
          <p className="font-reading text-sm text-[#5E574E] mt-2 leading-relaxed">
            Menelusuri jejak khidmah, kesederhanaan, dan dedikasi seorang guru mulia dalam mendidik jiwa dan membimbing umat menuju ridha Allah Ta&apos;ala.
          </p>
        </div>

        {/* Editorial Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-6">
              
              {/* Frame Container */}
              <div className="relative border border-[#E9E1D5] p-3 sm:p-4 bg-white rounded-sm shadow-sm">
                
                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#292622] rounded-xs">
                  <Image
                    src={ABUYA_PROFILE.portraitImage}
                    alt="Potret Abuya"
                    fill
                    className="object-cover object-[65%_20%]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-editorial text-lg sm:text-xl font-bold text-white">
                      {ABUYA_PROFILE.name}
                    </p>
                    <p className="font-sans text-xs text-[#D8C496] mt-0.5 font-light">
                      {ABUYA_PROFILE.role}
                    </p>
                  </div>
                </div>

                {/* Caption beneath portrait */}
                <div className="mt-3 text-center">
                  <p className="font-reading italic text-xs text-[#7C746A]">
                    Potret dokumentasi resmi dalam halaqah keilmuan dan pembinaan santri.
                  </p>
                </div>

              </div>

              {/* Data Status Notice Card */}
              <div className="p-4 bg-white border border-[#E9E1D5] rounded-sm text-xs font-sans text-[#7C746A]">
                <div className="flex items-center gap-2 text-[#701D2C] font-semibold mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#B99A62]" />
                  <span>Struktur Data Terbuka</span>
                </div>
                <p className="font-light leading-relaxed">
                  Informasi profil, riwayat, dan gelar Abuya disiapkan secara terstruktur melalui berkas <code className="text-[#701D2C] bg-[#701D2C]/5 px-1 py-0.5 rounded font-mono text-[11px]">kalam-data.ts</code> sehingga redaksi dapat memperbaruinya sewaktu-waktu.
                </p>
              </div>

            </div>
          </div>

          {/* Narrative & Pillars Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            
            {/* Identity Header */}
            <div>
              <span className="font-sans text-xs uppercase tracking-wider text-[#B99A62] font-semibold block mb-1">
                {ABUYA_PROFILE.honorificTitle}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#701D2C] font-bold leading-tight">
                {ABUYA_PROFILE.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#7C746A] font-medium mt-1">
                {ABUYA_PROFILE.institution}
              </p>
            </div>

            {/* Editorial Biography Paragraphs */}
            <div className="space-y-4 font-reading text-sm sm:text-base text-[#292622] leading-relaxed">
              {ABUYA_PROFILE.fullBio.map((paragraph, i) => (
                <p key={i}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Three Pillars of Dakwah */}
            <div className="pt-4 border-t border-[#E9E1D5]">
              <h4 className="font-editorial text-xl sm:text-2xl text-[#701D2C] font-bold mb-5">
                Nilai Utama Bimbingan Abuya
              </h4>

              <div className="space-y-4 sm:space-y-5">
                {ABUYA_PROFILE.dakwahPillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="p-5 bg-white border-l-2 border-[#B99A62] rounded-sm hover:border-[#701D2C] transition-colors shadow-xs flex flex-col sm:flex-row sm:items-start gap-4 border-y border-r border-[#E9E1D5]"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#701D2C] text-[#F8F5EF] flex items-center justify-center font-editorial text-sm font-bold flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h5 className="font-editorial text-lg text-[#292622] font-bold">
                        {pillar.title}
                      </h5>
                      <p className="font-reading text-xs sm:text-sm text-[#5E574E] mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Summary Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-[#E9E1D5]">
              {ABUYA_PROFILE.credentials.map((cred) => (
                <div key={cred.label} className="p-3 bg-white border border-[#E9E1D5] rounded-sm">
                  <span className="block text-[10px] font-sans uppercase tracking-wider text-[#B99A62] font-semibold">
                    {cred.label}
                  </span>
                  <span className="block text-xs font-editorial text-[#701D2C] font-bold mt-1">
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

export default ProfilAbuya;
