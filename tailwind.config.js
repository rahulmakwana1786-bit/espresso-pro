/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#B8734E",
        espressoDark: "#8F5536",
      },
      fontFamily: {
        // Use the local Times New Roman Condensed (TNR-Condensed) first for serif styles.
        serif: ["TNR-Condensed", "Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};