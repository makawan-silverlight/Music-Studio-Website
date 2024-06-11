/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#010851",
        "secondary": "#9A7AF1",
        "Thirdary" : "#BEA6FF",
        "tartiary": "#707070",
        "pink": "#EE9AE5"
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}

