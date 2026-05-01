import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-charcoal-900 py-16 lg:py-24 border-t border-ivory-200 dark:border-charcoal-800 transition-colors duration-500 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ivory-300 dark:via-charcoal-700 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal-900 dark:text-ivory-50 mb-10 tracking-tight">
            Ready to participate in <span className="gradient-text">democracy?</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 w-full sm:w-auto">
            <a 
              href="#journey" 
              className="btn-secondary w-full sm:w-auto"
            >
              Review Timeline
            </a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-primary w-full sm:w-auto shadow-premium dark:shadow-premium-dark"
            >
              Back to Top
            </button>
            <a 
              href="#glossary" 
              className="btn-secondary w-full sm:w-auto"
            >
              Explore Glossary
            </a>
          </div>
          {/* Disclaimer Section */}
          <div className="bg-ivory-50 dark:bg-charcoal-800/50 p-6 sm:p-8 rounded-3xl border border-ivory-200 dark:border-charcoal-700 mb-16 text-left max-w-3xl">
            <p className="text-charcoal-600 dark:text-ivory-300 text-sm mb-4 leading-relaxed">
              This website is developed as part of a Hack2Skill challenge for educational purposes only. It is a neutral, non-partisan platform designed to simplify understanding of the election process. The content is informational and does not promote any political party, candidate, or ideology.
            </p>
            <p className="text-charcoal-500 dark:text-ivory-400 text-xs italic opacity-80">
              While efforts have been made to ensure accuracy, users are encouraged to refer to official government sources for authoritative information.
            </p>
          </div>
          
          <div className="pt-10 border-t border-ivory-200 dark:border-charcoal-800 w-full text-charcoal-500 dark:text-ivory-400 text-sm flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-medium">© {new Date().getFullYear()} Rajdeep Dutta. All rights reserved.</p>
            
            {/* Contact Links */}
            <div className="flex gap-4 items-center">
              <a 
                href="https://www.linkedin.com/in/rajdeepdutta27/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory-100 dark:bg-charcoal-800 flex items-center justify-center hover:bg-accent-violet hover:text-white dark:hover:bg-accent-violet transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.608 0 4.27 2.372 4.27 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/outlandish-dude" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory-100 dark:bg-charcoal-800 flex items-center justify-center hover:bg-charcoal-900 hover:text-white dark:hover:bg-ivory-100 dark:hover:text-charcoal-900 transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
