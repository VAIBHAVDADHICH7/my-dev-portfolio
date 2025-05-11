import type { Metadata } from 'next'

export const metadata: Metadata = {
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
