import React from 'react';
import { FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa6';

export default function ContactSection() {
  return (
    <section className="bg-[#0A0C10] text-white py-20 mt-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Information & Social Links */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Ready to grow?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md">
            Have questions or want a custom package? Drop us a message and our team will get back to you within 24 hours.
          </p>

          {/* Contact Details */}
          <div className="space-y-6 mb-10">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#131C22] flex items-center justify-center shrink-0">
                <FaEnvelope className="w-5 h-5 text-[#D5EF69]" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  Email Us
                </span>
                <a href="mailto:hello@digiflow.com" className="text-white text-sm font-semibold hover:text-[#D5EF69] transition-colors">
                  hello@digiflow.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#131C22] flex items-center justify-center shrink-0">
                <FaWhatsapp className="w-5 h-5 text-[#D5EF69]" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  WhatsApp
                </span>
                <a href="https://wa.me/212600000000" className="text-white text-sm font-semibold hover:text-[#D5EF69] transition-colors">
                  +1 434 253 446
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-gray-800 bg-[#131C22] flex items-center justify-center text-gray-300 hover:text-[#D5EF69] hover:border-[#D5EF69] transition-colors"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-gray-800 bg-[#131C22] flex items-center justify-center text-gray-300 hover:text-[#D5EF69] hover:border-[#D5EF69] transition-colors"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="w-full lg:w-7/12 bg-[#131C22] rounded-[2.5rem] p-6 sm:p-10 border border-gray-800/40">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Input Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-[#1C272C] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D5EF69] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Business Name
                </label>
                <input 
                  type="text" 
                  placeholder="Your Brand" 
                  className="w-full bg-[#1C272C] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D5EF69] transition-all"
                />
              </div>
            </div>

            {/* Input Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-[#1C272C] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D5EF69] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="+212 ..." 
                  className="w-full bg-[#1C272C] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D5EF69] transition-all"
                />
              </div>
            </div>

            {/* Interested Service Select/Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                Interested Service
              </label>
              <input 
                type="text" 
                placeholder="Social Starter" 
                className="w-full bg-[#1C272C] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D5EF69] transition-all"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                Message
              </label>
              <textarea 
                rows="4" 
                placeholder="Tell us about your project..." 
                className="w-full bg-[#1C272C] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D5EF69] transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full py-4 bg-[#D5EF69] text-[#0A0C10] font-extrabold text-sm rounded-xl hover:bg-white transition-all duration-300 uppercase tracking-wider cursor-pointer"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}