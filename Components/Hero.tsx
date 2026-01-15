import { Download, Smartphone } from 'lucide-react';
import React from 'react'

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-center">
      <div className="mb-8">
        <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-3xl mb-6">
          <Smartphone className="w-20 h-20 text-white" />
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Land Valuation
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Download our modern mobile application designed to make your life easier. Get the best experience with cutting-edge features.
        </p>
      </div>

      {/* Download Now Button */}
      <div className="mb-12">
        <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-green-700 hover:to-blue-700 transition transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto">
          <Download className="w-7 h-7" />
          Download Now
        </button>
      </div>

      {/* App Preview */}
      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-8 shadow-xl">
        <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-inner">
          <div className="bg-gradient-to-br from-green-400 to-blue-500 h-96 rounded-xl flex items-center justify-center">
            <Smartphone className="w-32 h-32 text-white opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
