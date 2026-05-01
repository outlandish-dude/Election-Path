import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Bot,
  Calendar,
  CheckCircle2,
  CheckSquare,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const heroPanels = {
  journey: {
    label: 'Journey',
    icon: UserCheck,
    title: 'Walk through every election phase',
    description: 'Start with registration, move through nominations and campaigning, then understand polling, counting, and results.',
    accent: 'emerald',
    href: '#journey',
    stats: ['9 guided phases', 'Plain-language examples', 'Common mistakes explained'],
    preview: [
      'Register and verify voter details',
      'Understand candidates and campaigns',
      'Follow polling, counting, and results',
    ],
  },
  timeline: {
    label: 'Timeline',
    icon: Calendar,
    title: 'See what happens and when',
    description: 'Track the election cycle as a sequence of dates, deadlines, active periods, and final result milestones.',
    accent: 'gold',
    href: '#timeline',
    stats: ['Key deadlines', 'Active status markers', 'Cycle view'],
    preview: ['Announcement', 'Campaign period', 'Polling day', 'Counting'],
  },
  glossary: {
    label: 'Glossary',
    icon: BookOpen,
    title: 'Decode election terms quickly',
    description: 'Search the language of elections without getting lost in jargon or partisan noise.',
    accent: 'slate',
    href: '#glossary',
    stats: ['Searchable terms', 'Simple definitions', 'Beginner friendly'],
    preview: ['Constituency', 'Ballot', 'Manifesto', 'Returning Officer'],
  },
  quiz: {
    label: 'Quiz',
    icon: CheckSquare,
    title: 'Check your understanding as you learn',
    description: 'Use short questions and helpful feedback to turn the guide into an active learning experience.',
    accent: 'violet',
    href: '#quiz',
    stats: ['Instant feedback', 'Progress markers', 'Review prompts'],
    preview: ['First step?', 'Fair play rules?', 'Who declares results?'],
  },
  assistant: {
    label: 'Assistant',
    icon: Bot,
    title: 'Ask election questions anytime',
    description: 'Open the assistant when you want a quick explanation, a simpler example, or help connecting concepts.',
    accent: 'emerald',
    href: null,
    stats: ['Context-aware help', 'Simple answers', 'Available anytime'],
    preview: ['What is a manifesto?', 'Why verify voter lists?', 'Explain polling day'],
  },
};

const accentClasses = {
  emerald: {
    text: 'text-accent-emerald',
    bg: 'bg-accent-emerald',
    soft: 'bg-accent-emerald/10',
    ring: 'ring-accent-emerald/20',
    border: 'border-accent-emerald/25',
    gradient: 'from-accent-emerald to-charcoal-900 dark:to-ivory-100',
  },
  gold: {
    text: 'text-accent-gold',
    bg: 'bg-accent-gold',
    soft: 'bg-accent-gold/10',
    ring: 'ring-accent-gold/20',
    border: 'border-accent-gold/25',
    gradient: 'from-accent-gold to-charcoal-900 dark:to-ivory-100',
  },
  slate: {
    text: 'text-accent-slate',
    bg: 'bg-accent-slate',
    soft: 'bg-accent-slate/10',
    ring: 'ring-accent-slate/20',
    border: 'border-accent-slate/25',
    gradient: 'from-accent-slate to-charcoal-900 dark:to-ivory-100',
  },
  violet: {
    text: 'text-accent-violet',
    bg: 'bg-accent-violet',
    soft: 'bg-accent-violet/10',
    ring: 'ring-accent-violet/20',
    border: 'border-accent-violet/25',
    gradient: 'from-accent-violet to-charcoal-900 dark:to-ivory-100',
  },
};

const Hero = () => {
  const [activePanel, setActivePanel] = useState('journey');
  const active = heroPanels[activePanel];
  const activeAccent = accentClasses[active.accent];
  const ActiveIcon = active.icon;

  const scrollToSection = (target) => {
    const section = document.querySelector(target);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openAssistant = () => {
    const btn = document.querySelector('button[aria-label="Open Assistant"]');
    if (btn) btn.click();
  };

  const handleTabClick = (key) => {
    setActivePanel(key);
    if (key === 'assistant') openAssistant();
  };

  const handlePrimaryClick = () => {
    setActivePanel('journey');
    scrollToSection('#journey');
  };

  const handleSecondaryClick = () => {
    setActivePanel('timeline');
    scrollToSection('#timeline');
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-14 lg:pt-40 lg:pb-24" id="hero">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.14),transparent_30%),linear-gradient(180deg,#FDFDFC_0%,#F9F9F8_48%,#FFFFFF_100%)] transition-colors duration-500 dark:bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.20),transparent_32%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_30%),linear-gradient(180deg,#121214_0%,#1E1E22_62%,#121214_100%)]"></div>
        <div className="hero-grid absolute inset-0 opacity-[0.32] dark:opacity-[0.18]"></div>
        <div className="absolute left-[-9rem] top-20 h-80 w-80 rounded-full bg-accent-emerald/15 blur-[90px] animate-blob"></div>
        <div className="animation-delay-2000 absolute right-[-7rem] top-28 h-96 w-96 rounded-full bg-accent-violet/15 blur-[110px] animate-blob"></div>
        <div className="animation-delay-4000 absolute bottom-8 left-1/2 h-72 w-72 rounded-full bg-accent-gold/10 blur-[100px] animate-blob"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="text-center lg:text-left"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-ivory-200/80 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-charcoal-700 shadow-sm backdrop-blur-md dark:border-charcoal-700/80 dark:bg-charcoal-800/70 dark:text-ivory-200">
              <ShieldCheck className="h-4 w-4 text-accent-emerald" />
              Neutral • Non-Partisan • Educational
            </div>

            <h1 className="mx-auto max-w-5xl text-4xl font-extrabold leading-[1.04] tracking-tight text-charcoal-900 dark:text-ivory-50 sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
              Understand elections with{' '}
              <span className="bg-gradient-to-r from-accent-emerald via-accent-gold to-accent-violet bg-clip-text text-transparent">
                clarity
              </span>
              , not confusion.
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg font-light leading-relaxed text-charcoal-600 dark:text-ivory-400 md:text-xl lg:mx-0">
              Follow the election process step by step, ask questions anytime, and learn how democracy works in a simple and interactive way.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button
                type="button"
                onClick={handlePrimaryClick}
                className="group inline-flex items-center justify-center rounded-2xl bg-charcoal-900 px-7 py-4 text-base font-bold text-white shadow-[0_18px_40px_-18px_rgba(16,185,129,0.85)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-charcoal-800 hover:shadow-[0_22px_48px_-18px_rgba(16,185,129,0.95)] focus:outline-none focus:ring-2 focus:ring-accent-emerald focus:ring-offset-2 dark:bg-ivory-100 dark:text-charcoal-900 dark:hover:bg-white dark:focus:ring-offset-charcoal-900 md:text-lg"
              >
                Start Guided Journey
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={handleSecondaryClick}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-charcoal-900/15 bg-white/55 px-7 py-4 text-base font-bold text-charcoal-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-accent-gold/40 hover:text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 dark:border-ivory-100/15 dark:bg-charcoal-800/55 dark:text-ivory-100 dark:focus:ring-offset-charcoal-900 md:text-lg"
              >
                <span className="absolute inset-0 -translate-x-full bg-accent-gold/12 transition-transform duration-300 group-hover:translate-x-0"></span>
                <span className="relative inline-flex items-center gap-2">
                  Explore Timeline
                  <Calendar className="h-5 w-5" />
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -left-8 top-10 h-20 w-20 rounded-3xl border border-white/50 bg-white/50 backdrop-blur-md dark:border-white/10 dark:bg-white/5"></div>
            <div className="absolute -right-6 bottom-16 h-24 w-24 rounded-full border border-accent-gold/30 bg-accent-gold/10"></div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/78 p-5 shadow-[0_28px_80px_-38px_rgba(0,0,0,0.45)] backdrop-blur-xl dark:border-charcoal-700/80 dark:bg-charcoal-800/78 dark:shadow-premium-dark">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-charcoal-400 dark:text-ivory-500">Learning dashboard</p>
                  <h2 className="mt-1 text-xl font-extrabold text-charcoal-900 dark:text-ivory-50">ElectionPath</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-charcoal-900 text-white dark:bg-ivory-100 dark:text-charcoal-900">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-3">
                {['Voter Registration', 'Campaigning Period', 'Polling Day'].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-ivory-200 bg-white/80 p-3 dark:border-charcoal-700 dark:bg-charcoal-900/45">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${index === 1 ? 'bg-accent-violet/12 text-accent-violet' : 'bg-accent-emerald/12 text-accent-emerald'}`}>
                      {index === 2 ? <CheckCircle2 className="h-5 w-5" /> : <span className="text-sm font-black">{index + 1}</span>}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-charcoal-900 dark:text-ivory-100">{item}</p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ivory-200 dark:bg-charcoal-700">
                        <div className={`h-full rounded-full ${index === 1 ? 'w-2/3 bg-accent-violet' : index === 2 ? 'w-1/3 bg-accent-gold' : 'w-full bg-accent-emerald'}`}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-charcoal-900 p-4 text-white dark:bg-ivory-100 dark:text-charcoal-900">
                <div className="mb-3 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-accent-emerald" />
                  <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-80">Assistant preview</p>
                </div>
                <p className="text-sm leading-relaxed opacity-90">Ask: “Why does voter list verification matter?”</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="mx-auto mt-12 max-w-6xl"
        >
          <div className="hide-scrollbar flex gap-2 overflow-x-auto rounded-3xl border border-white/70 bg-white/72 p-2 shadow-premium backdrop-blur-xl dark:border-charcoal-700/80 dark:bg-charcoal-800/72 dark:shadow-premium-dark sm:justify-center">
            {Object.entries(heroPanels).map(([key, item]) => {
              const Icon = item.icon;
              const isActive = activePanel === key;
              const accent = accentClasses[item.accent];

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleTabClick(key)}
                  className={`relative flex min-w-[132px] items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? `bg-charcoal-900 text-white shadow-md dark:bg-ivory-100 dark:text-charcoal-900`
                      : 'text-charcoal-600 hover:bg-ivory-100 hover:text-charcoal-900 dark:text-ivory-300 dark:hover:bg-charcoal-700 dark:hover:text-ivory-50'
                  }`}
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <motion.span
                      layoutId="heroActiveTab"
                      className={`absolute inset-0 rounded-2xl ring-1 ${accent.ring}`}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <Icon className={`relative h-4 w-4 ${isActive ? '' : accent.text}`} />
                  <span className="relative">{item.label}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePanel}
              initial={{ opacity: 0, y: -14, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.32, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className={`mt-4 rounded-[1.75rem] border ${activeAccent.border} bg-white/78 p-5 shadow-premium backdrop-blur-xl dark:bg-charcoal-800/78 dark:shadow-premium-dark sm:p-6`}>
                <div className="grid gap-5 lg:grid-cols-[1fr_1.15fr_auto] lg:items-center">
                  <div>
                    <div className={`mb-3 inline-flex items-center gap-2 rounded-full ${activeAccent.soft} px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${activeAccent.text}`}>
                      <ActiveIcon className="h-4 w-4" />
                      {active.label}
                    </div>
                    <h3 className="text-2xl font-extrabold text-charcoal-900 dark:text-ivory-50">{active.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-charcoal-600 dark:text-ivory-400 sm:text-base">{active.description}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {active.stats.map((stat) => (
                      <div key={stat} className="rounded-2xl border border-ivory-200 bg-ivory-50/80 p-4 dark:border-charcoal-700 dark:bg-charcoal-900/40">
                        <CheckCircle2 className={`mb-3 h-5 w-5 ${activeAccent.text}`} />
                        <p className="text-sm font-semibold text-charcoal-800 dark:text-ivory-200">{stat}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => (activePanel === 'assistant' ? openAssistant() : scrollToSection(active.href))}
                    className={`inline-flex items-center justify-center rounded-2xl ${activeAccent.bg} px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] focus:outline-none focus:ring-2 ${activeAccent.ring}`}
                  >
                    Open
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
                  {active.preview.map((item) => (
                    <span key={item} className="whitespace-nowrap rounded-full border border-ivory-200 bg-white px-4 py-2 text-sm font-medium text-charcoal-700 dark:border-charcoal-700 dark:bg-charcoal-900/50 dark:text-ivory-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
