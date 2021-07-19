(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        "use strict";

        function calculatorOfSavings(
          income,
          livingcosts,
          groceries,
          expenses,
          extras
        ) {
          const calculateSavings =
            income - livingcosts - groceries - expenses - extras;
          return calculateSavings;
        }

        module.exports = calculatorOfSavings;
      },
      {},
    ],
    2: [
      function (require, module, exports) {
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
      },
      {},
    ],
    3: [
      function (require, module, exports) {
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
      },
      { "./calculatorOfSavings": 1, "./inputValues": 2 },
    ],
  },
  {},
  [3]
);
