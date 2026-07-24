import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Crown } from 'lucide-react'
import clanData from '../data/clanData.json'

const Roster = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { management, roster } = clanData

  const roleIcons = {
    attacker: '/roles/attacker.png',
    engineering: '/roles/engineering.png',
    sniper: '/roles/sniper.png',
    medical: '/roles/medical.png',
  }

  const managementRoles = [
    { key: 'igl', label: 'IGL' },
    { key: 'owner', label: 'OWNER' },
    { key: 'coOwner', label: 'CO-OWNER' },
    { key: 'leader', label: 'LEADER' },
    { key: 'coLeader', label: 'CO-LEADER' },
  ]

  return (
    <section id="roster" className="relative py-24 px-4 bg-background/40 overflow-hidden">
      {/* Ambient depth glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-accent/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-accent/5 blur-[120px] rounded-full" />
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
            The Squad
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white mb-4">
            CLAN <span className="text-accent" style={{ textShadow: '0 0 30px rgba(255,30,39,0.5)' }}>ROSTER</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        {/* Management Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-accent/60" />
            <Crown className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-bold font-orbitron text-white tracking-[0.2em]">MANAGEMENT</h3>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-accent/60" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {managementRoles.map((role, index) => (
              <motion.div
                key={role.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative glass-panel rounded-lg p-5 text-center hover:border-accent/60 hover:shadow-glow-sm transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/25 transition-all" />
                <p className="relative text-accent font-orbitron font-bold text-xs tracking-[0.15em] mb-2">
                  {role.label}
                </p>
                <p className="relative text-white font-rajdhani text-lg font-semibold">
                  {management[role.key] || 'TBA'}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Player Roles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-accent/60" />
            <h3 className="text-xl font-bold font-orbitron text-white tracking-[0.2em]">PLAYER ROLES</h3>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-accent/60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(roster).map(([role, members], index) => {
              const iconSrc = roleIcons[role]
              const roleLabel = role.charAt(0).toUpperCase() + role.slice(1)

              return (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
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
                      <img
                        src={iconSrc}
                        alt={`${role} icon`}
                        className="w-7 h-7 object-contain"
                        style={{ filter: 'drop-shadow(0 0 6px rgba(255,30,39,0.7))' }}
                      />
                    </div>
                  </div>
                  <h4 className="relative text-xl font-bold font-orbitron text-white text-center mb-1 tracking-wide">
                    {roleLabel}
                  </h4>
                  <div className="relative w-10 h-[1px] bg-accent/40 mx-auto mb-4" />
                  <ul className="relative space-y-2">
                    {members.length > 0 ? (
                      members.map((member, memberIndex) => (
                        <li
                          key={memberIndex}
                          className="text-secondary font-rajdhani text-lg text-center hover:text-accent transition-colors"
                        >
                          {member}
                        </li>
                      ))
                    ) : (
                      <li className="text-secondary/60 font-rajdhani text-base text-center italic">
                        No members yet
                      </li>
                    )}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Roster