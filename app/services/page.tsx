"use client";

import { useLanguage } from "../../components/LanguageProvider";

const content = {
  en: {
    eyebrow: "Services", title: "End-to-end packaging support.",
    items: [
      ["Packaging Development", "Translate product requirements into packaging concepts, specifications, and production-ready directions.", "/images/paper-packaging.jpg"],
      ["Custom Packaging", "Develop packaging formats and details around dimensions, materials, protection, handling, and presentation.", "/images/custom-packaging.jpg"],
      ["Sampling & Prototyping", "Create a practical path from concept to sample so designs can be reviewed before production.", "/images/hero-packaging.jpg"],
      ["Production Coordination", "Support the transition from approved specifications into a controlled production process.", "/images/factory-packaging.jpg"],
      ["Packaging Optimization", "Review existing packaging to identify opportunities in protection, efficiency, usability, and cost.", "/images/corrugated-packaging.jpg"],
      ["Brand Packaging", "Connect packaging structure and presentation with the visual language of the brand.", "/images/flexible-packaging.jpg"],
    ],
  },
  id: {
    eyebrow: "Layanan", title: "Dukungan kemasan dari awal hingga akhir.",
    items: [
      ["Pengembangan Kemasan", "Menerjemahkan kebutuhan produk menjadi konsep, spesifikasi, dan arahan kemasan yang siap diproduksi.", "/images/paper-packaging.jpg"],
      ["Kemasan Kustom", "Mengembangkan format dan detail kemasan berdasarkan dimensi, material, perlindungan, handling, dan tampilan.", "/images/custom-packaging.jpg"],
      ["Sampling & Prototyping", "Membangun proses praktis dari konsep hingga sampel agar desain dapat ditinjau sebelum produksi.", "/images/hero-packaging.jpg"],
      ["Koordinasi Produksi", "Mendukung transisi dari spesifikasi yang disetujui menuju proses produksi yang terkontrol.", "/images/factory-packaging.jpg"],
      ["Optimasi Kemasan", "Meninjau kemasan yang ada untuk menemukan peluang peningkatan perlindungan, efisiensi, kemudahan penggunaan, dan biaya.", "/images/corrugated-packaging.jpg"],
      ["Kemasan Brand", "Menghubungkan struktur dan tampilan kemasan dengan bahasa visual brand.", "/images/flexible-packaging.jpg"],
    ],
  },
};

export default function Services() {
  const { language } = useLanguage();
  const t = content[language];
  return <main className="container py-24">
    <div className="max-w-3xl"><div className="eyebrow">{t.eyebrow}</div><h1 className="section-title mt-4">{t.title}</h1></div>
    <div className="grid md:grid-cols-2 gap-5 mt-14">
      {t.items.map(([title, description, image], i) => (
        <div className="card overflow-hidden bg-white/45" key={title}>
          <div className="aspect-[16/8] overflow-hidden bg-[#D9CDBB] relative">
            <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="p-8 flex gap-6"><div className="font-bold text-[#4E6A5B]">{String(i + 1).padStart(2, "0")}</div><div><h2 className="text-2xl font-bold">{title}</h2><p className="text-black/55 leading-7 mt-3">{description}</p></div></div>
        </div>
      ))}
    </div>
  </main>;
}
