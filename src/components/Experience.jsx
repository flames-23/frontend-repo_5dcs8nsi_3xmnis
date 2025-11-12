import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const items = [
  {
    icon: <Briefcase size={18} />,
    role: 'Front-End Developer Intern – Sensesys',
    time: '2025–Present',
    desc: 'Built dynamic React components, tested modules, and contributed to agile sprints.',
  },
  {
    icon: <GraduationCap size={18} />,
    role: 'Teaching Assistant – Christ University',
    time: '2025',
    desc: 'Developed lecture content and interactive presentations for MCA program.',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Experience</h2>
        <div className="mt-8 relative border-l border-white/10 pl-6">
          {items.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-10"
            >
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500" />
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-white">
                <div className="flex items-center gap-2 text-white/90">
                  <span className="opacity-80">{e.icon}</span>
                  <p className="font-semibold">{e.role}</p>
                  <span className="ml-auto text-sm text-purple-100/80">{e.time}</span>
                </div>
                <p className="mt-2 text-purple-100/80">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
