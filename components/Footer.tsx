"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const translations = {
  en: {
    description: "Packaging solutions designed to protect products, strengthen brands, and move businesses forward.",
    explore: "Explore",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    contactTitle: "Contact",
  },
  id: {
    description: "Solusi kemasan yang dirancang untuk melindungi produk, memperkuat merek, dan menggerakkan bisnis ke masa depan.",
    explore: "Jelajahi",
    about: "Tentang Kami",
    services: "Layanan",
    portfolio: "Portofolio",
    contact: "Kontak",
    contactTitle: "Kontak",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return <footer className="bg-[#16201D] text-white mt-24">
    <div className="container py-16 grid md:grid-cols-3 gap-12">
      <div><div className="font-black text-3xl tracking-[-.06em]">MovinPack<span className="text-[#D9CDBB]">.</span></div><p className="text-white/60 mt-4 max-w-sm">{t.description}</p></div>
      <div><div className="font-bold mb-4">{t.explore}</div><div className="grid gap-2 text-white/65 text-sm"><Link href="/">{language === "id" ? "Beranda" : "Home"}</Link><Link href="/about">{t.about}</Link><Link href="/services">{t.services}</Link><Link href="/portfolio">{t.portfolio}</Link><Link href="/contact">{t.contact}</Link></div></div>
      <div><div className="font-bold mb-4">{t.contactTitle}</div><p className="text-white/65 text-sm">nurheppyhutajulu@gmail.com<br />+62 852 7083 6742<br />Indonesia</p></div>
    </div>
    <div className="container py-6 border-t border-white/10 text-xs text-white/40">© 2026 MovinPack. All rights reserved.</div>
  </footer>;
}
