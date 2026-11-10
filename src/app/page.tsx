"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { KanalMedsos } from "@/components/KanalMedsos";
import { TemaKehidupan } from "@/components/TemaKehidupan";
import { KalamTerbaru } from "@/components/KalamTerbaru";
import { VideoKalam } from "@/components/VideoKalam";
import { ProfilAbuya } from "@/components/ProfilAbuya";
import { KutipanBesar } from "@/components/KutipanBesar";
import { KanalResmi } from "@/components/KanalResmi";
import { Footer } from "@/components/Footer";
import { SearchModal } from "@/components/SearchModal";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#292622] font-sans selection:bg-[#701D2C] selection:text-[#F8F5EF]">
      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Editorial Header */}
      <Header onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Kanal Medsos Kalam Abuya (Jejak Dakwah Digital) */}
        <KanalMedsos />

        {/* 3. Tema Kehidupan (Enam Pilar Tema Kehidupan) */}
        <TemaKehidupan />

        {/* 4. Kalam Terbaru (Article Grid & Reader Modal) */}
        <KalamTerbaru />

        {/* 5. Video Kalam (Audio-visual Lectures & Play Modal) */}
        <VideoKalam />

        {/* 6. Profil Abuya (Portrait, Biography, & Pillars of Dakwah) */}
        <ProfilAbuya />

        {/* 7. Kutipan Pilihan (Mutiara Hikmah in Deep Burgundy) */}
        <KutipanBesar />

        {/* 8. Newsletter & Kanal Resmi */}
        <KanalResmi />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
