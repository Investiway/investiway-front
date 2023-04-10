/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  prefix: 'tw-',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2c3e50',
        secondary: '#f39c12',
      },
      fontFamily: {
        sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        scale: 'transform: scale(1.2)',
      },
      animation: {
        scale: 'scale 400ms 400ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
