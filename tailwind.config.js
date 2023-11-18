/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      // 12px
      xxs: '0.75rem',
      // 14px
      sm: '0.875rem',
      // 16px
      base: '1rem',
      // 18px
      lg: '1.125rem',
      // 20px
      xl: '1.25rem',
      // 27px
      '2xl': '1.688rem',

      //49px
      '5xl': '3.063rem',

      // 60px
      '7xl': '3.75rem',

      // 92px
      '10xl': '5.75rem',
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
        'gray-150': 'var(--color-gray-150)',
        'gray-400': 'var(--color-gray-400)',
        'dark-gray-100': 'var(--color-dark-gray-100)',

        'warning-300': 'var(--color-warning-300)',
        'warning-400': 'var(--color-warning-400)',
        'warning-500': 'var(--color-warning-500)',
        'warning-600': 'var(--color-warning-600)',

        'danger-500': 'var(--color-danger-500)',
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
        15: '3.75rem',
        18: '4.5rem',
        30: '7.5rem',
        50: '12.5rem',
      },
    },
  },
  plugins: [
    plugin(({ addVariant, addUtilities }) => {
      addVariant('path-stroke', ['&>g>g>line', '&>g>g>path', '&>g>g>rect', '&>g>path', '&>g>line']),
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
