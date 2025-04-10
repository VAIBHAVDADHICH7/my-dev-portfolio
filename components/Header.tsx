'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Playground', href: '/playground' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-neutral-700">
      <h1 className="font-mono text-lg font-bold tracking-wide">vaibhav.dev</h1>
      <nav className="space-x-4 text-sm">
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`hover:text-blue-500 transition ${
              pathname === href ? 'text-blue-500' : ''
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
