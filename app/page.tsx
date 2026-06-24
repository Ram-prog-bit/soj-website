import SafetyBar from "@/components/SafetyBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import WhatSOJDoes from "@/components/WhatSOJDoes";
import Mission from "@/components/Mission";
import Programs from "@/components/Programs";
import Initiatives from "@/components/Initiatives";
import Leadership from "@/components/Leadership";
import Resources from "@/components/Resources";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SafetyBar />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <WhatSOJDoes />
        <Mission />
        <Programs />
        <Initiatives />
        <Leadership />
        <Resources />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
