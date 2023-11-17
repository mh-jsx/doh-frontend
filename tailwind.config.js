/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // #19D3C5
        primary: '#19D3C5',
        // #19D3C526
        primaryLight: '#19D3C526',
        // #2D2D2D
        dark: '#2D2D2D',
      },
      fontFamily: {
        primary: ['Circular Std', 'sans-serif'],
      },
      screens: {
        xsm: '376px',
        sm: '481px',
        md: '769px',
        lg: '1093px',
        xl: '1281px',
        '2xl': '1441px',
        '3xl': '1601px',
        '4xl': '1921px',
      },
      boxShadow: {
        primary: '0px 0px 15px #19D3C5;',
      },
    },
  },
  plugins: [],
};
