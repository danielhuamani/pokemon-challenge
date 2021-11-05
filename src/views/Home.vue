<template>
  <layout>
    <div class="home text-center">
      <img src="@/assets/images/pikachu.png" alt="" class="mx-auto mb-10" />
      <h3 class="font-bold mb-10 text-3xl">Welcome to Pokédex</h3>
      <p class="block mb-8 text-lg">
        The digital encyclopedia created by Professor Oak is an invaluable tool to
        Trainers in the Pokémon world.
      </p>
      <button-tag tag="router-link" :to="{ name: 'pokemon_result' }">
        Get Started
      </button-tag>
    </div>
  </layout>
</template>
<script>
// @ is an alias to /src
import Layout from "@/components/core/Layout"
import ButtonTag from "@/components/core/ButtonTag"
export default {
  components: {
    Layout,
    ButtonTag
  }
}
</script>
