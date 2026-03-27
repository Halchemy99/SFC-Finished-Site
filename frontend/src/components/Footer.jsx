import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#22C55E] font-bold text-lg">SUPERFLY</span>
              <span className="text-white font-semibold text-sm">COMMERCE</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Sustainable Amazon Collective cutting through heavy fees with transparent, performance-based partnerships.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-[#22C55E] rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-[#22C55E] rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-[#22C55E] rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-[#22C55E] rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-[#22C55E] transition-colors">Quick Win Packages</a></li>
              <li><a href="#services" className="hover:text-[#22C55E] transition-colors">Expert Matching</a></li>
              <li><a href="#services" className="hover:text-[#22C55E] transition-colors">Growth Share Partnership</a></li>
              <li><a href="#services" className="hover:text-[#22C55E] transition-colors">Amazon Mastery Academy</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-[#22C55E] transition-colors">About Us</a></li>
              <li><a href="#philosophy" className="hover:text-[#22C55E] transition-colors">Philosophy</a></li>
              <li><a href="#pricing" className="hover:text-[#22C55E] transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-[#22C55E] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                <span>harry@superflycommerce.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                <span>+44 7969 614703</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                <span>Global Amazon Specialists</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Superfly Commerce. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#22C55E] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#22C55E] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#22C55E] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;