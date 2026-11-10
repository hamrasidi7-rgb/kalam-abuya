"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { KanalMedsos } from "@/components/KanalMedsos";
import { TigaKartuNavigasi } from "@/components/TigaKartuNavigasi";
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

      {/* 1. Header */}
      <Header onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Foto Hero Abuya */}
        <Hero />

        {/* 3. Jejak Dakwah Digital (Pill Buttons) */}
        <KanalMedsos />

        {/* 4. Tiga Kartu Navigasi: Risalah, Hikmah, Profil Abuya */}
        <TigaKartuNavigasi />
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
