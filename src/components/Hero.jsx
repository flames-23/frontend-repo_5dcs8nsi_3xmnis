import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
            className="mx-auto mb-8 w-full max-w-2xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_0_60px_-10px_rgba(168,85,247,0.4)]"
          >
            <p className="text-sm md:text-base tracking-wide uppercase text-purple-200/80">👋 Welcome to my world</p>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">Vishal S</span>
            </h1>
            <p className="mt-3 md:mt-4 text-lg md:text-xl text-purple-100/90">
              DevOps Engineer & Front-End Developer
            </p>
            <p className="mt-3 text-sm md:text-base text-purple-100/80">
              I build intelligent, scalable, and automated systems.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3 md:gap-4 flex-wrap">
              <a href="#projects" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold shadow-lg shadow-fuchsia-600/20 hover:opacity-95 transition">Explore Projects</a>
              <a href="#contact" className="px-5 py-2.5 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/15 transition">Contact Me</a>
              <a href="/VishalS_Resume.pdf" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition">View Resume</a>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 md:mt-10 flex justify-center"
          >
            <div className="h-10 w-6 rounded-full border border-white/30 flex items-start justify-center p-1">
              <motion.span
                className="h-2 w-2 rounded-full bg-white/80"
                animate={{ y: [0, 18, 0], opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
