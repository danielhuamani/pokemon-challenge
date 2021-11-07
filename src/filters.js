import Vue from "vue"

export const capitalize = (str) => {
  if (typeof str === "string") {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return ""
}

Vue.filter("capitalize", capitalize)
