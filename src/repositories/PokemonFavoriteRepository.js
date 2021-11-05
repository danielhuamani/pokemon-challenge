import Storage from "../storage"

export default {
  post(name) {
    return new Promise((resolve, reject) => {
      let favorites = Storage.get("favorites", Object) || []
      const index = favorites.findIndex((fav) => fav.name == name)
      if (index === -1) {
        favorites.push({ name: name })
        Storage.set("favorites", favorites, Object)
        resolve(favorites)
      } else {
        reject("this pokemon exist in favorite list")
      }
    })
  },
  get() {
    return new Promise((resolve) => {
      let favorites = Storage.get("favorites", Object) || []
      resolve(favorites)
    })
  },
  delete(name) {
    return new Promise((resolve, reject) => {
      let favorites = Storage.get("favorites", Object) || []
      const index = favorites.findIndex((fav) => fav.name == name)
      if (index !== -1) {
        favorites = favorites.filter((fav) => fav.name !== name)
        Storage.set("favorites", favorites, Object)
        resolve(favorites)
      } else {
        reject("this pokemon can't delete because it not exist in favorites")
      }
    })
  }
}
