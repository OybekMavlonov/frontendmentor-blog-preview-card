/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      colors: {
        gray: {
          500: "hsl(0, 0%, 42%)",
          950: "hsl(0, 0%, 7%)"
        },
        white: "hsl(0, 0%, 100%)",
        yellow: "hsl(47, 88%, 63%)",
      }
    },
  },
  plugins: [],
}
