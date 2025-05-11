/**
 * Footer component - Displays copyright information
 * @returns {JSX.Element} Footer element with copyright notice
 */
export default function Footer() {
  return (
    <footer className="text-center text-sm mt-20 py-10 border-t border-neutral-700">
      {/* Dynamically displays current year in copyright */}
      <p className="mb-4">&copy; {new Date().getFullYear()} Vaibhav Dadhich. All rights reserved.</p>
      <div className="flex justify-center space-x-6">
        {/* GitHub */}
        <a
          href="https://github.com/VAIBHAVDADHICH7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vaibhav-dadhich"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.07 2.07 0 11.001-4.14 2.07 2.07 0 01-.001 4.14zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/vaibhavdadhich011"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37a4 4 0 11-4.94-4.94 4 4 0 014.94 4.94z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        {/* Facebook */}
        <a
          href="https://www.facebook.com/vaibhav.dadhich.5667"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-black dark:text-white hover:text-blue-700 dark:hover:text-blue-600 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.342v21.316C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.725 0 1.325-.6 1.325-1.342V1.342C24 .6 23.4 0 22.675 0z"/>
          </svg>
        </a>
        {/* Gmail */}
        <a
          href="mailto:vaibhavdadhich061@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
          className="text-black dark:text-white hover:text-red-600 dark:hover:text-red-500 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}
