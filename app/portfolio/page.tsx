"use client";

import { useLanguage } from "../../components/LanguageProvider";

const content = {
  en: {
    eyebrow: "Product Portfolio",
    title: "Packaging solutions for every application.",
    intro: "Explore our packaging portfolio, from premium rigid boxes to flexible materials and industrial paper solutions.",
    projects: [
      ["01", "Hardbox", "Premium rigid box packaging with a strong structure, refined presentation, and dependable product protection.", "/images/portfolio-hardbox.jpg"],
      ["02", "E Flute", "Fine-flute corrugated packaging that combines a clean appearance, lightweight construction, and reliable protection.", "/images/portfolio-e-flute.jpg"],
      ["03", "Paper Bag", "Paper bag solutions for retail, promotional, and brand packaging applications with a practical and professional finish.", "/images/portfolio-paper-bag.jpg"],
      ["04", "Paper Sack", "Paper sack packaging for industrial and commercial applications requiring practical handling and larger capacity.", "/images/portfolio-paper-sack.jpg"],
      ["05", "PET, PP & DPET Sheet", "Sheet materials for packaging and thermoforming applications, selected around product requirements and production needs.", "/images/portfolio-pet-pp-dpet-sheet.jpg"],
      ["06", "Packaging Softbox (Inner Box)", "Flexible inner box solutions designed to protect, organize, and present products inside the main packaging.", "/images/portfolio-softbox-inner-box.jpg"],
    ],
  },
  id: {
    eyebrow: "Portofolio Produk",
    title: "Solusi kemasan untuk berbagai kebutuhan.",
    intro: "Jelajahi portofolio kemasan kami, mulai dari hardbox premium hingga material fleksibel dan solusi paper packaging untuk kebutuhan industri.",
    projects: [
      ["01", "Hardbox", "Kemasan rigid premium dengan struktur kokoh, tampilan elegan, dan perlindungan produk yang andal.", "/images/portfolio-hardbox.jpg"],
      ["02", "E Flute", "Kemasan corrugated dengan flute tipis yang memadukan tampilan rapi, bobot ringan, dan perlindungan yang baik.", "/images/portfolio-e-flute.jpg"],
      ["03", "Paper Bag", "Solusi paper bag untuk kebutuhan retail, promosi, dan branding dengan hasil akhir yang praktis dan profesional.", "/images/portfolio-paper-bag.jpg"],
      ["04", "Paper Sack", "Kemasan paper sack untuk kebutuhan industri dan komersial yang membutuhkan handling praktis dan kapasitas lebih besar.", "/images/portfolio-paper-sack.jpg"],
      ["05", "PET, PP & DPET Sheet", "Material sheet untuk kebutuhan packaging dan thermoforming yang disesuaikan dengan kebutuhan produk dan proses produksi.", "/images/portfolio-pet-pp-dpet-sheet.jpg"],
      ["06", "Packaging Softbox (Inner Box)", "Solusi inner box yang fleksibel untuk melindungi, menata, dan menampilkan produk di dalam kemasan utama.", "/images/portfolio-softbox-inner-box.jpg"],
    ],
  },
};

export default function Portfolio() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main>
      <section className="container pt-20 md:pt-28 pb-12">
        <div className="max-w-4xl">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1 className="section-title mt-4">{t.title}</h1>
          <p className="text-lg md:text-xl text-black/60 leading-8 mt-7 max-w-2xl">{t.intro}</p>
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid md:grid-cols-2 gap-x-7 gap-y-14">
          {t.projects.map(([number, title, description, image]) => (
            <article key={number} className="group">
              <div className="aspect-[16/10] rounded-[28px] overflow-hidden bg-[#D9CDBB] relative">
                <img src={image} alt={`${title} packaging`} className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16201D]/60 via-[#16201D]/5 to-transparent" />
                <div className="absolute top-5 left-5 rounded-full px-4 py-2 bg-white/90 text-[#16201D] text-xs font-bold tracking-[.12em]">{number}</div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs uppercase tracking-[.16em] font-bold text-white/70">MovinPack</div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-[-.04em] mt-1">{title}</h2>
                </div>
              </div>
              <div className="pt-5 flex gap-5">
                <div className="text-sm font-bold text-[#4E6A5B] pt-1">{number}</div>
                <p className="text-black/55 leading-7 max-w-xl">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
