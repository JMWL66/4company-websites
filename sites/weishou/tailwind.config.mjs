/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        craft: {
          DEFAULT: '#CC1111',
          light: '#E02020',
          dark: '#990D0D',
          50: '#FFF0F0',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          800: '#222222',
          700: '#2E2E2E',
          600: '#3A3A3A',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
