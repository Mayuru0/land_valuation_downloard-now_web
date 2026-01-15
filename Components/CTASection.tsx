"use client";
import { useState } from "react";
import { Download, Sparkles } from "lucide-react";

const CTASection = () => {
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
    <section className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-md md:max-w-4xl mx-auto px-4 text-center relative z-10">
        <Sparkles className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-6 text-yellow-400 animate-bounce" />
        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Get Started?</h3>
        <p className="text-base md:text-2xl mb-10 text-blue-100 leading-relaxed">
          Download the Land Valuation app today and transform your property assessment experience
        </p>

        <button
          onClick={handleDownload}
          disabled={loading}
          className="relative inline-flex items-center gap-3 md:gap-4 px-6 md:px-14 py-3 md:py-6 rounded-full text-base md:text-xl font-bold text-white
                     bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600
                     shadow-2xl shadow-blue-600/50
                     transition-all duration-300
                     hover:scale-105 hover:shadow-blue-500/70
                     overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto justify-center"
        >
          {loading ? (
            <span className="relative z-10 animate-spin">⏳</span>
          ) : (
            <Download className="w-5 md:w-7 h-5 md:h-7 relative z-10 group-hover:animate-bounce" />
          )}
          <span className="relative z-10">{loading ? "Downloading..." : "Download Now"}</span>
          <span className="relative z-10 text-lg md:text-2xl">→</span>
        </button>
        
        <p className="mt-4 md:mt-6 text-sm md:text-base text-blue-200">
          APK File • Compatible with Android devices
        </p>
      </div>
    </section>
  );
};

export default CTASection;
