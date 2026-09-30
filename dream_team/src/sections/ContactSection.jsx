import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF, FaXmark } from 'react-icons/fa6';

export default function ContactSection() {
  const formRef = useRef();
  const contactRef = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const [selectedService, setSelectedService] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [defaultMessage, setDefaultMessage] = useState('');

  useEffect(() => {
  const loadPackageFromStorage = () => {
    const savedPackage = localStorage.getItem('selectedPackage');

    if (savedPackage) {
      try {
        const pkg = JSON.parse(savedPackage);
        setSelectedPackage(pkg);
        setSelectedService(`${pkg.service} (${pkg.type})`);

        setDefaultMessage(
          `Hello, I would like to confirm my order for the following package:\n` +
          `• Service: ${pkg.service}\n` +
          `• Package Type: ${pkg.type}\n` +
          `• Price: ${pkg.price}\n\n` +
          `Please reach out to discuss the next steps.`
        );

        setTimeout(() => {
          contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } catch (err) {
        console.error("Error reading localStorage", err);
      }
    }
  };

  loadPackageFromStorage();

  window.addEventListener("selectedPackageUpdated", loadPackageFromStorage);

  return () => {
    window.removeEventListener("selectedPackageUpdated", loadPackageFromStorage);
  };
}, []);

  const handleClearPackage = () => {
    localStorage.removeItem('selectedPackage');
    setSelectedPackage(null);
    setSelectedService('');
    setDefaultMessage('');
  };

  // 2. Send email via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    emailjs
      .sendForm(
        'service_o0q9czl',
        'template_wxpnwm9',
        formRef.current,
        'DeKqm8HUv0y6Kl9MX'
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully.',
          });
          formRef.current.reset();

          // Clear localStorage after successful send
          handleClearPackage();
        },
        (error) => {
          setLoading(false);
          setStatus({
            type: 'error',
            message: 'Something went wrong. Please try again later.',
          });
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <section ref={contactRef} id="contact" className="bg-[#0A0C10] text-white py-20 mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Column - Contact Info */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Ready to grow?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md">
            Have questions or want a custom package? Drop us a message and our team will get back to you within 24 hours.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#131C22] flex items-center justify-center shrink-0">
                <FaEnvelope className="w-5 h-5 text-[#D5EF69]" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  Email Us
                </span>
                <a 
                  href="mailto:contact@maarrach.com" 
                  className="text-white text-sm font-semibold hover:text-[#D5EF69] transition-colors"
                >
                  contact@maarrach.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#131C22] flex items-center justify-center shrink-0">
                <FaWhatsapp className="w-5 h-5 text-[#D5EF69]" />
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  WhatsApp
                </span>
                <a 
                  href="https://wa.me/1434253446" 
                  className="text-white text-sm font-semibold hover:text-[#D5EF69] transition-colors"
                >
                  +1 434 253 446
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/maar.rach/?hl=fr" 
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-gray-800 bg-[#131C22] flex items-center justify-center text-gray-300 hover:text-[#D5EF69] hover:border-[#D5EF69] transition-colors"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a 
              href="https://web.facebook.com/profile.php?id=61594498124893&locale=fr_FR" 
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-gray-800 bg-[#131C22] flex items-center justify-center text-gray-300 hover:text-[#D5EF69] hover:border-[#D5EF69] transition-colors"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column - EmailJS Form */}
        <div className="w-full lg:w-7/12 bg-[#131C22] rounded-[2.5rem] p-6 sm:p-10 border border-gray-800/40">
          
          {/* Selected Package Summary Card */}
          {selectedPackage && (
            <div className="mb-6 p-4 rounded-2xl bg-[#0A0C10] border border-[#D5EF69]/40 relative">
              <button
                type="button"
                onClick={handleClearPackage}
                className="absolute top-3 right-3 text-gray-400 hover:text-white p-1 rounded-full"
                title="Remove selection"
              >
                <FaXmark className="w-4 h-4" />
              </button>

              <span className="text-[10px] font-extrabold uppercase bg-[#D5EF69]/10 text-[#D5EF69] px-2.5 py-1 rounded-full border border-[#D5EF69]/20">
                Selected Order Summary
              </span>

              <div className="grid grid-cols-3 gap-2 mt-3 text-left">
                <div>
                  <p className="text-[11px] text-gray-400">Service</p>
                  <p className="font-bold text-xs sm:text-sm text-white truncate">{selectedPackage.service}</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400">Package</p>
                  <p className="font-bold text-xs sm:text-sm text-white">{selectedPackage.type}</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400">Price</p>
                  <p className="font-bold text-xs sm:text-sm text-[#D5EF69]">{selectedPackage.price}</p>
                </div>
              </div>
            </div>
          )}

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

            {/* Hidden fields for EmailJS template if needed */}
            {selectedPackage && (
              <>
                <input type="hidden" name="package_type" value={selectedPackage.type} />
                <input type="hidden" name="package_price" value={selectedPackage.price} />
              </>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  name="from_name"
                  placeholder="John Doe" 
                  required
                  className="w-full bg-[#1C272C] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D5EF69] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Business Name
                </label>
                <input 
                  type="text" 
                  name="business_name"
                  placeholder="Your Brand" 
                  className="w-full bg-[#1C272C] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D5EF69] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="reply_to"
                  placeholder="john@example.com" 
                  required
                  className="w-full bg-[#1C272C] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D5EF69] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  name="phone_number"
                  placeholder="+1 ..." 
                  className="w-full bg-[#1C272C] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D5EF69] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                Interested Service
              </label>
              <input 
                type="text" 
                name="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                placeholder="e.g. Graphic Design & Visual Branding" 
                className="w-full bg-[#1C272C] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D5EF69] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                Message
              </label>
              <textarea 
                rows="5" 
                name="message"
                value={defaultMessage}
                onChange={(e) => setDefaultMessage(e.target.value)}
                placeholder="Tell us about your project..." 
                required
                className="w-full bg-[#1C272C] text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D5EF69] transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-[#D5EF69] text-[#0A0C10] font-extrabold text-sm rounded-xl hover:bg-white transition-all duration-300 uppercase tracking-wider cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status.message && (
              <p className={`text-center text-xs font-semibold tracking-wide ${status.type === 'success' ? 'text-[#D5EF69]' : 'text-red-400'}`}>
                {status.message}
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}