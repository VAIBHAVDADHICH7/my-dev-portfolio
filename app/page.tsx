// app/page.tsx
'use client'

import Hero from '../components/Hero'
import Terminal from '../components/Terminal'
import Skills3D from '../components/Skills3D'
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
