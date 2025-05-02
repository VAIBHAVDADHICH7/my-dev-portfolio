import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

/**
 * Interface defining the props for the ProjectCard component
 * @interface ProjectCardProps
 * @property {string} title - The title of the project
 * @property {string} description - A brief description of the project
 * @property {string[]} tech - Array of technologies used in the project
 * @property {string} github - URL to the project's GitHub repository
 * @property {string} [demo] - Optional URL to a live demo of the project
 */
interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

// Example project data (likely temporary - should be moved to a data file or CMS)
const projects = [
  {
    title: 'Open DevTools',
    description: 'A Chrome extension to debug UI frameworks.',
    tech: ['TypeScript', 'Vite', 'Chrome API'],
    github: 'https://github.com/VAIBHAVDADHICH7/open-devtools',
    demo: 'https://open-devtools.vercel.app', // Optional demo URL
    tags: ['debugging', 'chrome-extension']
  }
];

/**
 * ProjectCard component - Displays a project in a styled card format
 * @param {ProjectCardProps} props - Props containing project information
 * @returns {JSX.Element} A styled card component displaying project details
 */
export default function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
  return (
    <div className="bg-neutral-900 p-6 rounded-lg shadow-md space-y-3 hover:shadow-lg transition">
      {/* Project title */}
      <h2 className="text-xl font-bold text-blue-400">{title}</h2>
      
      {/* Project description */}
      <p className="text-neutral-300">{description}</p>
      
      {/* Technology tags list */}
      <ul className="flex flex-wrap gap-2 text-sm text-neutral-400">
        {tech.map((item) => (
          <li key={item} className="bg-neutral-800 px-2 py-1 rounded">{item}</li>
        ))}
      </ul>
      
      {/* Links section */}
      <div className="flex gap-4 mt-2">
        {/* GitHub link (always shown) */}
        <Link href={github} target="_blank" aria-label={`${title} GitHub`}>
          <FaGithub className="text-white hover:text-blue-400" />
        </Link>
        
        {/* Demo link (only shown if demo prop exists) */}
        {demo && (
          <Link href={demo} target="_blank" aria-label={`${title} Live Demo`}>
            <span className="text-green-400 underline hover:text-green-300">Live Demo</span>
          </Link>
        )}
      </div>
    </div>
  )
}
