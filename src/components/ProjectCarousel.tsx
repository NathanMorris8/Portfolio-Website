'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { Project } from '@/lib/projects'

interface ProjectCarouselProps {
  projects: Project[]
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  // Helper function to get project image based on title
  const getProjectImage = (title: string): string => {
    const imageMap: { [key: string]: string } = {
      'My Car Care - Autocare Mechanic Finder': '/api/images/autocare-logo.png',
      'Network Packet Sniffer - CS587 Project': '/api/images/packet-sniffer.jpg',
      'Python Trivia Game': '/api/images/trivia-game.jpg'
    }
    
    return imageMap[title] || '/placeholder-project.jpg'
  }
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || projects.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No projects to display</p>
      </div>
    )
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main carousel content */}
      <div className="relative h-[600px] cyber-card rounded-2xl overflow-hidden">
        {/* Project image */}
        <div className="relative h-2/3 bg-gradient-to-br from-cyber-darker to-cyber-dark overflow-hidden">
          <img
            src={getProjectImage(currentProject.title)}
            alt={currentProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 to-transparent" />
          <div className="absolute inset-0 border-b-2 border-neon-blue/30" />
          
          {/* Navigation arrows */}
          {projects.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-neon-blue/20 hover:bg-neon-blue/40 text-neon-blue p-2 rounded-lg transition-all backdrop-blur-sm border border-neon-blue/50 hover:shadow-neon"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-neon-blue/20 hover:bg-neon-blue/40 text-neon-blue p-2 rounded-lg transition-all backdrop-blur-sm border border-neon-blue/50 hover:shadow-neon"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Project details */}
        <div className="p-8 h-1/3 bg-cyber-dark">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-techno font-bold text-neon-green mb-2 tracking-wide">
                {currentProject.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-electric">
                {currentProject.description}
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex space-x-2 ml-4">
              {currentProject.liveUrl && (
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neon-purple/20 text-neon-purple p-2 rounded-lg hover:bg-neon-purple/40 transition-colors border border-neon-purple/50"
                  aria-label="View live project"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {currentProject.githubUrl && (
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-neon-blue text-neon-blue p-2 rounded-lg hover:bg-neon-blue hover:text-black transition-colors"
                  aria-label="View GitHub repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {currentProject.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-neon-green/10 text-neon-green border border-neon-green/30 px-3 py-1 rounded-lg text-sm font-medium font-mono hover:bg-neon-green/20 transition-colors tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      {projects.length > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-neon-blue scale-110 shadow-neon'
                  : 'bg-gray-600 hover:bg-neon-blue/50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
