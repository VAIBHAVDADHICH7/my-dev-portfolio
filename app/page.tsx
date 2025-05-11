import Link from 'next/link'
import Image from 'next/image'
import Hero from '../components/Hero'
import Terminal from '../components/Terminal'
import BlogPreview from '../components/BlogPreview'
import EducationSection from '../components/EducationSection'

export const metadata = {
  title: 'Vaibhav Dadhich | Developer Portfolio',
  description: 'Personal portfolio website built with Next.js showcasing projects, blog, and interactive playground.',
  keywords: 'developer, portfolio, next.js, projects, blog, playground, Vaibhav Dadhich',
  authors: [{ name: 'Vaibhav Dadhich' }],
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
    title: 'Vaibhav Dadhich | Developer Portfolio',
    description: 'Personal portfolio website built with Next.js showcasing projects, blog, and interactive playground.',
    images: ['/preview.png'],
  },
}

export default function Home() {
  return (
    <>
      <div className="relative z-10 space-y-20">
        <Hero />
        <Terminal />
        <EducationSection />
        <div className="text-center">
          <Link href="/playground" className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Go to Interactive Code Runner
          </Link>
        </div>
        <div className="text-center mt-10">
          <Image
            src="/preview.png"
            alt="Portfolio Preview"
            width={600}
            height={315}
            priority
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
        <BlogPreview />
      </div>
    </>
  )
}
