"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MagneticButton from "@/components/MagneticButton";
import StackIcon from "tech-stack-icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type FloatingIcon = {
  name: Parameters<typeof StackIcon>[0]["name"];
  top: string;
  left: string;
  scale: number;
  rotation: number;
};

const floatingIcons: FloatingIcon[] = [
  { name: "react", top: "15%", left: "12%", scale: 2.5, rotation: -15 },
  { name: "nextjs", top: "70%", left: "15%", scale: 3, rotation: 10 },
  { name: "typescript", top: "15%", left: "80%", scale: 2.2, rotation: 20 },
  { name: "tailwindcss", top: "75%", left: "78%", scale: 3.5, rotation: -10 },
  { name: "figma", top: "45%", left: "6%", scale: 2, rotation: 5 },
  { name: "gsap", top: "45%", left: "88%", scale: 2.8, rotation: -25 },
];

export default function CTA() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Content reveal
      const elements = gsap.utils.toArray<HTMLElement>(".cta-animate");
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

      // Floating icons animation
      gsap.to(".floating-icon", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-25, 25)",
        duration: "random(4, 7)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    },
    { scope: container }
  );

  return (
    <section
      id="contact"
      ref={container}
      className="px-6 md:px-14 py-20 md:py-32 max-w-content mx-auto relative"
    >
      <div className="bg-surface/50 border border-border/60 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden transition-colors hover:bg-surface/80 duration-700 group">
        
        {/* Floating Tech Stack Icons */}
        {floatingIcons.map((icon, index) => (
          <div
            key={index}
            className="floating-icon absolute pointer-events-none select-none z-0"
            style={{
              top: icon.top,
              left: icon.left,
              transform: `scale(${icon.scale}) rotate(${icon.rotation}deg)`,
            }}
          >
            <div className="w-10 h-10 opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700">
              <StackIcon name={icon.name} />
            </div>
          </div>
        ))}

        <div className="relative z-10 flex flex-col items-center">
          <span className="cta-animate opacity-0 translate-y-10 eyebrow block mb-6 uppercase tracking-widest text-gold text-sm font-semibold">
            Get in touch
          </span>
          
          <h2 className="cta-animate opacity-0 translate-y-10 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.05] text-cream mb-10 max-w-3xl mx-auto">
            Have a project in mind? <br/>
            <span className="italic text-gold-bright">Let's build something people remember.</span>
          </h2>
          
          <div className="cta-animate opacity-0 translate-y-10 mt-6 flex justify-center">
            <MagneticButton href="mailto:hello@yash.dev" variant="primary">
              <span className="text-xl px-4">Start a Project ↗</span>
            </MagneticButton>
          </div>
          
          <p className="cta-animate opacity-0 translate-y-10 mt-14 font-mono text-xs tracking-widest text-cream-dim uppercase">
            Usually replies within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
