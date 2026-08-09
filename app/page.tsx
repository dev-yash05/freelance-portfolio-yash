import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BuiltFor from "@/components/BuiltFor";
import Work from "@/components/Work";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import Process from "@/components/Process";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
