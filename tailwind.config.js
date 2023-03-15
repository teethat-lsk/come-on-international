/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#771E0E',
          blue: '#1C273A',
        },
        secondary: '#F9F2E8',
        black: '#090909',
        grey: {
          dark: '#D9D9D9',
          light: '#F5F5F5',
        },
      },
      screens: {
        mobile: {'max':'640px'},
        tablet: '641px',

      },
    },
  },
  plugins: [],
};
