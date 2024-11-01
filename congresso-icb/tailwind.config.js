/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#46BDCD',
        secondary: '#7A7A7A',
        danger: '#e3342f',
        active: '#e3342f', // Adicione aqui se precisar usar o estado 'active' com `backgroundColor`
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customColor: '#7A7A7A', 
      },
      screens: {
        min400: '400px', // Define a largura mínima de 400px
      },
    },
  },
  plugins: [],
}
