"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { KalamPilihan } from "@/components/KalamPilihan";
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
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans selection:bg-forest selection:text-ivory">
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

        {/* 2. Kalam Pilihan (Editorial Quote Cards) */}
        <KalamPilihan />

        {/* 3. Tema Kehidupan (6 Categories: Akhlak, Keluarga, Ilmu, Ibadah, Kepemimpinan, Kemasyarakatan) */}
        <TemaKehidupan />

        {/* 4. Kalam Terbaru (Article Grid) */}
        <KalamTerbaru />

        {/* 5. Video Kalam (Audio-visual Lectures & Thumbnails) */}
        <VideoKalam />

        {/* 6. Profil Abuya (Portrait, Biography, & Pillars of Dakwah) */}
        <ProfilAbuya />

        {/* 7. Kutipan Pilihan (Large Typographic Statement) */}
        <KutipanBesar />

        {/* 8. Newsletter & Kanal Resmi (Broadcast & Social Channels) */}
        <KanalResmi />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
