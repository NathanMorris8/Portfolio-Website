export default function AboutSection() {
  const skills = [
    { category: 'Languages', items: ['Python', 'C++', 'Bash', 'TypeScript', 'Shell'] },
    { category: 'Cybersecurity', items: ['Network Analysis', 'Packet Capture', 'Ethical Hacking', 'VPN Development'] },
    { category: 'Frameworks & Tools', items: ['FastAPI', 'Linux', 'WSL', 'Git', 'Docker', 'Penetration Testing'] }
  ]

  return (
    <section id="about" className="py-24 bg-cyber-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-techno font-bold text-neon-blue mb-6 neon-text tracking-wide uppercase">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-electric">
                <p>
                  I'm a Computer Science Graduate from San Diego State University with a 
                  passion for CyberSecurity, Information Technology, and Full Stack Development. 
                  I specialize in building secure systems and exploring cutting-edge 
                  security technologies that solve real-world problems.
                </p>
                <p>
                  Currently, I'm focused on cybersecurity projects, including building a VPN 
                  application to enhance online privacy and security. I'm also developing 
                  Full Stack applications using Python and FastAPI, with a strong emphasis 
                  on security-first design principles. I'm particularly interested in 
                  projects that have practical applications and can make a positive impact 
                  on people's digital security and privacy.
                </p>
                <p>
                  When I'm not developing security applications, you'll find me practicing 
                  ethical hacking, researching network vulnerabilities, analyzing packet 
                  capture data, or experimenting with new cybersecurity frameworks and 
                  penetration testing tools.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-techno font-semibold text-neon-purple neon-text tracking-wide uppercase">Technical Skills</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="space-y-3">
                    <h4 className="font-techno font-medium text-neon-green tracking-wide">{skillGroup.category}</h4>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <div
                          key={skill}
                          className="text-sm text-neon-orange bg-neon-orange/10 border border-neon-orange/30 px-3 py-1 rounded-lg inline-block mr-2 hover:bg-neon-orange/20 transition-colors font-mono"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 p-8 flex items-center justify-center overflow-hidden cyber-card">
              {/* Profile image */}
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src="/api/images/nathan-headshot.jpg"
                  alt="Nathan Morris - Computer Science Graduate"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/30 to-transparent rounded-xl" />
                <div className="absolute inset-0 border-2 border-neon-blue/50 rounded-xl" />
              </div>
            </div>
            
            {/* Floating cyber elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-neon-blue/20 rounded-lg opacity-60 animate-pulse border border-neon-blue/50" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-neon-orange/20 rounded-lg opacity-60 animate-bounce border border-neon-orange/50" />
            <div className="absolute top-1/2 -left-8 w-8 h-8 bg-neon-purple/20 rounded-full opacity-40 animate-ping" />
            <div className="absolute bottom-1/4 -right-8 w-6 h-6 bg-neon-green/20 rounded-full opacity-40 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
