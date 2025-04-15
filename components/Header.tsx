'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Playground', href: '/playground' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-neutral-700">
      <div className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
        <h1 className="font-mono text-lg font-bold tracking-wide">vaibhav.dev</h1>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 text-sm">
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

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation menu */}
      {menuOpen && (
        <nav className="md:hidden px-6 pb-4 space-y-2 bg-neutral-900">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`block py-2 text-white hover:text-blue-500 transition ${
                pathname === href ? 'text-blue-500' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
