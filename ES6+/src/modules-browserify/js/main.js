"use strict";
const calculatorOfSavings = require("./calculatorOfSavings");
const inputValues = require("./inputValues");

const buttonElement = document.querySelector(".js-buttonEvent");

function handleButtonClick() {
  const incomeValue = inputValues()[0];
  const livingCostsValue = inputValues()[1];
  const groceriesValue = inputValues()[2];
  const expensesValue = inputValues()[3];
  const extrasValue = inputValues()[4];
  const monthValue = inputValues()[5];

  const calculateSavings = calculatorOfSavings(
    incomeValue,
    livingCostsValue,
    groceriesValue,
    expensesValue,
    extrasValue
  );

  const result = document.querySelector(".js-result");
  result.innerHTML = `<p>Enhorabuena! En el mes ${monthValue} podrías ahorrar hasta ${calculateSavings} Euros.</p>`;
  console.log(calculateSavings);
}

buttonElement.addEventListener("click", handleButtonClick);
