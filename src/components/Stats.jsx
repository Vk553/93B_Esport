import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import clanData from '../data/clanData.json'

const StatCard = ({ label, value, suffix = '', isInView, highlight = false }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      if (value === 0) {
        setCount(0)
        return
      }

      let start = 0
      const end = value
      const duration = 2000
      const incrementTime = duration / end

      const timer = setInterval(() => {
        if (start >= end - 1) {
          setCount(end)
          clearInterval(timer)
        } else {
          start += 1
          setCount(start)
        }
      }, incrementTime > 0 ? incrementTime : 10)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className={`relative rounded-lg p-6 md:p-8 text-center transition-all duration-300 overflow-hidden group ${
        highlight
          ? 'bg-gradient-to-br from-accent/20 to-card border border-accent/60 shadow-glow-sm hover:shadow-glow-md'
          : 'glass-panel hover:border-accent/50 hover:shadow-glow-sm'
      }`}
    >
      {/* Corner accent lines - tactical HUD feel */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-accent/40" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-accent/40" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-accent/40" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-accent/40" />

      <h3 className="text-secondary font-rajdhani text-sm md:text-base tracking-[0.15em] mb-3 uppercase">
        {label}
      </h3>
      <p
        className="text-4xl md:text-5xl font-black font-orbitron text-accent"
        style={{ textShadow: '0 0 25px rgba(255,30,39,0.5)' }}
      >
        {count}{suffix}
      </p>
    </motion.div>
  )
}

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { stats } = clanData

  const winRate = stats.totalScrims > 0
    ? Math.round((stats.wins / stats.totalScrims) * 100)
    : 0

  return (
    <section id="stats" className="relative py-24 px-4 bg-background/40 overflow-hidden">
      {/* Ambient depth glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-accent/5 blur-[130px] rounded-full" />
      </div>

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
            Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white mb-4">
            BATTLE <span className="text-accent" style={{ textShadow: '0 0 30px rgba(255,30,39,0.5)' }}>STATS</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          <StatCard label="Total Scrims" value={stats.totalScrims} isInView={isInView} />
          <StatCard label="Wins" value={stats.wins} isInView={isInView} />
          <StatCard label="Losses" value={stats.losses} isInView={isInView} />
          <StatCard label="Draws" value={stats.draws} isInView={isInView} />
          <StatCard label="Win Rate" value={winRate} suffix="%" isInView={isInView} highlight />
        </div>
      </div>
    </section>
  )
}

export default Stats