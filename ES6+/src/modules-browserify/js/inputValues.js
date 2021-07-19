function inputValues() {
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
  return [
    incomeValue,
    livingCostsValue,
    groceriesValue,
    expensesValue,
    extrasValue,
    monthValue,
  ];
}
module.exports = inputValues;
