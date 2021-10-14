//create basic buffer
let buffer = Buffer.alloc(1);
let buffer2 = Buffer.alloc(4);
console.log(buffer); //<Buffer 00>
console.log(buffer2); //<Buffer 00 00 00 00>

//Data in an array
let buffer3 = Buffer.from([1, 2, 3, 5]);
console.log(buffer3); //<Buffer 01 02 03 05>

//Data type string
let buffer4 = Buffer.from("Hola");
console.log(buffer4); //<Buffer 48 6f 6c 61>
console.log(buffer4.toString()); //Hola

//alphabet
let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < abc.length; i++) {
  abc[i] = i + 97; //give each position of buffer a number, 97 is a, 98 is b
}

console.log(abc); //<Buffer 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75 76 77 78 79 7a>
//In the console, the data is displayed in hexadecimal format.
console.log(abc.toString()); //abcdefghijklmnopqrstuvwxyz
