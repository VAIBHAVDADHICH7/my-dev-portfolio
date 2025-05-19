import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

export const projects = [
  {
    title: 'Open DevTools',
    description: 'A Chrome extension to debug UI frameworks.',
    tech: ['TypeScript', 'Vite', 'Chrome API'],
    github: 'https://github.com/VAIBHAVDADHICH7/open-devtools',
    demo: 'https://open-devtools.vercel.app',
    tags: ['debugging', 'chrome-extension']
  }
];

export default function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
  return (
    <div className="bg-neutral-900 p-6 rounded-lg shadow-md space-y-3 hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-blue-400 dark:text-blue-300">{title}</h2>
      <p className="text-neutral-300 dark:text-neutral-400">{description}</p>
      <ul className="flex flex-wrap gap-2 text-sm text-neutral-400 dark:text-neutral-300">
        {tech.map((item) => (
          <li key={item} className="bg-neutral-800 px-2 py-1 rounded">{item}</li>
        ))}
      </ul>
      <div className="flex gap-4 mt-2">
        <Link href={github} target="_blank" aria-label={`${title} GitHub`}>
          <FaGithub className="text-white dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300" />
        </Link>
        {demo && (
          <Link href={demo} target="_blank" aria-label={`${title} Live Demo`}>
            <span className="text-green-400 dark:text-green-300 underline hover:text-green-300 dark:hover:text-green-200">Live Demo</span>
          </Link>
        )}
      </div>
    </div>
  )
}
