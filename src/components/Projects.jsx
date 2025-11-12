import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Christ-International App',
    stack: 'Kotlin, XML, Firebase, Google APIs',
    desc: 'Multilingual appointment booking for international students and faculty. Role-based access, Google Translate API, real-time feedback.',
    link: '#',
  },
  {
    title: 'DocuMind AI – Smart Document Search Chatbot',
    stack: 'React.js, Vite, FastAPI, Python, spaCy, FAISS',
    desc: 'RAG chatbot for contextual document search. Real-time results, AI-driven queries, and modern UI.',
    link: '#',
  },
  {
    title: 'Intruder Alert System – IoT-Based Missile Detection',
    stack: 'Arduino Uno, Camera Module, Laser, Ultrasonic Sensor, OpenCV',
    desc: 'Real-time detection and radar visualization for missile tracking.',
    link: '#',
  },
  {
    title: 'Anti-Missile System using Camera & Laser (IoT)',
    stack: 'Arduino Uno, Camera, Laser Module',
    desc: 'IoT-based missile prevention with THEL simulation radar visualization.',
    link: '#',
  },
  {
    title: 'BinSense – Smart Waste Management System',
    stack: 'IoT, Sensors, Arduino',
    desc: 'Smart waste detection with alerts and monitoring.',
    link: '#',
  },
  {
    title: 'Revelations Fest App',
    stack: 'Android Studio, Kotlin, XML',
    desc: 'CS fest management app with profile, navigation, gallery with brightness control.',
    link: '#',
  },
  {
    title: 'Event Management App – Plannify',
    stack: 'Android Studio, Kotlin, XML, Firebase',
    desc: 'Event planner with Firebase for schedules and storage.',
    link: '#',
  },
]

const ProjectCard = ({ p }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="group [perspective:1000px]"
    >
      <div className="relative h-full rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="[backface-visibility:hidden]">
          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
          <p className="mt-2 text-sm text-purple-100/80">{p.stack}</p>
          <p className="mt-3 text-sm text-purple-50/80">{p.desc}</p>
          <a href={p.link} className="mt-4 inline-block text-sm text-cyan-300 hover:text-cyan-200">Learn More →</a>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 border border-white/10 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-sm text-white/90">Deep dive coming soon. Reach out for a walkthrough!</p>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Projects</h2>
        <p className="text-purple-100/80 mt-2">Selected work with animation and 3D effects</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
