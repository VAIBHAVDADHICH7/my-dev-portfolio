'use client'

import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

interface ThemeProviderWrapperProps {
  children: ReactNode
}

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="bg-white dark:bg-[#1e1e1e] text-black dark:text-white font-sans">
        {children}
      </div>
    </ThemeProvider>
  )
}

export default ThemeProviderWrapper
