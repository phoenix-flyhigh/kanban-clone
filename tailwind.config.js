/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-base': '#fff',
        'light-primary': 'rgb(79 70 229)',
        'light-secondary': '',
        'light-text-primary': '#000',
        'light-text-secondary': '',
        'dark-base': 'rgb(63 63 70)',
        'dark-primary': 'rgb(129 140 248)',
        'dark-secondary': '',
        'dark-text-primary': '#fff',
        'dark-text-secondary': '',
      }
    },
  },
  plugins: [],
}

