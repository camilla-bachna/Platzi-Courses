//rangoMedio(x) = (min(x) + max(x)) / 2
const list = [1, 2, 3, 70, 1, 2, 2, 90, 3, 4, 2, 2, 1, 8, 115, 87];
const list2 = [2000, 232, 678, 90, 68, 47, 11, 26, 70, 58, 4, 5, 56];
//el dato con el menor valor es min = 1; mayor valor es 115 el medio rango sería (1 + 115) / 2 => 58

function findMinAndMaxValue(array) {
  let minNumber = array[0];
  let maxNumber = array[0];
  for (let listElement of array) {
    if (maxNumber < listElement) {
      maxNumber = listElement;
    } else if (minNumber > listElement) {
      minNumber = listElement;
    }
  }
  return [minNumber, maxNumber];
}

let values = findMinAndMaxValue(list);

const minValue = values[0];
const maxValue = values[1];
console.log(minValue, maxValue);
const rangoMedio = (minValue + maxValue) / 2;
console.log(rangoMedio);
