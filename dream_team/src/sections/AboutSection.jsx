import React from 'react';
import aboutImage from '../assets/images/hero.webp';

export default function AboutSection() {
  return (
    <section className="bg-[#0A0C10] text-white py-20 px-6 sm:px-12  mx-5 md:mx-65">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Image with Bottom Gradient Overlay */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src={aboutImage} 
              alt="About Our Company" 
              className="w-full h-full object-cover"
            />
            {/* Bottom Dark Gradient Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-transparent opacity-90"></div>
          </div>
        </div>

        {/* Right Side: Text & Pillar Grid */}
        <div className="w-full lg:w-1/2 flex flex-col text-left">
          
          {/* Subtitle Tag */}
          <p className="text-[#D5EF69] font-bold text-xs uppercase tracking-widest mb-3">
            Our Story
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white tracking-tight">
            About Our Company
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            Founded on the principle of making high-end digital marketing accessible. 
            We blend creative storytelling with data-driven performance to help 
            modern brands thrive in a digital-first world.
          </p>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            
            {/* Pillar 1 */}
            <div>
              <h3 className="text-[#D5EF69] font-bold text-lg mb-1">
                Creativity
              </h3>
              <p className="text-gray-400 text-sm leading-snug">
                Unique visual stories for your brand.
              </p>
            </div>

            {/* Pillar 2 */}
            <div>
              <h3 className="text-[#D5EF69] font-bold text-lg mb-1">
                Growth
              </h3>
              <p className="text-gray-400 text-sm leading-snug">
                Scaleable metrics that matter.
              </p>
            </div>

            {/* Pillar 3 */}
            <div>
              <h3 className="text-[#D5EF69] font-bold text-lg mb-1">
                Simplicity
              </h3>
              <p className="text-gray-400 text-sm leading-snug">
                Transparent plans, no fluff.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}