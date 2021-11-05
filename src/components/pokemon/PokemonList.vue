<template>
  <div>
    <pokemon-item
      v-for="poke in pokemons"
      :pokemons-favorites="pokemonsFavorites"
      :key="poke.name"
      :name="poke.name"
      v-on="$listeners"
    >
    </pokemon-item>
  </div>
</template>
<script>
import PokemonItem from "./PokemonItem"
export default {
  name: "PokemonList",
  components: { PokemonItem },
  props: {
    pokemons: {
      type: Array,
      required: true
    },
    pokemonsFavorites: {
      type: Array,
      required: true
    }
  }
}
</script>
