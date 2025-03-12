/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      width: {
        '1100': '1100px'
      },
      backgroundColor:{
        'primary': '#f3f4f6',
        'secondary': '#f9fafb',
        'tertiary': '#f3f4f6'
      },
      maxWidth:{
        '600': '600px'
      },
      cursor:{
        pointer: 'pointer'
      }
    },
  },
  plugins: [],

}