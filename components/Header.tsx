
import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About Us', href: '#/about' },
    { name: 'Impact Stories', href: '#/impact-stories' },
    { name: 'Join Us', href: '#/join-us' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#/" className="flex items-center space-x-2 group focus-visible:outline-rose-600 p-2 rounded-lg" aria-label="God-heart Foundation Home">
              <div className="bg-rose-600 p-2 rounded-lg group-hover:bg-rose-700 transition-colors">
                <Heart className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-indigo-600">
                God-heart
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-rose-600 font-medium transition-colors text-sm lg:text-base focus-visible:outline-rose-600 p-1 rounded"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#/donate" 
              className="bg-rose-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-rose-700 transition-all shadow-lg shadow-rose-200 active:scale-95 focus-visible:ring-4 focus-visible:ring-rose-200 outline-none"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-8 h-8" aria-hidden="true" /> : <Menu className="w-8 h-8" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        id="mobile-menu"
        className={`md:hidden bg-white border-b border-slate-200 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        aria-hidden={!isOpen}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors focus-visible:bg-rose-50 outline-none"
            >
              {link.name}
            </a>
          ))}
          <div className="p-3">
            <a 
              href="#/donate"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-rose-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-rose-700 transition-all focus-visible:ring-4 focus-visible:ring-rose-200 outline-none"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
