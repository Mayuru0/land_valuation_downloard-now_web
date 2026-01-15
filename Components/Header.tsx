import { Globe } from 'lucide-react';
import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="w-8 h-8 text-green-600" />
          <h1 className="text-2xl font-bold text-gray-800">Land Valuation</h1>
        </div>
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header
