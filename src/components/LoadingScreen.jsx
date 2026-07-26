import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [statusText, setStatusText] = useState('CONNECTING...')

  useEffect(() => {
    const messages = ['CONNECTING...', 'LOADING ASSETS...', 'ARMING SYSTEMS...', 'READY.']
    let i = 0
    const msgTimer = setInterval(() => {
      i = (i + 1) % messages.length
      setStatusText(messages[i])
    }, 600)

    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearInterval(msgTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Background depth layers */}
          <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-background to-background" />
          <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,30,39,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,30,39,0.5)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

          {/* Scanning line effect */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: '100vh' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-accent/10 to-transparent pointer-events-none"
          />

          <div className="relative text-center z-10">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border border-dashed border-accent/30"
                />
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 25px rgba(255,30,39,0.35), 0 0 60px rgba(255,30,39,0.15)",
                      "0 0 50px rgba(255,30,39,0.6), 0 0 100px rgba(255,30,39,0.3)",
                      "0 0 25px rgba(255,30,39,0.35), 0 0 60px rgba(255,30,39,0.15)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-card to-black p-3 flex items-center justify-center border-2 border-accent backdrop-blur-md overflow-hidden"
                >
                  <img
                    src="/logo.png"
                    alt="93B System Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,30,39,0.6)]"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-accent font-orbitron text-lg md:text-xl tracking-[0.15em] font-bold mb-3"
              style={{ textShadow: '0 0 20px rgba(255,30,39,0.6)' }}
            >
              93B SYSTEM INITIALIZING
            </motion.p>

            <motion.p
              key={statusText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-secondary font-rajdhani text-sm tracking-[0.3em] uppercase mb-6"
            >
              {statusText}
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 2.2, ease: "easeInOut" }}
              className="h-[3px] bg-card/60 rounded-full overflow-hidden max-w-xs mx-auto relative"
            >
              <div className="h-full bg-gradient-to-r from-accent-dark via-accent to-accent shadow-glow-sm" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen