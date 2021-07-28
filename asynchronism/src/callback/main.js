"use strict";

function sum(number1, number2) {
  return number1 + number2;
}

function calculate(number1, number2, callback) {
  //convention use name callback
  return callback(number1, number2);
}

console.log(calculate(2, 2, sum)); //4

function date(callback) {
  console.log(new Date()); //2021-07-28T13:46:27.323Z
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow); //2021-07-28T13:46:30.325Z  with a time-difference of 3 seconds
}

date(printDate);
