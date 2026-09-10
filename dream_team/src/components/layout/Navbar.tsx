import { useState } from "react";
import logo from '../../assets/images/logo.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#131C1F] shadow-md sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <img
              className="h-15 w-auto rounded-lg"
              src={logo}
              alt="Digital Services Company logo"
            />
            <span className="text-white text-lg font-bold tracking-wider uppercase">
              Maarrach
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            <a
              href="/"
              className="text-white/80 text-sm hover:text-[#D5EF69] transition-colors duration-300"
            >
              Home
            </a>

            <a
              href="/#pricing"
              className="text-white/80 text-sm hover:text-[#D5EF69] transition-colors duration-300"
            >
              Pricing
            </a>

            <a
              href="/#about"
              className="text-white/80 text-sm hover:text-[#D5EF69] transition-colors duration-300"
            >
              About Us
            </a>

            <a
              href="/#contact"
              className="text-white/80 text-sm hover:text-[#D5EF69] transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <a
              href="/#contact"
              className="
                inline-flex
                items-center
                justify-center
                px-6
                py-2.5
                bg-[#D5EF69]
                text-[#0A0C10]
                text-sm
                font-semibold
                rounded-full
                hover:bg-white
                transition-all
                duration-300
              "
            >
              Get Started
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className="
              md:hidden
              text-2xl
              text-white
              hover:text-[#D5EF69]
              transition-colors
              duration-300
              cursor-pointer
            "
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#172326] border-t border-[#2A2F1E]">
          <nav className="flex flex-col px-6 py-5 gap-4">

            <a
              href="/"
              onClick={closeMenu}
              className="text-white hover:text-[#D5EF69] transition-colors"
            >
              Home
            </a>

            <a
              href="/#pricing"
              onClick={closeMenu}
              className="text-white hover:text-[#D5EF69] transition-colors"
            >
              Pricing
            </a>

            <a
              href="/#about"
              onClick={closeMenu}
              className="text-white hover:text-[#D5EF69] transition-colors"
            >
              About Us
            </a>

            <a
              href="/#contact"
              onClick={closeMenu}
              className="text-white hover:text-[#D5EF69] transition-colors"
            >
              Contact
            </a>

            <a
              href="/#contact"
              onClick={closeMenu}
              className="
                mt-2
                px-5
                py-2.5
                bg-[#D5EF69]
                text-[#0A0C10]
                text-center
                font-semibold
                rounded-full
                hover:bg-white
                transition-all
                duration-300
              "
            >
              Get Started
            </a>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;