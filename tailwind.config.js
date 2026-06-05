/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        blue: {
          swiss: '#063bd1',
          deep: '#061c68',
          ink: '#07185f',
        },
        paper: '#f8f8f3',
        acid: '#9cff00',
        blackish: '#0b0d10',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Helvetica Neue',
          'Arial',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      keyframes: {
        cinematicIn: {
          from: { opacity: '0', transform: 'translate3d(0, 24px, 0)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
      },
      animation: {
        cinematic: 'cinematicIn 420ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      transitionTimingFunction: {
        swiss: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        swiss: '1440px',
      },
    },
  },
  plugins: [],
};
