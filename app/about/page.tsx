"use client";

import SectionHeading from "../../components/SectionHeading";
import { useLanguage } from "../../components/LanguageProvider";

const content = {
  en: {
    eyebrow: "About MovinPack",
    title: "We make packaging work harder.",
    text: "MovinPack is a packaging-focused partner built around practical thinking, clear communication, and dependable execution. Our goal is simple: create packaging that works in the real world while making your product look its best.",
    cards: [["Practical", "Solutions shaped by actual product, logistics, and production needs."], ["Collaborative", "We work closely with clients to turn requirements into clear specifications."], ["Reliable", "A structured approach designed to keep quality, timing, and communication on track."]],
  },
  id: {
    eyebrow: "Tentang MovinPack",
    title: "Kami membuat kemasan bekerja lebih optimal.",
    text: "MovinPack adalah partner yang berfokus pada kemasan dengan pendekatan praktis, komunikasi yang jelas, dan eksekusi yang dapat diandalkan. Tujuan kami sederhana: menciptakan kemasan yang bekerja di dunia nyata sekaligus membuat produk Anda tampil lebih baik.",
    cards: [["Praktis", "Solusi yang disusun berdasarkan kebutuhan produk, logistik, dan produksi yang nyata."], ["Kolaboratif", "Kami bekerja dekat dengan klien untuk mengubah kebutuhan menjadi spesifikasi yang jelas."], ["Andal", "Pendekatan terstruktur untuk menjaga kualitas, waktu, dan komunikasi tetap terarah."]],
  },
};

export default function About() {
  const { language } = useLanguage();
  const t = content[language];
  return <main className="container py-24">
    <SectionHeading eyebrow={t.eyebrow} title={t.title} text={t.text} />
    <div className="grid md:grid-cols-3 gap-5 mt-20">{t.cards.map(([title, description]) => <div className="card p-7 bg-white/50" key={title}><h3 className="text-2xl font-bold">{title}</h3><p className="text-black/55 leading-7 mt-4">{description}</p></div>)}</div>
  </main>;
}
