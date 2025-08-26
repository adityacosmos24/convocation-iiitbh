// src/components/Navbar.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/clglogo.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[95%] max-w-7xl
        bg-gray-900/60 backdrop-blur-lg border border-white/20
        shadow-xl rounded-2xl
      "
    >


      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo + Institute Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="IIIT Bhagalpur Logo" className="h-12 w-auto rounded-lg" />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-lg text-white">
              Indian Institute of Information Technology Bhagalpur
            </span>
            <span className="text-sm text-gray-300">
              भारतीय सूचना प्रौद्योगिकी संस्थान भागलपुर
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 font-semibold text-white">
          {["Home", "Dignitaries", "Schedule", "Accommodation", "Dress Code", "Gallery"].map(
            (item, idx) => (
              <li key={idx} className="relative group">
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-pink-400 transition-colors"
                >
                  {item}
                </a>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className="
            md:hidden mt-2 mx-4 mb-4 rounded-xl
            bg-white/10 backdrop-blur-md border border-white/20
            px-6 py-4 space-y-4 shadow-md
          "
        >
          {["Home", "Dignitaries", "Schedule", "Accommodation", "Dress Code", "Gallery"].map(
            (item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="block text-white font-semibold uppercase hover:text-red-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
