"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  Sparkles,
  User,
  ArrowRight,
  X,
  Copy,
  Check,
  Share2,
  Clock,
  Calendar,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import {
  ARTICLES_DATA,
  QUOTES_DATA,
  ABUYA_PROFILE,
  ArticleItem,
  QuoteItem,
} from "@/data/kalam-data";

export const TigaKartuNavigasi: React.FC = () => {
  // Modal states
  const [activeModal, setActiveModal] = useState<"risalah" | "hikmah" | "profil" | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [selectedHikmahCat, setSelectedHikmahCat] = useState<string>("Semua");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyQuote = (quote: QuoteItem) => {
    const textToCopy = `"${quote.text}" — Kalam Abuya (${quote.source})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(quote.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const filteredQuotes =
    selectedHikmahCat === "Semua"
      ? QUOTES_DATA
      : QUOTES_DATA.filter(
          (q) => q.category.toLowerCase() === selectedHikmahCat.toLowerCase()
        );

  const hikmahCategories = ["Semua", "Akhlak", "Ilmu", "Keluarga", "Ibadah"];

  return (
    <>
      <section
        id="tiga-navigasi"
        aria-label="Tiga Kartu Navigasi Utama Kalam Abuya"
        className="py-12 sm:py-16 md:py-20 bg-[#F8F5EF] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#B99A62]" />
              <span className="font-sans text-[10.5px] uppercase tracking-[0.2em] text-[#B99A62] font-semibold">
                Ruang Pemikiran &amp; Hikmah
              </span>
              <span className="w-6 h-[1px] bg-[#B99A62]" />
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#701D2C] font-bold tracking-tight">
              Tiga Koridor Utama
            </h2>
            <p className="font-reading text-xs sm:text-sm md:text-base text-[#5E574E] mt-2 leading-relaxed">
              Jelajahi risalah keilmuan, mutiara hikmah, dan keteladanan sanad dakwah Abuya.
            </p>
          </div>

          {/* Tiga Kartu Navigasi Utama */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            
            {/* ======================================================= */}
            {/* KARTU 1: RISALAH                                        */}
            {/* ======================================================= */}
            <article
              id="risalah"
              onClick={() => setActiveModal("risalah")}
              className="bg-white border border-[#E9E1D5] rounded-sm p-6 sm:p-7 lg:p-8 flex flex-col justify-between hover:border-[#701D2C] hover:-translate-y-1 hover:shadow-card transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Garis Aksen Emas & Burgundy Halus di Puncak Kartu */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#701D2C] via-[#B99A62] to-[#701D2C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header Kartu: Ikon & Tulisan Arab */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-sm bg-[#F8F5EF] border border-[#E9E1D5] flex items-center justify-center text-[#701D2C] group-hover:bg-[#701D2C] group-hover:text-white group-hover:border-[#701D2C] transition-all duration-300">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span
                    dir="rtl"
                    className="font-editorial text-lg text-[#B99A62] font-semibold"
                  >
                    الرسائل العلمية
                  </span>
                </div>

                {/* Judul & Kategori */}
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#B99A62] font-semibold block mb-1">
                  Kajian &amp; Fatwa
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#292622] group-hover:text-[#701D2C] transition-colors leading-tight">
                  Risalah
                </h3>

                {/* Garis Pemisah Halus */}
                <div className="w-8 h-[1px] bg-[#B99A62]/60 my-3 group-hover:w-14 transition-all duration-300" />

                {/* Deskripsi */}
                <p className="font-reading text-xs sm:text-sm text-[#5E574E] leading-relaxed">
                  Kaidah hukum amaliah, fikih muamalah, pembersihan jiwa, dan syarah turats para ulama salaf bersanad.
                </p>
              </div>

              {/* Aksi Bawah */}
              <div className="mt-7 pt-4 border-t border-[#E9E1D5]/70 flex items-center justify-between">
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#7C746A] font-medium">
                  {ARTICLES_DATA.length} Artikel &amp; Risalah
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#701D2C] font-semibold group-hover:text-[#551521]">
                  <span>Buka Risalah</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B99A62] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>

            {/* ======================================================= */}
            {/* KARTU 2: HIKMAH                                         */}
            {/* ======================================================= */}
            <article
              id="hikmah"
              onClick={() => setActiveModal("hikmah")}
              className="bg-white border border-[#E9E1D5] rounded-sm p-6 sm:p-7 lg:p-8 flex flex-col justify-between hover:border-[#701D2C] hover:-translate-y-1 hover:shadow-card transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#701D2C] via-[#B99A62] to-[#701D2C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-sm bg-[#F8F5EF] border border-[#E9E1D5] flex items-center justify-center text-[#701D2C] group-hover:bg-[#701D2C] group-hover:text-white group-hover:border-[#701D2C] transition-all duration-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span
                    dir="rtl"
                    className="font-editorial text-lg text-[#B99A62] font-semibold"
                  >
                    الحكم والمواعظ
                  </span>
                </div>

                <span className="font-sans text-[11px] uppercase tracking-wider text-[#B99A62] font-semibold block mb-1">
                  Mutiara &amp; Petuah
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#292622] group-hover:text-[#701D2C] transition-colors leading-tight">
                  Hikmah
                </h3>

                <div className="w-8 h-[1px] bg-[#B99A62]/60 my-3 group-hover:w-14 transition-all duration-300" />

                <p className="font-reading text-xs sm:text-sm text-[#5E574E] leading-relaxed">
                  Untaian nasihat penyejuk batin, tazkiyatun nafs, ketulusan niat, dan bimbingan adab penuntun kehidupan.
                </p>
              </div>

              <div className="mt-7 pt-4 border-t border-[#E9E1D5]/70 flex items-center justify-between">
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#7C746A] font-medium">
                  {QUOTES_DATA.length} Mutiara Pilihan
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#701D2C] font-semibold group-hover:text-[#551521]">
                  <span>Selami Hikmah</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B99A62] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>

            {/* ======================================================= */}
            {/* KARTU 3: PROFIL ABUYA                                   */}
            {/* ======================================================= */}
            <article
              id="profil-abuya"
              onClick={() => setActiveModal("profil")}
              className="bg-white border border-[#E9E1D5] rounded-sm p-6 sm:p-7 lg:p-8 flex flex-col justify-between hover:border-[#701D2C] hover:-translate-y-1 hover:shadow-card transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#701D2C] via-[#B99A62] to-[#701D2C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-sm bg-[#F8F5EF] border border-[#E9E1D5] flex items-center justify-center text-[#701D2C] group-hover:bg-[#701D2C] group-hover:text-white group-hover:border-[#701D2C] transition-all duration-300">
                    <User className="w-5 h-5" />
                  </div>
                  <span
                    dir="rtl"
                    className="font-editorial text-lg text-[#B99A62] font-semibold"
                  >
                    السيرة والقدوة
                  </span>
                </div>

                <span className="font-sans text-[11px] uppercase tracking-wider text-[#B99A62] font-semibold block mb-1">
                  Biografi &amp; Sanad
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#292622] group-hover:text-[#701D2C] transition-colors leading-tight">
                  Profil Abuya
                </h3>

                <div className="w-8 h-[1px] bg-[#B99A62]/60 my-3 group-hover:w-14 transition-all duration-300" />

                <p className="font-reading text-xs sm:text-sm text-[#5E574E] leading-relaxed">
                  Menelusuri jejak khidmah, keteladanan budi pekerti, dan dedikasi keilmuan Dr. KH. Abuya Busyro Karim, M.Si.
                </p>
              </div>

              <div className="mt-7 pt-4 border-t border-[#E9E1D5]/70 flex items-center justify-between">
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#7C746A] font-medium">
                  Riwayat &amp; Sanad
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#701D2C] font-semibold group-hover:text-[#551521]">
                  <span>Mengenal Beliau</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B99A62] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* MODAL 1: RISALAH (Daftar Artikel & Pembaca Artikel)     */}
      {/* ======================================================= */}
      {activeModal === "risalah" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292622]/60 backdrop-blur-xs animate-fadeIn">
          <div
            className="fixed inset-0"
            onClick={() => {
              setActiveModal(null);
              setSelectedArticle(null);
            }}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-4xl bg-[#F8F5EF] border border-[#E9E1D5] rounded-sm max-h-[88vh] overflow-y-auto shadow-2xl z-10 p-5 sm:p-8 flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E9E1D5]">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-[#701D2C]" />
                <span className="font-editorial text-xl sm:text-2xl font-bold text-[#701D2C]">
                  {selectedArticle ? selectedArticle.title : "Kumpulan Risalah Kalam Abuya"}
                </span>
              </div>
              <button
                onClick={() => {
                  if (selectedArticle) {
                    setSelectedArticle(null);
                  } else {
                    setActiveModal(null);
                  }
                }}
                className="p-1.5 text-[#292622] hover:text-[#701D2C] border border-[#E9E1D5] rounded-xs hover:border-[#701D2C] transition-colors"
                aria-label="Tutup modal risalah"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Tampilan Pembaca Artikel */}
            {selectedArticle ? (
              <div className="mt-6 space-y-5">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#701D2C] hover:underline font-semibold"
                >
                  ← Kembali ke Daftar Risalah
                </button>

                <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#E9E1D5]">
                  <Image
                    src={selectedArticle.coverImage}
                    alt={selectedArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4 sm:p-5 bg-white border-l-2 border-[#B99A62] rounded-xs font-reading italic text-sm sm:text-base text-[#292622]">
                  &ldquo;{selectedArticle.excerpt}&rdquo;
                </div>

                <div className="space-y-4 font-reading text-sm sm:text-base text-[#292622] leading-relaxed">
                  <p>{selectedArticle.contentSnippet}</p>
                  <p>
                    Dalam tradisi para shalihin, petuah dan nasihat tidak semata ditujukan untuk menambah wawasan akal, melainkan untuk melembutkan hati yang mengeras dan menenangkan jiwa yang gelisah. Abuya senantiasa menegaskan bahwa adab adalah bejana tempat ilmu yang berkah dituangkan.
                  </p>
                  <p>
                    Ketika seorang penuntut hikmah memprioritaskan kesucian niat, maka setiap langkah kecil dalam beramal akan mendatangkan ketenangan batin yang sejati. Mari kita amalkan bimbingan ini dalam keluarga, majlis, dan pergaulan bermasyarakat.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E9E1D5] flex items-center justify-between text-xs text-[#7C746A]">
                  <span>{selectedArticle.publishedAt}</span>
                  <span className="font-semibold text-[#701D2C]">
                    Kategori: {selectedArticle.category}
                  </span>
                </div>
              </div>
            ) : (
              /* Modal Body: Grid Daftar Seluruh Risalah */
              <div className="mt-6 space-y-4">
                <p className="font-reading text-xs sm:text-sm text-[#7C746A]">
                  Pilihlah risalah untuk membaca teks lengkap kajian bimbingan Abuya:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ARTICLES_DATA.map((article) => (
                    <div
                      key={article.id}
                      onClick={() => setSelectedArticle(article)}
                      className="p-4 bg-white border border-[#E9E1D5] rounded-sm hover:border-[#701D2C] cursor-pointer transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <span className="text-[10px] uppercase font-sans tracking-wider text-[#B99A62] font-semibold">
                          {article.category} &bull; {article.readTime}
                        </span>
                        <h4 className="font-editorial text-lg font-bold text-[#292622] group-hover:text-[#701D2C] mt-1 leading-snug">
                          {article.title}
                        </h4>
                        <p className="font-reading text-xs text-[#5E574E] mt-2 line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="mt-4 pt-2.5 border-t border-[#E9E1D5]/60 flex items-center justify-between text-xs text-[#701D2C] font-semibold">
                        <span>Baca Teks</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#B99A62]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================= */}
      {/* MODAL 2: HIKMAH (Mutiara Nasihat & Kutipan Pilihan)      */}
      {/* ======================================================= */}
      {activeModal === "hikmah" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292622]/60 backdrop-blur-xs animate-fadeIn">
          <div
            className="fixed inset-0"
            onClick={() => setActiveModal(null)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-3xl bg-[#F8F5EF] border border-[#E9E1D5] rounded-sm max-h-[88vh] overflow-y-auto shadow-2xl z-10 p-5 sm:p-8 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-[#E9E1D5]">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#701D2C]" />
                <span className="font-editorial text-xl sm:text-2xl font-bold text-[#701D2C]">
                  Mutiara Hikmah &amp; Petuah Ruhani
                </span>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 text-[#292622] hover:text-[#701D2C] border border-[#E9E1D5] rounded-xs hover:border-[#701D2C] transition-colors"
                aria-label="Tutup modal hikmah"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Filter Kategori Hikmah */}
            <div className="flex flex-wrap gap-2 mt-4 pt-2">
              {hikmahCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedHikmahCat(cat)}
                  className={`text-xs px-3 py-1.5 rounded-full font-sans transition-all ${
                    selectedHikmahCat === cat
                      ? "bg-[#701D2C] text-white font-medium"
                      : "bg-white text-[#5E574E] border border-[#E9E1D5] hover:border-[#701D2C]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* List Mutiara Hikmah */}
            <div className="mt-5 space-y-4">
              {filteredQuotes.map((quote) => (
                <div
                  key={quote.id}
                  className="p-5 bg-white border border-[#E9E1D5] rounded-sm space-y-3 relative group"
                >
                  {quote.arabicText && (
                    <p
                      dir="rtl"
                      className="font-editorial text-right text-lg text-[#B99A62] font-semibold"
                    >
                      {quote.arabicText}
                    </p>
                  )}
                  <blockquote className="font-reading text-sm sm:text-base text-[#292622] italic leading-relaxed">
                    &ldquo;{quote.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-between pt-3 border-t border-[#E9E1D5]/60 text-xs text-[#7C746A]">
                    <div>
                      <span className="font-semibold text-[#701D2C]">{quote.category}</span>
                      <span className="mx-2">&bull;</span>
                      <span>{quote.source}</span>
                    </div>
                    <button
                      onClick={() => handleCopyQuote(quote)}
                      className="inline-flex items-center gap-1.5 text-[#701D2C] hover:text-[#551521] font-sans font-medium text-xs px-2.5 py-1 rounded bg-[#F8F5EF] border border-[#E9E1D5]"
                    >
                      {copiedId === quote.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span>Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#B99A62]" />
                          <span>Salin</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================= */}
      {/* MODAL 3: PROFIL ABUYA (Biografi, Sanad, & Pilar)        */}
      {/* ======================================================= */}
      {activeModal === "profil" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292622]/60 backdrop-blur-xs animate-fadeIn">
          <div
            className="fixed inset-0"
            onClick={() => setActiveModal(null)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-3xl bg-[#F8F5EF] border border-[#E9E1D5] rounded-sm max-h-[88vh] overflow-y-auto shadow-2xl z-10 p-5 sm:p-8 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-[#E9E1D5]">
              <div className="flex items-center gap-2.5">
                <User className="w-5 h-5 text-[#701D2C]" />
                <span className="font-editorial text-xl sm:text-2xl font-bold text-[#701D2C]">
                  Biografi &amp; Sanad Keilmuan Abuya
                </span>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 text-[#292622] hover:text-[#701D2C] border border-[#E9E1D5] rounded-xs hover:border-[#701D2C] transition-colors"
                aria-label="Tutup modal profil"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {/* Header Bio */}
              <div className="flex flex-col sm:flex-row items-center gap-5 p-5 bg-white border border-[#E9E1D5] rounded-sm">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#B99A62] shrink-0">
                  <Image
                    src={ABUYA_PROFILE.portraitImage}
                    alt={ABUYA_PROFILE.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-xs uppercase tracking-wider text-[#B99A62] font-semibold">
                    {ABUYA_PROFILE.honorificTitle}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#701D2C] mt-0.5">
                    {ABUYA_PROFILE.name}
                  </h3>
                  <p className="font-sans text-xs text-[#7C746A] mt-1">
                    {ABUYA_PROFILE.role} &bull; {ABUYA_PROFILE.institution}
                  </p>
                </div>
              </div>

              {/* Paragraf Biografi */}
              <div className="space-y-3.5 font-reading text-sm text-[#292622] leading-relaxed">
                {ABUYA_PROFILE.fullBio.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Tiga Pilar Dakwah */}
              <div className="pt-4 border-t border-[#E9E1D5]">
                <h4 className="font-editorial text-lg font-bold text-[#701D2C] mb-3">
                  Pilar Utama Khidmah &amp; Bimbingan
                </h4>
                <div className="space-y-3">
                  {ABUYA_PROFILE.dakwahPillars.map((pillar, i) => (
                    <div
                      key={pillar.title}
                      className="p-4 bg-white border-l-2 border-[#B99A62] border-y border-r border-[#E9E1D5] rounded-sm"
                    >
                      <h5 className="font-editorial text-base font-bold text-[#292622]">
                        {i + 1}. {pillar.title}
                      </h5>
                      <p className="font-reading text-xs text-[#5E574E] mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TigaKartuNavigasi;
