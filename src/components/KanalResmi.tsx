"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

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

  return (
    <section id="kanal-resmi" className="py-14 sm:py-20 bg-[#F8F5EF] border-b border-[#E9E1D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Editorial Box in Deep Burgundy */}
        <div className="bg-[#701D2C] text-[#F8F5EF] p-7 sm:p-12 md:p-14 border border-[#B99A62]/40 rounded-sm shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#551521]/60 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="font-sans text-[10.5px] uppercase tracking-[0.22em] text-[#B99A62] font-semibold block mb-2">
              Warta &amp; Buletin Ruhani
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8F5EF] leading-tight">
              Dapatkan Kiriman Petuah Harian di Surel Anda
            </h2>
            <p className="font-reading text-xs sm:text-sm text-[#F8F5EF]/80 mt-3 leading-relaxed max-w-lg mx-auto">
              Setiap awal pekan, redaksi mengirimkan rangkuman kutipan hikmah, transkrip kajian terbaru, dan jadwal majlis Abuya langsung ke kotak masuk Anda.
            </p>

            {/* Subscription Form */}
            {subscribed ? (
              <div className="mt-7 p-3.5 bg-[#551521] border border-[#B99A62]/50 rounded-sm inline-flex items-center gap-2.5 text-[#F8F5EF] text-xs sm:text-sm font-sans animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-[#B99A62]" />
                <span>Jazakallahu khair. Surel Anda telah terdaftar untuk menerima warta Kalam Abuya.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan alamat surel Anda..."
                  required
                  className="flex-1 px-4 py-2.5 bg-white text-[#292622] text-xs sm:text-sm placeholder-[#7C746A] border border-[#E9E1D5] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#B99A62]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#B99A62] hover:bg-[#9E824F] text-white text-xs sm:text-sm font-sans uppercase tracking-wider font-semibold rounded-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Langganan</span>
                </button>
              </form>
            )}
            
            <p className="text-[11px] font-sans text-[#F8F5EF]/60 mt-3.5">
              Bebas spam. Anda dapat berhenti berlangganan kapan saja dengan satu klik.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default KanalResmi;
