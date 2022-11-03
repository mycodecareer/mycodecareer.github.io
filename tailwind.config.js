/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      primary: "#A99767",
      secondary: "#7D704C",
      "dark-blue": "#032845",
      accent: "#EFEAE4",
      bg: "#fff",
      white: "#fff",
      "text-main": "#2D2726",
    },
    fontFamily: {
      sans: ["Belleza", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
