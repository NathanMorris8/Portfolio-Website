'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import TypewriterText from './TypewriterText'

export default function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false)

  const scrollToNext = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleTypewriterComplete = () => {
    setShowSubtitle(true)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cyber-dark">
      {/* Cyberpunk background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-cyber-dark to-black" />
      
      {/* Synthwave animated background */}
      <div className="synthwave-grid"></div>
      
      {/* Synthwave horizon */}
      <div className="synthwave-horizon"></div>
      
      {/* Synthwave mountains */}
      <div className="synthwave-mountains">
        <div className="mountain-range"></div>
      </div>
      
      {/* Retro sun */}
      <div className="retro-sun"></div>
      
      {/* Neon glow effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(0,153,255,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(139,0,255,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,102,0,0.1)_0%,_transparent_70%)]" />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-neon-blue rounded-full animate-ping" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="absolute w-1 h-1 bg-neon-orange rounded-full animate-ping" style={{top: '60%', left: '80%', animationDelay: '1s'}}></div>
        <div className="absolute w-1 h-1 bg-neon-purple rounded-full animate-ping" style={{top: '80%', left: '20%', animationDelay: '2s'}}></div>
        <div className="absolute w-2 h-2 bg-neon-green rounded-full animate-ping" style={{top: '30%', left: '70%', animationDelay: '3s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-techno font-bold text-neon-blue mb-6 animate-fade-in min-h-[1.2em] neon-text tracking-wide uppercase">
          <TypewriterText 
            sequences={[
              { text: "Hello!", action: 'type', speed: 5, pause: 500 },
              { text: "", action: 'delete', speed: 20 },
              { text: "Welcome to my Portfolio!", action: 'type', speed: 35 }
            ]}
            initialDelay={1000}
            onComplete={handleTypewriterComplete}
          />
        </h1>
        <p className={`text-xl sm:text-2xl text-neon-purple mb-8 max-w-2xl mx-auto transition-all duration-1000 font-electric tracking-wide ${
          showSubtitle 
            ? 'opacity-100 translate-y-0 neon-text' 
            : 'opacity-0 translate-y-4'
        }`}>
          Click the buttons to navigate below!
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-neon-blue to-neon-purple text-black px-8 py-3 rounded-lg hover:from-neon-orange hover:to-neon-blue transition-all duration-300 font-techno font-semibold tracking-wide uppercase transform hover:scale-105 shadow-neon-lg"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-neon-blue text-neon-blue px-8 py-3 rounded-lg hover:bg-neon-blue hover:text-black transition-all duration-300 font-techno font-semibold tracking-wide uppercase transform hover:scale-105 neon-border hover:shadow-neon-lg"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-neon-blue hover:text-neon-orange transition-colors neon-text" />
      </button>
    </section>
  )
}
