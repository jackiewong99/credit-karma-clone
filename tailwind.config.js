/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      blue: '#003966',
      green: {
        300: '#3ddb93',
        400: '#20ac6c',
        500: '#008600',
        700: '#049104',
      },
      gray: {
        300: '#cccccc',
        700: '#404345',
      },
    },
  },
  plugins: [],
};
