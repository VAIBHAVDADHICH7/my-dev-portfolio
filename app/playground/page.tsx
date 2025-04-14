'use client'

import dynamic from 'next/dynamic'

// Lazy-load code editor
const PlaygroundEditor = dynamic(() => import('../../components/PlaygroundEditor'), { 
  ssr: false,
  loading: () => <p>Loading editor...</p>
})

export default function PlaygroundPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Code Playground</h1>
      <PlaygroundEditor />
    </div>
  )
}

