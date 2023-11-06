/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-blue' : '#001524',
        'custom-orange' : '#FF5B22',
        'custom-lightorange' : '#FF9130',
      }
    },
  },
  plugins: [],
}