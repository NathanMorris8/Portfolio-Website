import ProjectCarousel from './ProjectCarousel'
import { Project } from '@/lib/projects'

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 bg-cyber-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-techno font-bold text-neon-orange mb-6 neon-text tracking-wide uppercase">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-electric">
            A showcase of my recent work, featuring cybersecurity tools, 
            full-stack applications, and innovative solutions to complex problems.
          </p>
        </div>

        {/* Project carousel */}
        <ProjectCarousel projects={projects} />

        {/* Additional projects teaser */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 font-electric">
            Want to see more of my cybersecurity research and development?
          </p>
          <a
            href="https://github.com/NathanMorris8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-neon-purple to-neon-orange text-black px-8 py-3 rounded-lg hover:from-neon-blue hover:to-neon-purple transition-all duration-300 font-techno font-semibold tracking-wide uppercase transform hover:scale-105"
          >
            View All Projects
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
