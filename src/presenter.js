import bisiesto from "./bisiesto.js";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + bisiesto(firstNumber) + "</p>";
});
