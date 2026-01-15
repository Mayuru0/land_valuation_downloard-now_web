import CTASection from "@/Components/CTASection";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Particles from "@/Components/Particles";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <Particles />

      <Header />
      <Hero />
      <Features />
      <CTASection />
      <Footer />
    </div>
  );
}
