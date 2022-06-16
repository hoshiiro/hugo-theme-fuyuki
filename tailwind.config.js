module.exports = {
  content: [
    "./layouts/*.html",
    "./layouts/**/*.html"
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
    require("@tailwindcss/typography"),
    require("tailwind-nord")
  ],
}
