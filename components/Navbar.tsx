"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-6 left-4 right-4 md:left-10 md:right-10 max-w-7xl mx-auto z-[60] flex items-center justify-between px-5 md:px-8 py-3.5 bg-surface/75 backdrop-blur-lg border border-border/50 rounded-full shadow-sm"
      >
        <span className="font-logo text-xl md:text-2xl tracking-wide uppercase font-bold text-cream ml-2">
          YASH.
        </span>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-cream-dim">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-1 transition-colors hover:text-cream"
            >
              {l.label}
              <span className="absolute left-0 bottom-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-xs sm:text-sm border border-gold/40 text-gold rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 hover:bg-gold hover:text-bg hover:shadow-md font-medium"
          >
            Let&apos;s talk ↗
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border/50 bg-surface/80 transition-colors hover:bg-surface"
          >
            <span
              className={`block w-3.5 h-[1.5px] bg-cream transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[1.5px]" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`block w-3.5 h-[1.5px] bg-cream transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[1.5px]" : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-bg/95 flex flex-col items-center justify-center pt-10"
          >
            <div className="flex flex-col items-center gap-8 text-3xl font-serif text-cream">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="hover:text-gold transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute left-1/2 -bottom-2 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-cream-dim text-[10px] uppercase tracking-widest font-mono mb-4">
                Connect
              </p>
              <div className="flex gap-6 text-sm text-cream">
                <a href="#" aria-label="Twitter Profile" className="hover:text-gold transition-colors">
                  Twitter
                </a>
                <a href="#" aria-label="LinkedIn Profile" className="hover:text-gold transition-colors">
                  LinkedIn
                </a>
                <a href="#" aria-label="GitHub Profile" className="hover:text-gold transition-colors">
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
