import Link from "next/link";
export default function Navbar() {
  return <header className="sticky top-0 z-50 bg-[#F6F4EE]/90 backdrop-blur border-b border-black/10">
    <div className="container h-20 flex items-center justify-between">
      <Link href="/" className="font-black text-2xl tracking-[-.06em]">MOVIN<span className="text-[#4E6A5B]">.</span></Link>
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
        <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/portfolio">Portfolio</Link><Link href="/contact">Contact</Link>
      </nav>
      <Link href="/contact" className="btn btn-dark text-sm">Request a Quote →</Link>
    </div>
  </header>;
}