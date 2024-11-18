// Import at the top (ESM syntax)
const rippleui = require("rippleui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aaooWhite: "#ffffff",
        aaooGray: "#999898",
        aaooBgGray: "#f9f9f9",
        aaooBlack: "#202020",
        aaooRed: "#940202",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("rippleui")],
};
