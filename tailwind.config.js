/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--Primary)',
        secondary: 'var(--Secondary-Orange)',
        'primary-text-black': 'var(--primary-text-black)',
        'primary-text-white': 'var(--primary-text-white)',
      },
      boxShadow: {
        'orange-glow': '0 4px 17.9px 0 rgba(255, 110, 110, 0.30)',
      },
      fontFamily: {
        lora: ['var(--font-lora)'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'ibm-mono': ['var(--font-ibm-mono)', 'monospace'],
      },
      animation: {
        'scroll-right': 'scroll-right 30s linear infinite',
      },
      keyframes: {
        'scroll-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'selector',
};
