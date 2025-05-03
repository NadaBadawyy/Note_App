/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
   
    extend: {
      colors:{
        'primary':'#162F84',
        'sec':'#1B2E8E',
        'back':'#F0F4FC',
        'navback':'#A9B5DF',
        'navtext':'#2D336B'
      }
      
    },
  },
  plugins: [],
}