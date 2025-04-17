'use client'

import { useState } from 'react'

// Define the type for the responses object
const responses: Record<'whoami' | 'projects' | 'blog' | 'contact' | 'skills', string> = {
  whoami: 'I am a developer passionate about building web applications.',
  projects: 'Check out my projects at /projects.',
  blog: 'Read technical write-ups and tutorials at /blog.',
  contact: 'Let’s collaborate! See /contact.',
  skills: 'Proficient in React, Next.js, Node.js, Three.js, TypeScript and more.'
}

export default function Terminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Narrow the type of input to match the keys of responses
      const command = input.toLowerCase() as keyof typeof responses
      const response = responses[command] || 'Command not found.'
      setHistory([...history, `$ ${input}`, response])
      setInput('')
    }
  }

  return (
    <div className="bg-[#1e1e1e] text-green-400 font-mono p-6 rounded-lg shadow-xl max-w-2xl mx-auto" role="region" aria-label="Terminal command interface">
      {history.map((line, index) => (
        <pre key={index} className="whitespace-pre-wrap">{line}</pre>
      ))}
      <div className="flex items-center">
        <label htmlFor="terminal-input" className="sr-only">Terminal command input</label>
        <span className="mr-2">$</span>
        <input
          id="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none outline-none w-full text-green-400"
          autoFocus
        />
      </div>
    </div>
  )
}
