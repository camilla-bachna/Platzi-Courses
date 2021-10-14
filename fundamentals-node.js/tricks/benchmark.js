console.time("total");
let sum = 0;
console.time("bucle");
for (let i = 0; i < 1000000000; i++) {
  sum += 1;
}
console.timeEnd("bucle");
//bucle: 480.283ms

let sum2 = 0;
console.time("bucle2");
for (let j = 0; j < 1000000000; j++) {
  sum2 += 1;
}
console.timeEnd("bucle2");
//bucle2: 481.067ms

console.time("async");
console.log("Empieza el proceso asíncrono");
async().then(() => {
  console.timeEnd("async");
});

console.timeEnd("total");
//total: 962.715ms

function async() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Termina el proceso asíncrona");
      resolve();
    }),
      0;
  });
}

/* bucle: 480.499ms
bucle2: 479.386ms
Empieza el proceso asíncrono
total: 962.649ms
Termina el proceso asíncrona
async: 1.263ms */
