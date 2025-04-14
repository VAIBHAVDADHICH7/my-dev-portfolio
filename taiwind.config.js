/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./public/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          mono: ['Fira Code', 'monospace'],
          sans: ['Inter', 'sans-serif']
        },
        colors: {
          code: {
            bg: '#1e1e1e',
            green: '#6A9955',
            blue: '#569CD6',
            purple: '#C586C0',
            orange: '#CE9178'
          }
        }
      }
    },
    plugins: [],
  }
  