'use client'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '../components/Hero'
import Terminal from '../components/Terminal'
import BlogPreview from '../components/BlogPreview'
import EducationSection from '../components/EducationSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vaibhav Dadhich | Developer Portfolio</title>
        <meta name="description" content="Personal portfolio website built with Next.js showcasing projects, blog, and interactive playground." />
        <meta name="keywords" content="developer, portfolio, next.js, projects, blog, playground, Vaibhav Dadhich" />
        <meta name="author" content="Vaibhav Dadhich" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Vaibhav Dadhich | Developer Portfolio" />
        <meta property="og:description" content="Personal portfolio website built with Next.js showcasing projects, blog, and interactive playground." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vaibhavdadhich.me" />
        <meta property="og:image" content="https://www.vaibhavdadhich.me/preview.png" />
        <meta property="og:image:alt" content="Vaibhav Dadhich Portfolio Preview" />
        <meta property="og:site_name" content="Vaibhav Dadhich Portfolio" />
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vaibhav Dadhich | Developer Portfolio" />
        <meta name="twitter:description" content="Personal portfolio website built with Next.js showcasing projects, blog, and interactive playground." />
        <meta name="twitter:image" content="https://www.vaibhavdadhich.me/preview.png" />
      </Head>
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
