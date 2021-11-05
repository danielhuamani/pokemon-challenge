<template>
  <div class="relative">
    <img
      src="@/assets/icons/search.png"
      alt=""
      class="absolute top-4 left-3 pointer-events-none"
    />
    <input
      type="text"
      class="w-full py-2 outline-none pl-10 text-black h-12 shadow-md rounded-md"
      placeholder="Search"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: "PokemonSearch",
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>
