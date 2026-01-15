import { Globe } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-blue-500/20 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-linear-to-br from-blue-500 to-cyan-500 p-2 rounded-xl">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Land Valuation
            </span>
          </div>
          <p className="text-gray-400">© 2025 Land Valuation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer