import { mount } from "@vue/test-utils"
import PokemonList from "@/components/pokemon/PokemonList.vue"
import PokemonItem from "@/components/pokemon/PokemonItem.vue"

let wrapper

describe("PokemonList.vue", () => {
  beforeEach(() => {
    wrapper = mount(PokemonList, {
      propsData: {
        pokemon: {
          name: "pikachu",
          weight: 20,
          height: 40,
          types: ["run", "salt"]
        },
        isFav: true
      }
    })
  })
  it("Should show total items renders", () => {
    const pokemonItems = wrapper.findAllComponents(PokemonItem)
    expect(pokemonItems).toHaveLength(6)
  })
})
