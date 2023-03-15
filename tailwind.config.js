
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./src/assets/header.jpg')",
        'footer': "url('./src/assets/header.jpg')",
      },
      fontFamily: {
        sans: ['Montserrat'],
        serif: ['Great Vibes']
    },
    },
  },
  plugins: [],
}
