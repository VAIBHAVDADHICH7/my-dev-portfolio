'use client'

import { useEffect } from 'react'

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (!localStorage.theme) {
        document.documentElement.classList.toggle('dark', e.matches)
        document.documentElement.style.colorScheme = e.matches ? 'dark' : 'light'
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return <>{children}</>
}
