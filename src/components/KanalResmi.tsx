"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Youtube, Instagram, Radio, ArrowUpRight } from "lucide-react";
import { OFFICIAL_CHANNELS } from "@/data/kalam-data";

export const KanalResmi: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const getChannelIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "youtube":
        return <Youtube className="w-5 h-5 text-gold-dark" />;
      case "instagram":
        return <Instagram className="w-5 h-5 text-gold-dark" />;
      case "telegram":
        return <Send className="w-5 h-5 text-gold-dark" />;
      case "spotify":
        return <Radio className="w-5 h-5 text-gold-dark" />;
      default:
        return <ArrowUpRight className="w-5 h-5 text-gold-dark" />;
    }
  };

  return (
    <section id="kanal-resmi" className="py-16 sm:py-24 bg-ivory border-b border-gold/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Editorial Box */}
        <div className="bg-forest text-ivory p-8 sm:p-14 border border-gold/40 shadow-editorial relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-forest-800/50 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="font-sans text-[11px] uppercase tracking-ultraWide text-gold font-medium block mb-2">
              Warta & Buletin Ruhani
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ivory">
              Dapatkan Kiriman Petuah Harian di Surel Anda
            </h2>
            <p className="font-sans text-sm sm:text-base text-ivory/80 font-light mt-3 leading-relaxed max-w-xl mx-auto">
              Setiap awal pekan, redaksi mengirimkan rangkuman kutipan hikmah, transkrip kajian terbaru, dan jadwal majlis Abuya langsung ke kotak masuk Anda.
            </p>

            {/* Subscription Form */}
            {subscribed ? (
              <div className="mt-8 p-4 bg-forest-900 border border-gold/50 inline-flex items-center gap-3 text-ivory text-sm font-sans animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span>Jazakallahu khair. Surel Anda telah terdaftar untuk menerima warta Kalam Abuya.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Masukkan alamat surel Anda..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-forest-900/80 border border-gold/40 text-ivory text-sm placeholder:text-ivory/50 placeholder:font-sans focus:outline-none focus:border-gold transition-colors font-sans"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gold text-forest-950 font-sans text-xs uppercase tracking-editorial font-semibold hover:bg-gold-light transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Langganan</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <p className="text-[11px] font-sans text-ivory/60 mt-4">
              Bebas spam • Anda dapat berhenti berlangganan kapan saja dengan satu klik.
            </p>
          </div>
        </div>

        {/* Section Heading for Official Channels */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="font-serif text-2xl text-forest font-medium">
            Kanal Komunikasi & Media Resmi
          </h3>
          <p className="font-sans text-xs sm:text-sm text-charcoal/70 mt-1 font-light">
            Ikuti akun resmi untuk mendapatkan informasi kajian langsung dan siaran berkala.
          </p>
        </div>

        {/* Official Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFICIAL_CHANNELS.map((ch) => (
            <a
              key={ch.platform}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ivory border border-gold/30 hover:border-forest p-6 flex flex-col justify-between hover:shadow-card transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-none bg-forest/5 flex items-center justify-center border border-forest/15 group-hover:bg-forest group-hover:text-ivory transition-colors">
                    {getChannelIcon(ch.platform)}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-forest/40 group-hover:text-forest group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h4 className="font-serif text-base text-forest font-medium group-hover:text-forest-700 transition-colors">
                  {ch.name}
                </h4>
                <p className="font-sans text-xs text-charcoal/60 mt-1">
                  {ch.handle}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-gold/15">
                <span className="text-[11px] font-sans text-gold-dark font-medium">
                  {ch.followers}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
