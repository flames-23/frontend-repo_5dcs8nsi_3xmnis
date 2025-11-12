import React from 'react'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certs', label: 'Certifications' },
    { href: '#experience', label: 'Experience' },
    { href: '#leadership', label: 'Leadership' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-3">
          <a href="#home" className="font-bold text-white tracking-wide">VS</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/90">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-white/90" aria-label="Menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
