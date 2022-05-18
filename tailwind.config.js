module.exports = {
  content: [
    "./layouts/*.html",
    "./layouts/*/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
        fontFamily: {
            'title': ["Raleway"],
            'display': ["Lato"]
        }
    },
  },
  plugins: [
    require("tailwind-nord"),
    require("@tailwindcss/typography")
  ],
}
