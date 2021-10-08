console.log("imprime añgo en la consola"); //imprime añgo en la consola

console.info("es un alias de console.log"); //es un alias de console.log

const code = 5;
console.error("Hubo un error", code);
//console.error(new Error("Asi también se declara un error", code));

//for potential errors
console.warn("Este es un warning");

//group data, useful if you have an array with a lot of data
const user = [
  {
    name: "Luis",
    surname: "Lora",
    age: 22,
  },
  {
    name: "Agustín",
    surname: "Morán",
    age: 19,
  },
];

console.table(user);

//can add various levels
console.group("Weekdays");
console.log([
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
]);
console.groupEnd("Weekdays");
console.log("Este es un console.log fuera de console.group");

console.group("Functions");
function function1() {
  console.group("function1");
  console.log("Este es de la function 1");
  console.log("Esto tambien");
  console.log("Esto tambien");
  function2();
  console.log("Hemos vuelto a la 1");
  console.groupEnd("function1");
}

function function2() {
  console.group("function2");
  console.log("Este es de la function 2");
  console.groupEnd("function2");
}

console.log("Empezamos");
function1();
console.groupEnd("Functions");

/* Functions
  Empezamos
  function1
    Este es de la function 1
    Esto tambien
    Esto tambien
    function2
      Este es de la function 2 
    Hemos vuelto a la 1*/

console.count("times");
console.count("times");
console.count("times");
console.count("times");
console.count("times");

/* times: 1
times: 2
times: 3
times: 4
times: 5 */

console.count("times");
console.count("times");
console.count("times");
console.countReset("times");
console.count("times");

/* times: 1
times: 2
times: 3
times: 1 */

function clearConsole() {
  setTimeout(() => {
    console.clear("Limpiando cada 5 segs");
  }, 5000);
}
clearConsole();

console.time("100-elementos");
for (let i = 0; i < 100; i++) {}
console.timeEnd("100-elementos");
//100-elementos: 0.062ms
