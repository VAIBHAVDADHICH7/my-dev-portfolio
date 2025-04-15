'use client'

import { useState } from 'react'
import { FiSend } from 'react-icons/fi'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitSuccess(true)
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition min-h-[150px]"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <FiSend className="mr-2" />
            Send Message
          </>
        )}
      </button>

      {submitSuccess && (
        <div className="p-4 text-sm text-green-500 bg-green-500/10 rounded-lg">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}
    </form>
  )
}
