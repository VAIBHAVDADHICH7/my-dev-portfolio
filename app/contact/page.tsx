import React from 'react'
import Head from 'next/head'
import ContactForm from '../../components/ContactForm'
import SocialLinks from '../../components/SocialLinks'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me - Get in Touch</title>
        <meta name="description" content="Contact me for projects, collaborations, or inquiries. I'm open to discussing new ideas and opportunities." />
<meta name="keywords" content="contact, get in touch, projects, collaboration, inquiries, developer, portfolio" />
<meta name="author" content="Vaibhav Dadhich" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

{/* Open Graph meta tags */}
<meta property="og:title" content="Contact Me - Get in Touch" />
<meta property="og:description" content="Contact me for projects, collaborations, or inquiries. I'm open to discussing new ideas and opportunities." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.vaibhavdadhich.me/contact" />
<meta property="og:image" content="https://www.vaibhavdadhich.me/preview.png" />
<meta property="og:image:alt" content="Contact page preview image" />
<meta property="og:site_name" content="Vaibhav Dadhich Portfolio" />

{/* Twitter Card meta tags */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Contact Me - Get in Touch" />
<meta name="twitter:description" content="Contact me for projects, collaborations, or inquiries. I'm open to discussing new ideas and opportunities." />
<meta name="twitter:image" content="https://www.vaibhavdadhich.me/preview.png" />
      </Head>
      <main style={{ maxWidth: '720px', margin: '2rem auto', padding: '0 1rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#1f2937' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', textAlign: 'center', color: '#2563eb' }}>
          Contact Me
        </h1>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', textAlign: 'center', color: '#4b5563' }}>
          I’m excited to hear from you! Whether you have a project idea, collaboration opportunity, or just want to say hello, feel free to reach out.
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2563eb' }}>
            Contact Information
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, color: '#374151' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Email:</strong> <a href="mailto:vaibhavdadhich061@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>vaibhavdadhich061@gmail.com</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Location:</strong> Jhotwara, Jaipur
            </li>
            <li>
              <strong>Response Time:</strong> Typically within 24-48 hours on business days
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2563eb' }}>
            Connect With Me
          </h2>
          <SocialLinks />
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2563eb' }}>
            Send a Message
          </h2>
          <ContactForm />
        </section>
      </main>
    </>
  )
}
