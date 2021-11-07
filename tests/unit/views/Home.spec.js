import { shallowMount } from "@vue/test-utils"
import Home from "@/views/Home.vue"

describe("Home.vue", () => {
  it("render text", () => {
    const wrapper = shallowMount(Home)
    const message = wrapper.find('[data-testid="welcome"]')
    expect(message.text()).toEqual("Welcome to Pokédex")
  })
})
