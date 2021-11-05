export default {
  get(key, type) {
    if (type === Object) {
      return JSON.parse(localStorage.getItem(key))
    }
    return localStorage.getItem(key)
  },
  set(key, value, type) {
    if (type === Object) {
      return localStorage.setItem(key, JSON.stringify(value))
    }
    return localStorage.setItem(key, value)
  }
}
