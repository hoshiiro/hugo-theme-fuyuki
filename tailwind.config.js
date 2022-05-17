module.exports = {
  content: [
    "./layouts/*.html",
    "./layouts/*/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
        fontFamily: {
            'title': ["Montserrat"],
            'display': ["Nunito Sans"],
            'text': ["Lato"]
        }
    },
  },
  plugins: [
    require("tailwind-nord")
  ],
}
