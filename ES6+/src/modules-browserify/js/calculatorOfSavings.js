"use strict";

function calculatorOfSavings(income, livingcosts, groceries, expenses, extras) {
  const calculateSavings = income - livingcosts - groceries - expenses - extras;
  return calculateSavings;
}

module.exports = calculatorOfSavings;
