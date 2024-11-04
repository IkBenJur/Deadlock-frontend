/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#141136",
        secondary: "#2D2752",
        tertriary: "#363061",
        accent: "#151136",
      },
    },
  },
  plugins: [],
};
