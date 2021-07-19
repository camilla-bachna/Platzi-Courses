//includes
const numbers = [1, 2, 3, 4, 7, 8];
const value = 7;

if (numbers.includes(value)) {
  console.log(`Si se encuentra el valor ${value}.`);
} else {
  console.log(`No se encuentra el valor ${value}.`);
}
//Si se encuentra el valor 7

//Pow
const base = 4;
const exponent = 3;

function pow(base, exponent) {
  const result = base ** exponent;
  return result;
}

console.log(`El resultado es ${pow(base, exponent)}.`); //El resultado es 64.
