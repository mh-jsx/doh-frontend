/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '0.875rem',
      // 16px
      base: '1rem',
      // 18px
      lg: '1.125rem',
      // 20px
      xl: '1.25rem',
      // 27px
      '2xl': '1.688rem',
      // 60px
      '7xl': '3.75rem',
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-300': 'var(--color-primary-300)',
        'primary-light': 'var(--color-primary-light)',
        secondary: 'var(--color-secondary)',
        'secondary-light': 'var(--color-secondary-light)',

        gray: 'var(--color-gray)',
        'dark-gray': 'var(--color-dark-gray)',
        'gray-100': 'var(--color-gray-100)',
        'gray-400': 'var(--color-gray-400)',
        'dark-gray-100': 'var(--color-dark-gray-100)',
      },
      fontFamily: {
        primary: ['Circular Std', 'sans-serif'],
        secondary: ['Circular Std Book', 'sans-serif'],
      },
      screens: {
        xsm: '375px',
        sm: '480px',
        md: '768px',
        lg: '1092px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      boxShadow: {
        primary: '0px 0px 15px var(--color-primary)',
        secondary: '2px 3px 10px var(--color-dark-gray-100)',
      },
      spacing: {
        30: '7.5rem',
        50: '12.5rem',
      },
    },
  },
  plugins: [
    plugin(({ addVariant, addUtilities }) => {
      addVariant('path-stroke', ['&>g>g>line', '&>g>g>path']),
        addUtilities({
          '.flex-centered': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        });
    }),
  ],
};
