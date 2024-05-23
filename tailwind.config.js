const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.purple,
        secondary: colors.orange,
      },
      fontFamily: {
        lora: ['var(--font-lora)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'selector',
};
