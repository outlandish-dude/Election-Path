import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/80 dark:bg-charcoal-900/80 backdrop-blur-md shadow-sm border-b border-ivory-200 dark:border-charcoal-700' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Brand */}
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-accent-emerald/10 text-accent-emerald flex items-center justify-center group-hover:bg-accent-emerald/20 transition-colors">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-wide text-charcoal-900 dark:text-ivory-50 group-hover:text-accent-emerald transition-colors">
            ELECTION PATH
          </span>
        </button>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <ThemeToggle className="relative" />
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
