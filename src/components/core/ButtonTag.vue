<template>
  <component
    :is="tag"
    v-bind="$attrs"
    :style="{ width: width }"
    :disabled="disabled"
    class="px-4 py-2 rounded-full inline-block cursor-pointer text-center"
    :class="getVariantClass"
  >
    <slot></slot>
  </component>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    width: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "Button"
    },
    variant: {
      type: String,
      default: "main"
    }
  },
  computed: {
    getVariantClass() {
      let clss = {
        main: "bg-main hover:bg-main-hover text-white",
        grey: "bg-disabled text-white"
      }
      return clss[this.variant]
    }
  }
}
</script>
