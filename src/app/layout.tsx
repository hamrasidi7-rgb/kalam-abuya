import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/data/kalam-data";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
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
    <html lang="id" className={`scroll-smooth ${newsreader.variable} ${inter.variable}`}>
      <body className="bg-ivory text-charcoal font-sans antialiased selection:bg-forest selection:text-ivory min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
