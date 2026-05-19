/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F5821F',
          light: '#FF9A3C',
          dark: '#D06415',
          50: '#FFF4E8',
        },
        navy: {
          DEFAULT: '#1B3F8B',
          light: '#2451A8',
          dark: '#102B6A',
          900: '#07184A',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
