import { FaFacebookF, FaInstagram, FaLinkedinIn , FaEnvelope } from "react-icons/fa";
import logof from '../../assets/images/logof.jpg'

const Footer = () => {
  return (
    <footer className="bg-[#0b0d12] text-gray-400 w-full text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-2 mb-4">
            <img className="h-20 w-auto rounded" src={logof} alt="Logo footer" />
            <span className="text-white text-lg font-bold tracking-wider uppercase">
              Maarrach
            </span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed mb-2  max-w-xs">
            Maarrach provides digital e-commerce development services, including Shopify store creation, e-commerce website development, dropshipping website design, store customization, and related digital services.
            Legal business information used in this document: Maarrach, 30 N Gould St Ste R, Sheridan, WY 82801, United States.
          </p>
          <p className="text-ms leading-relaxed mb-6 max-w-xs">
              contact@maarrach.com
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm">Navigation</h3>
          <ul className="space-y-3 text-xs">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-white font-semibold mb-4 text-sm">Services</h3>
          <ul className="space-y-3 text-xs">
            <li><a href="#" className="hover:text-white transition-colors">Shopify Store Development</a></li>
            <li><a href="#" className="hover:text-white transition-colors">E-Commerce Store Management</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Advertising Campaign Management</a></li>
            <li><a href="#" className="hover:text-white transition-colors">High-Converting Landing Pages</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Winning Sales Strategies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ad Creative Design</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ready-To-Sell E-Commerce Stores</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm">Legal</h3>
          <ul className="space-y-3 text-xs">
            <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use </a></li>
            <li><a href="/refund-cancellation" className="hover:text-white transition-colors">Refund & Cancellation Policy</a></li>
            {/* <li><a href="/shipping-digital" className="hover:text-white transition-colors">Shipping & Digital Delivery Policy </a></li> */}
          </ul>
        </div>

      </div>


      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 Maarrach LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>30 N Gould St Ste R, Sheridan, WY 82801, United States </span>
            <span>Maarrach</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;