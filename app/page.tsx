import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import WhatWeDo from "@/components/WhatWeDo";
import Resources from "@/components/Resources";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <WhatWeDo />
        <Resources />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
