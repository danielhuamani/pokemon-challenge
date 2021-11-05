<template>
  <layout>
    <loading v-if="isLoad"></loading>
    <div class="pokemon-list mb-24 mt-8" v-else>
      <pokemon-search v-model="search"></pokemon-search>
      <div class="mt-8" v-if="!isEmpty">
        <pokemon-empty-list></pokemon-empty-list>
      </div>
      <div class="mt-8" v-else>
        <pokemon-list
          v-if="view === 'ALL_LIST'"
          :pokemons="pokemonsFilter"
          :pokemons-favorites="pokemonsFavorites"
          @addFavorite="addFavorite"
          @removeFavorite="removeFavorite"
        ></pokemon-list>
        <pokemon-list
          v-else
          :pokemons="pokemonsFavoritesFilter"
          :pokemons-favorites="pokemonsFavorites"
          @addFavorite="addFavorite"
          @removeFavorite="removeFavorite"
        ></pokemon-list>
      </div>
      <pokemon-footer @changeView="changeView" :view="view"></pokemon-footer>
    </div>
  </layout>
</template>
<script>
// @ is an alias to /src
import Layout from "@/components/core/Layout"
import Loading from "@/components/core/Loading"
import PokemonSearch from "@/components/pokemon/PokemonSearch"
import PokemonList from "@/components/pokemon/PokemonList"
import PokemonFooter from "@/components/pokemon/PokemonFooter"
import PokemonEmptyList from "@/components/pokemon/PokemonEmptyList"
import PokemonRepository from "@/repositories/PokemonRepository"
import PokemonFavoriteRepository from "@/repositories/PokemonFavoriteRepository"

export default {
  components: {
    Layout,
    PokemonSearch,
    PokemonList,
    PokemonFooter,
    PokemonEmptyList,
    Loading
  },
  data() {
    return {
      search: "",
      view: "ALL_LIST",
      pokemons: [],
      pokemonsFavorites: [],
      isLoad: true
    }
  },
  created() {
    this.getPokemons()
    this.getPokemonsFavorite()
    setTimeout(() => {
      this.isLoad = false
    }, 2000)
  },
  methods: {
    async getPokemons() {
      const response = await PokemonRepository.get()
      this.pokemons = response.data.results
    },
    async getPokemonsFavorite() {
      const response = await PokemonFavoriteRepository.get()
      this.pokemonsFavorites = response
    },
    async addFavorite(name) {
      try {
        const response = await PokemonFavoriteRepository.post(name)
        this.pokemonsFavorites = response
      } catch (error) {
        console.log(error)
      }
    },
    async removeFavorite(name) {
      try {
        const response = await PokemonFavoriteRepository.delete(name)
        this.pokemonsFavorites = response
      } catch (error) {
        console.log(error)
      }
    },
    changeView(view) {
      this.view = view
    }
  },
  computed: {
    pokemonsFilter() {
      if (!this.search) {
        return this.pokemons
      }
      return this.pokemons.filter((c) => {
        return c.name.toLowerCase().indexOf(this.search) > -1
      })
    },
    pokemonsFavoritesFilter() {
      if (!this.search) {
        return this.pokemonsFavorites
      }
      return this.pokemonsFavorites.filter((c) => {
        return c.name.toLowerCase().indexOf(this.search) > -1
      })
    },
    isEmpty() {
      if (this.view === "ALL_LIST") {
        return this.pokemonsFilter.length > 0
      } else {
        return this.pokemonsFavoritesFilter.length > 0
      }
    }
  }
}
</script>
