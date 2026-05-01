import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from '../data/electionData';
import { CheckCircle, XCircle, HelpCircle, ArrowRight, RefreshCw, Award } from 'lucide-react';

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const question = quizQuestions[currentQuestion];

  const handleAnswerClick = (index) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    if (index === question.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  return (
    <section id="quiz" className="py-20 lg:py-32 bg-ivory-50 dark:bg-charcoal-800 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Check Your Understanding</h2>
          <p className="text-lg md:text-xl text-charcoal-600 dark:text-ivory-400 font-light leading-relaxed">
            Test what you've learned about the election process with this quick interactive quiz.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="card border-0"
              >
                {/* Quiz Header - Progress */}
                <div className="bg-ivory-100 dark:bg-charcoal-700 px-8 py-5 border-b border-ivory-200 dark:border-charcoal-600 flex justify-between items-center rounded-t-3xl">
                  <span className="text-xs font-bold text-charcoal-600 dark:text-ivory-300 uppercase tracking-widest">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <div className="flex gap-1.5">
                    {quizQuestions.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`h-2 rounded-full transition-all duration-500
                          ${idx === currentQuestion ? 'w-8 bg-accent-violet' : 
                            idx < currentQuestion ? 'w-2 bg-accent-violet/40' : 'w-2 bg-ivory-300 dark:bg-charcoal-600'}
                        `}
                      />
                    ))}
                  </div>
                </div>

                {/* Question */}
                <div className="p-8 md:p-12 bg-white dark:bg-charcoal-800 rounded-b-3xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 dark:text-ivory-50 mb-10 leading-tight">
                    {question.question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-4 mb-10">
                    {question.options.map((option, idx) => {
                      const isSelected = selectedAnswer === idx;
                      const isCorrect = idx === question.correctAnswer;
                      
                      let buttonClass = "w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ";
                      let icon = null;

                      if (!isAnswered) {
                        buttonClass += "border-ivory-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-800 hover:border-accent-violet/50 hover:bg-ivory-50 dark:hover:bg-charcoal-700 text-charcoal-800 dark:text-ivory-100 shadow-sm";
                      } else if (isCorrect) {
                        buttonClass += "border-accent-emerald bg-accent-emerald/10 text-charcoal-900 dark:text-ivory-50 shadow-md transform scale-[1.02]";
                        icon = <CheckCircle className="w-6 h-6 text-accent-emerald" />;
                      } else if (isSelected && !isCorrect) {
                        buttonClass += "border-red-500 bg-red-500/10 text-charcoal-900 dark:text-ivory-50 opacity-80";
                        icon = <XCircle className="w-6 h-6 text-red-500" />;
                      } else {
                        buttonClass += "border-ivory-100 dark:border-charcoal-700 bg-ivory-50 dark:bg-charcoal-800 opacity-40 text-charcoal-800 dark:text-ivory-100";
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerClick(idx)}
                          disabled={isAnswered}
                          className={`${buttonClass} flex justify-between items-center group`}
                        >
                          <span className="font-medium text-lg">{option}</span>
                          {icon && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                              {icon}
                            </motion.div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback area */}
                  <AnimatePresence>
                    {isAnswered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="overflow-hidden"
                      >
                         <div className={`p-6 rounded-2xl mb-8 flex gap-4 items-start
                          ${selectedAnswer === question.correctAnswer ? 'bg-accent-emerald/10 border border-accent-emerald/20' : 'bg-accent-gold/10 border border-accent-gold/20'}
                        `}>
                          <HelpCircle className={`w-6 h-6 flex-shrink-0 mt-0.5 ${selectedAnswer === question.correctAnswer ? 'text-accent-emerald' : 'text-accent-gold'}`} />
                          <div>
                            <p className={`font-bold mb-2 text-lg ${selectedAnswer === question.correctAnswer ? 'text-accent-emerald' : 'text-accent-gold'}`}>
                              {selectedAnswer === question.correctAnswer ? "Excellent!" : "Not quite right."}
                            </p>
                            <p className="text-charcoal-700 dark:text-ivory-300 leading-relaxed font-light">{question.hint}</p>
                          </div>
                        </div>
                        
                        <button
                          onClick={handleNext}
                          className="w-full btn-primary py-4 flex justify-center items-center gap-3 text-lg"
                        >
                          {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-10 md:p-16 text-center border-0 bg-white dark:bg-charcoal-800"
              >
                <div className="w-28 h-28 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Award className="w-14 h-14 text-accent-gold" />
                </div>
                
                <h3 className="text-4xl font-extrabold text-charcoal-900 dark:text-ivory-50 mb-4">Quiz Completed!</h3>
                <p className="text-xl md:text-2xl text-charcoal-600 dark:text-ivory-400 mb-10 font-light">
                  You scored <span className="font-bold text-accent-violet">{score}</span> out of {quizQuestions.length}.
                </p>

                <div className="bg-ivory-50 dark:bg-charcoal-900/50 rounded-2xl p-8 mb-10 max-w-md mx-auto border border-ivory-200 dark:border-charcoal-700 shadow-sm">
                  <p className="text-charcoal-800 dark:text-ivory-100 font-medium text-lg leading-relaxed">
                    {score === quizQuestions.length ? "Outstanding! You're an election expert." :
                     score >= quizQuestions.length / 2 ? "Great job! You have a solid grasp of the basics." :
                     "Keep exploring the interactive guide to learn more about how elections work."}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={resetQuiz} className="btn-secondary flex justify-center items-center gap-2">
                    <RefreshCw className="w-5 h-5" /> Try Again
                  </button>
                  <a href="#journey" className="btn-primary">
                    Review the Journey
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
