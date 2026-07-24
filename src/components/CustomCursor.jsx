import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        window.matchMedia('(hover: none) and (pointer: coarse)').matches
      )
    }

    checkTouchDevice()
    window.addEventListener('resize', checkTouchDevice)

    if (isTouchDevice) return

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('[data-hoverable]')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('resize', checkTouchDevice)
    }
  }, [isTouchDevice])

  if (isTouchDevice) return null

  return (
    <>
      {/* Outer crosshair ring */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isHovering ? 1.6 : isClicking ? 0.85 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="14" stroke="#FF1E27" strokeWidth="1.2" opacity="0.7" />
          <line x1="18" y1="0" x2="18" y2="9" stroke="#FF1E27" strokeWidth="1.5" />
          <line x1="18" y1="27" x2="18" y2="36" stroke="#FF1E27" strokeWidth="1.5" />
          <line x1="0" y1="18" x2="9" y2="18" stroke="#FF1E27" strokeWidth="1.5" />
          <line x1="27" y1="18" x2="36" y2="18" stroke="#FF1E27" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-50"
        style={{ boxShadow: '0 0 8px rgba(255,30,39,0.9)' }}
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isClicking ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      />
    </>
  )
}

export default CustomCursor