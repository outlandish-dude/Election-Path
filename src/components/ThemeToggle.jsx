import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 dark:bg-charcoal-800/80 backdrop-blur-md shadow-sm border border-ivory-200 dark:border-charcoal-700 text-charcoal-800 dark:text-ivory-100 hover:scale-105 transition-transform duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-slate relative`}
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun 
          className={`absolute w-4 h-4 md:w-5 md:h-5 transition-all duration-500 ease-in-out ${
            theme === 'dark' ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
        {/* Moon Icon */}
        <Moon 
          className={`absolute w-4 h-4 md:w-5 md:h-5 transition-all duration-500 ease-in-out ${
            theme === 'light' ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
      </div>
      <span className="absolute right-full mr-3 bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-ivory-100 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm border border-ivory-200 dark:border-charcoal-700 pointer-events-none hidden md:block">
        Premium {theme === 'light' ? 'Dark' : 'White'}
      </span>
    </button>
  );
};

export default ThemeToggle;
