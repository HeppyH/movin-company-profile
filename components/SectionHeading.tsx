export default function SectionHeading({ eyebrow, title, text }: { eyebrow:string; title:string; text?:string }) {
  return <div className="max-w-3xl"><div className="eyebrow">{eyebrow}</div><h2 className="section-title mt-4">{title}</h2>{text && <p className="mt-6 text-lg text-black/60 leading-8">{text}</p>}</div>;
}