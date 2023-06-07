/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'blur': "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75))"
     }),
    },
  },
  plugins: [],

}

