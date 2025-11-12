import React from 'react'
import { motion } from 'framer-motion'

const groups = {
  Programming: ['Python', 'Java', 'SQL', 'JavaScript', 'C', 'R'],
  'DevOps & Cloud': ['AWS', 'Azure', 'Docker', 'CI/CD', 'IaC'],
  Tools: ['Jenkins', 'Ansible', 'CloudWatch', 'VS Code', 'Figma', 'Blender'],
  Frameworks: ['React', 'Pandas', 'NumPy', 'Selenium'],
  'IoT & ML': ['Arduino', 'Drone Tech', 'Power BI', 'SpaCy'],
}

const Badge = ({ label }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 120, damping: 18 }}
    className="relative w-28 h-28 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl text-white grid place-items-center shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
    style={{ transformStyle: 'preserve-3d' }}
  >
    <span className="font-semibold" style={{ transform: 'translateZ(20px)' }}>{label}</span>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 pointer-events-none" />
  </motion.div>
)

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Technical Skills</h2>
        <p className="text-purple-100/80 mt-2">Animated 3D-style badges</p>

        <div className="mt-10 space-y-12">
          {Object.entries(groups).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-white/90 font-semibold">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-4">
                {items.map((i) => (
                  <Badge key={i} label={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
