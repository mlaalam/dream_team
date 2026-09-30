import React from 'react';
import aboutImage from '../assets/images/hero.webp';

export default function AboutSection() {
  return (
    <section className="w-full bg-[#0A0C10] text-white py-12 sm:py-16 md:py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">


          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden p-2 sm:p-3 shadow-2xl">
              <img 
                src={aboutImage} 
                alt="About Our Company" 
                className="w-full h-auto object-contain rounded-xl sm:rounded-2xl block"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left items-center lg:items-start">
            
            <p className="text-[#D5EF69] font-bold text-xs uppercase tracking-widest mb-2 sm:mb-3">
              Our Story
            </p>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight">
              About Our Company
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Founded on the principle of making high-end digital marketing accessible. 
              We blend creative storytelling with data-driven performance to help 
              modern brands thrive in a digital-first world.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-800/80 w-full text-center sm:text-left">
              
              <div className="bg-[#131C22]/50 p-4 rounded-2xl sm:bg-transparent sm:p-0 border border-gray-800/50 sm:border-0">
                <h3 className="text-[#D5EF69] font-bold text-base sm:text-lg mb-1">
                  Creativity
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Unique visual stories for your brand.
                </p>
              </div>

              <div className="bg-[#131C22]/50 p-4 rounded-2xl sm:bg-transparent sm:p-0 border border-gray-800/50 sm:border-0">
                <h3 className="text-[#D5EF69] font-bold text-base sm:text-lg mb-1">
                  Growth
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Scalable metrics that matter.
                </p>
              </div>

              <div className="bg-[#131C22]/50 p-4 rounded-2xl sm:bg-transparent sm:p-0 border border-gray-800/50 sm:border-0">
                <h3 className="text-[#D5EF69] font-bold text-base sm:text-lg mb-1">
                  Simplicity
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Transparent plans, no fluff.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}