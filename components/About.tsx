"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Elements stagger animation
      const elements = gsap.utils.toArray<HTMLElement>(".about-animate");
      gsap.to(elements, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
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
      id="about"
      ref={container}
      className="relative w-full py-24 md:py-48 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-25 pointer-events-none"
      >
        <source src="https://sgp.cloud.appwrite.io/v1/storage/buckets/69a433540033d5375fa5/files/6a79486f003df5341f4f/view?project=yashportfolio&impersonateuserid=&mode=admin" type="video/mp4" />
      </video>

      <div className="relative z-10 px-6 md:px-14 max-w-content mx-auto">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-16 md:gap-24 items-start">
        {/* Left Side: Headline */}
        <div>
          <span className="about-animate opacity-0 translate-y-8 eyebrow block mb-6 uppercase tracking-widest text-gold text-sm font-semibold">
            About Me
          </span>
          <h2 className="about-animate opacity-0 translate-y-8 font-serif text-5xl md:text-6xl lg:text-[72px] text-cream leading-[1.05]">
            I'm Yash. <br />
            <span className="italic text-gold-bright">I build things</span> <br />
            for the web.
          </h2>
          <div className="about-animate opacity-0 translate-y-8 mt-12 flex gap-5">
            <div className="h-16 w-px bg-gold/50" />
            <p className="font-mono text-sm tracking-wider text-cream-dim uppercase pt-1 leading-relaxed">
              Developer <br />
              Designer <br />
              Strategist
            </p>
          </div>
        </div>

        {/* Right Side: Description & Stats/Values */}
        <div className="md:pt-16">
          <p className="about-animate opacity-0 translate-y-8 text-cream-dim text-lg md:text-xl leading-relaxed mb-8">
            I'm a freelance web developer focused on creating modern,
            high-performance websites for businesses and ambitious brands.
          </p>
          <p className="about-animate opacity-0 translate-y-8 text-cream-dim text-lg md:text-xl leading-relaxed mb-14">
            I combine clean aesthetics, robust development, and strategic business
            thinking to build sites that aren't just visually impressive — they're
            precisely engineered to achieve a purpose and drive growth.
          </p>

          {/* Quick Values / Grid */}
          <div className="about-animate opacity-0 translate-y-8 grid grid-cols-2 gap-8 border-t border-border/60 pt-10">
            <div className="group cursor-default">
              <div className="text-gold text-2xl font-serif mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 origin-bottom-left">
                ✦
              </div>
              <h3 className="text-cream font-medium text-xl mb-2 font-serif">
                Design
              </h3>
              <p className="text-cream-dim text-sm leading-relaxed">
                Clean, modern, and pixel-perfect aesthetics tailored to your brand.
              </p>
            </div>
            <div className="group cursor-default">
              <div className="text-gold text-2xl font-serif mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 origin-bottom-left">
                ✦
              </div>
              <h3 className="text-cream font-medium text-xl mb-2 font-serif">
                Code
              </h3>
              <p className="text-cream-dim text-sm leading-relaxed">
                Fast, scalable, and built from scratch with industry best practices.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
