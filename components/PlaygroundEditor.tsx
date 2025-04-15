'use client'

import { useState } from 'react'

export default function PlaygroundEditor() {
  const [code, setCode] = useState(`<h1>Hello, Dev!</h1>`)

  return (
    <div className="grid gap-6">
      <div className="border p-4 rounded bg-[#1e1e1e] text-white font-mono" dir="ltr">
        <div
          contentEditable
          onInput={(e) => setCode((e.target as HTMLElement).innerText)}
          suppressContentEditableWarning
          className="min-h-[120px] outline-none"
        >
          {code}
        </div>
      </div>
      <div className="p-4 border rounded bg-white text-black">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </div>
  )
}
