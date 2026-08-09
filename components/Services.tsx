"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Business Websites",
    desc: "Modern websites for businesses that need a strong, credible online presence.",
    bestFor: "Local businesses, agencies, professionals, shops",
  },
  {
    title: "Landing Pages",
    desc: "High-converting landing pages for products, campaigns and startups.",
    bestFor: "Startups, SaaS, marketing campaigns",
  },
  {
    title: "E-commerce",
    desc: "Complete online stores with product catalogs, payments and order management.",
    bestFor: "Retail, fashion, jewellery, D2C brands",
  },
  {
    title: "Custom Web Apps",
    desc: "More complex platforms built around your specific business requirements.",
    bestFor: "Startups, internal tools, SaaS products",
  },
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.from(".service-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      // Cards Content Stagger Reveal
      const cardContents = gsap.utils.toArray<HTMLElement>(".service-content");
      gsap.from(cardContents, {
        y: 50,
        opacity: 0,
        scale: 0.95,
        rotateX: -10,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        transformOrigin: "bottom center",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      id="services"
      ref={container}
      className="px-6 md:px-14 py-24 md:py-40 max-w-content mx-auto"
    >
      <div className="mb-16 md:mb-24">
        <span className="service-header eyebrow block mb-4 uppercase tracking-widest text-gold text-sm font-semibold">
          Services
        </span>
        <h2 className="service-header font-serif text-5xl md:text-7xl text-cream leading-[1.05]">
          What I can <span className="italic text-gold-bright">build</span>.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-[2rem] overflow-hidden">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-surface hover:bg-gold-pale/30 transition-all duration-500 p-10 md:p-14 min-h-[320px]"
            style={{ perspective: "1000px" }}
          >
            <div className="service-content h-full flex flex-col justify-between">
              <div>
                <span className="text-gold text-2xl block mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 origin-center">
                  ✦
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-cream mb-4">
                  {s.title}
                </h3>
                <p className="text-cream-dim text-base md:text-lg leading-relaxed mb-10 max-w-sm">
                  {s.desc}
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="h-px w-12 bg-gold/30 mb-4 group-hover:w-24 group-hover:bg-gold transition-all duration-500" />
                <p className="font-mono text-[11px] tracking-wider text-cream-dim">
                  BEST FOR —{" "}
                  <span className="text-cream font-semibold">{s.bestFor}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
