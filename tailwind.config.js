/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' }
        }
      },
      animation: {
        'make-bigger': 'scale 0.1s ease-out forwards'
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms')]
};
