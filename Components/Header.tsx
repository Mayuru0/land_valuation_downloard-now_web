"use client";
import { Globe } from 'lucide-react';



const Header = () => {
 
 const handleClick = () => {
    const section = document.getElementById("download");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-2xl border-b border-blue-500/20 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-xl">
            <Globe className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Land Valuation
          </h1>
        </div>
        <button
        onClick={handleClick}
        className="bg-gradient-to-r  from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-cyan-700 transition transform hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
