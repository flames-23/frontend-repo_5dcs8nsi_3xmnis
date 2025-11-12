import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    // Placeholder success message. Integrate EmailJS by adding your public key, service, and template.
    setStatus('Thanks! Your message has been sent.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Contact</h2>
        <p className="text-purple-100/80 mt-2">Let’s build something great together.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6"
          >
            <div className="grid gap-4">
              <input name="name" placeholder="Your Name" value={form.name} onChange={onChange} required className="rounded-xl bg-white/5 border border-white/10 p-3 text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required className="rounded-xl bg-white/5 border border-white/10 p-3 text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <textarea name="message" placeholder="Message" rows={5} value={form.message} onChange={onChange} required className="rounded-xl bg-white/5 border border-white/10 p-3 text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <button className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold hover:opacity-95">Send</button>
              {status && <p className="text-green-300 text-sm">{status}</p>}
            </div>

            <div className="mt-6 text-sm text-purple-100/80 space-y-1">
              <p>GitHub: vishal-sreenivas</p>
              <p>LinkedIn: Vishal S</p>
              <p>Email: vishal.s.offical@gmail.com</p>
              <p>Phone: +91 9633760494</p>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 backdrop-blur-xl p-6 text-white"
          >
            <h3 className="font-semibold">Let’s connect</h3>
            <p className="mt-2 text-purple-100/80">
              I’m open to full-time roles, internships, and freelance opportunities in DevOps and Front-End development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
