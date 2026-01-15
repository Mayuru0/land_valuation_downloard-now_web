import CTASection from "@/Components/CTASection";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Image from "next/image";

export default function Home() {
  return (
       <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Header />
      <Hero />
      <Features />
      <CTASection />
      <Footer />
    </div>
  );
}
