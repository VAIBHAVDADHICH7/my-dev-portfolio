'use client'

import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from './ThemeProviderWrapper'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 bg-neutral-800 text-white rounded-full shadow-lg hover:scale-110 transition"
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  )
}
