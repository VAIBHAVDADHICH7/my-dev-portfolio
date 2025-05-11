import ProjectCard from '../../components/ProjectCard'
import projects from './projectsData'

export const metadata = {
  title: 'Projects - Developer Portfolio',
  description: 'A showcase of projects developed by Vaibhav Dadhich, including web applications, blogs, and interactive playgrounds.',
  keywords: 'projects, developer portfolio, web applications, blogs, interactive playgrounds, Vaibhav Dadhich',
  authors: [{ name: 'Vaibhav Dadhich' }],
  openGraph: {
    title: 'Projects - Developer Portfolio',
    description: 'A showcase of projects developed by Vaibhav Dadhich, including web applications, blogs, and interactive playgrounds.',
    url: 'https://www.vaibhavdadhich.me/projects',
    type: 'website',
    images: [
      {
        url: '/preview.png',
        alt: 'Projects page preview image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Developer Portfolio',
    description: 'A showcase of projects developed by Vaibhav Dadhich, including web applications, blogs, and interactive playgrounds.',
    images: ['/preview.png'],
  },
}

/**
 * ProjectsPage component - Displays a list of projects using ProjectCard components
 * @returns {JSX.Element} A list of project cards
 */
export default function ProjectsPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      {/* Map through projects array and render a ProjectCard for each project */}
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  )
}
