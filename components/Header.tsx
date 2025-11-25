import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white mr-2 shadow-indigo-300 shadow-md">
              <Rocket size={18} fill="currentColor" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Nova<span className="text-indigo-600">UI</span></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Features', 'Testimonials', 'Pricing', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-slate-500 hover:text-indigo-600 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-500 hover:text-indigo-600 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['Features', 'Testimonials', 'Pricing', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="w-full justify-center">Sign In</Button>
              <Button variant="primary" className="w-full justify-center">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;