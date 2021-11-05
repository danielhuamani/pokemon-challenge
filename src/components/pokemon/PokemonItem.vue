<template>
  <div class="p-3 bg-white rounded-md shadow-sm mb-2 flex justify-between items-center">
    <p @click="selected()" class="text-lg cursor-pointer">
      {{ name | capitalize }}
    </p>
    <pokemon-icon-fav
      :is-fav="isStarActive()"
      @add="addFavorite"
      @remove="removeFavorite"
    ></pokemon-icon-fav>
  </div>
</template>
<script>
import PokemonIconFav from "./PokemonIconFav.vue"
export default {
  name: "PokemonItem",
  components: {
    PokemonIconFav
  },
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
    addFavorite() {
      this.$emit("addFavorite", this.name)
    },
    removeFavorite() {
      this.$emit("removeFavorite", this.name)
    },
    isStarActive() {
      return !(this.pokemonsFavorites.findIndex((fav) => fav.name == this.name) === -1)
    },
    selected() {
      this.$emit("selected", this.name)
    }
  }
}
</script>
