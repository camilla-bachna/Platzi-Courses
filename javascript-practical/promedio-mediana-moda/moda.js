/* Solution 1

const list = [1, 2, 3, 1, 2, 2, 3, 4, 2, 2, 1];

function calculateModa(list) {
  const listCount = {};
  list.map(function (element) {
    //function anonima
    if (listCount[element]) {
      //if it already exists add 1 more
      listCount[element] += 1;
    } else {
      listCount[element] = 1;
      console.log(listCount[element]); //1
    }
  });
  //listCount {1: 3, 2: 5, 3: 2, 4: 1}

  const listArray = Object.entries(listCount).sort(function (
    accumulatedValue,
    newValue
  ) {
    return accumulatedValue[1] - newValue[1];
  });

  const moda = listArray[listArray.length - 1];

  console.log(moda);
} */

/* Solution 2

function mode(list) {
  return list
    .sort(function (number1, number2) {
      //order numbers
      return (
        list.filter(function (listElement) {
          //creates a new array with all elements that pass the test implemented by the provided function.
          return listElement === number1;
        }).length -
        list.filter(function (listElement) {
          return listElement === number2;
        }).length
      );
    })
    .pop(); //removes the last element from an array and returns that element
}

mode(list);
console.log(mode(list)); */

//Solution 3

const array = [1, 2, 3, 1, 2, 2, 3, 4, 2, 2, 1];
const dupliactes = [];
const compare = [];

const findDuplicates = (array) => {
  for (number of array) {
    if (!compare.includes(number)) {
      //so if the number is not in the compare array add it
      compare.push(number);
    } else {
      // if it is already in compare array add it to duplicate array
      dupliactes.push(number);
    }
  }
  return compare;
};

findDuplicates(array);

console.log(compare);

for (let i = 0; i < array.length; i++) {
  let arrays = array.filter(function (listElement) {
    return listElement === compare[i];
  });
  console.log(arrays);
}

/* 
const originalList = [1, 2, 3, 1, 2, 2, 3, 4, 2, 2, 1];
let newList = [];
let otherList = [];

function findNumber(number, listOfNumbers) {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (number === listOfNumbers[i]) {
      console.log("in");
      return i;
    }
  }
  console.log("out");
  return -1;
}

console.log(findNumber(2, originalList)); */

/* for (listElement of originalList) {
  console.log(listElement);

  let numberFound = findNumber(listElement, newList);
  console.log(numberFound);
  if (numberFound === -1) {
    console.log("push");
    otherList.push(listElement);
    console.log(originalList);
    otherList.push(1);
    console.log(otherList);
  } else {
    l;
    console.log("new");
    newList[numberFound + 1] = newList[numberFound + 1] + 1;
  } 
} */
//console.log(newList);
