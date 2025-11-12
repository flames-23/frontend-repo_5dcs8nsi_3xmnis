import React, { useEffect, useRef } from 'react'

// Simple mouse parallax floating shapes
const ParallaxBG = () => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const handle = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 20
      const y = (e.clientY / innerHeight - 0.5) * 20
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div ref={ref} className="absolute inset-0 transition-transform duration-300 ease-out">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-20 -right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>
    </div>
  )
}

export default ParallaxBG
