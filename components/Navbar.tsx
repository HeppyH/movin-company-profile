"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    quote: "Get in Touch",
  },
  id: {
    home: "Beranda",
    about: "Tentang Kami",
    services: "Layanan",
    portfolio: "Portofolio",
    contact: "Kontak",
    quote: "Hubungi Kami",
  },
};

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 bg-[#F6F4EE]/95 backdrop-blur border-b border-black/10">
      <div className="container h-20 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-black text-2xl tracking-[-.06em] shrink-0"
        >
          MovinPack<span className="text-[#4E6A5B]">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
          <Link href="/">{t.home}</Link>
          <Link href="/about">{t.about}</Link>
          <Link href="/services">{t.services}</Link>
          <Link href="/portfolio">{t.portfolio}</Link>
          <Link href="/contact">{t.contact}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "en" | "id")}
            className="bg-transparent border border-black/10 rounded-full px-3 py-2 text-sm font-semibold outline-none cursor-pointer"
            aria-label="Select language"
          >
            <option value="en">🇬🇧 EN</option>
            <option value="id">🇮🇩 ID</option>
          </select>

          <Link href="/contact" className="btn btn-dark text-sm hidden sm:inline-flex">
            {t.quote} →
          </Link>
        </div>
      </div>
    </header>
  );
}
