import Link from 'next/link'

export default function BlogPreview() {
  return (
    <section className="mt-16 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl font-semibold mb-6 text-white dark:text-gray-200">Latest from the Blog</h3>
      <p className="text-gray-700 dark:text-gray-200 mb-6 max-w-3xl mx-auto">
        In-depth tutorials, case studies, and developer insights.
      </p>
      <Link
        href="/blog"
        className="text-blue-600 dark:text-blue-400 underline hover:text-blue-400 dark:hover:text-blue-300 transition"
      >
        Visit Blog
      </Link>
    </section>
  )
}
