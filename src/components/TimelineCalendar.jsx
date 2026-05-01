import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { timelineEvents } from '../data/electionData';
import { Calendar, CheckCircle2, Clock, CircleDashed } from 'lucide-react';

const TimelineCalendar = () => {
  return (
    <section id="timeline" className="py-20 lg:py-32 bg-ivory-50 dark:bg-charcoal-800 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Election Schedule</h2>
          <p className="text-lg md:text-xl text-charcoal-600 dark:text-ivory-400 font-light leading-relaxed">
            Keep track of key dates and deadlines. This timeline shows the typical progression of an election cycle.
          </p>
        </div>

        <div className="max-w-4xl mx-auto card p-8 md:p-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-ivory-200 dark:border-charcoal-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-ivory-100 dark:bg-charcoal-700 rounded-2xl">
                <Calendar className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="text-2xl font-bold">Current Cycle</h3>
            </div>
            <span className="bg-ivory-100 dark:bg-charcoal-700 text-charcoal-600 dark:text-ivory-300 text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-widest border border-ivory-200 dark:border-charcoal-600">
              Sample Data
            </span>
          </div>

          <div className="relative">
            {/* Main vertical line */}
            <div className="absolute left-[23px] md:left-1/2 top-4 bottom-4 w-0.5 bg-ivory-200 dark:bg-charcoal-700 transform md:-translate-x-1/2"></div>

            <div className="space-y-8 relative">
              {timelineEvents.map((event, index) => {
                const isEven = index % 2 === 0;
                
                // Determine icon and color based on status
                let StatusIcon = CircleDashed;
                let iconColor = "text-charcoal-300 dark:text-charcoal-600";
                let borderColor = "border-ivory-200 dark:border-charcoal-700";
                let bgClass = "bg-white dark:bg-charcoal-800";
                
                if (event.status === 'completed') {
                  StatusIcon = CheckCircle2;
                  iconColor = "text-accent-emerald";
                  borderColor = "border-ivory-200 dark:border-charcoal-700";
                } else if (event.status === 'active') {
                  StatusIcon = Clock;
                  iconColor = "text-accent-violet";
                  bgClass = "bg-ivory-50 dark:bg-charcoal-900/50 ring-1 ring-accent-violet/30";
                  borderColor = "border-accent-violet/50";
                }

                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={index} 
                    className={`relative flex items-center md:justify-between w-full group
                      ${!isEven ? 'md:flex-row-reverse' : ''}
                    `}
                  >
                    {/* Content */}
                    <div className={`ml-16 md:ml-0 w-full md:w-[45%] flex flex-col
                      ${!isEven ? 'md:items-start' : 'md:items-end md:text-right'}
                    `}>
                      <div className={`p-6 rounded-2xl border ${borderColor} shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 w-full
                        ${bgClass}
                      `}>
                        <div className="text-xs font-bold text-charcoal-400 dark:text-ivory-500 mb-2 uppercase tracking-widest">{event.date}</div>
                        <h4 className={`text-lg font-bold ${event.status === 'active' ? 'text-accent-violet' : 'text-charcoal-900 dark:text-ivory-100'}`}>
                          {event.title}
                        </h4>
                        {event.status === 'active' && (
                          <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-accent-violet bg-accent-violet/10 dark:bg-accent-violet/20 px-3 py-1.5 rounded-xl">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse"></span>
                            You are here
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-2xl border-4 border-ivory-50 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 flex items-center justify-center transform md:-translate-x-1/2 shadow-sm z-10 transition-transform duration-300 group-hover:scale-110">
                      <StatusIcon className={`w-5 h-5 ${iconColor}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineCalendar;
