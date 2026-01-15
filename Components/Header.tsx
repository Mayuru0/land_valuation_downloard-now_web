import { Globe } from 'lucide-react';
import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-2xl border-b border-blue-500/20 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-xl">
            <Globe className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Land Valuation
          </h1>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-cyan-700 transition transform hover:scale-105 shadow-lg shadow-blue-500/50">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header
