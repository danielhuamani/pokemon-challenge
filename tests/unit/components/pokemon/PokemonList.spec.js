import { shallowMount, createLocalVue, mount } from "@vue/test-utils"
import PokemonList from "@/components/pokemon/PokemonList.vue"
import PokemonItem from "@/components/pokemon/PokemonItem.vue"
import "@/filters"

let wrapper

describe("PokemonList.vue", () => {
  beforeEach(() => {
    const localVue = createLocalVue()
    wrapper = mount(PokemonList, {
      localVue,
      propsData: {
        name: "pikachu",
        pokemons: [
          { name: "pikachu" },
          { name: "bulbasaur" },
          { name: "venusaur" },
          { name: "cCharizard" },
          { name: "squirtle" },
          { name: "wartortle" }
        ],
        pokemonsFavorites: [
          { name: "pikachu" },
          { name: "bulbasaur" },
          { name: "venusaur" }
        ]
      }
    })
  })
  it("Should show total items renders", () => {
    const pokemonItems = wrapper.findAllComponents(PokemonItem)
    expect(pokemonItems).toHaveLength(6)
  })
})
