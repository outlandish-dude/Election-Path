import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, ChevronRight, AlertCircle } from 'lucide-react';

const AssistantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'bot', 
      text: "Hi! I'm your ElectionPath assistant. I can help you understand any stage of the election or define tricky terms. What would you like to know?",
      source: 'system'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const [context, setContext] = useState('General Election Info');

  const quickActions = [
    "What happens before voting?",
    "What is nomination?",
    "How are votes counted?",
    "What happens on polling day?"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'journey', 'timeline', 'glossary'];
      let currentContext = 'General Election Info';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
             currentContext = section.charAt(0).toUpperCase() + section.slice(1);
             break;
          }
        }
      }
      setContext(currentContext);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSend = async (text) => {
    const messageText = typeof text === 'string' ? text : inputValue;
    if (!messageText.trim()) return;

    const userMsg = { id: Date.now(), type: 'user', text: messageText };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);
    setError(null);

    try {
      // Small delay for realism
      await new Promise(resolve => setTimeout(resolve, 500));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText, context }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        type: 'bot', 
        text: data.reply,
        source: data.source 
      }]);
    } catch (err) {
      console.error(err);
      setError("Sorry, I'm having trouble connecting right now. Please try again later.");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(true)}
        aria-label="Open Assistant"
        className={`fixed bottom-6 right-6 z-40 w-16 h-16 bg-charcoal-900 dark:bg-ivory-100 text-white dark:text-charcoal-900 rounded-full shadow-premium dark:shadow-premium-dark flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-slate ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-violet opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-accent-violet"></span>
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[600px] max-h-[85vh]"
          >
            {/* Premium Header */}
            <div className="bg-gradient-to-r from-charcoal-900 to-charcoal-800 dark:from-charcoal-800 dark:to-charcoal-700 text-white p-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                  <Bot className="w-6 h-6 text-accent-violet" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight text-white">Civic Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-accent-emerald rounded-full animate-pulse"></span>
                    <p className="text-[10px] text-ivory-300 font-medium uppercase tracking-wider">AI-Powered Guide</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-ivory-50/50 dark:bg-charcoal-900 scroll-smooth">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center shadow-sm
                      ${msg.type === 'user' ? 'bg-accent-violet text-white' : 'bg-white dark:bg-charcoal-800 border border-ivory-200 dark:border-charcoal-700 text-charcoal-600 dark:text-ivory-300'}
                    `}>
                      {msg.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className={`p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm
                        ${msg.type === 'user' 
                          ? 'bg-accent-violet text-white rounded-tr-none' 
                          : 'bg-white dark:bg-charcoal-800 border border-ivory-100 dark:border-charcoal-700 text-charcoal-900 dark:text-ivory-100 rounded-tl-none'}
                      `}>
                        {msg.text.split('\n').map((line, i) => (
                          <p key={i} className={i > 0 ? 'mt-2' : ''}>
                            {line.split('**').map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
                          </p>
                        ))}
                      </div>
                      {msg.type === 'bot' && msg.source && msg.source !== 'system' && (
                        <p className={`text-[9px] font-bold uppercase tracking-widest px-1
                          ${msg.source !== 'local_fallback' ? 'text-accent-violet' : 'text-orange-500'}
                        `}>
                          {msg.source !== 'local_fallback' ? '✨ AI Assistant' : '⚠️ Offline Mode'}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-charcoal-800 border border-ivory-200 dark:border-charcoal-700 text-charcoal-600 dark:text-ivory-300 flex items-center justify-center shadow-sm">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-white dark:bg-charcoal-800 border border-ivory-100 dark:border-charcoal-700 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center shadow-sm">
                      <span className="w-1.5 h-1.5 bg-accent-violet/60 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-accent-violet/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-1.5 h-1.5 bg-accent-violet/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex justify-center"
                >
                  <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 text-xs py-2 px-3 rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                </motion.div>
              )}

              {/* Quick Reply Chips */}
              {!isTyping && messages[messages.length - 1].type === 'bot' && (
                <div className="flex flex-wrap gap-2 mt-4 ml-10">
                  {quickActions.map((action, i) => (
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={i}
                      onClick={() => handleSend(action)}
                      className="text-[11px] font-semibold text-accent-violet dark:text-ivory-100 bg-accent-violet/5 dark:bg-charcoal-800 border border-accent-violet/20 dark:border-charcoal-600 px-3 py-1.5 rounded-full hover:bg-accent-violet hover:text-white dark:hover:bg-ivory-200 dark:hover:text-charcoal-900 transition-all shadow-sm flex items-center gap-1"
                    >
                      {action} <ChevronRight className="w-3 h-3" />
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-charcoal-800 border-t border-ivory-100 dark:border-charcoal-700">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }} 
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask anything about elections..."
                  className="w-full bg-ivory-50 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-700 rounded-2xl pl-4 pr-12 py-3 text-sm focus:bg-white dark:focus:bg-charcoal-800 focus:ring-2 focus:ring-accent-violet focus:border-transparent transition-all outline-none text-charcoal-900 dark:text-ivory-100 placeholder-charcoal-400 dark:placeholder-ivory-500"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 w-9 h-9 rounded-xl bg-charcoal-900 dark:bg-ivory-200 text-white dark:text-charcoal-900 flex items-center justify-center hover:bg-charcoal-800 dark:hover:bg-ivory-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="flex items-center justify-center gap-1.5 mt-3">
                <Sparkles className="w-3 h-3 text-accent-gold" />
                <p className="text-[10px] text-charcoal-400 dark:text-ivory-500 font-medium tracking-tight">AI-Powered Educational Resource</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AssistantWidget;
