'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

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
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl bg-white dark:bg-[#1e1e1e] ${menuOpen ? 'rounded-none' : 'rounded-full'} shadow-lg z-50 backdrop-blur-md`} role="banner">
      <div className="flex justify-between items-center py-4 px-6">
        <h1 className="font-mono text-lg font-bold tracking-wide select-none cursor-default text-black dark:text-white">Vaibhav.dev</h1>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 text-sm" role="navigation" aria-label="Primary navigation">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`hover:text-blue-500 transition ${
                pathname === href ? 'text-blue-500 dark:text-blue-400' : 'text-black dark:text-white'
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
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6 text-black dark:text-white"
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
        <nav
          ref={menuRef}
          className="md:hidden px-6 pb-4 space-y-2 bg-white dark:bg-[#1e1e1e] rounded-none"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`block py-2 hover:text-blue-500 transition ${
                pathname === href ? 'text-blue-500 dark:text-blue-400' : 'text-black dark:text-white'
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
