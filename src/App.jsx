import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Roster from './components/Roster'
import Scrims from './components/Scrims'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <CustomCursor />

      {/* Fixed background image — stays static behind all content while scrolling */}
      <div className="fixed-bg" />

      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Stats />
          <Roster />
          <Scrims />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App