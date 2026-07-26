import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { X, Trophy } from 'lucide-react'
import clanData from '../data/clanData.json'

const Scrims = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState(null)
  const { recentScrims } = clanData

  const getResultStyle = (result) => {
    switch (result.toLowerCase()) {
      case 'win':
        return 'bg-green-500/15 text-green-400 border border-green-500/40'
      case 'loss':
        return 'bg-red-500/15 text-red-400 border border-red-500/40'
      case 'draw':
        return 'bg-gray-500/15 text-gray-300 border border-gray-500/40'
      default:
        return 'bg-gray-500/15 text-gray-300 border border-gray-500/40'
    }
  }

  const getResultLabel = (result) => result.charAt(0).toUpperCase() + result.slice(1)

  return (
    <section id="scrims" className="relative py-24 px-4 bg-background/40 overflow-hidden">
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
            Battle Log
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white mb-4">
            RECENT <span className="text-accent" style={{ textShadow: '0 0 30px rgba(255,30,39,0.5)' }}>SCRIMS</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentScrims.map((scrim, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className="scrim-card rounded-lg overflow-hidden hover:border-accent/60 hover:shadow-glow-md transition-all duration-300 group"
            >
              <div
                className="relative aspect-video bg-background cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(scrim.image)}
                data-hoverable
              >
                <img
                  src={scrim.image}
                  alt={`Scrim vs ${scrim.opponent}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"%3E%3Crect fill="%23121218" width="400" height="225"/%3E%3Ctext fill="%23A0A0A8" font-family="sans-serif" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image Available%3C/text%3E%3C/svg%3E'
                  }}
                />
                {/* Gradient overlay for cinematic depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white font-orbitron text-sm tracking-widest border border-accent/60 px-4 py-2 rounded-sm shadow-glow-sm">
                    VIEW RESULT
                  </span>
                </div>
              </div>

              <div className="p-5 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className={`${getResultStyle(scrim.result)} text-xs font-bold px-3 py-1 rounded-full font-orbitron tracking-wide`}>
                    {getResultLabel(scrim.result)}
                  </span>
                  <span className="text-secondary font-rajdhani text-sm">{scrim.date}</span>
                </div>

                <h3 className="text-white font-orbitron font-bold text-lg mb-2 tracking-wide">
                  VS {scrim.opponent || 'TBA'}
                </h3>

                <p
                  className="text-accent font-rajdhani text-2xl font-bold"
                  style={{ textShadow: '0 0 15px rgba(255,30,39,0.4)' }}
                >
                  {scrim.score || 'TBA'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
                className="absolute top-6 right-6 text-white hover:text-accent transition-colors bg-card/50 p-2 rounded-full border border-accent/30"
                data-hoverable
              >
                <X size={28} />
              </motion.button>

              <motion.img
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={selectedImage}
                alt="Scrim result"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-glow-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Scrims