/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0088CC',
          light: '#00AAEE',
          dark: '#005F99',
          50: '#E0F4FF',
        },
        accent: {
          DEFAULT: '#00CC66',
          light: '#00EE77',
          dark: '#009944',
        },
        cyan: '#00E5FF',
        surface: {
          DEFAULT: '#F8FAFB',
          dark: '#EEF2F5',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
