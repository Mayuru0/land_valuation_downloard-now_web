import React from 'react'


interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}


const FeatureCard = ({ icon: Icon, title, description, bgColor, iconColor }:FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
      <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard