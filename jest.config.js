module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverageFrom: ["src/**/*.{js,vue}", "!src/main.js", "!src/router/index.js"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  }
}
