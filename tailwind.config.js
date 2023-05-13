/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      //use the higher breakpoints first than lower ones
      '4xl': {'max': '1536px'},
      '2xl': {'max': '1440px'},
      'xl': {'max': '1280px'},
      'md': {'max': '768px'},
      'sm': {'max': '640px'},
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: '#12326F',
          100: '#87F1FF'
        },
        green: {
          DEFAULT: '#00A39A',
        },
        red: {
          DEFAULT: '#B4003F',
        },
        orange: {
          DEFAULT: '#C85B20',
        },
        yellow: {
          100: '#F5E2C8',
          200: '#FCDE9C',
          400: '#FFC15E',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
      },
    },
  },
  plugins: [],
}
