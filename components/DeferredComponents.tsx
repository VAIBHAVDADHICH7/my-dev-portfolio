'use client'

import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('./ThemeToggle'), { ssr: false })
const SpeedInsights = dynamic(() => import('@vercel/speed-insights/next').then(mod => mod.SpeedInsights), { ssr: false })

export default function DeferredComponents() {
  return (
    <>
      <ThemeToggle />
      <SpeedInsights />
    </>
  )
}
