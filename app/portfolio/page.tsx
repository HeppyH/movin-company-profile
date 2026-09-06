import SectionHeading from "../../components/SectionHeading";

const projects = [
  ["01", "FMCG Packaging", "A packaging direction focused on strong shelf presence, efficient handling, and clear product communication.", "/images/paper-packaging.jpg"],
  ["02", "Industrial Packaging", "Protective packaging concepts for products that need dependable transport and handling performance.", "/images/factory-packaging.jpg"],
  ["03", "E-commerce Packaging", "Shipping-ready packaging designed to balance protection, presentation, and material efficiency.", "/images/corrugated-packaging.jpg"],
  ["04", "Custom Brand System", "A flexible packaging family designed to create a consistent brand experience across products.", "/images/custom-packaging.jpg"],
  ["05", "Flexible Packaging", "Flexible formats designed for practical storage, transport, and product presentation.", "/images/flexible-packaging.jpg"],
  ["06", "Sustainable Packaging", "Packaging directions that consider material efficiency and more sustainable choices.", "/images/sustainable-packaging.jpg"],
];

export default function Portfolio() {
  return (
    <main className="container py-24">
      <SectionHeading eyebrow="Selected Work" title="Packaging concepts with purpose." />
      <div className="grid md:grid-cols-2 gap-8 mt-14">
        {projects.map(([n, t, d, image]) => (
          <article key={n}>
            <div className="aspect-[16/10] rounded-[28px] relative overflow-hidden bg-[#D9CDBB]">
              <img src={image} alt={t} className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute top-6 left-6 font-bold text-xs text-white">{n}</span>
            </div>
            <h3 className="text-2xl font-bold mt-5">{t}</h3>
            <p className="text-black/55 leading-7 mt-2 max-w-xl">{d}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
