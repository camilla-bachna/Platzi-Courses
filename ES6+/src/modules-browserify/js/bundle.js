(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function calculatorOfSavings(income, livingcosts, groceries, expenses, extras) {
  var calculateSavings = income - livingcosts - groceries - expenses - extras;
  return calculateSavings;
}

module.exports = calculatorOfSavings;

},{}],2:[function(require,module,exports){
"use strict";

function inputValues() {
  //get input values
  var income = document.querySelector(".js-income");
  var incomeValue = income.value;
  var livingCosts = document.querySelector(".js-livingCosts");
  var livingCostsValue = livingCosts.value;
  var groceries = document.querySelector(".js-groceries");
  var groceriesValue = groceries.value;
  var expenses = document.querySelector(".js-expenses");
  var expensesValue = expenses.value;
  var extras = document.querySelector(".js-extras");
  var extrasValue = extras.value;
  var month = document.querySelector(".js-month");
  var monthValue = month.value;
  return [incomeValue, livingCostsValue, groceriesValue, expensesValue, extrasValue, monthValue];
}

module.exports = inputValues;

},{}],3:[function(require,module,exports){
"use strict";

var _calculatorOfSavings = _interopRequireDefault(require("./calculatorOfSavings"));

var _inputValues = _interopRequireDefault(require("./inputValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var buttonElement = document.querySelector(".js-buttonEvent");

function handleButtonClick() {
  var incomeValue = (0, _inputValues["default"])()[0];
  var livingCostsValue = (0, _inputValues["default"])()[1];
  var groceriesValue = (0, _inputValues["default"])()[2];
  var expensesValue = (0, _inputValues["default"])()[3];
  var extrasValue = (0, _inputValues["default"])()[4];
  var monthValue = (0, _inputValues["default"])()[5];
  var calculateSavings = (0, _calculatorOfSavings["default"])(incomeValue, livingCostsValue, groceriesValue, expensesValue, extrasValue);
  var result = document.querySelector(".js-result");
  result.innerHTML = "<p>Enhorabuena! En el mes ".concat(monthValue, " podr\xEDas ahorrar hasta ").concat(calculateSavings, " Euros.</p>");
  console.log(calculateSavings);
}

buttonElement.addEventListener("click", handleButtonClick);

},{"./calculatorOfSavings":1,"./inputValues":2}]},{},[3]);
