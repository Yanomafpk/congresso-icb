/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['active'],
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customColor: '#7A7A7A', 
      },
    },
  },
  plugins: [],

  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#46BDCD',
     'secondary': '#7A7A7A',
     'danger': '#e3342f',
    })
  }

}

