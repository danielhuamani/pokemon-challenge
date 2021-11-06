<template>
  <div class="home text-center">
    <h3 class="font-bold mb-10 text-3xl">Uh-oh!</h3>
    <p class="block mb-8 text-lg" data-testid="message">You look lost on your journey!</p>
    <button-tag tag="router-link" :to="{ name: 'home' }"> Go back home </button-tag>
  </div>
</template>
<script>
// @ is an alias to /src
import ButtonTag from "@/components/core/ButtonTag"
export default {
  components: {
    ButtonTag
  }
}
</script>
