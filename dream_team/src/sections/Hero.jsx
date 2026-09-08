import React from "react";
import hero from "../assets/images/hero.webp";

function Hero() {
  return (
    <div className="flex mt-10 md:mt-20 mx-5 md:mx-65">
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 w-full items-center text-center lg:text-left">
        <div className="w-full lg:w-1/2">
          <h1 className="text-[#D5EF69] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Grow Your Business
            <span className="block text-white mt-2 sm:mt-4">Online</span>
          </h1>

          <p className="text-gray-100 mt-4 sm:mt-5 text-base sm:text-lg md:text-xl line-clamp-3 overflow-hidden max-w-2xl mx-auto lg:mx-0">
            Maarrach LLC provides digital e-commerce development services, including Shopify store creation, e-commerce website development, dropshipping website design, store customization, and related digital services.
            Legal business information used in this document: Maarrach LLC, 30 N Gould St Ste R, Sheridan, WY 82801, United States.
          </p>

          <div className="my-8 sm:my-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
            <a href="/#services" className="inline-flex items-center justify-center px-6 py-3 bg-[#D5EF69] text-[#0A0C10] text-sm font-semibold rounded-full hover:bg-white transition-all duration-300 w-full sm:w-auto cursor-pointer">
              View Our Plans
            </a>
            <a href="/#contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-200 text-gray-200 text-sm font-semibold rounded-full hover:bg-[#D5EF69] hover:border-[#D5EF69] hover:text-[#0A0C10] transition-all duration-300 w-full sm:w-auto cursor-pointer">
              Contact Us
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-lg lg:max-w-none h-auto sm:h-[350px] md:h-[400px] object-cover rounded-2xl md:rounded-3xl"
            src={hero}
            alt="Hero illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
