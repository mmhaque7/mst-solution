
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'lato': ['"Lato"',]
      },
      listStyleImage: {
        checkmark: 'url("./assets/checkmark.png")'
      },

    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

