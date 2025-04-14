import ProjectCard from '../../components/ProjectCard'
import projects from './projectsData'

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
