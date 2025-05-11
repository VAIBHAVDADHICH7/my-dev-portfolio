const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')
const path = require('path')

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.vaibhavdadhich.me' })
  const writeStream = createWriteStream(path.resolve(__dirname, '../public/sitemap.xml'))
  sitemap.pipe(writeStream)

  // Add URLs here - you can extend this to dynamically add pages
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 })
  sitemap.write({ url: '/projects', changefreq: 'weekly', priority: 0.8 })
  sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.5 })

  sitemap.end()

  await streamToPromise(writeStream)
  console.log('Sitemap generated successfully.')
}

generateSitemap().catch(console.error)
