import Vue from "vue"

Vue.filter("capitalize", (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
})
