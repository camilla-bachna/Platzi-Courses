"use strict";

function calculateAverage(list) {
  /*  let sumNumbersList = 0;

  for (let i = 0; i < list.length; i++) {
    sumNumbersList = sumNumbersList + list[i];
  } */
  /*   for (listElement of list) {
    sumNumbersList = sumNumbersList + listElement;
  }
 */

  const sumNumbersList = list.reduce(function (
    accumulatedValue = 0,
    newElement
  ) {
    return accumulatedValue + newElement;
  });

  const averageNumber = sumNumbersList / list.length;

  console.log(sumNumbersList);
  console.log(averageNumber);
  return averageNumber;
}
