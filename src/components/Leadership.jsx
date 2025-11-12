import React from 'react'
import { motion } from 'framer-motion'

const items = [
  'Head, Christ University NCC (Junior Under Officer)',
  'Committee Head – Gateways National Fest',
  'Digital Mission Trainer (Python & Cloud Computing)',
  'Vice Chancellor’s Commendation Award recipient',
]

const Leadership = () => {
  return (
    <section id="leadership" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Leadership</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 text-white shadow-[0_0_40px_-10px_rgba(147,51,234,0.4)]"
            >
              <p>{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
