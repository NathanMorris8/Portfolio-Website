import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Project {
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  content: string
}

const projectsDirectory = path.join(process.cwd(), 'src/content/projects')

export function getAllProjects(): Project[] {
  try {
    const fileNames = fs.readdirSync(projectsDirectory)
    const allProjectsData = fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((name) => {
        const fullPath = path.join(projectsDirectory, name)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug: name.replace(/\.mdx$/, ''),
          title: data.title || 'Untitled',
          description: data.description || '',
          image: data.image || '/placeholder-project.jpg',
          technologies: data.technologies || [],
          githubUrl: data.githubUrl || '',
          liveUrl: data.liveUrl || '',
          featured: data.featured || false,
          content,
        } as Project
      })

    return allProjectsData.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return 0
    })
  } catch (error) {
    console.warn('Could not read projects directory:', error)
    return []
  }
}

export function getFeaturedProjects(): Project[] {
  const allProjects = getAllProjects()
  return allProjects.filter(project => project.featured).slice(0, 3)
}
