// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ThemeToggle from '../components/ThemeToggle'

export const metadata = {
  title: 'Vaibhav Dadhich | Developer Portfolio',
  description: 'Personal portfolio website built with Next.js showcasing projects, blog, and interactive playground.',
  metadataBase: new URL('https://vaibhav.dev'),
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
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1e1e1e] text-black dark:text-white font-sans">
        <Header />
        <main className="min-h-screen px-6 pt-24 pb-10">{children}</main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  )
}
