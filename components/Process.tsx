"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    n: "01",
    title: "Discovery & Strategy",
    desc: "We dive deep into your business goals, target audience, and market positioning to craft a tailored digital strategy.",
  },
  {
    n: "02",
    title: "UX/UI Design",
    desc: "I design high-fidelity, conversion-optimized interfaces that perfectly reflect your brand's unique identity and vision.",
  },
  {
    n: "03",
    title: "Development",
    desc: "Using modern technologies like Next.js and GSAP, I build your site from scratch for flawless performance and smooth animations.",
  },
  {
    n: "04",
    title: "Testing & Launch",
    desc: "Rigorous testing across all devices ensures a bug-free experience before we confidently launch your new site to the world.",
  },
];

export default function Process() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.to(".process-header", {
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

      // Steps Animation - Individual triggers for each step
      const processSteps = gsap.utils.toArray<HTMLElement>(".process-step");
      processSteps.forEach((step) => {
        gsap.to(step, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%", // animate when the step enters the viewport
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      id="process"
      ref={container}
      className="px-6 md:px-14 py-24 md:py-40 max-w-content mx-auto"
    >
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
        {/* Sticky Left Column */}
        <div className="lg:sticky lg:top-40">
          <span className="process-header opacity-0 translate-y-8 eyebrow block mb-6 uppercase tracking-widest text-gold text-sm font-semibold">
            The Process
          </span>
          <h2 className="process-header opacity-0 translate-y-8 font-serif text-5xl md:text-7xl text-cream leading-[1.05]">
            From idea to <span className="italic text-gold-bright">online</span>.
          </h2>
          <p className="process-header opacity-0 translate-y-8 mt-8 text-cream-dim text-lg leading-relaxed max-w-sm">
            A streamlined, transparent workflow designed to take you from initial
            concept to a high-performing digital experience without the headache.
          </p>
        </div>

        {/* Scrolling Right Column */}
        <div className="flex flex-col">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="process-step opacity-0 translate-y-12 group relative py-10 md:py-14 border-t border-border/60 last:border-b flex flex-col md:flex-row gap-4 md:gap-12 transition-colors hover:bg-surface/50 overflow-hidden"
            >
              {/* Vertical line accent on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top hidden md:block" />

              <div className="font-serif text-5xl md:text-6xl text-gold/30 group-hover:text-gold transition-colors duration-500 w-24 shrink-0 md:pl-6">
                {s.n}
              </div>

              <div className="flex-1 transform transition-transform duration-500 md:group-hover:translate-x-4">
                <h3 className="font-serif text-3xl md:text-4xl text-cream mb-4">
                  {s.title}
                </h3>
                <p className="text-cream-dim text-base md:text-lg leading-relaxed max-w-md">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
