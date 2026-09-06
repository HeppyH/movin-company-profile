"use client";

import { useLanguage } from "../../components/LanguageProvider";

const content = {
  en: {
    eyebrow: "Selected Work", title: "Packaging concepts with purpose.",
    projects: [
      ["01", "FMCG Packaging", "A packaging direction focused on strong shelf presence, efficient handling, and clear product communication.", "/images/paper-packaging.jpg"],
      ["02", "Industrial Packaging", "Protective packaging concepts for products that need dependable transport and handling performance.", "/images/factory-packaging.jpg"],
      ["03", "E-commerce Packaging", "Shipping-ready packaging designed to balance protection, presentation, and material efficiency.", "/images/corrugated-packaging.jpg"],
      ["04", "Custom Brand System", "A flexible packaging family designed to create a consistent brand experience across products.", "/images/custom-packaging.jpg"],
      ["05", "Flexible Packaging", "Flexible formats designed for practical storage, transport, and product presentation.", "/images/flexible-packaging.jpg"],
      ["06", "Sustainable Packaging", "Packaging directions that consider material efficiency and more sustainable choices.", "/images/sustainable-packaging.jpg"],
    ],
  },
  id: {
    eyebrow: "Portofolio Pilihan", title: "Konsep kemasan dengan tujuan yang jelas.",
    projects: [
      ["01", "Kemasan FMCG", "Arah kemasan yang berfokus pada daya tarik di rak, efisiensi handling, dan komunikasi produk yang jelas.", "/images/paper-packaging.jpg"],
      ["02", "Kemasan Industri", "Konsep kemasan pelindung untuk produk yang membutuhkan performa transportasi dan handling yang andal.", "/images/factory-packaging.jpg"],
      ["03", "Kemasan E-commerce", "Kemasan siap kirim yang menyeimbangkan perlindungan, tampilan, dan efisiensi material.", "/images/corrugated-packaging.jpg"],
      ["04", "Sistem Brand Kustom", "Keluarga kemasan fleksibel yang dirancang untuk menciptakan pengalaman brand yang konsisten di berbagai produk.", "/images/custom-packaging.jpg"],
      ["05", "Kemasan Fleksibel", "Format fleksibel yang dirancang untuk penyimpanan, transportasi, dan tampilan produk yang praktis.", "/images/flexible-packaging.jpg"],
      ["06", "Kemasan Berkelanjutan", "Arah kemasan yang mempertimbangkan efisiensi material dan pilihan yang lebih berkelanjutan.", "/images/sustainable-packaging.jpg"],
    ],
  },
};

export default function Portfolio() {
  const { language } = useLanguage();
  const t = content[language];
  return <main className="container py-24">
    <div className="max-w-3xl"><div className="eyebrow">{t.eyebrow}</div><h1 className="section-title mt-4">{t.title}</h1></div>
    <div className="grid md:grid-cols-2 gap-8 mt-14">
      {t.projects.map(([n, title, description, image]) => <article key={n}>
        <div className="aspect-[16/10] rounded-[28px] relative overflow-hidden bg-[#D9CDBB]"><img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" /><span className="absolute top-6 left-6 font-bold text-xs text-white">{n}</span></div>
        <h2 className="text-2xl font-bold mt-5">{title}</h2><p className="text-black/55 leading-7 mt-2 max-w-xl">{description}</p>
      </article>)}
    </div>
  </main>;
}
