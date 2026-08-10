import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Marquee = dynamic(() => import("@/components/Marquee"));
const BuiltFor = dynamic(() => import("@/components/BuiltFor"));
const Work = dynamic(() => import("@/components/Work"));
const Services = dynamic(() => import("@/components/Services"));
const WhyMe = dynamic(() => import("@/components/WhyMe"));
const Process = dynamic(() => import("@/components/Process"));
const About = dynamic(() => import("@/components/About"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BuiltFor />
      <Work />
      <Marquee />
      <Services />
      <WhyMe />
      <Process />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
