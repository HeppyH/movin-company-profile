"use client";

import Link from "next/link";
import { useLanguage } from "../components/LanguageProvider";

const content = {
  en: {
    eyebrow: "Packaging Solutions",
    title1: "PACKAGING",
    title2: "THAT MOVES.",
    description:
      "MOVIN helps businesses create packaging that protects products, communicates value, and is ready for real-world production.",
    start: "Start a Project",
    what: "What we do",
    whatTitle: "From packaging idea to production-ready solution.",
    services: [
      [
        "01",
        "Custom Packaging",
        "Packaging concepts tailored to product dimensions, handling requirements, and brand identity.",
      ],
      [
        "02",
        "Production Support",
        "Practical support from specification and sampling through production coordination.",
      ],
      [
        "03",
        "Packaging Optimization",
        "Improve protection, usability, presentation, and cost efficiency across packaging formats.",
      ],
    ],
    capabilities: "Capabilities",
    capabilitiesTitle:
      "Packaging built around your product and your brand.",
    projects: [
      [
        "FLEXIBLE",
        "Flexible Packaging",
        "Packaging designed for efficient storage, transport, and strong shelf presence.",
      ],
      [
        "BOX",
        "Rigid & Corrugated",
        "Protective boxes and corrugated solutions for shipping, retail, and industrial needs.",
      ],
      [
        "BRAND",
        "Brand Packaging",
        "Packaging systems that turn every shipment and product interaction into a brand experience.",
      ],
    ],
    portfolio: "View Portfolio",
    together: "Let's work together",
    togetherTitle: "READY TO MOVE YOUR PACKAGING?",
    togetherText:
      "Tell us what you are making, how it needs to perform, and where you want it to go. We'll help shape the packaging solution.",
    quote: "Request a Quote",
  },

  id: {
    eyebrow: "Solusi Kemasan",
    title1: "KEMASAN",
    title2: "YANG BERGERAK.",
    description:
      "MOVIN membantu bisnis menciptakan kemasan yang melindungi produk, menyampaikan nilai merek, dan siap untuk kebutuhan produksi nyata.",
    start: "Mulai Proyek",
    what: "Layanan Kami",
    whatTitle:
      "Dari ide kemasan hingga solusi yang siap diproduksi.",
    services: [
      [
        "01",
        "Kemasan Custom",
        "Konsep kemasan yang disesuaikan dengan dimensi produk, kebutuhan handling, dan identitas merek.",
      ],
      [
        "02",
        "Dukungan Produksi",
        "Dukungan praktis mulai dari spesifikasi dan sampling hingga koordinasi produksi.",
      ],
      [
        "03",
        "Optimasi Kemasan",
        "Meningkatkan perlindungan, kemudahan penggunaan, tampilan, dan efisiensi biaya kemasan.",
      ],
    ],
    capabilities: "Kapabilitas",
    capabilitiesTitle:
      "Kemasan yang dirancang sesuai produk dan identitas merek Anda.",
    projects: [
      [
        "FLEXIBLE",
        "Kemasan Flexible",
        "Kemasan yang dirancang untuk penyimpanan, transportasi, dan tampilan produk yang optimal.",
      ],
      [
        "BOX",
        "Rigid & Corrugated",
        "Solusi box dan corrugated untuk kebutuhan pengiriman, retail, dan industri.",
      ],
      [
        "BRAND",
        "Brand Packaging",
        "Sistem kemasan yang menciptakan pengalaman merek yang konsisten di setiap produk.",
      ],
    ],
    portfolio: "Lihat Portofolio",
    together: "Mari Bekerja Sama",
    togetherTitle: "SIAP MENINGKATKAN KEMASAN ANDA?",
    togetherText:
      "Ceritakan produk Anda, kebutuhan penggunaannya, dan target yang ingin dicapai. Kami akan membantu membentuk solusi kemasan yang tepat.",
    quote: "Minta Penawaran",
  },
};

export default function Home() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main>
      {/* HERO */}
      <section className="container pt-20 md:pt-28 pb-24">
        <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-end">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>

            <h1 className="display mt-5">
              {t.title1}
              <br />
              <span className="text-[#4E6A5B]">{t.title2}</span>
            </h1>
          </div>

          <div className="pb-2">
            <p className="text-xl leading-8 text-black/65 max-w-lg">
              {t.description}
            </p>

            <Link
              href="/contact"
              className="btn btn-dark mt-7"
            >
              {t.start} →
            </Link>
          </div>
        </div>

        {/* HERO IMAGE AREA */}
        <div className="mt-16 rounded-[32px] overflow-hidden min-h-[430px] bg-[#D9CDBB] relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(255,255,255,.6),transparent_28%),linear-gradient(125deg,#d9cdbb,#9aa895)]" />

          <div className="absolute left-8 bottom-8 text-[#16201D] font-black text-5xl md:text-7xl tracking-[-.06em]">
            MOVIN
            <br />
            PACKAGING.
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container py-20">
        <div className="max-w-3xl">
          <div className="eyebrow">{t.what}</div>

          <h2 className="section-title mt-4">
            {t.whatTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {t.services.map(([number, title, description]) => (
            <div
              className="card p-7 bg-white/45"
              key={number}
            >
              <div className="text-sm font-bold text-[#4E6A5B]">
                {number}
              </div>

              <h3 className="text-2xl font-bold mt-12">
                {title}
              </h3>

              <p className="text-black/55 leading-7 mt-4">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="container py-20">
        <div className="max-w-3xl">
          <div className="eyebrow">{t.capabilities}</div>

          <h2 className="section-title mt-4">
            {t.capabilitiesTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {t.projects.map(([tag, title, description]) => (
            <div key={tag} className="group">
              <div className="aspect-[4/3] rounded-[24px] bg-[#D9CDBB] overflow-hidden relative">
                <div className="absolute inset-8 rounded-2xl border border-black/10 bg-white/35 group-hover:scale-105 transition" />

                <div className="absolute top-6 left-6 text-xs font-bold">
                  {tag}
                </div>
              </div>

              <h3 className="text-xl font-bold mt-5">
                {title}
              </h3>

              <p className="text-black/55 mt-2 leading-6">
                {description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="btn btn-light mt-10"
        >
          {t.portfolio} →
        </Link>
      </section>

      {/* CTA */}
      <section className="bg-[#4E6A5B] text-white mt-20">
        <div className="container py-24 grid md:grid-cols-2 gap-10 items-end">
          <div>
            <div className="eyebrow text-white/70">
              {t.together}
            </div>

            <h2 className="section-title mt-4">
              {t.togetherTitle}
            </h2>
          </div>

          <div>
            <p className="text-white/75 text-lg leading-8">
              {t.togetherText}
            </p>

            <Link
              href="/contact"
              className="btn bg-white text-[#16201D] mt-7"
            >
              {t.quote} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
