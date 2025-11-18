/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          light: '#F5F1E8',
          DEFAULT: '#E8E2D5',
        },
        lake: {
          light: '#D4E4ED',
          DEFAULT: '#A8C5D8',
          dark: '#6B8FA3',
        },
        stone: {
          light: '#E0DDD8',
          DEFAULT: '#9C9A95',
          dark: '#5A5854',
        },
        gold: {
          light: '#F4EFE0',
          DEFAULT: '#D4AF37',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
