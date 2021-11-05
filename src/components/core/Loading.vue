<template>
  <div class="h-screen fixed z-20 w-full left-0 right-0 mx-auto">
    <img
      class="absolute top-0 bottom-0 left-0 right-0 m-auto pokebola"
      src="@/assets/images/pokebola.png"
      alt=""
    />
  </div>
</template>
<script>
export default {
  name: "Loading"
}
</script>
<style lang="scss">
.pokebola {
  animation: pokebolazoom 1.5s infinite;
}
@keyframes pokebolazoom {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
