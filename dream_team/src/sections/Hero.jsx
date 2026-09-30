import React from "react";
import hero from "../assets/images/hero.webp";

function Hero() {
  return (
    <section className="w-full bg-[#0A0C10] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16 text-center lg:text-left">

          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <h1 className="text-[#D5EF69] text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight">
              Grow Your Business
              <span className="block text-white mt-1 sm:mt-2">Online</span>
            </h1>

            <p className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
              Maarrach provides digital e-commerce development services, including Shopify store creation, e-commerce website development, dropshipping website design, store customization, and related digital services.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="/#services"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#D5EF69] text-[#0A0C10] text-sm font-bold rounded-full hover:bg-white transition-all duration-300 w-full sm:w-auto text-center cursor-pointer shadow-lg shadow-[#d5ef69]/10"
              >
                View Our Plans
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-700 text-gray-200 text-sm font-bold rounded-full hover:border-[#D5EF69] hover:text-[#D5EF69] transition-all duration-300 w-full sm:w-auto text-center cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center mt-4 lg:mt-0">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden p-2 sm:p-3 shadow-2xl">
              <img
                className="w-full h-auto object-contain rounded-xl sm:rounded-2xl block"
                src={hero}
                alt="Maarrach E-commerce Services"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;