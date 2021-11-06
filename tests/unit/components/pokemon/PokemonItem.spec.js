import { shallowMount, createLocalVue, mount } from "@vue/test-utils"
import PokemonItem from "@/components/pokemon/PokemonItem.vue"
import PokemonIconFav from "@/components/pokemon/PokemonIconFav.vue"

import "@/filters"

let wrapper

describe("PokemonItem.vue", () => {
  beforeEach(() => {
    const localVue = createLocalVue()
    wrapper = mount(PokemonItem, {
      localVue,
      propsData: {
        name: "pikachu",
        pokemonsFavorites: [
          { name: "pikachu" },
          { name: "bulbasaur" },
          { name: "venusaur" }
        ]
      }
    })
  })
  it("Should show name of pokemon with capitalize", () => {
    const pokemonName = wrapper.find('[data-testid="pokemon-name"]')
    expect(pokemonName.text()).toBe("Pikachu")
  })

  it("Should have favorite", () => {
    expect(wrapper.vm.isFav()).toBe(true)
  })
  it("Should haven't favorite", async () => {
    await wrapper.setProps({
      name: "pikachu",
      pokemonsFavorites: [
        { name: "charmander" },
        { name: "bulbasaur" },
        { name: "venusaur" }
      ]
    })
    expect(wrapper.vm.isFav()).toBe(false)
  })

  it("Should call to emit after trigger click in name of pokemon", () => {
    const pokemonName = wrapper.find('[data-testid="pokemon-name"]')
    pokemonName.trigger("click")
    expect(wrapper.emitted()).toHaveProperty("selected")
    expect(wrapper.emitted().selected[0]).toEqual(["pikachu"])
  })
  it("should call to emit from childcomponent fav is true", () => {
    const img = wrapper.find("img")
    img.trigger("click")
    expect(wrapper.emitted()).toHaveProperty("removeFavorite")
    expect(wrapper.emitted().removeFavorite[0]).toEqual(["pikachu"])
  })

  it("should call to emit from childcomponent fav is false", async () => {
    await wrapper.setProps({
      name: "pikachu",
      pokemonsFavorites: [
        { name: "charmander" },
        { name: "bulbasaur" },
        { name: "venusaur" }
      ]
    })
    const img = wrapper.find("img")
    img.trigger("click")
    expect(wrapper.emitted()).toHaveProperty("addFavorite")
    expect(wrapper.emitted().addFavorite[0]).toEqual(["pikachu"])
  })
})
