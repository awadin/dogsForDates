/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dog-brown': '#73534C',
        'dog-light-brown': '#D98859',
        'dog-white': '#F2F2F2',
        'dog-tone': '#F2BF91',
        'dog-tongue': '#D9718C',
      }
    },
  },
  plugins: [],
});

