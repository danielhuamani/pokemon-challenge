<template>
  <div class="container-pokemon mx-auto px-3">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Container"
}
</script>
<style lang="css">
.container-pokemon {
  width: 570px;
  max-width: 100%;
}
</style>
