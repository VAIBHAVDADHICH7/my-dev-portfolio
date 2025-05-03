import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DeferredComponents from '../components/DeferredComponents'



import { structuredData } from './structuredData'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vaibhav Dadhich | Developer Portfolio',
  description: 'Personal portfolio website built with Next.js showcasing projects, blog, and interactive playground.',
  metadataBase: new URL('https://vaibhav.dev'),
  alternates: {
    canonical: 'https://vaibhav.dev',
  },
  openGraph: {
    title: 'Vaibhav Dadhich | Developer Portfolio',
    description: 'Personal portfolio website built with Next.js showcasing projects, blog, and interactive playground.',
    url: 'https://vaibhav.dev',
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
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-white dark:bg-[#1e1e1e] text-black dark:text-white font-sans">
        <Header />
        <main className="min-h-screen px-6 pt-24 pb-10">{children}</main>
        <Footer />
        <DeferredComponents />
      </body>
    </html>
  )
}
