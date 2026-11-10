# KALAM ABUYA — Islamic Editorial Personal Branding

Portal dokumentasi petuah, nasihat kehidupan, artikel keilmuan, dan rekaman audiovisual Abuya dengan konsep **Islamic Editorial Personal Branding** yang elegan, minimalis, teduh, berwibawa, dan modern.

---

## 🌿 Identitas Visual & Tipografi

- **Hijau Tua (Deep Forest Green)**: `#17352B` (Keteguhan, wibawa, kedalaman ruhani)
- **Ivory (Warm Paper Background)**: `#F7F3EA` (Keteduhan, kehangatan kertas naskah klasik)
- **Aksen Emas Lembut (Soft Gold)**: `#B69A62` (Keanggunan, cahaya kemuliaan ilmu)
- **Charcoal (Teks Baca)**: `#22252A` (Keterbacaan editorial yang nyaman bagi mata)
- **Tipografi**:
  - **Headings & Quotes**: *Newsreader* (Serif editorial elegan)
  - **Body & Metadata**: *Inter* (Sans-serif modern, jernih dan terstruktur)

---

## 🏛️ Struktur Bagian (Sections)

1. **Header & Masthead**:
   - Wordmark editorial `KALAM ABUYA` dengan sub-identitas.
   - Indikator tarikh Hijri & Masehi.
   - Navigasi: *Beranda*, *Kalam Hikmah*, *Tema Kehidupan*, *Petuah & Artikel*, *Video*, *Tentang Abuya*.
   - Tombol pencarian interaktif (`⌘K` / `Ctrl+K`) dengan modal pencarian langsung lintas kutipan, artikel, dan video.
   - Mobile Navigation Drawer yang bersih tanpa duplikasi elemen.

2. **Hero Section**:
   - Fokus utama: Potret portrait Abuya berkualitas tinggi dalam bingkai editorial berwibawa.
   - Headline utama: *“Merawat Hikmah, Menyampaikan Kebaikan”*.
   - Deskripsi petuah dan nasihat kehidupan penyejuk batin.
   - CTA utama: *Jelajahi Kalam* & *Tentang Abuya*.
   - Pita tema kehidupan terpadu di bagian bawah.

3. **Kalam Pilihan (Editorial Quote Cards)**:
   - Kartu kutipan bertipografi serif elegan dengan teks Arab dan terjemahan.
   - Konteks majlis, tahun penerbitan, dan kategori.
   - Fitur interaktif: Filter kategori dan tombol *Salin Kutipan* instan.

4. **Tema Kehidupan (6 Pilar Utama)**:
   - **Akhlak**: Budi pekerti luhur dan kelembutan jiwa.
   - **Keluarga**: Merawat sakinah dan keteladanan cinta rumah tangga.
   - **Ilmu**: Urgensi ilmu bersanad dan adab terhadap guru.
   - **Ibadah**: Kekhusyukan batin dan kedekatan Ilahi.
   - **Kepemimpinan**: Tanggung jawab amanah dan keadilan.
   - **Kemasyarakatan**: Ukhuwah, khidmah sosial, dan muamalah.

5. **Kalam Terbaru (Grid Artikel)**:
   - Tata letak majalah editorial dengan 1 artikel utama (*Lead Story*) dan grid artikel pendukung.
   - Estimasi waktu baca (*read time*), tanggal Hijri, kategori, dan tag risalah.
   - Pembaca modal interaktif (*Article Reader Modal*) untuk membaca inti sari artikel secara langsung.

6. **Video Kalam**:
   - Thumbnail rekaman majlis dan kajian audiovisual dengan penanda durasi dan topik.
   - Modal pemutar video dengan ringkasan isi tausiyah dan tombol tautan langsung ke kanal YouTube resmi.

7. **Profil Abuya**:
   - Potret dokumentasi dalam majlis ilmu.
   - Biografi terstruktur menggunakan *placeholder* bimbingan yang santun dan siap disesuaikan.
   - 3 Pilar Dakwah: *Tarbiyah & Sanad Keilmuan*, *Dakwah Bil-Hikmah*, dan *Khidmah & Kepedulian Sosial*.
   - Ringkasan kredensial dan fokus pengajaran.

8. **Kutipan Besar (Editorial Pull Quote)**:
   - Tipografi serif berukuran besar dengan latar hijau tua `#17352B`, teks ivory `#F7F3EA`, dan aksen emas `#B69A62` untuk perenungan batin mendalam.

9. **Newsletter & Kanal Resmi**:
   - Formulir pendaftaran buletin petuah surel harian/mingguan dengan notifikasi umpan balik.
   - Kartu akses langsung ke kanal resmi: YouTube, Telegram, Instagram, dan Podcast Spotify.

10. **Footer**:
    - Identitas dan narasi misi khidmah Kalam Abuya.
    - Indeks tema dan navigasi cepat.
    - Tombol *Kembali ke Atas* halus (*smooth scroll*).
    - Hak cipta dan catatan redaksi.

---

## 🗂️ Mengubah Konten Melalui Data Terstruktur

Semua konten (kutipan, biografi, nama lembaga, video, tema, artikel) diatur dalam satu file terpusat:

📁 **`src/data/kalam-data.ts`**

Anda dapat memperbarui:
- `SITE_METADATA`: Judul situs, tagline, surel redaksi, dan deskripsi portal.
- `ABUYA_PROFILE`: Nama lengkap Abuya, gelar kehormatan, foto potret, biografi lengkap, pilar dakwah, dan lembaga pesantren/majlis.
- `CATEGORIES_DATA`: 6 tema kehidupan dan jumlah arsip.
- `QUOTES_DATA`: Teks kutipan, lafadz Arab, konteks majlis, dan sumber.
- `ARTICLES_DATA`: Judul artikel, slug, sampul, kutipan isi, dan tag.
- `VIDEOS_DATA`: Video kajian, thumbnail, durasi, dan ringkasan.
- `OFFICIAL_CHANNELS`: Tautan dan pegangan (*handle*) YouTube, Telegram, Instagram, Spotify.

---

## 🚀 Menjalankan Project

```bash
# Jalankan development server
npm run dev

# Membangun versi produksi
npm run build

# Menjalankan versi produksi
npm run start
```

Akses situs di peramban pada alamat: [http://localhost:3000](http://localhost:3000)
