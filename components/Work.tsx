"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const projects = [
  {
    num: "01",
    category: "Luxury / E-commerce",
    name: "AJA Jewellery",
    desc: "Redesigned the digital presence of a local jewellery business with a premium visual identity, product-focused layouts and a mobile-first experience.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    image: "https://cdn.dribbble.com/userupload/46741479/file/5276827f2d5197ae339f57483d9b4d1f.png?resize=1024x768&vertical=center",
    reverse: false,
  },
  {
    num: "02",
    category: "Hospitality / Local business",
    name: "Restaurant Website",
    desc: "A menu-first, reservation-ready website built for a local restaurant — fast to load, easy to update, built to drive footfall.",
    tech: ["Next.js", "Tailwind"],
    image: "https://images.openai.com/static-rsc-4/HRq04S1Jd4VpupgXjDfjZijwWxtrR7aFfVx3MsDkUaCrpkKdi-atl20019wGP4meOCw_mcLTUjDwybaRB86k1jWyuibuSH9fhCHc5a-Uz_hWM9z90_8xJ-EX_P4K-q-nq8Q5UycI5GTc0ZQs0dEAY9wfbsOEyoIcEoVwo3dSDXOUvOILm4d0QeyANSrJZVR6?purpose=fullsize",
    reverse: true,
  },
  {
    num: "03",
    category: "Startup / SaaS",
    name: "SaaS Landing Page",
    desc: "A conversion-focused landing page for an early-stage SaaS product, with a pricing structure built to qualify leads before they talk to sales.",
    tech: ["Next.js", "Framer Motion"],
    image: "https://images.openai.com/static-rsc-4/SflTSZSGTugIlqlRIfjHEr71U2eNqTZ8aA3U7OGIjZI_pWozDbKXdYz1zp5DVmBpM8aqqY9rDiXzUyimw8apbPAPexC3eKfRDgZPOBBsVBcckmhjlbtaVcUzFLtmJb6F8qpC6f2cFRrOaJNuLP3u8H2eZ0nKZiyIKToNEjDhE-WyXgx9VL0xbtp99UPpCdqY?purpose=fullsize",
    reverse: false,
  },
];

function ProjectVisual({ label, image, name }: { label: string; image: string; name: string }) {
  return (
    <motion.div
      whileHover="hover"
      className="group relative aspect-[4/3] rounded-2xl border border-border overflow-hidden bg-bg-2 shadow-sm"
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cream/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
      <span className="absolute bottom-4 left-4 font-mono text-xs text-bg bg-gold/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
        {label}
      </span>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-14 py-24 md:py-36 max-w-content mx-auto">
      <Reveal className="flex justify-between items-end flex-wrap gap-5 mb-14">
        <div>
          <span className="eyebrow">Selected work</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Case studies, not screenshots.</h2>
        </div>
      </Reveal>

      {projects.map((p) => (
        <Reveal key={p.num} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-14 border-t border-border last:border-b">
          <div className={p.reverse ? "md:order-2" : "md:order-1"}>
            <ProjectVisual label={`${p.name.split(" ")[0]} — ${p.num}`} image={p.image} name={p.name} />
          </div>
          <div className={p.reverse ? "md:order-1" : "md:order-2"}>
            <div className="font-mono text-xs text-cream-dim mb-3">
              {p.num} · {p.category}
            </div>
            <h3 className="font-serif text-3xl md:text-4xl mb-4">{p.name}</h3>
            <p className="text-cream-dim text-[15px] leading-relaxed max-w-md mb-5">{p.desc}</p>
            <div className="flex gap-2 flex-wrap mb-5">
              {p.tech.map((t) => (
                <span key={t} className="font-mono text-[11px] border border-border rounded-full px-3 py-1.5 text-cream-dim">
                  {t}
                </span>
              ))}
            </div>
            <a href="#" className="text-sm text-gold-bright inline-flex items-center gap-1.5">
              View project ↗
            </a>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
