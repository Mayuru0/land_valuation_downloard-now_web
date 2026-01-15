"use client";
import { useState } from 'react';
import { Download, Smartphone, Sparkles } from 'lucide-react';
import Carousel from './Carousel';

const Hero = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const fileId = "1ByarxnATR5Y1PBi_HB7oXYigPtNiVQEN";
      const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      
      const link = document.createElement("a");
      link.href = directDownloadUrl;
      link.setAttribute("download", "Land_app.apk");
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      
      setTimeout(() => {
        document.body.removeChild(link);
        setLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error("Download failed:", error);
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900 mx-auto px-4 py-20 text-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="mb-12 relative z-10">
        <div className="inline-block relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-5 rounded-3xl shadow-2xl">
            <Smartphone className="w-10 h-10 md:w-24 md:h-24" />
          </div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Welcome to Land Valuation
        </h2>
        <p className="text-base md:text-xl text-gray-300 max-w-md md:max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience the future of property valuation with our cutting-edge mobile application. 
          <span className="text-blue-400 font-semibold"> Smart, Fast & Accurate.</span>
        </p>
      </div>

      {/* App Preview with Carousel */}
      <div className="relative z-10 mb-10">
        <Carousel />
      </div>

      {/* Download Now Button */}
      <div className="mb-16 relative z-10">
        <button 
          onClick={handleDownload}
          disabled={loading}
          className="relative group bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white px-8 md:px-14 py-4 md:py-6 rounded-full text-base md:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-600/50 hover:shadow-blue-500/70 flex items-center gap-4 mx-auto overflow-hidden w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {loading ? (
            <span className="relative z-10 animate-spin">⏳</span>
          ) : (
            <Download className="w-6 md:w-7 h-6 md:h-7 relative z-10 group-hover:animate-bounce" />
          )}
          <span className="relative z-10">{loading ? "Downloading..." : "Download Now"}</span>
          <Sparkles className="w-5 md:w-6 h-5 md:h-6 relative z-10" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
