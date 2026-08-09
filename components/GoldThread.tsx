"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function GoldThread() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden
      className="fixed left-6 top-0 bottom-0 w-px bg-border z-40 hidden md:block"
    >
      <motion.div
        style={{ scaleY: smoothProgress }}
        className="absolute top-0 left-0 w-full h-full origin-top bg-gradient-to-b from-gold to-gold-bright"
      />
    </div>
  );
}
