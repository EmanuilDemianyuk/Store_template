/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      logo: ['Paytone One', 'sans-serif'],
      content: ['Nunito'],
      header: ['Josefin Sans']
    },
    colors: {
      'light-green': '#dcfce7'
    },
    extend: {},
  },
  plugins: [],
})
