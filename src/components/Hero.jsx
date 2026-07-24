import { motion } from 'framer-motion'
import clanData from '../data/clanData.json'

const Hero = () => {
  const { clanInfo } = clanData

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep layered background */}
      <div className="absolute inset-0">
        {/* Subtle radial red glow from center, much lower opacity so the background image shows through */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-background/30" />

        {/* Tactical grid - kept for texture */}
        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,30,39,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,30,39,0.5)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

        {/* Diagonal light sweep */}
        <div className="absolute -inset-x-1/4 top-0 h-full bg-gradient-to-b from-accent/5 via-transparent to-transparent rotate-1" />

        {/* Light vignette - much reduced so background image stays visible, just enough to keep text readable at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.4)_100%)]" />

        {/* Top and bottom fade to blend with adjacent sections - reduced opacity */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 6px rgba(255,30,39,0.8)',
            }}
            animate={{
              y: [0, -1200],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="relative inline-block">
            {/* Outer pulsing ring */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 40px rgba(255,30,39,0.35), 0 0 100px rgba(255,30,39,0.15)",
                  "0 0 80px rgba(255,30,39,0.6), 0 0 160px rgba(255,30,39,0.3)",
                  "0 0 40px rgba(255,30,39,0.35), 0 0 100px rgba(255,30,39,0.15)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-3 rounded-full border border-accent/30"
            />
            {/* Rotating dashed ring for tactical feel */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-dashed border-accent/20"
            />
            <div className="relative w-44 h-44 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-card to-black p-5 flex items-center justify-center border-2 border-accent/80 mx-auto backdrop-blur-md overflow-hidden shadow-glow-lg">
              <img
                src="/logo.png"
                alt={clanInfo.name}
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,30,39,0.7)]"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron text-white mb-4 tracking-wider"
          style={{ textShadow: '0 0 40px rgba(255,30,39,0.4)' }}
        >
          {clanInfo.name}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="w-32 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-rajdhani font-semibold text-accent mb-6 tracking-[0.2em]"
        >
          {clanInfo.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg font-rajdhani text-secondary mb-12 tracking-widest uppercase"
        >
          Est. {clanInfo.founded}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-shine px-10 py-4 bg-gradient-to-r from-accent to-accent-dark text-white font-orbitron font-bold text-lg tracking-wide rounded-sm hover:scale-105 transition-transform duration-300 shadow-glow-md hover:shadow-glow-lg"
            data-hoverable
          >
            JOIN US
          </button>
          <button
            onClick={() => scrollToSection('#scrims')}
            className="btn-shine px-10 py-4 border-2 border-accent/70 text-accent font-orbitron font-bold text-lg tracking-wide rounded-sm hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-glow-md"
            data-hoverable
          >
            VIEW RESULTS
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent rounded-full flex justify-center pt-2 shadow-glow-sm"
        >
          <div className="w-1 h-3 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero