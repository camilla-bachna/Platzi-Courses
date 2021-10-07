console.log("Hola mundo");

/* setInterval(function () {
  console.log("Sigo activo");
}, 1000); */

let i = 0;
setInterval(function () {
  console.log(i);
  i++;
  if (i === 5) {
    console.log("forzamos error");
    let a = 3 + z;
  }
}, 1000);

console.log("Segunda instrucción");
