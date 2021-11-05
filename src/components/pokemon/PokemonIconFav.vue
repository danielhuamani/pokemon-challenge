<template>
  <div>
    <img
      v-if="isFav"
      @click="removeFavorite()"
      class="cursor-pointer"
      src="@/assets/icons/star-active.png"
      alt=""
    />
    <img
      v-else
      @click="addFavorite()"
      class="cursor-pointer"
      src="@/assets/icons/star-inactive.png"
      alt=""
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
