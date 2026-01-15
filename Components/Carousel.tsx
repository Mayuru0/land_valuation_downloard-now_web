"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/UI/1.PNG",
    "/UI/2.PNG",
    "/UI/3.PNG",
    "/UI/4.PNG",
    "/UI/5.PNG",
    "/UI/6.PNG",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative">
      {/* iPhone Frame Container */}
      <div className="relative max-w-[320px] mx-auto">
        {/* iPhone Body with Gradient Border */}
        <div className="relative bg-linear-to-br from-blue-900 via-blue-900 to-blue-900 rounded-[3.5rem] p-[3px] shadow-2xl">
          {/* Inner Black Frame */}
          <div className="bg-black rounded-[3.3rem] p-[10px]">
            {/* Screen Container */}
            <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 mt-[6px]">
                <div className="bg-black w-[120px] h-[35px] rounded-full flex items-center justify-center gap-2 shadow-lg">
                  <div className="w-[14px] h-[14px] bg-blue-600/50 rounded-full"></div>
                  <div className="w-[50px] h-[6px] bg-slate-900 rounded-full"></div>
                </div>
              </div>

              {/* Screen Content */}
              <div className="relative h-[650px]">
                <Image
                  src={images[currentIndex]}
                  alt={`Land Valuation App Screenshot ${currentIndex + 1}`}
                  width={400}
                  height={800}
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-500/20 to-transparent pointer-events-none"></div>

                {/* Navigation Buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 hidden backdrop-blur-sm  text-white p-2.5 rounded-full hover:bg-blue-500 transition transform hover:scale-110 shadow-xl z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 hidden backdrop-blur-sm  text-white p-2.5 rounded-full hover:bg-blue-500 transition transform hover:scale-110 shadow-xl z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-full z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-gradient-to-r from-blue-400 to-cyan-400 w-8"
                          : "bg-white/40 w-2 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="h-[20px] flex items-center justify-center bg-slate-900">
                <div className="w-[140px] h-[5px] bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute left-[-2px] top-[120px] w-[3px] h-[30px] bg-gradient-to-b from-blue-800 to-blue-900 rounded-l-sm"></div>
        <div className="absolute left-[-2px] top-[165px] w-[3px] h-[60px] bg-gradient-to-b from-blue-800 to-blue-900 rounded-l-sm"></div>
        <div className="absolute left-[-2px] top-[240px] w-[3px] h-[60px] bg-gradient-to-b from-blue-800 to-blue-900 rounded-l-sm"></div>
        <div className="absolute right-[-2px] top-[180px] w-[3px] h-[80px] bg-gradient-to-b from-blue-800 to-blue-900 rounded-r-sm"></div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Carousel;
