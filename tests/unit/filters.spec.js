import { capitalize } from "@/filters.js"

describe("Filters", () => {
  it("capitalize with str", () => {
    expect(capitalize("pikachu")).toEqual("Pikachu")
  })
  it("capitalize without str ", () => {
    expect(capitalize(22)).toEqual("")
  })
})
