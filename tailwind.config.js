/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(57, 62, 70, 0.75)",
        secondary: "rgb(230 107 0)",
        textPrimary: "#000",
        textSecondary: "000",
        accent: "rgba(57, 62, 70, 0.75)",
        hoverSecondary: "rgb(175, 82, 0)",
        hoverPrimary: "#292d33",
        divider: "rgba(238, 238, 238, 0.10)",
        icons: "#393E46",
        overlay: "rgba(0, 0, 0, 0.25)",
      },
      screens: {
        xs: "420px",
        xl: "1170px",
      },
    },
  },
  plugins: [],
};
