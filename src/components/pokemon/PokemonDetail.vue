<template>
  <modal @close="close">
    <div class="w-full h-52 pt-3 pokemon-bg">
      <img class="pokemon-img" :src="pokemon.img" alt="" />
    </div>
    <div class="p-4">
      <ul>
        <li class="py-2 pokemon-border">
          <p class="text-lg text-text">
            <span class="font-semibold">Name:</span> {{ pokemon.name }}
          </p>
        </li>
        <li class="py-2 pokemon-border">
          <p class="text-lg text-text">
            <span class="font-semibold">Weight:</span> {{ pokemon.weight }}
          </p>
        </li>
        <li class="py-2 pokemon-border">
          <p class="text-lg text-text">
            <span class="font-semibold">Height:</span> {{ pokemon.height }}
          </p>
        </li>
        <li class="py-2 pokemon-border">
          <p class="text-lg text-text">
            <span class="font-semibold">Types:</span> {{ getTypes }}
          </p>
        </li>
      </ul>
      <div class="mt-4 flex justify-between">
        <button-tag @click.native="clipboard()" tag="a" class="text-lg"
          >Share to my friends</button-tag
        >
        <pokemon-icon-fav
          :is-fav="isFav"
          @add="addFavorite"
          @remove="removeFavorite"
        ></pokemon-icon-fav>
      </div>
    </div>
  </modal>
</template>
<script>
import PokemonIconFav from "./PokemonIconFav.vue"
import ButtonTag from "@/components/core/ButtonTag"
import Modal from "@/components/core/Modal"
export default {
  name: "PokemonModal",
  props: {
    pokemon: {
      type: Object,
      required: true
    },
    isFav: {
      type: Boolean,
      required: true
    }
  },
  components: {
    Modal,
    ButtonTag,
    PokemonIconFav
  },
  methods: {
    close() {
      this.$emit("close")
    },
    clipboard() {
      let info = `
        name: ${this.pokemon.name},
        weight: ${this.pokemon.weight},
        height: ${this.pokemon.height},
        types: ${this.getTypes}
      `
      console.log(info, "info")
      let input = document.createElement("textarea")
      document.body.appendChild(input)
      input.value = info
      input.select()
      document.execCommand("Copy")
      input.remove()
    },
    addFavorite() {
      this.$emit("addFavorite", this.pokemon.name)
    },
    removeFavorite() {
      this.$emit("removeFavorite", this.pokemon.name)
    }
  },
  computed: {
    getTypes() {
      return this.pokemon.types.join(",")
    }
  }
}
</script>
<style lang="postcss">
.pokemon-bg {
  background: url("~@/assets/images/background.png");
  background-size: cover;
}
.pokemon-border {
  border-bottom: 1px solid theme("colors.border");
}
.pokemon-img {
  height: 190px;
  width: auto;
  margin: auto;
}
</style>
