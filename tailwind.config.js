module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Lato, sans-serif"]
    },
    extend: {
      colors: {
        main: "#F22539",
        "main-hover": "#C00F20",
        disabled: "#BFBFBF",
        body: "#F9F9F9",
        text: "#5E5E5E",
        border: "#E8E8E8"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
