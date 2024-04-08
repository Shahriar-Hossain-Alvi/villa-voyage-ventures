/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      playfairDisplay: ['Playfair Display', 'sans-serif'],
      dosis: ['Dosis', 'serif'],
    },
    extend: {
      colors: {
        primaryColor: '#77C720 ',
        secondaryColor: '#334149'
      },
    },
  },
  plugins: [require("daisyui")],
}

