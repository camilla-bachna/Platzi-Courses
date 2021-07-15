"use strict";

/* let listOfWages = [];
console.log(colombia);
for (people of colombia) {
  listOfWages.push(people.salary);
}

console.log(listOfWages); */

console.group("Wages");
console.log(colombia);
console.groupEnd();

//calculator mediana
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

//mediana general
const wagesColombia = colombia.map(function (people) {
  return people.salary;
});

//sort numbers
const wagesColombiaSorted = wagesColombia.sort(function (wage1, wage2) {
  return wage1 - wage2;
});
console.group("Wages sorted");
console.log(wagesColombiaSorted);
console.groupEnd();

//mediana

//helpers o utils (odd or even)
function isEven(number) {
  /*   if (number % 2 === 0) {
    return true;
  } else {
    return false;
  } */
  return number % 2 === 0;
}

function medianaWages(list) {
  const middle = parseInt(list.length / 2);
  if (isEven(list.length)) {
    const personInMiddle1 = list[middle - 1];
    const personInMiddle2 = list[middle];
    const mediana = calculateMediana([personInMiddle1, personInMiddle2]);
    return mediana;
  } else {
    const personInMiddle = list[middle];
    return personInMiddle;
  }
}

const medianaWagesColombia = medianaWages(wagesColombiaSorted);

console.group("Wages mediana");
console.log(medianaWagesColombia);
console.groupEnd();

//mediana top 10%
const spliceStart = (wagesColombiaSorted.length * (100 - 10)) / 100;
const spliceCount = wagesColombiaSorted.length - spliceStart;

/* function calculatePercent(percent, total) {
  const percentInDecimal = percent / 100;
  const calculatePercent = total * percentInDecimal;
  const numberWithPercentage = total - calculatePercent;
  return numberWithPercentage;
} */

const wagesTop10Percent = wagesColombiaSorted.splice(spliceStart, spliceCount);
const medianaTop10WagesColombia = medianaWages(wagesTop10Percent);

console.group("Wages mediana top 10");
console.log(medianaTop10WagesColombia);
console.groupEnd();

//difference between mediana and mediana of top 10
const differenceMediana = medianaTop10WagesColombia - medianaWagesColombia;

console.group("Difference mediana");
console.log(differenceMediana);
console.groupEnd();

//paint
const result = document.getElementById("result");
result.innerText = `La mediana de los salarios es ${medianaWagesColombia} y la mediana de los salarois de top 10 es ${medianaTop10WagesColombia}.`;
