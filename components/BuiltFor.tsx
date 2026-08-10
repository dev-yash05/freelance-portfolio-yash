"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const segments = [
  "Jewellery",
  "Restaurants",
  "Real Estate",
  "Creators",
  "Startups",
  "Agencies",
  "E-Commerce",
  "Local Businesses",
];

export default function BuiltFor() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Eyebrow animation
      gsap.from(".eyebrow-text", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      });

      // Words stagger reveal
      const words = gsap.utils.toArray<HTMLElement>(".word-item");
      gsap.from(words, {
        y: 40,
        scale: 0.85,
        filter: "blur(10px)",
        opacity: 0,
        duration: 1.2,
        stagger: 0.06,
        ease: "power3.out",
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
      ref={container}
      className="px-6 md:px-14 py-32 md:py-48 max-w-content mx-auto"
    >
      <div className="flex flex-col items-center text-center">
        <span className="eyebrow-text eyebrow mb-12 block uppercase tracking-widest text-gold text-sm font-semibold">
          Industries I partner with
        </span>

        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 md:gap-x-10 md:gap-y-6 font-serif text-[40px] sm:text-6xl md:text-7xl lg:text-[80px] text-cream-dim leading-[1.1]">
          {segments.map((s, i) => (
            <React.Fragment key={s}>
              <div className="overflow-hidden inline-flex py-2 group cursor-default select-none">
                <span className="word-item relative inline-block">
                  <span className="inline-block transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:-translate-y-[110%] group-hover:opacity-0">
                    {s}
                  </span>
                  <span className="absolute left-0 top-0 inline-block translate-y-[110%] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:translate-y-0 group-hover:opacity-100 text-gold italic drop-shadow-sm">
                    {s}
                  </span>
                </span>
              </div>
              {i !== segments.length - 1 && (
                <div className="overflow-hidden inline-flex py-1">
                  <span className="word-item text-gold/70 text-3xl md:text-5xl font-sans font-light origin-bottom-left">
                    ✦
                  </span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
