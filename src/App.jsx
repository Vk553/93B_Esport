import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Roster from './components/Roster'
import Achievements from './components/Achievements'
import Scrims from './components/Scrims'
import OperationRoster from './components/OperationRoster'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState('warfare')

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
          <Navbar viewMode={viewMode} setViewMode={setViewMode} />
          {viewMode === 'warfare' ? (
            <>
              <Hero viewMode={viewMode} />
              <About />
              <Stats />
              <Achievements />
              <Roster />
              <Scrims />
              <Contact viewMode={viewMode} />
              <Footer viewMode={viewMode} />
            </>
          ) : (
            <>
              <Hero viewMode={viewMode} />
              <About />
              <OperationRoster />
              <Contact viewMode={viewMode} />
              <Footer viewMode={viewMode} />
            </>
          )}
        </div>
      )}
    </>
  )
}

export default App