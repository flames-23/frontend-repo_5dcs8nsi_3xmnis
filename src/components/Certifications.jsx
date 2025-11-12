import React from 'react'
import { motion } from 'framer-motion'

const items = [
  'Implementing AI Using Cognitive Modeling',
  'JavaScript by Example',
  'Google Cloud Foundations',
  'CompTIA Cloud+: Cloud Migrations',
  'Prompt Engineering: Cloud & IoT Hacking in the GenAI Era',
]

const CertCard = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative h-40 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 text-white [transform-style:preserve-3d]"
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 transition-transform duration-500 group-hover:rotate-1" />
    <div className="relative z-10 h-full grid place-items-center text-center">
      <p className="font-semibold">{title}</p>
    </div>
  </motion.div>
)

const Certifications = () => {
  return (
    <section id="certs" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Certifications</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t) => (
            <CertCard key={t} title={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
