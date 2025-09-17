'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-cyber-darker/95 backdrop-blur-md border-b border-neon-blue/30 cyber-card' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Name/Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-techno font-bold text-neon-blue hover:text-neon-orange transition-colors neon-text animate-pulse-neon tracking-wide uppercase"
            >
              Nathan Morris
            </button>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-neon-blue hover:text-neon-green transition-colors font-medium font-techno tracking-wide uppercase hover:neon-text"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-neon-blue hover:text-neon-green transition-colors font-medium font-techno tracking-wide uppercase hover:neon-text"
            >
              Projects
            </button>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/NathanMorris8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-blue hover:text-neon-orange transition-colors p-2 hover:bg-neon-blue/10 rounded-lg neon-border hover:shadow-neon"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-morris-599312236/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-blue hover:text-neon-purple transition-colors p-2 hover:bg-neon-blue/10 rounded-lg neon-border hover:shadow-neon"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:njmorris8@gmail.com"
              className="text-neon-blue hover:text-neon-green transition-colors p-2 hover:bg-neon-blue/10 rounded-lg neon-border hover:shadow-neon"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-neon-blue hover:text-neon-orange transition-colors p-2 neon-border rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
