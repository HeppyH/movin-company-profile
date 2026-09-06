"use client";

import Link from "next/link";
import { useLanguage } from "../components/LanguageProvider";

const content = {
  en: {
    eyebrow: "Packaging Solutions", title1: "PACKAGING", title2: "THAT MOVES.",
    description: "MovinPack helps businesses create packaging that protects products, communicates value, and is ready for real-world production.", start: "Start a Project", portfolioCta: "View Portfolio", what: "What We Do", whatTitle: "From packaging ideas to production-ready solutions.",
    benefits: [["Protect Products", "Packaging that is safe and reliable"], ["Strengthen Brands", "Design that adds business value"], ["Ready for Production", "From concept to mass production"]],
    services: [["01", "Custom Packaging", "Packaging concepts tailored to product dimensions, handling requirements, and brand identity."], ["02", "Production Support", "Practical support from specifications and sampling through production coordination."], ["03", "Packaging Optimization", "Improve protection, usability, presentation, and cost efficiency across packaging formats."]],
    capabilities: "Capabilities", capabilitiesTitle: "Packaging designed around your product and brand.",
    projects: [["FLEXIBLE", "Flexible Packaging", "Packaging designed for efficient storage, transport, and strong shelf presence.", "/images/flexible-packaging.jpg"], ["BOX", "Rigid & Corrugated", "Protective boxes and corrugated solutions for shipping, retail, and industrial needs.", "/images/corrugated-packaging.jpg"], ["CUSTOM", "Custom Packaging", "Tailored packaging structures and finishes designed around your product and brand.", "/images/custom-packaging.jpg"]],
    portfolio: "View Portfolio", together: "Let's Work Together", togetherTitle: "READY TO MOVE YOUR PACKAGING?", togetherText: "Tell us what you are making, how it needs to perform, and where you want it to go. We'll help shape the right packaging solution.", quote: "Request a Quote"
  },
  id: {
    eyebrow: "Solusi Kemasan", title1: "KEMASAN", title2: "YANG MENGUATKAN.",
    description: "MovinPack membantu bisnis menciptakan solusi kemasan yang melindungi produk, memperkuat nilai merek, dan siap memenuhi kebutuhan produksi nyata.", start: "Mulai Proyek", portfolioCta: "Lihat Portofolio", what: "Layanan Kami", whatTitle: "Dari ide kemasan hingga solusi siap produksi.",
    benefits: [["Melindungi Produk", "Kemasan yang aman dan andal"], ["Memperkuat Merek", "Desain yang menambah nilai bisnis"], ["Siap Produksi", "Dari konsep hingga produksi massal"]],
    services: [["01", "Kemasan Kustom", "Konsep kemasan yang disesuaikan dengan dimensi produk, kebutuhan handling, dan identitas merek."], ["02", "Dukungan Produksi", "Dukungan praktis mulai dari spesifikasi dan sampling hingga koordinasi produksi."], ["03", "Optimasi Kemasan", "Meningkatkan perlindungan, kemudahan penggunaan, tampilan, dan efisiensi biaya pada berbagai format kemasan."]],
    capabilities: "Kapabilitas", capabilitiesTitle: "Kemasan yang dirancang untuk produk dan merek Anda.",
    projects: [["FLEXIBLE", "Kemasan Fleksibel", "Kemasan yang dirancang untuk penyimpanan, transportasi, dan tampilan produk yang optimal.", "/images/flexible-packaging.jpg"], ["BOX", "Kemasan Rigid & Corrugated", "Solusi box dan corrugated untuk kebutuhan pengiriman, retail, dan industri.", "/images/corrugated-packaging.jpg"], ["CUSTOM", "Kemasan Kustom", "Struktur dan finishing kemasan yang disesuaikan dengan produk dan identitas merek Anda.", "/images/custom-packaging.jpg"]],
    portfolio: "Lihat Portofolio", together: "Mari Bekerja Sama", togetherTitle: "SIAP MENGEMBANGKAN KEMASAN ANDA?", togetherText: "Ceritakan produk Anda, kebutuhan penggunaannya, dan target yang ingin dicapai. Kami akan membantu membentuk solusi kemasan yang tepat.", quote: "Minta Penawaran"
  }
};

export default function Home() {
  const { language } = useLanguage();
  const t = content[language];
  return (
    <main>
<section className="container pt-14 md:pt-20 pb-20 md:pb-24">
  <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-10 lg:gap-12 items-center min-h-[650px]">

    {/* LEFT — HERO TEXT */}
    <div className="min-w-0">
      <div className="eyebrow">{t.eyebrow}</div>

      <h1 className="display mt-5 leading-[0.92]">
        <span className="block whitespace-nowrap">
          {t.title1}
        </span>
        <span className="block text-[#4E6A5B]">
          {t.title2}
        </span>
      </h1>

      <p className="text-lg md:text-xl leading-8 text-black/65 max-w-xl mt-8">
        {t.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-7">
        <Link href="/contact" className="btn btn-dark">
          {t.start} →
        </Link>

        <Link href="/portfolio" className="btn btn-light">
          {t.portfolioCta} →
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 gap-5 mt-12 max-w-2xl">
        {t.benefits.map(([title, text]) => (
          <div
            key={title}
            className="border-t border-black/15 pt-4"
          >
            <div className="text-sm font-bold">{title}</div>
            <p className="text-sm text-black/55 leading-6 mt-1">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT — HERO IMAGE */}
    <div className="relative min-h-[520px] lg:min-h-[650px] rounded-[32px] overflow-hidden bg-[#D9CDBB] flex items-center justify-center">

      <img
        src="/images/hero-packaging.jpg"
        alt="Professional MovinPack packaging solutions"
        className="w-full h-full object-contain object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#16201D]/55 via-transparent to-transparent pointer-events-none" />

      <div className="absolute left-7 bottom-7 text-white font-black text-3xl md:text-4xl tracking-[-.05em]">
        MOVINPACK.
        <br />
        PACKAGING.
      </div>
    </div>

  </div>
</section>
      <section className="container py-20"><div className="max-w-3xl"><div className="eyebrow">{t.what}</div><h2 className="section-title mt-4">{t.whatTitle}</h2></div><div className="grid md:grid-cols-3 gap-5 mt-12">{t.services.map(([number,title,description])=><div className="card p-7 bg-white/45" key={number}><div className="text-sm font-bold text-[#4E6A5B]">{number}</div><h3 className="text-2xl font-bold mt-12">{title}</h3><p className="text-black/55 leading-7 mt-4">{description}</p></div>)}</div></section>
      <section className="container py-20"><div className="max-w-3xl"><div className="eyebrow">{t.capabilities}</div><h2 className="section-title mt-4">{t.capabilitiesTitle}</h2></div><div className="grid md:grid-cols-3 gap-5 mt-12">{t.projects.map(([tag,title,description,image]) => <div key={tag} className="group"><div className="aspect-[4/3] rounded-[24px] bg-[#D9CDBB] overflow-hidden relative"><img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" /><div className="absolute top-6 left-6 text-xs font-bold text-white">{tag}</div></div><h3 className="text-xl font-bold mt-5">{title}</h3><p className="text-black/55 mt-2 leading-6">{description}</p></div>)}</div><Link href="/portfolio" className="btn btn-light mt-10">{t.portfolio} →</Link></section>
      <section className="bg-[#4E6A5B] text-white mt-20"><div className="container py-24 grid md:grid-cols-[1.1fr_.9fr] gap-12 items-center"><div className="min-w-0"><div className="eyebrow text-white/70">{t.together}</div><h2 className="mt-4 font-black text-[clamp(2.7rem,5.4vw,5.5rem)] leading-[.9] tracking-[-.055em] max-w-[700px] break-words">{t.togetherTitle}</h2></div><div className="min-w-0 max-w-xl"><p className="text-white/75 text-lg leading-8">{t.togetherText}</p><Link href="/contact" className="btn bg-white text-[#16201D] mt-7">{t.quote} →</Link></div></div></section>
    </main>
  );
}
