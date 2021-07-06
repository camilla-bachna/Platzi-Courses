var fruits = ["Apple", "Banana", "Cherries", "Strawberries"];

console.log(fruits); // ["Apple", "Banana", "Cherries", "Strawberries"]; index es 0, 1, 2, 3
console.log(fruits[0]); //Apple
console.log(fruits.length); //4

/* methods to change the array */

var moreFruits = fruits.push("Grapes");
console.log(fruits); // ["Apple", "Banana", "Cherries", "Strawberries", "Grapes"]
console.log(moreFruits); //5

var lastPosition = fruits.pop("Grapes");
console.log(fruits); // ["Apple", "Banana", "Cherries", "Strawberries"]
console.log(lastPosition); //Grapes

var firstPosition = fruits.unshift("Grapes");
console.log(fruits); //["Grapes", "Apple", "Banana", "Cherries", "Strawberries"]
console.log(firstPosition); //5

var removeFirstPosition = fruits.shift("Grapes"); // attention: var removeFirstPosition = fruits.shift("Apple"); will remove also Grapes, not Apple
console.log(fruits); //["Apple", "Banana", "Cherries", "Strawberries"]
console.log(removeFirstPosition); //Grapes

var position = fruits.indexOf("Cherries");
console.log(position); //2
console.log(fruits[2]); //Cherries
