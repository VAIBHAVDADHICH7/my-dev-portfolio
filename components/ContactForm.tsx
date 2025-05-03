'use client'

import { useState } from 'react'
import { FiSend, FiUser, FiMail, FiMessageSquare, FiTag } from 'react-icons/fi'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const subjectOptions = [
    'General Inquiry',
    'Project Collaboration',
    'Job Opportunity',
    'Speaking Engagement',
    'Other'
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (form.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setForm({ name: '', email: '', subject: 'General Inquiry', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="p-8 text-center bg-green-500/10 rounded-xl border border-green-500/20 animate-fadeIn">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-4 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-3">Thank You!</h3>
        <p className="text-neutral-300 mb-6 max-w-md mx-auto">
          Your message has been successfully sent. I appreciate your interest and will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="px-6 py-2 text-sm bg-neutral-800 hover:bg-neutral-700 rounded-lg transition border border-neutral-700"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="flex items-center text-sm font-medium text-neutral-300">
          <FiUser className="mr-2 text-blue-500" />
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className={`w-full px-4 py-3 rounded-lg bg-neutral-800/70 text-white border ${
            errors.name ? 'border-red-500' : 'border-neutral-700'
          } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition duration-300 ease-in-out`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="flex items-center text-sm font-medium text-neutral-300">
          <FiMail className="mr-2 text-blue-500" />
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={`w-full px-4 py-3 rounded-lg bg-neutral-800/70 text-white border ${
            errors.email ? 'border-red-500' : 'border-neutral-700'
          } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition duration-300 ease-in-out`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="flex items-center text-sm font-medium text-neutral-300">
          <FiTag className="mr-2 text-blue-500" />
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-neutral-800/70 text-white border border-neutral-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition duration-300 ease-in-out appearance-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
        >
          {subjectOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="flex items-center text-sm font-medium text-neutral-300">
          <FiMessageSquare className="mr-2 text-blue-500" />
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message here..."
          className={`w-full px-4 py-3 rounded-lg bg-neutral-800/70 text-white border ${
            errors.message ? 'border-red-500' : 'border-neutral-700'
          } focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition duration-300 ease-in-out min-h-[180px] resize-y`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        <div className="flex justify-end">
          <p className="text-xs text-neutral-500">
            {form.message.length}/1000 characters
          </p>
        </div>
      </div>

      <div className="text-xs text-neutral-500 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700/50">
        By submitting this form, you agree to the processing of your personal data as described in my Privacy Policy. Your information will be handled with care and will not be shared with third parties.
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center w-full px-6 py-4 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 active:translate-y-0"
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Message...
          </span>
        ) : (
          <>
            <FiSend className="mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
