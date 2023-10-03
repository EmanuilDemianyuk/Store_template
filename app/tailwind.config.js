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
      'BrandWrapperGB': '#F3FFF9',
      'BrandLightGreen': '#E0FFDB',
      'BrandDarkGreen': ' #068C52',
      'BrandFooterBg': '#000000',
      customs: {
        'borderFooter': '#F9F9FB',
        'lightGreenWetPrinting': ' #C9FFBF'
      }
    },
    extend: {},
  },
  plugins: [],
})

