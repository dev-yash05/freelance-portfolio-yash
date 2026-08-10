"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceType {
  title: string;
  desc: string;
  bestFor: string;
  icon: React.ReactNode;
  bgIcon: React.ReactNode;
}

const services: ServiceType[] = [
  {
    title: "Business Websites",
    desc: "Modern websites for businesses that need a strong, credible online presence.",
    bestFor: "Local businesses, agencies, professionals, shops",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none stroke-2">
        <rect x="15" y="25" width="70" height="50" rx="4" className="browser-frame" />
        <circle cx="23" cy="33" r="2" className="browser-dot" />
        <circle cx="31" cy="33" r="2" className="browser-dot" />
        <circle cx="39" cy="33" r="2" className="browser-dot" />
        <line x1="15" y1="43" x2="85" y2="43" className="browser-line" />
        <rect x="25" y="55" width="50" height="10" rx="2" className="browser-content" />
      </svg>
    ),
    bgIcon: (
      <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none stroke-1">
        <rect x="20" y="20" width="160" height="160" rx="8" className="bg-grid-1" />
        <path d="M60 20 L60 180 M100 20 L100 180 M140 20 L140 180" className="bg-grid-2" />
        <path d="M20 60 L180 60 M20 100 L180 100 M20 140 L180 140" className="bg-grid-2" />
      </svg>
    ),
  },
  {
    title: "Landing Pages",
    desc: "High-converting landing pages for products, campaigns and startups.",
    bestFor: "Startups, SaaS, marketing campaigns",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none stroke-2">
        <g className="target-group">
          <ellipse cx="50" cy="70" rx="30" ry="10" />
          <ellipse cx="50" cy="65" rx="20" ry="6" />
        </g>
        <g className="arrow-group">
          <path d="M50 15 L50 60" />
          <path d="M40 30 L50 15 L60 30" />
        </g>
      </svg>
    ),
    bgIcon: (
      <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none stroke-1">
        <circle cx="100" cy="100" r="40" className="bg-circle-1" />
        <circle cx="100" cy="100" r="70" className="bg-circle-2" />
        <circle cx="100" cy="100" r="100" className="bg-circle-3" />
      </svg>
    ),
  },
  {
    title: "E-commerce",
    desc: "Complete online stores with product catalogs, payments and order management.",
    bestFor: "Retail, fashion, jewellery, D2C brands",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none stroke-2">
        <path d="M35 35 C35 15, 65 15, 65 35" className="cart-handle" />
        <g className="cart-group">
          <path d="M20 35 L80 35 L70 80 L30 80 Z" />
          <line x1="40" y1="55" x2="60" y2="55" />
        </g>
      </svg>
    ),
    bgIcon: (
      <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none stroke-1">
        <path d="M0 130 C 50 130, 50 70, 100 70 C 150 70, 150 130, 200 130" className="bg-wave" />
        <path d="M0 150 C 50 150, 50 90, 100 90 C 150 90, 150 150, 200 150" className="bg-wave" />
        <path d="M0 170 C 50 170, 50 110, 100 110 C 150 110, 150 170, 200 170" className="bg-wave" />
      </svg>
    ),
  },
  {
    title: "Custom Web Apps",
    desc: "More complex platforms built around your specific business requirements.",
    bestFor: "Startups, internal tools, SaaS products",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none stroke-[1.5]">
        <rect x="25" y="25" width="20" height="20" rx="4" className="app-block" />
        <rect x="55" y="25" width="20" height="20" rx="4" className="app-block" />
        <rect x="25" y="55" width="20" height="20" rx="4" className="app-block" />
        <rect x="55" y="55" width="20" height="20" rx="4" className="app-block" />
        <path d="M45 35 L55 35 M35 45 L35 55 M65 45 L65 55 M45 65 L55 65" strokeDasharray="2 2" className="app-links" />
      </svg>
    ),
    bgIcon: (
      <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none stroke-1">
        <polygon points="100,20 169.28,60 169.28,140 100,180 30.72,140 30.72,60" className="bg-hex" />
        <polygon points="100,50 143.3,75 143.3,125 100,150 56.7,125 56.7,75" className="bg-hex" />
        <line x1="100" y1="20" x2="100" y2="50" className="bg-hex-line" />
        <line x1="169.28" y1="60" x2="143.3" y2="75" className="bg-hex-line" />
        <line x1="169.28" y1="140" x2="143.3" y2="125" className="bg-hex-line" />
        <line x1="100" y1="180" x2="100" y2="150" className="bg-hex-line" />
        <line x1="30.72" y1="140" x2="56.7" y2="125" className="bg-hex-line" />
        <line x1="30.72" y1="60" x2="56.7" y2="75" className="bg-hex-line" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: ServiceType; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  const { contextSafe } = useGSAP(() => {
    gsap.to(iconRef.current, {
      y: -5,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: index * 0.2,
    });

    switch (index) {
      case 0:
        gsap.to('.bg-grid-2', { opacity: 0.2, stagger: 0.2, duration: 2, yoyo: true, repeat: -1, ease: "sine.inOut" });
        break;
      case 1:
        gsap.to(['.bg-circle-1', '.bg-circle-2', '.bg-circle-3'], { scale: 1.05, stagger: 0.4, duration: 3, transformOrigin: 'center', yoyo: true, repeat: -1, ease: 'sine.inOut' });
        break;
      case 2:
        gsap.to('.bg-wave', { y: -10, duration: 4, yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: 0.5 });
        break;
      case 3:
        gsap.to('.bg-hex', { rotation: 5, duration: 6, transformOrigin: 'center', yoyo: true, repeat: -1, ease: 'sine.inOut' });
        break;
    }
  }, { scope: cardRef });

  const handleMouseEnter = contextSafe(() => {
    gsap.killTweensOf(['.browser-content', '.browser-dot', '.arrow-group', '.target-group', '.cart-group', '.cart-handle', '.app-block']);

    switch (index) {
      case 0:
        gsap.to('.browser-content', { y: -5, opacity: 0.5, duration: 0.3, yoyo: true, repeat: 1 });
        gsap.to('.browser-dot', { opacity: 0.3, stagger: 0.1, duration: 0.2, yoyo: true, repeat: 1 });
        break;
      case 1:
        gsap.fromTo('.arrow-group', 
          { y: -20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.4, ease: "back.out(2)" }
        );
        gsap.to('.target-group', { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1, transformOrigin: "center" });
        break;
      case 2:
        gsap.to('.cart-group', { y: -5, duration: 0.3, yoyo: true, repeat: 1, ease: "power1.inOut" });
        gsap.to('.cart-handle', { y: -2, scaleY: 1.1, duration: 0.3, yoyo: true, repeat: 1, transformOrigin: "bottom center" });
        break;
      case 3:
        gsap.to('.app-block', { 
          scale: 1.15, 
          rotation: 5, 
          stagger: 0.05, 
          duration: 0.2, 
          yoyo: true, 
          repeat: 1, 
          transformOrigin: "center",
          ease: "power2.out"
        });
        break;
    }
  });

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      className="group relative overflow-hidden bg-surface hover:bg-gold-pale/30 transition-all duration-500 p-10 md:p-14 min-h-[320px] flex flex-col"
      style={{ perspective: "1000px" }}
    >
      <div 
        ref={bgRef}
        className="absolute -bottom-10 -right-10 w-72 h-72 text-gold opacity-10 pointer-events-none transform transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4 group-hover:-translate-x-4"
      >
        {service.bgIcon}
      </div>

      <div className="service-content relative z-10 h-full flex flex-col justify-between">
        <div>
          <div ref={iconRef} className="mb-6 w-12 h-12 text-gold origin-center">
            {service.icon}
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-cream mb-4">
            {service.title}
          </h3>
          <p className="text-cream-dim text-base md:text-lg leading-relaxed mb-10 max-w-sm">
            {service.desc}
          </p>
        </div>
        
        <div className="mt-auto">
          <div className="h-px w-12 bg-gold/30 mb-4 group-hover:w-24 group-hover:bg-gold transition-all duration-500" />
          <p className="font-mono text-[11px] tracking-wider text-cream-dim">
            BEST FOR —{" "}
            <span className="text-cream font-semibold">{service.bestFor}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

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
        {services.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}
