import React from 'react'
import FeatureCard from './FeatureCard';
import { Lock, Star,  Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get instant property valuations with our advanced AI-powered algorithms. No waiting, just results.",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-600"
    },
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "Your data is protected with military-grade encryption. Privacy and security are our top priorities.",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Join thousands of satisfied users who trust our platform for accurate property assessments.",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section className="bg-linear-to-b from-slate-900 to-slate-950  mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h3 className="text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Powerful Features
        </h3>
        <p className="text-gray-400 text-lg">Everything you need for accurate land valuation</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};


export default Features