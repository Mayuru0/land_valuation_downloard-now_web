import { Download, Sparkles } from "lucide-react";
import React from "react";

const CTASection = () => {
  return (
    <section className="relative bg-linear-to-br from-blue-900 via-cyan-900 to-blue-900 py-24 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-bounce" />

        <h3 className="text-5xl font-bold mb-6 text-white">
          Ready to Get Started?
        </h3>

        <p className="text-2xl mb-10 text-blue-100">
          Download the Land Valuation app today and transform your property
          assessment experience
        </p>

        {/* DOWNLOAD BUTTON */}
        <a
          href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-4 px-14 py-6 rounded-full text-xl font-bold text-white
                     bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600
                     shadow-2xl shadow-blue-600/50
                     transition-all duration-300
                     hover:scale-105 hover:shadow-blue-500/70
                     overflow-hidden group"
        >
          {/* Hover overlay */}
          <span className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <Download className="w-7 h-7 relative z-10 group-hover:animate-bounce" />
          <span className="relative z-10">Download Now</span>
          <span className="relative z-10 text-2xl">→</span>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
