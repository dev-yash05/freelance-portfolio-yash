"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, MouseEvent } from "react";

export default function MagneticButton({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-gold text-bg font-semibold hover:bg-gold-bright"
      : "border border-border hover:border-cream";

  return (
    <motion.a
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  );
}
