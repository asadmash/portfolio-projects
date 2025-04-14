/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./**/*.html","./src/style.css"],
  theme: {
    extend: {
      colors: {
      'bg-soft-red': 'hsl(0, 94%, 66%)',
      'grayish-blue': 'hsl(229, 8%, 60%)',
      'light-grayish-blue': 'hsl(240, 24%, 96%)',
      'dark-blue' : 'hsl(229, 31%, 21%)',
      'soft-blue' : 'hsl(231, 69%, 60%)',
      },
    },
  },
  plugins: [],
}



