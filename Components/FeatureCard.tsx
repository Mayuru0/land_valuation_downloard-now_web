import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  gradient,
}: FeatureCardProps) => {
  return (
    <div className="group relative bg-linear-to-br from-slate-800 to-slate-900 border border-blue-500/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 transition-all duration-300 rounded-3xl" />

      <div className="relative z-10">
        <div
          className={`${gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h4>

        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-600/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default FeatureCard;
