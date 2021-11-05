<template>
  <div class="p-3 bg-white rounded-md shadow-sm mb-2 flex justify-between items-center">
    <p class="text-lg">{{ name | capitalize }}</p>
    <img
      v-if="isStarActive(name)"
      @click="removeFavorite(name)"
      class="cursor-pointer"
      src="@/assets/icons/star-active.png"
      alt=""
    />
    <img
      v-else
      @click="addFavorite(name)"
      class="cursor-pointer"
      src="@/assets/icons/star-inactive.png"
      alt=""
    />
  </div>
</template>
<script>
export default {
  name: "PokemonItem",
  props: {
    name: {
      type: String,
      required: true
    },
    pokemonsFavorites: {
      type: Array,
      required: true
    }
  },
  methods: {
    addFavorite(name) {
      this.$emit("addFavorite", name)
    },
    removeFavorite(name) {
      this.$emit("removeFavorite", name)
    },
    isStarActive(name) {
      return !(this.pokemonsFavorites.findIndex((fav) => fav.name == name) === -1)
    }
  }
}
</script>
