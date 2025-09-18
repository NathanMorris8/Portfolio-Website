import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import { getAllProjects } from '@/lib/projects'

export default function HomePage() {
  const projects = getAllProjects()

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      
      {/* Footer */}
      <footer className="bg-cyber-darker text-neon-blue py-12 border-t border-neon-blue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-techno font-bold mb-4 text-neon-purple neon-text tracking-wide uppercase">Let's Connect</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-electric">
              I'm always interested in new opportunities in cybersecurity, secure application development, 
              and innovative security projects. Let's connect and discuss how we can work together 
              to build safer, more secure digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:njmorris8@gmail.com"
                className="bg-gradient-to-r from-neon-blue to-neon-green text-black px-8 py-3 rounded-lg hover:from-neon-orange hover:to-neon-blue transition-all duration-300 font-techno font-semibold tracking-wide uppercase transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-neon-purple text-neon-purple px-8 py-3 rounded-lg hover:bg-neon-purple hover:text-black transition-all duration-300 font-techno font-semibold tracking-wide uppercase transform hover:scale-105 neon-border"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="border-t border-neon-blue/30 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm font-electric">
              © {new Date().getFullYear()} Nathan Morris. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
