<template>
  <div class="py-5 fixed z-10 bottom-0 bg-white left-0 right-0 shadow-lg">
    <container>
      <div class="flex">
        <button-tag
          @click.native="changeView('ALL_LIST')"
          tag="a"
          width="50%"
          class="mr-2 py-2 flex justify-center"
          data-testid="button-all-list"
          :variant="view === 'ALL_LIST' ? 'main' : 'grey'"
        >
          <img src="@/assets/icons/list.png" alt="" />
          <span class="ml-3 text-md font-bold">All</span>
        </button-tag>
        <button-tag
          @click.native="changeView('FAVORITES')"
          tag="a"
          :variant="view === 'FAVORITES' ? 'main' : 'grey'"
          width="50%"
          class="ml-2 py-2 flex justify-center"
          data-testid="button-favorite"
        >
          <img src="@/assets/icons/favorite.png" alt="" />
          <span class="ml-3 text-md font-bold">Favorites</span>
        </button-tag>
      </div>
    </container>
  </div>
</template>
<script>
import ButtonTag from "@/components/core/ButtonTag"
import Container from "@/components/core/Container"
export default {
  name: "PokemonFooter",
  components: {
    ButtonTag,
    Container
  },
  props: {
    view: {
      type: String,
      required: true
    }
  },
  methods: {
    changeView(view) {
      this.$emit("changeView", view)
    }
  }
}
</script>
