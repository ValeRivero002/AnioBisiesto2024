import bisiesto from "./bisiesto.js";

describe("bisiesto", () => {
  it("deberia el mismo numero que se introduce", () => {
    expect(bisiesto(3)).toEqual("3");
  });
  it("deberia imprimir es bisiesto al introducir 400", () => {
    expect(bisiesto(400)).toEqual("Es Bisiesto");
  });
  it("deberia imprimir es bisiesto al introducir cualquier numero divisible por 400", () => {
    expect(bisiesto(800)).toEqual("Es Bisiesto");
  });
});
