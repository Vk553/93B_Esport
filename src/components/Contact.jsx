import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import clanData from '../data/clanData.json'

const TelegramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.03 9.56c-.15.68-.55.84-1.12.52l-3.1-2.29-1.5 1.44c-.16.16-.3.3-.62.3l.22-3.16 5.76-5.2c.25-.22-.05-.34-.39-.12l-7.12 4.48-3.07-.96c-.67-.21-.68-.67.14-.99l12.01-4.63c.56-.21 1.05.13.82.85z" />
  </svg>
)

const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.32 1.56-1.28 2.56.02.82.42 1.61 1.08 2.1 1.05.82 2.57.85 3.68.12.87-.56 1.39-1.57 1.38-2.61.02-5.46.01-10.93.02-16.38z" />
  </svg>
)

const DiscordIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { socials } = clanData

  const socialLinks = [
    { name: 'Telegram', icon: TelegramIcon, href: socials.telegram || '#', glow: 'group-hover:shadow-[0_0_40px_rgba(0,136,204,0.4)]', border: 'group-hover:border-[#0088cc]/60' },
    { name: 'TikTok', icon: TikTokIcon, href: socials.tiktok || '#', glow: 'group-hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]', border: 'group-hover:border-white/40' },
    { name: 'Discord', icon: DiscordIcon, href: socials.discord || '#', glow: 'group-hover:shadow-[0_0_40px_rgba(88,101,242,0.4)]', border: 'group-hover:border-[#5865F2]/60' },
  ]

  return (
    <section id="contact" className="relative py-24 px-4 bg-background/40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 blur-[150px] rounded-full" />
      </div>

      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-rajdhani text-sm tracking-[0.3em] uppercase mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white mb-4">
            CONTACT <span className="text-accent" style={{ textShadow: '0 0 30px rgba(255,30,39,0.5)' }}>US</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`glass-panel rounded-lg p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 group ${social.border} ${social.glow}`}
                data-hoverable
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent/25 to-accent/5 rounded-full flex items-center justify-center border border-accent/40">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <span className="text-white font-orbitron font-bold text-xl tracking-wide">{social.name}</span>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href={socials.leaderContact || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-block px-14 py-5 bg-gradient-to-r from-accent to-accent-dark text-white font-orbitron font-bold text-xl tracking-wide rounded-sm hover:scale-105 transition-transform duration-300 shadow-glow-md hover:shadow-glow-lg"
            data-hoverable
          >
            CONTACT LEADER TO JOIN
          </a>
          <p className="mt-5 text-secondary font-rajdhani text-lg tracking-wide">
            Reach out directly to our leadership team
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact