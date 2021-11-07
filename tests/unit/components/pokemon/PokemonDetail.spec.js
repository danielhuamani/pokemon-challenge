import { mount, createLocalVue } from "@vue/test-utils"
import PokemonDetail from "@/components/pokemon/PokemonDetail.vue"
import "@/filters"

let wrapper
describe("PokemonDetail.vue", () => {
  beforeEach(() => {
    const localVue = createLocalVue()
    wrapper = mount(PokemonDetail, {
      localVue,
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
  it("Should show renders props", () => {
    const pokemonName = wrapper.find('[data-testid="pokemon-name"]')
    const pokemonWeight = wrapper.find('[data-testid="pokemon-weight"]')
    const pokemonHeight = wrapper.find('[data-testid="pokemon-height"]')
    const pokemonTypes = wrapper.find('[data-testid="pokemon-types"]')
    expect(pokemonName.text()).toContain("Pikachu")
    expect(pokemonWeight.text()).toContain("20")
    expect(pokemonHeight.text()).toContain("40")
    expect(pokemonTypes.text()).toContain("run, salt")
  })
  it("should call types in computed", () => {
    expect(wrapper.vm.getTypes).toContain("run, salt")
  })

  it("should call to emit from childcomponent fav is true", () => {
    const img = wrapper.find(".pokemon-fav img")
    img.trigger("click")
    expect(wrapper.emitted()).toHaveProperty("removeFavorite")
    expect(wrapper.emitted().removeFavorite[0]).toEqual(["pikachu"])
  })

  it("should call to emit from childcomponent fav is false", async () => {
    await wrapper.setProps({
      isFav: false
    })
    const img = wrapper.find(".pokemon-fav img")
    img.trigger("click")
    expect(wrapper.emitted()).toHaveProperty("addFavorite")
    expect(wrapper.emitted().addFavorite[0]).toEqual(["pikachu"])
  })
  it("should call to emit close modal", () => {
    wrapper.find('[data-testid="modal-close"]').trigger("click")
    expect(wrapper.emitted()).toHaveProperty("close")
    expect(wrapper.emitted().close[0]).toEqual([])
  })
  it("should call to method clipboard", () => {
    const mock = jest.fn()
    document.execCommand = mock
    expect(wrapper.vm.clipboard()).toContain("pikachu")
  })
})
