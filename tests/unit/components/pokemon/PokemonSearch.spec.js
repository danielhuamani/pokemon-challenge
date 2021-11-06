import { shallowMount } from "@vue/test-utils"
import PokemonSearch from "@/components/pokemon/PokemonSearch.vue"

let wrapper

describe("PokemonSearch.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(PokemonSearch, { propsData: { value: "hello world" } })
  })
  it("render input", () => {
    wrapper.find('[data-testid="pokemon-name"]')
    expect(wrapper.exists()).toBe(true)
  })
})
