'use client'

import { useEffect, useState } from 'react'

const commands = ['whoami', 'projects', 'blog', 'contact', 'skills']
const responses: Record<string, string> = {
  whoami: 'I am Vaibhav Dadhich, a full-stack developer passionate about clean code.',
  projects: 'Check out /projects for live demos and open source.',
  blog: 'Read technical write-ups and tutorials at /blog.',
  contact: 'Let’s collaborate! See /contact.',
  skills: 'Proficient in React, Next.js, Node.js, Three.js, TypeScript and more.'
}

export default function Terminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const response = responses[input.toLowerCase()] || 'Command not found.'
      setHistory([...history, `$ ${input}`, response])
      setInput('')
    }
  }

  return (
    <div className="bg-[#1e1e1e] text-green-400 font-mono p-6 rounded-lg shadow-xl max-w-2xl mx-auto">
      {history.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      <div className="flex">
        <span className="mr-2">$</span>
        <input
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
