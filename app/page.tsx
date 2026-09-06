import Link from "next/link";
import SectionHeading from "../components/SectionHeading";

const services = [
  ["01","Custom Packaging","Packaging concepts tailored to product dimensions, handling requirements, and brand identity."],
  ["02","Production Support","Practical support from specification and sampling through production coordination."],
  ["03","Packaging Optimization","Improve protection, usability, presentation, and cost efficiency across packaging formats."]
];
const projects = [
  ["FLEXIBLE","Flexible Packaging","Packaging designed for efficient storage, transport, and strong shelf presence."],
  ["BOX","Rigid & Corrugated","Protective boxes and corrugated solutions for shipping, retail, and industrial needs."],
  ["BRAND","Brand Packaging","Packaging systems that turn every shipment and product interaction into a brand experience."]
];

export default function Home() {
  return <main>
    <section className="container pt-20 md:pt-28 pb-24">
      <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-end">
        <div><div className="eyebrow">Packaging Solutions</div><h1 className="display mt-5">PACKAGING<br/><span className="text-[#4E6A5B]">THAT MOVES.</span></h1></div>
        <div className="pb-2"><p className="text-xl leading-8 text-black/65 max-w-lg">MOVIN helps businesses create packaging that protects products, communicates value, and is ready for real-world production.</p><Link href="/contact" className="btn btn-dark mt-7">Start a Project →</Link></div>
      </div>
      <div className="mt-16 rounded-[32px] overflow-hidden min-h-[430px] bg-[#D9CDBB] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(255,255,255,.6),transparent_28%),linear-gradient(125deg,#d9cdbb,#9aa895)]"/>
        <div className="absolute left-8 bottom-8 text-[#16201D] font-black text-5xl md:text-7xl tracking-[-.06em]">MAKE IT<br/>MOVE.</div>
      </div>
    </section>

    <section className="container py-20"><SectionHeading eyebrow="What we do" title="From packaging idea to production-ready solution."/>
      <div className="grid md:grid-cols-3 gap-5 mt-12">{services.map(([n,t,d])=><div className="card p-7 bg-white/45" key={n}><div className="text-sm font-bold text-[#4E6A5B]">{n}</div><h3 className="text-2xl font-bold mt-12">{t}</h3><p className="text-black/55 leading-7 mt-4">{d}</p></div>)}</div>
    </section>

    <section className="container py-20"><SectionHeading eyebrow="Capabilities" title="Packaging built around your product and your brand."/>
      <div className="grid md:grid-cols-3 gap-5 mt-12">{projects.map(([tag,t,d],i)=><div key={tag} className="group"><div className="aspect-[4/3] rounded-[24px] bg-[#D9CDBB] overflow-hidden relative"><div className="absolute inset-8 rounded-2xl border border-black/10 bg-white/35 group-hover:scale-105 transition"/><div className="absolute top-6 left-6 text-xs font-bold">{tag}</div></div><h3 className="text-xl font-bold mt-5">{t}</h3><p className="text-black/55 mt-2 leading-6">{d}</p></div>)}</div>
      <Link href="/portfolio" className="btn btn-light mt-10">View Portfolio →</Link>
    </section>

    <section className="bg-[#4E6A5B] text-white mt-20"><div className="container py-24 grid md:grid-cols-2 gap-10 items-end"><div><div className="eyebrow text-white/70">Let's work together</div><h2 className="section-title mt-4">READY TO MOVE<br/>YOUR PACKAGING?</h2></div><div><p className="text-white/75 text-lg leading-8">Tell us what you are making, how it needs to perform, and where you want it to go. We'll help shape the packaging solution.</p><Link href="/contact" className="btn bg-white text-[#16201D] mt-7">Request a Quote →</Link></div></div></section>
  </main>;
}