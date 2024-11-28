/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': "#8594be",
        'primary': '#33446E',
        'primary-dark': '#0B2F5B',
        'secondary': '#E1EBF3',
        'accent': '#D13541',
        'test': '#F53',
        'test2': '#f0f',
      }
    },
  },
  plugins: [],
}