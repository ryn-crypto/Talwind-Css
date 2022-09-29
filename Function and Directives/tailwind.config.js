/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "wiggle-goyang": "goyang 1s ease-in-out infinite",
      },
      Keyframes: {
        goyang: {
          "0%, 100%": { transform: "rotate(-30deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
}
