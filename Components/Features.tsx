import React from 'react'
import FeatureCard from './FeatureCard';
import { Shield, Star, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Easy to Use",
      description: "A simple and easy-to-use interface that anyone can navigate effortlessly.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Keep your data secure with modern encryption technology for peace of mind.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Trusted and loved by thousands of users with excellent ratings.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Key Features
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features