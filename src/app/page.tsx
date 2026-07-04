import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import CharacterShowcase from "@/components/CharacterShowcase";
import StickyScroll from "@/components/StickyScroll";
import CogneeIntegration from "@/components/CogneeIntegration";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import MeshGradientCanvas from "@/components/MeshGradientCanvas";

export default function Home() {
  return (
    <>
      <MeshGradientCanvas />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="section-separator" />
        <About />
        <div className="section-separator" />
        <Features />
        <div className="section-separator" />
        <CharacterShowcase />
        <div className="section-separator" />
        <StickyScroll />
        <div className="section-separator" />
        <CogneeIntegration />
        <div className="section-separator" />
        <FAQ />
        <div className="section-separator" />
        <Testimonials />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
