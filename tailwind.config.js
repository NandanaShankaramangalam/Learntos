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
        // 'custom-gradient' : 'linear-gradient(90deg, rgba(131,58,180,1) 39%, rgba(157,52,148,0.9640231092436975) 79%)',
        'custom-gradient' : 'linear-gradient(90deg, rgba(247,128,0,0.8855917366946778) 0%, rgba(255,0,0,0.4990371148459384) 100%)'
      },
      animation: {
        floating : "floatinganim 2s linear infinite"
      },
      keyframes : {
        floatinganim : {
         '0%':{
          transform : 'translate(0% 0%)'
         },
         
         '25%':{
          transform : 'translate(0% -30%)'
         },

         '50%':{
          transform : 'translate(0% 0%)'
         },

         '75%':{
          transform : 'translate(0% 3%)'
         },

         '100%':{
          transform : 'translate(0% 0%)'
         },
         
        }
      }
    },
  },
  plugins: [],
}