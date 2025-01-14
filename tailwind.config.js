/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        dosis: ['Dosis', 'serif'],
      },
      colors: {
        primaryColor: '#77C720 ',
        secondaryColor: '#334149'
      },
    },
  },
  plugins: [require("daisyui")],
}

