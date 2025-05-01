import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

export default function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
  return (
    <div className="bg-neutral-900 p-6 rounded-lg shadow-md space-y-3 hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-blue-400">{title}</h2>
      <p className="text-neutral-300">{description}</p>
      <ul className="flex flex-wrap gap-2 text-sm text-neutral-400">
        {tech.map((item) => (
          <li key={item} className="bg-neutral-800 px-2 py-1 rounded">{item}</li>
        ))}
      </ul>
      <div className="flex gap-4 mt-2">
        <Link href={github} target="_blank" aria-label={`${title} GitHub`}>
          <FaGithub className="text-white hover:text-blue-400" />
        </Link>
        {demo && (
          <Link href={demo} target="_blank" aria-label={`${title} Live Demo`}>
            <span className="text-green-400 underline hover:text-green-300">Live Demo</span>
          </Link>
        )}
      </div>
    </div>
  )
}
