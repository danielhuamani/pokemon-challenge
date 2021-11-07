<template>
  <div class="pokemon-fav">
    <img
      v-if="isFav"
      @click="removeFavorite()"
      class="cursor-pointer"
      src="@/assets/icons/star-active.png"
      alt=""
      data-testid="fav-active"
    />
    <img
      v-else
      @click="addFavorite()"
      class="cursor-pointer"
      src="@/assets/icons/star-inactive.png"
      alt=""
      data-testid="fav-inactive"
    />
  </div>
</template>
<script>
export default {
  name: "PokemonIconFav",
  props: {
    isFav: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    addFavorite() {
      this.$emit("add")
    },
    removeFavorite() {
      this.$emit("remove")
    }
  }
}
</script>
