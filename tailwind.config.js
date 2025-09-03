/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        reckless: ['Reckless', 'sans-serif'],
        untitled: ['Untitled Sans', 'sans-serif'],
      },
      colors: {
        lightPink: '#f9d6f0',
        pink: '#9b0080',
        darkPink: '#6a0058',
        tan: '#fff5ed',
        purple: '#8755f2',
        text: '#000000',
      },
    },
  },
  plugins: [],
};
