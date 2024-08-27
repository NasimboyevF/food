/** @type {import('tailwindcss').Config} */
  module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'coral':'#35B8BE',
        'dark-coral':'#546285'
      },
      container:
      {
        'def': '1200px'

      }

      
    },
  },
  plugins: [],
}

