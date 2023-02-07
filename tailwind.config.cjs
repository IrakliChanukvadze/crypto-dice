/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      uxs: "400px",
      sm: "645px",

      md: "1024px",

      xl: "1280px",
    },
    extend: {
      flexGrow: {
        1: "1",
        2: "2",
      },
    },
  },
  plugins: [],
};
