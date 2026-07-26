import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy } from 'lucide-react'
import clanData from '../data/clanData.json'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { achievements } = clanData

  return (
    <section id="achievements" className="relative py-24 px-4 bg-background/40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[450px] h-[350px] bg-accent/5 blur-[130px] rounded-full" />
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
            Hall of Fame
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white mb-4">
            OUR <span className="text-accent" style={{ textShadow: '0 0 30px rgba(255,30,39,0.5)' }}>ACHIEVEMENTS</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative glass-panel rounded-lg p-6 hover:border-accent/60 hover:shadow-glow-md transition-all duration-300 overflow-hidden group"
            >
              {/* Tactical corner marks */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-accent/30" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-accent/30" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-accent/30" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-accent/30" />

              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/25 transition-all" />

              <div className="relative flex items-center justify-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/25 to-accent/5 rounded-full flex items-center justify-center border border-accent/40 shadow-glow-sm">
                  <Trophy className="w-7 h-7 text-accent" />
                </div>
              </div>

              <p
                className="relative text-accent font-orbitron font-bold text-lg text-center mb-2 tracking-wide"
                style={{ textShadow: '0 0 15px rgba(255,30,39,0.4)' }}
              >
                {achievement.placement}
              </p>

              <h4 className="relative text-xl font-bold font-orbitron text-white text-center mb-1 tracking-wide">
                {achievement.title}
              </h4>

              <div className="relative w-10 h-[1px] bg-accent/40 mx-auto mb-4" />

              <p className="relative text-secondary font-rajdhani text-sm text-center mb-2">
                {achievement.event}
              </p>

              <p className="relative text-secondary/70 font-rajdhani text-xs text-center mb-4 uppercase tracking-wider">
                {achievement.date}
              </p>

              <p className="relative text-secondary/80 font-rajdhani text-sm text-center leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
