/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E0C068',
          dark: '#9A7A2E',
          50: '#FDF9EE',
          100: '#F7EDCA',
        },
        obsidian: {
          DEFAULT: '#0A0A0A',
          800: '#141414',
          700: '#1C1C1C',
          600: '#242424',
          500: '#2E2E2E',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', 'Georgia', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
        display: ['"Cormorant Garamond"', '"Noto Serif JP"', 'serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        wider: '0.15em',
      },
    },
  },
  plugins: [],
};
