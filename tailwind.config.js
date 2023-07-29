/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme:{
    fontFamily: {
      'mulish': ['Mulish_800ExtraBold'],
      'mulish-sm': ['Mulish_400Regular'],
    },
    extend: {
      colors: {
        'principal': {
          100: '#F0EDFD',
          300: '#7F5FFE',
          600: '#6A43F5',
          800: '#4F37A3',
        }
    },
  }},
  extend: {},
  plugins: [],
}
