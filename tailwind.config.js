/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      // A grid class for the details page
      gridTemplateColumn: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
