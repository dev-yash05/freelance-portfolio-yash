import React from "react";
import StackIcon from "tech-stack-icons";

type TechItem = {
  name: string;
  icon: React.ReactNode;
};

const techItems: TechItem[] = [
  {
    name: "Next.js",
    icon: <StackIcon name="nextjs" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300" />,
  },
  {
    name: "React",
    icon: <StackIcon name="react" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300" />,
  },
  {
    name: "TypeScript",
    icon: <StackIcon name="typescript" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300" />,
  },
  {
    name: "JavaScript",
    icon: <StackIcon name="js" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300" />,
  },
  {
    name: "Tailwind CSS",
    icon: <StackIcon name="tailwindcss" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300" />,
  },
  {
    name: "Framer Motion",
    icon: <StackIcon name="framer" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300" />,
  },
  {
    name: "GSAP",
    icon: <StackIcon name="gsap" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300" />,
  },
  {
    name: "Node.js",
    icon: <StackIcon name="nodejs" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300" />,
  },
  {
    name: "Figma",
    icon: <StackIcon name="figma" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300" />,
  },
  {
    name: "HTML5",
    icon: <StackIcon name="html5" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300" />,
  },
  {
    name: "CSS3",
    icon: <StackIcon name="css3" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300" />,
  },
  {
    name: "GitHub",
    icon: <StackIcon name="github" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300" />,
  },
];

export default function Marquee() {
  const track = [...techItems, ...techItems, ...techItems, ...techItems];

  return (
    <section className="relative py-6 md:py-8 border-y border-border/80 bg-surface/30 overflow-hidden my-4">
      {/* Side Fade Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-l from-bg via-bg/80 to-transparent" />

      {/* Single Marquee Line */}
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="inline-flex marquee-track gap-4 sm:gap-6 pr-4">
          {track.map((item, idx) => (
            <div
              key={`tech-${idx}`}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full border border-border/80 bg-surface/80 hover:bg-gold-pale/50 hover:border-gold hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer select-none"
            >
              <span className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider text-cream group-hover:text-gold transition-colors uppercase">
                {item.name}
              </span>
              <span className="text-gold/70 group-hover:text-gold transition-colors text-[10px] ml-1">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
