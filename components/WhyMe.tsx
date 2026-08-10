"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const points = [
  {
    n: "01",
    title: "Built for Results",
    desc: "I design with purpose. Every layout, color, and interaction is strategically crafted to guide users and convert your visitors into paying clients.",
  },
  {
    n: "02",
    title: "Pure Performance",
    desc: "I don't rely on bloated templates or heavy site builders. I write clean, custom code that loads in milliseconds, keeping your audience engaged and Google happy.",
  },
  {
    n: "03",
    title: "Transparent Process",
    desc: "No disappearing acts, no surprise fees. You get clear timelines, regular communication, and absolute reliability from the initial kickoff to the final launch.",
  },
  {
    n: "04",
    title: "Long-Term Partner",
    desc: "I don't just hand over a website and vanish. I provide ongoing support, optimization, and guidance, ensuring your digital presence scales alongside your business.",
  },
];

export default function WhyMe() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.to(".whyme-header", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      // Cards Animation
      const cards = gsap.utils.toArray<HTMLElement>(".whyme-card");
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", // trigger earlier
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="px-6 md:px-14 py-24 md:py-40 max-w-content mx-auto"
    >
      <div className="mb-16 md:mb-24 max-w-4xl">
        <span className="whyme-header opacity-0 translate-y-10 eyebrow block mb-4 uppercase tracking-widest text-gold text-sm font-semibold">
          The Difference
        </span>
        <h2 className="whyme-header opacity-0 translate-y-10 font-serif text-5xl md:text-6xl lg:text-[76px] text-cream leading-[1.05]">
          Your business isn't a template.{" "}
          <span className="italic text-gold-bright">
            Your website shouldn't be either.
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {points.map((p) => (
          <div
            key={p.n}
            className="whyme-card opacity-0 translate-y-12 relative group bg-surface/80 hover:bg-gold-pale/40 border border-border/60 rounded-[2rem] p-8 md:p-14 overflow-hidden transition-all duration-500"
          >
            {/* Giant background number */}
            <span className="absolute -right-8 -bottom-12 font-serif text-[200px] leading-none text-gold/5 group-hover:text-gold/10 transition-colors duration-500 pointer-events-none select-none">
              {p.n}
            </span>

            <div className="relative z-10">
              <div className="font-mono text-xs md:text-sm text-gold tracking-widest mb-8 block">
                {p.n} —
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-cream mb-5">
                {p.title}
              </h3>
              <p className="text-cream-dim text-base md:text-lg leading-relaxed max-w-sm">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
