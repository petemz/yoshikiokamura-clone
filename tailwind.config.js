/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {

      'md': {'max': '950px'},
      
      '-md': {'min': '950px'},

      'sm': {'max': '800px'},
      
      '-sm': {'min': '800px'},

      'xs': {'max': '600px'},

      '-xs': {'min': '600px'},

      'xxs': {'max': '450px'},
      
      '-xxs': {'min': '450px'},
    }
  },
  plugins: [],
}