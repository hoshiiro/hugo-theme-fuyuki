module.exports = {
  content: [
    "./layouts/*.html",
    "./layouts/*/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-nord")
  ],
}
