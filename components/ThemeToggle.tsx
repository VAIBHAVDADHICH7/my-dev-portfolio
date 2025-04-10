'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-6 right-6 p-3 bg-neutral-800 text-white rounded-full shadow-lg hover:scale-110 transition"
      aria-label="Toggle theme"
    >
      {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}
