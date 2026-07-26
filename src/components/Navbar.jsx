import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = ({ viewMode, setViewMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = viewMode === 'warfare'
    ? [
        { name: 'About', href: '#about' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Roster', href: '#roster' },
        { name: 'Scrims', href: '#scrims' },
        { name: 'Contact', href: '#contact' },
      ]
    : [
        { name: 'About', href: '#about' },
        { name: 'Roster', href: '#roster' },
        { name: 'Contact', href: '#contact' },
      ]

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false)
    
    // Wait for the mobile menu close animation (300ms) to finish before scrolling,
    // so the page layout is stable and scrollIntoView calculates the correct position
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 350)
  }

  const handleModeSwitch = (mode) => {
    setViewMode(mode)
    setIsMobileMenuOpen(false)
    
    // Wait briefly for the new mode's sections to render before scrolling,
    // since switching modes changes which sections exist on the page
    setTimeout(() => {
      const heroElement = document.querySelector('#hero')
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/0 backdrop-blur-sm border-b border-accent/25 shadow-[0_2px_25px_rgba(255,30,39,0.15)]'
          : 'bg-gradient-to-b from-black/20 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-accent/30 blur-md group-hover:bg-accent/50 transition-all" />
                <img
                  src="/logo.png"
                  alt="93B Clan Logo"
                  className="relative h-11 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,30,39,0.6)] group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-2xl font-black font-orbitron text-white tracking-wider group-hover:text-accent transition-colors">
                93B
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="relative text-secondary hover:text-white font-rajdhani text-lg font-semibold tracking-wide transition-colors group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent shadow-glow-sm transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <div className="hidden md:flex items-center gap-2 bg-card/40 border border-accent/20 rounded-full p-1 ml-6">
                <button
                  onClick={() => handleModeSwitch('operation')}
                  className={`px-4 py-1.5 rounded-full text-sm font-orbitron font-bold tracking-wide transition-all ${
                    viewMode === 'operation'
                      ? 'bg-accent text-white shadow-glow-sm'
                      : 'text-secondary hover:text-white'
                  }`}
                  data-hoverable
                >
                  Operation Mode
                </button>
                <button
                  onClick={() => handleModeSwitch('warfare')}
                  className={`px-4 py-1.5 rounded-full text-sm font-orbitron font-bold tracking-wide transition-all ${
                    viewMode === 'warfare'
                      ? 'bg-accent text-white shadow-glow-sm'
                      : 'text-secondary hover:text-white'
                  }`}
                  data-hoverable
                >
                  Warfare Mode
                </button>
              </div>
            </div>
          </div>

          <div className="flex md:hidden flex-col gap-1 ml-auto">
            <button
              onClick={() => handleModeSwitch('operation')}
              className={`px-2.5 py-1 rounded text-[10px] font-orbitron font-bold tracking-wide transition-all leading-none ${
                viewMode === 'operation'
                  ? 'bg-accent text-white shadow-glow-sm'
                  : 'text-secondary border border-accent/30'
              }`}
              data-hoverable
            >
              OPERATION
            </button>
            <button
              onClick={() => handleModeSwitch('warfare')}
              className={`px-2.5 py-1 rounded text-[10px] font-orbitron font-bold tracking-wide transition-all leading-none ${
                viewMode === 'warfare'
                  ? 'bg-accent text-white shadow-glow-sm'
                  : 'text-secondary border border-accent/30'
              }`}
              data-hoverable
            >
              WARFARE
            </button>
          </div>

          <div className="md:hidden ml-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-accent hover:text-white transition-colors"
              data-hoverable
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/20 backdrop-blur-sm border-b border-accent/25"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="block text-secondary hover:text-accent hover:bg-accent/10 font-rajdhani text-lg font-medium transition-colors py-3 px-3 rounded"
                  data-hoverable
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar