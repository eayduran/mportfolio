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
      fontSize: {
        'laptop' : '13em',
      },
      fontFamily: {
        bebas: ["Bebas", "sans-serif"],
      },
      
      margin: {
        'zero':'-9px',
        'iki': '-2px'
      },
      divideColor: {
        'primary' : '#777777',
        'secondary' : 'rgb(17,17,17)',
        'primary-light' : 'rgb(170,170,170)',
      },
      rotate: {
        '46':'46deg',
      },
      height:{
        '400': '400px'
      },
      width:{
        '280': '280px'
      },
      scale:{
        '67x': '67.0'
      },
      // that is animation class
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.green.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
}
