/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : 'rgb(119,119,119)',
        'secondary' : 'rgb(17,17,17)',
        'primary-light' : 'rgb(170,170,170)',

      },
      fill: {
        'primary' : '#777777',
        'secondary' : 'rgb(17,17,17)',
        'primary-light' : 'rgb(170,170,170)',
      },
      fontFamily: {
        bebas: ["Bebas", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
}
