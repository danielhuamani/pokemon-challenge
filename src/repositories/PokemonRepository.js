import Client from "./Client"

const resource = "/pokemon"

export default {
  get() {
    return Client.get(`${resource}`)
  },
  getByName(name) {
    return Client.get(`${resource}/${name}`)
  }
}
