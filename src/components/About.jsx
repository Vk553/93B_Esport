import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Gamepad2, Shield } from 'lucide-react'
import clanData from '../data/clanData.json'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { clanInfo } = clanData

  const infoCards = [
    { icon: Calendar, label: 'FOUNDED', value: clanInfo.founded },
    { icon: Gamepad2, label: 'GAME', value: clanInfo.game },
    { icon: Shield, label: 'TYPE', value: 'eSports Clan' },
  ]

  return (
    <section id="about" className="relative py-24 px-4 bg-background/40 overflow-hidden">
      {/* Ambient background depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      {/* Top section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-rajdhani text-sm tracking-[0.3em] uppercase mb-2 block">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white mb-4">
            ABOUT <span className="text-accent" style={{ textShadow: '0 0 30px rgba(255,30,39,0.5)' }}>93B</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel rounded-lg p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <p className="text-lg md:text-xl font-rajdhani text-secondary leading-relaxed mb-10 border-l-2 border-accent/50 pl-6">
            {clanInfo.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infoCards.map((card, index) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative bg-gradient-to-br from-background/80 to-black/40 rounded-lg p-6 border border-accent/10 hover:border-accent/50 transition-all duration-300 hover:shadow-glow-sm group overflow-hidden"
                >
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all" />
                  <Icon className="w-6 h-6 text-accent mb-3 relative" />
                  <h3 className="text-accent font-orbitron font-bold text-sm tracking-widest mb-2 relative">
                    {card.label}
                  </h3>
                  <p className="text-white font-rajdhani text-2xl font-semibold relative">
                    {card.value}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About