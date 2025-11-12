import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-1"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
            <p className="mt-3 text-purple-100/80">
              DevOps Engineer and quality-focused software professional passionate about automating workflows, managing cloud infrastructure, and deploying scalable apps on AWS & Azure.
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-white/90">Education</h3>
              <ul className="mt-3 space-y-2 text-purple-100/80">
                <li>MCA – CHRIST University (2024–Present)</li>
                <li>BSc (CS, Maths, Electronics) – CHRIST University (2021–2024)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
