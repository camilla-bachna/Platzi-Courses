"use strict";

function calculatorOfSavings(income, livingcosts, groceries, expenses, extras) {
  const calculateSavings = income - livingcosts - groceries - expenses - extras;
  return calculateSavings;
}

function addEventListenerCalculate() {
  //get input values
  const income = document.querySelector(".js-income");
  const incomeValue = income.value;

  const livingCosts = document.querySelector(".js-livingCosts");
  const livingCostsValue = livingCosts.value;

  const groceries = document.querySelector(".js-groceries");
  const groceriesValue = groceries.value;

  const expenses = document.querySelector(".js-expenses");
  const expensesValue = expenses.value;

  const extras = document.querySelector(".js-extras");
  const extrasValue = extras.value;

  const month = document.querySelector(".js-month");
  const monthValue = month.value;

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
