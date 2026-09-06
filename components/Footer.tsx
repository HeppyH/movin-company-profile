import Link from "next/link";
export default function Footer() {
  return <footer className="bg-[#16201D] text-white mt-24">
    <div className="container py-16 grid md:grid-cols-3 gap-12">
      <div><div className="font-black text-3xl tracking-[-.06em]">MovinPack<span className="text-[#D9CDBB]">.</span></div><p className="text-white/60 mt-4 max-w-sm">Packaging solutions designed to protect products, strengthen brands, and move businesses forward.</p></div>
      <div><div className="font-bold mb-4">Explore</div><div className="grid gap-2 text-white/65 text-sm"><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/portfolio">Portfolio</Link><Link href="/contact">Contact</Link></div></div>
      <div><div className="font-bold mb-4">Contact</div><p className="text-white/65 text-sm">hello@movin.example<br/>+62 812 0000 0000<br/>Indonesia</p></div>
    </div>
    <div className="container py-6 border-t border-white/10 text-xs text-white/40">© 2026 MovinPack. All rights reserved.</div>
  </footer>;
}
