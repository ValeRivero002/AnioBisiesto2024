import bisiesto from "./bisiesto.js";

describe("bisiesto", () => {
  it("deberia el mismo numero que se introduce", () => {
    expect(bisiesto(3)).toEqual("3");
  });
});
