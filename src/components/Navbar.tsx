// src/components/Navbar.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger menu
import logo from "../assets/clglogo.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#2c2c2c] text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between  py-3">
        
        {/* Logo + Institute Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo} // your logo in public/
            alt="IIIT Bhagalpur Logo"
            className="h-12 w-auto"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-lg">
              Indian Institute of Information Technology Bhagalpur
            </span>
            <span className="text-sm text-gray-300">
              भारतीय सूचना प्रौद्योगिकी संस्थान भागलपुर
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 font-semibold ">
          {["Home", "Dignitaries", "Schedule", "Accommodation", "Dress Code", "Gallery"].map(
            (item, idx) => (
              <li key={idx} className="relative group">
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-pink-500 transition-colors"
                >
                  {item}
                </a>
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#2c2c2c] px-6 py-4 space-y-4">
          {["Home", "Dignitaries", "Schedule", "Accommodation", "Dress Code", "Gallery"].map(
            (item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="block text-white font-semibold uppercase hover:text-red-500 transition-colors"
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
