/**
 * Array of project data to be displayed on the Projects page
 * @constant {Array} projects
 * @property {string} title - The title of the project
 * @property {string} description - A brief description of the project
 * @property {string[]} tech - Array of technologies used in the project
 * @property {string} github - URL to the project's GitHub repository
 * @property {string} [demo] - Optional URL to a live demo of the project
 * @property {string[]} tags - Array of tags associated with the project
 */
const projects = [
  {
    title: 'Open DevTools',
    description: 'A Chrome extension to debug UI frameworks.',
    tech: ['TypeScript', 'Vite', 'Chrome API'],
    github: 'https://github.com/yourusername/open-devtools',
    demo: 'https://open-devtools.vercel.app',
    tags: ['debugging', 'chrome-extension']
  },
  {
    title: 'DevBlog CMS',
    description: 'A simple markdown-based blog CMS for developers.',
    tech: ['Next.js', 'Tailwind', 'MDX'],
    github: 'https://github.com/yourusername/devblog-cms',
    demo: '',
    tags: ['blog', 'cms']
  }
];

export default projects;
