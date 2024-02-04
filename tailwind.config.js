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
        'light-secondary': 'rgb(226 232 240)',
        'light-text-primary': '#000',
        'light-text-secondary': 'rgb(51 65 85)',
        'dark-base': 'rgb(63 63 70)',
        'dark-primary': 'rgb(129 140 248)',
        'dark-secondary': 'rgb(39 39 42)',
        'dark-text-primary': '#fff',
        'dark-text-secondary': 'rgb(148 163 184)',
      }
    },
  },
  plugins: [],
}

