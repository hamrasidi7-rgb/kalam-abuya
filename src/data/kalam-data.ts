export interface CategoryItem {
  id: string;
  name: string;
  arabic?: string;
  slug: string;
  description: string;
  count: number;
}

export interface QuoteItem {
  id: string;
  text: string;
  arabicText?: string;
  context: string;
  source: string;
  category: string;
  date: string;
  featured?: boolean;
}

export interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  coverImage: string;
  contentSnippet: string;
  tags: string[];
}

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  category: string;
  publishedAt: string;
  thumbnail: string;
  youtubeId?: string;
  summary: string;
  speaker: string;
}

export interface AbuyaProfile {
  name: string;
  honorificTitle: string;
  shortBio: string;
  fullBio: string[];
  role: string;
  institution: string;
  portraitImage: string;
  heroImage: string;
  quoteHighlights: string[];
  dakwahPillars: {
    title: string;
    description: string;
  }[];
  credentials: {
    label: string;
    value: string;
  }[];
}

export interface OfficialChannel {
  name: string;
  platform: string;
  handle: string;
  url: string;
  followers?: string;
  icon: string;
}

// -------------------------------------------------------------
// DATA MASTER KALAM ABUYA
// Semua data di bawah ini terstruktur dan mudah diganti / disesuaikan
// dengan arsip dokumentasi resmi Abuya.
// -------------------------------------------------------------

export const SITE_METADATA = {
  title: "KALAM ABUYA — Merawat Hikmah, Menyampaikan Kebaikan",
  tagline: "Merawat Hikmah, Menyampaikan Kebaikan",
  shortDescription:
    "Portal dokumentasi resmi petuah, nasihat kehidupan, artikel keilmuan, dan rekaman mutiara kalam Abuya untuk penyejuk batin dan panduan akhlak generasi.",
  editorialStatement:
    "Sebuah ikhtiar khidmah untuk merawat setiap patah nasihat, merekam kelembutan tutur kata, dan menyebarkan warisan keteladanan seorang guru mulia dengan adab, kejernihan, dan keindahan.",
  currentIssue: "Dokumentasi & Arsip Terbuka",
  contactEmail: "redaksi@kalamabuya.com",
};

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "cat-1",
    name: "Akhlak",
    arabic: "الأخلاق",
    slug: "akhlak",
    description:
      "Budi pekerti luhur, adab dalam bersikap, serta kelembutan jiwa dalam menghadapi dinamika zaman.",
    count: 28,
  },
  {
    id: "cat-2",
    name: "Keluarga",
    arabic: "الأسرة",
    slug: "keluarga",
    description:
      "Panduan merawat sakinah, mendidik anak dengan keteladanan cinta, dan menjaga keharmonisan rumah tangga.",
    count: 19,
  },
  {
    id: "cat-3",
    name: "Ilmu",
    arabic: "العلم",
    slug: "ilmu",
    description:
      "Urgensi menuntut ilmu yang bersanad, adab terhadap guru, dan keberkahan pemahaman yang diamalkan.",
    count: 34,
  },
  {
    id: "cat-4",
    name: "Ibadah",
    arabic: "العبادة",
    slug: "ibadah",
    description:
      "Menemukan kekhusyukan batin, menyempurnakan rukun, dan menghidupkan rasa kehadiran Ilahi dalam setiap sujud.",
    count: 22,
  },
  {
    id: "cat-5",
    name: "Kepemimpinan",
    arabic: "القيادة",
    slug: "kepemimpinan",
    description:
      "Amanah kekuasaan, kebijaksanaan mengambil keputusan, dan keteladanan yang mengayomi seluruh lapisan.",
    count: 14,
  },
  {
    id: "cat-6",
    name: "Kemasyarakatan",
    arabic: "المجتمع",
    slug: "kemasyarakatan",
    description:
      "Mempererat ukhuwah, menghidupkan khidmah sosial, dan menjaga kedamaian di tengah keberagaman umat.",
    count: 17,
  },
];

export const QUOTES_DATA: QuoteItem[] = [
  {
    id: "quote-1",
    text: "Hati yang senantiasa dibasahi dengan dzikir dan ketulusan niat tidak akan mudah goyah oleh pujian manusia, pun tidak akan runtuh oleh celaan.",
    arabicText: "الْقَلْبُ السَّلِيمُ لَا يُزَلْزِلُهُ مَدْحٌ وَلَا يَهُدُّهُ ذَمٌّ",
    context: "Nasihat Bimbingan Majlis Ruhani",
    source: "Petuah Majlis Rutin Malam Jumat",
    category: "Akhlak",
    date: "1446 H",
    featured: true,
  },
  {
    id: "quote-2",
    text: "Ilmu itu cahaya yang hanya akan bersemayam pada bejana yang bersih. Bersihkanlah prasangka sebelum membuka lembaran kitab para ulama.",
    arabicText: "إِنَّ الْعِلْمَ نُورٌ لَا يُؤْتَاهُ إِلَّا ذُو قَلْبٍ طَاهِرٍ",
    context: "Pesan Pembuka Tahun Ajaran Keilmuan",
    source: "Tausiyah Penutupan Khataman Kitab",
    category: "Ilmu",
    date: "1446 H",
    featured: true,
  },
  {
    id: "quote-3",
    text: "Rumah tangga yang sejuk bukan dibangun atas dasar ketiadaan perbedaan, melainkan di atas kelapangan dada untuk saling memaafkan dan memuliakan.",
    context: "Bimbingan Rumah Tangga Sakinah",
    source: "Nasihat Pernikahan Santri",
    category: "Keluarga",
    date: "1445 H",
    featured: true,
  },
  {
    id: "quote-4",
    text: "Pemimpin sejati tidak sibuk menuntut ketaatan, melainkan senantiasa mendahulukan pengorbanan dan perlindungan bagi siapa yang diamanahkan kepadanya.",
    context: "Refleksi Tanggung Jawab Amanah",
    source: "Mau'izhah Kepemimpinan Berkah",
    category: "Kepemimpinan",
    date: "1445 H",
    featured: false,
  },
  {
    id: "quote-5",
    text: "Sebaik-baik hamba adalah yang kehadirannya memberi rasa aman bagi tetangganya, dan lisannya tidak meninggalkan luka pada sesama insan.",
    context: "Adab Pergaulan Bermasyarakat",
    source: "Kajian Rutin Muamalah Umat",
    category: "Kemasyarakatan",
    date: "1445 H",
    featured: false,
  },
  {
    id: "quote-6",
    text: "Ketenangan dalam shalat tidak datang secara tiba-tiba di dalam takbir, melainkan dipersiapkan sejak pertama kali membasuh air wudhu dengan kesadaran.",
    context: "Hakikat Ibadah Hati",
    source: "Syarah Kitab Adab As-Salikin",
    category: "Ibadah",
    date: "1446 H",
    featured: false,
  },
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: "art-1",
    title: "Menjaga Kejernihan Hati di Tengah Riuh Informasi Duniawi",
    slug: "menjaga-kejernihan-hati-riuh-informasi",
    excerpt:
      "Sebuah refleksi mendalam tentang bagaimana seorang mukmin menjaga ketenangan ruhani dan kewaspadaan nurani saat arus kegaduhan digital begitu deras menyita perhatian batin.",
    category: "Akhlak",
    readTime: "6 menit membaca",
    publishedAt: "24 Syawwal 1446 H",
    coverImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=900",
    contentSnippet:
      "Dalam banyak kesempatan, Abuya senantiasa mengingatkan kita bahwa mata dan telinga adalah pintu gerbang menuju telaga hati. Apa yang setiap hari kita serap...",
    tags: ["Tazkiyatun Nafs", "Ketenangan Jiwa", "Adab Digital"],
  },
  {
    id: "art-2",
    title: "Sanad Keilmuan: Meneladani Adab Murid Terhadap Sang Guru",
    slug: "sanad-keilmuan-adab-murid-guru",
    excerpt:
      "Ilmu agama bukan sekadar teks yang dihapal, melainkan nur keberkahan yang mengalir melalui mata rantai guru-guru mulia yang tersambung hingga Baginda Nabi SAW.",
    category: "Ilmu",
    readTime: "8 menit membaca",
    publishedAt: "18 Syawwal 1446 H",
    coverImage:
      "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&q=80&w=900",
    contentSnippet:
      "Tradisi pesantren dan halaqah para shalihin mengajarkan bahwa berkahnya satu bab ilmu yang dipelajari dengan takzim jauh lebih berharga daripada seribu wawasan...",
    tags: ["Thalabul Ilmi", "Sanad", "Adab Belajar"],
  },
  {
    id: "art-3",
    title: "Keteladanan Orang Tua: Menanamkan Cinta Agama Tanpa Paksaan",
    slug: "keteladanan-orang-tua-mendidik-cinta-agama",
    excerpt:
      "Mendidik buah hati adalah menanam benih keteladanan. Nasihat lisan yang panjang sering kali kalah oleh sepasang mata anak yang menyaksikan keikhlasan orang tuanya beribadah.",
    category: "Keluarga",
    readTime: "5 menit membaca",
    publishedAt: "10 Syawwal 1446 H",
    coverImage:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=900",
    contentSnippet:
      "Abuya kerap menekankan bahwa doa seorang ibu di sepertiga malam dan keteduhan sikap seorang ayah di meja makan adalah madrasah pertama yang tidak tergantikan...",
    tags: ["Tarbiyatul Aulad", "Pendidikan Anak", "Keluarga Sakinah"],
  },
  {
    id: "art-4",
    title: "Amanah Kepemimpinan: Tanggung Jawab Berat yang Berbalut Kasih",
    slug: "amanah-kepemimpinan-tanggung-jawab-kasih",
    excerpt:
      "Kekuasaan dalam pandangan Islam adalah beban hisab, bukan hak istimewa untuk berbangga diri. Kepemimpinan yang adil bermula dari kemampuan memimpin hawa nafsu sendiri.",
    category: "Kepemimpinan",
    readTime: "7 menit membaca",
    publishedAt: "02 Syawwal 1446 H",
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900",
    contentSnippet:
      "Meneladani para Khulafaur Rasyidin, seorang pemimpin sejati menangis di malam hari karena mencemaskan nasib kaum yang lemah di bawah tanggung jawabnya...",
    tags: ["Amanah", "Kebijaksanaan", "Keteladanan"],
  },
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: "vid-1",
    title: "Kalam Hikmah: Merawat Keikhlasan dalam Beramal Tanpa Mengharap Balas",
    duration: "24:18",
    category: "Akhlak & Hati",
    publishedAt: "2 hari lalu",
    thumbnail:
      "https://images.unsplash.com/photo-1584281729290-7c259fd2e14f?auto=format&fit=crop&q=80&w=800",
    summary:
      "Penjelasan lembut mengenai bahaya penyakit riya dan bagaimana cara membentengi amalan agar murni hanya dipersembahkan untuk mencari ridha Allah Ta'ala.",
    speaker: "Abuya [Nama Beliau]",
  },
  {
    id: "vid-2",
    title: "Petuah Penyejuk Hati: Bersabar Menghadapi Ujian & Taqdir Kehidupan",
    duration: "32:05",
    category: "Nasihat Kehidupan",
    publishedAt: "1 pekan lalu",
    thumbnail:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    summary:
      "Bimbingan ruhani saat menghadapi masa-masa sulit, mengubah keluh kesah menjadi doa, dan memandang hikmah tersembunyi di balik ketetapan Ilahi.",
    speaker: "Abuya [Nama Beliau]",
  },
  {
    id: "vid-3",
    title: "Mau'izhah Khasanah: Adab Bertutur Kata dan Menjaga Kehormatan Sesama",
    duration: "18:42",
    category: "Kemasyarakatan",
    publishedAt: "2 pekan lalu",
    thumbnail:
      "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&q=80&w=800",
    summary:
      "Pentingnya memilih kata-kata yang menyejukkan hati dan menghindari lisan yang memecah belah persaudaraan dalam kehidupan bertetangga.",
    speaker: "Abuya [Nama Beliau]",
  },
];

export const ABUYA_PROFILE: AbuyaProfile = {
  name: "Abuya [Nama Lengkap Beliau]",
  honorificTitle: "Guru Mulia & Pendidik Ruhani",
  role: "Pengasuh & Pembina Majlis Keilmuan",
  institution: "Majlis & Pondok Pesantren [Nama Lembaga/Institusi]",
  portraitImage:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000",
  heroImage:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200",
  shortBio:
    "Sosok ulama pendidik yang mengabdikan hidup untuk membimbing umat dengan keteduhan akhlak, kedalaman ilmu bersanad, dan kepedulian tulus terhadap keharmonisan masyarakat.",
  fullBio: [
    "Dikenal dengan tutur kata yang sejuk, bersahaja, serta kedalaman pemahaman agama yang menuntun umat menuju ketenangan batin. Beliau senantiasa mengedepankan pendekatan dakwah bil-hikmah—menyampaikan kebenaran dengan kelembutan tanpa merendahkan sesama.",
    "Dalam kesehariannya, beliau mendedikasikan waktu untuk mengasuh para santri, membimbing majlis ta'lim masyarakat, dan melayani konsultasi keluarga serta persoalan umat dengan penuh kesabaran dan kearifan.",
    "Setiap nasihat dan petuah beliau dirawat dalam portal Kalam Abuya ini sebagai wujud khidmah keilmuan agar hikmah yang bernilai luhur dapat terus diakses oleh generasi masa kini dan mendatang.",
  ],
  quoteHighlights: [
    "Membangun adab sebelum ilmu",
    "Menjaga ukhuwah dan persatuan umat",
    "Mengamalkan ilmu dengan kerendahan hati",
  ],
  dakwahPillars: [
    {
      title: "Tarbiyah & Sanad Keilmuan",
      description:
        "Mewariskan ilmu yang terhubung dengan silsilah guru-guru mulia, menekankan adab thalabul 'ilmi dan keteguhan aqidah ahlussunnah wal jama'ah.",
    },
    {
      title: "Dakwah Bil-Hikmah",
      description:
        "Menyebarkan ajaran Islam yang rahmatan lil 'alamin dengan tutur kata yang santun, menyejukkan, dan merangkul semua golongan.",
    },
    {
      title: "Khidmah & Kepedulian Sosial",
      description:
        "Menggerakkan kepedulian terhadap fakir miskin, yatim piatu, serta mempererat tali persaudaraan kebangsaan dan kemanusiaan.",
    },
  ],
  credentials: [
    { label: "Status Data", value: "Placeholder Terstruktur (Siap Disesuaikan)" },
    { label: "Fokus Dakwah", value: "Tazkiyatun Nafs, Adab, Fiqih Kehidupan" },
    { label: "Kanal Dokumentasi", value: "Audio, Transkrip Kajian & Video" },
    { label: "Pengasuh", value: "Majlis [Nama Lembaga]" },
  ],
};

export const OFFICIAL_CHANNELS: OfficialChannel[] = [
  {
    name: "Kanal YouTube Resmi",
    platform: "YouTube",
    handle: "@KalamAbuyaOfficial",
    url: "https://youtube.com",
    followers: "Kajian Lengkap & Siaran Langsung",
    icon: "Youtube",
  },
  {
    name: "Kanal Telegram Petuah Harian",
    platform: "Telegram",
    handle: "t.me/kalamabuya",
    url: "https://telegram.org",
    followers: "Teks Petuah & Audio Hikmah",
    icon: "Send",
  },
  {
    name: "Instagram Dokumentasi Visual",
    platform: "Instagram",
    handle: "@kalamabuya",
    url: "https://instagram.com",
    followers: "Kutipan Harian & Jadwal Majlis",
    icon: "Instagram",
  },
  {
    name: "Podcast Rekaman Audio",
    platform: "Spotify",
    handle: "Kalam Abuya Podcast",
    url: "https://spotify.com",
    followers: "Audio Syarah & Mau'izhah",
    icon: "Radio",
  },
];

export const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Kalam Hikmah", href: "#kalam-pilihan" },
  { label: "Tema Kehidupan", href: "#tema-kehidupan" },
  { label: "Petuah & Artikel", href: "#kalam-terbaru" },
  { label: "Video", href: "#video-kalam" },
  { label: "Tentang Abuya", href: "#profil-abuya" },
];
