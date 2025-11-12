import React from 'react'

const Footer = () => {
  return (
    <footer className="relative py-10 text-center text-purple-100/70">
      <p>© {new Date().getFullYear()} Vishal S. All rights reserved.</p>
      <a href="#home" className="fixed bottom-6 right-6 px-3 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-lg animate-bounce">↑</a>
    </footer>
  )
}

export default Footer
