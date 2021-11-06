import { shallowMount } from "@vue/test-utils"
import PokemonIconFav from "@/components/pokemon/PokemonIconFav.vue"

describe("PokemonIconFav.vue", () => {
  it("render props isFav is true", () => {
    const wrapper = shallowMount(PokemonIconFav, { propsData: { isFav: true } })
    const favActive = wrapper.find('[data-testid="fav-active"]')
    const favInactive = wrapper.find('[data-testid="fav-inactive"]')
    expect(favActive.exists()).toBe(true)
    expect(favInactive.exists()).toBe(false)
  })

  it("render props isFav is false", () => {
    const wrapper = shallowMount(PokemonIconFav, { propsData: { isFav: false } })
    const favActive = wrapper.find('[data-testid="fav-active"]')
    const favInactive = wrapper.find('[data-testid="fav-inactive"]')
    expect(favActive.exists()).toBe(false)
    expect(favInactive.exists()).toBe(true)
  })

  it("click in favActive send emit remove", () => {
    const wrapper = shallowMount(PokemonIconFav, { propsData: { isFav: true } })
    wrapper.find('[data-testid="fav-active"]').trigger("click")
    expect(wrapper.emitted()).toHaveProperty("remove")
    expect(wrapper.emitted().remove[0]).toEqual([])
  })

  it("click in favInactive send emit add", () => {
    const wrapper = shallowMount(PokemonIconFav, { propsData: { isFav: false } })
    wrapper.find('[data-testid="fav-inactive"]').trigger("click")
    expect(wrapper.emitted()).toHaveProperty("add")
    expect(wrapper.emitted().add[0]).toEqual([])
  })
})
