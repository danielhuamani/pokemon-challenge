<template>
  <div class="">
    <div class="fixed z-20 inset-0 bg-gray-900 bg-opacity-75 transition-opacity"></div>
    <div class="fixed z-30 inset-0 overflow-y-auto">
      <div class="flex justify-center items-center h-full">
        <container class="relative">
          <div class="rounded-lg overflow-hidden">
            <div class="absolute right-5 top-3" @click="close" data-testid="modal-close">
              <img src="@/assets/icons/close.png" alt="" />
            </div>
            <div class="bg-white">
              <slot></slot>
            </div>
          </div>
        </container>
      </div>
    </div>
  </div>
</template>
<script>
import Container from "./Container.vue"
export default {
  name: "Modal",
  components: {
    Container
  },
  methods: {
    close() {
      document.body.classList.remove("overflow-hidden")
      this.$emit("close")
    }
  },
  mounted() {
    document.body.classList.add("overflow-hidden")
  }
}
</script>
