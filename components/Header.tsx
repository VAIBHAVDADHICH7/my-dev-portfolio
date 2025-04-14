'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Navigation items configuration
 * @constant {Array} navItems
 * @property {string} label - Display text for the navigation item
 * @property {string} href - Path for the navigation link
 */
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Playground', href: '/playground' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
]

/**
 * Header component - Displays the site header with navigation links
 * @returns {JSX.Element} Header element with logo and navigation
 */
export default function Header() {
  // Get current path for active link highlighting
  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-neutral-700">
      {/* Site title/logo */}
      <h1 className="font-mono text-lg font-bold tracking-wide">vaibhav.dev</h1>
      
      {/* Navigation links */}
      <nav className="space-x-4 text-sm">
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`hover:text-blue-500 transition ${
              // Highlight current active route
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
