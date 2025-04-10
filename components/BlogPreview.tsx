import Link from 'next/link'

export default function BlogPreview() {
  return (
    <section className="mt-16 max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-semibold mb-4">Latest from the Blog</h3>
      <p className="text-neutral-400 mb-4">
        In-depth tutorials, case studies, and developer insights.
      </p>
      <Link
        href="/blog"
        className="text-blue-500 underline hover:text-blue-300 transition"
      >
        Visit Blog
      </Link>
    </section>
  )
}
