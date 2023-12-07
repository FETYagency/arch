/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: "#1B1D23",
        darkGrey: "#60636D",
        mediumGrey: "#7D828F",
        lightGrey: "#C8CCD8",
        veryLightGrey: "#EEEFF4",
        redError: "#DF5656",
      },
      fontFamily: {
        design: ["design", "sans-serif"],
      },
    },
  },
  plugins: [],
};
