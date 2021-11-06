import { shallowMount } from "@vue/test-utils"
import PokemonFooter from "@/components/pokemon/PokemonFooter.vue"

describe("PokemonFooter.vue", () => {
  it("trigger click in button all list to change view", () => {
    const wrapper = shallowMount(PokemonFooter, { propsData: { view: "ALL_LIST" } })
    wrapper.find('[data-testid="button-all-list"]').trigger("click")
    expect(wrapper.emitted()).toHaveProperty("changeView")
    expect(wrapper.emitted().changeView[0]).toEqual(["ALL_LIST"])
  })

  it("trigger click in button favorites list to change view", () => {
    const wrapper = shallowMount(PokemonFooter, { propsData: { view: "FAVORITES" } })
    wrapper.find('[data-testid="button-favorite"]').trigger("click")
    expect(wrapper.emitted()).toHaveProperty("changeView")
    expect(wrapper.emitted().changeView[0]).toEqual(["FAVORITES"])
  })
})
