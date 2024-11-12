/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#B8A7E0', // pastel purple
          secondary: '#FFB5C2', // pastel pink
          accent: '#A7E0D9', // pastel teal
          light: '#F5F0FF', // very light purple
          dark: '#6B4E96', // darker purple for text
        }
      }
    },
  },
  plugins: [],
};