import { shallowMount } from "@vue/test-utils"
import PokemonEmptyList from "@/components/pokemon/PokemonEmptyList.vue"

describe("PokemonEmptyList.vue", () => {
  it("render text", () => {
    const wrapper = shallowMount(PokemonEmptyList)
    const message = wrapper.find('[data-testid="message"]')
    expect(message.text()).toEqual("You look lost on your journey!")
  })
})
