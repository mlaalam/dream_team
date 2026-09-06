import React from 'react';
import { Hash, Megaphone, Store } from 'lucide-react';

const features = [
  {
    icon: Hash,
    title: "Social Media Management",
    description: "Full presence management across Facebook and Instagram to build your brand and community."
  },
  {
    icon: Megaphone,
    title: "Meta Ads Strategy",
    description: "Expertly crafted ad campaigns designed to maximize ROI and scale your business volume."
  },
  {
    icon: Store,
    title: "Shopify & E-commerce",
    description: "End-to-end store setup and management focusing on speed, design, and conversion rate."
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-[#0D0E0F] text-white p-20 my-30 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 tracking-tight">
          What's Included?
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#1C2315] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-[#D5EF69]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 tracking-wide text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}