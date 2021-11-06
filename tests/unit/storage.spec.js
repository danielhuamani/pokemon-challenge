import Storage from "@/storage"

describe("Storage", () => {
  it("Should get data based on the type of insert object", () => {
    Storage.set("test-array", ["a", "b", "c"], Object)
    Storage.set("test-dict", { a: "a" }, Object)
    expect(Storage.get("test-array", Object)).toEqual(["a", "b", "c"])
    expect(Storage.get("test-dict", Object)).toEqual({ a: "a" })
  })

  it("Should get data based on the type of insert string", () => {
    Storage.set("test-text", "text insert")
    expect(Storage.get("test-text")).toEqual("text insert")
  })
})
