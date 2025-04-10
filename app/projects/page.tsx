import ProjectCard from '../../components/ProjectCard'

const projects = [
  {
    title: 'Open DevTools',
    description: 'A Chrome extension to debug UI frameworks.',
    tech: ['TypeScript', 'Vite', 'Chrome API'],
    github: 'https://github.com/yourusername/open-devtools',
    demo: 'https://open-devtools.vercel.app'
  },
  {
    title: 'DevBlog CMS',
    description: 'A simple markdown-based blog CMS for developers.',
    tech: ['Next.js', 'Tailwind', 'MDX'],
    github: 'https://github.com/yourusername/devblog-cms',
    demo: ''
  }
]

export default function ProjectsPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  )
}
