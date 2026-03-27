import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Globe, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-[#22C55E] font-bold text-lg">SUPERFLY</span>
              <div className="w-6 h-6 ml-1 border-2 border-[#22C55E] rounded-full flex items-center justify-center">
                <Globe className="w-3 h-3 text-[#22C55E]" />
              </div>
            </div>
            <span className="text-gray-700 font-semibold text-sm">COMMERCE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-gray-700 hover:text-[#22C55E] transition-colors flex items-center gap-1 text-sm">
              <Globe className="w-4 h-4" />
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#22C55E] transition-colors flex items-center gap-1 text-sm">
              <User className="w-4 h-4" />
              About
            </a>
            <a href="#philosophy" className="text-gray-700 hover:text-[#22C55E] transition-colors flex items-center gap-1 text-sm">
              <Globe className="w-4 h-4" />
              Philosophy
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#22C55E] transition-colors flex items-center gap-1 text-sm">
              <ShoppingCart className="w-4 h-4" />
              Pricing
            </a>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-[#22C55E] transition-colors"
              >
                <Globe className="w-4 h-4" />
                <img src="https://flagcdn.com/w20/gb.png" alt="English" className="w-5 h-4" />
                <span className="text-sm">English</span>
              </button>
            </div>

            {/* CTA Buttons */}
            <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full px-6">
              Book Discovery Call
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-6">
              TikTok
            </Button>
            <button className="text-gray-700 hover:text-[#22C55E] transition-colors flex items-center gap-1">
              <User className="w-5 h-5" />
              <span className="text-sm">Login</span>
            </button>
            <button className="text-gray-700 hover:text-[#22C55E] transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <a href="#services" className="block text-gray-700 hover:text-[#22C55E] py-2">
              Services
            </a>
            <a href="#about" className="block text-gray-700 hover:text-[#22C55E] py-2">
              About
            </a>
            <a href="#philosophy" className="block text-gray-700 hover:text-[#22C55E] py-2">
              Philosophy
            </a>
            <a href="#pricing" className="block text-gray-700 hover:text-[#22C55E] py-2">
              Pricing
            </a>
            <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full mt-4">
              Book Discovery Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;