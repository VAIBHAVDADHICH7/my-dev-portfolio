'use client'

import Hero from '../components/Hero'
import Terminal from '../components/Terminal'
import BlogPreview from '../components/BlogPreview'

export default function Home() {
  return (
    <>
      <div className="relative z-10 space-y-20">
        <Hero />
        <Terminal />
        <BlogPreview />
      </div>
    </>
  )
}
