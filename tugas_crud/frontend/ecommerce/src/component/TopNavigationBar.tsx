import React, { useState } from 'react';
import logo from '../assets/logo_ecommerce.png';

const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];
  
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <nav className="bg-white shadow-md z-50 sticky top-0">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto mr-3"
              loading="lazy"
            />
            <span className="font-bold text-2xl text-teal-600">E Commerce</span>
          </div>
  
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-700 font-medium transition-colors duration-200 hover:text-teal-600 focus:text-teal-600 outline-none"
              >
                <span className="pb-1">
                  {link.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
              </a>
            ))}
          </div>
  
          {/* Hamburger Button */}
          <button
            type="button"
            className="md:hidden flex items-center text-gray-700 hover:text-teal-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
  
        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col items-center space-y-2 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 font-medium text-lg hover:text-teal-600 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  };
