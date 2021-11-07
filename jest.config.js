module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js",
    "!src/router/index.js",
    "!src/store/index.js"
  ],
  modulePathIgnorePatterns: ["repositories"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  }
}
