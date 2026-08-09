# Portfolio Design System & Guidelines

This document serves as the aesthetic and technical reference for future AI assistants or developers contributing to this portfolio. When creating new components, sections, or interacting with the codebase, adhere strictly to these guidelines to maintain the established luxury editorial aesthetic.

## 🎨 1. Color Palette

The site uses a warm, premium palette. Always use these exact Tailwind variables from `tailwind.config.ts`.
- **Backgrounds**: 
  - `bg-bg` (`#FFF6E7`): Primary warm background for most sections.
  - `bg-surface` (`#FFFBF4`): Lighter, cleaner off-white used for cards, floating navbars, and interactive surfaces.
- **Typography**: 
  - `text-cream` (`#35212E`): Deep purple/brown used for primary headings and strong text. Never use pure black.
  - `text-cream-dim` (`#795B65`): Lighter purple/brown used for body text, paragraphs, and subtle details.
- **Accents (Gold)**:
  - `text-gold` (`#B26B2B`): Standard accent color for stars (✦), active states, and borders.
  - `text-gold-bright` (`#D9923E`): Used sparingly for italicized highlights within headings.
  - `bg-gold-pale` (`#F7E2C7`): Used for subtle hover background transitions (e.g., `hover:bg-gold-pale/30`).
- **Borders**: 
  - `border-border` (`#E8C9A9`): A soft, warm border color. Often used with opacity (`border-border/60`).

## 🖋️ 2. Typography

- **Display/Headings**: Use `font-serif`. Headings should be massive, confident, and editorial (e.g., `text-5xl md:text-7xl lg:text-[80px]`). Ensure tight leading (`leading-[1.05]`). Always emphasize key words using `<span className="italic text-gold-bright">...</span>`.
- **Body Text**: Use `font-sans`. Keep paragraphs readable and relaxed (`leading-relaxed`, `text-base md:text-lg`).
- **Accents/Eyebrows**: Use `font-mono`, `uppercase`, `tracking-widest`, `text-xs` or `text-sm`, usually in `text-gold`.

## 📐 3. Layout Patterns

- **Max Width**: Use `max-w-content mx-auto` (which resolves to 1400px) on the main wrapper of all sections.
- **Section Padding**: Sections should have massive, breathing padding. Standard is `py-24 md:py-40 px-6 md:px-14`.
- **Bento Grids**: Use CSS Grid with 1px inner borders. Achieved by adding `gap-px bg-border/60` to the grid container, and `bg-surface` on the children. Wrap the container in `rounded-[2rem] overflow-hidden`. 
- **Split Sticky Layout**: For process or info sections, use `grid md:grid-cols-[1fr_1.5fr]`. Make the left column sticky (`lg:sticky top-40`) and let the right column scroll.
- **Floating Containers**: Use high border radius (`rounded-[3rem]`, `rounded-full`), `border border-border/50`, and `backdrop-blur-lg` for elements that float above the background (Navbar, CTA block).

## ✨ 4. Animation Standards (GSAP)

**CRITICAL RULE: Never use `gsap.from()`.** It causes flashes of unstyled content (FOUC) and scroll positioning bugs in Next.js.
Always use the following pattern:
1. Add `opacity-0` and an initial translation (e.g., `translate-y-10`) to the element's Tailwind classes directly in the HTML.
2. Animate to the natural state using `gsap.to()`:
```tsx
gsap.to(".your-class", {
  y: 0, 
  opacity: 1, 
  duration: 1.2, 
  stagger: 0.15, 
  ease: "power3.out", 
  scrollTrigger: { 
    trigger: container.current, // or the element itself for long lists
    start: "top 75%", 
  }
});
```

## 🪄 5. Micro-Interactions

- **The Gold Star (`✦`)**: Use this character as a decorative accent instead of standard icons or bullets. Animate it on group hover: `transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 origin-bottom-left`.
- **Hover Transitions**: All interactive elements (cards, buttons) should have a smooth CSS transition (`transition-all duration-500`).
- **Background Numbers**: For numbered steps, use giant background typography (e.g., `text-[200px] text-gold/5 group-hover:text-gold/10`) positioned absolutely behind the content.
- **Floating Background Elements**: When using `tech-stack-icons` in backgrounds, use extreme subtlety (`opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-40`) and an infinite yoyo GSAP float animation (`y: "random(-20, 20)"`).

## 🏗️ 6. Component Blueprint

A standard new section should follow this structure:
```tsx
"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function NewSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // GSAP logic here using gsap.to() targeting elements with opacity-0
  }, { scope: container });

  return (
    <section ref={container} className="px-6 md:px-14 py-24 md:py-40 max-w-content mx-auto">
      <span className="opacity-0 translate-y-8 eyebrow block mb-4 uppercase tracking-widest text-gold text-sm font-semibold">
        Eyebrow Text
      </span>
      <h2 className="opacity-0 translate-y-8 font-serif text-5xl md:text-7xl text-cream leading-[1.05]">
        Main <span className="italic text-gold-bright">Headline</span>.
      </h2>
      
      {/* Content */}
      
    </section>
  );
}
```
