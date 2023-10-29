/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
// const img = require('./src/assets/img/')

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
    extend: {
      backgroundImage: {
        'welcome': "url('../../assets/img/pizza-welcome-1.jpeg')",
      },
      keyframes: {
        scroll: {
          '100%': { 'background-position': '0px -3%' }
        }
      },
      animation: {
        scroll: 'scroll 20s linear 1'
      },
      height: {
        '425': '26.5rem'
      }
    },
  },
  plugins: [],
})

