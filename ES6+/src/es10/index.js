//array.flat()
const array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat()); //[ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array.flat(2)); //[ 1, 2, 3, 1, 2, 3, 1, 2, 3 ]

//array.flatMap()
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((value) => [value, value * 2])); //[ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ]

// aplanador y mapeador de arreglos
const arr1 = [1, 2, 3, 4];
console.log(arr1.map((x) => [x * 2])); //[ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]
console.log(arr1.flatMap((x) => [x * 2])); //[ 2, 4, 6, 8 ]

//string.trimStart()
const hello = "    hello world";
console.log(hello); //    hello world
console.log(hello.trimStart()); //hello world

//string.trimEnd()
const hello2 = "hello world!      ";
console.log(hello2); //hello world!.....
console.log(hello2.trimEnd()); //hello world!

//trim
const hello3 = "    Hello world    ";
console.log(hello3.trim()); //Hello world

//catch forma antigua
try {
  console.log("hello");
} catch (error) {
  console.log(error);
}

//es10
try {
  console.log("hello");
} catch {
  console.log(error);
}

try {
  throw "Soy un error forzado";
} catch {
  console.log("Hello"); //console.log(error) => ReferenceError: error is not defined
}

//Object.fromEntries()
const entries = [
  ["name", "oscar"],
  ["age", 32],
];
console.log(Object.fromEntries(entries)); //{ name: 'oscar', age: 32 }

//Symbol.description
const mySymbol = `My Symbol`;
const symbol = Symbol(mySymbol);
console.log(symbol.description); //My Symbol
