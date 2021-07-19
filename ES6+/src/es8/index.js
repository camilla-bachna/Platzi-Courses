//Object entries
const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana",
};

const entries = Object.entries(data);
console.log(entries);
/* retorna [
  [ 'frontend', 'Oscar' ],
  [ 'backend', 'Isabel' ],
  [ 'design', 'Ana' ]
] */
console.log(entries.length); //3

//Object values
const values = Object.values(data);
console.log(values); //[ 'Oscar', 'Isabel', 'Ana' ]
console.log(values.length); //3

//Object keys
const keys = Object.keys(data);
console.log(keys); //[ 'frontend', 'backend', 'design' ]
console.log(keys.length); //3

//Padding
const string = "hello";
console.log(string.padStart(7, "hi")); //hihello
console.log(string.padEnd(12, " -----")); //hello -----
console.log("food".padEnd(12, " -----"));

//example name
const name = "Camilla";
const lastname = "Bachna";
const complete_name = name.padEnd(
  name.length + lastname.length + 1,
  ` ${lastname}`
);
console.log(complete_name);

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");
console.log(maskedNumber); // expected output: "************5581"```

//Trailing comas
const obj = {
  name: "Oscar",
};

//Await y async
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld(); //could be more constantes with functions listed here
  console.log(hello);
};

helloAsync();

// to handle errors correctly
const anotherFunction = async () => {
  try {
    // her what we want to execute
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    // if there is n error
    console.log(error);
  }
};

anotherFunction();
