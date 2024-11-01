/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      sm: "480px",
      ms: "600px",
      msd: "640px",
      md: "768px",
      lg: "976px",
      sl: "1280px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      Monoton: ["Monoton", "sans-serif"],
    },
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
  plugins: [],
};
