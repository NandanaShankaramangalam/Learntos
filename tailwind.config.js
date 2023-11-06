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
      },
      backgroundImage: {
        'custom-bluegradient' : 'linear-gradient(90deg, rgba(9,9,121,0.8183648459383753) 28%, rgba(41,145,166,0.7595413165266106) 82%)',
        'custom-gradient' : 'linear-gradient(90deg, rgba(247,128,0,0.8855917366946778) 0%, rgba(255,0,0,0.4990371148459384) 100%)'
      },
      animation: {
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        'bounce': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },

      animation: {
        'float': 'float 3s infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
}