"use client";

import { motion, Variants } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen px-6 md:px-14 pt-28 pb-16 md:pt-32 max-w-content mx-auto flex items-center"
    >
      <div className="w-full grid lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.65fr)] gap-12 lg:gap-20 items-end">
        <div>
          <motion.span variants={item} className="eyebrow">
            Independent designer &amp; developer — Indore, IN
          </motion.span>

          <motion.h1
            variants={item}
            className="font-serif font-normal leading-[1.04] mt-6 pb-[0.1em] text-[48px] sm:text-[64px] md:text-[82px] lg:text-[92px] max-w-4xl"
          >
            Your business deserves a website that{" "}
            <span className="italic text-gold-bright">works as hard as you do.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-lg text-cream-dim text-base leading-relaxed">
            I design and develop premium, fast, mobile-first websites for businesses,
            startups and personal brands.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="#work" variant="primary">
              Explore Selected Work
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Start a Project ↗
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 pt-5 border-t border-border max-w-lg flex items-center gap-3 text-cream-dim text-xs font-mono"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-gold"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            NOW BOOKING SELECTED PROJECTS — 2026
          </motion.div>
        </div>

        <motion.aside
          variants={item}
          className="relative overflow-hidden min-h-[390px] sm:min-h-[450px] rounded-[2rem] border border-border bg-bg-2 p-7 sm:p-9 flex flex-col justify-between"
        >
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-gold/30" />
          <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border border-gold/30" />

          <div className="relative flex items-center justify-between font-mono text-[11px] tracking-[0.14em] text-cream-dim">
            <span>CREATIVE PARTNERSHIP</span>
            <span className="text-gold">01 — 03</span>
          </div>

          <div className="relative">
            <p className="font-serif text-[40px] sm:text-5xl leading-[1.06] max-w-sm">
              Design that feels as good as it performs.
            </p>
            <div className="mt-7 h-px w-16 bg-gold" />
          </div>

          <div className="relative grid grid-cols-2 gap-4 border-t border-cream/15 pt-6 text-sm">
            <div>
              <span className="block font-serif text-2xl text-gold">01</span>
              <span className="mt-1 block text-cream-dim">Strategy-first thinking</span>
            </div>
            <div>
              <span className="block font-serif text-2xl text-gold">02</span>
              <span className="mt-1 block text-cream-dim">Detail-led execution</span>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
}
