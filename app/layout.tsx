import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DeferredComponents from '../components/DeferredComponents'
import { Analytics } from "@vercel/analytics/next"

import { structuredData } from './structuredData'

import ThemeProviderWrapper from '../components/ThemeProviderWrapper'

import { Inter, Fira_Code } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata = {
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let isDark = localStorage.theme === 'dark' || 
                  (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                document.documentElement.classList.toggle('dark', isDark);
                document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} ${firaCode.className}`} suppressHydrationWarning>
        <ThemeProviderWrapper>
          <Header />
          <main className="min-h-screen px-6 pt-24 pb-10">{children}</main>
          <Footer />
          <DeferredComponents />
          <Analytics />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
