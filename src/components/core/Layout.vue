<template>
  <div class="">
    <container>
      <slot></slot>
    </container>
  </div>
</template>
<script>
import Container from "./Container.vue"
export default {
  name: "Layout",
  components: {
    Container
  }
}
</script>
