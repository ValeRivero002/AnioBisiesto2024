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
  it("deberia imprimir No es bisiesto al introducir 100", () => {
    expect(bisiesto(100)).toEqual("No Es Bisiesto");
  });
  it("deberia imprimir No es bisiesto al introducir los años divisibles por 100 pero no por 400", () => {
    expect(bisiesto(1700)).toEqual("No Es Bisiesto");
  });
  it("deberia imprimir es bisiesto al introducir 4", () => {
    expect(bisiesto(4)).toEqual("Es Bisiesto");
  });
  it("deberia imprimir es bisiesto al introducir los años divisibles por 4 pero no por 100", () => {
    expect(bisiesto(2012)).toEqual("Es Bisiesto");
  });
});
