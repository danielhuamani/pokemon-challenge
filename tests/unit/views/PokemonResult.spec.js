import { shallowMount, createLocalVue, mount } from "@vue/test-utils"
import PokemonResult from "@/views/PokemonResult.vue"
import PokemonItem from "@/components/pokemon/PokemonItem.vue"
// import PokemonRepository from "@/repositories/PokemonRepository"
import PokemonFavoriteRepository from "@/repositories/PokemonFavoriteRepository"
import "@/filters"

// let PokemonFavoriteRepository
let wrapper

describe("PokemonResult.vue", () => {
  beforeEach(() => {
    const localVue = createLocalVue()
    wrapper = mount(PokemonResult, {
      localVue,
      stubs: ["router-link"],
      data() {
        return {
          name: "pikachu",
          isLoad: false,
          pokemons: [
            { name: "pikachu" },
            { name: "bulbasaur" },
            { name: "venusaur" },
            { name: "charizard" },
            { name: "charmander" },
            { name: "squirtle" },
            { name: "wartortle" }
          ],
          pokemonsFavorites: [
            { name: "pikachu" },
            { name: "bulbasaur" },
            { name: "charizard" },
            { name: "charmander" }
          ]
        }
      }
    })
    // PokemonRepository.get = jest.fn()

    // PokemonFavoriteRepository = jest.fn({
    //   get: () => {
    //     return new Promise((resolve) => {
    //       resolve([{ name: "pikachu" }, { name: "bulbasaur" }, { name: "venusaur" }])
    //     })
    //   }
    // })
  })
  it("Should call view all list default", () => {
    wrapper.find('[data-testid="view-all-list"]')
    expect(wrapper.exists()).toBe(true)
  })
  it("Should call to emit view favorite", async () => {
    wrapper.find('[data-testid="button-favorite"]').trigger("click")
    expect(wrapper.vm.view).toEqual("FAVORITES")
  })
  it("Should show pokemons filter by search", async () => {
    await wrapper.setData({
      search: "pik",
      view: "ALL_LIST",
      pokemons: [
        { name: "pikachu" },
        { name: "bulbasaur" },
        { name: "venusaur" },
        { name: "charizard" },
        { name: "charmander" },
        { name: "squirtle" },
        { name: "wartortle" }
      ]
    })
    const pokemonItems = wrapper.findAllComponents(PokemonItem)
    expect(wrapper.vm.pokemonsFilter.length).toEqual(1)
    expect(pokemonItems).toHaveLength(1)
  })

  it("Should show pokemons favorites filter by search", async () => {
    await wrapper.setData({
      search: "char",
      view: "FAVORITES",
      pokemonsFavorites: [
        { name: "pikachu" },
        { name: "bulbasaur" },
        { name: "charizard" },
        { name: "charmander" }
      ]
    })
    const pokemonItems = wrapper.findAllComponents(PokemonItem)
    expect(pokemonItems).toHaveLength(2)
  })
  it("Should show  isEmpty when favorites filter by return [] in all list view", async () => {
    await wrapper.setData({
      search: "chard",
      view: "FAVORITES",
      pokemonsFavorites: [
        { name: "pikachu" },
        { name: "bulbasaur" },
        { name: "charizard" },
        { name: "charmander" }
      ]
    })
    expect(wrapper.vm.isEmpty).toBe(false)
  })
  it("Should show  isEmpty when pokemons filter by return [] in all list view", async () => {
    await wrapper.setData({
      search: "chard",
      view: "ALL_LIST",
      pokemons: [
        { name: "pikachu" },
        { name: "bulbasaur" },
        { name: "venusaur" },
        { name: "charizard" },
        { name: "charmander" },
        { name: "squirtle" },
        { name: "wartortle" }
      ]
    })
    expect(wrapper.vm.isEmpty).toBe(false)
  })
})
