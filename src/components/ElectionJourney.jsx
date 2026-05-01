import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { electionSteps } from '../data/electionData';
import * as Icons from 'lucide-react';

const ElectionJourney = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < electionSteps.length - 1) setActiveStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(prev => prev - 1);
  };

  const currentStepData = electionSteps[activeStep];
  
  // Dynamically get the icon component
  const IconComponent = Icons[currentStepData.icon] || Icons.HelpCircle;

  return (
    <section id="journey" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Election Journey</h2>
          <p className="text-lg md:text-xl text-charcoal-600 dark:text-ivory-400 font-light leading-relaxed">
            Follow the path an election takes from start to finish. Click on any step to understand how it works and why it matters.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Vertical Timeline Navigation (Desktop) / Horizontal Scroll (Mobile) */}
          <div className="w-full lg:w-1/3 relative">
            <div className="hidden lg:block absolute left-6 top-6 bottom-6 w-1 bg-ivory-300 dark:bg-charcoal-700 rounded-full"></div>
            <div 
              className="hidden lg:block absolute left-6 top-6 w-1 rounded-full bg-accent-slate transition-all duration-500 ease-out"
              style={{ height: `${(activeStep / (electionSteps.length - 1)) * 100}%` }}
            ></div>

            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-4 lg:gap-0 hide-scrollbar snap-x snap-mandatory">
              {electionSteps.map((step, index) => {
                const StepIcon = Icons[step.icon] || Icons.Circle;
                const isActive = index === activeStep;
                const isPast = index < activeStep;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`relative flex items-center gap-4 p-4 lg:p-6 rounded-2xl transition-all duration-300 min-w-[240px] lg:min-w-0 snap-center text-left group
                      ${isActive ? 'bg-white dark:bg-charcoal-800 shadow-premium dark:shadow-premium-dark transform lg:translate-x-2 border border-ivory-200 dark:border-charcoal-700' : 'hover:bg-ivory-100 dark:hover:bg-charcoal-800 border border-transparent'}
                    `}
                  >
                    <div className={`relative z-10 w-12 h-12 flex-shrink-0 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm
                      ${isActive ? 'bg-charcoal-900 dark:bg-ivory-100 text-white dark:text-charcoal-900 scale-110' : 
                        isPast ? 'bg-ivory-300 dark:bg-charcoal-700 text-charcoal-600 dark:text-ivory-300' : 'bg-ivory-200 dark:bg-charcoal-800 text-ivory-500 dark:text-charcoal-500'}
                    `}>
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-base transition-colors duration-300 ${isActive ? 'text-charcoal-900 dark:text-ivory-50' : 'text-charcoal-600 dark:text-ivory-400 group-hover:text-charcoal-900 dark:group-hover:text-ivory-100'}`}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-charcoal-400 dark:text-ivory-500 hidden lg:block mt-1 font-medium tracking-wide uppercase">Step {index + 1} of {electionSteps.length}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Detail Card */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="card border-0"
              >
                {/* Card Header */}
                <div className="bg-charcoal-900 dark:bg-ivory-100 p-8 md:p-12 text-white dark:text-charcoal-900 relative overflow-hidden">
                   {/* Abstract background shapes for header */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 dark:bg-black/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                  
                  <div className="flex items-center gap-5 mb-6 relative z-10">
                    <div className="p-4 bg-white/10 dark:bg-black/5 rounded-2xl backdrop-blur-md border border-white/10 dark:border-black/5">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="opacity-80 font-semibold text-xs tracking-widest uppercase mb-1 block">Phase {activeStep + 1}</span>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-white dark:text-charcoal-900">{currentStepData.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg md:text-xl opacity-90 font-light leading-relaxed relative z-10 max-w-2xl">
                    {currentStepData.description}
                  </p>
                </div>

                {/* Card Content */}
                <div className="p-8 md:p-12 space-y-8 bg-white dark:bg-charcoal-800">
                  <div className="bg-ivory-50 dark:bg-charcoal-900/50 p-6 rounded-2xl border border-ivory-200 dark:border-charcoal-700">
                    <h4 className="text-xs font-bold text-charcoal-500 dark:text-ivory-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Icons.Info className="w-4 h-4 text-accent-slate" /> What happens here
                    </h4>
                    <p className="text-charcoal-800 dark:text-ivory-100 leading-relaxed text-lg">{currentStepData.details}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-ivory-50 dark:bg-charcoal-900/50 p-6 rounded-2xl border border-ivory-200 dark:border-charcoal-700">
                      <h4 className="text-xs font-bold text-charcoal-500 dark:text-ivory-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Icons.Target className="w-4 h-4 text-accent-emerald" /> Why it matters
                      </h4>
                      <p className="text-charcoal-700 dark:text-ivory-300 leading-relaxed">{currentStepData.whyItMatters}</p>
                    </div>
                    <div className="bg-ivory-50 dark:bg-charcoal-900/50 p-6 rounded-2xl border border-ivory-200 dark:border-charcoal-700">
                      <h4 className="text-xs font-bold text-charcoal-500 dark:text-ivory-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Icons.Users className="w-4 h-4 text-accent-violet" /> Who is involved
                      </h4>
                      <p className="text-charcoal-700 dark:text-ivory-300 leading-relaxed">{currentStepData.whoIsInvolved}</p>
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/30">
                    <h4 className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Icons.AlertTriangle className="w-4 h-4" /> Common Mistake
                    </h4>
                    <p className="text-red-900 dark:text-red-200 leading-relaxed">{currentStepData.commonMistakes}</p>
                  </div>

                  <div className="bg-ivory-100 dark:bg-charcoal-700 p-6 rounded-2xl border border-ivory-200 dark:border-charcoal-600 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent-gold"></div>
                    <h4 className="text-xs font-bold text-charcoal-500 dark:text-ivory-300 uppercase tracking-widest mb-3 flex items-center gap-2 ml-2">
                      <Icons.Lightbulb className="w-4 h-4 text-accent-gold" /> Real Example
                    </h4>
                    <p className="text-charcoal-800 dark:text-ivory-100 italic ml-2">"{currentStepData.example}"</p>
                  </div>
                </div>

                {/* Card Footer Navigation */}
                <div className="p-6 md:p-8 border-t border-ivory-200 dark:border-charcoal-700 bg-ivory-50 dark:bg-charcoal-800 flex justify-between items-center rounded-b-3xl">
                  <button 
                    onClick={handlePrev}
                    disabled={activeStep === 0}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all
                      ${activeStep === 0 ? 'text-charcoal-300 dark:text-charcoal-600 cursor-not-allowed' : 'text-charcoal-700 dark:text-ivory-300 hover:bg-white dark:hover:bg-charcoal-700 hover:shadow-sm border border-transparent hover:border-ivory-200 dark:hover:border-charcoal-600'}`}
                  >
                    <Icons.ArrowLeft className="w-4 h-4" /> Previous
                  </button>
                  
                  <div className="flex gap-2">
                    {electionSteps.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${idx === activeStep ? 'bg-accent-slate w-6' : 'bg-ivory-300 dark:bg-charcoal-600'}`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={handleNext}
                    disabled={activeStep === electionSteps.length - 1}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all
                      ${activeStep === electionSteps.length - 1 ? 'text-charcoal-300 dark:text-charcoal-600 cursor-not-allowed' : 'text-white bg-charcoal-900 hover:bg-charcoal-800 dark:bg-ivory-100 dark:text-charcoal-900 dark:hover:bg-ivory-200 shadow-md hover:shadow-lg hover:-translate-y-0.5'}`}
                  >
                    Next <Icons.ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ElectionJourney;
