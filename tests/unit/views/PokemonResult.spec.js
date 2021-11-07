import { shallowMount, createLocalVue, mount } from "@vue/test-utils"
import PokemonResult from "@/views/PokemonResult.vue"
import PokemonItem from "@/components/pokemon/PokemonItem.vue"
import PokemonRepository from "@/repositories/PokemonRepository"
import PokemonFavoriteRepository from "@/repositories/PokemonFavoriteRepository"
import Storage from "@/Storage"
import "@/filters"

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

  it("Should show pokemons favorites exist and filter by search", async () => {
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
    const viewFavorites = wrapper.find('[data-testid="view-favorites"]')
    expect(pokemonItems).toHaveLength(2)
    expect(viewFavorites.exists()).toBe(true)
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
  it("Should call detail pokemon by name", async () => {
    await wrapper.setData({
      view: "ALL_LIST",
      pokemons: [
        { name: "pikachu" },
        { name: "bulbasaur" },
        { name: "venusaur" },
        { name: "charizard" },
        { name: "charmander" },
        { name: "squirtle" },
        { name: "wartortle" }
      ],
      isLoad: false
    })
    let response = {
      data: {
        name: "pikachu",
        weight: 20,
        height: 30,
        types: [{ type: "normal" }, { type: "attack" }],
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
            }
          }
        }
      }
    }
    const mock = jest.spyOn(PokemonRepository, "getByName")
    mock.mockReturnValue(response)
    const pokemonNames = wrapper.findAll('[data-testid="pokemon-name"]')
    pokemonNames.at(0).trigger("click")
    wrapper.vm.$nextTick().then(() => {
      expect(wrapper.vm.pokemonSelected.name).toEqual("pikachu")
      expect(wrapper.vm.pokemonSelected.weight).toEqual(20)
      expect(wrapper.vm.pokemonSelected.height).toEqual(30)
    })
  })

  it("Should call detail pokemon by name and open modal", async () => {
    await wrapper.setData({
      view: "ALL_LIST",
      pokemons: [
        { name: "pikachu" },
        { name: "bulbasaur" },
        { name: "venusaur" },
        { name: "charizard" },
        { name: "charmander" },
        { name: "squirtle" },
        { name: "wartortle" }
      ],
      isLoad: false
    })
    let response = {
      data: {
        name: "bulbasaur",
        weight: 20,
        height: 30,
        types: [{ type: "normal" }, { type: "attack" }],
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
            }
          }
        }
      }
    }
    const mock = jest.spyOn(PokemonRepository, "getByName")
    mock.mockReturnValue(response)
    const pokemonNames = wrapper.findAll('[data-testid="pokemon-name"]')
    pokemonNames.at(0).trigger("click")
    wrapper.vm.$nextTick().then(() => {
      expect(wrapper.vm.pokemonSelected.name).toEqual("bulbasaur")
      expect(wrapper.vm.pokemonSelected.weight).toEqual(20)
      expect(wrapper.vm.pokemonSelected.height).toEqual(30)
      expect(wrapper.vm.isModal).toBe(true)
    })
  })

  it("Should call detail then close modal", async () => {
    await wrapper.setData({
      view: "ALL_LIST",
      pokemons: [
        { name: "pikachu" },
        { name: "bulbasaur" },
        { name: "venusaur" },
        { name: "charizard" },
        { name: "charmander" },
        { name: "squirtle" },
        { name: "wartortle" }
      ],
      isLoad: false
    })
    let response = {
      data: {
        name: "bulbasaur",
        weight: 20,
        height: 30,
        types: [{ type: "normal" }, { type: "attack" }],
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
            }
          }
        }
      }
    }
    const mock = jest.spyOn(PokemonRepository, "getByName")
    mock.mockReturnValue(response)
    const pokemonNames = wrapper.findAll('[data-testid="pokemon-name"]')
    pokemonNames.at(0).trigger("click")
    await wrapper.vm.$nextTick()
    wrapper.find('[data-testid="modal-close"]').trigger("click")
    expect(wrapper.vm.isModal).toBe(false)
  })
  it("Should remove favorite", async () => {
    await wrapper.setData({
      view: "ALL_LIST",
      pokemons: [
        { name: "pikachu" },
        { name: "bulbasaur" },
        { name: "venusaur" },
        { name: "charizard" },
        { name: "charmander" },
        { name: "squirtle" },
        { name: "wartortle" }
      ],
      isLoad: false
    })
    const favorites = [{ name: "charmander" }, { name: "wartortle" }]
    const lcl = Storage.set("favorites", favorites, Object)
    wrapper.vm.removeFavorite("charmander")
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.pokemonsFavorites).toEqual([{ name: "wartortle" }])
  })

  it("Should add favorite", async () => {
    await wrapper.setData({
      view: "ALL_LIST",
      pokemons: [
        { name: "pikachu" },
        { name: "bulbasaur" },
        { name: "venusaur" },
        { name: "charizard" },
        { name: "charmander" },
        { name: "squirtle" },
        { name: "wartortle" }
      ],
      isLoad: false
    })
    const favorites = [{ name: "charmander" }, { name: "wartortle" }]
    Storage.set("favorites", favorites, Object)
    wrapper.vm.addFavorite("squirtle")
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.pokemonsFavorites).toEqual([
      { name: "charmander" },
      { name: "wartortle" },
      { name: "squirtle" }
    ])
  })
  it("Should call getpokemons", async () => {
    await wrapper.setData({
      view: "ALL_LIST",
      pokemons: [],
      isLoad: false
    })
    const response = {
      data: {
        results: [
          {
            name: "pikachu"
          },
          { name: "squirtle" }
        ]
      }
    }
    const mock = jest.spyOn(PokemonRepository, "get")
    mock.mockReturnValue(response)
    wrapper.vm.getPokemons()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.pokemons).toEqual([
      {
        name: "pikachu"
      },
      { name: "squirtle" }
    ])
  })
  it("Should call getFavorites", async () => {
    await wrapper.setData({
      view: "ALL_LIST",
      pokemons: [],
      pokemonsFavorites: [],
      isLoad: false
    })
    const favorites = [{ name: "charmander" }, { name: "wartortle" }]
    Storage.set("favorites", favorites, Object)
    wrapper.vm.getPokemonsFavorite()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.pokemonsFavorites).toEqual([
      { name: "charmander" },
      { name: "wartortle" }
    ])
  })
})
