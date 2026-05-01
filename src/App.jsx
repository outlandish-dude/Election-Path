import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ElectionJourney from './components/ElectionJourney'
import TimelineCalendar from './components/TimelineCalendar'
import Glossary from './components/Glossary'
import QuizSection from './components/QuizSection'
import TrustSection from './components/TrustSection'
import AssistantWidget from './components/AssistantWidget'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ivory-100 dark:bg-charcoal-900 font-sans selection:bg-accent-violet/30 selection:text-charcoal-900 dark:selection:text-ivory-100 transition-colors duration-500">
      <NavBar />
      <main>
        <Hero />
        <ElectionJourney />
        <TimelineCalendar />
        <Glossary />
        <QuizSection />
        <TrustSection />
      </main>
      <Footer />
      <AssistantWidget />
    </div>
  )
}

export default App
