"use strict";
function calculateMediana(list) {
  const sumNumbersList = list.reduce(function (
    accumulatedValue = 0,
    newElement
  ) {
    return accumulatedValue + newElement;
  });

  const averageNumber = sumNumbersList / list.length;
  return averageNumber;
}

const list = [200, 40000000, 100, 500];

//order list with for
function order(list) {
  let number = 0;
  for (let i = 0; i <= list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] > list[j + 1]) {
        number = list[j];
        console.log(number);
        list[j] = list[j + 1];
        console.log(list[j]);
        list[j + 1] = number;
        console.log(list[j + 1], number);
      }
    }
  }
  return list;
}

order(list); //[100, 200, 500, 40000000]

//order list with sort

/* list.sort(function (number1, number2) {
  return number1 - number2;
});
console.log(list); */

function calculateMediana(list) {
  const halfList = parseInt(list.length / 2);
  console.log(halfList);

  function isEven(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana;
  if (isEven(list.length)) {
    const element1 = list[halfList - 1];
    const element2 = list[halfList];
    const averageNumberOfElements = calculateMediana([element1, element2]);
    console.log(averageNumberOfElements);
    mediana = averageNumberOfElements;
  } else {
    mediana = list[halfList];
  }
}
