import Link from 'next/link'

const icons = {
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.928 2.206-4.928 4.928 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.158-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.417-1.68 1.318-3.808 2.105-6.115 2.105-.398 0-.79-.023-1.175-.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633.962-.695 1.8-1.562 2.46-2.549z"/>
    </svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.07 2.07 0 11.001-4.14 2.07 2.07 0 01-.001 4.14zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
    </svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-6 h-6">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37a4 4 0 11-4.73-4.73 4 4 0 014.73 4.73z"/>
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
    </svg>
  ),
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.342v21.316C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.725 0 1.325-.6 1.325-1.342V1.342C24 .6 23.4 0 22.675 0z"/>
    </svg>
  ),
  discord: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 245 240" className="w-6 h-6">
      <path d="M104.4 104.5c-5.7 0-10.2 5-10.2 11.1 0 6.1 4.6 11.1 10.2 11.1 5.7 0 10.3-5 10.2-11.1 0-6.1-4.6-11.1-10.2-11.1zm36.2 0c-5.7 0-10.2 5-10.2 11.1 0 6.1 4.6 11.1 10.2 11.1 5.7 0 10.3-5 10.2-11.1 0-6.1-4.5-11.1-10.2-11.1z"/>
      <path d="M189.5 20h-134C39.5 20 20 39.5 20 66.5v107c0 27 19.5 46.5 35.5 46.5h114.5l-5.3-18.5 12.8 11.9 11.4 10.6 20.2 17.7V66.5c0-27-19.5-46.5-35.5-46.5zM165 165.5s-15-18-27-18c-12 0-26.8 18-26.8 18l-38-35.5 7.5-6.5s11.2 10.5 30.5 10.5c0 0 15-18 27-18 12 0 26.8 18 26.8 18l38 35.5-7.5 6.5z"/>
    </svg>
  )
}

export default function SocialLinks() {
  const socialLinks = [
    { href: "https://twitter.com", icon: icons.twitter },
    { href: "https://github.com", icon: icons.github },
    { href: "https://linkedin.com", icon: icons.linkedin },
    { href: "https://instagram.com", icon: icons.instagram },
    { href: "https://facebook.com", icon: icons.facebook },
    { href: "https://discord.com", icon: icons.discord }
  ]

  return (
    <div className="mt-8 max-w-md mx-auto p-6 bg-primary dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-black dark:text-white text-center">Connect with me</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map(({ href, icon }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            aria-label={`Link to ${href}`}
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  )
}
