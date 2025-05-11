'use client'

import './globals.css'
import React, { useEffect, useState, ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DeferredComponents from '../components/DeferredComponents'

import { structuredData } from './structuredData'

import ThemeProviderWrapper from '../components/ThemeProviderWrapper'

import type { Metadata } from 'next'

import { Inter, Fira_Code } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  // disable automatic injection of font CSS classes to avoid hydration mismatch
  // this requires manual application of font classes if needed
  // disableRuntime: true, // removed because it's not a valid option
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
  // disableRuntime: true, // removed because it's not a valid option
})

const metadata = {
  title: 'Vaibhav Dadhich | Developer Portfolio',
  description: 'Personal portfolio website built with Next.js showcasing projects, blog, and interactive playground.',
  metadataBase: new URL('https://vaibhavdadhich.me'),
  alternates: {
    canonical: 'https://vaibhavdadhich.me',
  },
  openGraph: {
    title: 'Vaibhav Dadhich | Developer Portfolio',
    description: 'Personal portfolio website built with Next.js showcasing projects, blog, and interactive playground.',
    url: 'https://www.vaibhavdadhich.me',
    type: 'website',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Dadhich Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  },
  // Remove scripts field as it is not supported in Metadata type
  // Instead, add structured data script manually in the layout component
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render a fallback UI or nothing on the server to avoid hydration mismatch
    return (
      <html lang="en">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </head>
        <body>
          {/* Optionally render a loading state */}
          <div />
        </body>
      </html>
    )
  }

  return (
    <html lang="en" className={`${inter.className} ${firaCode.className}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ThemeProviderWrapper>
          <Header />
          <main className="min-h-screen px-6 pt-24 pb-10">{children}</main>
          <Footer />
          <DeferredComponents />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
