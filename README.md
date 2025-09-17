# Nathan Morris - Portfolio

A modern, minimalist portfolio website inspired by Tesla's design aesthetic, showcasing Computer Science projects and expertise in Cybersecurity, VPN Development, and Secure Full Stack Applications.

## About Nathan Morris

Computer Science Graduate from San Diego State University with expertise in:
- **Cybersecurity**: VPN development, network security, packet analysis, ethical hacking
- **Security Applications**: Building secure systems with privacy-first design principles  
- **Full Stack Development**: Python, FastAPI, TypeScript, secure web technologies

## Featured Projects

- 🚗 **My Car Care**: Full-stack automotive service platform with location-based shop finder
- 🔒 **Network Packet Sniffer**: Advanced cybersecurity tool for WiFi packet analysis
- 🎮 **Python Trivia Game**: Educational game showcasing Python fundamentals

## Features

- 🎨 **Tesla-inspired Design**: Clean, minimalist aesthetic matching Tesla's website
- 📱 **Responsive**: Optimized for all device sizes
- 🚀 **Next.js 15**: Latest Next.js features with App Router
- 💨 **Tailwind CSS**: Utility-first styling with custom Tesla-like components  
- 📝 **MDX Integration**: Real projects sourced from GitHub repositories
- 🎠 **Interactive Carousel**: Smooth project showcase with typewriter animations
- 🔗 **Professional Links**: Direct links to GitHub, LinkedIn, and email
- ⚡ **Performance**: Optimized loading and smooth animations

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd tesla-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Customization

### Personal Information
- Update the name in `Navigation.tsx`
- Modify the about section in `AboutSection.tsx`
- Add your social media links in `Navigation.tsx`
- Update email links throughout the site

### Projects
Create new MDX files in `src/content/projects/` with the following format:

```mdx
---
title: "Your Project"
description: "Project description"
image: "/projects/your-image.jpg"
technologies: ["React", "Next.js", "TypeScript"]
githubUrl: "https://github.com/yourusername/project"
liveUrl: "https://your-project.vercel.app"
featured: true
---

Your project content in markdown...
```

### Styling
The design follows Tesla's minimalist approach with:
- Clean typography
- Subtle animations
- Smooth transitions
- Gradient backgrounds
- Card-based layouts

## Deployment

Deploy easily on Vercel:

```bash
npm run build
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **MDX** - Markdown with React components
- **Lucide React** - Modern icons
- **Gray Matter** - Front matter parsing

## License

MIT License - feel free to use this template for your own portfolio!
