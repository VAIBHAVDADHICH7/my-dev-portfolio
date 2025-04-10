'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thanks for reaching out, ${form.name}! We'll be in touch soon.`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Your name"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded bg-neutral-800 text-white"
      />
      <input
        name="email"
        type="email"
        placeholder="Your email"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded bg-neutral-800 text-white"
      />
      <textarea
        name="message"
        placeholder="Your message"
        required
        value={form.message}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded bg-neutral-800 text-white min-h-[100px]"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Send Message
      </button>
    </form>
  )
}
