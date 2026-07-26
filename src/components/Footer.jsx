import { motion } from 'framer-motion'
import clanData from '../data/clanData.json'

const Footer = ({ viewMode }) => {
  const { clanInfo } = clanData

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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

  return (
    <footer className="relative bg-gradient-to-b from-background/40 to-black/60 border-t border-accent/20 py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-accent/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-accent/25 blur-md" />
              <img
                src="/logo.png"
                alt={`${clanInfo.name} Clan Logo`}
                className="relative w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(255,30,39,0.5)]"
              />
            </div>
            <div>
              <h3 className="text-white font-orbitron font-bold text-xl tracking-wide">{clanInfo.name}</h3>
              <p className="text-secondary font-rajdhani text-sm tracking-widest uppercase">eSports Clan</p>
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="relative text-secondary hover:text-white font-rajdhani text-lg font-medium transition-colors group"
                data-hoverable
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </motion.nav>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-accent/10 text-center"
        >
          <p className="text-secondary font-rajdhani text-sm tracking-wide">
            © {new Date().getFullYear()} {clanInfo.name} Clan. All Rights Reserved.
          </p>
          <p className="mt-2 text-secondary font-rajdhani text-sm tracking-wide">
           Designed & Developed By{' '}
            <a
              href="https://discord.com/users/1091478694108860536"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold underline underline-offset-2 hover:text-white transition-colors"
              data-hoverable
            >
              DMAR
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer