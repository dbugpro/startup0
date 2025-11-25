import React from 'react';
import { Rocket, Twitter, Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4 text-white">
              <Rocket className="w-6 h-6 mr-2 text-indigo-500" />
              <span className="font-bold text-xl">NovaUI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering developers to build faster, better, and more beautiful web applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Contact', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} NovaUI Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center text-sm text-slate-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            <span>by Developers for Developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;