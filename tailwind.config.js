/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        calmTeal: "rgb(45,149,150)",
        calmPink: "#FF5FA2",
        calmPurple: "#7C5CFC",
      },
    },
  },
  plugins: [],
};
