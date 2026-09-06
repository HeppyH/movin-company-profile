"use client";

import { useLanguage } from "../../components/LanguageProvider";

const content = {
  en: {
    eyebrow: "Contact",
    title: <>LET'S MAKE<br />SOMETHING<br /><span className="text-[#4E6A5B]">MOVE.</span></>,
    description: "Have a packaging requirement, project brief, or product to discuss? Send us the basics and we'll get back to you.",
    email: "nurheppyhutajulu@gmail.com",
    phone: "+62 852 7083 6742",
    country: "Indonesia",
    name: "Name", namePlaceholder: "Your name",
    emailLabel: "Email", emailPlaceholder: "you@company.com",
    project: "Project", projectPlaceholder: "What are you looking to package?",
    message: "Message", messagePlaceholder: "Tell us about your product, quantity, dimensions, or requirements.",
    button: "Send Inquiry →",
    note: "Demo form: connect this button to your email service or backend before launch.",
  },
  id: {
    eyebrow: "Kontak",
    title: <>MARI BUAT<br />SESUATU YANG<br /><span className="text-[#4E6A5B]">BERGERAK.</span></>,
    description: "Punya kebutuhan kemasan, project brief, atau produk yang ingin didiskusikan? Kirimkan detailnya dan kami akan menghubungi Anda.",
    email: "nurheppyhutajulu@gmail.com",
    phone: "+62 852 7083 6742",
    country: "Indonesia",
    name: "Nama", namePlaceholder: "Nama Anda",
    emailLabel: "Email", emailPlaceholder: "anda@perusahaan.com",
    project: "Proyek", projectPlaceholder: "Produk apa yang ingin Anda kemas?",
    message: "Pesan", messagePlaceholder: "Ceritakan produk, jumlah, dimensi, atau kebutuhan Anda.",
    button: "Kirim Inquiry →",
    note: "Form demo: hubungkan tombol ini ke layanan email atau backend sebelum website diluncurkan.",
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main className="container py-24">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <div className="eyebrow">{t.eyebrow}</div>
          <h1 className="section-title mt-4">{t.title}</h1>
          <p className="text-lg text-black/60 leading-8 mt-7 max-w-lg">{t.description}</p>
          <div className="mt-10 text-sm text-black/65 leading-7">
            {t.email}<br />{t.phone}<br />{t.country}
          </div>
        </div>

        <form className="card bg-white/50 p-7 md:p-9 space-y-5">
          <div><label className="text-sm font-bold">{t.name}</label><input className="w-full mt-2 p-4 rounded-xl bg-white border border-black/10 outline-none" placeholder={t.namePlaceholder} /></div>
          <div><label className="text-sm font-bold">{t.emailLabel}</label><input type="email" className="w-full mt-2 p-4 rounded-xl bg-white border border-black/10 outline-none" placeholder={t.emailPlaceholder} /></div>
          <div><label className="text-sm font-bold">{t.project}</label><input className="w-full mt-2 p-4 rounded-xl bg-white border border-black/10 outline-none" placeholder={t.projectPlaceholder} /></div>
          <div><label className="text-sm font-bold">{t.message}</label><textarea rows={5} className="w-full mt-2 p-4 rounded-xl bg-white border border-black/10 outline-none" placeholder={t.messagePlaceholder} /></div>
          <button type="button" className="btn btn-dark w-full justify-center">{t.button}</button>
          <p className="text-xs text-black/40">{t.note}</p>
        </form>
      </div>
    </main>
  );
}
