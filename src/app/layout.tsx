import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Inter } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/data/kalam-data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-reading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.shortDescription,
  keywords: [
    "Kalam Abuya",
    "Petuah Abuya",
    "Nasihat Kehidupan",
    "Hikmah Islam",
    "Islamic Editorial",
    "Ulama",
    "Pesantren",
    "Tazkiyatun Nafs",
    "Adab dan Akhlak",
  ],
  authors: [{ name: "Redaksi Kalam Abuya" }],
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.shortDescription,
    siteName: "Kalam Abuya",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`scroll-smooth ${cormorant.variable} ${lora.variable} ${inter.variable}`}
    >
      <body className="bg-[#F8F5EF] text-[#292622] font-sans antialiased selection:bg-[#701D2C] selection:text-[#F8F5EF] min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
