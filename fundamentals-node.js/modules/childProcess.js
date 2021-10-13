const { exec, spawn } = require("child_process");
//or const exec = require("child_process").exec;

//exec

exec("ls -la", (err, stdout, sterr) => {
  if (err) {
    console.error();
    return false;
  }
  console.log(stdout);
});
/* total 20
drwxrwxr-x  5 camillabachna camillabachna 4096 oct  8 11:59 .
drwxrwxr-x 18 camillabachna camillabachna 4096 oct  4 16:15 ..
drwxrwxr-x  2 camillabachna camillabachna 4096 oct  8 11:59 async
drwxrwxr-x  2 camillabachna camillabachna 4096 oct  7 16:09 concepts
-rw-rw-r--  1 camillabachna camillabachna    0 oct  7 16:00 .gitignore
drwxrwxr-x  2 camillabachna camillabachna 4096 oct 11 11:39 modules
-rw-rw-r--  1 camillabachna camillabachna    0 sep 20 10:49 README.md */

exec("node modules/console.js", (err, stdout, sterr) => {
  if (err) {
    console.error();
    return false;
  }
  console.log(stdout);
});
/* imprime añgo en la consola
es un alias de console.log
┌─────────┬───────────┬─────────┬─────┐
│ (index) │   name    │ surname │ age │
├─────────┼───────────┼─────────┼─────┤
│    0    │  'Luis'   │ 'Lora'  │ 22  │
│    1    │ 'Agustín' │ 'Morán' │ 19  │
└─────────┴───────────┴─────────┴─────┘
Weekdays
  [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
  ]
Este es un console.log fuera de console.group
Functions
  Empezamos
  function1
    Este es de la function 1
    Esto tambien
    Esto tambien
    function2
      Este es de la function 2
    Hemos vuelto a la 1
times: 1
times: 2
times: 3
times: 4
times: 5
times: 6
times: 7
times: 8
times: 1
100-elementos: 0.116ms */

//spawn
let process = spawn("ls", ["-la"]);

//console.log(process);
console.log(process.pid); //process id 14411
console.log(process.connected); //false

process.stdout.on("data", function (dato) {
  console.log("el proceso está muerto?", process.killed); //false
  console.log(dato.toString());
});

process.on("exit", function () {
  console.log("el proceso terminó");
});

/* 4650
false
el proceso está muerto? false
total 20
drwxrwxr-x  5 camillabachna camillabachna 4096 oct  8 11:59 .
drwxrwxr-x 18 camillabachna camillabachna 4096 oct  4 16:15 ..
drwxrwxr-x  2 camillabachna camillabachna 4096 oct  8 11:59 async
drwxrwxr-x  2 camillabachna camillabachna 4096 oct  7 16:09 concepts
-rw-rw-r--  1 camillabachna camillabachna    0 oct  7 16:00 .gitignore
drwxrwxr-x  2 camillabachna camillabachna 4096 oct 11 11:39 modules
-rw-rw-r--  1 camillabachna camillabachna    0 sep 20 10:49 README.md

el proceso terminó */
