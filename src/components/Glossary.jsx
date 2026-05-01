import React, { useState } from 'react';
import { glossaryTerms } from '../data/electionData';
import { BookA, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filteredTerms = glossaryTerms.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="glossary" className="py-20 lg:py-32 bg-white dark:bg-charcoal-900 transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent-gold/5 filter blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent-emerald/5 filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-ivory-100 dark:bg-charcoal-800 text-accent-gold mb-6 shadow-sm border border-ivory-200 dark:border-charcoal-700">
            <BookA className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Election Glossary</h2>
          <p className="text-lg md:text-xl text-charcoal-600 dark:text-ivory-400 font-light leading-relaxed">
            Confused by political jargon? Look up terms here to understand what they really mean.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Search Box */}
          <div className="relative mb-10 shadow-sm group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-charcoal-400 dark:text-ivory-500 group-focus-within:text-accent-slate transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-14 pr-6 py-4 bg-white dark:bg-charcoal-800 border-2 border-ivory-200 dark:border-charcoal-700 rounded-2xl focus:ring-0 focus:border-accent-slate text-lg text-charcoal-900 dark:text-ivory-100 transition-all placeholder-charcoal-400 dark:placeholder-ivory-500 outline-none"
              placeholder="Search for a term (e.g., Ballot, Constituency)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Terms List */}
          <div className="bg-white dark:bg-charcoal-800 rounded-3xl shadow-premium dark:shadow-premium-dark border border-ivory-200 dark:border-charcoal-700 overflow-hidden transition-colors duration-500">
            {filteredTerms.length > 0 ? (
              <div className="divide-y divide-ivory-100 dark:divide-charcoal-700">
                {filteredTerms.map((item, index) => {
                  const isExpanded = expandedIndex === index;
                  
                  return (
                    <div key={index} className="transition-colors hover:bg-ivory-50 dark:hover:bg-charcoal-900/30">
                      <button
                        onClick={() => toggleExpand(index)}
                        className="w-full text-left px-6 py-5 md:py-6 flex justify-between items-center focus:outline-none group"
                      >
                        <h3 className={`text-lg md:text-xl font-bold transition-colors ${isExpanded ? 'text-accent-slate' : 'text-charcoal-900 dark:text-ivory-100 group-hover:text-accent-slate'}`}>
                          {item.term}
                        </h3>
                        <div className={`p-2 rounded-full transition-all duration-300 ${isExpanded ? 'bg-accent-slate/10 text-accent-slate rotate-180' : 'text-charcoal-400 dark:text-ivory-500 bg-ivory-100 dark:bg-charcoal-700 group-hover:bg-ivory-200 dark:group-hover:bg-charcoal-600'}`}>
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden px-6 md:px-8"
                          >
                            <div className="pb-6 pt-2">
                              <p className="text-charcoal-700 dark:text-ivory-300 leading-relaxed border-l-2 border-accent-gold pl-4 md:pl-6 py-1 text-lg font-light">
                                {item.definition}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-16 text-center text-charcoal-500 dark:text-ivory-400">
                <div className="w-20 h-20 bg-ivory-100 dark:bg-charcoal-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-charcoal-300 dark:text-ivory-500" />
                </div>
                <p className="text-xl font-medium mb-2">No terms found</p>
                <p className="text-charcoal-400 dark:text-ivory-500 mb-6">We couldn't find anything matching "{searchTerm}"</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="btn-secondary py-2"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glossary;
