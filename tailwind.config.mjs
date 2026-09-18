/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        kit: {
          DEFAULT: '#009682',
          50:  '#E6F6F4',
          100: '#BFEAE4',
          200: '#7FD5CA',
          300: '#3FC0AF',
          400: '#00AB95',
          500: '#009682',
          600: '#007A6A',
          700: '#005E52',
          800: '#004239',
          900: '#002621',
        },
        navy: {
          DEFAULT: '#0D2137',
          light:   '#162F4E',
          50:      '#EEF2F6',
        },
      },
      fontFamily: {
        display: ['"Fira Sans"', 'sans-serif'],
        body:    ['"Fira Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
