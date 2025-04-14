// app/page.tsx
'use client'

import Hero from '../components/Hero'
import Terminal from '../components/Terminal'
import dynamic from 'next/dynamic'
const Skills3D = dynamic(() => import('../components/Skills3D'), { ssr: false })
import BlogPreview from '../components/BlogPreview'

export default function Home() {
  return (
    <section className="space-y-20">
      <Hero />
      <Terminal />
      <Skills3D />
      <BlogPreview />
    </section>
  )
}
